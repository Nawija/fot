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
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="px-4 py-5 text-lg  lg:py-5 lg:text-2xl"
        >
          Jarek Olszewski
        </Link>
        <MenuBurger />
        <Link className="text-sm bg-color py-2 px-4" href="/">Strefa Klienta</Link>
        <ul className="flex items-center justify-center text-sm space-x-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAVLINKS.map((link) => (
            <li className="hover:text-color transition-colors">{link.label}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
