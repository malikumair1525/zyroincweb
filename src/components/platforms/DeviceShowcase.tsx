"use client";

import { motion } from "framer-motion";

export default function DeviceShowcase() {
  return (
    <div className="relative">
      {/* Gold glow */}
      <div className="absolute inset-0 bg-gold-500/10 rounded-[40px] blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-end">
        {/* DESKTOP MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-xl border border-gold-500/30 bg-gradient-to-br from-ink-900 to-ink-950 p-3 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.25)]">
            {/* window header */}
            <div className="flex items-center gap-1.5 px-2 pb-3 border-b border-gold-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-bear-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-bull-500/70" />
              <div className="ml-3 text-xs text-ink-400 font-mono">TM9 Desktop — Terminal</div>
              <div className="ml-auto flex gap-1 text-[10px] text-ink-500">
                <span>EUR/USD</span>
                <span>•</span>
                <span>XAU/USD</span>
              </div>
            </div>

            {/* body layout */}
            <div className="mt-3 grid grid-cols-[120px_1fr_120px] gap-2 h-72">
              {/* Left sidebar - watchlist */}
              <div className="bg-ink-950 rounded-md p-2 border border-gold-500/5 flex flex-col gap-1.5">
                {[
                  { s: "EURUSD", v: "1.08452", up: true },
                  { s: "GBPUSD", v: "1.26731", up: false },
                  { s: "USDJPY", v: "149.38", up: true },
                  { s: "XAUUSD", v: "2384.5", up: true },
                  { s: "BTCUSD", v: "67245", up: true },
                  { s: "US500", v: "5237.4", up: false },
                ].map((row) => (
                  <div
                    key={row.s}
                    className="flex items-center justify-between px-1.5 py-1 rounded text-[10px] hover:bg-ink-900/50"
                  >
                    <span className="font-mono text-white">{row.s}</span>
                    <span className={`font-mono ${row.up ? "text-bull-400" : "text-bear-400"}`}>
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main chart */}
              <div className="bg-ink-950 rounded-md border border-gold-500/5 relative overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="dFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                    </linearGradient>
                    <pattern id="dGrid" width="40" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="300" fill="url(#dGrid)" />
                  <path
                    d="M0,240 C40,220 80,180 120,195 C160,210 200,160 240,150 C280,140 320,100 360,80 L400,70 L400,300 L0,300 Z"
                    fill="url(#dFill)"
                  />
                  <path
                    d="M0,240 C40,220 80,180 120,195 C160,210 200,160 240,150 C280,140 320,100 360,80 L400,70"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  <circle cx="400" cy="70" r="4" fill="#d4af37">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="absolute top-2 left-2 text-[10px] text-ink-400 font-mono">EUR/USD · 1H</div>
                <div className="absolute bottom-2 right-2 flex gap-1 text-[10px]">
                  {["1M", "5M", "1H", "4H", "1D"].map((t) => (
                    <span
                      key={t}
                      className={`px-1.5 py-0.5 rounded ${
                        t === "1H" ? "bg-gold-500/20 text-gold-400 border border-gold-500/30" : "text-ink-500"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel - order */}
              <div className="bg-ink-950 rounded-md p-2 border border-gold-500/5">
                <div className="text-[10px] text-ink-400 mb-2 uppercase tracking-wider">Order</div>
                <div className="space-y-1.5">
                  <div className="text-[10px] text-ink-500">Volume</div>
                  <div className="bg-ink-900 border border-gold-500/10 rounded px-2 py-1 text-[10px] font-mono text-white">0.10</div>
                  <div className="text-[10px] text-ink-500 mt-2">S/L</div>
                  <div className="bg-ink-900 border border-gold-500/10 rounded px-2 py-1 text-[10px] font-mono text-white">1.08300</div>
                </div>
                <div className="mt-3 space-y-1">
                  <button className="w-full py-1.5 bg-bull-500/15 border border-bull-500/30 rounded text-[10px] font-semibold text-bull-400">
                    BUY 1.08454
                  </button>
                  <button className="w-full py-1.5 bg-bear-500/15 border border-bear-500/30 rounded text-[10px] font-semibold text-bear-400">
                    SELL 1.08451
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-ink-400">TM9 Desktop Terminal</div>
        </motion.div>

        {/* MOBILE MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative justify-self-center lg:justify-self-auto"
        >
          {/* Phone body */}
          <div className="w-[200px] sm:w-[220px] h-[420px] sm:h-[460px] rounded-[32px] border-[6px] border-ink-800 bg-ink-950 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.2)] relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink-900 rounded-b-2xl z-10" />

            {/* Screen content */}
            <div className="pt-7 px-3 h-full flex flex-col">
              {/* Status */}
              <div className="flex items-center justify-between text-[9px] text-ink-400 font-mono px-1">
                <span>9:41</span>
                <span className="text-gold-400">TM9</span>
                <span>98%</span>
              </div>

              {/* Instrument header */}
              <div className="mt-3 text-center">
                <div className="text-xs font-semibold text-white">EUR/USD</div>
                <div className="text-[9px] text-ink-400">Euro vs US Dollar</div>
                <div className="text-xl font-bold text-bull-400 font-mono mt-1">1.08452</div>
                <div className="text-[10px] text-bull-500">+0.25% (+0.00271)</div>
              </div>

              {/* Chart */}
              <div className="mt-3 flex-1 relative bg-ink-900/50 rounded-lg border border-gold-500/10 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="mFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,100 C20,90 40,60 60,70 C80,80 100,50 120,45 C140,40 160,30 180,20 L200,15 L200,140 L0,140 Z"
                    fill="url(#mFill)"
                  />
                  <path
                    d="M0,100 C20,90 40,60 60,70 C80,80 100,50 120,45 C140,40 160,30 180,20 L200,15"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Buttons */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="py-2 bg-bull-500/15 border border-bull-500/30 rounded-lg text-[10px] font-semibold text-bull-400">
                  BUY
                </button>
                <button className="py-2 bg-bear-500/15 border border-bear-500/30 rounded-lg text-[10px] font-semibold text-bear-400">
                  SELL
                </button>
              </div>

              {/* Tab bar */}
              <div className="mt-3 pt-2 border-t border-gold-500/10 flex justify-around text-[9px] text-ink-500">
                <span className="text-gold-400">Chart</span>
                <span>Trade</span>
                <span>Watchlist</span>
                <span>Account</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-ink-400">TM9 Mobile</div>
        </motion.div>
      </div>
    </div>
  );
}