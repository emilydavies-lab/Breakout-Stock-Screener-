import Link from "next/link";

const NAV_LINKS = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/performance", label: "Performance" },
  { href: "/linde-access", label: "Linde Access" },
  { href: "/team", label: "Team" },
  { href: "/takes", label: "Takes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-ink-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Link href="/" className="font-display text-2xl tracking-tight">
          <span className="font-medium">Linde</span>{" "}
          <span className="font-light tracking-tight">Equity</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-ink-soft">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
