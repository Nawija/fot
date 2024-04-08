"use client";

import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleCloseMenu() {
    setShowMenu(false);
  }
  return (
    <header className="flex items-center justify-between px-4 py-8">
      <Link href="/" className="text-2xl font-medium">
        Jarek Olszewski
      </Link>
      <nav>
        <ul className="flex items-center justify-center space-x-4 text-sm">
          {NAVLINKS.map((link) => (
            <li><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
