'use client';

import ContinueBtn from '@/Components/UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';
import FormDelivery from './FormDelivery';
import { BaseSyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDelivery, setDelivery } from '@/redux/addProduct';

export default function Delivery({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('CABA-C1044');

  const data = useSelector(getDelivery);

  const [deliveryCheck, setDeliveryCheck] = useState(data.delivery);
  const [localCheck, setLocalCheck] = useState(data.local);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes realizar alguna acción con el valor del input, como enviarlo a una API o guardar en el estado de tu componente padre.
  };

  const handleInputChange = (event: BaseSyntheticEvent) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => dispatch(setDelivery({ local: localCheck, delivery: deliveryCheck }));

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <FormDelivery
          isEditing={isEditing}
          inputValue={inputValue}
          handleSave={handleSave}
          handleEdit={handleEdit}
          handleInputChange={handleInputChange}
          localCheck={localCheck}
          deliveryCheck={deliveryCheck}
          setLocalCheck={setLocalCheck}
          setDeliveryCheck={setDeliveryCheck}
        />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={4}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
