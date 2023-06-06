'use client';

import ContinueBtn from '@/Components/UI/ContinueBtn';
import FormNewDomicile from './FormNewDomicile';
import NavBack from '@/Components/UI/NavBack';
import { handlersType } from '@/types/handlers.types';
import { useEffect, useState } from 'react';
import { initialLocationType } from '@/types/slice/buy.types';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusCircle } from 'react-icons/ai';
import { initialLocation } from '@/redux/buy';

export default function Description({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  // const data = useSelector(getDescription);
  const [states, setStates] = useState<initialLocationType>(initialLocation);

  // useEffect(() => {
  //   setStates({
  //     name: data.name,
  //     code: data.code,
  //     province: data.province,
  //     city: data.city,
  //     address: data.address,
  //     houseNumber: data.houseNumber,
  //     floor: data.floor,
  //     phone: data.phone,
  //     aditionalDescription: data.aditionalDescription,
  //   });
  // }, [data]);

  const handleChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    setStates({
      ...states,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full flex flex-col items-center mt-3">

      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5 lg:px-0 px-5">
        <button
          className="bg-white mb-2 border hover:bg-darkBlue hover:text-white text-neutral-700 border-neutral-700 font-semibold py-2 px-8 rounded w-full flex items-center justify-center"
          onClick={() => setShowForm(!showForm)}
        >
          <AiFillPlusCircle className="mr-2" /> Agregar domicilio
        </button>
        {showForm && (
        <div className="mb-4">
          <FormNewDomicile states={states} handleChange={handleChange} />
        </div>
      )}
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
