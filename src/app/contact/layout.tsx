import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Fast Support Response",
  description:
    "Reach ZYRO INC for account, trading, funding, or partnership inquiries. Our multilingual support team responds within 2 business hours via email, live chat, or contact form.",
  keywords: [
    "ZYRO INC support",
    "forex broker support",
    "trading help",
    "customer service broker",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | ZYRO INC",
    description:
      "Human support, fast response. Reach us by email, live chat, or contact form — we respond in under 2 business hours.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}