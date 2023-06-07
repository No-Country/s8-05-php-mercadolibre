'use client';

import FormNewDomicile from './FormNewDomicile';
import { handlersType } from '@/types/handlers.types';
import { useEffect, useState } from 'react';
import { initialLocationType } from '@/types/slice/buy.types';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, initialLocation, setLocation } from '@/redux/buy';

export default function Description({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const data = useSelector(getLocation);
  const [states, setStates] = useState<initialLocationType>(initialLocation);

  useEffect(() => {
    setStates({
      name: data.name,
      code: data.code,
      province: data.province,
      city: data.city,
      address: data.address,
      houseNumber: data.houseNumber,
      floor: data.floor,
      phone: data.phone,
      aditionalDescription: data.aditionalDescription,
    });
  }, [data]);

  const handleChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    setStates({
      ...states,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(setLocation(states));
    handleAvailableStep(2);
    handleCurrentStep(2);
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5 lg:px-0 px-5">
        <div className="mb-4">
          <FormNewDomicile states={states} handleChange={handleChange} />
        </div>
        <button
          className="rounded-full py-2 mx-4 bg-darkBlue text-white font-semibold"
          onClick={handleSubmit}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
