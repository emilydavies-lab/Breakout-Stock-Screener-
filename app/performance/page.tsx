import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance — Linde Equity",
};

const ANNUAL_RETURNS = [
  { year: "2025", value: "+13.3%" },
  { year: "2024", value: "+21.4%" },
  { year: "2023", value: "+5.6%" },
  { year: "2022", value: "-14.9%" },
  { year: "2021", value: "+25.5%" },
  { year: "2020", value: "+25.1%" },
  { year: "2019", value: "+22.8%" },
  { year: "2018", value: "-5.5%" },
  { year: "2017", value: "+14.0%" },
];

const ANNUALIZED_RETURNS = [
  { period: "1 Year", value: "+12.6%" },
  { period: "3 Years", value: "+10.1%" },
  { period: "5 Years", value: "+6.3%" },
  { period: "7 Years", value: "+10.4%" },
  { period: "9 Years", value: "+9.9%" },
  { period: "Since Inception (Oct 2016)", value: "+10.0%" },
];

const FUND_BENEFITS = [
  {
    label: "Highly liquid",
    description:
      "Invested entirely in publicly traded securities — no lock-ups, no gates, no capital calls.",
  },
  {
    label: "One fund",
    description:
      "We manage a single concentrated portfolio. Every client owns the same best ideas.",
  },
  {
    label: "Transparent",
    description:
      "Quarterly reporting, published thinking, and two investors who stand behind every position publicly.",
  },
  {
    label: "Registered accounts eligible",
    description:
      "Available for investment through RRSP, TFSA, RRIF, and corporate accounts.",
  },
  {
    label: "Minimum investment",
    description:
      "$1,000,000 household minimum. Linde Access available from $250,000.",
  },
];

const ACCOUNT_TYPES = [
  { type: "Individual & Joint Non-Registered", minimum: "$1,000,000 household" },
  { type: "RRSP / RRIF", minimum: "$1,000,000 household" },
  { type: "TFSA", minimum: "$1,000,000 household" },
  { type: "Corporate", minimum: "$1,000,000 household" },
];

export default function PerformancePage() {
  return (
    <>
      {/* Title */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <h1 className="max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Performance
        </h1>
      </section>

      {/* Origin Story */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem] lg:col-span-5">
            Before managing money, we were{" "}
            <em className="italic">writing about it.</em>
          </h2>
          <p className="font-body text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            The Linde Equity Report launched in 2000 and was repeatedly
            ranked #1 by the Hulbert Financial Digest over two decades. Linde
            Equity Investment Counsel was founded in response — readers who
            wanted Teal to manage their portfolios directly, not just write
            about them.
          </p>
        </div>
      </section>

      {/* Fund Benefits */}
      <section className="border-t border-ink-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Why the Linde Equity Fund
          </h2>
          <div className="mt-12">
            {FUND_BENEFITS.map(({ label, description }) => (
              <div
                key={label}
                className="grid gap-4 border-t border-ink-line py-8 sm:grid-cols-12 sm:gap-8"
              >
                <p className="font-display text-xl font-medium tracking-tight sm:col-span-4 sm:text-2xl">
                  {label}
                </p>
                <p className="font-body text-base leading-relaxed text-ink-soft sm:col-span-7 sm:col-start-6">
                  {description}
                </p>
              </div>
            ))}
            <div className="border-t border-ink-line" />
          </div>
        </div>
      </section>

      {/* Annual Returns */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Annual Returns
          </h2>
          <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
            After fees
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse font-body">
              <thead>
                <tr className="border-b border-ink-line text-left">
                  {ANNUAL_RETURNS.map(({ year }) => (
                    <th
                      key={year}
                      className="py-3 pr-8 font-body text-sm font-normal uppercase tracking-[0.1em] text-ink-soft"
                    >
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {ANNUAL_RETURNS.map(({ year, value }) => (
                    <td
                      key={year}
                      className="py-5 pr-8 font-display text-2xl font-medium tracking-tight sm:text-3xl"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Annualized Returns */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem]">
              A consistent track record, built over time.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
              Through bull markets and bear markets, through volatility and
              uncertainty — a disciplined approach that compounds over the
              long term.
            </p>
          </div>
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              Annualized returns, after fees
            </p>
            <table className="mt-6 w-full border-collapse font-body">
              <tbody>
                {ANNUALIZED_RETURNS.map(({ period, value }) => (
                  <tr key={period} className="border-b border-ink-line">
                    <td className="py-4 font-body text-base text-ink-soft">
                      {period}
                    </td>
                    <td className="py-4 text-right font-display text-2xl font-medium tracking-tight">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem] lg:col-span-5">
            Fund Structure
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              The Linde Equity Fund is a single, concentrated pooled fund —
              the same portfolio for every client, managed directly by Teal
              Linde and Emily Davies. Accounts are held individually in your
              name with a Canadian custodian.
            </p>
            <table className="mt-10 w-full border-collapse font-body">
              <tbody>
                {ACCOUNT_TYPES.map(({ type, minimum }) => (
                  <tr key={type} className="border-b border-ink-line">
                    <td className="py-4 pr-6 font-body text-base text-ink">
                      {type}
                    </td>
                    <td className="py-4 text-right font-body text-base text-ink-soft">
                      {minimum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Linde Access */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Building wealth doesn&rsquo;t have to start at $1 million.
          </h2>
          <p className="mt-8 max-w-[480px] font-body text-lg leading-relaxed text-ink-soft">
            Linde Access offers the same fund and the same discipline, with
            a $250,000 entry point — built for the next generation of
            investors.
          </p>
          <Link
            href="/linde-access"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Explore Linde Access &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
