"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/performance", label: "Performance" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-6 py-6 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-10">
        <Link
          href="/"
          className="font-body text-lg font-bold uppercase tracking-[0.08em] text-ink"
        >
          Linde Equity
        </Link>
        <nav className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-body text-[13px] uppercase tracking-[0.1em] text-ink-soft">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`border-b pb-1 transition-colors hover:text-ink ${
                      isActive
                        ? "border-ink font-semibold text-ink"
                        : "border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="/performance"
          className="inline-flex items-center justify-center justify-self-start rounded-full bg-ink px-5 py-2.5 font-body text-sm text-white transition-opacity hover:opacity-80 sm:justify-self-end"
        >
          Explore the Linde Equity Fund &rarr;
        </Link>
      </div>
    </header>
  );
}
