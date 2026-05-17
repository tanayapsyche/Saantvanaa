import type { Metadata } from "next";
import { Inter, Inknut_Antiqua, Amita } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Indo-Latin display & serif font.
// Inknut Antiqua is a warm, antique-feeling serif drawn for both
// Devanagari and Latin scripts — perfect bridge for the Saantwanaa brand.
const inknut = Inknut_Antiqua({
  variable: "--font-inknut",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const amita = Amita({
  variable: "--font-amita",
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={`${inter.variable} ${inknut.variable} ${amita.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
