import { MdKeyboardArrowRight } from 'react-icons/md';
import { GrDropbox } from 'react-icons/gr';
import { FaMotorcycle } from 'react-icons/fa';
import { MdDirectionsRun } from 'react-icons/md';
import ContinueBtn from '../UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';

type listItemType = {
  icon: any;
  title: string;
  price?: number;
  border?: boolean;
  callback?: () => void;
};

export function ListItem({ icon, title, price, border, callback }: listItemType) {
  return (
    <li
      className={`flex flex-row justify-between w-[300px] p-4 ${border && 'border-b border-black'}`}
      onClick={callback}
    >
      <div className="flex flex-row gap-2 items-center">
        <div className="text-2xl h-[30px] max-h-[30px] w-[45px] max-w-[45px] overflow-hidden">
          {icon}
        </div>
        <span>{title}</span>
      </div>
      <div className="flex flex-row gap-2 items-center">
        {price && <span className="text-sm font-semibold">$ {price}</span>}{' '}
        <MdKeyboardArrowRight className="text-lg" />
      </div>
    </li>
  );
}

export default function DeliveryPay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const handleSubmit = () => {
    handleAvailableStep(3);
    handleCurrentStep(3);
  };

  return (
    <ul className="mx-auto w-[300px] mt-10 border-black border box-content rounded-lg">
      <ListItem
        icon={<GrDropbox />}
        title="Envío por correo"
        price={800}
        border={true}
        callback={handleSubmit}
      />
      <ListItem
        icon={<FaMotorcycle />}
        title="Envío por moto"
        price={500}
        border={true}
        callback={handleSubmit}
      />
      <ListItem
        icon={<MdDirectionsRun />}
        title="Retiro en persona"
        price={0}
        callback={handleSubmit}
      />
    </ul>
  );
}
