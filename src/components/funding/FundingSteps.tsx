"use client";

import { motion } from "framer-motion";
import { LogIn, CreditCard, CheckCircle2, LucideIcon, Download, Shield, Send } from "lucide-react";

type Step = { icon: LucideIcon; title: string; description: string };

const DEPOSIT_STEPS: Step[] = [
  {
    icon: LogIn,
    title: "Log In to Client Portal",
    description:
      "Access your ZYRO INC client portal using your email and password, then navigate to the Deposits section.",
  },
  {
    icon: CreditCard,
    title: "Select Your Method",
    description:
      "Choose your preferred funding method, enter the amount, and complete the payment details in the secure interface.",
  },
  {
    icon: CheckCircle2,
    title: "Funds Credited",
    description:
      "Approved transactions are credited to your trading account — instantly for most methods, within business days for wire transfers.",
  },
];

const WITHDRAWAL_STEPS: Step[] = [
  {
    icon: Download,
    title: "Submit Withdrawal Request",
    description:
      "From the Withdrawals tab in your client portal, select a method and enter your desired amount.",
  },
  {
    icon: Shield,
    title: "Compliance Review",
    description:
      "Withdrawals undergo standard AML verification. Most requests are reviewed and approved within business hours.",
  },
  {
    icon: Send,
    title: "Funds Sent",
    description:
      "Once approved, funds are released to your designated method. Delivery time depends on the chosen payment rail.",
  },
];

type Props = { mode: "deposit" | "withdrawal" };

export default function FundingSteps({ mode }: Props) {
  const steps = mode === "deposit" ? DEPOSIT_STEPS : WITHDRAWAL_STEPS;

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
        {steps.map(({ icon: Icon, title, description }, i) => (
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
            <p className="text-sm text-ink-300 leading-relaxed px-2 max-w-xs mx-auto">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}