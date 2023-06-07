'use client';

import { apiClientPriv } from '@/utils/apiClient';

export default function DetailBtns({ id }: any) {
  const handleCart = () => {
    apiClientPriv
      .post('add-cart', {
        product_id: id,
        quantity: 1,
      })
      .then((data) => alert(data.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex g:w-1/2 w-full">
      <button className="flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl">
        Comprar Ahora
      </button>
      <button
        onClick={handleCart}
        className="flex ml-auto text-blue bg-white border border-blue py-2 px-6 focus:outline-none rounded-3xl"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
