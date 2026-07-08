# Website Deployment

Current live hosting: GitHub Pages
Target future hosting: Vercel

Sprint 001 preserves the current live GitHub Pages deployment so `opaiapp.com` remains stable while the website foundation is reviewed. Vercel migration is documented here as the next hosting step and should not be activated until the Vercel project, secrets, and DNS records are confirmed.

## Current GitHub Pages Deployment

The live site currently deploys from the `main` branch through `.github/workflows/deploy-pages.yml`.

Every deployment runs:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The production domain currently points to GitHub Pages:

- `opaiapp.com`
- `www.opaiapp.com`

Do not remove the GitHub Pages workflow until Vercel is connected and verified.

## Future Vercel Setup

Before switching production hosting to Vercel:

1. Create or connect the Vercel project.
2. Confirm the framework preset is Next.js.
3. Confirm the build command is `pnpm build`.
4. Confirm the output directory is `out`.
5. Add `opaiapp.com` and `www.opaiapp.com` in Vercel.
6. Update DNS after Vercel confirms the expected records.
7. Verify HTTPS, redirects, sitemap, and robots.
8. Only then remove or disable GitHub Pages deployment.

## Future Vercel Project Settings

- Production domain: `opaiapp.com`
- Framework preset: Next.js
- Build command: `pnpm build`
- Output directory: `out`
- Install command: `pnpm install --frozen-lockfile`

## Future Vercel GitHub Secrets

Only add these if a GitHub Actions Vercel deployment workflow is approved:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
