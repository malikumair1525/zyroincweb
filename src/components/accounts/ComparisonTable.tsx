"use client";

import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Row = {
  label: string;
  standard: string | boolean;
  pro: string | boolean;
  vip: string | boolean;
};

const SECTIONS: { title: string; rows: Row[] }[] = [
  {
    title: "Trading Conditions",
    rows: [
      { label: "Minimum deposit", standard: "$100", pro: "$2,500", vip: "$25,000" },
      { label: "Spread from", standard: "1.0 pips", pro: "0.3 pips", vip: "0.0 pips" },
      { label: "Commission per lot", standard: "None", pro: "$6.00", vip: "$3.00" },
      { label: "Maximum leverage", standard: "1:200", pro: "1:400", vip: "1:500" },
      { label: "Minimum lot size", standard: "0.01", pro: "0.01", vip: "0.01" },
      { label: "Stop out level", standard: "40%", pro: "40%", vip: "30%" },
      { label: "Margin call level", standard: "80%", pro: "80%", vip: "50%" },
    ],
  },
  {
    title: "Instruments & Execution",
    rows: [
      { label: "Forex majors & minors", standard: true, pro: true, vip: true },
      { label: "Metals (gold, silver, etc.)", standard: true, pro: true, vip: true },
      { label: "Energy & commodities", standard: true, pro: true, vip: true },
      { label: "Global indices", standard: true, pro: true, vip: true },
      { label: "Cryptocurrencies", standard: true, pro: true, vip: true },
      { label: "Share CFDs", standard: true, pro: true, vip: true },
      { label: "Market execution", standard: true, pro: true, vip: true },
      { label: "Priority order routing", standard: false, pro: true, vip: true },
    ],
  },
  {
    title: "Account Services",
    rows: [
      { label: "TM9 platform access", standard: true, pro: true, vip: true },
      { label: "Email & live chat support", standard: true, pro: true, vip: true },
      { label: "Dedicated support channel", standard: false, pro: true, vip: true },
      { label: "Personal account manager", standard: false, pro: false, vip: true },
      { label: "Free VPS hosting", standard: false, pro: "Eligible", vip: "Included" },
      { label: "Weekly market analysis", standard: true, pro: true, vip: true },
      { label: "Exclusive market briefings", standard: false, pro: false, vip: true },
      { label: "Priority withdrawal processing", standard: false, pro: false, vip: true },
    ],
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-gold-400 mx-auto" />
    ) : (
      <Minus className="w-5 h-5 text-ink-600 mx-auto" />
    );
  }
  return <span className="text-sm text-white font-medium">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gold-500/20 bg-ink-900/40">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-gold-500/15">
            <th className="text-left text-sm font-semibold text-ink-300 py-5 px-5 sm:px-8 w-2/5">
              Feature
            </th>
            {["Standard", "Pro", "VIP"].map((tier, i) => (
              <th
                key={tier}
                className={cn(
                  "text-center py-5 px-3 sm:px-6",
                  i === 1 && "bg-gold-500/5 border-x border-gold-500/20"
                )}
              >
                <div className="text-sm font-bold text-white">{tier}</div>
                {i === 1 && (
                  <div className="text-[10px] text-gold-400 uppercase tracking-wider mt-0.5 font-semibold">
                    Most Popular
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {SECTIONS.map((section, si) => (
            <Fragment key={`section-${si}`}>
              {/* Section title row */}
              <tr className="bg-ink-950/50">
                <td
                  colSpan={4}
                  className="text-xs font-bold text-gold-400 uppercase tracking-[0.18em] py-3 px-5 sm:px-8"
                >
                  {section.title}
                </td>
              </tr>

              {/* Section rows */}
              {section.rows.map((row, i) => (
                <tr
                  key={`${si}-${i}`}
                  className="border-b border-gold-500/5 hover:bg-ink-900/40 transition-colors"
                >
                  <td className="text-sm text-ink-200 py-4 px-5 sm:px-8">{row.label}</td>
                  <td className="text-center py-4 px-3 sm:px-6">
                    <Cell value={row.standard} />
                  </td>
                  <td className="text-center py-4 px-3 sm:px-6 bg-gold-500/5 border-x border-gold-500/10">
                    <Cell value={row.pro} />
                  </td>
                  <td className="text-center py-4 px-3 sm:px-6">
                    <Cell value={row.vip} />
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}