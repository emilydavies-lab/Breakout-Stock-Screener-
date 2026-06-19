import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Business Owners & Entrepreneurs — Linde Equity",
};

export default function ForBusinessOwnersPage() {
  return (
    <AudiencePage
      heading="For those who've built something — and are ready to grow beyond it."
      paragraphs={[
        "You know what it takes to build a business. You've made decisions with incomplete information, backed your convictions, and created something real. Now you're thinking about what comes next — diversifying, protecting, and growing the wealth you've built.",
        "Linde Equity thinks like you do. One concentrated fund, no filler, no hedging. We pick our best ideas and back them with conviction — the same way you've built your business. No committees, no consensus required. Just rigorous research and a long-term view.",
        "We work with business owners and entrepreneurs at all stages — whether you're still running the business or have recently transitioned out.",
      ]}
    />
  );
}
