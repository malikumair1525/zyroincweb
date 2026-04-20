"use client";

import { useEffect, useRef, memo } from "react";

function TradingViewMarketOverview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "550",
      plotLineColorGrowing: "#d4af37",
      plotLineColorFalling: "#ef4444",
      gridLineColor: "rgba(212, 175, 55, 0.08)",
      scaleFontColor: "#a3a3a3",
      belowLineFillColorGrowing: "rgba(212, 175, 55, 0.15)",
      belowLineFillColorFalling: "rgba(239, 68, 68, 0.15)",
      belowLineFillColorGrowingBottom: "rgba(212, 175, 55, 0)",
      belowLineFillColorFallingBottom: "rgba(239, 68, 68, 0)",
      symbolActiveColor: "rgba(212, 175, 55, 0.12)",
      tabs: [
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "FX:AUDUSD", d: "AUD/USD" },
            { s: "FX:USDCAD", d: "USD/CAD" },
            { s: "FX:USDCHF", d: "USD/CHF" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Commodities",
          symbols: [
            { s: "OANDA:XAUUSD", d: "Gold" },
            { s: "OANDA:XAGUSD", d: "Silver" },
            { s: "TVC:USOIL", d: "Crude Oil" },
            { s: "TVC:UKOIL", d: "Brent Oil" },
            { s: "NYMEX:NG1!", d: "Natural Gas" },
          ],
          originalTitle: "Commodities",
        },
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
            { s: "FOREXCOM:DJI", d: "Dow 30" },
            { s: "INDEX:DEU40", d: "DAX 40" },
            { s: "INDEX:NKY", d: "Nikkei 225" },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
            { s: "BITSTAMP:ETHUSD", d: "Ethereum" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
          ],
          originalTitle: "Crypto",
        },
      ],
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}

export default memo(TradingViewMarketOverview);