<?php

namespace App\Http\Resources\Address;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Address\StateCityResource;

class StateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'type' => 'state',
            'id' => $this->id,
            'attributes' => [
                'state' => $this->name,
            ],
            'relationships' => [
                'cities' => StateCityResource::collection($this->whenLoaded('cities'))
            ],
            // 'links' => [
            //     'self' => route('states.show', $this->id)
            // ]
        ];
    }
}
