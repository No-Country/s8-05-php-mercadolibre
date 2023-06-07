'use client';

import Product from '@/Components/Buy/Information/ProductInfo';
import Delivery from '@/Components/Buy/Information/DeliveryInfo';
import Pay from '@/Components/Buy/Information/PayInfo';
import Billing from '@/Components/Buy/Information/BillingInfo';
import { handlersType } from '@/types/handlers.types';

export default function Confirmation({ handleCurrentStep }: handlersType) {
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-3">
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 border-l md:border-b border-gray-200 border-opacity-60">
            <Product />
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
                <span className="ml-auto">$ 150,000.00</span>
              </div>
              <div className="flex pb-2">
                <span>Envio</span>
                <span className="ml-auto">$ 1,500.00</span>
              </div>
              <div className="flex ">
                <span>Subtotal</span>
                <span className="ml-auto">$ 151,500.00</span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full flex flex-col">
              <div className="flex border-t border-white py-2 ">
                <span className="text-sm font-semibold">Total</span>
                <span className="ml-auto">$ 165,000.00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-10">
            <button className="text-darkBlue bg-white border-0 py-2 px-8 focus:outline-none rounded-3xl text-sm">
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
