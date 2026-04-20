import { ImageResponse } from "next/og";

// Image metadata
export const alt = "ZYRO INC — Trade Forex & CFDs on the TM9 Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          background:
            "radial-gradient(ellipse at top right, rgba(212, 175, 55, 0.18) 0%, rgba(0, 0, 0, 1) 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "72px 80px",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.5,
          }}
        />

        {/* Top row — logo mark + brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          {/* Custom Z logo mark */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #f5d87a 0%, #d4af37 50%, #a17f1e 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 900,
              color: "#0a0a0a",
              letterSpacing: "-0.05em",
            }}
          >
            Z
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              ZYRO
              <span style={{ color: "#d4af37", marginLeft: 8 }}>INC</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: "#a3a3a3",
                marginTop: 4,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Online Forex & CFD Broker
            </div>
          </div>
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#d4af37",
              fontWeight: 600,
              marginBottom: 16,
              letterSpacing: "-0.01em",
            }}
          >
            Trade the Markets With
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              background:
                "linear-gradient(135deg, #f5d87a 0%, #d4af37 50%, #a17f1e 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Institutional Precision
          </div>
        </div>

        {/* Bottom row — features + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Feature pills */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              "500+ Instruments",
              "0.0 Spreads",
              "50ms Execution",
              "TM9 Platform",
            ].map((pill) => (
              <div
                key={pill}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(212, 175, 55, 0.35)",
                  background: "rgba(212, 175, 55, 0.08)",
                  fontSize: 18,
                  color: "#e0b837",
                  fontWeight: 600,
                }}
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#737373",
              fontWeight: 500,
            }}
          >
            zyroinc.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}