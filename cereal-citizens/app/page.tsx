import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectiblesSection from "@/components/CollectiblesSection";
import XLBoxesSection from "@/components/XLBoxesSection";
import StreetGallery from "@/components/StreetGallery";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CollectiblesSection />
        <XLBoxesSection />
      </main>
      <StreetGallery />
      <CartDrawer />
    </>
  );
}
