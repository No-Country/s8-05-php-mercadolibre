<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Subcategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $dispatchData = [
            'state' => fake()->state,
            'city' => fake()->city,
            'address' => fake()->address,
        ];

        $shippingCost = fake()->randomFloat(2, 100, 400);

        return [
            //'contact' => fake()->sentence(),
            //'phone' => fake()->e164PhoneNumber(),
            'status' => fake()->randomElement([
                'PENDIENTE',
                'RECIBIDO',
                'ENVIADO',
                'ENTREGADO',
                'CANCELADO'
            ]),
            'dispatch_type' => fake()->randomElement([
                'DOMICILIO',
                'RETIRO DEPOSITO',
                'DEPOSITO SUCURSAL'
            ]),
            // 'dispatch_address' => json_encode($dispatchData),
            'shipping_cost' => $shippingCost,
            'total' => fake()->randomNumber(2),
            'user_id' => User::all()->random()->id
        ];
    }
}
