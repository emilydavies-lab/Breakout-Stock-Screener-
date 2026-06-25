import type { Metadata } from "next";
import { Target, Globe, Layers, Telescope } from "lucide-react";

export const metadata: Metadata = {
  title: "Philosophy — Linde Equity",
};

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

export default function PhilosophyPage() {
  return (
    <>
      {/* Title */}
      <section className="mx-auto max-w-6xl px-6 pt-[62px] pb-[62px] sm:px-10 sm:pt-[84px] sm:pb-[84px]">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          How we think about investing
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Philosophy
        </h1>
      </section>

      {/* Manifesto */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 pt-[62px] pb-[62px] sm:px-10 sm:pt-[84px] sm:pb-[84px]">
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

      {/* The Approach */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 pt-[62px] pb-[62px] sm:px-10 sm:pt-[84px] sm:pb-[84px]">
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            The Approach
          </h2>
          <div className="mt-12 max-w-[680px] space-y-6 font-body text-lg leading-[1.8] text-ink-soft">
            <p>
              We&rsquo;re looking for one thing above all: businesses that
              generate high returns on the capital they reinvest, year after
              year. Companies like that are rare. So we look everywhere.
            </p>
            <p>
              We research across the entire stock universe — Canadian and US
              large-caps, mid-caps, small-caps, and overseas companies trading
              on US exchanges. Every industry, every sector. No category is
              off-limits, because the next great business could be anywhere.
            </p>

            <blockquote className="border-l-2 border-ink py-1 pl-8 font-display text-xl italic leading-relaxed text-ink">
              The person who turns over the most stones wins.
              <span className="mt-2 block font-body text-base not-italic text-ink-soft">
                — Peter Lynch
              </span>
            </blockquote>

            <p>Most of what we find falls into two categories.</p>
            <p>
              The first is{" "}
              <em className="font-display italic text-ink">pure growth</em> —
              companies with superior business models, high returns on
              invested capital, and large markets still ahead of them. These
              are the engines of the portfolio, the ideas we have the most
              conviction in.
            </p>
            <p>
              The second is{" "}
              <em className="font-display italic text-ink">
                dividend growth
              </em>{" "}
              — companies with the same underlying quality (strong models,
              high returns on capital) but further along, generating income
              as well as appreciation. These add stability without
              sacrificing the standards we apply to everything else.
            </p>
            <p>
              The result is one portfolio, built from the best of both:
              concentrated enough to matter, balanced enough to manage risk,
              and entirely free of the constraints — geographic, sectoral, or
              otherwise — that limit most managers before they&rsquo;ve even
              started looking.
            </p>
          </div>
        </div>
      </section>

      {/* 2009 case study */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 pt-[62px] pb-[62px] sm:px-10 sm:pt-[84px] sm:pb-[84px]">
          <aside className="max-w-[680px] border-l-2 border-ink pl-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
              2009: a case study
            </p>
            <p className="mt-4 font-body text-lg leading-[1.8] text-ink-soft">
              In January 2009, with markets still reeling, Teal sold client
              positions that were down 20-40% to buy stocks that were down
              80-90% — companies with strong balance sheets and heavy insider
              buying, priced as if the economy was ending. Within 13 months,
              portfolios following the strategy were back in positive
              territory. The Linde Equity Report earned its first #1 ranking
              that same year.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
