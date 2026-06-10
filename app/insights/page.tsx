import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Insights — Linde Equity",
};

export default function InsightsPage() {
  return (
    <PlaceholderPage
      title="Insights"
      intro="Podcast episodes and writing from Teal Linde and Emily Davies — filterable by type and author, with an RSS feed."
    />
  );
}
