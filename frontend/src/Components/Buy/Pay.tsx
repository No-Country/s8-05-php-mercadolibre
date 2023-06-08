import { handlersType } from '@/types/handlers.types';
import { getCards, setPay } from '@/redux/buy';
import { useState } from 'react';
import PayForm from './PayForm';
import { ListItem } from './DeliveryPay';

import { BsCreditCard2BackFill, BsCreditCard2FrontFill, BsCashCoin } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { selectCompany } from '@/utils/selectCompany';
import Animation from '../Animation';
import PayPal from './PayPal';

export default function Pay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);
  const [open, setOpen] = useState(false);
  const [cardType, setCardType] = useState('');
  const [animation, setAnimation] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleContinue = (id?: number) => {
    setAnimation(true);
    setTimeout(() => {
      handleAvailableStep(4);
      handleCurrentStep(4);
      const card = id ? cards.find((card: any) => card.cardNumber === id) : { type: 'Efectivo' };
      dispatch(setPay(card));
    }, 4000);
  };

  return (
    <>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5 mx-auto">
        <div>
          <h3 className="ml-10 my-2">Mis tarjetas</h3>
          <ul className="mx-auto w-[300px] border-black border box-content rounded-lg">
            {cards.length > 0 ? (
              cards.map((card: any) => (
                <ListItem
                  key={card.cardNumber}
                  icon={selectCompany(card.company)}
                  title={`${card.type} **** ${card.cardNumber.slice(-4)}`}
                  callback={() => handleContinue(card.cardNumber)}
                  border={true}
                />
              ))
            ) : (
              <></>
            )}
            <ListItem
              icon={<BsCreditCard2BackFill />}
              title="Añadir tarjeta de débito"
              callback={() => {
                handleOpen();
                setCardType('Debito');
              }}
              border={true}
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
      {open && <PayForm callback={handleOpen} cardType={cardType} />}
      {animation && <Animation text={'Tu metodo de envio fue añadido'} />}

      {/* <PayPal /> */}
    </>
  );
}
