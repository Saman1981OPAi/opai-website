# OPAi Website

Official corporate website for [opaiapp.com](https://opaiapp.com).

Current status: Testing / Pre-launch

OPAi, Operational Police Ai, is a public-facing brand and product website for OPAi Police, a productivity and AI assistance tool designed for Canadian police officers. The site introduces the product vision, supports PTSD awareness, provides founder context, and publishes pre-launch download destinations for iOS and Android.

## Project 001

This repository implements Project 001 - Website from the OPAi Master Project Roadmap.

The website establishes the OPAi brand foundation before later roadmap work begins on the design system, mobile app, backend, database, authentication, AI platform, police workflow modules, security, and deployment automation.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Static export support
- Static export support for the current GitHub Pages deployment
- Vercel-ready project structure for future migration

## Pages

- Home
- Features
- OPAi Police
- PTSD Awareness
- Founder Story
- Download
- Contact
- Privacy Policy
- Terms of Service

## Product Positioning

The website must use Testing / Pre-launch language until the app is publicly released.

Required public disclaimers:

- OPAi Police is a productivity and AI assistance tool.
- OPAi Police is not a replacement for official police systems, supervision, service policy, legal advice, medical advice, or professional judgment.
- AI-generated responses may be incomplete or inaccurate and must be verified.
- PTSD awareness content is educational only and is not medical treatment, diagnosis, therapy, or crisis intervention.

## Site Visit Counter

The home page includes a visible visit counter starting from 100,000. It increments on page navigation, refreshes, back/forward visits, and manual repeat-count interaction in the same browser. This counter is privacy-safe for the static website: it uses local browser storage only and does not add analytics, cookies, IP tracking, advertising, third-party scripts, or a backend database.

## Brand and Content Rules

- Use a black / dark navy foundation.
- Use police blue accents.
- Use light green for PTSD awareness.
- Use Canadian maple leaf symbolism where appropriate.
- Do not use official police service logos.
- Do not use government badges or protected insignia.
- Do not use RCMP, OPP, TPS, YRP, or other service-specific marks.
- Do not use copyrighted third-party imagery unless properly licensed.
- Do not add analytics, advertising, tracking, cookies, payments, or subscription logic unless explicitly approved.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Run validation:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Environment Variables

The website currently does not require runtime environment variables.

The current website does not require deployment secrets for GitHub Pages.

Future Vercel deployment may require hosting secrets in GitHub or Vercel:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Use `.env.example` as a placeholder reference. Do not commit real secrets.

## Deployment

The live website currently deploys through GitHub Pages. Sprint 001 preserves that live deployment path so `opaiapp.com` remains stable during review.

The repository is documented for a future Vercel migration, but Vercel deployment automation should not be activated until the Vercel project, required secrets, and DNS records are confirmed.

Future Vercel setup:

1. Create or connect the Vercel project.
2. Add the required Vercel secrets to GitHub.
3. Add `opaiapp.com` and `www.opaiapp.com` to Vercel.
4. Update DNS only after Vercel verifies the required records.
5. Deploy reviewed code to staging or production.

See [docs/deployment.md](docs/deployment.md) for deployment details.

## SEO and Google Indexing

See [docs/seo-readiness.md](docs/seo-readiness.md) for robots, sitemap, metadata, canonical URL, structured data, and Google Search Console readiness notes.

## App Store URLs

Static aliases keep the short App Store URLs available without removing the canonical pages:

- `/privacy` aliases `/privacy-policy`
- `/terms` aliases `/terms-of-service`
- `/support` aliases `/contact`

See [docs/app-store-url-aliases.md](docs/app-store-url-aliases.md) for the canonical URL policy.

## Sprint 001 Documentation

- [Project audit](docs/project-audit.md)
- [Dependency map](docs/dependency-map.md)
- [Sprint 001 plan](docs/sprint-001-plan.md)

## Review Notes

Sprint 001 is limited to the public website foundation. Mobile app, backend, database, authentication, AI platform, police workflow modules, payment logic, analytics, and production user accounts are intentionally out of scope.
