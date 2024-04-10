"use client";

import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { useState } from "react";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleCloseMenu() {
    setShowMenu(false);
  }
  return (
    <header className="fixed top-0 z-[999] w-full text-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-6">
        <Link href="/" className=" text-lg   lg:text-2xl">
          Jarek Olszewski
        </Link>
        <MenuBurger handleShowMenu={handleShowMenu} />
        <Link className="hidden bg-color px-4 py-2 text-sm lg:flex" href="/">
          Strefa Klienta
        </Link>
        <ul
          className={`absolute left-0 top-full flex h-screen w-full flex-col items-center justify-center space-y-6 bg-white lg:bg-transparent text-sm text-black transition-all lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:space-x-6 lg:space-y-0 lg:text-white ${showMenu ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 h-0 rounded-t-full"}`}
        >
          {NAVLINKS.map((link) => (
            <li className="transition-colors hover:text-color">{link.label}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
