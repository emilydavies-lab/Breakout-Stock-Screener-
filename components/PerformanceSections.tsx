import Link from "next/link";
import FundBand from "@/components/FundBand";

const REPORT_STATS = [
  { value: "20 Years", caption: "May 2000 to May 2020" },
  { value: "240", caption: "Stock recommendations" },
  { value: "24%", caption: "Annualized average return" },
];

const CORE_BENEFITS = [
  {
    label: "Highly Liquid",
    description:
      "Invested entirely in publicly traded securities — no lock-ups, no gates, no capital calls.",
  },
  {
    label: "One Fund",
    description:
      "We manage a single concentrated portfolio. Every client owns the same best ideas.",
  },
  {
    label: "Transparent Communication",
    description:
      "Quarterly reporting, published thinking, and full transparency into what we own, why.",
  },
  {
    label: "Simple Tax Reporting",
    description:
      "One T3 slip per year. No complex partnership structures or additional filings.",
  },
  {
    label: "Diversified Investing",
    description:
      "30 to 40 stocks across sectors and geographies — unconstrained, and built to compound over the long term.",
  },
  {
    label: "Registered Accounts Eligible",
    description:
      "Available through RRSP, TFSA, RRIF, and corporate accounts.",
  },
  {
    label: "Minimum Investment",
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

const PERFORMANCE_SUMMARY = [
  { period: "1 Year", value: "+12.6%" },
  { period: "3 Year", value: "+10.1%" },
  { period: "5 Year", value: "+6.3%" },
  { period: "7 Year", value: "+10.4%" },
  { period: "9 Year", value: "+9.9%" },
  { period: "Inception", value: "+10.0%" },
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

const SECTOR_BREAKDOWN = [
  { sector: "Information Technology", value: 32 },
  { sector: "Consumer Discretionary", value: 22 },
  { sector: "Financials", value: 18 },
  { sector: "Industrials", value: 12 },
  { sector: "Communication Services", value: 9 },
  { sector: "Other", value: 7 },
];

const GEOGRAPHY_BREAKDOWN = [
  { region: "Canada", value: 45 },
  { region: "United States", value: 48 },
  { region: "Overseas", value: 7 },
];

const AREAS_OF_FOCUS = [
  "AI & Machine Learning",
  "Tech/Media/Telecom",
  "Software & Internet",
  "Energy & Climate Tech",
  "Consumer & Retail",
  "Financial Services & Fintech",
];

export default function PerformanceSections() {
  return (
    <>
      {/* SECTION 1: Returns */}
      <section id="returns" className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Linde Equity Fund
          </h2>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft">
            Annualized Return as of March 31, 2026 (net of fees).
          </p>

          <h3 className="mt-16 font-display text-2xl font-medium tracking-tight">
            Performance Summary
          </h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse font-body">
              <thead>
                <tr className="border-b border-ink-line text-left">
                  {PERFORMANCE_SUMMARY.map(({ period }) => (
                    <th
                      key={period}
                      className="py-3 pr-8 font-mono text-sm font-normal uppercase tracking-[0.1em] text-ink-soft"
                    >
                      {period}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {PERFORMANCE_SUMMARY.map(({ period, value }) => (
                    <td
                      key={period}
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
            Annual Returns
          </h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-body">
              <thead>
                <tr className="border-b border-ink-line text-left">
                  {ANNUAL_RETURNS.map(({ year }) => (
                    <th
                      key={year}
                      className="py-3 pr-8 font-mono text-sm font-normal uppercase tracking-[0.1em] text-ink-soft"
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

          <p className="mt-12 font-body text-sm text-ink-soft">
            Past performance does not guarantee future results. Returns are
            shown after management fees.
          </p>
        </div>
      </section>

      {/* Linde Equity Report */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h3 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Linde Equity Report
          </h3>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft">
            Performance Summary
          </p>

          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {REPORT_STATS.map(({ value, caption }) => (
              <div key={caption}>
                <p className="font-display text-6xl font-medium leading-none tracking-tight sm:text-7xl">
                  {value}
                </p>
                <p className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-ink-soft">
                  {caption}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 font-body text-lg leading-relaxed text-ink-soft">
            The Linde Equity Report ran for 20 years, serving DIY investors
            with independent stock research. It earned multiple #1 rankings
            from the Hulbert Financial Digest and was recognized by The
            Vancouver Sun, CNBC, BNN, CBS Radio, and The Wall Street Journal.
            The attention it generated brought investors to our door — asking
            us to manage their money directly. Not the other way around.
          </p>

          <p className="mt-8 font-body text-sm text-ink-soft">
            The Linde Equity Report is no longer publishing. Its investment
            approach forms the foundation of Linde Equity.
          </p>

          <Link
            href="/our-story"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Learn more about our Media Recognition and History &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 2: Composition */}
      <section id="composition" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-16 sm:grid-cols-2">
            {/* Sector bar chart */}
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Sector Breakdown
              </h2>
              <div className="mt-10 space-y-5">
                {SECTOR_BREAKDOWN.map(({ sector, value }) => (
                  <div key={sector}>
                    <div className="flex items-baseline justify-between font-body text-sm">
                      <p className="text-ink-soft">{sector}</p>
                      <p className="text-ink">{value}%</p>
                    </div>
                    <div className="mt-2 h-2 w-full bg-ink-line">
                      <div
                        className="h-2 bg-ink"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geography donut */}
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Geography
              </h2>
              <div className="mt-10 flex justify-center">
                <DonutChart data={GEOGRAPHY_BREAKDOWN} />
              </div>
              <div className="mt-8 space-y-3">
                {GEOGRAPHY_BREAKDOWN.map(({ region, value }, i) => (
                  <div
                    key={region}
                    className="flex items-center justify-between font-body text-sm"
                  >
                    <p className="flex items-center gap-3 text-ink-soft">
                      <span
                        className="inline-block h-2 w-2"
                        style={{
                          backgroundColor: ["#111111", "#888888", "#dddddd"][i],
                        }}
                      />
                      {region}
                    </p>
                    <p className="text-ink">{value}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Areas of Focus
            </h2>
            <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {AREAS_OF_FOCUS.map((area) => (
                <p
                  key={area}
                  className="border-t border-ink-line pt-6 font-display text-2xl font-medium tracking-tight"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Highlights */}
      <section id="highlights" className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Core Benefits
          </h2>
          <div className="mt-12 space-y-4">
            {CORE_BENEFITS.map(({ label, description }) => (
              <div
                key={label}
                className="grid gap-4 border border-ink-line p-8 sm:grid-cols-12 sm:items-start sm:gap-8"
              >
                <p className="font-body text-base font-medium text-ink sm:col-span-1">
                  &rarr;
                </p>
                <p className="font-body text-lg font-medium text-ink sm:col-span-4">
                  {label}
                </p>
                <p className="font-body text-sm leading-relaxed text-ink-soft sm:col-span-7">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linde Access callout */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:col-span-4">
            Linde Access
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              The same fund. The same approach. A lower minimum for investors
              earlier in their journey.
            </p>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft">
              $250,000 Household Minimum
            </p>
            <Link
              href="/linde-access"
              className="mt-8 inline-block border-b border-ink pb-1 font-display text-2xl tracking-tight transition-opacity hover:opacity-60"
            >
              Explore Linde Access &rarr;
            </Link>
          </div>
        </div>
      </section>

      <FundBand variant="cta" />
    </>
  );
}

function DonutChart({ data }: { data: { region: string; value: number }[] }) {
  const colors = ["#111111", "#888888", "#dddddd"];
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const segments = data.reduce(
    (acc, { region, value }, i) => {
      const length = (value / 100) * circumference;
      const dasharray = `${length} ${circumference - length}`;
      const offset = acc.cumulative;
      acc.list.push({ region, color: colors[i], dasharray, offset });
      acc.cumulative += length;
      return acc;
    },
    { list: [] as { region: string; color: string; dasharray: string; offset: number }[], cumulative: 0 }
  ).list;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <g transform="translate(80,80) rotate(-90)">
        {segments.map(({ region, color, dasharray, offset }) => (
          <circle
            key={region}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="24"
            strokeDasharray={dasharray}
            strokeDashoffset={-offset}
          />
        ))}
      </g>
    </svg>
  );
}
