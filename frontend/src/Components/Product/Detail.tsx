import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Detail({ data }: any) {
  return (
    <div className="p-5">
      <Image
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={data.image}
        width={500}
        height={500}
        alt="ecommerce"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <div className="flex mb-4">
          <p className="text-xs title-font text-neutral-900 tracking-widest">product/{data.id}</p>
          <span className="flex items-center ml-8 text-blue">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <span className="text-gray-600 ml-3 text-xs">4.5</span>
          </span>
        </div>
        <h1 className="text-blue text-3xl title-font font-medium mb-1">{data.name}</h1>
        <div className="flex mt-4">
          <span className="title-font font-medium text-3xl text-neutral-900">${data.price}</span>
        </div>
        <p className="leading-relaxed text-xl">
          {' '}
          en 3 cuotas de ${Math.floor((data.price * 1.15) / 3)} (15% de interes)
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
            {data.stock} unidades
          </span>
        </div>
        <p className="text-xl text-neutral-900 font-semibold py-3">Caracteristicas del producto</p>
        <p className="leading-relaxed">{data.description}</p>

        <p className="leading-relaxed py-3">
          SKU:
          <span className="text-neutral-900"> {data.id}</span>
        </p>
      </div>
    </div>
  );
}
