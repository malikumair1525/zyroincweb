"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, DollarSign } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive Payouts",
    text: "Industry-leading commission structures and hybrid CPA/revenue share models.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Tracking",
    text: "Full visibility into clicks, registrations, deposits, and live earnings.",
  },
  {
    icon: Users,
    title: "Dedicated Manager",
    text: "A senior partner manager assigned to every qualified affiliate.",
  },
];

export default function AffiliateBanner() {
  return (
    <Section size="lg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden border border-gold-500/30 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900"
      >
        {/* Ambient gold glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-700/10 rounded-full blur-3xl" />

        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 items-center">
          {/* Left text */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
              Partner Program
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Turn your audience into{" "}
              <span className="text-gold-gradient">recurring revenue.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed max-w-xl">
              Join the ZYRO INC Partner Program and earn on every referred client —
              whether you're an IB, content creator, or financial educator. Transparent
              reporting, timely payouts, and a brand worth representing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/affiliates" variant="gold" size="lg">
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/affiliates" variant="outline" size="lg">
                View Commission Structure
              </Button>
            </div>
          </div>

          {/* Right benefits */}
          <div className="space-y-4">
            {BENEFITS.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-gold-500/15 bg-ink-950/50 backdrop-blur-sm hover:border-gold-500/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}