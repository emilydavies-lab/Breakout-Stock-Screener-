import type { Metadata } from "next";
import PerformanceTabs from "@/components/PerformanceTabs";

export const metadata: Metadata = {
  title: "Performance — Linde Equity",
};

const HEADLINE_STATS = [
  { label: "Inception", value: "October 2016" },
  { label: "Holdings", value: "30–40 Stocks" },
  { label: "Annualized Return Since Inception", value: "+10%" },
];

export default function PerformancePage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
          Linde Equity Fund
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Performance
        </h1>
        <div className="mt-12 border-t border-ink-line" />
        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {HEADLINE_STATS.map(({ label, value }) => (
            <div key={label}>
              <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                {value}
              </p>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PerformanceTabs />
    </>
  );
}
