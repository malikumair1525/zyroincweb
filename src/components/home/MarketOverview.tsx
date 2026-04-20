"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Skeleton from "@/components/ui/Skeleton";
import TradingViewMarketOverview from "./TradingViewMarketOverview";

export default function MarketOverview() {
  const [ready, setReady] = useState(false);

  // TradingView takes ~1s to initialize; show skeleton during that window
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section size="lg" className="bg-ink-900/20">
      <SectionHeading
        eyebrow="Live Markets"
        title="Trade 500+ global instruments"
        description="Real-time prices across forex, commodities, indices, and cryptocurrencies — powered by live market data and refreshed continuously."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border border-gold-500/15 bg-ink-900/60 backdrop-blur-sm p-3 sm:p-4 overflow-hidden"
      >
        {!ready ? (
          /* Skeleton placeholder */
          <div className="p-4 space-y-4">
            {/* Tabs skeleton */}
            <div className="flex gap-2">
              <Skeleton className="h-7 w-16" />
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-7 w-20" />
              <Skeleton className="h-7 w-16" />
            </div>

            {/* Chart area skeleton */}
            <Skeleton className="h-48 w-full" />

            {/* Time range buttons skeleton */}
            <div className="flex gap-1.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-10" />
              ))}
            </div>

            {/* Table rows skeleton */}
            <div className="space-y-2 pt-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 py-2"
                >
                  <Skeleton variant="circle" className="w-6 h-6" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-14" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <TradingViewMarketOverview />
        )}
      </motion.div>

      <p className="mt-5 text-center text-xs text-ink-400">
        Prices are indicative and provided by TradingView. Actual trading prices may differ.
      </p>
    </Section>
  );
}