"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const SESSIONS = [
  { name: "Sydney", hours: "22:00 – 07:00", gmt: "GMT", overlap: "Oceania open" },
  { name: "Tokyo", hours: "00:00 – 09:00", gmt: "GMT", overlap: "Asian session" },
  { name: "London", hours: "08:00 – 17:00", gmt: "GMT", overlap: "Highest liquidity" },
  { name: "New York", hours: "13:00 – 22:00", gmt: "GMT", overlap: "USD-pair peak" },
];

export default function MarketSessions() {
  return (
    <div className="rounded-2xl border border-gold-500/20 bg-ink-900/50 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
          <Clock className="w-5 h-5 text-gold-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Global Market Sessions</h3>
          <p className="text-xs text-ink-400">All times shown in GMT — forex markets run 24/5</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {SESSIONS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg bg-ink-950/50 border border-gold-500/10 p-4"
          >
            <div className="text-sm font-semibold text-gold-400">{s.name}</div>
            <div className="mt-2 font-mono text-xs text-white">{s.hours}</div>
            <div className="text-[10px] text-ink-400 mt-2">{s.overlap}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-gold-500/10 text-xs text-ink-400 leading-relaxed">
        Forex markets operate continuously from Sunday 22:00 GMT until Friday 22:00 GMT.
        Peak liquidity occurs during the London–New York overlap (13:00–17:00 GMT), when spreads
        typically reach their tightest levels.
      </div>
    </div>
  );
}