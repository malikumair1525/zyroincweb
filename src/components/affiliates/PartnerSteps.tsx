"use client";

import { motion } from "framer-motion";
import { FileEdit, Search, Rocket, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: FileEdit,
    title: "Apply Online",
    description:
      "Complete the partner application form with your traffic source, audience size, and intended campaign approach.",
  },
  {
    icon: Search,
    title: "Quick Review",
    description:
      "Our partnerships team reviews applications within two business days. Approved partners receive portal credentials via email.",
  },
  {
    icon: Rocket,
    title: "Launch Campaigns",
    description:
      "Access creatives, generate tracking links, and begin driving traffic. Sub-IDs let you split-test performance by channel.",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    description:
      "Commissions accrue in real time. Withdraw via bank or crypto on a monthly cycle — or weekly for high-volume partners.",
  },
];

export default function PartnerSteps() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
        {STEPS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative text-center"
          >
            <div className="relative w-14 h-14 mx-auto mb-5">
              <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-xl" />
              <div className="relative w-14 h-14 rounded-full bg-ink-950 border-2 border-gold-500/50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold-400" strokeWidth={2.25} />
              </div>
            </div>

            <div className="text-xs font-mono font-semibold text-gold-400 tracking-wider mb-2">
              STEP {String(i + 1).padStart(2, "0")}
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-ink-300 leading-relaxed px-2">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}