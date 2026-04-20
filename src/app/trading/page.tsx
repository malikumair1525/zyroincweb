"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AssetClassTabs from "@/components/trading/AssetClassTabs";
import TradingConditions from "@/components/trading/TradingConditions";
import MarketSessions from "@/components/trading/MarketSessions";
import { SITE_CONFIG } from "@/constants/site";

export default function TradingPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Global Markets Access"
        title={
          <>
            Trade 500+ instruments with{" "}
            <span className="text-gold-gradient">institutional precision.</span>
          </>
        }
        description="From major currency pairs to global indices, commodities, and cryptocurrencies — access the world's financial markets on a single account with deep liquidity and ultra-competitive pricing."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
            Open Live Account
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/account-types" variant="outline" size="lg">
            Compare Accounts
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-ink-300">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-gold-400" />
            50ms average execution
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-400" />
            Segregated client funds
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-gold-400" />
            Deep tier-1 liquidity
          </div>
        </div>
      </PageHero>

      {/* ASSET CLASSES */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Asset Classes"
          title="Six markets. One unified account."
          description="Build a diversified strategy across currencies, metals, commodities, indices, cryptocurrencies, and global equities — all accessible through TM9."
        />
        <div className="mt-12">
          <AssetClassTabs />
        </div>
      </Section>

      {/* TRADING CONDITIONS */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Trading Conditions"
          title="Built for professional execution."
          description="The trading conditions that serious traders expect from a serious broker — transparent, consistent, and designed for high-volume activity."
        />
        <div className="mt-12">
          <TradingConditions />
        </div>
      </Section>

      {/* MARKET HOURS */}
      <Section size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
              Market Hours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15]">
              Trade around the <span className="text-gold-gradient">clock.</span>
            </h2>
            <p className="mt-5 text-base text-ink-300 leading-relaxed">
              The foreign exchange market operates 24 hours a day, five days a week —
              across four major global sessions. Understanding when liquidity peaks can
              make the difference between a tight fill and a costly slippage.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-300">
              <li>• <span className="text-white">London session</span> — highest trading volume globally</li>
              <li>• <span className="text-white">NY overlap</span> — peak volatility window for majors</li>
              <li>• <span className="text-white">Asian session</span> — tighter ranges, ideal for scalping</li>
              <li>• <span className="text-white">Weekend closure</span> — Friday 22:00 to Sunday 22:00 GMT</li>
            </ul>
          </motion.div>

          {/* Right column — sessions panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <MarketSessions />
          </motion.div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section size="lg" className="relative overflow-hidden bg-ink-900/30 border-y border-gold-500/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Ready to trade with a{" "}
            <span className="text-gold-gradient">serious broker?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Open an account in under 5 minutes and start trading 500+ instruments on
            the TM9 platform — with institutional-grade pricing from your very first trade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
              Open Live Account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/platforms" variant="outline" size="lg">
              Explore TM9 Platform
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}