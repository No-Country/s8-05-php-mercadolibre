'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { getStep, setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/utils/apiClient';

type phoneState = {
  first: string;
  second: string;
};

export default function Page() {
  const [phone, setPhone] = useState<phoneState>({
    first: '54',
    second: '',
  });

  const dispatch = useDispatch();
  const step = useSelector(getStep);

  const { push } = useRouter();

  const handleSubmit = () => {
    apiClient
      .post('/validate-phone', { phone: Number(`${phone.first}${phone.second}`) })
      .then((data) => {
        dispatch(setComplete('phone'));
        step <= 3 && dispatch(setStep(4));
        dispatch(setData({ phone: Number(`${phone.first}${phone.second}`) }));
        push('/register');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;
    setPhone({ ...phone, [name]: value });
  };

  const [currentStep, setCurrentStep] = useState<boolean>(false);

  useEffect(() => {
    setCurrentStep(step >= 3);
  }, [step]);

  return currentStep ? (
    <LayoutAuth>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-semibold">Validá tu teléfono</h1>
          <h2>Podrás usarlo para ingresar a tu cuenta</h2>
        </div>
        <div className="flex flex-row gap-2">
          <select className="rounded-lg" onChange={handleChange} name="first">
            <option value="54">+54</option>
            <option value="55">+55</option>
            <option value="56">+56</option>
          </select>
          <input
            type="text"
            className="w-full rounded-lg"
            placeholder="+xx xxx xxx-xxxx"
            value={phone.second}
            onChange={handleChange}
            name="second"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-darkBlue text-white py-3 rounded-full hover:border"
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
