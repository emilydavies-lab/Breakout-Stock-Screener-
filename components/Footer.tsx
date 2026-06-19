import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link href="/" className="font-display text-xl tracking-tight">
              <span className="font-medium">Linde</span>{" "}
              <span className="font-light tracking-tight">Equity</span>
            </Link>
            <div className="mt-4 font-body text-sm text-ink-soft">
              <p>Suite 330 – 1385 West 8th Avenue</p>
              <p>Vancouver, BC, V6H 3V9</p>
              <p className="mt-2">
                <a href="tel:6047385200" className="hover:text-ink">
                  604-738-5200
                </a>
              </p>
              <p>
                <a href="mailto:info@lindeequity.com" className="hover:text-ink">
                  info@lindeequity.com
                </a>
              </p>
            </div>
          </div>
          <nav>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-body text-sm text-ink-soft sm:text-right">
              <li>
                <Link href="/philosophy" className="hover:text-ink">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/performance" className="hover:text-ink">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/linde-access" className="hover:text-ink">
                  Linde Access
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-ink">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/takes" className="hover:text-ink">
                  Takes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-ink-line pt-6 font-body text-xs leading-relaxed text-ink-soft">
          <p>
            Linde Equity is registered as a portfolio manager and exempt
            market dealer in British Columbia, Alberta, Saskatchewan,
            Manitoba, and Ontario, and as an investment fund manager in
            British Columbia and Ontario.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Linde Equity. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
