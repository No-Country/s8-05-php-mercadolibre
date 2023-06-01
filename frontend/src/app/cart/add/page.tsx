'use client';

import { FiCheck } from 'react-icons/fi';

import CardProductInterest from '@/Components/Cart/CardProductInterest';
import NavBack from '@/Components/UI/NavBack';
import CardSimpleCart from '@/Components/Cart/CardSimpleCart';

export default function AddCart() {
  return (
    <div>
      <NavBack title={'Carrito de compras'} />

      <div className="flex flex-col items-center justify-center my-4">
        <div className="flex items-center bg-blue text-white rounded-full p-2">
          <FiCheck className="text-white" size={36} />
        </div>
        <p className="text-lg text-blue mt-2">Agregado al carrito</p>
        <CardSimpleCart
          title={'Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1" (Black)'}
          price={299099.0}
          unity={2}
          add={false}
          img={
            'https://res.cloudinary.com/yeniferramirez11/image/upload/v1681214166/ideal-code/abandono-al-exito-informacion-carrito_uujvas.webp'
          }
        />
      </div>

      <div className="mx-5">
        <h2 className="font-bold text-grey-800 text-lg">También te puede interesar</h2>
        <div className="flex flex-wrap ">
          <CardProductInterest
            title={'Laptop HP 250 G9 Procesador intel core i5 1235u'}
            price={299099.0}
            leave={'Llega hoy'}
            img={
              'https://res.cloudinary.com/yeniferramirez11/image/upload/v1681214166/ideal-code/abandono-al-exito-informacion-carrito_uujvas.webp'
            }
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2 mt-4 mx-auto flex flex-col lg:flex-row">
        <button className="text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl w-full lg:mr-2 lg:mb-0 mb-4">
          Finalizar Compra
        </button>
        <button className="text-blue bg-white border border-blue py-2 px-6 focus:outline-none rounded-3xl w-full">
          Ir al carrito de compras
        </button>
      </div>
    </div>
  );
}
