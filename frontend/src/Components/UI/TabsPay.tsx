import { AiFillCreditCard, AiOutlineCreditCard, AiFillBuild } from "react-icons/ai";

export default function TabsPay() {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 md:py-6 lg:py-6 py-4  mx-[5%]">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="flex items-center sm:w-1/3 w-full justify-center">
        <div className="h-10 w-10 text-2xl inline-flex items-center justify-center rounded-full border-2 text-blue flex-shrink-0">
          <AiFillCreditCard />
        </div>
        <div className="flex-grow text-left mt-6 ml-4 sm:mt-0">
          <h2 className="text-gray-900 text-base title-font font-medium">Tarjeta de crédito</h2>
          <a className="text-darkBlue text-xs hover:underline inline-flex items-center">
            Ver promociones
          </a>
        </div>
      </div>
      <div className="flex items-center sm:w-1/3 w-full justify-center">
        <div className="h-10 w-10 text-2xl inline-flex items-center justify-center rounded-full border-2 text-blue flex-shrink-0">
          <AiOutlineCreditCard />
        </div>
        <div className="flex-grow text-left mt-6 ml-4 sm:mt-0">
          <h2 className="text-gray-900 text-base title-font font-medium">Tarjeta de débito</h2>
          <a className="text-darkBlue text-xs hover:underline inline-flex items-center">
            Ver más
          </a>
        </div>
      </div>
      <div className="flex items-center sm:w-1/3 w-full justify-center">
        <div className="h-10 w-10 text-2xl inline-flex items-center justify-center rounded-full border-2 text-blue flex-shrink-0">
          <AiFillBuild />
        </div>
        <div className="flex-grow text-left mt-6 ml-4 sm:mt-0">
          <h2 className="text-gray-900 text-base title-font font-medium">Efectivo</h2>
          <a className="text-darkBlue text-xs hover:underline inline-flex items-center">
          Ver más
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
