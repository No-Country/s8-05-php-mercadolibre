import Image from 'next/image';

import { IoHeartOutline } from 'react-icons/io5';
import { AiFillThunderbolt } from 'react-icons/ai';
import Link from 'next/link';

type CardSimpleCartProps = {
  title: string;
  price: number;
  img: string;
  leave: string;
};

export default function CardSimpleCart({ title, price, img, leave }: CardSimpleCartProps) {
  return (
    <div className="flex flex-col min-w-[250px] w-[250px] border border-black rounded-lg gap-2 mx-5">
      <div className="p-2">
        <div className="w-full flex justify-end">
          <IoHeartOutline className="text-2xl" />
        </div>
        <span className="text-sm font-semibold block h-8">{title}</span>
      </div>
      <Link href={`/product/1`}>
        <Image
          width={200}
          height={200}
          alt="laptop"
          className="h-[150px] w-full object-cover"
          src={''}
        />
      </Link>
      <div className="p-2">
        <span>
          <span className="font-semibold">AR</span> $ {price}
        </span>
        <div className="flex justify-between items-end font-semibold">
          <span className="text-sm text-blue">{leave}</span>
          <div className="flex flex-row text-green items-start">
            <AiFillThunderbolt />
            <span className="max-h-max">Flash</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-2 w-full">
          <button className="rounded-full py-2 bg-blue text-white font-semibold">
            Comprar ahora
          </button>
          <button className="rounded-full py-2 text-blue border-blue border-2 font-semibold">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
