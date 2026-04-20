"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Globe2, Gauge, TrendingUp, Layers } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { icon: Layers, value: 500, suffix: "+", label: "Global Instruments" },
  { icon: TrendingUp, value: 0, suffix: " pips", decimals: 1, label: "Spreads From" },
  { icon: Gauge, value: 50, suffix: "ms", label: "Avg. Execution Speed" },
  { icon: Globe2, value: 120, suffix: "+", label: "Countries Served" },
];

function AnimatedCounter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString()}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-gold-500/10 bg-ink-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map(({ icon: Icon, value, suffix, prefix, decimals, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center lg:border-r lg:border-gold-500/10 lg:last:border-r-0 lg:px-4"
            >
              <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {prefix}
                <AnimatedCounter value={value} decimals={decimals} />
                <span className="text-gold-400">{suffix}</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-ink-300 tracking-wide">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}