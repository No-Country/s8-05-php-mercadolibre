import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';

type CardCategoryProps = {
  id: string;
  title: string;
  img: any;
  leave: string;
  store: string;
  price: string;
};

export default function CardCategory({ id, title, img, leave, store, price }: CardCategoryProps) {
  return (
    <div className="lg:w-1/3 md:1/2 w-full p-2">
      <div className="flex overflow-hidden bg-white rounded-lg border border-neutral-200 shadow-lg">
        <div className="w-1/2 bg-cover">
          <Link href={`/product/${id}`}>
            <Image
              src={img}
              width={400}
              height={200}
              alt="Imagen de tecnologia"
              className="object-cover w-full h-5/6"
            />
          </Link>
          <p className="text-center text-blue text-sm mt-2">{store}</p>
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-semibold text-blue">{title}</h1>
            <AiFillHeart className="text-grey-600 w-16" />
          </div>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-base font-bold text-gray-600">AR $ {price}</h1>
            <div className="flex mt-1 item-center">
              <svg className="w-3 h-3 text-blue fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg className="w-3 h-3 text-blue fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg className="w-3 h-3 text-blue fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg className="w-3 h-3 text-blue fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg className="w-3 h-3 text-blue fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between mt-3 item-center">
            <p className="text-sm text-green">{leave}</p>
            <p className="text-sm text-green justify-start">Flash</p>
          </div>
        </div>
      </div>
    </div>
  );
}
