"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, DollarSign } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PaymentMethods from "@/components/funding/PaymentMethods";
import FundingSteps from "@/components/funding/FundingSteps";
import FundingSecurity from "@/components/funding/FundingSecurity";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { SITE_CONFIG } from "@/constants/site";

const FUNDING_FAQS = [
  {
    question: "Does ZYRO INC charge any deposit or withdrawal fees?",
    answer:
      "ZYRO INC does not charge any fees on deposits or withdrawals. For bank transfers, your originating or receiving bank may apply their own charges — these are outside of our control. For crypto transfers, standard blockchain network fees (TRC-20 or ERC-20 gas) apply.",
  },
  {
    question: "What is the difference between USDT TRC-20 and USDT ERC-20?",
    answer:
      "Both are the same underlying stablecoin (USDT) but run on different blockchain networks. TRC-20 uses the Tron network — faster and with very low fees. ERC-20 uses the Ethereum network — broader wallet support, but gas fees can be higher depending on network congestion. Always select the correct network when sending.",
  },
  {
    question: "What happens if I send USDT on the wrong network?",
    answer:
      "Cross-network transfers cannot be reversed or recovered automatically. Funds sent to a TRC-20 address via the ERC-20 network (or vice versa) are typically lost. Please double-check both the wallet address and the selected network before confirming any crypto transaction.",
  },
  {
    question: "Why must I withdraw to the same method I used to deposit?",
    answer:
      "This is a standard anti-money-laundering requirement applicable to all regulated brokers. Withdrawals are processed to the original funding source — up to the deposited amount on that method. Profits beyond the deposited amount are withdrawn via the next available method according to your funding history.",
  },
  {
    question: "How long does identity verification take?",
    answer:
      "Most verification submissions are reviewed within one business day. Enhanced due diligence cases — such as large deposits, politically exposed persons, or certain jurisdictions — may require additional documentation and extended review time.",
  },
  {
    question: "Can I change my registered bank account or crypto wallet?",
    answer:
      "Yes. To add a new funding method, use it for a deposit — it will then be registered to your profile after compliance review. Existing registered methods remain on file per AML recordkeeping rules and can be used for future withdrawals.",
  },
  {
    question: "Are there limits on crypto deposit or withdrawal amounts?",
    answer:
      "There are no fixed upper limits on crypto transactions. However, very large deposits or withdrawals may require additional source-of-funds documentation in line with AML regulations — this may extend the standard processing time.",
  },
];

export default function FundingPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Deposits & Withdrawals"
        title={
          <>
            Fast, secure, and{" "}
            <span className="text-gold-gradient">fee-free funding.</span>
          </>
        }
        description="Move capital in and out of your ZYRO INC account with confidence. All major funding methods are supported — with zero fees from our side, rigorous security, and processing times measured in minutes, not days."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
            Open Account to Deposit
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href={SITE_CONFIG.crm.login} external variant="outline" size="lg">
            Client Login
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-ink-300">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gold-400" />
            Instant crypto deposits
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gold-400" />
            Zero deposit/withdrawal fees
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-400" />
            AML/KYC compliant
          </div>
        </div>
      </PageHero>

      {/* DEPOSIT METHODS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Deposit Methods"
          title="Fund your account in seconds."
          description="Three trusted funding methods — chosen for speed, security, and global accessibility. Select the tab that fits your region and preference."
        />
        <div className="mt-14">
          <PaymentMethods mode="deposit" />
        </div>
      </Section>

      {/* HOW TO DEPOSIT */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="How It Works"
          title="Three steps. One clean deposit."
          description="Every deposit method follows the same straightforward flow inside the ZYRO INC client portal — no unnecessary steps, no hidden hurdles."
        />
        <div className="mt-14">
          <FundingSteps mode="deposit" />
        </div>
      </Section>

      {/* WITHDRAWAL METHODS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Withdrawal Methods"
          title="Withdraw when you want. How you want."
          description="Funds follow the flow they came in — same method, same security. Most withdrawals are reviewed and released the same business day."
        />
        <div className="mt-14">
          <PaymentMethods mode="withdrawal" />
        </div>
      </Section>

      {/* HOW WITHDRAWAL WORKS */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="How Withdrawals Work"
          title="Transparent. Compliant. Quick."
          description="We apply the same compliance rigor to every withdrawal — because trust is built on consistency, not convenience."
        />
        <div className="mt-14">
          <FundingSteps mode="withdrawal" />
        </div>
      </Section>

      {/* SECURITY */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Security Framework"
          title="Your capital is protected at every step."
          description="From encryption to segregation to active fraud monitoring — we apply institutional-grade security to every transaction passing through our infrastructure."
        />
        <div className="mt-14">
          <FundingSecurity />
        </div>
      </Section>

      {/* FAQs */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Funding Questions"
          title="Everything you need to know."
          description="Quick answers to the questions clients most frequently ask about funding their ZYRO INC accounts."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQAccordion items={FUNDING_FAQS} />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Ready to fund your{" "}
            <span className="text-gold-gradient">trading account?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Register in under 5 minutes, complete verification, and deposit via your preferred
            method — you'll be trading on TM9 the same day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
              Open Live Account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}