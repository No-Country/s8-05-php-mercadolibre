'use client';

import { VscMail } from 'react-icons/vsc';
import { BiUserCircle } from 'react-icons/bi';
import { GiSmartphone } from 'react-icons/gi';
import { SlLock } from 'react-icons/sl';

import Card from '@/Components/Register/Card';
import LayoutAuth from '@/Components/LayoutAuth';

import { useSelector } from 'react-redux';
import { getComplete, getData, getStep } from '@/redux/registerSlice';
import { useEffect, useState } from 'react';

export default function Register() {
  const isComplete = useSelector(getComplete);
  const step = useSelector(getStep);
  const registerData = useSelector(getData);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (Object.values(isComplete).every((value) => value)) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, []);

  return (
    <LayoutAuth>
      <h1 className="text-2xl font-semibold">Completá los datos para crear tu cuenta</h1>
      <div className="flex flex-col gap-5 lg:gap-1">
        <Card
          title={`${registerData.mail ? 'Editá' : 'Agregá'} tu e-mail`}
          subTitle={registerData.mail || 'Recibirás información de tu cuenta'}
          icon={<VscMail />}
          completed={isComplete.mail}
          route={'/register/email'}
          currentStep={step === 1}
        />
        <Card
          title={`${registerData.user ? 'Editá' : 'Agregá'} tu nombre`}
          subTitle={registerData.user || 'Contanos cómo querés que te llamemos'}
          icon={<BiUserCircle />}
          completed={isComplete.user}
          route={'/register/user'}
          currentStep={step === 2}
        />
        <Card
          title={`${registerData.phone ? 'Editá' : 'Valida'} tu telefono`}
          subTitle={registerData.phone || 'Podrás usarlo para ingresar a tu cuenta'}
          icon={<GiSmartphone />}
          completed={isComplete.phone}
          route={'/register/phone'}
          currentStep={step === 3}
        />
        <Card
          title={`${registerData.password ? 'Editá' : 'Crea'} tu contraseña`}
          subTitle={
            registerData.password
              ? '*'.repeat(registerData.password.length)
              : 'Mantendrás tu cuenta protegida'
          }
          icon={<SlLock />}
          completed={isComplete.password}
          route={'/register/password'}
          currentStep={step === 4}
        />
      </div>
      {enabled && (
        <button type="submit" className="bg-blue text-white py-3 rounded-full">
          Continuar
        </button>
      )}
    </LayoutAuth>
  );
}
