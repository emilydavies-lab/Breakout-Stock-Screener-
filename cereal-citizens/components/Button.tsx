import type { ComponentProps } from "react";
import { ArrowIcon } from "./icons";

const variants = {
  primary: "bg-navy text-white hover:bg-[#12283b]",
  outline: "bg-white text-ink border border-ink/80 hover:bg-paper",
  light: "bg-white text-ink hover:bg-paper focus-light",
} as const;

type Props = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  arrow?: boolean;
};

/** Pill link-button used for the page CTAs. Sizing comes from className. */
export default function Button({
  variant = "primary",
  arrow = true,
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-[0.6em] rounded-full font-medium whitespace-nowrap transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow && <ArrowIcon className="size-[1.05em] shrink-0" />}
    </a>
  );
}
