import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Types — Standard, Pro & VIP",
  description:
    "Compare ZYRO INC account tiers. Standard from $100, Pro from $2,500, VIP from $25,000 — each with progressively tighter spreads, higher leverage, and enhanced service levels.",
  keywords: [
    "forex account types",
    "trading account",
    "VIP trading account",
    "pro trader account",
    "minimum deposit broker",
  ],
  alternates: { canonical: "/account-types" },
  openGraph: {
    title: "Account Types — Standard, Pro & ECN | ZYRO INC",
    description:
      "Three account tiers engineered for every trading style. Choose the account that fits your capital, volume, and strategy.",
    url: "/account-types",
  },
};

export default function AccountTypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}