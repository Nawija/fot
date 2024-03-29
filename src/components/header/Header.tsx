"use client";

import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleCloseMenu() {
    setShowMenu(false);
  }
  return (
    <header className="absolute top-0 z-50 flex w-full items-center justify-between p-4 lg:flex-col lg:justify-center lg:space-y-3 lg:py-10">
      <Link href="/" className="text-main text-lg md:text-3xl">
        Jarek Olszewski
      </Link>
      <button onClick={handleShowMenu} className="text-main lg:hidden">
        <CiMenuFries className="text-xl" />
      </button>

      <ul
        className={`text-second border-second fixed left-0 top-0 z-50 flex h-screen w-full -translate-x-full flex-col items-center justify-center space-y-3 bg-black py-4 pl-12 text-start text-[13px] text-lg font-medium capitalize tracking-wide opacity-0 transition-all ease-linear lg:relative lg:flex lg:h-full lg:w-max lg:translate-x-0 lg:flex-row lg:items-center lg:space-x-5 lg:space-y-0 lg:border-t lg:bg-transparent lg:px-0 lg:text-xs lg:opacity-100 ${showMenu ? "translate-x-0 opacity-100" : ""}`}
      >
        <button
          className="absolute right-4 top-4 text-3xl lg:hidden"
          onClick={handleShowMenu}
        >
          <IoClose />
        </button>
        {NAVLINKS.map((link) => (
          <li>
            <Link
              className="hover:text-main p-1 text-start transition-colors"
              href={link.href}
              onClick={handleCloseMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
