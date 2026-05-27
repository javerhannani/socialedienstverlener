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
- `public/logo.png` — Brand logo (also used as favicon).
- `design/` — Original design handoff:
  - `design/README.md` — full design spec (tokens, copy, behavior).
  - `design/site.html` — single-file HTML prototype (visual source of truth).
  - `design/screenshots/` — reference screenshots per section.
  - `design/assets/logo.png` — source logo.

## Design tokens

Core colors and fonts live in `tailwind.config.ts` and `app/globals.css`:

- Primary: `olive` `#638500`, `olive-deep` `#3d5300`, `olive-soft` `#dbe5b4`, `olive-faint` `#f4f6e6`
- Surfaces: `cream` `#f5efe1`, `ink` `#1a1c14`, `ink-2` `#4a4d40`
- Fonts: Bricolage Grotesque (display) + DM Sans (body) via `next/font/google`.

## TODO before launch

- [ ] Replace placeholder photography (hero `c1` sfeerfoto + about portret) with real images supplied by client. Add proper `alt` text.
- [ ] Write a real `/privacy` page (currently a `#` placeholder in footer and cookie banner).
- [ ] Decide with client whether to add a real contact form (Formspree / Netlify Forms / API route) or keep `mailto:` + `tel:` only.
- [ ] DNS migration: swap `socialedienstverlener.nl` from Wix to the new host. **Preserve MX/SPF/DKIM** — `info@socialedienstverlener.nl` is in active use.
- [ ] Optional: privacy-friendly analytics (Plausible/Umami), gated on `localStorage.getItem('sdv_cookie_choice') === 'accept'`.

## Notes

- The "tweaks panel" in `design/site.html` is a designer iteration tool and is **not** shipped. The chosen defaults (headline variant 1, standard accent, standard density) are hard-coded.
- The cookie banner is courtesy-level AVG (functional only) — no actual tracking cookies are set.
