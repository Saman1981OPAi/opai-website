# SEO: Google Indexing and Search Console Readiness

## Production Target

Primary indexable domain:

- `https://opaiapp.com/`

The `www` hostname should redirect to the non-www production domain:

- `https://www.opaiapp.com/` -> `https://opaiapp.com/`

## Indexing Status

The website is intended to be indexable by Google. The app exports metadata with:

- `robots.index: true`
- `robots.follow: true`
- Googlebot large image previews enabled
- No intentional `noindex` directives

The public site does not require login and pages are statically rendered/exported by Next.js, making the HTML crawlable without client-side authentication.

## Robots

Generated route:

- `app/robots.ts`
- Production URL: `https://opaiapp.com/robots.txt`

Expected output:

```txt
User-Agent: *
Allow: /

Sitemap: https://opaiapp.com/sitemap.xml
```

## Sitemap

Generated route:

- `app/sitemap.ts`
- Production URL: `https://opaiapp.com/sitemap.xml`

The sitemap is generated from the shared SEO page map in `lib/site.ts` and includes:

- `/`
- `/about/`
- `/features/`
- `/opai-police/`
- `/ptsd-awareness/`
- `/founder-story/`
- `/download/`
- `/contact/`
- `/privacy-policy/`
- `/terms-of-service/`

## Metadata

Each primary page uses shared metadata from `createPageMetadata()` in `lib/site.ts`, including:

- Page title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- SEO keywords
- Explicit index/follow robots metadata

Primary keywords:

- OPAi
- OPAi Police
- Canadian police AI
- AI assistant for law enforcement
- police productivity app
- PTSD awareness
- Canadian policing technology

## Structured Data

The root layout emits JSON-LD structured data for:

- `Organization`
- `SoftwareApplication`

This is limited to first-party OPAi information and does not add tracking, advertising, analytics, or third-party scripts.

## Navigation and Crawl Paths

Main pages are linked from the header and/or footer. Canonical routes use trailing slashes to match the static export configuration and production page behavior.

## Vercel and Preview Notes

Production must remain indexable. Preview deployments may be protected or noindexed by Vercel settings, but those settings should not apply to `https://opaiapp.com/`.

Before requesting Google indexing, confirm:

1. `https://opaiapp.com/robots.txt` allows crawling.
2. `https://opaiapp.com/sitemap.xml` lists the production URLs.
3. `https://www.opaiapp.com/` redirects to `https://opaiapp.com/`.
4. No production response includes `x-robots-tag: noindex`.
5. Google Search Console property is set for `https://opaiapp.com/`.
6. Submit `https://opaiapp.com/sitemap.xml` in Search Console.

## Tracking Policy

No tracking, advertising, analytics, or third-party scripts were added in this SEO readiness pass.
