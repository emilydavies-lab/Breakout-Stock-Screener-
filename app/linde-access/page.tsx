import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Linde Access — Linde Equity",
};

export default function LindeAccessPage() {
  return (
    <PlaceholderPage
      title="Linde Access"
      intro="The same fund, a $250,000 entry point — built for investors building meaningful lives."
    />
  );
}
