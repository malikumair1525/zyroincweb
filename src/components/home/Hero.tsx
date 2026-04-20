"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import TradingViewTicker from "./TradingViewTicker";
import { SITE_CONFIG } from "@/constants/site";

const BADGES = [
  { icon: Zap, label: "Ultra-Fast Execution" },
  { icon: Shield, label: "Segregated Client Funds" },
  { icon: TrendingUp, label: "Spreads from 0.0 pips" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Parallax scroll effect on background glows
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const topGlowY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bottomGlowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ===== Hero ===== */}
      <section
        ref={ref}
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24"
      >
        {/* Background layers with parallax */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <motion.div
          style={{ y: topGlowY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          style={{ y: bottomGlowY }}
          className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gold-700/10 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Content with subtle parallax */}
        <motion.div
          style={{ y: heroContentY, opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/5 text-gold-400 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              Trusted by traders in 120+ countries
            </span>
          </motion.div>

          {/* Headline with shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Trade the Markets With
            <br />
            <span className="text-gold-gradient-shimmer">
              Institutional Precision
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-center text-base sm:text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed"
          >
            Access deep liquidity, razor-tight spreads, and lightning-fast execution on 500+ global instruments — all through the advanced{" "}
            <span className="text-gold-400 font-semibold">TM9</span> trading platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              href={SITE_CONFIG.crm.register}
              external
              variant="gold"
              size="lg"
              className="group pulse-glow w-full sm:w-auto"
            >
              Open Live Account
              <ArrowRight className="w-4 h-4 icon-slide" />
            </Button>
            <Button
              href={SITE_CONFIG.crm.login}
              external
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Client Login
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs sm:text-sm text-ink-300"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Live TradingView Ticker Tape ===== */}
      <section className="relative border-y border-gold-500/10 bg-ink-900/40 backdrop-blur-sm">
        <div className="max-w-full">
          <TradingViewTicker />
        </div>
      </section>
    </>
  );
}