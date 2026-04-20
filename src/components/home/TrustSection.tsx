"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Scale,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Segregated Funds",
    description:
      "Client capital is held in segregated accounts with tier-1 banking partners, fully separated from operational funds to ensure asset integrity at all times.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description:
      "All connections are protected with 256-bit SSL/TLS encryption. Platform access is secured through multi-factor authentication and advanced fraud monitoring.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Execution",
    description:
      "No dealing-desk intervention. Every order is routed to deep liquidity providers with full execution statistics and transaction records available on request.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "ZYRO INC operates in adherence to strict AML/KYC, data protection, and financial conduct standards applied across all jurisdictions we serve.",
  },
];

export default function TrustSection() {
  return (
    <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
      <SectionHeading
        eyebrow="Security & Integrity"
        title="Your capital protected. Your trust earned."
        description="We've built our infrastructure around a single principle — that a broker's first responsibility is the safekeeping and fair handling of client capital."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PILLARS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="hover-lift relative rounded-xl border border-gold-500/20 bg-ink-950/40 p-6 hover:border-gold-500/50"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 border border-gold-500/25 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-ink-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}