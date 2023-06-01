import { MdKeyboardArrowRight } from 'react-icons/md';
import { GrDropbox } from 'react-icons/gr';
import { FaMotorcycle } from 'react-icons/fa';
import { MdDirectionsRun } from 'react-icons/md';
import ContinueBtn from '../UI/ContinueBtn';
import { handlersType } from '@/types/handlers.types';

type listItemType = {
  icon: any;
  title: string;
  price: number;
  border?: boolean;
};

function ListItem({ icon, title, price, border }: listItemType) {
  return (
    <li
      className={`flex flex-row justify-between w-[300px] p-5 ${border && 'border-b border-black'}`}
    >
      <div className="flex flex-row gap-2 items-center">
        <div className="text-2xl">{icon}</div>
        <span>{title}</span>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <span className="text-sm font-semibold">$ {price}</span>
        <MdKeyboardArrowRight className="text-lg" />
      </div>
    </li>
  );
}

export default function DeliveryPay({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const handleSubmit = () => {};
  return (
    <>
      <ul className="mx-auto w-[300px] mt-10 border-black border box-content rounded-lg">
        <ListItem icon={<GrDropbox />} title="Envío por correo" price={800} border={true} />
        <ListItem icon={<FaMotorcycle />} title="Envío por moto" price={500} border={true} />
        <ListItem icon={<MdDirectionsRun />} title="Retiro en persona" price={0} />
      </ul>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={3}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
