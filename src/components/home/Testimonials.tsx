"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Marcus Brennan",
    role: "Institutional Trader",
    location: "London, UK",
    quote:
      "The execution speed and liquidity on ZYRO INC are genuinely institutional-grade. I've tested a dozen brokers over the last decade — the TM9 platform's order routing is in the top tier.",
    initials: "MB",
  },
  {
    name: "Aisha Nakamura",
    role: "Proprietary Trader",
    location: "Singapore",
    quote:
      "Tight spreads during news events are rare — ZYRO INC consistently delivers. The transparency on fills and the stability during volatile sessions is why I moved my primary account here.",
    initials: "AN",
  },
  {
    name: "Carlos Rivera",
    role: "Swing Trader & Analyst",
    location: "Madrid, Spain",
    quote:
      "What separates ZYRO is the attention to professional detail — clean pricing, fast withdrawals, and a support team that actually understands the market. It feels built by traders, for traders.",
    initials: "CR",
  },
];

export default function Testimonials() {
  return (
    <Section size="lg">
      <SectionHeading
        eyebrow="Trader Voices"
        title="Trusted by professionals worldwide"
        description="From institutional desks to independent traders, ZYRO INC is the platform of choice for those who treat trading as a profession."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl border border-gold-500/20 bg-ink-900/50 p-7 hover:border-gold-500/45 transition-colors"
          >
            {/* Quote mark */}
            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/15" />

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-5">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-gold-400 fill-gold-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm sm:text-base text-ink-200 leading-relaxed mb-7">
              “{t.quote}”
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-gold-500/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-xs font-bold text-ink-950">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-ink-400">
                  {t.role} · {t.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}