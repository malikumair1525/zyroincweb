import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ZYRO INC",
  description:
    "ZYRO INC is a next-generation online forex and CFD broker built on integrity, precision execution, and institutional-grade infrastructure — serving traders in 120+ countries.",
  keywords: [
    "about zyro",
    "forex broker company",
    "trading infrastructure",
    "institutional broker",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ZYRO INC",
    description:
      "A broker built on principle, operated with precision. Learn how ZYRO INC delivers institutional-quality trading infrastructure to serious market participants worldwide.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}