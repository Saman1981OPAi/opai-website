# Website Deployment

The website deploys to Vercel through GitHub Actions.

## Environments

- `staging`: preview deployment from the `staging` branch.
- `production`: production deployment from the `main` branch.

## Required GitHub Secrets

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Verification

Every deployment runs:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Vercel Project Settings

- Production domain: `opaiapp.com`
- Framework preset: Next.js
- Build command: `pnpm build`
- Output directory: `out`
- Install command: `pnpm install --frozen-lockfile`
