import { getLocation } from '@/redux/buy';
import { TbListCheck } from 'react-icons/tb';
import { useSelector } from 'react-redux';

export default function ProductInfo({ callback }: { callback: () => void }) {
  const data = useSelector(getLocation);
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">Facturación</h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <TbListCheck size={36} />
          </div>
          <p className="font-semibold">{data.name}</p>

          <p className="text-neutral-600 text-xs">{data.phone}</p>
          <p className="text-neutral-600 text-xs">
            {data.province} - {data.address}
          </p>
          <button
            className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
            onClick={callback}
          >
            Modificar Datos
          </button>
        </div>
      </div>
    </>
  );
}
