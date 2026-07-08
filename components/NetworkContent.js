"use client";
import React, { useState } from "react";
import { hexToDecimal, getNetworkFaqs } from "@/libs/networkUtils";

export const NetworkIntro = ({ blockchain, network }) => {
  const title = `${blockchain.name} ${network.network}`;
  const endpointPhrase =
    network.rpcUrls.length === 1
      ? "is a public RPC endpoint"
      : `are ${network.rpcUrls.length} public RPC endpoints`;

  return (
    <p
      style={{
        fontSize: "0.9375rem",
        color: "#787774",
        lineHeight: 1.65,
        marginBottom: "1.5rem",
        maxWidth: "72ch",
      }}
    >
      {title} uses{" "}
      <span style={{ color: "#111111", fontWeight: 500 }}>{network.nativeCurrency}</span> as its
      native currency.
      {network.chainId &&
        ` Chain ID: ${hexToDecimal(network.chainId)} (${network.chainId}).`}{" "}
      Below {endpointPhrase} you can use to connect wallets, dApps, and developer tools to{" "}
      {title}.
    </p>
  );
};

export const NetworkCodeSnippet = ({ blockchain, network }) => {
  const [copied, setCopied] = useState(false);

  if (!network.chainId) return null;

  const title = `${blockchain.name} ${network.network}`;
  const rpcUrl = network.rpcUrls[0];
  const code = `import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("${rpcUrl}");

const network = await provider.getNetwork();
console.log(network.chainId); // ${hexToDecimal(network.chainId)}n`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.25rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#111111",
          marginBottom: "1rem",
        }}
      >
        Connect to {title} with ethers.js
      </h2>

      <div className="code-block" style={{ position: "relative" }}>
        <pre style={{ margin: 0 }}>
          <code
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: "#E2E8F0",
            }}
          >
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: copied ? "#1a2a1a" : "#1E2330",
            border: "1px solid #2D3748",
            borderRadius: "5px",
            color: copied ? "#68D391" : "#A0AEC0",
            fontSize: "0.75rem",
            fontWeight: 500,
            padding: "0.3rem 0.625rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            transition: "all 150ms ease",
          }}
        >
          {copied ? (
            <>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 5.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
                <path d="M7.5 3.5V2A1.5 1.5 0 006 .5H2A1.5 1.5 0 00.5 2v4A1.5 1.5 0 002 7.5h1.5" stroke="currentColor" strokeWidth="1.25"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export const NetworkFaq = ({ blockchain, network }) => {
  const title = `${blockchain.name} ${network.network}`;
  const faqs = getNetworkFaqs(blockchain, network);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.25rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#111111",
          marginBottom: "1.5rem",
        }}
      >
        {title} — common questions
      </h2>

      <div className="accordion-strip">
        {faqs.map((faq, idx) => (
          <details key={idx}>
            <summary>{faq.question}</summary>
            <div className="faq-answer">{faq.answer}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};
