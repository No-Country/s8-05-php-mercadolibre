'use client';

import Buttons from '@/Components/Cart/Buttons';
import CartProduct from '@/Components/Product/CartProduct';
import NavBack from '@/Components/UI/NavBack';
import { apiClient } from '@/utils/apiClient';
import Link from 'next/link';

// async function getData() {
//   const { data } = await apiClient.get('/view-cart');
//   return data;
// }

export default function Page() {
  // const { data } = await getData();
  // console.log(data);
  const data = [1, 1];

  return (
    <>
      <NavBack title={'Carrito de compras'} />
      {data.length ? (
        <>
          <div className="flex flex-col gap-5 my-5 min-h-[50vh]">
            {data.map((item, index) => (
              <CartProduct key={index} />
            ))}
            <button>Vaciar carrito</button>
          </div>
          <Buttons />
        </>
      ) : (
        <div className="flex flex-col m-5 gap-5 mt-[30vh]">
          <h1 className="text-center text-xl">Tu carrito esta vacio!</h1>
          <Link href={'/'} className="bg-darkBlue text-white rounded-full py-3 text-center">
            Ir a comprar
          </Link>
        </div>
      )}
    </>
  );
}
