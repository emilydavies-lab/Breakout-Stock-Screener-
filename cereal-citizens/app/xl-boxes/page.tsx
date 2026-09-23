import type { Metadata } from "next";
import Header from "@/components/Header";
import XLBoxesSection from "@/components/XLBoxesSection";
import XLProductsSection from "@/components/XLProductsSection";
import StreetGallery from "@/components/StreetGallery";

export const metadata: Metadata = {
  title: "XL Boxes — Cereal Citizens",
  description:
    "Oversized Rice Eby's and Lorne Pops boxes for rallies, events, markets and photo ops. $75 CAD each.",
};

export default function XLBoxesPage() {
  return (
    <>
      <Header variant="solid" />
      <main>
        <XLBoxesSection as="h1" showCta={false} />
        <XLProductsSection />
      </main>
      <StreetGallery />
    </>
  );
}
