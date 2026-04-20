"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AccountCards from "@/components/accounts/AccountCards";
import ComparisonTable from "@/components/accounts/ComparisonTable";
import OpeningSteps from "@/components/accounts/OpeningSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { SITE_CONFIG } from "@/constants/site";

const ACCOUNT_FAQS = [
  {
    question: "Can I upgrade my account tier at any time?",
    answer:
      "Yes. Existing clients can request an account tier upgrade directly from the client portal at any time, provided the minimum deposit requirement for the target tier is met. Our team typically processes upgrade requests within one business day.",
  },
  {
    question: "Are there any inactivity or maintenance fees?",
    answer:
      "ZYRO INC does not charge routine maintenance fees on any account tier. A modest inactivity fee may apply after 12 consecutive months without trading activity — full details are available in our fee schedule.",
  },
  {
    question: "What currencies can I hold my account in?",
    answer:
      "Trading accounts can be denominated in USD, EUR, GBP, AUD, or JPY. The base currency is selected at account opening and cannot be changed once trading has begun. Cross-currency deposits are automatically converted at the prevailing interbank rate.",
  },
  {
    question: "Is negative balance protection available?",
    answer:
      "Yes. All ZYRO INC retail client accounts include negative balance protection, ensuring that under no market condition will your account balance fall below zero. Residual debits from extreme slippage events are absorbed by ZYRO INC.",
  },
  {
    question: "How long does account verification typically take?",
    answer:
      "Once required documents (valid government-issued ID and proof of address dated within 90 days) are submitted, most applications are reviewed and approved within one business day. Enhanced due diligence cases may require additional review time.",
  },
];

export default function AccountTypesPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Account Types"
        title={
          <>
            Choose the account that fits your{" "}
            <span className="text-gold-gradient">trading style.</span>
          </>
        }
        description="Three tiers, one professional broker. Whether you're entering the markets or running high-frequency strategies, ZYRO INC offers the pricing, execution, and support tailored to your activity level."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
            Open Live Account
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="#comparison" variant="outline" size="lg">
            Compare All Features
          </Button>
        </div>
      </PageHero>

      {/* PRICING CARDS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Tier Overview"
          title="Transparent pricing. Professional conditions."
          description="No hidden markups, no conflicts of interest. Every tier passes the same institutional liquidity — the difference is in spread tightness, execution priority, and service level."
        />
        <div className="mt-16">
          <AccountCards />
        </div>
      </Section>

      {/* COMPARISON TABLE */}
      <Section size="lg" id="comparison" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Detailed Comparison"
          title="Every feature, side by side."
          description="A complete breakdown of trading conditions, instrument access, and service levels across all three account tiers."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <ComparisonTable />
        </motion.div>
      </Section>

      {/* HOW TO OPEN */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Opening Process"
          title="From sign-up to first trade — in minutes."
          description="A streamlined, compliant onboarding process designed to get you into the market quickly while maintaining rigorous security standards."
        />
        <div className="mt-16">
          <OpeningSteps />
        </div>
      </Section>

      {/* FAQs */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Common Questions"
          title="Account FAQs"
          description="Quick answers to the questions traders most frequently ask about ZYRO INC accounts."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQAccordion items={ACCOUNT_FAQS} />
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
            Still deciding?{" "}
            <span className="text-gold-gradient">Start with Standard.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            You can upgrade to Pro or VIP at any time from within your client portal.
            Every ZYRO INC account — regardless of tier — operates on the same
            institutional infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
              Open Account Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Speak with Our Team
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}