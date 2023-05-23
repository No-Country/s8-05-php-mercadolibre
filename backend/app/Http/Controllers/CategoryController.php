<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            $categories = Category::select('id', 'name')
                ->with(['subcategory'])
                ->get();

            return new CategoryCollection($categories);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $category = Category::with('products', 'subcategory')
                ->find($id);

            return new CategoryResource($category);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }

    public function store(CategoryRequest $request)
    {
        try {
            $category = Category::create($request->validated());

            return $this->response->success('creado', new CategoryResource($category));
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }

    public function update(CategoryRequest $request, int $id)
    {
        try {
            $category = Category::find($id);

            $category->update($request->validated());

            return $this->response->success('actualizado', new CategoryResource($category));
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $category = Category::find($id);

            $category->delete();

            return $this->response->success('eliminado');
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
}
