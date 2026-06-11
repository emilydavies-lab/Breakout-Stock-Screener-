import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy — Linde Equity",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Title */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          How we think about investing
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Philosophy
        </h1>
      </section>

      {/* Main approach content */}
      <section className="border-t border-ink-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <div className="max-w-[680px] space-y-6 font-body text-lg leading-[1.8] text-ink-soft">
            <p>
              We invest in a small number of businesses we understand deeply —
              companies with{" "}
              <em className="font-display italic text-ink">
                superior business models
              </em>
              , high returns on invested capital, and markets large enough to
              sustain exceptional growth for years to come.
            </p>
            <p>
              We go anywhere. No geographic constraints, no sector bias —
              just a relentless search for the best ideas, wherever they
              happen to be. That conviction is balanced by Canada&rsquo;s
              strongest dividend growers, which manage risk and reduce
              volatility without diluting our highest-conviction positions.
            </p>
            <p>
              Most active managers behave like benchmarks with higher fees —
              broadly diversified, closet-indexed, unwilling to look
              different from the crowd. We think that&rsquo;s backwards.
              Genuine active management means having the conviction to be
              concentrated, and the discipline to act when the market is
              wrong — even when, especially when, conventional wisdom says
              otherwise.
            </p>
          </div>

          {/* 2009 case study sidebar */}
          <aside className="mt-16 max-w-[680px] border-l-2 border-ink pl-8">
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
