"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Palette,
  BarChart3,
  MessageSquare,
  FileCode,
  Zap,
} from "lucide-react";

const TOOLS = [
  {
    icon: LayoutDashboard,
    title: "Partner Dashboard",
    description:
      "Monitor clicks, registrations, qualified deposits, and real-time earnings in one intuitive interface.",
  },
  {
    icon: Palette,
    title: "Marketing Creatives",
    description:
      "Ready-to-deploy banners, social media assets, video ads, and landing page templates — refreshed monthly.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Cohort analysis, geo breakdowns, and conversion funnels let you optimize every campaign you run.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Manager",
    description:
      "Every qualified partner is assigned a senior partner manager — ready to help with strategy and scaling.",
  },
  {
    icon: FileCode,
    title: "Custom Tracking",
    description:
      "Postback URLs, sub-IDs, and pixel-level tracking compatible with all major affiliate platforms.",
  },
  {
    icon: Zap,
    title: "Rapid Payouts",
    description:
      "Automated monthly payouts via bank transfer or USDT — with optional weekly cycles for high-volume partners.",
  },
];

export default function PartnerTools() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {TOOLS.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="hover-lift rounded-2xl border border-gold-500/20 bg-ink-900/40 p-6 hover:border-gold-500/50"
        >
          <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-gold-400" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-ink-300 leading-relaxed">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}