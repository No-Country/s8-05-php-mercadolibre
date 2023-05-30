'use client';

import { BaseSyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Avatar } from 'flowbite-react';
import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

import CardProductInterest from '@/Components/UI/CardProductInterest';
import NavBack from '@/Components/UI/NavBack';
import CardSimpleCart from '@/Components/UI/CardSimpleCart';

export default function ViewCart() {
  return (
    <div>
      <NavBack 
        title={'Carrito de compras'}
      />

      <div className="flex flex-col items-center justify-center my-4">
        <CardSimpleCart
          title= {'Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1" (Black)'}
          price= {299099.00}
          unity = {2}
          add = {true}
          img={'https://res.cloudinary.com/yeniferramirez11/image/upload/v1681214166/ideal-code/abandono-al-exito-informacion-carrito_uujvas.webp'}
        />
      </div>

      <div className="w-1/2 mt-4 mx-auto flex flex-col lg:flex-row">
        <button className="text-neutral-600 bg-white border border-neutral-600 py-2 px-6 focus:outline-none rounded-3xl w-full lg:mr-2 lg:mb-0 mb-4">
          Vaciar Carrito
        </button>
      </div>

      <div className="w-full mt-4 mx-auto flex justify-end md:justify-center lg:justify-center">
        <p className="text-base font-normal text-gray-600 text-center md:text-right">
          Total de compra:
          <span className="font-bold">AR $ 450,000.00</span>
        </p>
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
