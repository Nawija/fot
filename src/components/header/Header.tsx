"use client";

import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { useState } from "react";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="absolute top-0 z-50 flex w-full flex-col items-center justify-center space-y-5 p-3 text-white lg:py-10">
      <Link href="/" className="b-5 font-thin uppercase md:text-7xl">
        Jarek Olszewski
      </Link>
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-center">
        <button onClick={handleShowMenu} className="lg:hidden">
          Men
        </button>
        <ul
          className={`lg: absolute left-0 top-0 z-50 flex h-full w-full -translate-x-full flex-col items-start justify-center space-y-3 bg-gradient-radial from-black to-zinc-900  pl-12 text-start text-[12px] text-lg font-semibold uppercase tracking-wide text-gray-300 opacity-0 transition-all ease-linear lg:relative lg:flex lg:w-max lg:translate-x-0 lg:flex-row lg:items-center lg:space-x-5 lg:space-y-0 lg:bg-none lg:px-0 lg:text-xs lg:opacity-100 ${showMenu ? "translate-x-0 scale-100 opacity-100" : "scale-75 lg:scale-100"}`}
        >
          <button
            className="absolute right-2 top-2 lg:hidden"
            onClick={handleShowMenu}
          >
            X
          </button>
          {NAVLINKS.map((link) => (
            <li>
              <Link
                className="p-1 transition-colors hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" hidden items-center justify-center space-x-2 text-xl lg:flex">
        <Link href="/" target="_blank">
          <RiInstagramFill />
        </Link>
        <Link href="/" target="_blank">
          <RiFacebookBoxFill />
        </Link>
      </div>
    </header>
  );
}
