"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  className?: string;
};

export default function QuantitySelector({ value, onChange, label, min = 1, max = 99, className = "" }: Props) {
  return (
    <div
      role="group"
      aria-label={`Quantity, ${label}`}
      className={`inline-flex h-8 items-center rounded-md border border-ink/15 bg-white text-ink lg:h-[2rem] lg:rounded-[0.375rem] ${className}`}
    >
      <button
        type="button"
        className="grid h-full w-7 place-items-center text-ink/60 hover:text-ink disabled:opacity-35 lg:w-[1.1875rem] lg:pl-[0.25rem]"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Decrease quantity of ${label}`}
      >
        <span aria-hidden="true" className="text-sm leading-none lg:text-[0.75rem]">&minus;</span>
      </button>
      <output aria-live="polite" className="min-w-5 text-center text-xs font-medium tabular-nums lg:min-w-[1.25rem] lg:text-[0.71875rem]">
        {value}
      </output>
      <button
        type="button"
        className="grid h-full w-7 place-items-center text-ink/80 hover:text-ink disabled:opacity-35 lg:w-[1.1875rem] lg:pr-[0.25rem]"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Increase quantity of ${label}`}
      >
        <span aria-hidden="true" className="text-sm leading-none lg:text-[0.75rem]">+</span>
      </button>
    </div>
  );
}
