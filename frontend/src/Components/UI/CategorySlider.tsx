import Link from 'next/link';
import Product from '../Product';

type categoryProp = {
  route: string;
};

export default function CategorySlider({ route }: categoryProp) {
  return (
    <div className="flex flex-col w-full my-10">
      <div className="flex justify-between px-5 mb-5 items-center">
        <span className="text-2xl font-semibold">Tecnología</span>
        <Link href={route}>VER MÁS</Link>
      </div>
      <div className="flex flex-row overflow-y-auto hiddeScroll pb-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
