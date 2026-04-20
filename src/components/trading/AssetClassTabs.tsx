"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Coins, Flame, BarChart3, Bitcoin, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Instrument = { symbol: string; name: string };
type AssetClass = {
  key: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  spreadFrom: string;
  leverage: string;
  count: string;
  instruments: Instrument[];
};

const ASSET_CLASSES: AssetClass[] = [
  {
    key: "forex",
    icon: DollarSign,
    label: "Forex",
    tagline: "50+ currency pairs — majors, minors, and exotics with institutional-grade liquidity.",
    spreadFrom: "0.0 pips",
    leverage: "Up to 1:500",
    count: "50+ pairs",
    instruments: [
      { symbol: "EUR/USD", name: "Euro vs US Dollar" },
      { symbol: "GBP/USD", name: "British Pound vs USD" },
      { symbol: "USD/JPY", name: "US Dollar vs Yen" },
      { symbol: "AUD/USD", name: "Australian Dollar" },
      { symbol: "USD/CAD", name: "US Dollar vs Canadian" },
      { symbol: "USD/CHF", name: "US Dollar vs Swiss Franc" },
      { symbol: "NZD/USD", name: "New Zealand Dollar" },
      { symbol: "EUR/GBP", name: "Euro vs British Pound" },
    ],
  },
  {
    key: "metals",
    icon: Coins,
    label: "Metals",
    tagline: "Spot gold, silver, platinum, and palladium — trade safe-haven assets around the clock.",
    spreadFrom: "0.15",
    leverage: "Up to 1:200",
    count: "6 instruments",
    instruments: [
      { symbol: "XAU/USD", name: "Gold Spot" },
      { symbol: "XAG/USD", name: "Silver Spot" },
      { symbol: "XPT/USD", name: "Platinum Spot" },
      { symbol: "XPD/USD", name: "Palladium Spot" },
      { symbol: "XAU/EUR", name: "Gold vs Euro" },
      { symbol: "XAG/EUR", name: "Silver vs Euro" },
    ],
  },
  {
    key: "commodities",
    icon: Flame,
    label: "Commodities",
    tagline: "Energy, softs, and agricultural commodities on leverage — diversify beyond currencies.",
    spreadFrom: "0.03",
    leverage: "Up to 1:100",
    count: "15+ products",
    instruments: [
      { symbol: "WTI", name: "US Crude Oil" },
      { symbol: "BRENT", name: "Brent Crude Oil" },
      { symbol: "NGAS", name: "Natural Gas" },
      { symbol: "COPPER", name: "Copper" },
      { symbol: "COCOA", name: "Cocoa" },
      { symbol: "COFFEE", name: "Coffee" },
      { symbol: "SUGAR", name: "Sugar" },
      { symbol: "COTTON", name: "Cotton" },
    ],
  },
  {
    key: "indices",
    icon: BarChart3,
    label: "Indices",
    tagline: "Trade major global stock indices — from Wall Street to Tokyo, with tight spreads and deep liquidity.",
    spreadFrom: "0.4 pts",
    leverage: "Up to 1:200",
    count: "20+ indices",
    instruments: [
      { symbol: "US30", name: "Dow Jones" },
      { symbol: "US500", name: "S&P 500" },
      { symbol: "NAS100", name: "Nasdaq 100" },
      { symbol: "UK100", name: "FTSE 100" },
      { symbol: "GER40", name: "DAX 40" },
      { symbol: "JPN225", name: "Nikkei 225" },
      { symbol: "FRA40", name: "CAC 40" },
      { symbol: "AUS200", name: "ASX 200" },
    ],
  },
  {
    key: "crypto",
    icon: Bitcoin,
    label: "Crypto",
    tagline: "Leveraged access to major cryptocurrencies — trade 24/7 without holding digital wallets.",
    spreadFrom: "0.5 pips",
    leverage: "Up to 1:50",
    count: "15+ coins",
    instruments: [
      { symbol: "BTC/USD", name: "Bitcoin" },
      { symbol: "ETH/USD", name: "Ethereum" },
      { symbol: "XRP/USD", name: "Ripple" },
      { symbol: "LTC/USD", name: "Litecoin" },
      { symbol: "SOL/USD", name: "Solana" },
      { symbol: "ADA/USD", name: "Cardano" },
      { symbol: "DOT/USD", name: "Polkadot" },
      { symbol: "DOGE/USD", name: "Dogecoin" },
    ],
  },
  {
    key: "stocks",
    icon: Building2,
    label: "Shares",
    tagline: "Trade CFDs on 400+ global blue-chip stocks from the US, Europe, and Asia.",
    spreadFrom: "Variable",
    leverage: "Up to 1:20",
    count: "400+ shares",
    instruments: [
      { symbol: "AAPL", name: "Apple Inc." },
      { symbol: "TSLA", name: "Tesla Inc." },
      { symbol: "MSFT", name: "Microsoft" },
      { symbol: "AMZN", name: "Amazon" },
      { symbol: "GOOGL", name: "Alphabet" },
      { symbol: "META", name: "Meta Platforms" },
      { symbol: "NVDA", name: "NVIDIA" },
      { symbol: "JPM", name: "JPMorgan Chase" },
    ],
  },
];

export default function AssetClassTabs() {
  const [active, setActive] = useState(ASSET_CLASSES[0].key);
  const activeClass = ASSET_CLASSES.find((c) => c.key === active) ?? ASSET_CLASSES[0];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ASSET_CLASSES.map(({ key, icon: Icon, label }) => (
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

      {/* Content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-gold-500/20 bg-ink-900/50 p-6 sm:p-8 lg:p-10"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8 mb-8 border-b border-gold-500/10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center">
                  <activeClass.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeClass.label}
                </h3>
              </div>
              <p className="text-ink-300 text-base leading-relaxed">
                {activeClass.tagline}
              </p>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-ink-950/50 rounded-lg p-3 border border-gold-500/10 text-center">
                <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">From</div>
                <div className="text-sm font-semibold text-gold-400">{activeClass.spreadFrom}</div>
              </div>
              <div className="bg-ink-950/50 rounded-lg p-3 border border-gold-500/10 text-center">
                <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">Leverage</div>
                <div className="text-sm font-semibold text-gold-400">{activeClass.leverage}</div>
              </div>
              <div className="bg-ink-950/50 rounded-lg p-3 border border-gold-500/10 text-center">
                <div className="text-[10px] text-ink-400 uppercase tracking-wider mb-1">Offered</div>
                <div className="text-sm font-semibold text-gold-400">{activeClass.count}</div>
              </div>
            </div>
          </div>

          {/* Instruments grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {activeClass.instruments.map((inst) => (
              <div
                key={inst.symbol}
                className="group relative bg-ink-950/60 rounded-lg border border-gold-500/10 hover:border-gold-500/40 p-3.5 transition-colors"
              >
                <div className="text-sm font-semibold font-mono text-white">
                  {inst.symbol}
                </div>
                <div className="text-xs text-ink-400 mt-1 truncate">
                  {inst.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}