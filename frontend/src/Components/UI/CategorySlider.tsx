import Link from 'next/link';
import Product from '../Product/Product';

type categoryProp = {
  route: string;
  title: string;
  products: {}[];
};

export default function CategorySlider({ route, title, products }: categoryProp) {
  return (
    <div className="flex flex-col w-full my-10">
      <div className="flex justify-between px-5 mb-5 items-center">
        <span className="text-2xl font-semibold">{title}</span>
        <Link href={route} className="min-w-[70px] text-sm text-center">
          VER MÁS
        </Link>
      </div>
      <div className="flex flex-row overflow-x-auto hiddeScroll pb-2">
        {products?.length > 0 ? (
          <>
            {products.map((product: any) => (
              <Product key={product.attributes.id} data={product.attributes} />
            ))}
          </>
        ) : (
          <h6 className="text-center my-5 w-full">Cargando</h6>
        )}
      </div>
    </div>
  );
}
