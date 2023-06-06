'use client';

import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';
import { useState } from 'react';

export default function CartProduct() {
  const [count, setCount] = useState(1);

  const handleCountRest = (id: string) => {
    if (count > 1) {
      setCount(count - 1);
      apiClient.put(`/update-cart`, { product_id: id, quantity: count });
    }
  };

  const handleCountSum = (id: string) => {
    if (count < 10) {
      setCount(count + 1);
      apiClient.put(`/update-cart`, { product_id: id, quantity: count });
    }
  };

  const handleDelete = (id: string) => {
    apiClient.delete(`/remove-cart/${id}`);
  };

  return (
    <div className="flex flex-col mx-5 shadow-lg">
      <div className="flex flex-row border-b border-black gap-2">
        <Image src={''} alt="" width={50} height={50} className="bg-black w-[200px] h-[100px]" />
        <div className="flex flex-col w-full gap-2 justify-between pr-2">
          <p className="text-lg text-darkBlue">Nombre del producto</p>
          <div className="flex flex-row gap-2 w-24 justify-between px-2 border border-black rounded-full">
            <button onClick={() => handleCountRest('1')}> - </button>
            <span>{count} u.</span>
            <button onClick={() => handleCountSum('1')}> + </button>
          </div>
          <span className="self-end text-sm font-semibold">AR $ 1000</span>
        </div>
      </div>
      <span className="text-darkBlue text-lg ml-5 py-1" onClick={() => handleDelete('1')}>
        Eliminar
      </span>
    </div>
  );
}
