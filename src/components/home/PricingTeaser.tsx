"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AccountCards from "@/components/accounts/AccountCards";
import Button from "@/components/ui/Button";

export default function PricingTeaser() {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeading
        eyebrow="Account Tiers"
        title="Transparent pricing for every trader."
        description="No hidden fees. No conflicts of interest. Choose the tier that matches your trading volume and strategy — upgrade at any time."
      />

      {/* Tier teaser badge row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-300"
      >
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
          Starting at <span className="text-gold-400 font-semibold">$100 minimum</span>
        </div>
        <span className="text-ink-600">•</span>
        <span>Spreads from <span className="text-gold-400 font-semibold">0.0 pips</span></span>
        <span className="text-ink-600">•</span>
        <span>Leverage up to <span className="text-gold-400 font-semibold">1:500</span></span>
      </motion.div>

      {/* Pricing cards */}
      <div className="mt-14">
        <AccountCards />
      </div>

      {/* Full comparison link */}
      <div className="mt-12 flex justify-center">
        <Button href="/account-types" variant="outline" size="md">
          View Full Feature Comparison
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}