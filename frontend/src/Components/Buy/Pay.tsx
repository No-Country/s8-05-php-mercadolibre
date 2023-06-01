import { Label, TextInput } from 'flowbite-react';
import ContinueBtn from '../UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';
import { initialPay } from '@/redux/buy';
import { initialPayType } from '@/types/slice/buy.types';
import { SyntheticEvent, useState } from 'react';

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
      <div className="bg-payCard m-5 h-44 rounded-lg text-white flex flex-col justify-between p-5">
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">VISA</span>
          <span>Debito</span>
        </div>
        <div className="flex flex-col items-end">
          <p>{states.name !== '' ? states.name : 'Nombre y apellido'}</p>
          <p>{states.cardNumber || 'xxxx-xxxx-xxxx-xxxx'}</p>
          <span>{states.expiration !== '' ? states.expiration : 'mm/aa'}</span>
        </div>
      </div>
      <div className="m-5 flex flex-col gap-2">
        <div>
          <Label htmlFor="cardNumber" value="Numero de tarjeta" />

          <TextInput
            id="cardNumber"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
            type="number"
            value={states.cardNumber}
            name={'cardNumber'}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <Label htmlFor="expiration" value="Caducidad" />

            <TextInput
              id="expiration"
              placeholder="15/25"
              required
              type="text"
              value={states.expiration}
              name={'expiration'}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="cvv" value="cvv" />

            <TextInput
              id="cvv"
              placeholder="123"
              required
              type="number"
              value={states.cvv}
              name={'cvv'}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="name" value="Nombre y Apellido" />

          <TextInput
            id="name"
            placeholder="Ingrese su nombre y apellido"
            required
            type="text"
            value={states.name}
            name={'name'}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="dni" value="dni" />

          <TextInput
            id="dni"
            placeholder="Ingrese su numero de DNI"
            required
            type="number"
            value={states.dni}
            name={'dni'}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={3}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
