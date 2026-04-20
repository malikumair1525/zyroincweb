import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TM9 Platform — Web, iOS & Android",
  description:
    "TM9 is ZYRO INC's proprietary trading platform — available on web, iOS, and Android. Advanced charting, one-click trading, algorithmic execution, and unified cross-device access.",
  keywords: [
    "TM9 platform",
    "forex trading platform",
    "mobile trading app",
    "trading terminal",
    "forex app iOS",
    "forex app Android",
  ],
  alternates: { canonical: "/platforms" },
  openGraph: {
    title: "TM9 Platform — Trading Reimagined | ZYRO INC",
    description:
      "Professional trading tools, effortless experience. Trade on TM9 across web, desktop, and mobile — unified account, seamless sync.",
    url: "/platforms",
  },
};

export default function PlatformsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}