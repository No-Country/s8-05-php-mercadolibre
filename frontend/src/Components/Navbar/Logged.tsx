'use client';

import { HiUserCircle } from 'react-icons/hi2';
import { IoHeartSharp, IoNotifications } from 'react-icons/io5';
import { TiHome } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import { BsHandbagFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';
import { FaUserAlt, FaStore } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClientPriv } from '@/utils/apiClient';

export default function Logged({ handleCloseSesion, handleSearch }: any) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    apiClientPriv('/profile')
      .then(({ data }: any) => {
        const res = data.data.attributes;
        setName(res.name);
        setLastName(res.lastname);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center bg-darkBlue p-5">
        <div className="flex flex-row items-center gap-5">
          <div className="bg-grey rounded-full p-3">
            <FaUserAlt className="text-[30px] text-darkGrey" />
          </div>
          <div className="flex text-lg text-white flex-col">
            <span>{name}</span>
            <span>{lastName}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-between p-5">
        <ul className="flex flex-col gap-5 text-darkGrey">
          <li>
            <Link href={'/'} className="flex flex-row gap-4 items-center text-2xl">
              <TiHome /> Inicio
            </Link>
          </li>
          <li className="flex flex-row gap-4 items-center text-2xl" onClick={handleSearch}>
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
          <li>
            <Link href={'/add-product'} className="flex flex-row gap-4 items-center text-2xl">
              <FaStore /> Vender
            </Link>
          </li>
        </ul>
        <button
          className="w-max text-darkBlue py-3 text-left font-semibold text-lg"
          onClick={handleCloseSesion}
        >
          Cerrar sesion
        </button>
      </div>
    </>
  );
}
