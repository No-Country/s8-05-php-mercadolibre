import Layout from '@/Components/Layout';
import { apiClient } from '@/utils/apiClient';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data.relationships?.images[0]}
              width={500}
              height={500}
              alt="ecommerce"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex mb-4">
                <p className="text-xs title-font text-neutral-900 tracking-widest">
                  product/{data.id}
                </p>
                <span className="flex items-center ml-8 text-blue">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <span className="text-gray-600 ml-3 text-xs">4.5</span>
                </span>
              </div>
              <h1 className="text-blue text-3xl title-font font-medium mb-1">
                {data.attributes?.name}
              </h1>
              <div className="flex mt-4">
                <span className="title-font font-medium text-3xl text-neutral-900">
                  ${data.attributes.price}
                </span>
              </div>
              <p className="leading-relaxed text-xl">
                {' '}
                en 3 cuotas de ${Math.floor((data.attributes.price * 1.15) / 3)} (15% de interes)
              </p>
              <div className="flex  py-2">
                <span className="text-gray-800">Delivery:</span>
                <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">
                  Envio Gratis
                </span>
              </div>
              <div className="flex  py-2">
                <span className="text-gray-800">Stock:</span>
                <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">
                  {data.attributes.stock} unidades
                </span>
              </div>
              <div className="flex mt-5 items-center pt-5 border-t-2 border-gray-100 mb-6">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-md w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-md w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-blue rounded-md w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <input
                    type="number"
                    placeholder="0"
                    className="rounded-3xl border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:border-blue text-base pl-3 w-1/2"
                    min="0"
                    step="1"
                    pattern="\d*"
                  ></input>
                </div>
              </div>
              <div className="flex g:w-1/2 w-full">
                <button className="flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl">
                  Comprar Ahora
                </button>
                <button className="flex ml-auto text-blue bg-white border border-blue py-2 px-6 focus:outline-none rounded-3xl">
                  Agregar al carrito
                </button>
              </div>
              <div className="flex g:w-1/2 w-full py-3">
                <button className="flex text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">
                  Compartir
                </button>
                <button className="flex ml-3 text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">
                  Guardar
                </button>
              </div>
              <p className="text-xl text-neutral-900 font-semibold py-3">
                Caracteristicas del producto
              </p>
              <p className="leading-relaxed">{data.attributes.description}</p>

              <p className="leading-relaxed py-3">
                SKU:
                <span className="text-neutral-900"> {data.id}</span>
              </p>
              <p className="text-xl text-neutral-900 font-semibold pt-3">Brand</p>
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
      </section>
    </Layout>
  );
}
