import Image from 'next/image';

export default function CartProduct() {
  return (
    <div className="flex flex-col mx-5 shadow-lg">
      <div className="flex flex-row border-b border-black gap-2">
        <Image src={''} alt="" width={50} height={50} className="bg-black w-[200px] h-[100px]" />
        <div className="flex flex-col w-full gap-2 justify-between pr-2">
          <p className="text-lg text-darkBlue">Nombre del producto</p>
          <div className="flex flex-row gap-2 w-24 justify-between px-2 border border-black rounded-full">
            <button> - </button>
            <span>1 u.</span>
            <button> + </button>
          </div>
          <span className="self-end text-sm font-semibold">AR $ 1000</span>
        </div>
      </div>
      <span className="text-darkBlue text-lg ml-5 py-1">Eliminar</span>
    </div>
  );
}
