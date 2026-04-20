"use client";

import { motion } from "framer-motion";
import { Globe, Apple, Smartphone, ArrowRight, Download } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

const DOWNLOADS = [
  {
    icon: Globe,
    title: "Web Terminal",
    subtitle: "Browser-based access",
    description:
      "Log in from any modern browser — no installation required. Ideal for quick access on shared or restricted devices.",
    href: SITE_CONFIG.platform.web,
    cta: "Launch Web Terminal",
    tag: "Instant access",
    highlighted: false,
  },
  {
    icon: Apple,
    title: "TM9 for iOS",
    subtitle: "iPhone & iPad",
    description:
      "Native iOS app optimized for iPhone and iPad. Full charting suite and one-tap order execution from the App Store.",
    href: SITE_CONFIG.platform.ios,
    cta: "Download on App Store",
    tag: "iOS 14.0 or later",
    highlighted: true,
  },
  {
    icon: Smartphone,
    title: "TM9 for Android",
    subtitle: "All Android devices",
    description:
      "Install the TM9 Android app via direct APK — full trading functionality including charts, indicators, and quick orders.",
    href: SITE_CONFIG.platform.android,
    cta: "Download APK",
    tag: "Android 7.0+",
    highlighted: false,
  },
];

export default function DownloadCenter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {DOWNLOADS.map((item, i) => (
        <motion.a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          className={`group relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
            item.highlighted
              ? "bg-gradient-to-b from-ink-900 to-ink-950 border-2 border-gold-500/50 hover:border-gold-500/80 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.25)]"
              : "bg-ink-900/50 border border-gold-500/20 hover:border-gold-500/50"
          }`}
        >
          {/* Top */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/5 border border-gold-500/30 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-gold-400" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-gold-400 uppercase tracking-wider font-semibold bg-gold-500/10 border border-gold-500/25 px-2.5 py-1 rounded-full">
              {item.tag}
            </span>
          </div>

          {/* Body */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-xs text-gold-400 mt-0.5 mb-3 font-medium">
              {item.subtitle}
            </p>
            <p className="text-sm text-ink-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-6 pt-5 border-t border-gold-500/10 flex items-center justify-between">
            <span className="text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              {item.cta}
            </span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}