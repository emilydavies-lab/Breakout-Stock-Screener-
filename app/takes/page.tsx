import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Takes — Linde Equity",
};

export default function TakesPage() {
  return (
    <PlaceholderPage
      title="Takes"
      intro="Podcast episodes and writing from Teal Linde and Emily Davies — filterable by type and author, with an RSS feed."
    />
  );
}
