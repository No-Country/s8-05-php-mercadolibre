'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { useState } from 'react';
import { setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function PasswordPage() {
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete('password'));
    dispatch(setStep(5));
    dispatch(setData({ password }));
    push('/register');
  };

  return (
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
      <button type="submit" className="bg-blue text-white py-3 rounded-full" onClick={handleSubmit}>
        Continuar
      </button>
    </LayoutAuth>
  );
}
