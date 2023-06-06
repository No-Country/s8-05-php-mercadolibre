
import { TbTruckDelivery, TbBrandVisa, TbListCheck } from 'react-icons/tb';

export default function ProductInfo() {
  return (
    <>
    <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">
          Facturación
        </h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <TbListCheck size={36} />
          </div>
          <p className="font-semibold">Nombre y apellido</p>

          <p className="text-neutral-600 text-xs">
            DNI
          </p>
          <p className="text-neutral-600 text-xs">
            telefono
          </p>
          <p className="text-neutral-600 text-xs">
            direccion
          </p>
          <button
          className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
          >
            Modificar Datos
          </button>
        </div>
    </div>
    </>
  );
}
