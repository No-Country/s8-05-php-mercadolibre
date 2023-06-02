
import { TbTruckDelivery, TbBrandVisa, TbListCheck } from 'react-icons/tb';

export default function ProductInfo() {
  return (
    <>
      {/*<div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
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
      </div> */}

      {/*<div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
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
    </div>*/}

      {/*<div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
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
    </div> */}

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
