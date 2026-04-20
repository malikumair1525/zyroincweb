"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";

const ACCOUNTS = [
  {
    key: "standard",
    name: "Standard",
    tagline: "Ideal for active retail traders entering the global markets.",
    minDeposit: "$100",
    spreadFrom: "1.0 pips",
    commission: "$0",
    leverage: "Up to 1:200",
    featured: false,
    features: [
      "All 500+ instruments",
      "No commission on forex",
      "Market execution",
      "Micro-lot trading (0.01)",
      "Email & live chat support",
      "Full TM9 platform access",
      "Weekly market analysis",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "Built for consistent, high-volume traders who demand tighter pricing.",
    minDeposit: "$2,500",
    spreadFrom: "0.3 pips",
    commission: "$6 / lot",
    leverage: "Up to 1:400",
    featured: true,
    features: [
      "All Standard features",
      "Raw spread pricing",
      "Priority order execution",
      "Advanced charting suite",
      "Dedicated support channel",
      "Weekly strategy reports",
      "VPS hosting eligibility",
      "Custom position sizing",
    ],
  },
  {
    key: "ecn",
    name: "ECN",
    tagline: "Institutional conditions for professional and high-volume traders.",
    minDeposit: "$25,000",
    spreadFrom: "0.0 pips",
    commission: "$3 / lot",
    leverage: "Up to 1:500",
    featured: false,
    features: [
      "All Pro features",
      "Institutional spreads",
      "Reduced commissions",
      "Dedicated account manager",
      "Priority withdrawal handling",
      "Free premium VPS",
      "Exclusive market briefings",
      "Invitation-only events",
    ],
  },
];

export default function AccountCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 items-stretch">
      {ACCOUNTS.map((account, i) => (
        <motion.div
          key={account.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          className={cn(
            "relative rounded-2xl p-7 sm:p-8 flex flex-col",
            account.featured
              ? "bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900 border-2 border-gold-500/60 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.35)] md:scale-[1.03]"
              : "bg-ink-900/50 border border-gold-500/20 hover:border-gold-500/45 transition-colors"
          )}
        >
          {/* Featured badge */}
          {account.featured && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-ink-950 text-xs font-bold tracking-wide shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                MOST POPULAR
              </div>
            </div>
          )}

          {/* Header */}
          <div className="pb-6 border-b border-gold-500/10">
            <h3 className="text-2xl font-bold text-white">{account.name}</h3>
            <p className="mt-2 text-sm text-ink-300 leading-relaxed min-h-[40px]">
              {account.tagline}
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 gap-4 py-6 border-b border-gold-500/10">
            <div>
              <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">
                Min. Deposit
              </div>
              <div className="text-xl font-bold text-white">{account.minDeposit}</div>
            </div>
            <div>
              <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">
                Spread From
              </div>
              <div className="text-xl font-bold text-gold-400">
                {account.spreadFrom}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">
                Commission
              </div>
              <div className="text-sm font-semibold text-white">
                {account.commission}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">
                Leverage
              </div>
              <div className="text-sm font-semibold text-white">
                {account.leverage}
              </div>
            </div>
          </div>

          {/* Features */}
          <ul className="py-6 space-y-3 flex-1">
            {account.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-200">
                <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            href={SITE_CONFIG.crm.register}
            external
            variant={account.featured ? "gold" : "outline"}
            size="md"
            className="w-full justify-center"
          >
            Open {account.name} Account
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
    </div>
  );
}