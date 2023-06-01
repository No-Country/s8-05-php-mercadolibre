'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { BaseSyntheticEvent, use, useEffect, useState } from 'react';
import { getStep, setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/utils/apiClient';

export default function Page() {
  const [email, setEmail] = useState<string>('');

  const [codeStep, setCodeStep] = useState<boolean>(false);

  const [code, setCode] = useState<string>('');

  const dispatch = useDispatch();
  const step = useSelector(getStep);

  const { push } = useRouter();

  const handleSubmit = () => {
    if (!codeStep) {
      apiClient
        .post('/validate-email', { email })
        .then((data) => {
          console.log(data);
          setCodeStep(true);
        })
        .catch((err) => console.log(err));
    } else {
      apiClient
        .post('/confirm-email', { code })
        .then((data) => {
          console.log(data);
          dispatch(setComplete('email'));
          step <= 1 && dispatch(setStep(2));
          dispatch(setData({ email }));
          push('/register');
        })
        .catch((err) => console.log(err));
    }
  };

  const handleInput = (e: BaseSyntheticEvent) =>
    codeStep ? setCode(e.target.value) : setEmail(e.target.value);

  const [currentStep, setCurrentStep] = useState<boolean>(false);

  useEffect(() => {
    setCurrentStep(step >= 1);
  }, [step]);

  return currentStep ? (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">
            {codeStep ? 'Ingresá el codigo' : 'Agregá tu e-mail'}
          </h1>
          <h2>{codeStep ? 'Revisa tu casilla de email' : 'Recibirás información de tu cuenta'}</h2>
        </div>
        <input
          type="text"
          className="w-full rounded-lg"
          placeholder={codeStep ? 'Codigo' : '"usuario@gmail.com"'}
          value={codeStep ? code : email}
          onChange={handleInput}
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
