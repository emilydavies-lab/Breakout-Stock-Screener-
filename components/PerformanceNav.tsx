"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "highlights", label: "Highlights" },
  { id: "returns", label: "Returns" },
  { id: "composition", label: "Composition" },
];

export default function PerformanceNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="sticky top-0 z-10 border-b border-ink-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex gap-10 overflow-x-auto">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className={`whitespace-nowrap border-b-2 py-6 font-body text-sm tracking-wide transition-opacity hover:opacity-70 ${
                active === id
                  ? "border-ink font-medium text-ink"
                  : "border-transparent text-ink-soft"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
