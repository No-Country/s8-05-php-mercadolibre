<?php

namespace App\Http\Resources\Categories;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Products\ProductCategoryResource;
use App\Http\Resources\Categories\SubcategoryCategoryResource;


class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'type' => 'category',
            'id' => $this->id,
            'attributes' => [
                'name' => $this->name,
                'slug' => $this->slug,
            ],
            'relationships' => [
                'subcategories' => SubcategoryCategoryResource::collection($this->whenLoaded('subcategory')),
                'products' => ProductCategoryResource::collection($this->whenLoaded('products')),
            ],
            'links' => [
                'self' => route('categories.show', $this->id),
            ],
        ];
    }
}
