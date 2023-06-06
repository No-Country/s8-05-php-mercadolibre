
import { TbTruckDelivery } from 'react-icons/tb';

export default function DeliveryInfo() {
  return (
    <>

      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">
          Entrega
        </h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <TbTruckDelivery className="text-neutral-900" size={36} />
          </div>
          <p className="font-semibold">Recibe: nombre y apellido</p>
          <p className="text-neutral-600">
            Direccion
          </p>
          <p className="text-neutral-600">Tel: (011) 15 8963 5411</p>
          <p className="text-neutral-600">Envio a domicilio: (Metodo de envio)</p>
          <button
          className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
        >
          Modificar método de entrega
        </button>
        </div>
    </div>

      
    </>
  );
}
