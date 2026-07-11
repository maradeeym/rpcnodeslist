import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags({
  title: "RPC Node List | RPC Endpoints for All Blockchains",
  description: "Find RPC node endpoints for all blockchain networks.",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      {config.domainName && (
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="94bFn+cRR8fKcufCAwcmyg"
            async
          />
        </head>
      )}
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
