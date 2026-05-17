import type { Metadata } from "next";
import { Inter, Playfair_Display, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Brand font: Tiro Devanagari Hindi is a digital revival drawn for
// printing modern editions of classical Sanskrit/Hindi texts. It carries
// both the Devanagari script and matching Latin characters with a
// scholarly, timeless feel — literally a new font rooted in ancient practice.
const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-brand",
  subsets: ["devanagari", "latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | सांत्वना — Lifestyle Management`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Lifestyle Management Through Habit Coaching & Emotional Wellness`,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${tiroDevanagari.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
