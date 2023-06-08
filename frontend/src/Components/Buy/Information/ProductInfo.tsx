import Image from 'next/image';

function BuyProduct({ image, name, price, quantity }: any) {
  return (
    <div className="text-sm mt-3 pb-3 text-center">
      <div className="w-20 h-20 overflow-hidden inline-flex items-center justify-center rounded-full bg-neutral-200 mb-5 flex-shrink-0">
        <Image className="w-full h-full" src={image} alt="Shoes" width={100} height={100} />
      </div>
      <p className="text-neutral-600">{name}</p>
      <p className="font-semibold">Precio $ {price}</p>
      <p className="text-neutral-600">Cantidad: {quantity} unidad</p>
    </div>
  );
}

export default function ProductInfo({ product }: { product: any }) {
  return (
    <>
      <div className="mx-auto w-[300px] mt-10 p-4 box-content rounded-lg">
        <h1 className="font-semibold ">Producto</h1>
        {product.fastBuy ? (
          <BuyProduct
            image={product.product.relationships.images[0]}
            name={product.product.attributes.name}
            price={product.product.attributes.price}
            quantity={1}
          />
        ) : (
          product.map((item: any) => (
            <BuyProduct
              key={item.id}
              image={item.relationships.products.relationships.images[0]}
              name={item.relationships.products.attributes.name}
              price={item.relationships.products.attributes.price}
              quantity={item.attributes.quantity}
            />
          ))
        )}
      </div>
    </>
  );
}
