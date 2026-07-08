"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import blockchains from "./rpcdb";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateNetworkSlug } from "@/libs/networkUtils";

/* ── Scroll-entry hook ─────────────────────────────────── */
function useScrollEntry(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useScrollEntry(ref);
  return (
    <div
      ref={ref}
      className={`entry ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Blockchain card ───────────────────────────────────── */
function BlockchainCard({ blockchain, index }) {
  const ref = useRef(null);
  useScrollEntry(ref);

  return (
    <div
      ref={ref}
      className="entry card-minimal flex flex-col"
      style={{
        padding: "1.5rem",
        animationDelay: `${(index % 9) * 60}ms`,
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-4">
        {blockchain.logo ? (
          <img
            src={blockchain.logo}
            alt={`${blockchain.name} logo`}
            width={36}
            height={36}
            style={{ borderRadius: "50%", flexShrink: 0 }}
          />
        ) : (
          <div
            style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#F7F6F3",
              border: "1px solid #EAEAEA",
              flexShrink: 0,
            }}
          />
        )}
        <h2
          style={{
            fontWeight: 600,
            fontSize: "0.9375rem",
            color: "#111111",
            letterSpacing: "-0.01em",
          }}
        >
          {blockchain.name}
        </h2>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #EAEAEA", marginBottom: "0.875rem" }} />

      {/* Network links */}
      <div className="flex flex-col gap-1.5 mt-auto">
        {blockchain.networks.map((network, nIdx) => {
          const slug = generateNetworkSlug(blockchain.name, network.network);
          return (
            <Link
              key={nIdx}
              href={`/${slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem 0.75rem",
                borderRadius: "6px",
                background: "#F7F6F3",
                fontSize: "0.8125rem",
                color: "#111111",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background 150ms ease",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#EAEAEA"}
              onMouseLeave={e => e.currentTarget.style.background = "#F7F6F3"}
            >
              <span>{network.network}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, color: "#787774" }}>
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = blockchains.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      {/* Ambient blob */}
      <div className="ambient-blob" aria-hidden="true" />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* ── Hero ───────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "5rem 1.5rem 4rem",
          }}
        >
          <FadeIn>
            <div
              className="tag"
              style={{
                background: "#EDF3EC",
                color: "#346538",
                marginBottom: "1.5rem",
              }}
            >
              {blockchains.length} blockchains
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#111111",
                maxWidth: "28ch",
                marginBottom: "1.25rem",
              }}
            >
              RPC Endpoints for Every Blockchain
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "#787774",
                lineHeight: 1.6,
                maxWidth: "52ch",
                marginBottom: "2.5rem",
              }}
            >
              Public endpoints for wallets, dApps, and developer tools.
              Copy an RPC URL or add a network directly to your wallet.
            </p>
          </FadeIn>

          {/* Search */}
          <FadeIn delay={240}>
            <div style={{ maxWidth: "28rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#FFFFFF",
                  border: "1px solid #EAEAEA",
                  borderRadius: "8px",
                  padding: "0.625rem 1rem",
                  transition: "border-color 200ms ease",
                }}
                onFocusCapture={e => e.currentTarget.style.borderColor = "#787774"}
                onBlurCapture={e => e.currentTarget.style.borderColor = "#EAEAEA"}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ color: "#787774", flexShrink: 0 }}>
                  <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.25"/>
                  <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search blockchains..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "0.9375rem",
                    color: "#111111",
                    width: "100%",
                    fontFamily: "var(--font-sans)",
                  }}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    style={{ color: "#787774", flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    aria-label="Clear search"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Grid ───────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem 6rem",
          }}
        >
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {filtered.map((blockchain, idx) => (
                <BlockchainCard key={idx} blockchain={blockchain} index={idx} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "#787774",
                fontSize: "0.9375rem",
              }}
            >
              No blockchains found for &ldquo;{query}&rdquo;
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
