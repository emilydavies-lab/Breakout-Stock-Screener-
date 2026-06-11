export default function PlaceholderPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
        {intro}
      </p>
      {children}
      <p className="mt-12 font-body text-sm uppercase tracking-widest text-ink-soft">
        Content coming soon
      </p>
    </section>
  );
}

