'use client';

import Buttons from '@/Components/Cart/Buttons';
import CartProduct from '@/Components/Product/CartProduct';
import NavBack from '@/Components/UI/NavBack';

export default function Page() {
  return (
    <>
      <NavBack title={'Carrito de compras'} />
      <div className="flex flex-col gap-5 my-5">
        <CartProduct />
        <CartProduct />
        <button>Vaciar carrito</button>
      </div>

      <Buttons />
    </>
  );
}
