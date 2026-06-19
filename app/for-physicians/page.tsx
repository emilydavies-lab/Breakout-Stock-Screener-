import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Physicians — Linde Equity",
};

export default function ForPhysiciansPage() {
  return (
    <AudiencePage
      heading="Built for physicians who've spent decades building their practice — and their wealth."
      paragraphs={[
        "You chose medicine. That means years of training before your first real paycheque, a career that demands everything you have, and wealth that accumulates later and faster than most. You don't have time to manage it yourself — and you shouldn't have to.",
        "Linde Equity was built for investors like you. One fund, one relationship, complete transparency. We handle the portfolio with the same rigour and discipline you bring to your practice — so you can focus on what you do best.",
        "We work with physicians investing personally and through professional corporations and holding companies.",
      ]}
    />
  );
}
