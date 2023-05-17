<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::select('id', 'name', 'description', 'price', 'stock', 'brand_id', 'subcategory_id')
                ->where('status', Product::PUBLISH)
                ->limit(10)
                ->get()
                ->shuffle();

            return ProductCollection::make($products);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
}
