import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Philosophy — Linde Equity",
};

export default function PhilosophyPage() {
  return (
    <PlaceholderPage
      title="Philosophy"
      intro="Our investment approach, and the case for active management — in our own words."
    />
  );
}
