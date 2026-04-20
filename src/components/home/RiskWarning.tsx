import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function RiskWarning() {
  return (
    <section className="relative border-y border-gold-500/15 bg-ink-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-gold-400" strokeWidth={2} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              Risk Disclosure
            </h3>
            <div className="space-y-3 text-sm text-ink-300 leading-relaxed">
              <p>
                Trading foreign exchange (Forex) and contracts for difference (CFDs) on
                margin carries a high level of risk to your capital and may not be
                suitable for all investors. Leveraged products can amplify both gains and
                losses, and market volatility may result in rapid and substantial loss of
                funds — potentially exceeding your initial deposit under extreme conditions.
              </p>
              <p>
                Before engaging in trading activity with ZYRO INC, you should carefully
                assess your investment objectives, financial situation, level of
                experience, and risk tolerance. You should only trade with capital that
                you can afford to lose, and should seek independent financial advice if
                you are in any doubt regarding the suitability of these products.
              </p>
              <p>
                Past performance of any trading system, strategy, or instrument is not a
                reliable indicator of future results. The information provided on this
                website, including market commentary, does not constitute investment
                advice, a solicitation, or a recommendation to trade.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <Link
                href="/legal/risk-disclosure"
                className="text-gold-400 hover:text-gold-300 font-medium transition"
              >
                Full Risk Disclosure →
              </Link>
              <Link
                href="/legal/terms"
                className="text-gold-400 hover:text-gold-300 font-medium transition"
              >
                Terms & Conditions →
              </Link>
              <Link
                href="/legal/aml-kyc"
                className="text-gold-400 hover:text-gold-300 font-medium transition"
              >
                AML / KYC Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}