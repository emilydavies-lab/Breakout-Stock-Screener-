import Link from "next/link";

export default function FundBand({
  variant = "default",
}: {
  variant?: "default" | "cta";
}) {
  if (variant === "cta") {
    return (
      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.1em] text-white">
            Interested in investing in the Fund?
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-2 font-body text-sm text-white transition-opacity hover:opacity-70"
            >
              Download Materials
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-2 font-body text-sm text-white transition-opacity hover:opacity-70"
            >
              Contact Linde Equity &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-[900px] flex-col gap-4 bg-ink px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.1em] text-white">
          Linde Equity Fund
        </p>
        <p className="font-mono text-sm text-white/60">
          Learn more about investing in the Fund
        </p>
        <Link
          href="/performance"
          className="inline-flex items-center justify-center border border-white px-6 py-2 font-body text-sm text-white transition-opacity hover:opacity-70"
        >
          Explore the Linde Equity Fund &rarr;
        </Link>
      </div>
    </div>
  );
}
