"use client";

import Image from "next/image";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiSquares2X2 } from "react-icons/hi2";
import { MdShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

import { useState } from "react";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  const menuToggle = () => setOpen(!open);

  return (
    <header className="flex flex-col w-full">
      <nav className="flex w-full flex-row justify-between p-5 items-center">
        <HiOutlineMenuAlt2 className="text-2xl" onClick={menuToggle} />
        <Image
          src={
            "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__small.png"
          }
          width={50}
          height={50}
          alt="logo"
        />
        <MdShoppingCart className="text-2xl" />
        {open && (
          <div className="absolute top-0 left-0 bg-primary w-10/12 h-full z-[100] p-5 flex flex-col gap-6">
            <HiOutlineMenuAlt2 className="text-3xl" onClick={menuToggle} />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                <FaUserCircle className="text-4xl" />
                <div className="flex flex-col text-lg">
                  <span>Name</span>
                  <span>LastName</span>
                </div>
                <MdKeyboardArrowDown className="text-2xl" />
              </div>
              <IoIosNotifications className="text-2xl" />
            </div>
            <div className="flex flex-col w-full h-full justify-between">
              <ul>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
                <li className="flex flex-row gap-4 items-center text-2xl">
                  <HiSquares2X2 /> Lorem
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3">Button</button>
            </div>
          </div>
        )}
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
          className="border-none border-l-2 border-black focus:outline-none"
          placeholder="Buscar"
        />
        <FiSearch className="absolute top-0 bottom-0 text-2xl right-2 m-auto" />
      </div>
    </header>
  );
}
