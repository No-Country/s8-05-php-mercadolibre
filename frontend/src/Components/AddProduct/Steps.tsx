import { stepDataType } from '@/types/stepData';

type stepsType = {
  step: number;
  currentStep: number;
  handleClick: (step: number) => void;
  stepData: stepDataType[];
};

type listItemType = {
  currentStep: number;
  handleClick: (step: number) => void;
  n: number;
  icon: any;
  text: string;
  available: boolean;
};

function ListItem(props: listItemType) {
  const { currentStep, handleClick, n, icon, text, available } = props;

  const handleClickItem = () => {
    available && handleClick(n);
  };

  return (
    <li className="flex flex-col items-center font-semibold" onClick={handleClickItem}>
      <div className={`${currentStep === n ? 'bg-darkBlue' : 'bg-skyBlue'} p-3 rounded-full mb-2`}>
        <div
          className={`${currentStep === n ? 'text-white' : 'text-darkBlue'} text-xl box-content`}
        >
          {icon}
        </div>
      </div>
      <span className={currentStep === n ? 'text-darkBlue' : 'text-black'}>{text}</span>
    </li>
  );
}

export default function Steps({ step, currentStep, handleClick, stepData }: stepsType) {
  return (
    <ul className="flex w-full justify-between px-5 text-xs mt-10 relative">
      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={1}
        icon={stepData[0].icon}
        text={stepData[0].title}
        available={step >= 1}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={2}
        icon={stepData[1].icon}
        text={stepData[1].title}
        available={step >= 2}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={3}
        icon={stepData[2].icon}
        text={stepData[2].title}
        available={step >= 3}
      />

      <ListItem
        currentStep={currentStep}
        handleClick={handleClick}
        n={4}
        icon={stepData[3].icon}
        text={stepData[3].title}
        available={step >= 4}
      />

      <hr className="absolute w-9/12 border-t-2 border-t-skyBlue -z-10 border-dashed top-5 left-10" />
    </ul>
  );
}
