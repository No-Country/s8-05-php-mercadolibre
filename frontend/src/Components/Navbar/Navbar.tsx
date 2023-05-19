'use client';

import { HiOutlineMenuAlt2, HiShoppingCart } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { IoHeartSharp, IoNotifications } from 'react-icons/io5';

import { useState } from 'react';
import Menu from './Menu';
import Link from 'next/link';

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  const menuToggle = () => setOpen(!open);

  return (
    <header className="flex flex-col w-full">
      <nav className="flex w-full flex-row justify-between p-5 items-center gap-5">
        <HiOutlineMenuAlt2 className="text-2xl" onClick={menuToggle} />
        <div className="flex-grow">
          <Link href={'/'}>Mercado Country</Link>
        </div>
        <div className="flex flex-row text-2xl gap-3">
          <IoHeartSharp />
          <IoNotifications />
          <HiShoppingCart />
        </div>
        {open && <Menu menuToggle={menuToggle} />}
      </nav>
      <div className="flex flex-row mx-5 rounded-lg border border-black overflow-hidden relative mb-5 box-border">
        <div className="relative w-7/12">
          <input
            style={{ borderRight: '1px solid #000' }}
            type="search"
            className="border-none w-full pr-8"
            placeholder="Buscar"
          />
          <FiSearch className="absolute top-0 bottom-0 text-xl right-2 m-auto" />
        </div>
        <select className="border-none w-5/12 text-sm">
          <option value="1">Categoría</option>
          <option value="2">Categoría 2</option>
          <option value="3">Categoría 3</option>
          <option value="3">Categoría 4</option>
          <option value="3">Categoría 5</option>
          <option value="3">Categoría 6</option>
        </select>
      </div>
    </header>
  );
}
