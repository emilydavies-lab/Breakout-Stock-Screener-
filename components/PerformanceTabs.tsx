"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = ["Highlights", "Returns", "Composition", "Positions"] as const;
type Tab = (typeof TABS)[number];

const REPORT_STATS = [
  { value: "20 Years", caption: "May 2000 to May 2020" },
  { value: "240", caption: "Stock recommendations" },
  { value: "24%", caption: "Annualized average return" },
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
      "Available through RRSP, TFSA, RRIF, and corporate accounts.",
  },
  {
    label: "Minimum investment",
    description: (
      <>
        $1,000,000 household minimum. Are you a Millennial or Gen Z investor
        looking for institutional grade investing with a lower minimum?{" "}
        <Link
          href="/linde-access"
          className="border-b border-ink-soft pb-0.5 text-ink transition-opacity hover:opacity-60"
        >
          Explore Linde Access
        </Link>
      </>
    ),
  },
];

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

const SECTOR_BREAKDOWN = [
  { sector: "Information Technology", value: "[placeholder]%" },
  { sector: "Consumer Discretionary", value: "[placeholder]%" },
  { sector: "Financials", value: "[placeholder]%" },
  { sector: "Industrials", value: "[placeholder]%" },
  { sector: "Communication Services", value: "[placeholder]%" },
  { sector: "Other", value: "[placeholder]%" },
];

const GEOGRAPHY_BREAKDOWN = [
  { region: "Canada", value: "[placeholder]%" },
  { region: "United States", value: "[placeholder]%" },
  { region: "Overseas", value: "[placeholder]%" },
];

const POSITIONS = [
  { company: "Microsoft", ticker: "MSFT", sector: "Information Technology", geography: "United States" },
  { company: "HubSpot", ticker: "HUBS", sector: "Information Technology", geography: "United States" },
  { company: "Monday.com", ticker: "MNDY", sector: "Information Technology", geography: "United States" },
  { company: "Uber", ticker: "UBER", sector: "Consumer Discretionary", geography: "United States" },
  { company: "Aritzia", ticker: "ATZ", sector: "Consumer Discretionary", geography: "Canada" },
  { company: "Kura Sushi", ticker: "KRUS", sector: "Consumer Discretionary", geography: "United States" },
];

export default function PerformanceTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Highlights");

  return (
    <>
      {/* Tab Navigation */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex gap-10 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border-b-2 py-6 font-body text-sm tracking-wide transition-opacity hover:opacity-70 ${
                  activeTab === tab
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-soft"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "Highlights" && (
        <>
          {/* Highlights — Report legacy */}
          <section className="border-t border-ink-line bg-paper-dim">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Before managing money, we were writing about it.
              </h2>
              <p className="mt-8 font-body text-lg leading-relaxed text-ink-soft">
                The Linde Equity Report ran for 20 years, serving
                do-it-yourself investors with independent stock research. It
                became the benchmark for newsletter performance in North
                America, earning multiple #1 rankings from the Hulbert
                Financial Digest. The investment counsel was founded because
                readers asked us to manage their money directly. Not the
                other way around.
              </p>

              <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
                {REPORT_STATS.map(({ value, caption }) => (
                  <div key={caption}>
                    <p className="font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
                      {value}
                    </p>
                    <p className="mt-4 font-body text-sm uppercase tracking-[0.15em] text-ink-soft">
                      {caption}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-12 font-body text-sm text-ink-soft">
                The Linde Equity Report is no longer publishing. Its
                investment approach forms the foundation of Linde Equity.
              </p>
            </div>
          </section>

          {/* Highlights — Fund Benefits */}
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
        </>
      )}

      {activeTab === "Returns" && (
        <section className="border-t border-ink-line bg-paper-dim">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Fund Returns
            </h2>
            <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              After fees. As of March 31, 2026.
            </p>

            <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">
              Annual Returns
            </h3>
            <div className="mt-8 overflow-x-auto">
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

            <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">
              Annualized Returns
            </h3>
            <table className="mt-8 w-full max-w-2xl border-collapse font-body">
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

            <p className="mt-12 font-body text-sm text-ink-soft">
              Past performance does not guarantee future results. Returns are
              shown after management fees.
            </p>
          </div>
        </section>
      )}

      {activeTab === "Composition" && (
        <>
          {/* Composition — Sector */}
          <section className="border-t border-ink-line bg-paper-dim">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
              <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Sector Breakdown
              </h2>
              <div className="mt-12 max-w-2xl">
                {SECTOR_BREAKDOWN.map(({ sector, value }) => (
                  <div
                    key={sector}
                    className="flex items-center justify-between border-t border-ink-line py-4 font-body"
                  >
                    <p className="text-base text-ink-soft">{sector}</p>
                    <p className="text-base text-ink">{value}</p>
                  </div>
                ))}
                <div className="border-t border-ink-line" />
              </div>
              <p className="mt-8 font-body text-sm text-ink-soft">
                Sector breakdown is approximate and updated quarterly.
              </p>
            </div>
          </section>

          {/* Composition — Geography */}
          <section className="border-t border-ink-line bg-paper">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
              <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Geography
              </h2>
              <div className="mt-12 max-w-2xl">
                {GEOGRAPHY_BREAKDOWN.map(({ region, value }) => (
                  <div
                    key={region}
                    className="flex items-center justify-between border-t border-ink-line py-4 font-body"
                  >
                    <p className="text-base text-ink-soft">{region}</p>
                    <p className="text-base text-ink">{value}</p>
                  </div>
                ))}
                <div className="border-t border-ink-line" />
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "Positions" && (
        <section className="border-t border-ink-line bg-paper-dim">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              A selection of current holdings
            </h2>
            <p className="mt-4 font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              Not a complete list. Updated periodically.
            </p>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse font-body">
                <thead>
                  <tr className="border-b border-ink-line text-left">
                    <th className="py-3 pr-8 font-body text-sm font-normal uppercase tracking-[0.1em] text-ink-soft">
                      Company
                    </th>
                    <th className="py-3 pr-8 font-body text-sm font-normal uppercase tracking-[0.1em] text-ink-soft">
                      Ticker
                    </th>
                    <th className="py-3 pr-8 font-body text-sm font-normal uppercase tracking-[0.1em] text-ink-soft">
                      Sector
                    </th>
                    <th className="py-3 font-body text-sm font-normal uppercase tracking-[0.1em] text-ink-soft">
                      Geography
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {POSITIONS.map(({ company, ticker, sector, geography }) => (
                    <tr key={ticker} className="border-b border-ink-line">
                      <td className="py-4 pr-8 font-body text-base text-ink">
                        {company}
                      </td>
                      <td className="py-4 pr-8 font-body text-base text-ink-soft">
                        {ticker}
                      </td>
                      <td className="py-4 pr-8 font-body text-base text-ink-soft">
                        {sector}
                      </td>
                      <td className="py-4 font-body text-base text-ink-soft">
                        {geography}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 font-body text-sm text-ink-soft">
              Holdings are subject to change and are not a recommendation to
              buy or sell any security.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
