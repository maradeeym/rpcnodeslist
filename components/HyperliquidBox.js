import React from "react";
import Link from "next/link";
import Image from "next/image";

const HyperliquidBox = () => {
  return (
    <div
      style={{
        background: "#0D0D0D",
        border: "1px solid #1E1E1E",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "2rem",
        maxWidth: "26rem",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
        <div style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
          <Image
            src="https://coin-images.coingecko.com/coins/images/50882/large/hyperliquid.jpg"
            alt="Hyperliquid"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
            Hyperliquid
          </p>
          <p style={{ fontSize: "0.75rem", color: "#555", marginTop: "0.1rem" }}>
            Decentralized Perpetuals Exchange
          </p>
        </div>
      </div>

      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
        {[
          "Trade perps with up to 50x leverage",
          "Sub-second finality, no gas fees",
          "Fully on-chain order book",
        ].map((feat, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "#4ADE80",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "0.8125rem", color: "#9CA3AF" }}>{feat}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="https://app.hyperliquid.xyz/join/RPCNODELIST"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          width: "100%",
          padding: "0.625rem 1rem",
          background: "#4ADE80",
          color: "#0D0D0D",
          fontWeight: 600,
          fontSize: "0.875rem",
          borderRadius: "7px",
          textDecoration: "none",
          transition: "background 200ms ease",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#22C55E"}
        onMouseLeave={e => e.currentTarget.style.background = "#4ADE80"}
      >
        Start Trading on Hyperliquid
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 6.5h8M7.5 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
};

export default HyperliquidBox;
