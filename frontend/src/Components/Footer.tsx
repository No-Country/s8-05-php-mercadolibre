import { RiSendPlaneFill } from 'react-icons/ri';

export default function Footer() {
  return (
<footer>
  <div className="bg-blue py-10 px-8 flex flex-col items-center md:items-start md:flex-row md:justify-between gap-5">
    <div className="text-white text-center md:text-left">
      <p className="font-semibold">Subscribite a nuestro Newsletter</p>
      <span className="font-extralight">¡Recibí nuestras ofertas antes!</span>
    </div>
    <div className="relative flex items-center">
      <input
        type="text"
        className="pr-9 rounded-lg border-none shadow-md shadow-sky-400 text-sm"
        placeholder="Ingresá tu mail"
      />
      <RiSendPlaneFill className="absolute right-2 text-2xl text-darkGrey" />
    </div>
  </div>
  <div className="container px-5 py-2 mx-auto">
    <div className="flex flex-wrap md:text-left text-center  text-darkGrey">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <ul className="flex flex-col gap-4 text-sm">
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
          <li>FAQ</li>
          <li>Terminos & condiciones</li>
        </ul>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <ul className="flex flex-col gap-4 text-sm">
          <li>Mi Cuenta</li>
          <li>Mis Compras</li>
          <li>Guardados</li>
          <li>Ayuda</li>
        </ul>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <div className="text-sm">
          <p className="font-medium">2023- Mercado Country SRL</p>
          <span className="font-light">Av. Libertado, CP 1101, CABA</span>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
