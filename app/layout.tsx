import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FundBand from "@/components/FundBand";

const canela = Cormorant_Garamond({
  variable: "--font-canela",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sohne = Inter({
  variable: "--font-sohne",
  subsets: ["latin"],
});

const monoAccent = IBM_Plex_Mono({
  variable: "--font-mono-accent",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Linde Equity",
  description:
    "Over two decades investing in exceptional companies built to grow. Independent, concentrated, conviction-driven investment management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${canela.variable} ${sohne.variable} ${monoAccent.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <FundBand />
        <Footer />
      </body>
    </html>
  );
}
