
import { TbTruckDelivery, TbBrandVisa, TbListCheck } from 'react-icons/tb';

export default function ProductInfo() {
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">
          Producto
        </h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <figure>
              <img className='w-10' src="https://res.cloudinary.com/yeniferramirez11/image/upload/v1685500649/Group_155_kzfu2e.png" alt="Shoes" />
            </figure>
          </div>
          <p className="text-neutral-600">
            Producto
          </p>
          <p className="font-semibold">Precio 000</p>
          <p className="text-neutral-600">Cantidad: N unidad</p>
        </div>
      </div> 
    </>
  );
}
