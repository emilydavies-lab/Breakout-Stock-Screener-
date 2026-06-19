import type { Metadata } from "next";
import Link from "next/link";
import PerformanceTabs from "@/components/PerformanceTabs";

export const metadata: Metadata = {
  title: "Performance — Linde Equity",
};

const HEADLINE_STATS = [
  { label: "Inception", value: "October 2016" },
  { label: "Strategy", value: "Public Equities" },
  { label: "Holdings", value: "30–40 stocks" },
  { label: "Annualized return since inception", value: "+10.0%" },
];

export default function PerformancePage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Linde Equity Fund
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Performance
        </h1>

        <div className="mt-16 grid gap-10 sm:grid-cols-4 sm:gap-8">
          {HEADLINE_STATS.map(({ label, value }) => (
            <div key={label} className="border-t border-ink-line pt-6">
              <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {value}
              </p>
              <p className="mt-3 font-body text-sm uppercase tracking-[0.1em] text-ink-soft">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PerformanceTabs />

      {/* Linde Access CTA */}
      <section className="border-t border-ink-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Investing earlier in your journey?
          </h2>
          <p className="mt-8 max-w-[480px] font-body text-lg leading-relaxed text-ink-soft">
            Linde Access offers the same fund and the same approach at a
            $250,000 minimum.
          </p>
          <Link
            href="/linde-access"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Learn about Linde Access &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
