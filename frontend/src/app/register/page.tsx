import { VscMail } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { SlLock } from "react-icons/sl";

import Card from "@/Components/Register/Card";
import LayoutAuth from "@/Components/LayoutAuth";

export default function Register() {
  return (
    <LayoutAuth>
      <h1 className="text-2xl font-semibold">Completá los datos para crear tu cuenta</h1>
      <div className="flex flex-col gap-5 lg:gap-1">
        <Card
          title={"Agregá tu e-mail"}
          subTitle={"Recibirás información de tu cuenta"}
          icon={<VscMail />}
          completed={false}
          route={"/register/email"}
          currentStep={true}
        />
        <Card
          title={"Elegí tu nombre"}
          subTitle={"Contanos cómo querés que te llamemos"}
          icon={<BiUserCircle />}
          completed={false}
          route={"/register/user"}
          currentStep={true}
        />
        <Card
          title={"Validá tu teléfono"}
          subTitle={"Podrás usarlo para ingresar a tu cuenta"}
          icon={<GiSmartphone />}
          completed={false}
          route={"/register/phone"}
          currentStep={true}
        />
        <Card
          title={"Creá tu contraseña"}
          subTitle={"Mantendrás tu cuenta protegida"}
          icon={<SlLock />}
          completed={false}
          route={"/register/password"}
          currentStep={true}
        />
      </div>
      <button type="submit" className="bg-blue text-white py-3 rounded-full">
        Continuar
      </button>
    </LayoutAuth>
  );
}
