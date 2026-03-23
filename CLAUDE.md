# CLAUDE.md — AI Assistant Guide for rpcnodeslist

## Project Overview

**RPC Node List** (`rpcnodelist.com`) is a Next.js web application that serves as a directory of blockchain RPC endpoints for web3 developers. It allows users to browse networks, check RPC endpoint health, and add networks to MetaMask.

The codebase is built on the **ShipFast** SaaS boilerplate and extends it with blockchain-specific functionality.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + DaisyUI |
| Database | MongoDB via Mongoose |
| Auth | NextAuth v4 |
| Payments | Stripe |
| Email | Mailgun + Nodemailer |
| Analytics | Vercel Analytics, Plausible, Beam |
| Support | Crisp Chat |

---

## Directory Structure

```
rpcnodeslist/
├── app/                        # Next.js App Router
│   ├── api/                    # API route handlers
│   │   ├── auth/[...nextauth]/ # NextAuth handler
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
- Slug generation logic lives in `libs/networkUtils.js`:
  - `generateNetworkSlug(blockchainName, networkName)` — creates the URL slug
  - `findNetworkFromSlug(blockchains, slug)` — reverse lookup
  - `getAllNetworkSlugs(blockchains)` — generates all static paths

- **Legacy redirects**: `next.config.js` automatically creates permanent (301) redirects from `/{blockchain}` → `/{blockchain}-mainnet` (or first network if no mainnet exists).

- The dynamic route `app/[networkSlug]/page.js` uses `generateStaticParams()` for static generation at build time.

---

## Key Libraries (`libs/`)

| File | Purpose |
|---|---|
| `api.js` | Axios client with 401 redirect to login |
| `mongo.js` | MongoDB connection singleton |
| `mongoose.js` | Mongoose connection helper |
| `next-auth.js` | NextAuth config (Google OAuth + Email) |
| `stripe.js` | Stripe client initialization |
| `mailgun.js` | Mailgun email sending helper |
| `networkUtils.js` | Slug generation and network lookup utilities |
| `seo.js` | SEO metadata helpers |
| `gpt.js` | GPT integration (if used) |

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
- **Styling**: Tailwind utility classes + DaisyUI component classes (e.g., `btn`, `card`, `modal`)

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

1. **RPC cache has no TTL** — the in-memory cache in `/api/check-rpc` never expires. A server restart clears it.
2. **Non-EVM health checks not supported** — `eth_blockNumber` is used universally; non-EVM chains (Algorand, etc.) will always show as failed.
3. **No test suite** — changes should be manually verified.
4. **ShipFast boilerplate remnants** — some config values (e.g., Mailgun `fromNoReply` still references `shipfa.st`) may need updating for production.
5. **Stripe plans in config.js** — the plan features listed are placeholder values from the original boilerplate and don't reflect actual product features.
