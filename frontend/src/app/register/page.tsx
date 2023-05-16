import AlternativeNav from "@/Components/Navbar/AlternativeNav";

import { VscMail } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { SlLock } from "react-icons/sl";

export default function Register() {
  return (
    <>
      <AlternativeNav />
      <div className="py-10 px-5 flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Completá los datos para crear tu cuenta</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 bg-white justify-between items-center p-3 rounded-lg shadow-lg">
            <VscMail className="text-3xl text-blue" />
            <div className="flex flex-col pl-3">
              <h2>Agregá tu e-mail</h2>
              <span className="text-sm opacity-60">Recibirás información de tu cuenta</span>
            </div>
            <button className="bg-blue px-3 ml-2 py-2 rounded-md text-white text-sm font-semibold">
              Agregar
            </button>
          </div>
          <div className="flex flex-row gap-2 bg-white justify-between items-center p-3 rounded-lg shadow-lg">
            <BiUserCircle className="text-3xl text-blue" />
            <div className="flex flex-col pl-3">
              <h2>Elegí tu nombre</h2>
              <span className="text-sm opacity-60">Contanos cómo querés que te llamemos.</span>
            </div>
            <button className="bg-blue px-3 ml-2 py-2 rounded-md text-white text-sm font-semibold">
              Agregar
            </button>
          </div>
          <div className="flex flex-row gap-2 bg-white justify-between items-center p-3 rounded-lg shadow-lg">
            <GiSmartphone className="text-3xl text-blue" />
            <div className="flex flex-col pl-3">
              <h2>Validá tu teléfono</h2>
              <span className="text-sm opacity-60">Podrás usarlo para ingresar a tu cuenta.</span>
            </div>
            <button className="bg-blue px-3 ml-2 py-2 rounded-md text-white text-sm font-semibold">
              Agregar
            </button>
          </div>
          <div className="flex flex-row gap-2 bg-white justify-between items-center p-3 rounded-lg shadow-lg">
            <SlLock className="text-2xl text-blue" />
            <div className="flex flex-col pl-3">
              <h2>Creá tu contraseña</h2>
              <span className="text-sm opacity-60">Mantendrás tu cuenta protegida.</span>
            </div>
            <button className="bg-blue px-3 ml-2 py-2 rounded-md text-white text-sm font-semibold">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
