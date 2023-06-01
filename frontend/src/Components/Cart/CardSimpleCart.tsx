import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import Link from 'next/link';

type CardSimpleCartProps = {
  title: string;
  price: number;
  img: string;
  unity: number;
  add: boolean;
};

export default function CardSimpleCart({
  title, price, img, add, unity
}: CardSimpleCartProps) {
  return (
    <Card
      horizontal
      imgAlt={title}
      className='p-4 my-4 shadow-none'
      imgSrc = {img}
    >
      <h5 className="text-lg font-bold tracking-tight text-blue">
        {title}
      </h5>
      {add && (
        <div className="mr-auto text-neutral-600 bg-white border border-neutral-600 p-1 text-xs rounded-3xl">
          {unity} unidades
        </div>
      )}
      <div className="flex justify-end mt-3 items-end">
        <p className="font-semibold text-gray-700">
          AR $ {price}
        </p>
      </div>
      {add && (
        <div className="text-left border-t border-1">
          <Link href='#' className="text-blue mt-4 text-sm hover:underline">
            Eliminar
          </Link>
        </div>
      )}
    </Card>
  );
}
