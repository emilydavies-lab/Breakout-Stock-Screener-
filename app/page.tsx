import Link from "next/link";

const MANIFESTO = [
  "We look for businesses with superior business models, high returns on invested capital, and markets large enough to sustain exceptional growth.",
  "We go anywhere. No geographic constraints. No sector bias. Just conviction.",
  "We run one concentrated fund of 30 to 40 of our best ideas, balanced by Canada's strongest dividend growers to manage risk and reduce volatility.",
  "And we stay curious — always looking at what's emerging, what's being built, and where the next exceptional opportunity is coming from.",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32">
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Since 2000, investing in exceptional companies built to grow.
        </h1>
        <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-soft sm:text-xl">
          One fund. Our best ideas — unconstrained by geography, sector, or
          convention. Relentlessly curious about what comes next.
        </p>
      </section>

      {/* Who It's For */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:col-span-5">
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

      {/* How We Invest */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            How we invest.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-16">
            {MANIFESTO.map((line) => (
              <p
                key={line}
                className="font-body text-lg leading-relaxed text-ink-soft"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Tease */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:col-span-5">
            A consistent track record, built over time.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              <span className="font-display text-4xl font-medium text-ink">
                +10.0%
              </span>{" "}
              annualized since inception. Through bull markets and bear
              markets, through volatility and uncertainty — a disciplined
              approach that compounds over the long term.
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

      {/* Team Intro */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:col-span-5">
            Two generations. One set of values.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
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

      {/* Insights Tease */}
      <section className="border-t border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:col-span-5">
            Notes on markets, companies, and what we&rsquo;re watching.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              Writing and conversation from Teal Linde and Emily Davies —
              candid perspectives on the ideas shaping how we invest.
            </p>
            <Link
              href="/insights"
              className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
            >
              Read Insights &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
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
