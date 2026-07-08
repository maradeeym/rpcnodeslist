# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RPC Node List** (`rpcnodelist.com`) is a Next.js web application that serves as a directory of blockchain RPC endpoints for web3 developers. It allows users to browse networks, check RPC endpoint health, and add networks to MetaMask.

The codebase is built on the **ShipFast** SaaS boilerplate and extends it with blockchain-specific functionality. In practice, the product that ships is just the public RPC directory — `app/rpcdb.js` plus the pages/components that read it. The auth/payments/dashboard machinery below is inherited boilerplate that is **not wired up** (see "Auth & SaaS features are dormant" under Known Limitations) — don't assume it works, and don't spend time on it unless the task specifically asks for it.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Custom design system in `app/globals.css` (see "Styling & Design System" below); Tailwind + DaisyUI are configured but largely unused by the live UI |
| Database | MongoDB via Mongoose |
| Auth | NextAuth v4 (present in code, **disabled** — see limitations) |
| Payments | Stripe (present in code, unused by the live UI) |
| Email | Mailgun + Nodemailer |
| Analytics | Vercel Analytics, Beam Analytics (`next-plausible` is a dependency but unused in code) |
| Support | Crisp Chat |

---

## Directory Structure

```
rpcnodeslist/
├── app/                        # Next.js App Router
│   ├── api/                    # API route handlers
│   │   ├── auth/[...nextauth]/ # NextAuth handler (dormant, see Known Limitations)
│   │   ├── check-rpc/          # RPC endpoint health check
│   │   ├── lead/               # Email lead capture
│   │   ├── stripe/             # Stripe checkout & portal
│   │   └── webhook/            # Stripe & Mailgun webhooks
│   ├── [networkSlug]/          # Dynamic network detail pages
│   ├── add-to-wallet/          # MetaMask wallet integration
│   ├── dashboard/              # Protected user dashboard
│   ├── layout.js               # Root layout (fonts, analytics, providers)
│   ├── page.js                 # Homepage with blockchain search/browse
│   ├── error.js                # Error boundary
│   ├── not-found.js            # 404 page
│   └── rpcdb.js                # Blockchain RPC data (THE core dataset)
├── components/                 # Reusable React components
├── libs/                       # Utility modules
├── models/                     # Mongoose schemas
│   ├── User.js                 # User model (with Stripe fields)
│   ├── Lead.js                 # Email lead model
│   └── plugins/toJSON.js       # Mongoose serialization plugin
├── config.js                   # Central app configuration
├── next.config.js              # Next.js config + URL redirects
├── next-sitemap.config.js      # Sitemap generation
├── tailwind.config.js          # Tailwind + DaisyUI theme config
└── jsconfig.json               # Path aliases (@/ → root)
```

---

## Core Data: `app/rpcdb.js`

This is the heart of the application. It exports an array of blockchain objects:

```js
{
  name: "Ethereum",                        // Blockchain name
  logo: "https://...",                     // CoinGecko logo URL
  networks: [
    {
      network: "Mainnet",                  // Network name
      rpcUrls: ["https://..."],            // List of public RPC endpoints
      chainId: "0x1",                      // Hex chain ID (empty string for non-EVM)
      nativeCurrency: "ETH",               // Token symbol
      blockExplorer: "https://etherscan.io" // Block explorer URL (optional)
    }
  ]
}
```

**Key rules when modifying `rpcdb.js`:**
- Network names must be consistent casing — slugs are generated from them
- `chainId` can be an empty string for non-EVM chains (e.g., Algorand)
- `blockExplorer` is optional — omit the key if not available
- Each network slug is auto-generated as `{blockchain-name}-{network-name}` (lowercased, spaces → hyphens)

---

## URL & Routing Conventions

- Network pages: `/{blockchainSlug}-{networkSlug}` (e.g., `/ethereum-mainnet`, `/arbitrum-nova`)
- Wallet guide pages: `/add-to-wallet/{blockchainSlug}` (one per blockchain, via `app/add-to-wallet/[addToMetamask]/page.js`)
- Slug generation and lookup logic lives in `libs/networkUtils.js`:
  - `generateBlockchainSlug(blockchainName)` / `generateNetworkSlug(blockchainName, networkName)` — build slugs
  - `findNetworkFromSlug(blockchains, slug)` / `findBlockchainFromSlug(blockchains, slug)` — reverse lookups used by the two dynamic routes
  - `getAllNetworkSlugs(blockchains)` — full slug list (currently unused for static params, see below)
  - `hexToDecimal(hexChainId)`, `getNetworkFaqs(blockchain, network)` — helpers for the on-page FAQ + FAQPage schema

- **Legacy redirects**: `next.config.js` automatically creates permanent (301) redirects from `/{blockchain}` → `/{blockchain}-mainnet` (or first network if no mainnet exists).

- **No `generateStaticParams()`**: `app/[networkSlug]/page.js` and `app/add-to-wallet/[addToMetamask]/page.js` are server components that only export `generateMetadata()`; pages are rendered per-request (SSR/dynamic), not statically generated at build time. `components/generateDynamicPaths.js` is a separate, parallel implementation of the slug logic (duplicated, not imported from `networkUtils.js`) used only by `next-sitemap.config.js`'s `additionalPaths` to list every network + wallet-guide URL in the sitemap.

---

## Rendering Architecture (network & home pages)

- `app/[networkSlug]/page.js` and `app/add-to-wallet/[addToMetamask]/page.js` are thin **server components**: they resolve the slug via `networkUtils.js`, export `generateMetadata()` for SEO, and hand the resolved `blockchain`/`network` objects to a client component to render.
- `app/page.js` (home) and `components/NetworkDetails.js` are `"use client"` components:
  - The homepage loads the **entire** `rpcdb.js` array into the browser and filters it client-side as the user types in the search box — there's no server-side search/pagination. Blockchains render as a bento grid of cards (`BlockchainCard`), each listing its networks as links.
  - `NetworkDetails.js` fires one `POST /api/check-rpc` request per RPC URL in parallel (`Promise.all`) on mount to populate the online/offline/pending status dots (`StatusDot`, styled via `.dot-online`/`.dot-offline`/`.dot-pending` in `globals.css` — not emoji), and composes `CopyRpcUrl.js`, `NetworkContent.js` (`NetworkIntro`, `NetworkCodeSnippet`, `NetworkFaq` — the intro copy, ethers.js snippet, and FAQ/FAQPage schema block), and conditionally `HyperliquidBox.js` (an affiliate CTA box rendered **only** when `blockchain.name === "Hyperliquid"`).
  - Both `app/page.js` and `NetworkDetails.js` use a shared `useScrollEntry`/`FadeIn` pattern (an `IntersectionObserver` hook, duplicated in both files rather than extracted) to fade/slide sections in as the user scrolls — driven by the `.entry`/`.entry.visible` CSS classes.
- The "Add to Wallet" button calls `window.ethereum.request({ method: 'wallet_addEthereumChain', ... })` directly from the browser — no backend involvement.

---

## Styling & Design System

The UI was redesigned (see git history: "Redesign site with minimalist editorial UI") around a custom, hand-rolled design system rather than DaisyUI components:

- **Fonts** are loaded via `next/font/google` in `app/layout.js` and exposed as CSS custom properties: `--font-sans` (Plus Jakarta Sans, body), `--font-serif` (Newsreader, headings/titles), `--font-mono` (JetBrains Mono, code/chain IDs).
- **Colors and primitives** are mostly hard-coded inline (`style={{ color: "#111111" }}`, etc.) rather than Tailwind utility classes — e.g. ink `#111111`, muted text `#787774`, canvas background `#FBFBFA`, border `#EAEAEA`. Tailwind's `theme.extend.colors` in `tailwind.config.js` defines matching tokens (`canvas`, `surface`, `border`, `ink`, `muted`), but components largely don't reference them.
- **Reusable visual patterns live as plain CSS classes in `app/globals.css`**, not Tailwind/DaisyUI classes: `.card-minimal` (bordered card), `.btn-ink` / `.btn-ghost-minimal` (buttons), `.table-minimal` (RPC table), `.accordion-strip` (FAQ `<details>` accordion), `.code-block` (dark code snippet), `.tag` (pill badges), `.dot-online` / `.dot-offline` / `.dot-pending` (status indicators), `.ambient-blob` (decorative background blur), `.entry` / `.stagger` (scroll-in animation).
- Tailwind + DaisyUI remain installed and configured (`tailwind.config.js` still lists 30 DaisyUI themes), but the live, redesigned components (`Header.js`, `Footer.js`, `NetworkDetails.js`, `NetworkContent.js`, `app/page.js`, `HyperliquidBox.js`) use inline `style={}` objects and the custom classes above almost exclusively. Don't assume a DaisyUI class (`btn`, `card`, `modal`) will pick up the current visual style — check `globals.css` first and match the existing inline-style/custom-class convention when touching these files.
- `next.config.js` whitelists image domains for `next/image`; `coin-images.coingecko.com` was added for the Hyperliquid affiliate box logo.

---

## Key Libraries (`libs/`)

| File | Purpose |
|---|---|
| `api.js` | Axios client with 401 redirect to login |
| `mongo.js` | MongoDB connection singleton (used only by NextAuth's Mongo adapter) |
| `mongoose.js` | Mongoose connection helper |
| `next-auth.js` | NextAuth config — **the entire `authOptions` export is commented out** (dead code today, see Known Limitations) |
| `stripe.js` | Stripe client initialization |
| `mailgun.js` | Mailgun email sending helper |
| `networkUtils.js` | Slug generation, network/blockchain lookup, and FAQ-building utilities |
| `seo.js` | SEO metadata helpers |
| `gpt.js` | GPT integration (unused elsewhere in the app) |

---

## Configuration (`config.js`)

Central configuration object. Key fields:

```js
{
  appName: "RPC Node List",
  domainName: "rpcnodelist.com",
  stripe: { plans: [...] },          // Pricing plans with Stripe price IDs
  mailgun: { subdomain, fromNoReply, fromAdmin, supportEmail },
  colors: { theme: "light", main },  // DaisyUI theme
  auth: { loginUrl, callbackUrl }    // Auth redirect paths
}
```

Stripe `priceId` switches between dev/prod via `process.env.NODE_ENV`.

---

## Environment Variables

See `.env.example` for the full list. Required variables:

```
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
MAILGUN_API_KEY=
MONGODB_URI=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## Development Commands

```bash
npm run dev        # Start local dev server (http://localhost:3000)
npm run build      # Production build (also runs next-sitemap via postbuild)
npm run start      # Start production server
npm run lint       # ESLint check
```

No test framework is configured — there are no unit/integration tests.

---

## Component Conventions

- **Naming**: PascalCase files (e.g., `NetworkDetails.js`, `CopyRpcUrl.js`)
- **Client components**: Add `"use client"` directive at the top when using hooks or browser APIs
- **Server components**: Default in App Router — no directive needed
- **Imports**: Use `@/` path alias (e.g., `import config from "@/config"`)
- **Toasts**: Use `react-hot-toast` for user-facing feedback
- **Styling**: In the redesigned RPC-directory components (home, network, header, footer), match the existing pattern of inline `style={}` objects plus the custom classes defined in `app/globals.css` — see "Styling & Design System" above. Older/dormant boilerplate components (dashboard, pricing, testimonials, etc.) still use Tailwind + DaisyUI classes (`btn`, `card`, `modal`); don't mix the two conventions within one component.

---

## API Route Conventions

All API routes use the Next.js App Router `route.js` format:

```js
export async function GET(req) { ... }
export async function POST(req) { ... }
```

- Parse JSON body with `await req.json()`
- Return responses with `new Response(JSON.stringify(...), { status: ... })`
- Webhook routes validate signatures before processing (Stripe: `stripe.webhooks.constructEvent`)

---

## RPC Health Check (`/api/check-rpc`)

- Accepts `POST` with `{ url: "https://..." }`
- Sends an `eth_blockNumber` JSON-RPC call to the endpoint
- Uses an in-memory `Map` for caching responses (no expiry — cache lives for the server process lifetime)
- Returns `{ status: 'ok', data: ... }` or `{ status: 'error', message: ... }`
- **Limitation**: Only works for EVM-compatible chains (uses Ethereum JSON-RPC)

---

## Database Models

### User
```js
{
  name, email, image,           // From OAuth
  customerId,                   // Stripe customer ID
  priceId,                      // Stripe price ID of active plan
  hasAccess: Boolean            // Whether user has paid access
}
```

### Lead
```js
{
  email,                        // Captured email address
  createdAt                     // Timestamp
}
```

Both models use the `toJSON` plugin which removes `_id`/`__v` and adds `id`.

---

## Adding a New Blockchain

1. Open `app/rpcdb.js`
2. Add a new entry to the `blockchains` array following the existing structure
3. Ensure `network` names are title-cased for consistency
4. For EVM chains, always include `chainId` in hex (`0x...`)
5. The slug and routes are generated automatically — no other files need changes
6. Run `npm run build` to regenerate the sitemap

---

## Deployment Notes

- Deployed on **Vercel** (inferred from `@vercel/analytics` dependency and project structure)
- Sitemap is generated at build time via `next-sitemap`
- No CI/CD configuration files exist in the repo — deployments likely triggered via Vercel GitHub integration
- Image domains must be whitelisted in `next.config.js` for `<Image>` components

---

## Known Limitations / Things to Be Aware Of

1. **Auth & SaaS features are dormant.** `libs/next-auth.js` exports `authOptions` from inside a block comment — the whole Google OAuth / email magic-link / MongoDB adapter config is commented out, so `authOptions` is `undefined` at runtime. `app/api/auth/[...nextauth]/route.js` and `app/dashboard/layout.js` still import and call it, and the live `components/Header.js` has no sign-in link at all (its CTA is a GitHub link to edit `rpcdb.js` directly). Treat `/dashboard`, Stripe checkout/portal, and login as **non-functional boilerplate**, not real features, unless a task explicitly asks you to (re)implement them.
2. **RPC cache has no TTL** — the in-memory cache in `/api/check-rpc` never expires. A server restart clears it.
3. **Non-EVM health checks not supported** — `eth_blockNumber` is used universally; non-EVM chains (Algorand, etc.) will always show as failed.
4. **No test suite** — changes should be manually verified (start `npm run dev` and check the affected network/homepage in a browser).
5. **Sitemap slug logic is duplicated** — `components/generateDynamicPaths.js` reimplements slug generation from `libs/networkUtils.js` instead of importing it. If you change slug format, update both.
6. **ShipFast boilerplate remnants** — some config values (e.g., Mailgun `fromNoReply` still references `shipfa.st`) may need updating for production.
7. **Stripe plans in config.js** — the plan features listed are placeholder values from the original boilerplate and don't reflect actual product features.
8. **Dead pre-redesign components** — `components/RpcList.js`, `BlockchainDetails.js`, `BlockchainButtons.js`, and `BlockchainFilter.js` are not imported anywhere; they appear to be an earlier implementation of the network-listing/RPC-table UI that `app/page.js` and `NetworkDetails.js` superseded. Don't extend them assuming they're live — check for real imports first.
9. **Two styling conventions coexist** — the live RPC-directory surfaces use the custom `globals.css` design system (inline styles + custom classes), while other boilerplate components still use Tailwind/DaisyUI classes. See "Styling & Design System" above before editing any component.
10. **`/add-to-wallet/{blockchainSlug}` pages missed the redesign** — `AddBlockchainGuide.js` and `AddToWalletButtons.js` still render with old DaisyUI/Tailwind classes (`bg-base-200`, `btn btn-accent`, `border-gray-300` table, system-ui headings), visually inconsistent with the redesigned home/network pages. They only pick up the new look indirectly via the shared `Header.js` and `CopyRpcUrl.js` components. Treat this page as due for a redesign pass, not as an already-matching page, if a task touches it.
