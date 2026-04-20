import LegalDocument, { type LegalSection } from "@/components/legal/LegalDocument";

export const metadata = {
  title: "Risk Disclosure",
  description:
    "A comprehensive disclosure of the risks associated with trading forex, CFDs, cryptocurrencies, and leveraged products through ZYRO INC.",
  alternates: { canonical: "/legal/risk-disclosure" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "general-warning",
    title: "General Risk Warning",
    paragraphs: [
      "Trading financial instruments — particularly forex, contracts for difference (CFDs), and cryptocurrency derivatives — carries a high level of risk to your capital. These products are complex, volatile, and may not be suitable for all investors.",
      "The use of leverage can amplify both profits and losses. Under extreme market conditions, losses may exceed your initial deposit and reach the full value of any collateral or additional capital you have available. You should only trade with funds you can afford to lose in their entirety.",
      "Before deciding to trade with ZYRO INC, you should carefully consider your investment objectives, level of experience, financial situation, and risk tolerance. If you have any doubt regarding the suitability of these products, you should seek independent financial advice.",
    ],
  },
  {
    id: "leverage-risk",
    title: "Leverage and Margin Risk",
    paragraphs: [
      "Leverage allows you to control a position many times greater than the capital deposited. While this can increase potential returns, it proportionally amplifies the risk of losses. Even small adverse price movements can lead to significant losses relative to your deposited capital.",
      "You are required to maintain sufficient margin at all times to support your open positions. If the market moves against you and your account equity falls below the required margin, open positions may be automatically closed (stopped out) without prior warning, potentially resulting in losses realized at unfavorable prices.",
    ],
  },
  {
    id: "market-risk",
    title: "Market Volatility",
    paragraphs: [
      "Financial markets are subject to rapid and unpredictable price movements caused by a wide range of factors — including economic releases, central bank decisions, geopolitical events, natural disasters, and changes in market sentiment.",
      "Volatility can widen bid-ask spreads, reduce liquidity, and cause gapping — a situation where prices jump over stop-loss levels without being executed at the specified price. Gapping can result in losses materially larger than anticipated.",
      "Scheduled news releases (such as non-farm payrolls, central bank rate decisions, and inflation data) and unscheduled events often trigger sharp price movements. You should be aware of the economic calendar and manage your exposure accordingly.",
    ],
  },
  {
    id: "cfd-risk",
    title: "CFD and Derivatives-Specific Risk",
    paragraphs: [
      "Contracts for difference (CFDs) are leveraged derivative products. You do not own the underlying asset — you are entering into a contract whose value is derived from the price movement of that asset.",
      "CFDs typically involve overnight financing charges (swap or rollover costs) that apply when positions are held beyond the trading day. These charges can accumulate significantly and erode capital over time, particularly in slow-moving markets or during adverse interest-rate environments.",
      "Corporate actions on underlying assets — such as dividends, stock splits, or mergers — can result in adjustments to CFD positions, potentially at short notice. These adjustments may include the closure or rebalancing of positions.",
    ],
  },
  {
    id: "crypto-risk",
    title: "Cryptocurrency Risk",
    paragraphs: [
      "Cryptocurrency derivatives are highly speculative and exhibit extreme price volatility. Cryptocurrencies operate 24/7 without centralized regulation, and their prices can be influenced by factors including market sentiment, exchange outages, regulatory announcements, and large-scale market manipulation.",
      "Trading crypto instruments through ZYRO INC involves exposure to CFD-style risks — you do not own the underlying cryptocurrency, and prices are tracked but not guaranteed to match any specific spot market exactly. Liquidation may occur rapidly during periods of severe volatility.",
    ],
  },
  {
    id: "execution-risk",
    title: "Execution Risk",
    paragraphs: [
      "Orders placed through the TM9 platform are executed against market liquidity at the moment of execution. During fast-moving or illiquid conditions, the final execution price may differ from the requested price — a phenomenon known as slippage.",
      "Stop-loss and take-profit orders are not guaranteed unless explicitly designated as 'guaranteed' orders (where applicable). Standard stop-loss orders may be filled at prices worse than the stop level during gapping or extreme volatility.",
    ],
  },
  {
    id: "technology-risk",
    title: "Technology and Connectivity Risk",
    paragraphs: [
      "The TM9 platform depends on internet connectivity, third-party infrastructure, and electronic systems. Interruptions, outages, or latency — whether at the client end, provider end, or third-party networks — may prevent the placement, modification, or closure of trades at desired prices.",
      "We recommend that clients maintain alternative means of contacting our support team (including telephone and email) to manage critical trading situations during system outages. ZYRO INC is not liable for losses resulting from technology failures outside our direct control.",
    ],
  },
  {
    id: "currency-risk",
    title: "Currency and Foreign Exchange Risk",
    paragraphs: [
      "If you trade instruments denominated in a currency different from your account base currency, your profit or loss will be subject to currency conversion. Adverse exchange rate movements can reduce realized profits or increase losses independently of the performance of the underlying instrument.",
    ],
  },
  {
    id: "suitability",
    title: "Suitability and Appropriateness",
    paragraphs: [
      "You are solely responsible for determining whether the products and services offered by ZYRO INC are appropriate for your personal circumstances. ZYRO INC does not provide personalized investment advice and our execution-only model does not involve an assessment of suitability.",
      "Before opening an account, you should honestly assess your knowledge of financial markets, experience with leveraged products, and financial capacity to sustain losses. If any of these are limited, you should consider practicing with educational resources and starting with smaller position sizes before committing significant capital.",
    ],
  },
  {
    id: "no-guarantees",
    title: "No Guaranteed Profits",
    paragraphs: [
      "No trading strategy, signal service, automated system, or individual trader can guarantee profitable results. Past performance — whether your own, that of another trader, or that of an educational service — is not a reliable indicator of future results.",
      "Claims of guaranteed profits, risk-free returns, or unrealistic performance should be treated with significant skepticism. Profitable trading requires ongoing education, disciplined risk management, and a realistic understanding that losses are part of the activity.",
    ],
  },
  {
    id: "acknowledgment",
    title: "Client Acknowledgment",
    paragraphs: [
      "By opening a live trading account with ZYRO INC, you confirm that you have read, understood, and accepted the risks described in this Risk Disclosure document. You accept full responsibility for the financial consequences of any trading activity conducted through your account.",
      "This Risk Disclosure is not exhaustive — other risks may apply depending on specific market conditions and instruments. If you are unclear about any aspect of leveraged trading, you should refrain from trading until you have acquired sufficient understanding, and consider consulting an independent financial advisor.",
    ],
  },
];

export default function RiskDisclosurePage() {
  return (
    <LegalDocument
      title="Risk Disclosure"
      lastUpdated="January 2026"
      introduction="Trading leveraged financial instruments through ZYRO INC involves significant risk and is not suitable for all investors. This Risk Disclosure describes the principal risks associated with our services and must be read and understood before you open an account or begin trading."
      sections={SECTIONS}
      currentSlug="/risk-disclosure"
    />
  );
}