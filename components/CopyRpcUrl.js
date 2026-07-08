"use client";
import React, { useState } from "react";

const CopyRpcUrl = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-3 min-w-0">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          color: "#787774",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          minWidth: 0,
          flex: 1,
        }}
        title={url}
      >
        {url}
      </span>
      <button onClick={handleCopy} className="btn-ghost-minimal" style={{ flexShrink: 0 }}>
        {copied ? (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 6l3 3 6-6" stroke="#346538" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
              <path d="M8 4V2.5A1.5 1.5 0 006.5 1H2.5A1.5 1.5 0 001 2.5v4A1.5 1.5 0 002.5 8H4" stroke="currentColor" strokeWidth="1.25"/>
            </svg>
            Copy
          </>
        )}
      </button>

      {copied && (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#111111",
            color: "#FFFFFF",
            fontSize: "0.8125rem",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default CopyRpcUrl;
