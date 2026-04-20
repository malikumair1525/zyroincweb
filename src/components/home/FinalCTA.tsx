"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export default function FinalCTA() {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/10 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-3xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-medium tracking-wide mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          Account opening takes less than 5 minutes
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          Ready to trade with a{" "}
          <span className="text-gold-gradient">broker built for you?</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed">
          Open a live account with ZYRO INC and gain access to 500+ global instruments,
          ultra-competitive spreads, and the advanced TM9 platform — all in one place.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={SITE_CONFIG.crm.register}
            external
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
          >
            Open Live Account
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
                href="/account-types"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                >
                Explore Account Types
            </Button>
        </div>

        {/* Micro-trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-400">
          <span>✓ No deposit fees</span>
          <span>✓ Fast withdrawals</span>
          <span>✓ 24/5 support</span>
          <span>✓ Segregated funds</span>
        </div>
      </motion.div>
    </Section>
  );
}