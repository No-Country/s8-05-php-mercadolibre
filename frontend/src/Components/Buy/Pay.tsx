import ContinueBtn from '../UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';
import { initialPay } from '@/redux/buy';
import { initialPayType } from '@/types/slice/buy.types';
import { SyntheticEvent, useState } from 'react';
import PayForm from './PayForm';

export default function Pay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const [states, setStates] = useState<initialPayType>(initialPay);

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setStates({ ...states, [name]: value });
  };

  const handleSubmit = () => {};
  return (
    <>
      <PayForm handleChange={handleChange} states={states} />
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={4}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
