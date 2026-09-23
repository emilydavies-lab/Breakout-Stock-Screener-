import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const marker = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Loose, upward-sweeping marker stroke. `weight` sets the stroke width in viewBox units. */
export function MarkerUnderline({ weight = 3, ...props }: Props & { weight?: number }) {
  return (
    <svg viewBox="0 0 132 56" aria-hidden="true" focusable="false" {...props}>
      <path {...marker} strokeWidth={weight} d="M3 53c22-14 47-27 76-37 16-5 32-9 50-12" />
    </svg>
  );
}

/** Rough red marker loop; the stroke overshoots where it closes. */
export function MarkerCircle(props: Props) {
  return (
    <svg viewBox="0 0 134 112" aria-hidden="true" focusable="false" preserveAspectRatio="none" {...props}>
      <path
        {...marker}
        strokeWidth={2}
        d="M104 9C78-1 30 3 11 32-6 58 17 102 64 108c42 5 71-19 68-52-2-26-24-44-52-49-9-1-18 0-25 2"
      />
    </svg>
  );
}
