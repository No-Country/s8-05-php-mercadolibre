'use client';

import ContinueBtn from '@/Components/UI/ContinueBtn';
import FormNewProduct from './FormNewProduct';
import { handlersType } from '@/types/handlers.types';
import { useEffect, useState } from 'react';
import { descriptionType } from '@/types/slice/addProduct.types';
import { useDispatch, useSelector } from 'react-redux';
import { getDescription, initialDescription, setDescription } from '@/redux/addProduct';

export default function Description({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const data = useSelector(getDescription);
  const [states, setStates] = useState<descriptionType>(initialDescription);

  useEffect(() => {
    setStates({
      title: data.title,
      category: data.category,
      state: data.state,
      stock: data.stock,
      length: data.length,
      width: data.width,
      height: data.height,
      price: data.price,
      description: data.description,
    });
  }, [data]);

  const handleChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    setStates({
      ...states,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => dispatch(setDescription(states));

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <FormNewProduct states={states} handleChange={handleChange} />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={2}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
