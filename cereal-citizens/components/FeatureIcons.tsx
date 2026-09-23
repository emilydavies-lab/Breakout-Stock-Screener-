import type { ComponentType, SVGProps } from "react";
import { BoxIcon, GlobeIcon, MapleLeafIcon } from "./icons";

const features: { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "Canadian Made", Icon: MapleLeafIcon },
  { label: "Collector’s Edition", Icon: BoxIcon },
  { label: "Ships Across Canada", Icon: GlobeIcon },
];

export default function FeatureIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid grid-cols-3 lg:flex ${className}`}>
      {features.map(({ label, Icon }) => (
        <li key={label} className="flex flex-col items-center text-center text-ink lg:w-[6.25rem]">
          <Icon className="size-6 lg:size-[1.625rem]" />
          <span className="mt-2.5 text-[0.6875rem] leading-tight font-semibold lg:mt-[0.6875rem] lg:text-[0.625rem] lg:tracking-[-0.005em] lg:leading-[0.875rem] lg:whitespace-nowrap">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
