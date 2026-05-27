# De Sociale Dienstverlener

One-page marketing website for **De Sociale Dienstverlener** — the freelance jeugdhulpverlening practice of Javer Hannani (Noord-Holland, NL).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Project layout

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `components/` — Section components (`Nav`, `Hero`, `Diensten`, `Over`, `Werkwijze`, `Opdrachtgevers`, `Contact`, `Footer`, `CookieBanner`).
- `public/` — Brand assets and photos:
  - `logo-full.png` — full horizontal logo (used in footer).
  - `logo-mark.png` — green sD mark (used in nav and as favicon).
  - `javer-portrait.jpg` — portrait of Javer (About section, 4:5).
  - `javer-sfeer.jpg` — atmospheric portrait (Hero card).
- `design/` — Original design handoff:
  - `design/README.md` — full design spec (tokens, copy, behavior).
  - `design/site.html` — single-file HTML prototype (visual source of truth).
  - `design/screenshots/` — reference screenshots per section.
  - `design/assets/` — brand logos + source photos.

## Design tokens

Core colors and fonts live in `tailwind.config.ts` and `app/globals.css`:

- Primary: `olive` `#638500`, `olive-deep` `#3d5300`, `olive-soft` `#dbe5b4`, `olive-faint` `#f4f6e6`
- Surfaces: `cream` `#f5efe1`, `ink` `#1a1c14`, `ink-2` `#4a4d40`
- Fonts: Bricolage Grotesque (display) + DM Sans (body) via `next/font/google`.

## TODO before launch

- [ ] Write a real `/privacy` page (currently a `#` placeholder in footer and cookie banner).
- [ ] Decide with client whether to add a real contact form (Formspree / Netlify Forms / API route) or keep `mailto:` + `tel:` only.
- [ ] Optional: privacy-friendly analytics (Plausible/Umami), gated on `localStorage.getItem('sdv_cookie_choice') === 'accept'`.

## Domain migration (Wix → new host)

The current production site lives on **Wix** and the domain `socialedienstverlener.nl` is registered at **Mijndomein**. To go live with this Next.js build:

1. Deploy this repo to a host (Vercel / Netlify / Cloudflare Pages — all free tiers fit).
2. In **Mijndomein**, update the DNS records for `socialedienstverlener.nl`:
   - Point `A` / `CNAME` for the apex + `www` to the new host.
   - **Leave the email DNS records untouched** (`MX`, `SPF`, `DKIM`, `DMARC`) — `info@socialedienstverlener.nl` is in active use and routes via Mijndomein's mail.
3. Once DNS propagates (usually <1 hour, max 24h), the Wix site stops resolving and the new site takes over.
4. Cancel the Wix subscription only after the new site is confirmed live.

## Notes

- The "tweaks panel" in `design/site.html` is a designer iteration tool and is **not** shipped. The chosen defaults (headline variant 1, standard accent, standard density) are hard-coded.
- The cookie banner is courtesy-level AVG (functional only) — no actual tracking cookies are set.
