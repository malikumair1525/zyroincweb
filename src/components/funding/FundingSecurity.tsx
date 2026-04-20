"use client";

import { motion } from "framer-motion";
import { Lock, Layers, UserCheck, AlertTriangle } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Segregated Accounts",
    description:
      "All client funds are held in segregated accounts with tier-1 banking institutions, legally separated from ZYRO INC's operational funds.",
  },
  {
    icon: Lock,
    title: "3-D Secure & PCI-DSS",
    description:
      "Card transactions require 3-D Secure authentication. Our payment stack is PCI-DSS Level 1 compliant — the highest standard for card processors.",
  },
  {
    icon: UserCheck,
    title: "Strict KYC Verification",
    description:
      "Every account is verified against identity, residence, and source-of-funds documentation — meeting global AML standards.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Monitoring",
    description:
      "Continuous transaction monitoring and behavioral analysis detect and block unauthorized or suspicious activity in real time.",
  },
];

export default function FundingSecurity() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PILLARS.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="rounded-2xl border border-gold-500/25 bg-ink-900/50 p-6 hover:border-gold-500/55 transition-colors"
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