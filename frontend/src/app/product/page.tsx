

const Product = () => {

  return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"></img>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div className="flex mb-4">
            <p className="text-xs title-font text-neutral-900 tracking-widest">Producto/Categoria/Sub-categoria</p>
            <span className="flex items-center ml-8">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 text-blue" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3 text-xs">4.5</span>
            </span>
          </div>
          <h1 className="text-blue text-3xl title-font font-medium mb-1">Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1" (Black)</h1>
          <div className="flex mt-4">
            <span className="title-font font-medium text-3xl text-neutral-900">$1,200.00</span>
          </div>
          <p className="leading-relaxed text-xl"> en 3 cuotas de $400</p>
          <div className="flex  py-2">
            <span className="text-gray-800">Delivery:</span>
            <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">Envio Gratis</span>
          </div>
          <div className="flex  py-2">
            <span className="text-gray-800">Stock:</span>
            <span className="ml-auto bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl">26 unidades</span>
          </div>
          <div className="flex mt-5 items-center pt-5 border-t-2 border-gray-100 mb-6">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-md w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-md w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-blue rounded-md w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
                <input
                  type="number"
                  placeholder="0"
                  className="rounded-3xl border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:border-blue text-base pl-3 w-1/2"
                  min="0"
                  step="1"
                  pattern="\d*"
                ></input>
            </div>
          </div>
          <div className="flex g:w-1/2 w-full">
            <button className="flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl">Comprar Ahora</button>
            <button className="flex ml-auto text-blue bg-white border border-blue py-2 px-6 focus:outline-none rounded-3xl">Agregar al carrito</button>
          </div>
          <div className="flex g:w-1/2 w-full py-3">
            <button className="flex text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">Compartir</button>
            <button className="flex ml-3 text-neutral-600 bg-white border border-neutral-600 py-1 px-3 focus:outline-none rounded-3xl text-sm">Guardar</button>
          </div>
          <p className="text-xl text-neutral-900 font-semibold py-3">Caracteristicas del producto</p>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos hic quae rerum neque dolores perspiciatis, modi laudantium illo dicta nam autem ad earum ea, aliquam in sint impedit sapiente.</p>

          <p className="leading-relaxed py-3">
            SKU:
            <span className="text-neutral-900"> 29087645</span>
          </p>
          <p className="text-xl text-neutral-900 font-semibold pt-3">Brand</p>

        </div>
        <div className="flex">
          <p className="text-xl text-neutral-900 font-semibold py-3 mt-5 items-center pt-5 border-b-2 border-blue">
            Tambien te puede interesar 
            <span className="text-neutral-600">(4)</span>
          </p>
        </div>
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-wrap -m-4 ">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-neutral-400 rounded-xl">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"></img>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Categoria</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Articulo a la venta </h2>
                  <p className="mt-1">AR $199,999.00</p>
                  <button className="flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-3xl mx-auto mt-2">Comprar Ahora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </section>
  );
};

export default Product;
