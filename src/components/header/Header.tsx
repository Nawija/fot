"use client";
import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <header
      className={`fixed top-0 z-[999] w-full text-white transition-colors duration-300 ${
        showMenu || isScrolled ? "bg-black/90 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-7 py-3">
        <Link href="/" className=" text-lg lg:text-2xl">
          Jarek Olszewski
        </Link>
        <MenuBurger handleShowMenu={handleShowMenu} showMenu={showMenu} />
        <Link className="hidden bg-color px-4 py-2 text-sm lg:flex" href="/">
          Strefa Klienta
        </Link>
        <ul
          className={`absolute left-0 top-full flex h-screen w-full flex-col items-center justify-center space-y-6 bg-white/90 font-medium text-black backdrop-blur-3xl transition-all lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:text-sm lg:font-light lg:text-white lg:backdrop-blur-none ${
            showMenu
              ? "translate-y-0 opacity-100 "
              : "translate-y-full rounded-t-full opacity-0 lg:h-auto lg:opacity-100"
          }`}
        >
          {NAVLINKS.map((link) => (
            <li key={link.label} className="transition-colors hover:text-color">
              {link.label}
            </li>
          ))}
          <Link className="lg:hidden text-white bg-color px-4 py-2 text-sm" href="/">
            Strefa Klienta
          </Link>
        </ul>
      </div>
    </header>
  );
}
