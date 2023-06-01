import ContinueBtn from '@/Components/UI/ContinueBtn';
import { handlersType } from '@/types/addProduct/handlers.types';
import DetailsProduct from './DetailsProduct';
import { useSelector } from 'react-redux';
import { getDelivery, getDescription, getPhotos } from '@/redux/addProduct';

export default function PostProduct({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const description = useSelector(getDescription);
  const photos = useSelector(getPhotos);
  const delivery = useSelector(getDelivery);
  const handleSubmit = () => {
    console.log(description, photos, delivery);
  };

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
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
