<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Brand>
 */
class BrandFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->unique()->randomElement([
            'Abarth', 'Alfa Romeo', 'Aston Martin', 
            'Audi', 'Bentley', 'BMW', 'Cadillac', 'Caterham', 
            'Chevrolet', 'Citroen', 'Dacia', 'Ferrari', 
            'Fiat', 'Ford', 'Honda', 'Infiniti', 'Isuzu', 'Iveco', 'Jaguar', 
            'Jeep', 'Kia', 'KTM', 'Lada', 'Lamborghini', 'Lancia', 
            'Land Rover', 'Lexus', 'Lotus'
        ]);
        return [
            'name' => $name,
            'slug' => Str::slug($name)
        ];
    }
}
