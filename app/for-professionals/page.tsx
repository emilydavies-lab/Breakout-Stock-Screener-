import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Lawyers, Executives & Accountants — Linde Equity",
};

export default function ForProfessionalsPage() {
  return (
    <AudiencePage
      heading="For lawyers, executives, and accountants who know exactly what to look for — and expect to find it."
      paragraphs={[
        "You understand finance. You read the fine print. You know the difference between a manager with a genuine edge and one selling a story. That makes you a more discerning client — and exactly the kind of investor we work best with.",
        "Linde Equity offers institutional-grade thinking with complete transparency. One fund, a clear investment thesis, a track record we stand behind, and two investors who publish their thinking publicly. No black boxes. No surprises. Just a disciplined approach to compounding wealth over the long term.",
      ]}
    />
  );
}
