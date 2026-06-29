"use client";

import { usePathname } from "next/navigation";
import FundBand from "@/components/FundBand";

export default function GlobalFundBand() {
  const pathname = usePathname();

  if (pathname === "/performance") {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <FundBand />
    </div>
  );
}
