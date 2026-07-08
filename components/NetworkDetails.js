"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyRpcUrl from "./CopyRpcUrl";
import HyperliquidBox from "./HyperliquidBox";
import Link from "next/link";
import { generateNetworkSlug, generateBlockchainSlug } from "@/libs/networkUtils";
import { NetworkIntro, NetworkCodeSnippet, NetworkFaq } from "./NetworkContent";

/* ── Scroll-entry hook ─────────────────────────────────── */
function useScrollEntry(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useScrollEntry(ref);
  return (
    <div ref={ref} className={`entry ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Status dot ────────────────────────────────────────── */
function StatusDot({ status }) {
  if (status === undefined) return <span className="dot-pending" />;
  if (status) return <span className="dot-online" />;
  return <span className="dot-offline" />;
}

/* ── Main component ────────────────────────────────────── */
const NetworkDetails = ({ blockchain, network }) => {
  const [rpcStatus, setRpcStatus] = useState({});

  useEffect(() => {
    const checkRpcStatus = async () => {
      const results = {};
      await Promise.all(
        network.rpcUrls.map((url) =>
          fetch("/api/check-rpc", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
          })
            .then((r) => r.json())
            .then((d) => { results[url] = d.status === "ok"; })
            .catch(() => { results[url] = false; })
        )
      );
      setRpcStatus(results);
    };
    checkRpcStatus();
  }, [network]);

  if (!blockchain || !network) {
    return <p style={{ padding: "2rem", color: "#787774" }}>Network not found.</p>;
  }

  const otherNetworks = blockchain.networks
    .filter((n) => n.network !== network.network)
    .map((n) => ({ name: n.network, slug: generateNetworkSlug(blockchain.name, n.network) }));

  const blockchainSlug = generateBlockchainSlug(blockchain.name);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      {/* Ambient blob */}
      <div className="ambient-blob" aria-hidden="true" />

      <main style={{ position: "relative", zIndex: 1, background: "#FBFBFA", minHeight: "100vh" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "2.5rem 1.5rem 5rem" }}>

          {/* ── Breadcrumb ──────────────────────────────── */}
          <FadeIn>
            <nav style={{ marginBottom: "2rem" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.8125rem",
                  color: "#787774",
                  textDecoration: "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All blockchains
              </Link>
            </nav>
          </FadeIn>

          {/* ── Page header ─────────────────────────────── */}
          <FadeIn delay={60}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
              {blockchain.logo && (
                <img
                  src={blockchain.logo}
                  alt={`${blockchain.name} logo`}
                  width={48}
                  height={48}
                  style={{ borderRadius: "50%", flexShrink: 0 }}
                />
              )}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
                  <h1
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.15,
                      color: "#111111",
                    }}
                  >
                    {blockchain.name} {network.network}
                  </h1>
                  <span
                    className="tag"
                    style={{ background: "#EDF3EC", color: "#346538", marginTop: "0.15rem" }}
                  >
                    RPC Endpoints
                  </span>
                </div>
                {network.chainId && (
                  <p style={{ fontSize: "0.8125rem", color: "#787774", marginTop: "0.25rem" }}>
                    Chain ID:{" "}
                    <kbd>{network.chainId}</kbd>
                    {" "}
                    &middot; {network.nativeCurrency}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>

          {/* ── Other networks ──────────────────────────── */}
          {otherNetworks.length > 0 && (
            <FadeIn delay={120}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.8125rem", color: "#787774" }}>
                  Other {blockchain.name} networks:
                </span>
                {otherNetworks.map((net, i) => (
                  <Link
                    key={i}
                    href={`/${net.slug}`}
                    style={{
                      fontSize: "0.8125rem",
                      color: "#111111",
                      textDecoration: "none",
                      padding: "0.2rem 0.625rem",
                      border: "1px solid #EAEAEA",
                      borderRadius: "9999px",
                      background: "#FFFFFF",
                      transition: "border-color 150ms ease",
                    }}
                  >
                    {net.name}
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

          {/* ── Add to wallet link ──────────────────────── */}
          <FadeIn delay={160}>
            <Link
              href={`/add-to-wallet/${blockchainSlug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                color: "#787774",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
            >
              How to add {blockchain.name} to MetaMask or other wallets
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>

          {/* ── Intro ───────────────────────────────────── */}
          <FadeIn delay={200}>
            <NetworkIntro blockchain={blockchain} network={network} />
          </FadeIn>

          {/* ── Hyperliquid affiliate box ────────────────── */}
          {blockchain.name === "Hyperliquid" && (
            <FadeIn delay={220}>
              <HyperliquidBox />
            </FadeIn>
          )}

          {/* ── RPC Table ───────────────────────────────── */}
          <FadeIn delay={260}>
            <div
              className="card-minimal"
              style={{ marginBottom: "2.5rem", overflow: "hidden" }}
            >
              <div style={{ overflowX: "auto" }}>
                <table className="table-minimal">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>RPC Endpoint</th>
                      {network.chainId && <th>Chain ID</th>}
                      <th>Currency</th>
                      {network.blockExplorer && <th>Explorer</th>}
                      <th>Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {network.rpcUrls.map((url, idx) => (
                      <tr key={idx}>
                        {/* Status */}
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <StatusDot status={rpcStatus[url]} />
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: rpcStatus[url] === undefined
                                  ? "#787774"
                                  : rpcStatus[url] ? "#346538" : "#9F2F2D",
                              }}
                            >
                              {rpcStatus[url] === undefined ? "Checking" : rpcStatus[url] ? "Online" : "Offline"}
                            </span>
                          </div>
                        </td>

                        {/* RPC URL */}
                        <td style={{ minWidth: "220px", maxWidth: "360px" }}>
                          <CopyRpcUrl url={url} />
                        </td>

                        {/* Chain ID */}
                        {network.chainId && (
                          <td>
                            <kbd>{network.chainId}</kbd>
                          </td>
                        )}

                        {/* Currency */}
                        <td>
                          <span
                            className="tag"
                            style={{ background: "#E1F3FE", color: "#1F6C9F" }}
                          >
                            {network.nativeCurrency}
                          </span>
                        </td>

                        {/* Explorer */}
                        {network.blockExplorer && (
                          <td>
                            <a
                              href={network.blockExplorer}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: "0.8125rem",
                                color: "#787774",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                              }}
                            >
                              Explorer
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M2 8L8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </a>
                          </td>
                        )}

                        {/* Add to wallet */}
                        <td>
                          <button
                            className="btn-ghost-minimal"
                            onClick={() => {
                              if (typeof window.ethereum !== "undefined") {
                                window.ethereum
                                  .request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                      chainId: `0x${parseInt(network.chainId).toString(16)}`,
                                      chainName: `${blockchain.name} ${network.network}`,
                                      nativeCurrency: {
                                        name: network.nativeCurrency,
                                        symbol: network.nativeCurrency,
                                        decimals: 18,
                                      },
                                      rpcUrls: [url],
                                      blockExplorerUrls: network.blockExplorer ? [network.blockExplorer] : [],
                                    }],
                                  })
                                  .catch((err) => console.error(err));
                              } else {
                                alert("Install a Web3 wallet like MetaMask to use this feature.");
                              }
                            }}
                          >
                            Add to wallet
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* ── Code snippet ────────────────────────────── */}
          <FadeIn delay={320}>
            <NetworkCodeSnippet blockchain={blockchain} network={network} />
          </FadeIn>

          {/* ── FAQ ─────────────────────────────────────── */}
          <FadeIn delay={380}>
            <NetworkFaq blockchain={blockchain} network={network} />
          </FadeIn>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default NetworkDetails;
