'use client';

import { BaseSyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Avatar } from 'flowbite-react';
import { apiClient } from '@/utils/apiClient';
import LayoutAuth from '@/Components/LayoutAuth';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [nextStep, setNextStep] = useState(false);

  const router = useRouter();

  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (!nextStep) {
      setNextStep(true);
    } else {
      apiClient
        .post('/login', { email, password })
        .then((data) => {
          console.log(data);
          router.push('/');
        })
        .catch(() => setError('Credenciales incorrectas. Por favor, intenta nuevamente.'));
    }
  };

  return (
    <LayoutAuth>
      <div>
        {!nextStep ? (
          <>
            <h1 className="mt-6 text-xl font-semibold sm:text-2xl">
              Ingresa tú email, teléfono o usuario
            </h1>
            <div className="relative flex items-center mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-3 text-gray-700 bg-white border border-neutral-400 rounded-lg focus:border-neutral-700 focus:ring-0"
                placeholder="Escribe tu e-mail, teléfono o usuario"
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-xl font-semibold sm:text-2xl">Contraseña</h1>

            <div className="relative flex items-center mt-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-3 text-gray-700 bg-white border border-neutral-400 rounded-lg focus:border-neutral-700 focus:ring-0"
                placeholder="Contraseña"
              />
            </div>
          </>
        )}

        {error && (
          <div className="text-center">
            <p className="text-red-500 mt-2 text-xs">{error}</p>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={handleLogin}
            className="w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 rounded-3xl"
          >
            {nextStep ? 'Ingresar' : 'Siguiente'}
          </button>
          <div className="mt-6 text-center">
            <a href="/register" className="text-sm text-blue-500 hover:underline">
              ¿No tienes cuenta? Regístrate
            </a>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
