import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import { FaUserAlt, FaStore } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi2';
import { IoHeartSharp, IoNotifications } from 'react-icons/io5';
import { TiHome } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import { BsHandbagFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

export default function Menu({
  menuToggle,
  search,
}: {
  menuToggle: () => void;
  search: HTMLInputElement | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isAuth, setIsAuth] = useState(false);

  const handleClick = (e: BaseSyntheticEvent) => {
    if (e.target === containerRef.current) {
      menuToggle();
    }
  };

  const handleCloseSesion = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  const handleSearch = () => {
    menuToggle();
    search && search.focus();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    token && token !== '' && setIsAuth(true);
  }, []);

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
      <div className="bg-white md:w-1/4 lg:1/2 w-full h-full flex flex-col gap-6 shadow-lg">
        {!isAuth ? (
          <div className="flex flex-col p-5 gap-8">
            <div className="flex flex-row gap-5">
              <HiOutlineMenuAlt2 className="text-2xl" onClick={menuToggle} />
              <div className="flex-grow">
                <Link href={'/'} className="font-black">
                  Mercado <span className="text-darkBlue">C</span>ountry
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-between">
              <div className="bg-skyBlue rounded-full h-max p-3">
                <FaUserAlt className="text-[30px] text-gray-400" />
              </div>
              <div className="flex flex-col max-w-[80%]">
                <span className="text-lg font-semibold">Te damos la bienvenida</span>
                <p className="text-xs">Ingresá a tu cuenta para ver tus compras, favoritos y más</p>
              </div>
            </div>
            <div className="flex flex-row w-full justify-center gap-5">
              <Link
                href={'/login'}
                className="text-center rounded-full bg-darkBlue text-white w-[150px] py-2"
              >
                Ingresá
              </Link>
              <Link
                href={'/register'}
                className="text-center rounded-full border border-darkBlue text-darkBlue w-[150px] py-2 font-semibold"
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        ) : (
          <>
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
                <li>
                  <Link href={'/'} className="flex flex-row gap-4 items-center text-3xl">
                    <TiHome /> <span className='text-lg'>Inicio</span>
                  </Link>
                </li>
                <li className="flex flex-row gap-4 items-center text-3xl" onClick={handleSearch}>
                  <FiSearch /> <span className='text-lg'>Buscar</span>
                </li>
                <li className="flex flex-row gap-4 items-center text-3xl">
                  <IoHeartSharp /> <span className='text-lg'>Favoritos</span>
                </li>
                <li className="flex flex-row gap-4 items-center text-3xl">
                  <IoNotifications /> <span className='text-lg'>Notificaciones</span>
                </li>
                <li>
                  <Link href={'/cart'} className="flex flex-row gap-4 items-center text-3xl">
                    <BsHandbagFill /> <span className='text-lg'>Mis compras</span>
                  </Link>
                </li>
                <li className="flex flex-row gap-4 items-center text-3xl">
                  <MdLocalOffer />  <span className='text-lg'>Ofertas</span>
                </li>
                <li className="flex flex-row gap-4 items-center text-3xl">
                  <HiUserCircle />  <span className='text-lg'>Mi cuenta</span>
                </li>
                <li>
                  <Link href={'/add-product'} className="flex flex-row gap-4 items-center text-3xl">
                    <FaStore />  <span className='text-lg'>Vender</span>
                  </Link>
                </li>
              </ul>
              <button
                className="w-max text-darkBlue py-3 text-left font-medium text-lg hover:underline"
                onClick={handleCloseSesion}
              >
                CERRAR SESIÓN
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
