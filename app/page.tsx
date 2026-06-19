import Link from "next/link";
import { Target, Globe, Layers, Telescope } from "lucide-react";

const MANIFESTO = [
  {
    icon: Target,
    body: (
      <>
        We look for businesses with superior business models, high returns
        on invested capital, and markets large enough to sustain exceptional
        growth.
      </>
    ),
  },
  {
    icon: Globe,
    body: (
      <>
        We go anywhere. No geographic constraints. No sector bias. Just
        conviction.
      </>
    ),
  },
  {
    icon: Layers,
    body: (
      <>
        We run one concentrated fund of 30 to 40 of our best ideas, balanced
        by Canada&rsquo;s strongest dividend growers to manage risk and
        reduce volatility.
      </>
    ),
  },
  {
    icon: Telescope,
    body: (
      <>
        And we stay curious — always looking at what&rsquo;s emerging,
        what&rsquo;s being built, and where the next exceptional opportunity
        is coming from.
      </>
    ),
  },
];

const HOLDINGS = [
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Monday.com", domain: "monday.com" },
  { name: "Uber", domain: "uber.com" },
  { name: "Aritzia", domain: "aritzia.com" },
  { name: "Kura Sushi", domain: "kurasushi.com" },
];

const REPORT_STATS = [
  { value: "20 Years", caption: "May 2000 to May 2020" },
  { value: "240", caption: "Stock recommendations" },
  { value: "24%", caption: "Annualized average return" },
];

const TAKES = [
  {
    type: "Writing",
    title: "SpaceX IPO and why we aren't participating",
    date: "May 12, 2026",
    author: "Teal Linde",
  },
  {
    type: "Writing",
    title: "AI agents and the companies building them",
    date: "April 28, 2026",
    author: "Emily Davies",
  },
  {
    type: "Podcast",
    title: "What the market is missing right now",
    date: "April 9, 2026",
    author: "Teal Linde",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <h1 className="max-w-[820px] font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Over two decades investing in <em className="font-normal italic">exceptional companies</em> built to grow.
        </h1>
        <p className="mt-10 max-w-[480px] font-body text-lg leading-relaxed text-ink-soft sm:ml-auto sm:text-xl">
          One fund. Our best ideas — unconstrained by geography, sector, or
          convention. Relentlessly curious about what comes next.
        </p>
      </section>

      {/* Takes Feed */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-30 sm:px-10">
          <h2 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
            Takes
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {TAKES.map(({ type, title, date, author }) => (
              <Link
                key={title}
                href="/takes"
                className="block border-t border-ink pt-6 transition-opacity hover:opacity-70"
              >
                <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {type}
                </p>
                <p className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight">
                  {title}
                </p>
                <p className="mt-4 font-body text-sm text-ink-soft">
                  {author} &middot; {date}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/takes"
            className="mt-12 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Read all takes &rarr;
          </Link>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="border-t border-ink-line bg-paper-clay">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12 lg:items-start lg:gap-16">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem] lg:col-span-5">
            For investors who have much to protect and more to build.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              Whether you&rsquo;ve built a business, a practice, or a career —
              you want your wealth managed with the same rigour and
              intentionality you brought to earning it. Linde Equity brings
              institutional-grade thinking to established investors who expect
              more from their money.
            </p>
            <div className="mt-10 flex flex-col gap-6">
              <Link
                href="/for-physicians"
                className="font-body text-base tracking-wide transition-opacity hover:opacity-60"
              >
                Physicians &rarr;
              </Link>
              <Link
                href="/for-business-owners"
                className="font-body text-base tracking-wide transition-opacity hover:opacity-60"
              >
                Business Owners &amp; Entrepreneurs &rarr;
              </Link>
              <Link
                href="/for-professionals"
                className="font-body text-base tracking-wide transition-opacity hover:opacity-60"
              >
                Lawyers, Executives &amp; Accountants &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Invest */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            How we invest.
          </h2>
          <div className="mt-16 grid gap-x-20 gap-y-15 sm:grid-cols-2">
            {MANIFESTO.map(({ icon: Icon, body }, index) => (
              <div key={index}>
                <Icon
                  className="h-7 w-7 text-ink-soft"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holdings */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-25 sm:px-10">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            A few of the companies we own defining what&rsquo;s next.
          </h2>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-x-10">
            {HOLDINGS.map(({ name, domain }) => (
              <img
                key={domain}
                src={`https://logo.clearbit.com/${domain}`}
                alt={name}
                className="h-10 w-auto object-contain grayscale"
                style={{ filter: "grayscale(100%)" }}
              />
            ))}
          </div>
          <p className="mt-12 font-body text-sm text-ink-soft">
            A selection of current holdings. Not a complete list.
          </p>
        </div>
      </section>

      {/* Track Record Callout */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-25 sm:px-10">
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Before managing money, we were writing about it — and winning.
          </h2>
          <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-ink-soft">
            <p>
              The Linde Equity Report ran for 20 years, serving
              do-it-yourself investors with independent stock research. It
              became the benchmark for newsletter performance in North
              America, earning multiple #1 rankings from the Hulbert
              Financial Digest. The investment counsel was founded because
              readers asked us to manage their money directly. Not the other
              way around.
            </p>
          </div>

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

          <p className="mt-12 max-w-[620px] font-body text-sm text-ink-soft">
            The Linde Equity Report is no longer publishing. Its investment
            approach forms the foundation of Linde Equity.
          </p>

          <Link
            href="/our-story"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Read our story &rarr;
          </Link>
        </div>
      </section>

      {/* Performance Tease */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-display text-[7rem] font-medium leading-none tracking-tight sm:text-[8rem]">
              +10.0%
            </p>
            <p className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
              Annualized since inception, October 2016
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem]">
              A consistent track record, built over time.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
              Through bull markets and bear markets, through volatility and
              uncertainty — a disciplined approach that compounds over the
              long term.
            </p>
            <Link
              href="/performance"
              className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
            >
              View Performance &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Let&rsquo;s talk about where your portfolio goes from here.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
