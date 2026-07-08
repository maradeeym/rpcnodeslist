"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      style={{
        background: "rgba(251,251,250,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #EAEAEA",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        className="flex items-center justify-between px-6 py-3 mx-auto"
        style={{ maxWidth: "72rem" }}
        aria-label="Global"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          title={`${config.appName} homepage`}
        >
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            width={28}
            height={28}
            placeholder="blur"
            priority
            className="rounded-md"
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              color: "#111111",
              letterSpacing: "-0.01em",
            }}
          >
            RPC Node List
          </span>
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/maradeeym/rpcnodeslist/blob/main/app/rpcdb.js"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            Add your RPC
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="flex md:hidden items-center justify-center p-2 rounded-lg"
          style={{ border: "1px solid #EAEAEA", background: "transparent" }}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="#111111" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.12)" }}
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 top-0 bottom-0 flex flex-col p-6"
            style={{
              width: "min(320px, 90vw)",
              background: "#FBFBFA",
              borderLeft: "1px solid #EAEAEA",
            }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Image src={logo} alt="logo" width={24} height={24} className="rounded-md" />
                <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#111111" }}>
                  RPC Node List
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                style={{ color: "#787774", padding: "0.25rem" }}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1l16 16M17 1L1 17" stroke="#111111" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="mt-auto">
              <a
                href="https://github.com/maradeeym/rpcnodeslist/blob/main/app/rpcdb.js"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Add your RPC
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
