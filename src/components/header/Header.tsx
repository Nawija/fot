"use client";
import { NAVLINKS } from "@/constants/Links";
import { nanum_gothic, raleway } from "@/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuBurger from "./MenuBurger";
import StrefaKlienta from "./StrefaKlienta";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
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
      className={`${raleway.className} fixed top-0 z-[999] w-full text-white transition-all duration-500 ${
        showMenu || isScrolled ? "bg-black/90 py-1" : "py-10"
      }`}
    >
      <div className="z-50 mx-auto flex max-w-screen-2xl items-center justify-between px-7 py-3">
        <Link
          href="/"
          className={` ${nanum_gothic.className} text-lg lg:text-2xl`}
        >
          J<span className={`${isScrolled ? "":""}`}>arek</span> Olszewski
        </Link>
        <MenuBurger handleShowMenu={handleShowMenu} showMenu={showMenu} />
        <StrefaKlienta className="hidden lg:block" />
        <div
          className={`absolute left-0 top-full h-screen w-full bg-color transition-transform duration-300 ${
            showMenu
              ? "scale-100 opacity-100 "
              : "translate-x-full opacity-0 lg:hidden"
          }`}
        />
        <ul
          className={`absolute left-0 top-full flex h-screen w-full flex-col items-center justify-center space-y-8 bg-black text-lg font-semibold text-gray-200 transition-all duration-300 lg:left-1/2 lg:top-1/2 lg:w-max lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:text-sm lg:font-normal lg:capitalize lg:text-white ${
            showMenu
              ? "translate-x-0 opacity-100 "
              : "-translate-x-full opacity-0 lg:opacity-100"
          }`}
        >
          {NAVLINKS.map((link) => (
            <li
              key={link.label}
              onClick={handleCloseMenu}
              className={`cursor-pointer transition-all duration-300 hover:text-color ${showMenu ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
            >
              {link.label}
            </li>
          ))}
          <StrefaKlienta className="lg:hidden" />
        </ul>
      </div>
    </header>
  );
}
