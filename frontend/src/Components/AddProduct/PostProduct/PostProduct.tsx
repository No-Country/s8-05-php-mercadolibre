import ContinueBtn from '@/Components/UI/ContinueBtn';
import { handlersType } from '@/types/addProduct/handlers.types';
import DetailsProduct from './DetailsProduct';

export default function PostProduct({ handleAvailableStep, handleCurrentStep }: handlersType) {
  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <DetailsProduct />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm">
        <ContinueBtn
          handleAvailableStep={handleAvailableStep}
          handleCurrentStep={handleCurrentStep}
          num={5}
        />
      </div>
    </div>
  );
}
