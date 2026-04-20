import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program — Up to 40% Revenue Share",
  description:
    "Join the ZYRO INC Partner Program — industry-leading CPA and revenue share tiers, real-time tracking, and dedicated partner managers for IBs, content creators, and affiliate networks.",
  keywords: [
    "forex affiliate program",
    "forex IB program",
    "introducing broker",
    "forex revenue share",
    "trading affiliate",
    "broker partnership",
  ],
  alternates: { canonical: "/affiliates" },
  openGraph: {
    title: "Partner Program — Turn Audience Into Recurring Revenue | ZYRO INC",
    description:
      "CPA. Revenue share. Hybrid. Join one of the most competitive forex partner programs — with transparent reporting, dedicated managers, and a brand worth representing.",
    url: "/affiliates",
  },
};

export default function AffiliatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}