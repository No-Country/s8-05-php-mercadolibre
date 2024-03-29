'use client';

import { apiClientPriv } from '@/utils/apiClient';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function DetailBtns({ id, slug }: any) {
  const handleCart = () => {
    apiClientPriv
      .post('add-cart', {
        product_id: id,
        quantity: 1,
      })
      .then((data) => toast.success(data.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex g:w-1/2 w-full">
      <Link
        href={`/buy/${slug}`}
        className="text-center flex text-white bg-darkBlue border-0 py-2 px-6 focus:outline-none rounded-3xl"
      >
        Comprar Ahora
      </Link>
      <button
        onClick={handleCart}
        className="flex ml-auto text-darkBlue bg-white border border-darkBlue py-2 px-6 focus:outline-none rounded-3xl"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
