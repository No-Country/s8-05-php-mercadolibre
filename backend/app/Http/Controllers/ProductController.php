<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::select('id', 'name', 'description', 'price', 'stock', 'brand_id', 'subcategory_id')
                ->where('status', Product::PUBLISH)
                ->limit(10)
                ->get();


            return new ProductCollection($products);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $products = Product::find($id);

            return new ProductResource($products);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
    public function store(ProductRequest $request) //
    {
        try {
            Product::create($request->all());

            return $this->response->success('creado');
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
    public function update(ProductRequest $request, int $id)
    {
        try {   
            $product = Product::find($id);

            $product->update($request->all());

            return $this->response->success('actualizado');
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
    public function destroy(Product $product)
    {
        try {
            $product->delete();

            return $this->response->success('eliminado');
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
}
