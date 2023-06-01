import { FaEdit } from 'react-icons/fa';
import { HiCamera } from 'react-icons/hi';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { BsBoxFill } from 'react-icons/bs';

type stepsType = {
  step: number;
  currentStep: number;
  handleClick: (step: number) => void;
};

type listItemType = {
  currentStep: number;
  handleClick: (step: number) => void;
  n: number;
  icon: any;
  text: string;
  available: boolean;
  alternative?: boolean;
};

function ListItem(props: listItemType) {
  const { currentStep, handleClick, n, icon, text, available, alternative } = props;

  const handleClickItem = () => {
    available && handleClick(n);
  };

  return (
    <li className="flex flex-col items-center font-semibold" onClick={handleClickItem}>
      <div className={`${currentStep === n ? 'bg-darkBlue' : 'bg-skyBlue'} p-3 rounded-full mb-2`}>
        <div
          className={`${currentStep === n ? 'text-white' : 'text-darkBlue'} ${
            alternative && 'relative left-[1.5px]'
          } text-xl box-content`}
        >
          {icon}
        </div>
      </div>
      <span className={currentStep === n ? 'text-darkBlue' : 'text-black'}>{text}</span>
    </li>
  );
}

export default function Steps({ step, currentStep, handleClick }: stepsType) {
  return (
    <ul className="flex w-full justify-between px-5 text-xs mt-10 relative">
      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={1}
        icon={<FaEdit />}
        text={'Descripcion'}
        available={step >= 1}
        alternative={true}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={2}
        icon={<HiCamera />}
        text={'Fotos'}
        available={step >= 2}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={3}
        icon={<BsBoxFill />}
        text={'Envio'}
        available={step >= 3}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={4}
        icon={<IoCheckmarkCircle />}
        text={'Publicar'}
        available={step >= 4}
      />

      <hr className="absolute w-9/12 border-t-2 border-t-skyBlue -z-10 border-dashed top-5 left-10" />
    </ul>
  );
}
