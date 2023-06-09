import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';

import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Logged from './Logged';

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
          <Logged handleCloseSesion={handleCloseSesion} handleSearch={handleSearch} />
        )}
      </div>
    </div>
  );
}
