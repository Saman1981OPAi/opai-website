# Sprint 001 Plan: OPAi Website Foundation

Status: Ready for review
Repository: `opai-website`
Target product posture: Testing / pre-launch

## Sprint Objective

Build and prepare the official OPAi public website foundation for human review. The website should establish the OPAi brand, introduce OPAi Police, communicate that the product is currently in testing, support PTSD awareness, provide contact and policy pages, preserve the current live website, and document the future Vercel migration path.

## Sprint Scope

- Next.js 15 website foundation.
- React 19 and TypeScript.
- Tailwind CSS dark theme.
- Framer Motion animations.
- Reusable React components.
- Responsive design.
- SEO metadata, sitemap, and robots support.
- Accessibility-minded navigation and content structure.
- Required pages:
  - Home
  - Features
  - OPAi Police
  - PTSD Awareness
  - Founder Story
  - Download
  - Contact
  - Privacy Policy
  - Terms of Service
- Homepage sections:
  - Hero section
  - OPAi Police introduction
  - App Store button marked Coming Soon
  - Google Play button marked Coming Soon
  - Feature cards
  - PTSD awareness section
  - Founder story preview
  - Testing stage / Coming Soon notice
  - Footer with support links

## Out of Scope

- Mobile app implementation.
- Backend API implementation.
- Database implementation.
- Authentication implementation.
- AI platform implementation.
- Payment or subscription logic.
- Analytics, advertising, tracking, or cookies.
- Official police service logos, government badges, protected insignia, or unlicensed third-party images.
- Replacing the current live GitHub Pages deployment before Vercel is connected and verified.

## Tasks

1. Confirm required website pages exist.
2. Confirm homepage has the required sections and Testing / Coming Soon language.
3. Confirm required disclaimers exist:
   - OPAi Police is a productivity and AI assistance tool.
   - OPAi Police is not a replacement for official police systems, supervision, service policy, legal advice, medical advice, or professional judgment.
   - AI-generated responses may be incomplete or inaccurate and must be verified.
   - PTSD awareness content is educational only and is not medical treatment, diagnosis, therapy, or crisis intervention.
4. Add project audit report.
5. Add dependency map.
6. Add Sprint 001 plan.
7. Update README for project overview, stack, local development, environment variables, Vercel deployment, and Testing / Pre-launch status.
8. Prepare review PR titled `Sprint 001: OPAi Website Foundation`.
9. Preserve current GitHub Pages deployment until Vercel and DNS are confirmed.

## Acceptance Criteria

- Website builds successfully.
- All required pages are present.
- Site uses dark professional OPAi brand styling.
- App download calls to action do not imply public launch.
- Footer includes `Project Owner: 1001246299 ONTARIO INC.`
- Website avoids official police service marks and protected insignia.
- Public pages include appropriate disclaimers.
- Documentation files exist:
  - `docs/project-audit.md`
  - `docs/dependency-map.md`
  - `docs/sprint-001-plan.md`
- README is updated.
- Review PR is created and not merged automatically.
- Existing live deployment workflow is not removed during Sprint 001 review.

## Testing Checklist

- [ ] `pnpm install`
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] Verify mobile navigation.
- [ ] Verify desktop navigation.
- [ ] Verify Home page.
- [ ] Verify Features page.
- [ ] Verify OPAi Police page.
- [ ] Verify PTSD Awareness page.
- [ ] Verify Founder Story page.
- [ ] Verify Download page.
- [ ] Verify Contact page.
- [ ] Verify Privacy Policy page.
- [ ] Verify Terms of Service page.
- [ ] Verify sitemap and robots routes.
- [ ] Verify mobile layout has no title/card overlap.

## Deployment Checklist

Current live deployment:

- [ ] Preserve GitHub Pages workflow while PR is under review.
- [ ] Confirm `opaiapp.com` remains reachable.
- [ ] Confirm production deployment uses reviewed code only.

Future Vercel migration:

- [ ] Confirm Vercel project exists.
- [ ] Add GitHub secrets:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`
- [ ] Confirm production domain points to the intended hosting provider.
- [ ] Confirm staging and production environments are separated.
- [ ] Confirm CI runs lint, typecheck, and build before deployment.
- [ ] Switch DNS only after Vercel verifies the required records.

## Definition of Done

Sprint 001 is done when the website foundation, documentation, README update, checks, and review PR are complete. The PR must remain open for human review and must not be merged automatically.

## Next Recommended Sprint

Sprint 002 should focus on Project 002: the reusable OPAi design system. It should define tokens, typography, spacing, buttons, cards, icons, navigation rules, accessibility standards, and mobile layout rules before additional app features continue.
