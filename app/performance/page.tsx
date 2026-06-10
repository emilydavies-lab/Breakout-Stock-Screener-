import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Performance — Linde Equity",
};

export default function PerformancePage() {
  return (
    <PlaceholderPage
      title="Performance"
      intro="Annualized and annual returns, fund structure, account types, and minimums."
    />
  );
}
