"use client";

import Image from "next/image";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  const menuToggle = () => setOpen(!open);

  return (
    <header className="flex flex-col w-full">
      <nav className="flex w-full flex-row justify-between p-5 items-center">
        <HiOutlineMenuAlt2 className="text-2xl" onClick={menuToggle} />
        <Link href={"/"}>
          <Image
            src={
              "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__small.png"
            }
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <MdShoppingCart className="text-2xl" />
        {open && <Menu menuToggle={menuToggle} />}
      </nav>
      <div className="flex flex-row mx-5 rounded-2xl border-2 border-black overflow-hidden relative">
        <select className="border-none">
          <option value="1">Categoría 1</option>
          <option value="2">Categoría 2</option>
          <option value="3">Categoría 3</option>
          <option value="3">Categoría 4</option>
          <option value="3">Categoría 5</option>
          <option value="3">Categoría 6</option>
        </select>
        <input
          style={{ borderLeft: "2px solid #000" }}
          type="search"
          className="border-none border-l-2 border-black"
          placeholder="Buscar"
        />
        <FiSearch className="absolute top-0 bottom-0 text-2xl right-2 m-auto" />
      </div>
    </header>
  );
}
