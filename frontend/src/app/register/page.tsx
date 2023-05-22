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
import { apiClient } from '@/utils/apiClient';

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

  const handleSubmit = () => {
    apiClient
      .post('/register', registerData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.response.data));
  };

  const user = () => {
    if (registerData.name + registerData.lastName) {
      return registerData.name + ' ' + registerData.lastName;
    } else {
      return false;
    }
  };

  return (
    <LayoutAuth>
      <h1 className="text-2xl font-semibold">Completá los datos para crear tu cuenta</h1>
      <div className="flex flex-col gap-5 lg:gap-1">
        <Card
          title={`${registerData.email ? 'Editá' : 'Agregá'} tu e-mail`}
          subTitle={registerData.email || 'Recibirás información de tu cuenta'}
          icon={<VscMail />}
          completed={isComplete.email}
          route={'/register/email'}
          currentStep={step === 1}
        />
        <Card
          title={`${user() ? 'Editá' : 'Agregá'} tu nombre`}
          subTitle={user() || 'Contanos cómo querés que te llamemos'}
          icon={<BiUserCircle />}
          completed={isComplete.user}
          route={'/register/user'}
          currentStep={step === 2}
        />
        <Card
          title={`${registerData.phone ? 'Editá' : 'Valida'} tu telefono`}
          subTitle={
            registerData.phone
              ? `+${registerData.phone.toString().slice(0, 2)}-${registerData.phone
                  .toString()
                  .slice(2, -1)}`
              : 'Podrás usarlo para ingresar a tu cuenta'
          }
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
        <button
          type="submit"
          className="bg-darkBlue text-white py-3 rounded-full"
          onClick={handleSubmit}
        >
          Continuar
        </button>
      )}
    </LayoutAuth>
  );
}
