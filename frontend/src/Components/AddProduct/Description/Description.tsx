'use client';

import ContinueBtn from '@/Components/UI/ContinueBtn';
import FormNewProduct from './FormNewProduct';
import { handlersType } from '@/types/addProduct/handlers.types';
import { useState } from 'react';
import { descriptionType } from '@/types/addProduct/description.types';

export default function Description({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const [states, setStates] = useState<descriptionType>({
    title: '',
    category: '',
    state: '',
    stock: 0,
    length: 0,
    width: 0,
    height: 0,
    price: 0,
    description: '',
  });

  const handleChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    setStates({
      ...states,
      [target.name]: target.value,
    });
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <FormNewProduct states={states} handleChange={handleChange} />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={2}
        />
      </div>
    </div>
  );
}
