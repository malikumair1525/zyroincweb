import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposits & Withdrawals — Zero Fees",
  description:
    "Fund your ZYRO INC account via bank transfer, USDT TRC-20, or USDT ERC-20 — with zero fees from our side and processing times measured in minutes.",
  keywords: [
    "broker deposits",
    "forex withdrawal",
    "USDT deposit",
    "crypto broker funding",
    "bank transfer trading account",
    "fee free deposit",
  ],
  alternates: { canonical: "/deposits-withdrawals" },
  openGraph: {
    title: "Deposits & Withdrawals — Fast, Secure, Fee-Free | ZYRO INC",
    description:
      "Zero fees. Fast processing. Full transparency. Fund your trading account via bank transfer or USDT — in minutes, not days.",
    url: "/deposits-withdrawals",
  },
};

export default function FundingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}