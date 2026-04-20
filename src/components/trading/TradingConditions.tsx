"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Layers, AlertCircle } from "lucide-react";

const CONDITIONS = [
  {
    icon: Zap,
    value: "50ms",
    label: "Avg. Execution",
    description: "Ultra-low-latency order routing with a 99.5% fill rate across all sessions.",
  },
  {
    icon: Layers,
    value: "1:500",
    label: "Max Leverage",
    description: "Flexible leverage tiers adjusted to instrument class and regulatory jurisdiction.",
  },
  {
    icon: Shield,
    value: "0.01",
    label: "Min Lot Size",
    description: "Micro-lot access allows precise risk management from $10 position sizing.",
  },
  {
    icon: AlertCircle,
    value: "50%",
    label: "Margin Call Level",
    description: "Early margin call thresholds protect accounts from forced liquidation.",
  },
];

export default function TradingConditions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {CONDITIONS.map(({ icon: Icon, value, label, description }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="rounded-2xl border border-gold-500/25 bg-ink-900/50 p-6 hover:border-gold-500/55 transition-colors"
        >
          <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-gold-400" />
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
          <div className="text-xs text-gold-400 uppercase tracking-wider mt-1 font-semibold">
            {label}
          </div>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}