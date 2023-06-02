<?php

namespace App\Concerns;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;

trait OrderAdapter
{

    /**
     * Retorna el order pedido por id
     *
     * @param integer $id
     * @return Order
     */
    public function view(int $id): Order
    {
        $order = Order::select(
            'id',
            'status',
            'dispatch_address',
            'dispatch_type',
            'details_products',
            'shipping_cost',
            'total',
            'user_id'
        )->find($id);

        $order->dispatch_address = json_decode($order->dispatch_address);
        $order->details_products = json_decode($order->details_products);

        return $order;
    }

    /**
     * Crea en DB una nueva order
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request): void
    {
        // Reemplazar los Values STRINGS por los values que llena el Usuario en su Carrito de Compras
        $detailsProducts = [
            'name_product' => 'name_product',
            'description' => 'description',
            'price' => 'price',
            'stock' => 'stock',
        ];

        $order = new Order();

        $order->user_id = auth()->user()->id;
        $order->dispatch_type = $request->dispatch_type;    // recibe un String 'RETIRO EN SUCURSAL' o 'A DOMICILIO'
        $order->shipping_cost = 0;                  // retiro en sucursal
        $order->details_products = json_encode($detailsProducts);

        if ($request->dispatch_type == 'A DOMICILIO') {
            $order->shipping_cost = $request->shipping_cost;

            // Reemplazar los values por la direccion del envío
            $dispatchData = [
                'state' => fake()->state,
                'city' => fake()->city,
                'address' => fake()->address,
            ];

            $order->dispatch_address = json_encode($dispatchData);
        }

        $order->total = $request->shipping_cost + 1;   // 'reemplazar el 1 por el precio total que existe en el carrito (todos los products)'

        $order->save();
    }
}
