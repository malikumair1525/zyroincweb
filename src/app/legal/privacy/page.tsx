import LegalDocument, { type LegalSection } from "@/components/legal/LegalDocument";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How ZYRO INC collects, uses, and safeguards your personal data — including your rights as a data subject under applicable data protection laws.",
  alternates: { canonical: "/legal/privacy" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "ZYRO INC ('we', 'our', or 'us') is committed to protecting the privacy and security of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with your use of our website, the TM9 trading platform, and related services.",
      "By using our services, you consent to the collection and processing of your personal data as described in this policy. If you do not agree with any part of this policy, you must not use our services.",
    ],
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    paragraphs: [
      "We collect information that you provide directly, information collected automatically through your use of our services, and information obtained from third-party sources in the course of compliance verification.",
    ],
    list: [
      "Identification data: full name, date of birth, nationality, government-issued ID numbers, tax identification numbers.",
      "Contact data: registered email address, phone number, residential address, and any secondary contact information you provide.",
      "Financial data: deposit and withdrawal details, bank account or crypto wallet information, source-of-funds declarations, trading history.",
      "Technical data: IP address, device identifiers, browser type, operating system, and usage patterns gathered through cookies and similar technologies.",
      "Compliance data: information obtained through sanctions screening, politically-exposed-person checks, and AML risk assessments.",
    ],
  },
  {
    id: "use-of-information",
    title: "How We Use Your Information",
    paragraphs: [
      "We process your personal data for the following purposes, and each processing activity is carried out under an appropriate legal basis — including contract performance, legal obligation, legitimate interest, or your explicit consent.",
    ],
    list: [
      "To open, verify, and administer your trading account.",
      "To provide access to the TM9 platform and process transactions.",
      "To comply with anti-money-laundering, sanctions, and other regulatory obligations.",
      "To monitor account activity, detect fraud, and protect the integrity of our services.",
      "To communicate with you about your account, products, and service changes.",
      "To improve our services through aggregated analytics and product research.",
      "To deliver marketing communications — only where you have explicitly opted in.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    paragraphs: [
      "We do not sell personal data to third parties. We may share your information with trusted third parties only where necessary to provide our services or to comply with legal obligations.",
    ],
    list: [
      "Liquidity providers and payment processors executing your transactions.",
      "Identity verification providers performing KYC, AML, and sanctions screening.",
      "Cloud infrastructure, hosting, and IT service providers supporting our systems.",
      "Auditors, legal advisors, and compliance consultants under confidentiality obligations.",
      "Regulators, law enforcement, or courts when required by a valid legal request.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    paragraphs: [
      "We retain personal data for as long as necessary to fulfill the purposes outlined in this policy — including legal, regulatory, tax, accounting, and reporting requirements.",
      "Client account records are typically retained for a minimum of five (5) years after account closure in line with AML recordkeeping obligations. Where longer retention is required by law, we will retain the information for that extended period.",
      "Marketing preferences are retained until you withdraw consent. Website analytics data may be retained for shorter periods in aggregated form.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "Our website uses cookies and similar technologies to provide essential functionality, remember user preferences, and collect analytics to improve the user experience. Essential cookies are necessary for the website to function and cannot be disabled.",
      "You can manage non-essential cookies through your browser settings or via any cookie consent banner provided on our website. Disabling certain cookies may limit access to some features.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    paragraphs: [
      "We apply a multi-layered information security framework to protect your personal data — including encryption of data in transit and at rest, access controls, network monitoring, staff training, and regular security assessments.",
      "While we take appropriate technical and organizational measures to protect your information, no method of transmission over the internet or electronic storage is completely secure. You share information with us at your own risk, and must take reasonable steps to safeguard your own credentials.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    paragraphs: [
      "Subject to applicable data protection laws, you may have the following rights in respect of your personal data. To exercise any of these rights, please contact us using the details at the end of this policy.",
    ],
    list: [
      "The right to access the personal data we hold about you.",
      "The right to request correction of inaccurate or incomplete data.",
      "The right to request deletion of your data, subject to legal retention requirements.",
      "The right to restrict or object to certain processing activities.",
      "The right to data portability — receiving your data in a structured, machine-readable format.",
      "The right to withdraw consent at any time, where processing is based on consent.",
      "The right to lodge a complaint with a competent data protection authority.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    paragraphs: [
      "Your personal data may be processed in jurisdictions outside your country of residence, including jurisdictions where data protection laws may differ from those in your home country. We implement appropriate safeguards — including contractual clauses and access restrictions — to ensure your data remains protected during any cross-border transfer.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, regulatory environment, or business practices. The 'Last updated' date at the top of this policy will indicate when the most recent revision took effect.",
      "Material changes will be communicated via the client portal or by email. Continued use of our services after changes take effect constitutes acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, want to exercise your data rights, or wish to submit a complaint regarding the handling of your personal information, you may contact our data protection team at support@zyroinc.com.",
      "We will respond to legitimate requests within a reasonable timeframe, typically not exceeding 30 calendar days from receipt.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated="January 2026"
      introduction="This Privacy Policy explains how ZYRO INC collects, uses, shares, and safeguards personal information gathered through our website, the TM9 trading platform, and related services. It also sets out your rights as a data subject."
      sections={SECTIONS}
      currentSlug="/privacy"
    />
  );
}