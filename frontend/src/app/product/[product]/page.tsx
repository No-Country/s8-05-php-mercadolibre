import Layout from '@/Components/Layout';
import Detail from '@/Components/Product/Detail';
import DetailBtns from '@/Components/UI/DetailBtns';
import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data }: any = await apiClient.get(`/categories`);
  return data.data.map((item: any) => ({ category: item.attributes.slug }));
}

async function getData(slug: string) {
  const { data }: any = await apiClient.get(`/products/${slug}`);
  return data;
}

export default async function Page({ params }: { params: { product: string } }) {
  const { data } = await getData(params.product);

  const product = {
    image: data.relationships?.images[0],
    id: data.id,
    name: data.attributes?.name,
    price: data.attributes.price,
    stock: data.attributes.stock,
    description: data.attributes.description,
  };

  return (
    <Layout>
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Detail data={product} />
          <DetailBtns id={data.id} />
          <div className="flex g:w-1/2 w-full py-3">
            <button className="flex text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">
              Compartir
            </button>
            <button className="flex ml-3 text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">
              Guardar
            </button>
          </div>
          <div className="flex">
            <p className="text-xl text-neutral-900 font-semibold py-3 mt-5 items-center pt-5 border-b-2 border-blue">
              Tambien te puede interesar
              <span className="text-neutral-600">(4)</span>
            </p>
          </div>
          <div className="container px-4 py-6 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-neutral-400 rounded-xl">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    className="object-cover object-center w-full h-full block"
                    src={data.relationships?.images[0]}
                    width={500}
                    height={500}
                    alt="ecommerce"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Categoria
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Articulo a la venta{' '}
                  </h2>
                  <p className="mt-1">AR $199,999.00</p>
                  <button className="flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl mx-auto mt-2">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
