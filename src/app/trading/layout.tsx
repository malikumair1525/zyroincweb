import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading — 500+ Instruments, Tight Spreads",
  description:
    "Trade forex, metals, commodities, indices, crypto, and shares with ZYRO INC — leverage up to 1:500, spreads from 0.0 pips, and 50ms execution on the TM9 platform.",
  keywords: [
    "forex trading",
    "CFD trading",
    "tight spreads",
    "leverage trading",
    "crypto CFD",
    "gold trading",
    "commodities trading",
    "indices CFD",
    "share CFDs",
  ],
  alternates: { canonical: "/trading" },
  openGraph: {
    title: "Trading — 500+ Global Instruments | ZYRO INC",
    description:
      "Institutional-grade trading conditions on 500+ instruments — forex, metals, commodities, indices, and cryptocurrencies. Leverage up to 1:500.",
    url: "/trading",
  },
};

export default function TradingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}