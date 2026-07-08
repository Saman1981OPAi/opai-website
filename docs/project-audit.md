# OPAi Master Project Audit

Status: Sprint 001 setup
Owner: 1001246299 ONTARIO INC.
Primary repository for this audit: `opai-website`
Current product posture: Testing / pre-launch

## Executive Summary

The OPAi roadmap is correctly separated into 15 smaller projects. This is the right professional approach because the website, design system, mobile app, backend, database, authentication, AI platform, police modules, security, and deployment work all have different risk profiles and review needs.

Sprint 001 should remain focused on Project 001 only: the public website and brand foundation. Mobile app, backend, AI, database, authentication, and police workflow implementation should not move forward until their dependency milestones are ready, except for placeholder documentation and public-facing roadmap language.

## Global Requirements

- Do not imply the app is fully launched while it is still in testing.
- Use "Now in Testing" or "Currently in Testing" where appropriate.
- Avoid official police service logos, government badges, RCMP, OPP, TPS, YRP, or other service-specific marks.
- Do not use copyrighted third-party imagery unless properly licensed.
- Do not add analytics, advertising, tracking, cookies, payments, or subscriptions until explicitly approved.
- Keep AI, legal, medical, and operational disclaimers visible in relevant surfaces.
- Treat Canadian privacy, consent, and minimal data collection as core requirements.

## Existing Repository Inspection

Completed before this Sprint 001 stabilization pass:

- Required app routes exist for Home, About, Features, OPAi Police, PTSD Awareness, Founder Story, Download, Contact, Privacy Policy, and Terms of Service.
- Shared components exist for buttons, container layout, CTA blocks, feature cards, footer, header, hero, motion wrappers, page heroes, platform roadmap, section headers, store buttons, and timelines.
- Global styling exists through Tailwind CSS and `app/globals.css`.
- SEO support exists through metadata, `robots.ts`, and `sitemap.ts`.
- Static export support exists through Next.js build output to `out`.
- The current live deployment path is GitHub Pages from the `main` branch.
- Current DNS for `opaiapp.com` points to GitHub Pages.

Missing or corrected in this Sprint 001 setup:

- Planning documents were added for project audit, dependency map, and Sprint 001 plan.
- README was expanded for reviewer clarity.
- A public disclaimer band was added so required AI, operational, legal, medical, and PTSD-awareness limitations are visible on the site.
- Testing/pre-launch language was tightened.
- Brand assets were added under `public/images/brand`.
- Vercel migration was documented as a future step without removing the current live GitHub Pages deployment.

## Project Audit

### Project 001 - Website

Objective: Build the official OPAi corporate website for `opaiapp.com`.

Scope:
- Public brand website using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.
- Pages for Home, Features, OPAi Police, PTSD Awareness, Founder Story, Download, Contact, Privacy Policy, and Terms of Service.
- SEO, accessibility, responsive layout, dark theme, testing/pre-launch language, current GitHub Pages deployment stability, and Vercel-ready planning.

Out of scope:
- Backend APIs, user accounts, payment logic, analytics, app functionality, or live police workflows.

Acceptance criteria:
- All required pages exist.
- App Store readiness is presented as the active launch path, while Google Play is marked paused or under construction until the D-U-N-S Number for Ebrahimi Holdings is received.
- Required disclaimers are present.
- Site passes lint, typecheck, and production build.
- Mobile layout is readable with no overlapping content.

Testing requirements:
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- Mobile viewport inspection for navigation, hero, roadmap, cards, and footer.

Security/privacy:
- No secrets in source.
- No tracking or cookies.
- Clear privacy policy and terms.

Dependencies:
- Brand requirements and public messaging.

Deliverables:
- Website implementation, README, deployment docs, Sprint 001 plan, and review PR.

Status:
- Existing website foundation is implemented and live.
- Sprint 001 documentation and public disclaimer updates are prepared in a review PR.
- Current GitHub Pages deployment is preserved. Vercel migration is planned but not activated.

### Project 002 - Design System

Objective: Create a reusable design system for all OPAi products.

Scope:
- Typography, spacing, colors, buttons, cards, icons, navigation patterns, accessibility rules, and reusable tokens.

Out of scope:
- Full product implementation or backend behavior.

Acceptance criteria:
- Documented tokens and components.
- Usage rules for web, iOS, Android, and future desktop surfaces.
- Accessibility guidance for contrast, focus, motion, and touch targets.

Testing requirements:
- Visual review across responsive sizes.
- Contrast checks.
- Component usage examples.

Security/privacy:
- Do not include protected marks or unlicensed assets.

Dependencies:
- Project 001 brand foundation.

Deliverables:
- `opai-design` repository, tokens, component documentation, examples, and adoption guide.

### Project 003 - Mobile App

Objective: Develop the cross-platform OPAi Police mobile app with iOS as the active launch priority and Android kept compatible for later Google Play submission.

Scope:
- Shared codebase, Nori-inspired navigation, police-specific workflows, AI entry points, translation, scheduling, notes, and resources.

Out of scope:
- Production backend integration until Projects 004-007 are ready.
- App Store final release until review, privacy, screenshots, and compliance are complete.
- Android-specific store assets, Google Play release workflows, and Android production deployment until the D-U-N-S Number for Ebrahimi Holdings is received.

Acceptance criteria:
- iPhone and iPad layouts are symmetrical, readable, and close to approved mockups.
- Navigation supports core modules.
- Screens use reusable design system components.
- Android support and configuration remain intact without becoming the active launch platform.

Testing requirements:
- Device simulator checks.
- TestFlight review.
- Accessibility, text scaling, and safe-area checks.

Security/privacy:
- No sensitive data hardcoded.
- Clear disclaimers.
- Secure storage placeholders only until backend is ready.

Dependencies:
- Projects 001 and 002.
- Projects 004-007 for production behavior.

Deliverables:
- `opai-mobile` repository, app shell, navigation, screenshots, build artifacts, and store metadata.

### Project 004 - Backend API

Objective: Develop a secure RESTful backend using FastAPI.

Scope:
- Authentication endpoints, AI interactions, incidents, calendars, notifications, translation, document storage, and sync.

Out of scope:
- Mobile UI and public website.

Acceptance criteria:
- Modular FastAPI service with OpenAPI docs.
- Health checks, error handling, validation, and environment-based configuration.
- Protected endpoints and audit-aware architecture.

Testing requirements:
- Unit tests.
- Integration tests.
- API contract tests.
- Static checks.

Security/privacy:
- Encryption in transit.
- Least-privilege access.
- No secrets committed.
- Privacy-by-design defaults.

Dependencies:
- Project 005 database.
- Project 006 authentication.
- Project 014 security requirements.

Deliverables:
- `opai-backend` service, API docs, tests, and deployment configuration.

### Project 005 - Database

Objective: Design and implement a normalized PostgreSQL database.

Scope:
- Users, incidents, reports, AI conversations, reminders, calendars, evidence metadata, translations, settings, and audit history.

Out of scope:
- UI implementation.
- Direct user-facing workflows.

Acceptance criteria:
- Normalized schema.
- Migrations.
- Indexes for expected access patterns.
- Data retention and audit structures.

Testing requirements:
- Migration tests.
- Referential integrity tests.
- Query performance checks for critical workflows.

Security/privacy:
- Encryption at rest.
- Data minimization.
- Row-level or application-level access control strategy.

Dependencies:
- Projects 004, 006, and 014.

Deliverables:
- Migrations, schema docs, seed strategy, and database test coverage.

### Project 006 - Authentication

Objective: Implement secure authentication and account management.

Scope:
- Email/password, biometric login, Face ID, fingerprint authentication, optional two-factor authentication, secure sessions, password reset, account recovery, and user profiles.

Out of scope:
- Full police workflow features.

Acceptance criteria:
- Secure session lifecycle.
- Password reset and recovery flows.
- Biometric login uses platform-secure mechanisms.
- Optional two-factor authentication is documented and testable.

Testing requirements:
- Authentication unit and integration tests.
- Session expiration tests.
- Reset and recovery tests.

Security/privacy:
- Strong password hashing.
- Secure tokens.
- Audit logging.
- No credential leakage.

Dependencies:
- Projects 004, 005, and 014.

Deliverables:
- Auth API, mobile auth integration, profile model, and tests.

### Project 007 - AI Platform

Objective: Create the OPAi AI engine using the OpenAI Responses API.

Scope:
- Route requests to specialized assistants: Incident AI, Criminal Code AI, Translation AI, Court AI, Calendar AI, Report Review AI, and Training AI.
- Maintain conversational context while protecting user data.

Out of scope:
- Unverified legal advice or final operational decision-making.

Acceptance criteria:
- Clear assistant routing.
- System prompts and safeguards.
- Context handling and redaction strategy.
- Informational assistance disclaimers.

Testing requirements:
- Prompt and routing tests.
- Safety tests.
- Regression examples for police-context workflows.

Security/privacy:
- Minimize shared data.
- Redact sensitive data where possible.
- Log safely.
- Obtain user consent for AI processing.

Dependencies:
- Projects 004, 005, 006, and 014.

Deliverables:
- AI orchestration service, assistant routing, policies, tests, and documentation.

### Project 008 - Start My Shift

Objective: Implement non-mandatory shift readiness reminders.

Scope:
- Cruiser inspection, CEW test, firearm check, radio check, court schedule, training events, follow-ups, and requalification dates.

Out of scope:
- Mandatory compliance checklist or disciplinary workflow.

Acceptance criteria:
- Reminder language clearly states the feature is supportive and non-mandatory.
- Officers can review reminders quickly.
- No forced completion requirement.

Testing requirements:
- UI checks.
- Calendar/reminder data checks.
- Accessibility tests.

Security/privacy:
- Avoid collecting unnecessary completion records.
- Keep consent clear for calendar sync.

Dependencies:
- Projects 002, 003, 004, 005, 006, 011, and 014.

Deliverables:
- Mobile module, reminder model, optional sync hooks, tests, and disclaimers.

### Project 009 - New Incident

Objective: Create a guided workflow for recording new incidents.

Scope:
- Incident type, date/time, location, persons involved, witnesses, notes, photos, documents, audio, evidence references, AI drafting, evidence organization, summaries, and follow-up tasks.

Out of scope:
- Replacement for official RMS, CAD, notebook, service policy, or evidence management systems.

Acceptance criteria:
- Incident workflow captures core fields.
- AI-generated reports are clearly marked draft/incomplete until verified.
- Evidence references are metadata-focused unless secure storage is approved.

Testing requirements:
- Workflow tests.
- Attachment tests.
- Draft generation tests.
- Data validation tests.

Security/privacy:
- Strong consent and data minimization.
- Secure document handling.
- Audit logs.

Dependencies:
- Projects 002-007, 014, and 015.

Deliverables:
- Mobile incident workflow, backend endpoints, database tables, AI draft support, and tests.

### Project 010 - Translation

Objective: Develop multilingual translation workflows.

Scope:
- Text, voice, camera OCR, document translation, conversation mode, police-context translation, and optional translation history.

Out of scope:
- Certified legal interpretation or court-certified translation.

Acceptance criteria:
- Translation modes are discoverable.
- Police-context assistance is clearly informational.
- History is optional and privacy-aware.

Testing requirements:
- Text translation tests.
- Voice and OCR permission checks.
- History persistence tests where enabled.

Security/privacy:
- Explicit consent for microphone, camera, document, and history usage.
- Minimize retained translation data.

Dependencies:
- Projects 002-007 and 014.

Deliverables:
- Mobile translation UI, backend translation service, consent controls, and tests.

### Project 011 - Calendar

Objective: Build an intelligent calendar for police-related reminders and scheduling.

Scope:
- Court appearances, meetings, training sessions, annual qualifications, follow-ups, shift reminders, and requalification deadlines.

Out of scope:
- Unauthorized calendar synchronization.

Acceptance criteria:
- Calendar sync occurs only after explicit user authorization.
- Events and reminders are categorized.
- Critical deadlines can be surfaced clearly.

Testing requirements:
- Calendar CRUD tests.
- Permission and consent tests.
- Timezone tests.

Security/privacy:
- Explicit sync consent.
- Clear revocation path.
- Minimal event metadata.

Dependencies:
- Projects 004-006, 008, 012, and 014.

Deliverables:
- Calendar module, sync documentation, APIs, mobile views, and tests.

### Project 012 - Notifications

Objective: Implement notification support.

Scope:
- Standard push notifications, persistent reminders, optional call-style alerts, and high-priority reminders for court, mandatory training, annual firearms qualification, Use of Force, CEW, and follow-up deadlines.

Out of scope:
- Emergency dispatch, 911-style alerting, or mandatory service notification replacement.

Acceptance criteria:
- Notification permissions are explicit.
- High-priority categories are configurable.
- Users can control notification preferences.

Testing requirements:
- Permission tests.
- Delivery simulation.
- Preference tests.

Security/privacy:
- No sensitive details in lock-screen notifications by default.
- Consent-led alert types.

Dependencies:
- Projects 003, 004, 005, 006, 011, and 014.

Deliverables:
- Notification backend hooks, mobile permission flows, preferences, and tests.

### Project 013 - Police Knowledge Base

Objective: Provide searchable access to police-related legal and operational references.

Scope:
- Statutes, procedures, case-law references, operational material, and training information.

Out of scope:
- Legal advice, service-specific policy advice without authorization, or private/protected material.

Acceptance criteria:
- Search results distinguish informational assistance from legal advice.
- Sources and update dates are visible where possible.
- Protected material is not included without authorization.

Testing requirements:
- Search relevance tests.
- Source attribution tests.
- Disclaimer checks.

Security/privacy:
- Respect copyright and licensing.
- Avoid protected operational documents unless approved.

Dependencies:
- Projects 004, 005, 006, 007, and 014.

Deliverables:
- Knowledge base ingestion plan, search endpoints, source policy, mobile search view, and tests.

### Project 014 - Security

Objective: Implement enterprise-grade security.

Scope:
- Encryption at rest, encryption in transit, role-based access control, audit logging, secure key management, Canadian privacy compliance, privacy-by-design, minimal data collection, and consent controls.

Out of scope:
- One-time checklist only. Security must remain continuous.

Acceptance criteria:
- Security controls are implemented and documented.
- Audit logging covers sensitive operations.
- Secrets are managed through environment and deployment secrets.
- Consent model is explicit.

Testing requirements:
- Security unit tests.
- Access control tests.
- Audit log tests.
- Dependency checks.

Security/privacy:
- This project defines the security baseline for all other projects.

Dependencies:
- Applies across Projects 004-013 and 015.

Deliverables:
- Security architecture, controls, tests, operational docs, and review checklist.

### Project 015 - Deployment

Objective: Automate deployment pipelines for website, backend, and mobile applications.

Scope:
- GitHub Actions, Vercel for website hosting, secure backend hosting, automated testing, build verification, environment variables, staging/production separation, and mobile build pipelines.

Out of scope:
- Manual-only release process.

Acceptance criteria:
- CI runs on pull requests.
- Deployment is environment-based.
- Secrets are referenced but not committed.
- Staging and production separation is documented.

Testing requirements:
- CI validation.
- Build verification.
- Deployment dry run where possible.

Security/privacy:
- Deployment secrets stay in GitHub/Vercel/cloud secret stores.
- Least-privilege deployment tokens.

Dependencies:
- Project 001 for website deployment.
- Projects 004-014 for backend and app deployment.

Deliverables:
- GitHub Actions workflows, deployment docs, environment templates, and release checklist.

## Key Risks

- App Store language must not imply the app replaces official systems, legal advice, medical advice, supervision, or professional judgment.
- AI features require careful data minimization, disclaimers, and review before production release.
- Calendar, notifications, microphone, camera, OCR, document, and location features require explicit consent.
- Police knowledge base content must respect copyright, licensing, and service-specific policy restrictions.
- Official police marks, badges, and protected insignia must not be used.
- Mobile UI needs strict device testing to avoid layout issues like text wrapping, overlap, and unsafe spacing.

## Next Steps

1. Complete Sprint 001 documentation and review PR for `opai-website`.
2. Confirm GitHub labels and issue metadata for the full roadmap.
3. Keep Sprint 001 scoped to website foundation only.
4. Prepare Sprint 002 for design system tokens and mobile UI standards after Sprint 001 review.
5. Do not begin backend, AI, authentication, or database implementation until the relevant milestone is approved.
