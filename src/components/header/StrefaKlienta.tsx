"use client";

import { ClassNameProps, HandleCloseMenuProps } from "@/types/types";
import Link from "next/link";

export default function StrefaKlienta(
  { className }: ClassNameProps,
  { handleCloseMenu }: HandleCloseMenuProps,
) {
  return (
    <Link
      href="/strefa"
      onClick={handleCloseMenu}
      className={`${className} border bg-color px-4 py-2 text-sm font-semibold text-white`}
    >
      Strefa Klienta
    </Link>
  );
}
