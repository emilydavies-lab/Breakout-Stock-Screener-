import Link from "next/link";

export default function AudiencePage({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-30 sm:px-10">
      <Link
        href="/#who-its-for"
        className="font-body text-sm text-ink-soft transition-opacity hover:opacity-60"
      >
        &larr; Who we work with
      </Link>

      <h1 className="mt-10 max-w-3xl font-display text-5xl font-medium leading-[1.15] tracking-tight sm:text-6xl">
        {heading}
      </h1>

      <div className="mt-10 max-w-[680px] space-y-6 font-body text-lg leading-[1.8] text-ink-soft">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-10 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide text-ink transition-opacity hover:opacity-60"
      >
        Get in touch &rarr;
      </Link>
    </section>
  );
}
