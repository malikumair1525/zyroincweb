import LegalDocument, { type LegalSection } from "@/components/legal/LegalDocument";

export const metadata = {
  title: "AML / KYC Policy",
  description:
    "ZYRO INC's Anti-Money Laundering and Know Your Customer framework — covering identity verification, transaction monitoring, and compliance obligations.",
  alternates: { canonical: "/legal/aml-kyc" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "commitment",
    title: "Our Commitment",
    paragraphs: [
      "ZYRO INC is committed to preventing money laundering, terrorist financing, sanctions evasion, and other financial crimes. We operate under a comprehensive Anti-Money Laundering ('AML') and Know Your Customer ('KYC') framework aligned with international standards set by the Financial Action Task Force (FATF) and other applicable regulatory bodies.",
      "This policy outlines the principles, procedures, and controls we apply to protect the integrity of the financial system, safeguard our clients, and meet our regulatory obligations. Compliance with this policy is mandatory for all employees and binding on all client relationships.",
    ],
  },
  {
    id: "client-identification",
    title: "Client Identification (KYC)",
    paragraphs: [
      "Every individual or entity seeking to open an account with ZYRO INC is subject to identity verification prior to being granted access to trading services. No anonymous accounts, numbered accounts, or accounts under fictitious names are permitted.",
      "We collect and independently verify the following information at account opening, as applicable:",
    ],
    list: [
      "Full legal name and any alternative names historically used.",
      "Date of birth, nationality, and country of tax residence.",
      "Current residential address, supported by documentary evidence.",
      "Government-issued photo identification (passport, national ID, or driving licence).",
      "For entities: incorporation documents, ownership structure, and beneficial owner details.",
      "Source of funds and, for higher-risk cases, source of overall wealth.",
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk-Based Approach",
    paragraphs: [
      "Each client relationship is assigned a risk rating based on a combination of geographic, product, delivery-channel, and personal risk factors. This risk rating determines the level of due diligence applied — ranging from simplified due diligence (SDD) for low-risk cases to enhanced due diligence (EDD) for higher-risk cases.",
      "Factors that may trigger enhanced due diligence include (but are not limited to): residence or activity in jurisdictions with weak AML frameworks, politically exposed person (PEP) status, complex ownership structures, and unusually large or unusual transaction patterns.",
    ],
  },
  {
    id: "pep-sanctions",
    title: "PEP and Sanctions Screening",
    paragraphs: [
      "All clients are screened against recognized sanctions lists — including those maintained by the United Nations, the European Union, the United Kingdom, the United States Office of Foreign Assets Control (OFAC), and other relevant authorities — at onboarding and on an ongoing basis.",
      "We also screen clients against global politically-exposed-person (PEP) databases and adverse media sources. Individuals identified as PEPs, or as close associates or family members of PEPs, are subject to senior-management approval before onboarding and to enhanced ongoing review.",
      "Relationships with sanctioned individuals or entities will be refused or terminated, and funds may be frozen pending instructions from competent authorities.",
    ],
  },
  {
    id: "ongoing-monitoring",
    title: "Ongoing Monitoring",
    paragraphs: [
      "KYC is not a one-time process. Client profiles are maintained and updated throughout the business relationship through periodic reviews, trigger-based reviews, and continuous transaction monitoring.",
      "Transaction monitoring systems analyze deposit, withdrawal, and trading activity for patterns consistent with money laundering or other financial crime — including rapid deposit-withdrawal cycles, unusual geographic flows, transactions inconsistent with a client's stated profile, and structured transactions designed to avoid reporting thresholds.",
      "Where activity is flagged as suspicious, it is escalated to our compliance team for review. Outcomes may include requesting additional documentation from the client, filing a suspicious activity report with the relevant authority, and/or restricting or terminating the account.",
    ],
  },
  {
    id: "source-of-funds",
    title: "Source of Funds Verification",
    paragraphs: [
      "For all deposits, clients must ensure that funds originate from legitimate sources. ZYRO INC may request supporting documentation at any time — including salary certificates, business records, sale proceeds, inheritance documentation, or other evidence appropriate to the stated source.",
      "For larger deposits and for clients classified as higher-risk, we will routinely require such documentation as part of enhanced due diligence. Failure to provide satisfactory documentation may result in the refusal or reversal of transactions.",
    ],
  },
  {
    id: "reporting",
    title: "Reporting Obligations",
    paragraphs: [
      "ZYRO INC complies with all applicable suspicious activity reporting, currency transaction reporting, and sanctions reporting obligations in the jurisdictions in which we operate. Suspicious activity reports are filed with the relevant Financial Intelligence Unit (FIU) or equivalent authority.",
      "Clients and third parties are not informed when a report has been filed, in line with legal 'tipping-off' prohibitions. Client cooperation with information requests and due-diligence processes is essential and is a condition of continued service.",
    ],
  },
  {
    id: "record-keeping",
    title: "Record Keeping",
    paragraphs: [
      "ZYRO INC maintains comprehensive records of all client identification documentation, transaction history, correspondence, and compliance decisions for a minimum of five (5) years following the end of the business relationship, or longer where required by applicable law.",
      "Records are stored securely with access restricted to authorized personnel and are made available to regulators and law enforcement agencies upon legitimate request.",
    ],
  },
  {
    id: "withdrawal-policy",
    title: "Withdrawal Policy and Same-Source Rule",
    paragraphs: [
      "To prevent money laundering, ZYRO INC applies a 'same-source' rule — withdrawals are processed to the original funding source used for deposits. Profits exceeding the deposited amount may be withdrawn to alternative verified methods according to your funding history.",
      "Requests to withdraw to a third-party account (one not in the client's verified name) will be refused except in exceptional circumstances with documented justification, subject to senior compliance review.",
    ],
  },
  {
    id: "restricted-jurisdictions",
    title: "Restricted Jurisdictions",
    paragraphs: [
      "ZYRO INC does not accept clients from jurisdictions subject to comprehensive international sanctions or from jurisdictions where our services are otherwise restricted by law or internal policy. The list of restricted jurisdictions is maintained internally and is updated in response to changes in the sanctions and regulatory landscape.",
      "Clients who relocate to a restricted jurisdiction after account opening must notify us immediately. Account access may be restricted, and orderly closure of the relationship may be required.",
    ],
  },
  {
    id: "client-cooperation",
    title: "Client Cooperation",
    paragraphs: [
      "The effectiveness of our AML/KYC framework depends on the full and timely cooperation of our clients. Clients are required to respond to information requests promptly, provide accurate and up-to-date documentation, and notify us of any material changes to their personal or financial circumstances.",
      "Failure to cooperate may result in restrictions on the account, refusal of transactions, and — where necessary — termination of the client relationship. ZYRO INC reserves the right to take any of these actions in line with applicable law and regulatory guidance.",
    ],
  },
];

export default function AmlKycPage() {
  return (
    <LegalDocument
      title="AML / KYC Policy"
      lastUpdated="January 2026"
      introduction="This document summarizes ZYRO INC's Anti-Money Laundering and Know Your Customer framework. It describes how we identify our clients, monitor activity, report suspicious conduct, and meet our obligations under international AML standards."
      sections={SECTIONS}
      currentSlug="/aml-kyc"
    />
  );
}