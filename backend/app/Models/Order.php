<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\{City, State, User};

class Order extends Model
{
    use HasFactory;

    // Columna  =>  'dispatch_address'
    const DOMICILIO     = 'A DOMICILIO';
    const SUCURSAL      = 'RETIRO EN SUCURSAL';

    // Columna  =>  'status'
    const PENDIENTE     = 'PENDIENTE';
    const RECIBIDO      = 'RECIBIDO';
    const ENVIADO       = 'ENVIADO';
    const ENTREGADO     = 'ENTREGADO';
    const CANCELADO     = 'CANCELADO';

    protected $guarded = ['id', 'status', 'created_at', 'updated_at'];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
