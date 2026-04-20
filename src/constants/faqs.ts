export type FAQCategory =
  | "account"
  | "trading"
  | "funding"
  | "platform"
  | "partners"
  | "security";

export type FAQ = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const FAQ_CATEGORIES: { key: FAQCategory; label: string }[] = [
  { key: "account", label: "Account" },
  { key: "trading", label: "Trading" },
  { key: "funding", label: "Deposits & Withdrawals" },
  { key: "platform", label: "TM9 Platform" },
  { key: "partners", label: "Partners" },
  { key: "security", label: "Security & Legal" },
];

export const ALL_FAQS: FAQ[] = [
  // ===== ACCOUNT =====
  {
    category: "account",
    question: "How do I open an account with ZYRO INC?",
    answer:
      "Registration takes under 5 minutes. Visit the client portal, complete the application form with your basic details, upload a valid ID and proof of address, and our compliance team will review your submission — typically within one business day.",
  },
  {
    category: "account",
    question: "What account tiers does ZYRO INC offer?",
    answer:
      "We offer three live account tiers: Standard (from $100), Pro (from $2,500), and VIP (from $25,000). Each tier provides progressively tighter spreads, higher leverage limits, and enhanced service levels. A full feature comparison is available on our Account Types page.",
  },
  {
    category: "account",
    question: "Can I upgrade my account tier later?",
    answer:
      "Yes. Existing clients can request a tier upgrade directly from the client portal, provided the minimum deposit for the target tier is met. Upgrade requests are typically processed within one business day.",
  },
  {
    category: "account",
    question: "What currencies can my account be denominated in?",
    answer:
      "Trading accounts can be opened in USD, EUR, GBP, AUD, or JPY. The base currency is selected at account opening and cannot be changed once trading has begun. Deposits in other currencies are converted at the prevailing interbank rate.",
  },
  {
    category: "account",
    question: "What documents are required for verification?",
    answer:
      "We require a valid government-issued photo ID (passport, driving licence, or national ID) and proof of residential address dated within the last 90 days (utility bill, bank statement, or official government letter). Additional documents may be requested for enhanced due diligence cases.",
  },
  {
    category: "account",
    question: "Are there inactivity or maintenance fees?",
    answer:
      "ZYRO INC does not charge routine maintenance fees on any account tier. A modest inactivity fee may apply after 12 consecutive months without trading activity. Full details are available in our fee schedule.",
  },

  // ===== TRADING =====
  {
    category: "trading",
    question: "What instruments can I trade with ZYRO INC?",
    answer:
      "Our clients access 500+ instruments across six asset classes: forex (50+ pairs), spot metals, energy and soft commodities, global stock indices, cryptocurrencies, and share CFDs from major US, European, and Asian markets.",
  },
  {
    category: "trading",
    question: "What is the maximum leverage available?",
    answer:
      "Maximum leverage varies by account tier and asset class. Standard accounts offer up to 1:200, Pro accounts up to 1:400, and VIP accounts up to 1:500. Leverage on cryptocurrencies is capped at 1:50, and on share CFDs at 1:20, across all tiers.",
  },
  {
    category: "trading",
    question: "What is the minimum lot size I can trade?",
    answer:
      "The minimum tradable position size is 0.01 lots (micro-lot) on all account tiers. This allows precise position sizing and risk management — particularly useful for testing strategies or managing smaller accounts.",
  },
  {
    category: "trading",
    question: "Are there restrictions on trading strategies?",
    answer:
      "ZYRO INC permits all common trading strategies including scalping, hedging, news trading, and automated strategies. There are no minimum holding periods and no restrictions on the number of trades per day.",
  },
  {
    category: "trading",
    question: "What are your spreads and commission rates?",
    answer:
      "Standard accounts feature spreads from 1.0 pips with no commission. Pro accounts offer spreads from 0.3 pips with a $6/lot commission. VIP accounts provide spreads from 0.0 pips with a reduced $3/lot commission — full pricing is on our Account Types page.",
  },
  {
    category: "trading",
    question: "Is negative balance protection available?",
    answer:
      "Yes. All ZYRO INC retail client accounts include negative balance protection, ensuring that under no market condition will your balance fall below zero. Residual debits from extreme slippage events are absorbed by ZYRO INC.",
  },
  {
    category: "trading",
    question: "When do the markets open and close?",
    answer:
      "The forex market operates 24 hours a day, 5 days a week — from Sunday 22:00 GMT to Friday 22:00 GMT. Other instruments follow their respective exchange hours. Full market hours are shown on our Trading page.",
  },

  // ===== FUNDING =====
  {
    category: "funding",
    question: "How can I deposit funds into my account?",
    answer:
      "ZYRO INC accepts deposits via bank transfer (SWIFT/SEPA), USDT on the TRC-20 network, and USDT on the ERC-20 network. All methods are processed securely through the client portal.",
  },
  {
    category: "funding",
    question: "Does ZYRO INC charge deposit or withdrawal fees?",
    answer:
      "ZYRO INC does not charge fees on deposits or withdrawals. For bank transfers, your originating or receiving bank may apply their own charges. For crypto transactions, standard blockchain network fees (TRC-20 or ERC-20 gas) apply.",
  },
  {
    category: "funding",
    question: "How fast are deposits credited?",
    answer:
      "Crypto (USDT) deposits are typically credited within minutes after network confirmations. Bank transfers take 1–3 business days depending on your bank and the transfer rail used.",
  },
  {
    category: "funding",
    question: "What is the difference between USDT TRC-20 and ERC-20?",
    answer:
      "Both are the same underlying stablecoin (USDT) on different blockchains. TRC-20 uses the Tron network — faster with very low fees. ERC-20 uses the Ethereum network — broader wallet support but higher gas fees depending on congestion. Always select the correct network when sending.",
  },
  {
    category: "funding",
    question: "How long do withdrawals take?",
    answer:
      "USDT (TRC-20/ERC-20) withdrawals are typically dispatched the same business day. Bank wire withdrawals take 2–5 business days to arrive depending on the receiving bank. All withdrawals pass standard AML compliance review before release.",
  },
  {
    category: "funding",
    question: "Why must I withdraw via the same method I deposited?",
    answer:
      "This is a standard AML requirement for regulated brokers. Withdrawals are processed to the original funding source — up to the deposited amount on that method. Profits beyond the deposited amount are sent via the next available verified method.",
  },
  {
    category: "funding",
    question: "What happens if I send crypto on the wrong network?",
    answer:
      "Cross-network transfers cannot be reversed automatically. Funds sent to a TRC-20 address over the ERC-20 network (or vice versa) are typically lost. Always double-check the receiving address and the selected network before confirming any transaction.",
  },

  // ===== PLATFORM =====
  {
    category: "platform",
    question: "What is TM9?",
    answer:
      "TM9 is ZYRO INC's proprietary trading platform — a ground-up rebuild of the modern brokerage terminal. It offers institutional-grade charting, one-click trading, algorithmic execution, and a unified experience across web, desktop, and mobile.",
  },
  {
    category: "platform",
    question: "Is TM9 free to use?",
    answer:
      "Yes. All TM9 platform access is free for ZYRO INC clients — no subscription fees, no tier gating, and no premium upsells. Every client gets the full feature set.",
  },
  {
    category: "platform",
    question: "Which devices does TM9 support?",
    answer:
      "TM9 is available as a native iOS app, Android APK, and browser-based web terminal. Your account, watchlists, and workspaces sync automatically across all devices.",
  },
  {
    category: "platform",
    question: "Can I use automated / algorithmic strategies on TM9?",
    answer:
      "Yes. TM9 supports algorithmic trading, expert advisors, and custom scripts. You can also backtest strategies against historical data before deploying them to your live account.",
  },
  {
    category: "platform",
    question: "Does TM9 support charting and technical analysis?",
    answer:
      "TM9 ships with 80+ built-in technical indicators, multiple chart types (candlestick, bar, Renko, etc.), 9 timeframes, and advanced drawing tools — suitable for both discretionary and systematic traders.",
  },

  // ===== PARTNERS =====
  {
    category: "partners",
    question: "How does the ZYRO INC Partner Program work?",
    answer:
      "We offer three commission structures: CPA (up-front per referral), Revshare (up to 40% lifetime revenue share), and Hybrid (negotiable combination). Apply via the Partners page — approved applicants gain access to a full tracking dashboard and marketing assets.",
  },
  {
    category: "partners",
    question: "Is there a minimum traffic requirement?",
    answer:
      "No hard minimum. We evaluate applications based on traffic quality and audience alignment. Smaller creators with engaged audiences are just as valuable as large affiliate networks.",
  },
  {
    category: "partners",
    question: "When are partner commissions paid?",
    answer:
      "Commissions are paid monthly — typically within the first five business days of each month for the previous month's qualified activity. High-volume partners may qualify for weekly payouts after three months of consistent performance.",
  },
  {
    category: "partners",
    question: "Can I run sub-affiliate / master partner structures?",
    answer:
      "Yes. Master partners can onboard and manage their own sub-affiliate networks through the partner dashboard, with automated commission splitting and full hierarchy reporting.",
  },

  // ===== SECURITY =====
  {
    category: "security",
    question: "How are client funds protected?",
    answer:
      "All client capital is held in segregated accounts with tier-1 banking partners, legally separated from ZYRO INC's operational funds. Accounts are reconciled daily to ensure complete integrity of client balances.",
  },
  {
    category: "security",
    question: "What security measures protect my account?",
    answer:
      "Your account is protected by 256-bit SSL/TLS encryption, two-factor authentication, automatic session timeouts, and continuous behavioral fraud monitoring. Card transactions additionally require 3-D Secure authentication.",
  },
  {
    category: "security",
    question: "Does ZYRO INC comply with AML/KYC regulations?",
    answer:
      "Yes. We maintain a comprehensive AML/KYC compliance framework aligned with international financial standards — including identity verification, source-of-funds review, sanctions screening, and continuous transaction monitoring.",
  },
  {
    category: "security",
    question: "How is my personal data handled?",
    answer:
      "All personal data is processed in accordance with our Privacy Policy and applicable data protection laws. Information is encrypted, access-controlled, and never sold to third parties. Full details are in our Privacy Policy page.",
  },
  {
    category: "security",
    question: "What should I do if I suspect unauthorized access?",
    answer:
      "Immediately change your password from the client portal, enable two-factor authentication if not already active, and contact our support team at support@zyroinc.com. We will freeze account activity pending investigation.",
  },
];