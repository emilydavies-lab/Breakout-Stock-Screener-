import type { Metadata, Viewport } from "next";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "./globals.css";
import { CartProvider } from "@/lib/cart";

export const metadata: Metadata = {
  title: "Cereal Citizens — Cereal for a Brighter B.C.",
  description:
    "Limited edition political parody cereal collectibles and XL boxes from British Columbia. Same politics. A brighter B.C.",
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
