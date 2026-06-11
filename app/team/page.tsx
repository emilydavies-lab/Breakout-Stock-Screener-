import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Team — Linde Equity",
};

export default function TeamPage() {
  return (
    <PlaceholderPage
      title="Team"
      intro="Teal Linde, Founder & CIO, and Emily Davies, President — investors with perspective and voice."
    >
      <Link
        href="/our-story"
        className="mt-8 inline-block border-b border-ink pb-1 font-body text-sm tracking-wide transition-opacity hover:opacity-60"
      >
        Read Our Story &rarr;
      </Link>
    </PlaceholderPage>
  );
}
