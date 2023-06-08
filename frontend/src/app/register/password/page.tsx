'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { useEffect, useState } from 'react';
import { getStep, setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/utils/apiClient';

export default function Page() {
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const step = useSelector(getStep);

  const { push } = useRouter();

  const handleSubmit = () => {
    apiClient
      .post('/validate-password', { password })
      .then((data) => {
        dispatch(setComplete('password'));
        step <= 4 && dispatch(setStep(5));
        dispatch(setData({ password }));
        push('/register');
      })
      .catch((err) => console.log(err));
  };

  const [currentStep, setCurrentStep] = useState<boolean>(false);

  useEffect(() => {
    setCurrentStep(step >= 4);
  }, [step]);

  return currentStep ? (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Creá tu contraseña</h1>
          <h2>Mantendrás tu cuenta protegida</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-darkBlue text-white py-3 rounded-full"
        onClick={handleSubmit}
      >
        Continuar
      </button>
    </LayoutAuth>
  ) : (
    <div className="w-full h-screen justify-center items-center flex flex-col gap-2">
      <span className="text-3xl">ERROR - Ruta restringida</span>
      <div className="flex gap-5">
        <Link href={'/'}>HOME</Link>
        <Link href={'/register'}>REGISTRO</Link>
      </div>
    </div>
  );
}
