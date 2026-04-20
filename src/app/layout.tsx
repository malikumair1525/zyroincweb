import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Toaster from "@/components/shared/Toaster";
import PageTransition from "@/components/shared/PageTransition";
import OrganizationSchema from "@/components/shared/OrganizationSchema";
import { SITE_CONFIG } from "@/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = `https://${SITE_CONFIG.domain}`;

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_CONFIG.name} — Trade Forex & CFDs on the TM9 Platform`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "ZYRO INC",
    "forex broker",
    "CFD trading",
    "TM9 platform",
    "online trading",
    "tight spreads",
    "leverage trading",
    "forex trading",
    "cryptocurrency trading",
    "commodities trading",
    "metals trading",
    "indices trading",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  applicationName: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Trade Forex & CFDs on the TM9 Platform`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Trade Forex & CFDs on the TM9 Platform`,
    description: SITE_CONFIG.description,
    creator: "@zyroinc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
    <body className="min-h-screen flex flex-col font-sans bg-ink-950 text-white">
      <OrganizationSchema />
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <Toaster />
    </body>
    </html>
  );
}