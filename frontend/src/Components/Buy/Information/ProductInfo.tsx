import Image from 'next/image';

export default function ProductInfo({ product }: { product: any }) {
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">Producto</h1>
        <div className="text-sm mt-3 pb-3 text-center">
          <div className="w-20 h-20 overflow-hidden inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
            <Image
              className="w-full h-full"
              src={product.product.relationships.images[0]}
              alt="Shoes"
              width={100}
              height={100}
            />
          </div>
          <p className="text-neutral-600">{product.product.attributes.name}</p>
          <p className="font-semibold">Precio $ {product.product.attributes.price}</p>
          <p className="text-neutral-600">Cantidad: {product.fastBuy && 1} unidad</p>
        </div>
      </div>
    </>
  );
}
