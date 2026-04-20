import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Complete Help Center",
  description:
    "Find answers to common questions about ZYRO INC — account opening, trading conditions, deposits, withdrawals, TM9 platform, partner program, and security.",
  keywords: [
    "ZYRO INC FAQ",
    "forex broker questions",
    "trading account FAQ",
    "broker help center",
  ],
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Help Center — Everything, Explained | ZYRO INC",
    description:
      "Browse the most common questions from ZYRO INC clients. Quick answers on accounts, trading, funding, platform, and security.",
    url: "/faqs",
  },
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}