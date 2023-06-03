import ContinueBtn from '../UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';
import { initialPay } from '@/redux/buy';
import { initialPayType } from '@/types/slice/buy.types';
import { SyntheticEvent, useState } from 'react';
import PayForm from './PayForm';
import { ListItem } from './DeliveryPay';

import { BsCreditCard2BackFill, BsCreditCard2FrontFill, BsCashCoin } from 'react-icons/bs';

export default function Pay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const [states, setStates] = useState<initialPayType>(initialPay);
  const [open, setOpen] = useState(false);
  const [cardType, setCardType] = useState('');

  const handleOpen = () => setOpen(!open);

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setStates({ ...states, [name]: value });
  };

  const handleContinue = () => {
    handleAvailableStep(4);
    handleCurrentStep(4);
  };

  return (
    <>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <div>
          <h3 className="ml-10 my-2">Mis tarjetas</h3>
          <ul className="mx-auto w-[300px] border-black border box-content rounded-lg">
            <ListItem
              icon={<BsCreditCard2BackFill />}
              title="Añadir tarjeta de débito"
              callback={() => {
                handleOpen();
                setCardType('Debito');
              }}
            />
            <ListItem
              icon={<BsCreditCard2FrontFill />}
              title="Añadir tarjeta de crédito"
              callback={() => {
                handleOpen();
                setCardType('Credito');
              }}
            />
          </ul>
        </div>

        <div>
          <h3 className="ml-10 my-2">Otros medios de pago</h3>
          <ul className="mx-auto w-[300px] border-black border box-content rounded-lg">
            <ListItem icon={<BsCashCoin />} title="Pagar en efectivo" callback={handleContinue} />
          </ul>
        </div>
      </div>
      {open && (
        <PayForm
          handleChange={handleChange}
          states={states}
          callback={handleOpen}
          cardType={cardType}
        />
      )}
    </>
  );
}
