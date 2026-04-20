"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Coins,
  Clock,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Method = {
  key: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  processingTime: string;
  minAmount: string;
  maxAmount: string;
  fee: string;
  providers: string[];
  description: string;
};

type Props = {
  mode: "deposit" | "withdrawal";
};

const DEPOSIT_METHODS: Method[] = [
  {
    key: "bank",
    icon: Landmark,
    label: "Bank Transfer",
    tagline: "Secure deposits via SWIFT, SEPA, and local banking networks.",
    processingTime: "1–3 business days",
    minAmount: "$500",
    maxAmount: "Unlimited",
    fee: "Zero from ZYRO INC",
    providers: ["SWIFT", "SEPA", "Local bank transfer"],
    description:
      "Bank transfers are ideal for larger deposits and institutional-grade funding. ZYRO INC does not charge any wire fees — however, your originating bank or intermediary bank may apply charges outside of our control. Use the unique reference number issued in your client portal to ensure fast crediting.",
  },
  {
    key: "usdt-trc20",
    icon: Coins,
    label: "USDT — TRC20",
    tagline: "Fast, low-fee stablecoin deposits on the Tron network.",
    processingTime: "Minutes (after network confirmations)",
    minAmount: "$50",
    maxAmount: "Unlimited",
    fee: "Network fee only",
    providers: ["Tron (TRC-20)", "USDT (Tether)"],
    description:
      "USDT deposits on the TRC-20 network are the fastest and most cost-efficient crypto funding option. Transfers are usually credited within minutes after the required blockchain confirmations. Always verify that you select the TRC-20 network in your sending wallet — funds sent on the wrong network cannot be recovered.",
  },
  {
    key: "usdt-erc20",
    icon: Coins,
    label: "USDT — ERC20",
    tagline: "Stablecoin deposits via the Ethereum network.",
    processingTime: "After network confirmations",
    minAmount: "$100",
    maxAmount: "Unlimited",
    fee: "Network (gas) fee only",
    providers: ["Ethereum (ERC-20)", "USDT (Tether)"],
    description:
      "USDT deposits on the ERC-20 network offer broad wallet compatibility across the Ethereum ecosystem. Gas fees apply and vary based on network congestion. Always double-check the network selection in your sending wallet — ERC-20 addresses are not compatible with TRC-20 addresses.",
  },
];

const WITHDRAWAL_METHODS: Method[] = [
  {
    key: "bank",
    icon: Landmark,
    label: "Bank Transfer",
    tagline: "Secure withdrawals to your registered bank account.",
    processingTime: "2–5 business days",
    minAmount: "$100",
    maxAmount: "Unlimited",
    fee: "Zero from ZYRO INC",
    providers: ["SWIFT", "SEPA", "Local bank transfer"],
    description:
      "Withdrawals are sent to the bank account registered in your client profile. The receiving bank's processing time may affect final delivery. All withdrawal requests undergo standard AML compliance checks before release. Intermediary banks may deduct fees independently of ZYRO INC.",
  },
  {
    key: "usdt-trc20",
    icon: Coins,
    label: "USDT — TRC20",
    tagline: "Rapid stablecoin withdrawals on the Tron network.",
    processingTime: "Same business day",
    minAmount: "$50",
    maxAmount: "Unlimited",
    fee: "Network fee only",
    providers: ["Tron (TRC-20)", "USDT (Tether)"],
    description:
      "TRC-20 withdrawals are typically dispatched within business hours and arrive in minutes after blockchain confirmation. Withdrawals are sent only to the wallet address verified in your client portal. Please ensure your receiving wallet supports the TRC-20 network.",
  },
  {
    key: "usdt-erc20",
    icon: Coins,
    label: "USDT — ERC20",
    tagline: "Ethereum-network stablecoin withdrawals.",
    processingTime: "Same business day",
    minAmount: "$100",
    maxAmount: "Unlimited",
    fee: "Network (gas) fee only",
    providers: ["Ethereum (ERC-20)", "USDT (Tether)"],
    description:
      "ERC-20 withdrawals are dispatched within business hours. Delivery time on the Ethereum network depends on gas pricing and network conditions. Always confirm that your receiving wallet supports the ERC-20 network before submitting a withdrawal request.",
  },
];

export default function PaymentMethods({ mode }: Props) {
  const methods = mode === "deposit" ? DEPOSIT_METHODS : WITHDRAWAL_METHODS;
  const [active, setActive] = useState(methods[0].key);
  const activeMethod = methods.find((m) => m.key === active) ?? methods[0];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {methods.map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all border",
              active === key
                ? "bg-gold-500/15 border-gold-500/60 text-gold-300"
                : "bg-ink-900/50 border-gold-500/10 text-ink-300 hover:border-gold-500/30 hover:text-white"
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-gold-500/20 bg-ink-900/50 p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Method details */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
                  <activeMethod.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeMethod.label}
                </h3>
              </div>
              <p className="text-base text-gold-400 mb-4 font-medium">
                {activeMethod.tagline}
              </p>
              <p className="text-sm text-ink-300 leading-relaxed mb-5">
                {activeMethod.description}
              </p>

              {/* Providers */}
              <div className="flex flex-wrap gap-2">
                {activeMethod.providers.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-md bg-ink-950/60 border border-gold-500/15 text-xs text-ink-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Specs */}
            <div className="space-y-3">
              <div className="bg-ink-950/60 rounded-lg p-4 border border-gold-500/10">
                <div className="flex items-center gap-2 text-[10px] text-ink-400 uppercase tracking-wider mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Processing Time
                </div>
                <div className="text-sm font-semibold text-gold-400">
                  {activeMethod.processingTime}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-ink-950/60 rounded-lg p-4 border border-gold-500/10">
                  <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1.5">
                    Min
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activeMethod.minAmount}
                  </div>
                </div>
                <div className="bg-ink-950/60 rounded-lg p-4 border border-gold-500/10">
                  <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1.5">
                    Max
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activeMethod.maxAmount}
                  </div>
                </div>
              </div>

              <div className="bg-ink-950/60 rounded-lg p-4 border border-gold-500/10">
                <div className="flex items-center gap-2 text-[10px] text-ink-400 uppercase tracking-wider mb-1.5">
                  <Banknote className="w-3.5 h-3.5" />
                  Fee
                </div>
                <div className="text-sm font-semibold text-gold-400">
                  {activeMethod.fee}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Compliance footer */}
      <div className="mt-5 flex items-start gap-2.5 p-4 rounded-xl border border-gold-500/15 bg-ink-900/40">
        <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-ink-300 leading-relaxed">
          All {mode === "deposit" ? "deposits" : "withdrawals"} are processed in accordance with
          our AML/KYC compliance framework. Transaction review times may apply on first-time or
          unusually large transactions. Processing times are indicative and may vary during
          peak network or banking hours.
        </p>
      </div>
    </div>
  );
}