'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Avatar } from 'flowbite-react';
import { apiClient } from '@/utils/apiClient';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post('/login', { email, password });
      // Aquí puedes procesar la respuesta de la API y realizar acciones como guardar el token de acceso en el estado global o en una cookie
      console.log(response.data);
      // Redirigir a la página principal después del inicio de sesión exitoso
      router.push('/');
    } catch (error) {
      // Manejar errores de la API y mostrar un mensaje de error al usuario
      setError('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  };

  return (

    <div className="container w-full max-w-md items-center justify-center min-h-screen px-6 mx-auto">
      
      <h1 className="mt-3 text-2xl text-center font-semibold capitalize sm:text-3xl">
        Mercado Country
      </h1>

      <h1 className="mt-6 text-xl font-semibold sm:text-2xl">
        Ingresa tú email, teléfono o usuario
      </h1>
        <form>
        <div className="relative flex items-center mt-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-3 text-gray-700 bg-white border border-neutral-400 rounded-lg focus:border-neutral-700 focus:ring-0"
            placeholder="Escribe tu e-mail, teléfono o usuario"
          />
        </div>

        <h2 className="mt-6 text-xl font-semibold sm:text-2xl">Contraseña</h2>

        <div className="relative flex items-center mt-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-3 text-gray-700 bg-white border border-neutral-400 rounded-lg focus:border-neutral-700 focus:ring-0"
            placeholder="Contraseña"
          />
        </div>

        {error && (
          <div className="text-center">
            <p className="text-red-500 mt-2 text-xs">{error}</p>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={handleLogin}
            className="w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 rounded-3xl"
          >
            Iniciar sesión
          </button>
          <div className="mt-6 text-center">
            <a href="/register" className="text-sm text-blue-500 hover:underline">
              ¿No tienes cuenta? Regístrate
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

