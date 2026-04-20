"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Waves,
  Lock,
  Headphones,
  Monitor,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: Activity,
    title: "Razor-Tight Spreads",
    description:
      "Competitive spreads starting from 0.0 pips on major pairs, powered by deep Tier-1 liquidity relationships that pass institutional-grade pricing directly to you.",
  },
  {
    icon: Shield,
    title: "Ultra-Fast Execution",
    description:
      "Industry-leading order execution with an average speed of 50ms and over 99.5% order fill rate across all market conditions, minimizing slippage on every trade.",
  },
  {
    icon: Waves,
    title: "Deep Market Liquidity",
    description:
      "Aggregated liquidity from multiple top-tier banks and ECN providers ensures tight spreads and reliable order execution — even during high-volatility events.",
  },
  {
    icon: Lock,
    title: "Segregated Client Funds",
    description:
      "Your capital is held in segregated accounts with reputable financial institutions, fully separated from company operating funds for complete asset protection.",
  },
  {
    icon: Headphones,
    title: "24/5 Expert Support",
    description:
      "Our multilingual client support team is available around the clock during market hours to resolve any trading, account, or technical questions you may have.",
  },
  {
    icon: Monitor,
    title: "Advanced TM9 Platform",
    description:
      "Trade on our proprietary TM9 platform featuring institutional charting tools, algorithmic trading support, and a refined interface built for serious traders.",
  },
];

export default function Features() {
  return (
    <Section size="lg">
      <SectionHeading
        eyebrow="Why Traders Choose ZYRO"
        title="Built for traders who demand more"
        description="Every aspect of ZYRO INC has been engineered for serious market participants — from execution speed to capital security, we operate to institutional standards."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group hover-lift shimmer-hover relative rounded-2xl border border-gold-500/25 bg-ink-900/50 p-7 hover:border-gold-500/60 hover:bg-ink-900/80 shadow-[0_0_0_1px_rgba(212,175,55,0.04)] transition-all duration-300"
          >
            {/* subtle gold accent on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 group-hover:border-gold-500/40 transition-colors">
                <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">
                {title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}