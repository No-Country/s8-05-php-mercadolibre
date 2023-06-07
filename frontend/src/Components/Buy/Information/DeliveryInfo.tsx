import { getDeliveryBuy, getLocation } from '@/redux/buy';
import { TbTruckDelivery } from 'react-icons/tb';
import { useSelector } from 'react-redux';

export default function DeliveryInfo({ callback }: { callback: () => void }) {
  const data = useSelector(getLocation);
  const delivery = useSelector(getDeliveryBuy);

  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">Entrega</h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <TbTruckDelivery className="text-neutral-900" size={36} />
          </div>
          <p className="font-semibold">Recibe: {data.name}</p>
          <p className="text-neutral-600">
            Direccion: {data.province} / {data.address}-{data.houseNumber}{' '}
            {data.floor !== '' && `Piso: ${data.floor}`}
          </p>
          <p className="text-neutral-600">Tel: {data.phone}</p>
          <p className="text-neutral-600">Envio a domicilio: {delivery}</p>
          <button
            className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
            onClick={callback}
          >
            Modificar método de entrega
          </button>
        </div>
      </div>
    </>
  );
}
