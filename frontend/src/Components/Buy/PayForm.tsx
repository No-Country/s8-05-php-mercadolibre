import { initialPayType } from '@/types/slice/buy.types';
import { Label, TextInput } from 'flowbite-react';
import NavBack from '../UI/NavBack';
import { SyntheticEvent, useEffect, useState } from 'react';
import { initialPay, setCard } from '@/redux/buy';
import { useDispatch } from 'react-redux';
import Animation from '../Animation';
import { selectCompany } from '@/utils/selectCompany';

type payFormType = {
  callback: () => void;
  cardType: string;
};

export default function PayForm({ callback, cardType }: payFormType) {
  const dispatch = useDispatch();
  const [states, setStates] = useState<initialPayType>(initialPay);
  const [animation, setAnimation] = useState(false);

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setStates({ ...states, [name]: value });
  };

  const handleCardNumber = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (value[0] === '4') {
      states.company = 'Visa';
    } else if (value[0] === '5') {
      states.company = 'MasterCard';
    } else {
      states.company = 'Companía';
    }

    handleChange(e);
  };

  const handleSubmit = () => {
    setAnimation(true);

    setTimeout(() => {
      dispatch(setCard(states));
      callback();
    }, 4000);
  };

  useEffect(() => {
    setStates({ ...states, type: cardType });
  }, [cardType, states]);

  return (
    <div className="absolute top-0 bg-white z-[200]">
      <NavBack title="Añadir tarjeta" callback={callback} />

      <div className="bg-payCard m-5 h-44 rounded-lg text-white flex flex-col justify-between p-5">
        <div className="flex flex-col items-start">
          <span className="text-xl font-bold min-h-[30px] mb-1 text-white">
            {selectCompany(states.company)}
          </span>
          <span>{cardType}</span>
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
            onChange={handleCardNumber}
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
        <span className="text-xs opacity-80">Tal cual aparece en su tarjeta</span>
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
        <button
          className="rounded-full py-2 mx-4 bg-darkBlue text-white font-semibold"
          onClick={handleSubmit}
        >
          Siguiente
        </button>
      </div>
      {animation && <Animation text={'Tu tarjeta fue añadida'} />}
    </div>
  );
}
