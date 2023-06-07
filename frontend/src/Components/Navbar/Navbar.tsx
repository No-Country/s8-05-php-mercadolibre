'use client';

import { HiOutlineMenuAlt2, HiShoppingCart } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

import { useRef, useState } from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CategoriesList from '../UI/CategoriesList';

export default function NavbarComponent() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);

  const menuToggle = () => setOpen(!open);

  return (
    <header className="flex flex-col w-full">
      <nav className="flex w-full flex-row justify-between p-5 items-center gap-5">
        <HiOutlineMenuAlt2 className="text-2xl" onClick={menuToggle} />
        <div className="flex-grow">
          <Link href={'/'}>Mercado Country</Link>
        </div>
        <Link href={'/cart'} className="flex flex-row text-2xl gap-3 text-darkGrey">
          <HiShoppingCart />
        </Link>
        {open && <Menu menuToggle={menuToggle} search={searchRef.current} />}
      </nav>
      <div className="flex flex-row mx-5 rounded-lg border border-black overflow-hidden relative mb-5 box-border">
        <div className="relative w-7/12">
          <input
            style={{ borderRight: '1px solid #000' }}
            type="search"
            className="border-none w-full pr-8"
            placeholder="Buscar"
            ref={searchRef}
          />
          <FiSearch className="absolute top-0 bottom-0 text-xl right-2 m-auto" />
        </div>
        <div className="w-5/12">
          <CategoriesList links={true} />
        </div>
      </div>
    </header>
  );
}
