'use client';

import { TextInput } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function DetailsProduct() {
  const [count, setCount] = useState(1);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-2 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-darkBlue text-3xl title-font font-medium mb-1">
              Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1 (Black)
            </h1>
            <div className="flex mt-4">
              <span className="title-font font-medium text-3xl text-neutral-900">$1,200.00</span>
            </div>
            <p className="leading-relaxed text-xl"> en 3 cuotas de $400</p>
            <div className="flex  py-2">
              <span className="text-gray-800">Delivery:</span>
              <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">
                Envio Gratis
              </span>
            </div>
            <div className="flex  py-2">
              <span className="text-gray-800">Stock:</span>
              <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">
                26 unidades
              </span>
            </div>
            <div className="flex mt-5 items-center pt-5 border-t-2 border-gray-100 mb-6">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-md w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-md w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-darkBlue rounded-md w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-auto">
                <TextInput
                  type="number"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  min={1}
                  max={100}
                />
              </div>
            </div>
            <p className="text-xl text-neutral-900 font-semibold py-3">
              Caracteristicas del producto
            </p>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos hic quae rerum
              neque dolores perspiciatis, modi laudantium illo dicta nam autem ad earum ea, aliquam
              in sint impedit sapiente.
            </p>

            <p className="leading-relaxed py-3">
              SKU:
              <span className="text-neutral-900"> 29087645</span>
            </p>
            <p className="text-xl text-neutral-900 font-semibold pt-3">Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
}
