# A.I.R.O – Intelligent Revenue Operations

## Overview

A.I.R.O is a marketing landing page for a B2B revenue operations consultancy targeting the UK market. The site showcases AI-driven demand generation services combined with high-touch human strategy, with 25+ years of B2B expertise. Key features include:

- A hero section with the core value proposition
- A "Strategy Session" lead capture form with UK GDPR-compliant consent
- Bot prevention (honeypot field + timestamp check)
- Schema.org JSON-LD structured data for SEO
- Framer Motion animations for scroll-triggered transitions
- Form submission via Formspree (external service)

The project is a largely static, single-page frontend application built on a full-stack template. The database layer exists only as a placeholder (dummy table) and is not actively used by the landing page.

## User Preferences

Preferred communication style: Simple, everyday language.

- Use **UK English** throughout all copy, comments, and content (British spelling: "capitalise", "optimise", "behaviour", etc.)
- Keep all content aligned with the A.I.R.O brand: professional, authoritative, modern dark theme
- The landing page is the core deliverable — avoid over-engineering the backend
- Bot prevention and UK GDPR compliance are non-negotiable requirements

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with two routes: `/` (Home) and a 404 fallback
- **Styling**: Tailwind CSS with a custom dark theme (deep navy background, blue primary accent, cyan accent). CSS variables drive all colours via HSL values
- **Component Library**: shadcn/ui (New York style) built on Radix UI primitives — full suite of accessible components in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered fade/slide-up effects on landing page sections
- **State & Data Fetching**: TanStack React Query for server state; react-hook-form + Zod for form validation
- **Fonts**: DM Sans (body, `--font-sans`) and Sora (display headings, `--font-display`), loaded from Google Fonts

### Key Frontend Components

| Component | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Main landing page — hero, features, sales workflow, lead form, CTA |
| `client/src/components/LeadForm.tsx` | Strategy Session form with GDPR consent, honeypot (`website_url`), and timestamp bot check |
| `client/src/components/Seo.tsx` | Dynamic meta tag management (OG, Twitter, description) |
| `client/src/hooks/use-contact.ts` | TanStack mutation that posts to Formspree; client-side bot detection |

### Backend Architecture

- **Runtime**: Node.js with Express 5, run via `tsx` in development
- **Entry**: `server/index.ts` → registers routes → serves static files in production
- **Routes**: `server/routes.ts` — currently only a dummy `/api/dummy` GET endpoint
- **Storage**: `server/storage.ts` — `MemStorage` class implementing `IStorage`; no real database reads/writes for the landing page
- **Development**: Vite dev server runs as Express middleware (`server/vite.ts`) with HMR over WebSocket at `/vite-hmr`
- **Production Build**: `script/build.ts` — runs Vite for the client, then esbuild to bundle the server into `dist/index.cjs`

### Data Storage

- **Database**: PostgreSQL via Drizzle ORM (`drizzle-orm/pg-core`)
- **Schema**: `shared/schema.ts` — single `dummy` table with a serial `id`. This satisfies the Drizzle/Postgres template setup but is not functionally used
- **Migrations**: Drizzle Kit, output to `./migrations/`, configured in `drizzle.config.ts`
- **Sessions**: `connect-pg-simple` is listed as a dependency (available if session persistence is needed later)

### Path Aliases

| Alias | Resolves To |
|---|---|
| `@/*` | `client/src/*` |
| `@shared/*` | `shared/*` |
| `@assets/*` | `attached_assets/*` |

### SEO & Compliance Architecture

- **Structured Data**: JSON-LD `ProfessionalService` schema injected into the page, including `serviceType`, `areaServed` (United Kingdom), and an `OfferCatalog` of services
- **Favicon**: AI-generated brand icon at `client/public/favicon.png`, linked as both standard favicon and Apple touch icon
- **Open Graph**: `og:title`, `og:description`, `og:image`, `og:locale` (en_GB), `og:site_name` — description highlights UK market share and bilateral trade USP
- **Twitter Cards**: `summary_large_image` card with matching title, description, and image
- **HTML lang**: Set to `en-GB` for UK locale
- **UK GDPR**: Mandatory (non-pre-ticked) consent checkbox; privacy modal with Data Protection Act 2018 notice
- **Bot Prevention**: Two-layer client-side check — honeypot hidden field (`website_url`) and a form mount timestamp (rejects submissions under 3 seconds)
- **Semantic SEO**: Target keywords "Revenue Operations", "Bilateral Trade", "AI Sales Agents" placed in semantic `<section>` tags

## External Dependencies

### Form Submission — Formspree

- **Service**: [Formspree](https://formspree.io)
- **Config**: Set `VITE_FORMSPREE_ID` environment variable to your form ID. Falls back to `"mock_id"` in development (submissions will silently succeed client-side)
- **Endpoint**: `https://formspree.io/f/{VITE_FORMSPREE_ID}` — POST with JSON payload
- **Fields sent**: `name`, `email`, `company`, `consent`, `_gotcha` (honeypot), `_timestamp`

### Database — PostgreSQL

- **Required env var**: `DATABASE_URL` (full connection string)
- **ORM**: Drizzle ORM with `drizzle-kit push` for schema syncing
- **Note**: The database is currently a placeholder. If adding real features (e.g., contact storage, session auth), extend `shared/schema.ts` and implement `IStorage` methods in `server/storage.ts`

### Replit-Specific Plugins (Dev Only)

- `@replit/vite-plugin-runtime-error-modal` — always active in dev
- `@replit/vite-plugin-cartographer` — active only when `REPL_ID` is set
- `@replit/vite-plugin-dev-banner` — active only when `REPL_ID` is set

### Google Fonts

- DM Sans and Sora loaded via `<link>` in `client/index.html` and `client/src/index.css`
- No API key required; loaded from `fonts.googleapis.com`

### Key npm Packages

| Package | Role |
|---|---|
| `framer-motion` | Page and scroll animations |
| `wouter` | Client-side routing |
| `@tanstack/react-query` | Server state and mutations |
| `react-hook-form` + `@hookform/resolvers` | Form state and Zod validation |
| `zod` | Schema validation (shared between client and server) |
| `drizzle-orm` + `pg` | Database ORM and PostgreSQL driver |
| `lucide-react` | Icon set |
| `tailwind-merge` + `clsx` | Conditional class merging |
| `class-variance-authority` | Component variant styling |