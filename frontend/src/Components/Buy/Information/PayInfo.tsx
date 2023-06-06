
import { TbTruckDelivery, TbBrandVisa, TbListCheck } from 'react-icons/tb';

export default function ProductInfo() {
  return (
    <>

    <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
      <h1 className="font-semibold ">
        Método de pago
      </h1>
      <div className="text-sm mt-3 pb-3 text-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
          <TbBrandVisa className="text-darkBlue" size={48} />
        </div>
        <p className="text-neutral-600 text-xs">
          Datos del Banco
        </p>
        <p className="text-neutral-800">Datos del metodo de pago</p>
        <p className="text-neutral-600">Porcentajes aplicados</p>
        <button
        className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
        >
          Modificar
        </button>
      </div>
    </div>
    </>
  );
}
