import { MapleLeafIcon } from "./icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`block text-ink ${className}`} aria-label="Cereal Citizens, home">
      <span className="block font-condensed text-[1.625rem] leading-[0.84] lg:leading-[0.8] font-semibold tracking-[0.07em] uppercase lg:text-[2.125rem]">
        <span className="block">Cereal</span>
        <span className="flex items-center">
          Citizens
          <MapleLeafIcon className="ml-[0.55em] size-[0.5em] lg:ml-[0.875rem] lg:size-[1.3125rem]" />
        </span>
      </span>
      <span className="mt-2 block text-[0.5rem] font-semibold tracking-[0.18em] whitespace-nowrap uppercase lg:mt-[0.625rem] lg:text-[0.5625rem]">
        Same Politics. A Brighter B.C.
      </span>
    </a>
  );
}
