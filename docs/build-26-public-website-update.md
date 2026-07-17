# Build 26: Public Website and App Store Completeness

## Scope

The Build 26 website update presents the approved product modules without public testing, pre-launch, prototype, beta, trial, mock, coming-soon, or development-build language.

Product pages:

- `/audio-statement/`
- `/report-writing/`
- `/translation/`
- `/paid-duty/`
- `/canvass/`
- `/mental-health-resources/`

Existing canonical legal and support pages remain available:

- `/privacy-policy/`
- `/terms-of-service/`
- `/contact/`

Short App Store aliases remain available:

- `/privacy/`
- `/terms/`
- `/support/`

## Public Content Controls

- No claim that OPAi Police is publicly available in the App Store before Apple approval.
- No fake App Store or Google Play badges.
- No fake download links, testimonials, usage totals, or visit counters.
- Device Testing is not used in primary public marketing.
- No official police-service logo, government badge, service-specific insignia, or government-endorsement claim.
- Public project owner remains `1001674341 ONTARIO INC.`

## Privacy and Safety

- AI and translation outputs are labelled for verification.
- Report Writing states that facts, evidence, observations, and conclusions must not be invented.
- Audio Statement explains user-initiated media processing, limits, temporary processing, content-free logs, and transcript verification.
- Paid Duty and Canvass are described as personal organization tools, not official records or systems.
- Weather explains native Apple WeatherKit, foreground location, manual-city fallback, caching, and Apple attribution.
- Mental Health Resources uses the same verified source register as the mobile app.

## Validation Results

- `pnpm typecheck`: passed.
- `pnpm lint`: passed with zero warnings.
- `pnpm build`: passed; 24 static routes generated.
- Responsive inspection: passed at 390 x 844, 1024 x 768, and 1440 x 900 with no horizontal overflow.
- Hero first paint: product copy is visible before the Three.js scene finishes initializing; a static maple fallback covers slower or unavailable WebGL.
- Route check: all required product, legal, support, alias, robots, and sitemap routes returned HTTP 200 from the production export.
- Public wording scan: clear.
- Secret and prohibited-binary scan: clear.
- Direct OpenAI, analytics, service-insignia, and prohibited-branding scan: clear.
- `git diff --check`: passed.

Build 26 generation and public App Store submission remain `NO-GO` until the full production-backend and release-certification gates pass.
