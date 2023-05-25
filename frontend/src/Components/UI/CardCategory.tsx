import Image from 'next/image';
import { Badge } from 'flowbite-react';
import Link from 'next/link';

type CardCategoryProps = {
  title: string;
  img: any;
  offer: boolean;
  descriptionOffer: string;
  route: string;
};

export default function CardCategory({
  title,
  img,
  offer,
  descriptionOffer,
  route,
}: CardCategoryProps) {
  return (
    <div className="lg:w-1/4 w-1/2 p-2">
      <div className="p-4 border-2 border-gray-400 rounded-lg text-center">
        <h3 className="text-gray-900 title-font text-lg font-semibold text-center">{title}</h3>
        <a className="mt-2 block relative h-48 rounded overflow-hidden">
          <Image
            src={img}
            width={400}
            height={200}
            alt="Imagen de tecnologia"
            className="object-cover w-full h-full"
          />
        </a>
        {offer && (
          <Badge
            color="pink"
            size="xl"
            className="justify-center my-2 py-4 rounded-3xl md:text-lg text-sm"
          >
            {descriptionOffer} de Descuento
          </Badge>
        )}
        <Link href={route} className="text-blue mt-6 hover:underline">
          Ver productos
        </Link>
      </div>
    </div>
  );
}
