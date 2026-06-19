import Image from "next/image";
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
        We go anywhere. No geographic constraints. No sector bias.{" "}
        <em className="font-display italic text-ink">Just conviction.</em>
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

const TAKES = [
  {
    type: "Podcast",
    title: "Why we still believe in active management",
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
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          Independent investment management — since 2000
        </p>
        <h1 className="mt-6 max-w-[820px] font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Since 2000, investing in <em className="font-normal italic">exceptional companies</em> built to grow.
        </h1>
        <p className="mt-10 max-w-[480px] font-body text-lg leading-relaxed text-ink-soft sm:ml-auto sm:text-xl">
          One fund. Our best ideas — unconstrained by geography, sector, or
          convention. Relentlessly curious about what comes next.
        </p>
      </section>

      {/* Who It's For */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem] lg:col-span-5">
            For investors who have much to protect and more to build.
          </h2>
          <p className="font-body text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            Whether you&rsquo;ve built a business, a practice, or a career —
            you want your wealth managed with the same rigour and
            intentionality you brought to earning it. Linde Equity brings
            institutional-grade thinking to established investors who expect
            more from their money.
          </p>
        </div>
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
            A few of the companies defining what&rsquo;s next.
          </h2>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-12">
            {HOLDINGS.map(({ name, domain }) => (
              <Image
                key={domain}
                src={`https://logo.clearbit.com/${domain}`}
                alt={name}
                width={120}
                height={36}
                unoptimized
                className="h-8 w-auto object-contain brightness-0 grayscale sm:h-9"
              />
            ))}
          </div>
          <p className="mt-12 font-body text-sm text-ink-soft">
            A selection of current holdings. Not a complete list.
          </p>
        </div>
      </section>

      {/* Performance Tease */}
      <section className="border-t border-ink-line">
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

      {/* Track Record Callout */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-25 sm:px-10">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            A track record that predates the fund.
          </h2>
          <div className="mt-8 max-w-[620px] space-y-6 font-body text-lg leading-relaxed text-ink-soft">
            <p>
              Before Linde Equity managed a single dollar, we were publishing
              stock picks — and getting them right. The Linde Equity Report
              ran for over two decades, earning multiple #1 rankings from the
              Hulbert Financial Digest, including best-performing stock
              newsletter in North America over the preceding decade in 2016.
            </p>
            <p>
              The investment counsel was founded because readers asked us to
              manage their money directly. Not the other way around.
            </p>
          </div>
          <Link
            href="/our-story"
            className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
          >
            Read our story &rarr;
          </Link>
        </div>
      </section>

      {/* Team Intro */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-[2.5rem] lg:col-span-5">
            Two generations. <em className="italic">One set of values.</em>
          </h2>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              Teal and Emily bring different perspectives to every investment
              decision — and the same unwavering commitment to integrity,
              transparency and trust. It&rsquo;s not a policy. It&rsquo;s how
              they work.
            </p>
            <Link
              href="/team"
              className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
            >
              Meet the Team &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-ink-line bg-paper-dim">
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
