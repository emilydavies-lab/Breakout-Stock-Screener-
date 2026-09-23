import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export function MapleLeafIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 1l1.4 3.2 1.8-.9-.8 5.1 2.8-2.8.6 1.7 3.7-.7-1.1 3.6 1.6.8-4.4 3.8.7 2-5.3-.8h-.4V22.5h-1.2V16h-.4l-5.3.8.7-2L2 11l1.6-.8-1.1-3.6 3.7.7.6-1.7 2.8 2.8-.8-5.1 1.8.9Z"
      />
    </Svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </g>
    </Svg>
  );
}

export function AccountIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5c1.2-3.8 4.2-5.6 7.5-5.6s6.3 1.8 7.5 5.6" />
      </g>
    </Svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke}>
        <path d="M2.5 4h2.6l2.3 10.5h10.3L20 7H6.2" />
        <circle cx="9.3" cy="19" r="1.2" />
        <circle cx="16.8" cy="19" r="1.2" />
      </g>
    </Svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={1.5}>
        <path d="M12 2.8 20.5 7.5v9L12 21.2l-8.5-4.7v-9Z" />
        <path d="m3.5 7.5 8.5 4.7 8.5-4.7M12 12.2v9" />
      </g>
    </Svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9.2" />
        <ellipse cx="12" cy="12" rx="4" ry="9.2" />
        <path d="M2.8 12h18.4M4.2 7.3h15.6M4.2 16.7h15.6" />
      </g>
    </Svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={2}>
        <path d="M4.5 12h14.5M13.5 6.5 19 12l-5.5 5.5" />
      </g>
    </Svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
      </g>
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </Svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M16.6 2h-3.4v13.3a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.4V6.6a4.5 4.5 0 0 1-4.4-4.6Z"
      />
    </Svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.9 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"
      />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={2}>
        <path d="M6 6l12 12M18 6 6 18" />
      </g>
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <g {...stroke} strokeWidth={2}>
        <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
      </g>
    </Svg>
  );
}
