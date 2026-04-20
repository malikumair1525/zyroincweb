"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Zap,
  Bot,
  Bell,
  Layers,
  Shield,
  LayoutGrid,
  Clock,
  Fingerprint,
} from "lucide-react";

const FEATURES = [
  {
    icon: LineChart,
    title: "Advanced Charting",
    description:
      "80+ technical indicators, 9 timeframes, multiple chart types — from candlestick to Renko — with customizable drawing tools.",
  },
  {
    icon: Zap,
    title: "One-Click Trading",
    description:
      "Execute orders in under a second with configurable quick-trade panels. Pre-set volume, stop-loss, and take-profit templates.",
  },
  {
    icon: Bot,
    title: "Algorithmic Trading",
    description:
      "Deploy automated strategies, custom scripts, and expert advisors. Backtest on historical data before going live.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Price alerts, news alerts, and pattern recognition notifications — delivered to push, email, or SMS in real time.",
  },
  {
    icon: Layers,
    title: "Market Depth & Level 2",
    description:
      "Institutional-grade market depth data on select instruments — see order book liquidity and aggressive flow.",
  },
  {
    icon: LayoutGrid,
    title: "Customizable Workspaces",
    description:
      "Save multiple workspace layouts with charts, watchlists, and indicators. Switch contexts with a single click.",
  },
  {
    icon: Clock,
    title: "Economic Calendar",
    description:
      "Built-in economic calendar with real-time data releases, impact ratings, and historical forecasts versus actuals.",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description:
      "256-bit SSL encryption, two-factor authentication, and automatic session timeouts keep your account protected.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Login",
    description:
      "Use Face ID or fingerprint authentication on mobile devices for fast, secure access without compromising security.",
  },
];

export default function PlatformFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {FEATURES.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group hover-lift shimmer-hover rounded-2xl border border-gold-500/25 bg-ink-900/50 p-6 hover:border-gold-500/55"
        >
          <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
            <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-ink-300 leading-relaxed">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}