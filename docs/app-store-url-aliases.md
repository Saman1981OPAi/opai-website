# App Store URL Aliases

The static website exposes short App Store URLs while preserving the existing canonical pages.

| Short URL | Canonical page | Behaviour |
| --- | --- | --- |
| `https://opaiapp.com/privacy` | `https://opaiapp.com/privacy-policy` | Static route alias; canonical metadata remains `/privacy-policy/` |
| `https://opaiapp.com/terms` | `https://opaiapp.com/terms-of-service` | Static route alias; canonical metadata remains `/terms-of-service/` |
| `https://opaiapp.com/support` | `https://opaiapp.com/contact` | Static route alias; canonical metadata remains `/contact/` |

The project uses Next.js static export. Route aliases are used instead of runtime redirects so every
short URL produces a reliable static `200` response on the current hosting platform. The canonical
pages remain available and are not duplicated in the sitemap.
