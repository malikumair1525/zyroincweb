"use client";

import { motion } from "framer-motion";
import { UserPlus, FileCheck, Wallet, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    number: "01",
    title: "Register Online",
    description:
      "Complete a brief application form with your basic details. The process takes under 5 minutes.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Verify Identity",
    description:
      "Upload a valid ID and proof of address. Most applications are reviewed within one business day.",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Fund Your Account",
    description:
      "Deposit via bank transfer, card, or e-wallet. No fees are charged on incoming deposits.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Start Trading",
    description:
      "Launch the TM9 platform on web, desktop, or mobile — and begin executing trades immediately.",
  },
];

export default function OpeningSteps() {
  return (
    <div className="relative">
      {/* connector line (desktop) */}
      <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
        {STEPS.map(({ icon: Icon, number, title, description }, i) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative text-center"
          >
            {/* Step circle */}
            <div className="relative w-14 h-14 mx-auto mb-5">
              <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-xl" />
              <div className="relative w-14 h-14 rounded-full bg-ink-950 border-2 border-gold-500/50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold-400" strokeWidth={2.25} />
              </div>
            </div>

            {/* Step number */}
            <div className="text-xs font-mono font-semibold text-gold-400 tracking-wider mb-2">
              STEP {number}
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-ink-300 leading-relaxed px-2">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}