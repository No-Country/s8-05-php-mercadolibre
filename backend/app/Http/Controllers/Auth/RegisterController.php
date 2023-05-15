<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\UserCodeRequest;
use App\Http\Requests\Auth\ValidateNameRequest;
use App\Http\Requests\Auth\ValidateEmailRequest;
use App\Http\Requests\Auth\ValidatePasswordRequest;

class RegisterController extends Controller
{
    /**
     * Validamos los nombres y apellido
     *
     * @param ValidatePasswordRequest $request
     * @return JsonResponse
     */
    public function validateNames(ValidateNameRequest $request): JsonResponse
    {
        return response()->json([
            'status' => '1'
        ]);
    }

    /**
     * Validamos el email
     *
     * @param ValidatePasswordRequest $request
     * @return JsonResponse
     */
    public function validateEmail(ValidateEmailRequest $request)
    {
        if (!empty($request)) {
            // Añadir logica para enviar instrucciones al correo
            $user = User::create([
                'email' => $request->email,
                'code' => Str::upper(Str::random(4))
            ]);

            //$user->notify(SendCodeNotification::class, $user);

            // Respuesta si la validacion pasa
            return response()->json([
                'message' => 'Se ha enviado un codigo a tu casilla de correo electronico.'
            ]);
        }
    }

    /**
     * Validamos la password
     *
     * @param ValidatePasswordRequest $request
     * @return JsonResponse
     */
    public function validatePassword(ValidatePasswordRequest $request): JsonResponse
    {
        return response()->json([
            'status' => '1'
        ]);
    }

    public function confirmEmail(UserCodeRequest $request)
    {
        try {
            $user = User::where('code', $request->validated())->first();

            if (!$user) {
                return response()->json([
                    'message' => 'El codigo no es válido'
                ], 422);
            }

            $user->email_verified_at = Carbon::now();
            $user->code = null;
            $user->save();

            return response()->json([
                'status' => '1'
            ]);
        } catch (\Exception $e) {
            Log::error('error', $e->getMessage());

            return response()->json([
                'message' => 'Ocurrio un error interno.'
            ], 500);
        }
    }

    public function registerUser(RegisterRequest $request): JsonResponse
    {
        try {
            $user = User::where('email', $request->email)->firstOrFail();

            $user->update([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'code' => null
            ]);

            return response()->json([
                'message' => 'Te has registrado con satisfactoriamente.'
            ], 201);
        } catch (\Exception $e) {
            // Guardar los Logs de Errors
            Log::error('error: ' . $e->getMessage());

            return response()->json([
                'message' => 'Ocurrio un error interno.'
            ], 500);
        }
    }
}
