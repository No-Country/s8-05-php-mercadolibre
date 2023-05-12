<?php

use Tests\TestCase;
use App\Models\User;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_un_usuario_se_puede_registrar()
    {
        $password = bcrypt('password');

        // Preparamos los Datos de un usuario
        $data = [
            'name' => 'Usuario',
            'lastname' => 'Publico',
            'email' => 'user@user.com',
            'password' => $password,
            'password_confirmation' => $password
        ];
        // Validamos que el usuario no se encuentre registrado previamente
        $this->assertDatabaseMissing('users', ['email' => $data['email']]);

        // Nos aseguramos que el usuario envie una peticion POST a nuestra API
        $response = $this->post(route('auth.register'), $data);

        // Registramos al usuario si pasa la validación
        $this->assertDatabaseHas('users', ['email' => $data['email']]);

        // Que la respuesta sea correcta
        $response->assertExactJson([
            // 'message' => 'Gracias por registrarte en MercadoCountry. Te hemos enviado las instrucciones para confirmar tu cuenta a tu casilla de email.'
            'message' => 'Todo ok'
        ]);

        $response->assertStatus(201);
    }
}
