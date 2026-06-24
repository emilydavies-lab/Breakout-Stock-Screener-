import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Linde Equity",
};

const INSIGHTS = [
  {
    date: "06.04.2026",
    title: "SpaceX IPO and Why We're Not Participating (Yet)",
    subtitle: "Featuring Teal Linde & Emily Davies",
  },
  {
    date: "06.01.2026",
    title: "Chart of the Month",
    subtitle: "SaaS Valuations and the Growth Disconnect",
  },
  {
    date: "05.19.2026",
    title: "Our Investment in e.l.f. Beauty",
    subtitle: "Partnering with e.l.f. and why Rhode is critical to our thesis",
  },
];

export default function InsightsPage() {
  return (
    <section className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <h1 className="font-display text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          Insights
        </h1>
        <div className="mt-12 border-t border-ink-line">
          {INSIGHTS.map(({ date, title, subtitle }) => (
            <Link
              key={title}
              href="/insights"
              className="grid gap-6 border-b border-ink-line py-10 transition-opacity hover:opacity-70 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <div className="aspect-[4/3] w-full bg-ink-line sm:col-span-3" />
              <div className="sm:col-span-9">
                <p className="font-mono text-sm text-ink-soft">{date}</p>
                <p className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight">
                  {title}
                </p>
                <p className="mt-2 font-body text-sm text-ink-soft">
                  &middot; {subtitle}
                </p>
                <p className="mt-4 font-mono text-sm text-ink-soft">
                  {"-------- "}Learn More
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
