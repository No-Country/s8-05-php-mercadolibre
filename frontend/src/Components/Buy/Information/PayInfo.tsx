import { getPay } from '@/redux/buy';
import { selectCompany } from '@/utils/selectCompany';

import { useSelector } from 'react-redux';

export default function ProductInfo({ callback }: { callback: () => void }) {
  const data = useSelector(getPay);
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">Método de pago</h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            {selectCompany(data.company)}
          </div>
          <p className="text-neutral-800">{data.company}</p>
          {data.cardNumber ? (
            <p className="text-neutral-600 text-xs">
              {'*'.repeat(data.cardNumber.length - 4)}
              {data.cardNumber.slice(-4)}
            </p>
          ) : (
            'Efectivo'
          )}
          <p className="text-neutral-600">{data.type}</p>
          <button
            className="bg-transparent text-darkBlue text-sm mt-3 rounded py-2"
            onClick={callback}
          >
            Modificar
          </button>
        </div>
      </div>
    </>
  );
}
