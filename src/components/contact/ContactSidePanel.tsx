"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Globe2, Headphones } from "lucide-react";

const PROMISES = [
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Every enquiry is triaged within 30 minutes during business hours. Complex cases receive a qualified reply within 2 hours.",
  },
  {
    icon: Headphones,
    title: "Human Support",
    description:
      "Real people — no bots, no scripted deflection. Our team is trained on both the platform and the markets.",
  },
  {
    icon: Globe2,
    title: "Multilingual Team",
    description:
      "Support available in English, Spanish, Arabic, Hindi, and Mandarin — your timezone, your language.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Channels",
    description:
      "All messages are encrypted in transit and handled under strict privacy protocols consistent with our data policy.",
  },
];

export default function ContactSidePanel() {
  return (
    <div className="space-y-4">
      {PROMISES.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="flex items-start gap-4 p-5 rounded-xl border border-gold-500/20 bg-ink-900/50 hover:border-gold-500/45 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-gold-400" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
            <p className="text-xs text-ink-300 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}