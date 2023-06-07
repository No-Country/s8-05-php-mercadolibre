'use client';

import { apiClientPriv } from '@/utils/apiClient';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartProduct({ data }: any) {
  const [count, setCount] = useState(data.quantity);

  const handleCountRest = () => {
    if (count > 1) {
      setCount(count - 1);
      apiClientPriv
        .put(`/update-cart`, { product_id: data.id, quantity: count })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleCountSum = () => {
    if (count < 10) {
      setCount(count + 1);
      apiClientPriv
        .put(`/update-cart`, { product_id: data.id, quantity: count })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    apiClientPriv
      .delete(`/remove-cart/${data.id}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col mx-5 shadow-lg">
      <div className="flex flex-row border-b border-black gap-2">
        <Link href={`/product/${data.slug}`}>
          <Image
            src={data.images[0]}
            alt=""
            width={50}
            height={50}
            className="bg-black w-[200px] h-[100px]"
          />
        </Link>
        <div className="flex flex-col w-full gap-2 justify-between pr-2">
          <p className="text-lg text-darkBlue">{data.name}</p>
          <div className="flex flex-row gap-2 w-24 justify-between px-2 border border-black rounded-full">
            <button onClick={handleCountRest}> - </button>
            <span>{count} u.</span>
            <button onClick={handleCountSum}> + </button>
          </div>
          <span className="self-end text-sm font-semibold">AR $ {data.price}</span>
        </div>
      </div>
      <span className="text-darkBlue text-lg ml-5 py-1" onClick={handleDelete}>
        Eliminar
      </span>
    </div>
  );
}
