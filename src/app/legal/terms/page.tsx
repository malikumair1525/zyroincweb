import LegalDocument, { type LegalSection } from "@/components/legal/LegalDocument";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The Terms and Conditions governing your use of ZYRO INC services, client account terms, and platform usage.",
  alternates: { canonical: "/legal/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing the ZYRO INC website, registering for a client account, or using any product or service we provide (collectively, the 'Services'), you agree to be bound by these Terms and Conditions (the 'Agreement').",
      "If you do not agree to any part of this Agreement, you must not use our Services. Continued use of any Service constitutes ongoing acceptance of this Agreement and any amendments made to it from time to time.",
      "You represent that you are at least 18 years of age, legally capable of entering into binding contracts in your jurisdiction of residence, and not prohibited from using our Services under any applicable law.",
    ],
  },
  {
    id: "services",
    title: "Services Provided",
    paragraphs: [
      "ZYRO INC provides online brokerage services that allow eligible clients to trade contracts for difference (CFDs) on currencies, metals, commodities, indices, cryptocurrencies, and share instruments. All trading is facilitated through the proprietary TM9 trading platform.",
      "Our Services are execution-only. ZYRO INC does not provide investment advice, recommendations, or tax, legal, or regulatory advice. Any information made available through our website or platform is for informational purposes and should not be construed as personalized guidance.",
    ],
    list: [
      "Access to the TM9 trading platform on web, desktop, and mobile devices.",
      "Execution of orders on supported instruments, subject to market conditions.",
      "Client portal access for account management, funding, and reporting.",
      "Customer support through official channels during business hours.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility and Account Opening",
    paragraphs: [
      "Opening a ZYRO INC account is subject to eligibility checks, including identity verification, address verification, and sanctions screening. We reserve the right to decline any application at our sole discretion without providing reasons.",
      "Clients residing in jurisdictions where our Services are restricted by law, regulation, or internal policy will not be permitted to open accounts. The list of restricted jurisdictions is maintained internally and may be updated without notice.",
      "You must provide accurate, complete, and current information throughout the account opening process, and promptly notify us of any changes to your personal circumstances, residency, or financial situation.",
    ],
  },
  {
    id: "client-obligations",
    title: "Client Obligations",
    paragraphs: [
      "As a ZYRO INC client, you agree to comply with all terms set out in this Agreement and to conduct your trading activity in accordance with applicable laws and market regulations.",
    ],
    list: [
      "Maintain the confidentiality of your login credentials and notify us immediately of any unauthorized access.",
      "Ensure that the trading capital you deposit is legally obtained and does not constitute the proceeds of crime or unlawful activity.",
      "Comply with anti-money-laundering (AML) requirements, including providing any documentation requested during onboarding or ongoing review.",
      "Use the TM9 platform solely for lawful purposes and not for any activity that would breach market integrity rules or exchange regulations.",
      "Refrain from exploiting system errors, latency arbitrage, price feed inaccuracies, or any form of abusive trading practice.",
    ],
  },
  {
    id: "orders-execution",
    title: "Orders and Execution",
    paragraphs: [
      "Orders placed through the TM9 platform are routed to our liquidity providers on a best-execution basis. Execution prices reflect prevailing market conditions, including bid-ask spreads, volatility, and available liquidity at the moment of execution.",
      "We do not guarantee the execution of any order at a specified price, and slippage may occur during periods of high volatility, low liquidity, or around scheduled economic releases. Stop-loss and take-profit orders are not guaranteed unless explicitly designated as 'guaranteed' orders.",
      "ZYRO INC reserves the right to cancel, reverse, or adjust any trade resulting from a manifest pricing error, system malfunction, abusive activity, or a violation of this Agreement.",
    ],
  },
  {
    id: "leverage-margin",
    title: "Leverage, Margin, and Liquidation",
    paragraphs: [
      "Trading with leverage involves significant risk and can result in losses that exceed your initial deposit. You are solely responsible for monitoring your account equity, margin usage, and open positions at all times.",
      "If your account equity falls below the required margin level, we will issue a margin call via the TM9 platform. If equity continues to decline and reaches the stop-out level, open positions may be automatically closed without further notice to protect against further losses.",
      "Maximum leverage limits are set by ZYRO INC based on instrument class, account tier, and regulatory requirements in your jurisdiction. Leverage limits may be adjusted at our discretion during periods of heightened market risk.",
    ],
  },
  {
    id: "fees-charges",
    title: "Fees, Commissions, and Charges",
    paragraphs: [
      "ZYRO INC applies spreads, commissions, and swap (overnight financing) charges as disclosed on the Account Types page and within the TM9 platform. All fees are visible before order confirmation and are deducted automatically from your trading account.",
      "ZYRO INC does not charge deposit or withdrawal fees for transactions initiated from our side. However, third-party fees — including bank intermediary charges and blockchain network fees — may apply and are the client's responsibility.",
      "We reserve the right to adjust our fee schedule at any time. Material changes will be communicated via the client portal or registered email address at least 14 days before taking effect.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, ZYRO INC shall not be liable for any indirect, consequential, incidental, or special damages arising out of or related to the use of our Services — including, without limitation, loss of profits, loss of data, or business interruption.",
      "ZYRO INC does not warrant uninterrupted, error-free access to the TM9 platform. Scheduled maintenance, third-party outages, and force majeure events may affect service availability. We will make reasonable efforts to restore service promptly when interruptions occur.",
    ],
  },
  {
    id: "termination",
    title: "Suspension and Termination",
    paragraphs: [
      "ZYRO INC may suspend or terminate a client account at any time — with or without notice — in the event of suspected fraud, abusive trading, regulatory concerns, material breach of this Agreement, or the death or incapacity of the account holder.",
      "Upon termination, any remaining account balance (after deducting amounts owed to ZYRO INC) will be returned to the client via the original funding source, subject to compliance review. Clients may also close their account voluntarily at any time through the client portal.",
    ],
  },
  {
    id: "amendments",
    title: "Amendments to This Agreement",
    paragraphs: [
      "ZYRO INC reserves the right to amend this Agreement at any time. Material changes will be communicated via the client portal or by email at least 14 days before taking effect. Non-material changes, corrections, or clarifications may take effect immediately upon publication.",
      "Continued use of our Services following the publication of amended terms constitutes acceptance of those terms. If you disagree with any amendment, you must cease using the Services and may close your account.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      "This Agreement is governed by and construed in accordance with the laws of the jurisdiction of ZYRO INC's principal place of business, without regard to conflict-of-law principles. Any dispute arising from this Agreement shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.",
      "Nothing in this section limits any rights you may have under mandatory consumer protection laws applicable in your country of residence.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      lastUpdated="January 2026"
      introduction="These Terms and Conditions govern your relationship with ZYRO INC — including access to our website, the TM9 trading platform, and all related services. Please read this document carefully before opening an account or placing any trades."
      sections={SECTIONS}
      currentSlug="/terms"
    />
  );
}