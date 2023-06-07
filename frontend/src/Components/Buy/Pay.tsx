import { handlersType } from '@/types/handlers.types';
import { getCards, setCard, setPay } from '@/redux/buy';
import { useState } from 'react';
import PayForm from './PayForm';
import { ListItem } from './DeliveryPay';

import { BsCreditCard2BackFill, BsCreditCard2FrontFill, BsCashCoin } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { selectCompany } from '@/utils/selectCompany';

export default function Pay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);
  const [open, setOpen] = useState(false);
  const [cardType, setCardType] = useState('');

  const handleOpen = () => setOpen(!open);

  const handleContinue = (id?: number) => {
    handleAvailableStep(4);
    handleCurrentStep(4);
    const card = id ? cards.find((card: any) => card.cardNumber === id) : { type: 'Efectivo' };
    dispatch(setPay(card));
  };

  return (
    <>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
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

      <PayPalScriptProvider options={{ 'client-id': 'test' }}>
        <PayPalButtons
          style={{
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          }}
          createOrder={(data: any, actions: any) => {
            return actions.order.create({
              application_context: {
                shipping_preference: 'NO_SHIPPING',
              },
              // payer: {
              //     email_address: '',
              //     name: {
              //         given_name: '',
              //         surname: ''
              //     },
              //     address: {
              //         country_code: ""
              //     }
              // },
              purchase_units: [
                {
                  amount: {
                    value: 400,
                  },
                },
              ],
            });
          }}
          onApprove={(data: any, actions: any) => {
            return fetch('/api/paypal/process/' + data.orderID)
              .then((res) => res.json())
              .then(function (response) {
                if (!response.success) {
                  const failureMessage = 'Sorry, your transaction could not be processed.';
                  alert(failureMessage);
                  return;
                }
                location.href = '/';
              });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
}
