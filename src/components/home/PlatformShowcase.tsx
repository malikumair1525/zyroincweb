"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Monitor, Smartphone, Globe, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

const HIGHLIGHTS = [
  "Advanced charting with 80+ technical indicators",
  "One-click trading and customizable order types",
  "Algorithmic trading and strategy automation",
  "Institutional-grade market depth and Level 2 data",
  "Real-time news feed and economic calendar",
  "Custom watchlists, alerts, and workspace profiles",
];

const PLATFORM_LINKS = [
  { icon: Globe, label: "Web Terminal", href: SITE_CONFIG.platform.web, hint: "Launch in browser" },
  { icon: Smartphone, label: "iOS App", href: SITE_CONFIG.platform.ios, hint: "App Store" },
  { icon: Monitor, label: "Android App", href: SITE_CONFIG.platform.android, hint: "Download APK" },
];

export default function PlatformShowcase() {
  return (
    <Section size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
            The TM9 Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Professional tools. <br />
            <span className="text-gold-gradient">Effortless experience.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            TM9 is our proprietary trading platform — engineered from the ground up
            for performance, clarity, and precision. Built to handle everything from
            scalping to multi-strategy portfolio execution.
          </p>

          {/* Platform download links */}
          <div className="mt-7 flex flex-wrap gap-3">
          {PLATFORM_LINKS.map(({ icon: Icon, label, href, hint }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-ink-900/70 border border-gold-500/25 hover:border-gold-500/60 hover:bg-ink-900 transition"
  >
    <Icon className="w-4 h-4 text-gold-400" />
    <div className="flex flex-col items-start">
      <span className="text-sm font-semibold text-white leading-none">
        {label}
      </span>
      <span className="text-[10px] text-ink-400 mt-0.5">
        {hint}
      </span>
    </div>
    <ExternalLink className="w-3 h-3 text-ink-400 group-hover:text-gold-400 transition-colors" />
  </a>
))}
          </div>

          {/* Feature list */}
          <ul className="mt-8 space-y-3">
            {HIGHLIGHTS.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm sm:text-base text-ink-200"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/platforms" variant="gold" size="lg">
              Explore TM9 Platform
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: Platform Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-3xl" />

          <div className="relative rounded-2xl border border-gold-500/25 bg-gradient-to-br from-ink-900 to-ink-950 p-4 shadow-[0_30px_80px_-20px_rgba(212,175,55,0.15)]">
            <div className="flex items-center gap-1.5 px-2 pb-4 border-b border-gold-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-bear-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-bull-500/80" />
              <div className="ml-3 text-xs text-ink-400 font-mono">TM9 Terminal — v5.2</div>
            </div>

            <div className="relative mt-4 h-64 sm:h-80 rounded-lg bg-ink-950 overflow-hidden border border-gold-500/5">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="priceFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </linearGradient>
                  <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                <path d="M0,220 C40,200 80,170 120,175 C160,180 200,140 240,130 C280,120 320,90 360,70 L400,60 L400,300 L0,300 Z" fill="url(#priceFill)" />
                <path d="M0,220 C40,200 80,170 120,175 C160,180 200,140 240,130 C280,120 320,90 360,70 L400,60" fill="none" stroke="#d4af37" strokeWidth="2" />
                <circle cx="400" cy="60" r="4" fill="#d4af37">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
                </circle>
              </svg>

              <div className="absolute top-3 left-3 bg-ink-900/80 backdrop-blur-sm border border-gold-500/20 rounded-md px-3 py-1.5">
                <div className="text-[10px] text-ink-400">EUR / USD</div>
                <div className="text-sm font-mono font-semibold text-bull-400">1.08452 ▲</div>
              </div>

              <div className="absolute bottom-3 right-3 flex gap-1 text-[10px] text-ink-400">
                {["1H", "4H", "1D", "1W"].map((t) => (
                  <span key={t} className={`px-2 py-0.5 rounded ${t === "4H" ? "bg-gold-500/20 text-gold-400 border border-gold-500/30" : "bg-ink-800"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-bull-500/10 border border-bull-500/25 rounded-md py-2 text-center text-xs font-semibold text-bull-400">
                BUY 1.08454
              </div>
              <div className="bg-bear-500/10 border border-bear-500/25 rounded-md py-2 text-center text-xs font-semibold text-bear-400">
                SELL 1.08451
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}