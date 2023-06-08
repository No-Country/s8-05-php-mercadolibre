'use client';

import Buttons from '@/Components/Cart/Buttons';
import CartProduct from '@/Components/Product/CartProduct';
import NavBack from '@/Components/UI/NavBack';
import { apiClientPriv } from '@/utils/apiClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(0);

  const handleReload = () => {
    setReload(!reload);
  };

  const handleDeleteCart = () => {
    apiClientPriv
      .post('/remove-products-cart')
      .then((data) => handleReload())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiClientPriv
      .get('/view-cart')
      .then(({ data }: any) => {
        setData(data.cart_products.data);
        setTotal(data.total_cart_price);
      })
      .catch((err) => console.log(err));
  }, [reload]);

  return (
    <>
      <NavBack title={'Carrito de compras'} />
      {data?.length ? (
        <>
          <div className="flex flex-wrap">
            {data.map((item: any, index: number) => (
               
               <div key={item.id} className="lg:w-1/3 sm:w-1/2 w-full">
                <CartProduct
                  data={{
                    ...item.attributes,
                    ...item.relationships.products.attributes,
                    ...item.relationships.products.relationships,
                    id: item.relationships.products.id,
                  }}
                  handleReload={handleReload}
                />
              </div>
            ))}
            
          </div>
          <div className='flex m-4'>
            <button onClick={handleDeleteCart} className="mx-auto bg-[#CD4737] text-white rounded-full py-3 px-8 text-center md:w-4/12 lg:w-4/12 w-full">
              Vaciar carrito
            </button>
          </div>
          <Buttons total={total} />
        </>
      ) : (
        <div className="flex flex-col m-5 gap-5 mt-[30vh]">
          <h1 className="text-center text-xl">¡Tu carrito esta vacío!</h1>
          <div className='mx-auto'>
            <Link href={'/'} className="bg-darkBlue text-white rounded-full py-3 px-8 text-center md:w-4/12 lg:w-4/12 w-full">
              Ir a comprar
            </Link>
          </div>
          
        </div>
      )}
    </>
  );
}
