'use client';

import { useState } from 'react';
import { Badge, Avatar } from 'flowbite-react';
import { apiClient } from '@/utils/apiClient';

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      apiClient
        .post('/login', { email, password })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';
  const showError = !isEmailValid && isEmailTouched;

  const handleEmailBlur = () => setIsEmailTouched(true);

  return (
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form className="w-full max-w-md">
        <h1 className="mt-3 text-2xl text-center font-semibold capitalize sm:text-3xl">
          Mercado Country
        </h1>

        {step === 1 && (
          <>
            <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
              Ingresa tú email, teléfono o usuario
            </h2>

            <div className="relative flex items-center mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                className="block w-full py-3 text-gray-700 bg-white border border-neutral-400 rounded-lg focus:border-neutral-700 focus:ring-0"
                placeholder="Escribe tu e-mail, teléfono o usuario"
              />
            </div>
            {showError && (
              <div className="text-center">
                <p className="text-red-500 mt-2 text-xs">
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="mt-6 text-xl font-semibold sm:text-2xl">Contraseña</h2>

            <div className="flex flex-wrap gap-2">
              <Avatar rounded={true} size="xs" />
              <p className="mt-2 text-xs font-semibold">{email}</p>
            </div>

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

        <div className="mt-6">
          {step === 1 && (
            <button
              onClick={handleContinue}
              disabled={!isEmailValid}
              className={`w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-3xl ${
                !isEmailValid
                  ? 'opacity-50 rounded-3xl cursor-not-allowed'
                  : 'hover:bg-blue-700 rounded-3xl'
              } focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 rounded-3xl`}
            >
              Continuar
            </button>
          )}
          {step === 2 && (
            <button
              onClick={handleContinue}
              disabled={!isPasswordValid}
              className={`w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-3xl ${
                !isEmailValid
                  ? 'opacity-50 rounded-3xl cursor-not-allowed'
                  : 'hover:bg-blue-700 rounded-3xl'
              } focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 rounded-3xl`}
            >
              Iniciar sesión
            </button>
          )}
          <div className="mt-6 text-center">
            <a href="/register" className="text-sm text-blue-500 hover:underline">
              ¿No tienes cuenta?, Registrate
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
