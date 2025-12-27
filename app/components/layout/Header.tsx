"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="fixed top-0 w-full p-4 z-50  from-[#2b1d14] to-[#4b2e1e] text-white">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-widest">
          ☕ COFFEE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/">خانه</Link>
          <Link href="/product">فروشگاه</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/content">تماس</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href="/cartpage" className="relative hidden md:block">
            🛒
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </Link>

          {/* Mobile */}
          <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
