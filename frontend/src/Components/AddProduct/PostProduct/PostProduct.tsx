import { useSelector } from 'react-redux';
import { getDelivery, getDescription, getPhotos } from '@/redux/addProduct';
import { useRouter } from 'next/navigation';
import { apiClientPriv } from '@/utils/apiClient';
import Detail from '@/Components/Product/Detail';
import { create } from 'domain';

export default function PostProduct() {
  const description = useSelector(getDescription);
  const photos = useSelector(getPhotos);
  const delivery = useSelector(getDelivery);

  const { push } = useRouter();

  const form: any = new FormData();

  const measures = {
    length: description.length,
    width: description.width,
    height: description.height,
  };

  form.append('name', description.title);
  form.append('description', description.description);
  form.append('price', Number(description.price));
  form.append('stock', Number(description.stock));
  form.append('measures', JSON.stringify(measures));
  form.append('status', description.state);
  form.append('delivery', delivery.delivery);
  form.append('local', delivery.local);
  form.append('image', photos);
  form.append('brand_id', 1);
  form.append('subcategory_id', 1);

  const handleSubmit = () => {
    apiClientPriv
      .post('/products', form)
      .then(() => {
        alert('Producto agregado con éxito');
        push('/');
      })
      .catch((err) => console.log(err));
  };

  const product = {
    image: URL.createObjectURL(photos[0]),
    id: 1,
    name: description.title,
    price: description.price,
    stock: description.stock,
    description: description.description,
  };

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="mb-4">
        <Detail data={product} />
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
