import { BaseSyntheticEvent, useEffect, useRef } from 'react';

import { FaUserAlt, FaStore } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi2';
import { IoHeartSharp, IoNotifications } from 'react-icons/io5';
import { TiHome } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import { BsHandbagFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';

export default function Menu({ menuToggle }: { menuToggle: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: BaseSyntheticEvent) => {
    if (e.target === containerRef.current) {
      menuToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => menuToggle());

    () => window.removeEventListener('scroll', () => {});
  }, [menuToggle]);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-full w-full bg-[#0005]"
      onClick={handleClick}
      ref={containerRef}
    >
      <div className="bg-white w-10/12 h-full flex flex-col gap-6 shadow-lg">
        <div className="flex flex-row justify-between items-center bg-darkBlue p-5">
          <div className="flex flex-row items-center gap-5">
            <div className="bg-grey rounded-full p-3">
              <FaUserAlt className="text-[30px] text-darkGrey" />
            </div>
            <div className="flex flex-row text-lg gap-2 text-white">
              <span>Name</span>
              <span>LastName</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-between p-5">
          <ul className="flex flex-col gap-5 text-darkGrey">
            <li className="flex flex-row gap-4 items-center text-2xl">
              <TiHome /> Inicio
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <FiSearch /> Buscar
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <IoHeartSharp /> Favoritos
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <IoNotifications /> Notificaciones
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <BsHandbagFill /> Mis compras
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <MdLocalOffer /> Ofertas
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <HiUserCircle /> Mi cuenta
            </li>
            <li className="flex flex-row gap-4 items-center text-2xl">
              <FaStore /> Vender
            </li>
          </ul>
          <button className="w-full bg-black text-white py-3">Cerrar sesion</button>
        </div>
      </div>
    </div>
  );
}
