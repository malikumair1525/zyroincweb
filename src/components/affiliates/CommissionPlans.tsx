"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, TrendingUp, DollarSign, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";

const PLANS = [
  {
    key: "cpa",
    icon: DollarSign,
    name: "CPA",
    subtitle: "Cost Per Acquisition",
    tagline: "Up-front payments for every qualified client you refer.",
    headline: "Up to $1,200",
    headlineSub: "per qualified referral",
    featured: false,
    features: [
      "Flat per-client commission",
      "Payment on qualified deposit",
      "No ongoing cap",
      "Fast monthly payouts",
      "Ideal for high-volume traffic",
      "Geo-based CPA tiers",
    ],
  },
  {
    key: "revshare",
    icon: TrendingUp,
    name: "Revshare",
    subtitle: "Revenue Share",
    tagline: "Earn a percentage of trading revenue for the lifetime of the client.",
    headline: "Up to 40%",
    headlineSub: "lifetime revenue share",
    featured: true,
    features: [
      "Ongoing passive income",
      "Paid on every trade",
      "No expiry — lifetime earnings",
      "Transparent reporting",
      "Scale with client activity",
      "Monthly automated payouts",
    ],
  },
  {
    key: "hybrid",
    icon: Layers,
    name: "Hybrid",
    subtitle: "CPA + Revshare",
    tagline: "Combine up-front CPA with ongoing revenue share for the best of both.",
    headline: "Custom",
    headlineSub: "tailored to your volume",
    featured: false,
    features: [
      "CPA plus revshare combo",
      "Negotiable tier structure",
      "For established IBs & networks",
      "Dedicated partner manager",
      "Priority payout processing",
      "Exclusive campaign access",
    ],
  },
];

export default function CommissionPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 items-stretch">
      {PLANS.map((plan, i) => (
        <motion.div
          key={plan.key}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          className={cn(
            "relative rounded-2xl p-7 sm:p-8 flex flex-col",
            plan.featured
              ? "bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900 border-2 border-gold-500/60 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.35)] md:scale-[1.03]"
              : "bg-ink-900/50 border border-gold-500/20 hover:border-gold-500/45 transition-colors"
          )}
        >
          {plan.featured && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-ink-950 text-xs font-bold tracking-wide shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                MOST POPULAR
              </div>
            </div>
          )}

          {/* Header */}
          <div className="pb-6 border-b border-gold-500/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
                <plan.icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-gold-400 font-medium">{plan.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-ink-300 leading-relaxed">{plan.tagline}</p>
          </div>

          {/* Headline amount */}
          <div className="py-6 border-b border-gold-500/10">
            <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">
              Earnings Potential
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gold-gradient tracking-tight">
              {plan.headline}
            </div>
            <div className="text-xs text-ink-400 mt-1">{plan.headlineSub}</div>
          </div>

          {/* Features */}
          <ul className="py-6 space-y-3 flex-1">
            {plan.features.map((f) => (
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
            variant={plan.featured ? "gold" : "outline"}
            size="md"
            className="w-full justify-center"
          >
            Apply for {plan.name}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
    </div>
  );
}