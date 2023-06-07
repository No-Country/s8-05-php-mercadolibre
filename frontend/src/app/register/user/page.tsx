'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { getStep, setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/utils/apiClient';

type userState = {
  name: string;
  lastName: string;
};

export default function Page() {
  const [user, setUser] = useState<userState>({
    name: '',
    lastName: '',
  });

  const dispatch = useDispatch();
  const step = useSelector(getStep);

  const { push } = useRouter();

  const handleSubmit = () => {
    apiClient
      .post('/validate-names', user)
      .then((data) => {
        dispatch(setComplete('user'));
        step <= 2 && dispatch(setStep(3));
        dispatch(setData({ name: user.name, lastName: user.lastName }));
        push('/register');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [currentStep, setCurrentStep] = useState<boolean>(false);

  useEffect(() => {
    setCurrentStep(step >= 2);
  }, [step]);

  return currentStep ? (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Escribe tu nombre</h1>
          <h2>Contanos cómo querés que te llamemos</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="Nombre"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder="Apellido"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
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
