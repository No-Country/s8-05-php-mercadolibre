'use client';

import Product from '@/Components/Buy/Information/ProductInfo';
import Delivery from '@/Components/Buy/Information/DeliveryInfo';
import Pay from '@/Components/Buy/Information/PayInfo';
import Billing from '@/Components/Buy/Information/BillingInfo';
import { useState } from 'react';
import Animation from '../Animation';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getDeliveryBuy } from '@/redux/buy';

export default function Confirmation({ handleCurrentStep, product }: any) {
  const { push } = useRouter();
  const [animation, setAnimation] = useState(false);
  const delivery = useSelector(getDeliveryBuy);

  const handleBuy = () => {
    setAnimation(true);
    setTimeout(() => {
      push('/');
    }, 4000);
  };

  const calcPrice = () => {
    return product.fastBuy && product.product.attributes.price;
  };

  const calcSubTotal = () => {
    return calcPrice() + delivery;
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-3">
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 border-l md:border-b border-gray-200 border-opacity-60">
            <Product product={product} />
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 border-l md:border-b border-gray-200 border-opacity-60">
            <Delivery callback={() => handleCurrentStep(2)} />
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 border-l md:border-b border-gray-200 border-opacity-60">
            <Pay callback={() => handleCurrentStep(3)} />
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 border-l md:border-b border-gray-200 border-opacity-60">
            <Billing callback={() => handleCurrentStep(1)} />
          </div>
        </div>
      </div>
      <div className="bg-darkBlue text-white">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-xl text-lg font-semibold title-font text-center mb-10">
            Confirme su compra
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 w-full flex flex-col text-xs">
              <div className="flex border-t border-white py-2">
                <span>Producto</span>
                <span className="ml-auto">$ {calcPrice()}</span>
              </div>
              <div className="flex pb-2">
                <span>Envio</span>
                <span className="ml-auto">$ {delivery}</span>
              </div>
              <div className="flex ">
                <span>Subtotal</span>
                <span className="ml-auto">$ {calcSubTotal()}</span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full flex flex-col">
              <div className="flex border-t border-white py-2 ">
                <span className="text-sm font-semibold">Total</span>
                <span className="ml-auto">$ {calcSubTotal()}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-10">
            <button
              className="text-darkBlue bg-white border-0 py-2 px-8 focus:outline-none rounded-3xl text-sm"
              onClick={handleBuy}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
      {animation && <Animation text={'Compra realizada exitosamente!'} />}
    </div>
  );
}
