import Link from "next/link";

const NAV_LINKS = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/performance", label: "Performance" },
  { href: "/insights", label: "Insights" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Link
          href="/"
          className="font-body text-lg font-bold uppercase tracking-[0.08em] text-ink"
        >
          Linde Equity
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-[13px] uppercase tracking-[0.1em] text-ink-soft">
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
        <Link
          href="/performance"
          className="inline-flex items-center justify-center self-start rounded-full bg-ink px-5 py-2.5 font-body text-sm text-white transition-opacity hover:opacity-80 sm:self-auto"
        >
          Explore the Linde Equity Fund &rarr;
        </Link>
      </div>
    </header>
  );
}
