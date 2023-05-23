import Image from 'next/image';

import { IoHeartOutline } from 'react-icons/io5';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function Product() {
  return (
    <div className="flex flex-col min-w-[250px] w-[250px] border border-black rounded-lg gap-2 mx-5">
      <div className="p-2">
        <div className="w-full flex justify-end">
          <IoHeartOutline className="text-2xl" />
        </div>
        <span className="text-sm font-semibold">
          Laptop HP 250 G9, Procesor Intel® Core™ i5-1235U
        </span>
      </div>
      <Image
        src={
          'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1683832284499-msdesktop-samsung-hs.jpg'
        }
        width={200}
        height={200}
        alt="laptop"
        className="h-[150px] w-full object-cover"
      />
      <div className="p-2">
        <span>
          <span className="font-semibold">AR</span> $ 299,999.00
        </span>
        <div className="flex justify-between items-end font-semibold">
          <span className="text-sm text-darkBlue">Llega gratis el lunes</span>
          <div className="flex flex-row text-green items-start">
            <AiFillThunderbolt />
            <span className="max-h-max">Flash</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 my-2 w-full">
          <button className="rounded-full py-2 bg-darkBlue text-white font-semibold">
            Comprar ahora
          </button>
          <button className="rounded-full py-2 text-darkBlue border-darkBlue border-2 font-semibold">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
