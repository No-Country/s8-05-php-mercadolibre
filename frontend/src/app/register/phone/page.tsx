'use client';

import LayoutAuth from '@/Components/LayoutAuth';
import { BaseSyntheticEvent, useState } from 'react';
import { setComplete, setData, setStep } from '@/redux/registerSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

type phoneState = {
  first: string;
  second: string;
};

export default function PhonePage() {
  const [phone, setPhone] = useState<phoneState>({
    first: '54',
    second: '',
  });

  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = () => {
    dispatch(setComplete('phone'));
    dispatch(setStep(4));
    dispatch(setData({ phone: `+${phone.first}-${phone.second}` }));
    push('/register');
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;
    setPhone({ ...phone, [name]: value });
  };

  return (
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
        className="bg-darkBlue text-white py-3 rounded-full"
        onClick={handleSubmit}
      >
        Continuar
      </button>
    </LayoutAuth>
  );
}
