"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { useCart } from "@/lib/cart";
import Logo from "./Logo";
import { AccountIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "./icons";

function CartButton({ className = "" }: { className?: string }) {
  const { count, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      className={`relative grid place-items-center text-ink ${className}`}
      aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`}
    >
      <CartIcon className="size-6 lg:size-[1.3125rem]" />
      <span
        data-testid="cart-badge"
        className="absolute -top-0.5 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[0.5625rem] leading-none font-semibold text-white lg:-top-[0.125rem] lg:-right-[0.3125rem] lg:h-[0.75rem] lg:min-w-[0.75rem] lg:px-[0.1875rem] lg:text-[0.4375rem]"
      >
        {count}
      </span>
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header id="top" className="relative z-30 bg-sky lg:absolute lg:inset-x-0 lg:top-0 lg:bg-transparent">
      {/* Mobile / tablet bar */}
      <div className="flex items-center justify-between px-5 py-4 md:px-8 lg:hidden">
        <Logo />
        <div className="flex items-center gap-4">
          <CartButton className="size-10" />
          <button
            type="button"
            className="grid size-10 place-items-center text-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-ink/10 bg-paper px-5 pt-2 pb-6 md:px-8 lg:hidden"
        >
          <nav aria-label="Main">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-ink/10 py-3.5 text-lg font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#collectibles"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex h-11 items-center rounded-md bg-navy px-5 text-xs font-bold tracking-wide text-white uppercase"
          >
            A Brighter B.C.
          </a>
        </div>
      )}

      {/* Desktop, positioned on the 1024 reference grid */}
      <div className="relative mx-auto hidden h-[5.75rem] w-[64rem] lg:block">
        <Logo className="absolute top-[1.125rem] left-[3.125rem]" />
        <nav aria-label="Main" className="absolute top-[1.5rem] left-[21.875rem]">
          <ul className="flex h-[1.5rem] items-center gap-[1.8125rem] text-[0.78125rem] font-medium text-ink">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:underline hover:underline-offset-4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute top-[1.3125rem] left-[44.4375rem] flex h-[1.75rem] items-center gap-[1.0625rem]">
          <button type="button" className="grid size-[1.75rem] place-items-center text-ink" aria-label="Search">
            <SearchIcon className="size-[1.1875rem]" />
          </button>
          <a href="#top" className="grid size-[1.75rem] place-items-center text-ink" aria-label="Account">
            <AccountIcon className="size-[1.1875rem]" />
          </a>
          <CartButton className="size-[1.75rem]" />
        </div>
        <a
          href="#collectibles"
          className="absolute top-[1.125rem] left-[53.625rem] grid h-[2.125rem] w-[7.625rem] place-items-center rounded-[0.375rem] bg-navy text-[0.6875rem] font-bold tracking-[0.01em] whitespace-nowrap text-white uppercase hover:bg-[#12283b]"
        >
          A Brighter B.C.
        </a>
      </div>
    </header>
  );
}
