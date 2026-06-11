import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Linde Equity",
};

const TIMELINE = [
  {
    year: "1987",
    text: "Teal Linde invests his $3,000 life savings in a Vancouver Stock Exchange stock. Within a year it's worthless, and he swears off stocks entirely.",
  },
  {
    year: "1996",
    text: "Linde starts buying companies with strong business models, high returns on capital, and large market opportunities — including Intel and Cisco.",
  },
  {
    year: "1999",
    text: "Qualcomm, Linde's 1997 pick, becomes the best-performing large cap stock in North America, appreciating 2,600% in a single year.",
  },
  {
    year: "2000",
    text: "Linde sells half his Qualcomm position on the first trading day of the year — the stock's all-time high. He founds Linde Equity and launches the Linde Equity Report.",
  },
  {
    year: "2002",
    text: "CBS MarketWatch ranks the Linde Equity Report among North America's Top 10 stock newsletters. Linde registers Linde Equity as an Investment Counsel with the BC Securities Commission.",
  },
  {
    year: "2008",
    text: "Markets fall 40% — and so does every portfolio Linde manages.",
  },
  {
    year: "2009",
    text: 'Convinced the world isn’t heading into a second Great Depression, Linde sells positions down 20-40% to buy companies down 80-90% — strong balance sheets, heavy insider buying, priced for the end of the world. He calls it the "switching strategy."',
  },
  {
    year: "2010",
    text: "Thirteen months after the market bottom, portfolios following the switching strategy are back in the black. The Linde Equity Report earns its first #1 ranking, leading to a CNBC interview with Erin Burnett.",
  },
  {
    year: "2013",
    text: "The Linde Equity Report is ranked #1 in North America for the five-year period spanning the 2008 crash through recovery — a full market cycle. The ranking leads to Linde's first in-studio appearance on BNN.",
  },
  {
    year: "2016",
    text: "The Hulbert Financial Digest ranks the Linde Equity Report #1 in North America over the preceding decade.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Narrative Intro */}
      <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
          The Story of Linde Equity
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          Our Story
        </h1>

        <div className="mt-12 max-w-[680px] space-y-6 font-body text-lg leading-[1.8] text-ink-soft">
          <p>
            In 1987, a year before he could legally drink in the US, Teal
            Linde put his life savings — $3,000 — into a Vancouver Stock
            Exchange company. Within a year it was worthless. He swore off
            stocks entirely.
          </p>
          <p>
            Eight years later, with mutual funds delivering little and fees
            eating into what they did return, Linde decided to learn to
            invest properly — not from bestselling authors, but from people
            who had actually done it. He found Peter Lynch and Warren
            Buffett, studied their methods, and started buying companies with
            strong business models, high returns on capital, and large
            markets ahead of them. Intel. Cisco. Then, in 1997, an unknown
            company called Qualcomm.
          </p>
          <p>
            By 1999, Qualcomm was the best-performing large cap stock in
            North America — up 2,600%. On the first trading day of 2000,
            Linde sold half his position. It was the all-time high. With his
            portfolio compounding at over 40% annualized, he founded Linde
            Equity and began publishing the Linde Equity Report.
          </p>
          <p>
            The newsletter built a track record — and a following. Rankings
            from CBS MarketWatch and the Hulbert Financial Digest brought
            media attention, and media attention brought readers asking Linde
            to manage their money directly. Linde Equity Investment Counsel
            was born from that demand.
          </p>
          <p>Then came 2008. Markets fell 40%, and so did every portfolio Linde managed.</p>
          <p>
            In January 2009, Linde made a decision that would define the
            firm. Convinced the world wasn&rsquo;t heading into a second
            Great Depression, he sold positions that were down 20-40% to buy
            companies — with strong balance sheets and heavy insider buying —
            that were down 80-90%, priced as if they wouldn&rsquo;t survive.
            Thirteen months later, those portfolios were back in the black.
            The Linde Equity Report earned its first #1 ranking that same
            year — and in 2016, the Hulbert Financial Digest ranked it #1 in
            North America over the preceding decade.
          </p>
          <p>
            That instinct — to act with conviction when conventional wisdom
            says otherwise — is still how Linde Equity invests today.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-ink-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
          <div className="flex flex-col">
            {TIMELINE.map(({ year, text }) => (
              <div
                key={year}
                className="grid gap-2 border-t border-ink-line py-12 first:border-t-0 sm:grid-cols-12 sm:gap-8 sm:py-15"
              >
                <p className="font-display text-2xl font-medium tracking-tight text-ink-soft sm:col-span-2 sm:text-3xl">
                  {year}
                </p>
                <p className="font-body text-lg leading-relaxed text-ink-soft sm:col-span-8">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
