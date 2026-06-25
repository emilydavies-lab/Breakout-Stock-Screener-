import Link from "next/link";
import FundBand from "@/components/FundBand";

const INSIGHTS = [
  {
    date: "06.04.2026",
    title: "SpaceX IPO and Why We're Not Participating (Yet)",
    subtitle: "Featuring Teal Linde & Emily Davies",
    image: "/images/spacex.jpg",
  },
  {
    date: "06.01.2026",
    title: "Chart of the Month",
    subtitle: "SaaS Valuations and the Growth Disconnect",
    image: "/images/chart-of-the-month.png",
  },
  {
    date: "05.19.2026",
    title: "Our Investment in e.l.f. Beauty",
    subtitle: "Partnering with e.l.f. and why Rhode is critical to our thesis",
    image: "/images/rhode.png",
  },
];

const WHO_WE_WORK_WITH = [
  {
    type: "Physicians",
    description:
      "managing wealth through personal and professional accounts.",
    href: "/for-physicians",
  },
  {
    type: "Business Owners and Entrepreneurs",
    description: "ready to grow their wealth beyond the business.",
    href: "/for-business-owners",
  },
  {
    type: "Executives, Lawyers and Accountants",
    description: "who expect considered analysis and radical transparency.",
    href: "/for-professionals",
  },
];

const STRATEGY_POINTS = [
  "Superior business models, high returns on invested capital and large, untapped TAMs (total addressable markets).",
  "Position sizing: 1.5% to 7%, scaled to risk and conviction.",
  "Concentration: One concentrated fund of 30 to 40 of our best ideas.",
  "Market capitalization: Companies ranging from $500M to $1 trillion+.",
  "Founder-led teams with insider ownership are prioritized. Recent insider purchases get our attention.",
  "Geography and sector: Anywhere and everywhere.",
  "Relentlessly curious. Always looking at what's emerging, what's being built, and where the next exceptional opportunity might be.",
];

const HOLDINGS = [
  { name: "Microsoft", logo: "/images/logos/microsoft.png" },
  { name: "HubSpot", logo: "/images/logos/hubspot.png" },
  { name: "Uber", logo: "/images/logos/uber.png" },
  { name: "Aritzia", logo: "/images/logos/aritzia.png" },
  { name: "Blue Owl", logo: "/images/logos/blue-owl.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col px-6 pt-16 pb-6 sm:h-[45vh] sm:px-10 sm:pt-20 sm:pb-8">
          <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:justify-between">
            <h1 className="max-w-[600px] self-start font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
              Over two decades investing in exceptional companies built to
              grow.
            </h1>
            <div className="max-w-[400px] self-end">
              <p className="text-right font-body text-[15px] leading-relaxed text-ink-soft">
                One fund. Our best ideas. Unconstrained by geography, sector,
                or convention. Expanding access to investing in innovation
                with responsible risk management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-7 sm:px-10 sm:pt-10 sm:pb-8">
          <FundBand />
        </div>
      </section>

      {/* Insights */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            Insights
          </h2>
          <div className="mt-3 border-t border-ink-line">
            {INSIGHTS.map(({ date, title, subtitle, image }) => (
              <Link
                key={title}
                href="/insights"
                className="grid gap-6 border-b border-ink-line py-4 transition-opacity hover:opacity-70 sm:grid-cols-12 sm:items-center sm:gap-8"
              >
                <img
                  src={image}
                  alt={title}
                  className="aspect-[4/3] w-full object-cover sm:col-span-3"
                />
                <div className="sm:col-span-9">
                  <p className="font-mono text-sm text-ink-soft">{date}</p>
                  <p className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight">
                    {title}
                  </p>
                  <p className="mt-2 font-body text-sm text-ink-soft">
                    &middot; {subtitle}
                  </p>
                  <p className="mt-4 font-mono text-sm text-ink-soft">
                    {"——→ "}Learn More
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/insights"
            className="mt-12 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            View More Insights &rarr;
          </Link>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            Who We Work With
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
            For investors who want their wealth managed with the same
            intentionality it took to build.
          </p>
          <ul className="mt-8 max-w-2xl space-y-2 font-body text-base leading-relaxed text-ink-soft">
            {WHO_WE_WORK_WITH.map(({ type, description, href }) => (
              <li key={type}>
                <Link
                  href={href}
                  className="inline-block border-b border-transparent text-ink-soft transition-colors hover:border-ink-soft hover:text-ink"
                >
                  <span className="font-medium text-ink">{type}</span>{" "}
                  {description}{" "}
                  <span className="text-ink-soft">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            Our Strategy
          </h2>
          <p className="mt-6 max-w-2xl font-body text-xl leading-relaxed text-ink-soft">
            Investing in innovation through public markets with responsible
            risk management.
          </p>
          <ul className="mt-12 space-y-4 font-mono text-base text-ink">
            {STRATEGY_POINTS.map((point) => (
              <li key={point}>{"// "}{point}</li>
            ))}
          </ul>
          <Link
            href="/philosophy"
            className="mt-12 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Learn More about the structural benefits of investing in the
            Linde Equity Fund. &rarr;
          </Link>
        </div>
      </section>

      {/* Our Portfolio */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            Our Portfolio
          </h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
            A few of the companies we own, defining what&rsquo;s next.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-y-8">
            {HOLDINGS.map(({ name, logo }) => (
              <img
                key={name}
                src={logo}
                alt={name}
                className="h-10 w-auto object-contain"
                style={{ filter: "grayscale(100%)" }}
              />
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-12 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Contact Us for the full list of companies &rarr;
          </Link>
        </div>
      </section>

      {/* The Linde Equity Fund */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            The Linde Equity Fund <em className="italic">unique approach</em>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-xl leading-relaxed text-ink-soft">
            A consistent track record, built over time.
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
            Through bull markets and bear markets, through volatility and
            uncertainty. We follow a disciplined approach that compounds
            wealth over the long term.
          </p>
          <Link
            href="/performance"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            View Performance &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
