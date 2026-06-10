import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Team — Linde Equity",
};

export default function TeamPage() {
  return (
    <PlaceholderPage
      title="Team"
      intro="Teal Linde, Founder & CIO, and Emily Davies, President — investors with perspective and voice."
    />
  );
}
