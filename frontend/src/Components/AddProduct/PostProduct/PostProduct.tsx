import { handlersType } from '@/types/handlers.types';
import DetailsProduct from './DetailsProduct';
import { useSelector } from 'react-redux';
import { getDelivery, getDescription, getPhotos } from '@/redux/addProduct';
import { useRouter } from 'next/navigation';
import { apiClientPriv } from '@/utils/apiClient';

export default function PostProduct({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const description = useSelector(getDescription);
  const photos = useSelector(getPhotos);
  const delivery = useSelector(getDelivery);

  const { push } = useRouter();

  const handleSubmit = () => {
    const data = {
      description: description.description,
      price: description.price,
      stock: description.stock,
      measures: {
        length: description.length,
        width: description.width,
        height: description.height,
      },
      stauts: description.status,
      delivery: delivery.delivery,
      local: delivery.local,
      photos,
    };
    apiClientPriv
      .post('/products', data)
      .then(() => push('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <DetailsProduct />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
        <button
          className="rounded-full py-2 mx-4 bg-darkBlue text-white font-semibold"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
