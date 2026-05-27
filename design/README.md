# Handoff: De Sociale Dienstverlener — One-page website

## Overview

This is a complete one-page marketing website for **De Sociale Dienstverlener**, the freelance jeugdhulpverlening practice of **Javer Hannani** (Noord-Holland, NL). The site is aimed at **opdrachtgevers** (commissioning parties: gemeentes, wijkteams, zorgaanbieders, scholen and project organisations) rather than at the youth themselves, since referrals in Dutch jeugdhulp run through institutions rather than self-signup.

The current website runs on Wix; this redesign replaces it with a hand-built modern site.

The page contains: nav, hero with hero-stack visual, services grid (5 services + 1 CTA tile), about-me block, samenwerking (process), opdrachtgevers (audience) cards, contact block, footer, cookie banner (AVG/functional only), and a tweaks panel exposing 5 alternative headline copy variants + accent/density toggles.

## About the Design Files

The HTML file in this bundle (`site.html`) is a **design reference**, not production code to ship as-is. It is a single self-contained prototype showing the intended look, copy, behavior, and interactions.

The task is to **recreate this design in the developer's preferred / project's existing environment** — most likely a modern React framework like **Next.js 14+ (App Router)** with **TypeScript** and **Tailwind CSS** or **CSS modules**, since this is a brand-new build. If the developer prefers a static-site generator (Astro, Eleventy) that also fits — the site has very little client-side logic so an MPA / SSG is a reasonable choice.

The HTML/CSS in this bundle is hand-written and should be used as a faithful source-of-truth for **visual styling, spacing, typography, content, copy, and the cookie-banner / tweaks-panel logic**, but the developer should restructure it into proper components using the chosen framework's idioms.

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, hover states, and copy are final and should be reproduced pixel-perfectly. Replace the photo placeholders with real photography (portret of Javer + 1-2 sfeerfoto's — to be supplied by client).

## Tech-stack recommendation

- **Framework:** Next.js 14+ (App Router) with TypeScript, OR Astro for a lighter SSG approach.
- **Styling:** Tailwind CSS with custom theme tokens (see Design Tokens), OR CSS Modules with CSS custom properties.
- **Fonts:** Google Fonts — `Bricolage Grotesque` (display) and `DM Sans` (body). Use `next/font/google` or `<link rel="preconnect">`.
- **Icons:** Inline SVG. The current design uses ad-hoc stroke-based 24×24 SVGs. Consider Lucide for consistency.
- **Hosting:** Vercel / Netlify / Cloudflare Pages. The site is a single static page — any host works.
- **Domain:** `socialedienstverlener.nl` (currently on Wix — DNS swap needed at go-live).
- **Form/contact:** Page currently uses `mailto:` and `tel:` links. If the client wants a real contact form, Formspree, Netlify Forms, or a simple POST API route is fine.
- **Analytics:** None currently. If added, recommend a privacy-respecting option (Plausible/Umami) because of AVG/GDPR.

## Page structure

The site is one page (`/`) with anchor navigation. Sections from top to bottom:

| # | id              | Section name              | Purpose                                                |
|---|-----------------|---------------------------|--------------------------------------------------------|
| 0 | (none)          | Nav                       | Sticky pill-shaped navigation with brand + CTA         |
| 1 | (none)          | Hero                      | Headline, lead, CTAs, trust chips, decorative card-stack |
| 2 | `#diensten`     | Diensten                  | 6-tile grid: 5 services + 1 "Andere opdracht?" CTA     |
| 3 | `#over`         | Over Javer                | Portrait + bio + 3 stats                               |
| 4 | `#werkwijze`    | Samenwerking              | 4-step process list                                    |
| 5 | `#opdrachtgevers` | Opdrachtgevers          | 3 audience cards (gemeentes / zorgaanbieders / scholen)|
| 6 | `#contact`      | Contact                   | Headline + 3 contact links (phone/email/whatsapp) + CTA|
| 7 | (none)          | Footer                    | Logo + meta                                            |
| — | fixed           | Cookie banner             | AVG-compliant functional-cookies notice                 |
| — | fixed           | Tweaks panel              | Tweaks panel (dev-only, see Tweaks Protocol below)      |

## Design Tokens

These should be exposed as CSS variables or Tailwind theme tokens.

### Colors

| Token            | Hex        | Usage                                                |
|------------------|------------|------------------------------------------------------|
| `--olive`        | `#638500`  | Primary brand (logo green); use sparingly as accent  |
| `--olive-deep`   | `#3d5300`  | Hover / darker accent / text on tinted backgrounds   |
| `--olive-soft`   | `#dbe5b4`  | Brand mark sub-letter color                          |
| `--olive-mist`   | `#eff2dc`  | (legacy token, unused in final)                      |
| `--olive-faint`  | `#f4f6e6`  | Tinted pills, soft-hover states                      |
| `--cream`        | `#f5efe1`  | Page background                                      |
| `--cream-deep`   | `#ece4d0`  | (legacy token)                                       |
| `--ink`          | `#1a1c14`  | Body text + dark surfaces                            |
| `--ink-2`        | `#4a4d40`  | Secondary text                                       |
| `--ink-3`        | `#7a7d6f`  | Tertiary text (rare)                                 |
| `--line`         | `#1a1c1414`| Hairline borders (8% black)                          |
| white            | `#ffffff`  | Card surfaces                                        |

**Palette derived from the supplied logo.** The brand green is `#638500`. Use it as a *subtle accent* — pills, icons, hover, the one dark "feature" service card. Do not let it become a dominant background color anywhere except the small "Uniek" tag on the bokscoaching tile.

### Typography

- **Display font:** `"Bricolage Grotesque"`, weights 400/500/600/700. Used on headlines, h2-h4, brand mark, large numbers.
- **Body font:** `"DM Sans"`, weights 300/400/500/600. Used everywhere else.
- **Letter-spacing:** Display elements use negative tracking (`-0.025em` to `-0.035em`). Body uses default.

Type scale (used values, in px):

| Use                   | Font            | Size                       | Weight | LH    |
|-----------------------|-----------------|----------------------------|--------|-------|
| Hero H1               | Bricolage       | `clamp(48px,7.6vw,108px)`  | 500    | 0.98  |
| Section H2            | Bricolage       | `clamp(34px,4.8vw,60px)`   | 500    | 1.04  |
| About H2              | Bricolage       | `clamp(32px,4.5vw,52px)`   | 500    | 1.04  |
| Service H3            | Bricolage       | `1.5rem`                   | 500    | 1.1   |
| Step H4               | Bricolage       | `1.3rem`                   | 500    | 1.15  |
| Process step number   | Bricolage       | `3rem`                     | 500    | 1     |
| Stat number           | Bricolage       | `1.7rem`                   | 500    | 1     |
| Body lead             | DM Sans         | `1.2rem`                   | 400    | 1.5   |
| Body default          | DM Sans         | `17px`                     | 400    | 1.6   |
| Pill / eyebrow        | DM Sans         | `0.78rem` / `0.82rem`      | 500    | —     |
| Mono / tag uppercase  | DM Sans         | `0.74rem`, ls `0.06em`     | 500    | —     |

### Spacing

- Section padding: `100px 0` (top/bottom of each `<section>`).
- Wrap max-width: `1200px`, horizontal padding `32px` desktop / `20px` mobile.
- Card padding: `28-30px` for service cards, `50px` for about/contact box (`28-32px` mobile).
- Card gap inside grids: `16-18px` for services, `14px` for process steps.
- Border-radius scale: `12px` (cookie row), `16px` (contact link tiles), `18px` (tweaks panel), `22-24px` (cards), `28-36px` (large containers), `999px` (pills + nav + buttons).

### Shadows

- Card hover: `box-shadow: 0 22px 50px -28px #1a1c1430`
- Tweaks panel: `box-shadow: 0 30px 60px -25px #1a1c1450`
- Cookie banner: `box-shadow: 0 22px 50px -22px #1a1c1440`

### Borders

- Default border: `1px solid var(--line)` (which is `#1a1c1414` — 8% black).
- Hover border on service cards: `#63850040`.

---

## Screens / Views — detailed

### 0. Navigation (sticky pill)

**Layout:** Fixed top sticky bar. Inside a `1200px` wrap, a horizontal **pill-shaped** flex container with brand on the left, links in the middle, primary CTA on the right.

- Pill: `background: #ffffffcc; backdrop-filter: blur(10px); border: 1px solid var(--line); border-radius: 999px; padding: 10px 14px 10px 22px; margin: 18px auto; max-width: 1180px; gap: 18px`
- Brand mark: circle 36×36, `background: var(--ink)`, color `var(--cream)`, contains text `s` + `<em>D</em>` (the em is `var(--olive-soft)`).
- Brand text: `"De Sociale Dienstverlener"`, weight 600, 0.95rem.
- Nav links: `["Diensten","Over Javer","Samenwerking","Opdrachtgevers"]` — gap 22px, font-size 0.9rem, color `var(--ink-2)`, hover → `var(--olive)`. **All `white-space: nowrap` to prevent wrapping in the pill.**
- CTA: text `"Bespreek opdracht"`, `background: var(--ink); color: #fff; padding: 11px 20px; border-radius: 999px; font-size: 0.86rem; white-space: nowrap`. Hover → `var(--olive)`.
- Below 820px: hide the links list, keep brand + CTA.

### 1. Hero

**Layout:** 2-column grid `1.15fr .85fr`, gap 60px, items align center. Below 920px: 1 column, gap 32px.

#### Left column

- **Eyebrow pill:** `"Freelance jeugdhulpverlener · Flexibel inzetbaar"`. `inline-flex`, padding `8px 16px`, `background: var(--olive-faint)`, color `var(--olive-deep)`, border `1px solid #63850020`, radius `999px`, font-size `0.82rem`, weight 500. Leading dot 8×8 with a `box-shadow: 0 0 0 4px #63850018`.
- **H1 (default headline):**
  > "Jeugdhulp op maat — daar waar het reguliere aanbod tekortschiet."
  Render with two spans: the phrase **"op maat"** wrapped in `<span class="underline">` and **"tekortschiet."** wrapped in `<span class="accent">`.
  - `.underline` is a CSS `linear-gradient` background-image filling the lower ~25% of the text in `var(--olive-soft)` (highlighter effect).
  - `.accent` is `color: var(--olive); font-style: italic`.
  - Font: Bricolage 500, `clamp(48px,7.6vw,108px)`, line-height 0.98, letter-spacing -0.035em.
- **Lead paragraph:** `"De Sociale Dienstverlener is de freelance praktijk van Javer Hannani — jeugdhulpverlener met tien jaar ervaring (13–27 jaar). Direct inzetbaar voor gemeentes, wijkteams, zorgaanbieders en scholen in Noord-Holland."` — `1.2rem`, color `var(--ink-2)`, `max-width: 50ch`. "De Sociale Dienstverlener" is `<strong>` (color `var(--ink)`, weight 600).
- **CTA row:**
  - Primary: `"Bespreek een opdracht →"` linking to `#contact`. Inside the arrow is a small circle: 24×24, background `var(--olive)`, color `#fff`. Padding `16px 26px`, radius 999px, weight 500. Hover: `translateY(-1px)` and background → `var(--olive-deep)`.
  - Ghost: `"Bekijk diensten"` linking to `#diensten`. Border `1px solid #1a1c1430`, transparent background, hover border → `var(--olive)`.
- **Trust chips (flex, gap 18px, margin-top 34px):**
  - `"SKJ geregistreerd"`, `"10 jaar ervaring"`, `"Regio Noord-Holland"` — each chip has a 6×6 olive dot, white background, line border, padding `8px 14px`, radius 999px, 0.84rem.

#### Right column — Hero stack

A `position: relative` box with **height: 560px** (desktop), containing two absolutely positioned cards that visually overlap.

- **Card 1 (`.c1`, large dark card):**
  - `position: absolute; top: 0; left: 0; right: 50px; bottom: 140px;`
  - `background: var(--ink); color: var(--cream); padding: 26px; border-radius: 28px;`
  - `display: flex; flex-direction: column; gap: 18px`
  - Top row (flex space-between): `<h4>` with max-width 13ch, font Bricolage 500 1.35rem line-height 1.15, text: `"Korte lijnen. Heldere rapportage. Geen wachtlijst."` On the right: a badge pill `"13–27 jaar"`, background `var(--olive)`, white text, 0.74rem, padding 6×12, radius 999.
  - Below the top: `.ph` filler — flex:1, repeating-stripe background (`repeating-linear-gradient(135deg, #ffffff14 0 14px, #ffffff08 14px 28px)`), border-radius 20px, with placeholder text centered: `"PLAATSHOUDER — sfeerfoto (gesprek, wandeling of bokszaal)"`. **Replace with a real photo before launch.**
- **Card 2 (`.c2`, small white card overlapping bottom-right):**
  - `position: absolute; right: 0; bottom: 0; width: 62%;`
  - **No aspect-ratio constraint** — height grows with content. (This was a fix: an earlier `aspect-ratio: 1/1.04` was clipping half the content.)
  - `background: #fff; padding: 18px 20px; border: 1px solid var(--line); border-radius: 28px; display: flex; flex-direction: column; gap: 4px`
  - Label: `"Inzetbaar voor"`, 0.7rem, color `var(--ink-2)`, letter-spacing 0.08em, uppercase, weight 500.
  - 3 rows, separated by hairline:
    1. Icon `G` + `"Gemeentes & wijkteams"` / `"Casusregie en jeugdhulp op afroep"`
    2. Icon `Z` + `"Zorgaanbieders"` / `"Detachering & onderaanneming"`
    3. Icon `S` + `"Scholen & projecten"` / `"Groepswerk en begeleiding"`
  - Each row: `display: flex; gap: 10px; align-items: center; padding: 8px 0; font-size: 0.88rem`. Bold label 0.92rem, line-height 1.2; small subtitle 0.74rem color `var(--ink-2)` margin-top 1px line-height 1.3.
  - Icon: 28×28 circle, background `var(--olive-faint)`, color `var(--olive-deep)`, font Bricolage 600 0.74rem.
  - **Important:** the row's text wrapper must have `min-width: 0; flex: 1` so long labels can wrap rather than overflow.
- Below 920px: stack height shrinks to 520px. Below 520px: c1 padding 20px, c2 width 78%.

### 2. Diensten section (`#diensten`)

**Layout:** Section header centered, then a 3-column grid (1-col on mobile) of 6 cards.

Section header:
- Pill `"Diensten"` (olive-faint background).
- H2: `"Vijf manieren waarop ik kan worden ingezet."` — Bricolage 500, `clamp(34px,4.8vw,60px)`, line-height 1.04, max-width 20ch, centered.
- Body: `"Van losse casusregie tot meerjarige projecten. Flexibel inzetbaar via ZIN, PGB, detachering of onderaannemerschap — in afstemming met u als opdrachtgever."` — 1.06rem, color `var(--ink-2)`, max-width 54ch, centered.

**Service cards (`.svc`):**
- `background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 30px 28px; min-height: 240px;`
- `display: flex; flex-direction: column`
- Hover: `transform: translateY(-2px); box-shadow: 0 22px 50px -28px #1a1c1430; border-color: #63850040`
- Icon: 54×54, radius 18px, background `var(--olive-faint)`, color `var(--olive-deep)`. Contains an inline 22×22 SVG (stroke 1.8, round caps).
- H3: 1.5rem Bricolage 500.
- P: 0.97rem color `var(--ink-2)`.

The 6 tiles are:

| # | Title                              | Icon (description)              | Variant            |
|---|------------------------------------|---------------------------------|--------------------|
| 1 | Jongerencoaching                   | Person + base curve             | default            |
| 2 | Casusregie                         | Three horizontal lines + dot    | default            |
| 3 | Bokscoaching                       | Boxing glove silhouette         | **`.feature` (dark)** + `"Uniek"` tag in top-right corner |
| 4 | Groepswerk                         | Two overlapping people heads    | default            |
| 5 | Activiteiten­begeleiding & projecten | House outline                  | default            |
| 6 | Andere opdracht?                   | Plus sign                       | **`.cta-tile`** — olive-faint background, dashed olive border, `<a href="#contact">` |

**Service copy (exact):**

1. **Jongerencoaching** — "Eén-op-één begeleiding van jongeren (13–27) die vastlopen op school, thuis, op het werk of in zichzelf. Op locatie, op straat of wandelend buiten — wat past bij deze jongere."
2. **Casusregie** — "Overzicht houden in complexe trajecten. Ik coördineer tussen gezin, hulpverleners, school en gemeente, en lever heldere terugkoppeling aan u als opdrachtgever."
3. **Bokscoaching** — "Bokstraining als interventie. Werken aan emotie­regulatie, zelfbeheersing en lichaams­bewustzijn — vaak passend voor jongeren die meer baat hebben bij bewegen dan praten."
4. **Groepswerk** — "Themasessies en trainingen voor groepen jongeren. Op maat — weerbaarheid, communicatie of samenwerking. Voor scholen, jongerenwerk of wijkteams."
5. **Activiteiten­begeleiding & projecten** — "Inzet bij jongerenprojecten — als uitvoerder of als mede-ontwerper. Van losse activiteiten tot meerjarige programma's, klein of groot."
6. **Andere opdracht?** — "Iets specifieks voor uw gemeente, organisatie of school? Vertel kort wat u nodig heeft — vaak is er ruimte om samen iets passends te maken." → `"Neem contact op →"` link.

**Feature card (Bokscoaching) variant:**
- `background: var(--ink); color: var(--cream); border-color: var(--ink); position: relative; overflow: hidden`
- After-pseudo: radial-gradient circle in bottom-right (`background: radial-gradient(circle, #93c01f40 0%, transparent 70%); width: 200px; height: 200px; border-radius: 50%`) for a subtle glow.
- Icon background `#ffffff14`, color `var(--olive-soft)`.
- P color `#ffffffb8`.
- Top-right "Uniek" tag: `position: absolute; top: 24px; right: 24px; background: var(--olive); color: #fff; padding: 6px 12px; border-radius: 999px; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase`.

**Note on links:** Services 1–5 do NOT have "Meer over →" links. Earlier drafts did; they were removed because the site does not host sub-pages and the client doesn't want to suggest more detail elsewhere. Only the CTA tile (#6) has a link.

### 3. Over (`#over`) — single about block

A single wide card (no grid of cards).

- Container `.about`: 2-col grid `.9fr 1.1fr`, gap 60px, items center, `background: #fff; border: 1px solid var(--line); border-radius: 36px; padding: 50px; position: relative; overflow: hidden`. Below 920px: 1 column, padding 28px, radius 28px.
- Decorative `::before`: 280×280 olive-faint circle positioned `right: -100px; top: -100px`.
- **Left: portrait placeholder.** Aspect-ratio 4/5, border-radius 24px, repeating-linear-gradient stripe pattern with a label pill at bottom-left reading `"PORTRET — vervang met eigen foto"`. **Replace with real portrait.**
- **Right:**
  - Pill: `"Over mij"` (olive-faint).
  - H2: `"Even voorstellen — <em>Javer Hannani.</em>"` — the `<em>` is `font-style: normal; color: var(--olive)`.
  - Paragraph 1: "Vanaf mijn zestiende werk ik met jongeren — eerst als vrijwilliger en activiteiten­begeleider, later als hulpverlener en regisseur. Inmiddels tien jaar ervaring in **verschillende zwaartes**: van lichte coaching tot complexe casusregie."
  - Paragraph 2: "Ik studeerde af aan de **HBO Social Work** met het excellentie­programma en ben **SKJ-geregistreerd**. Praktisch en oplossings­gericht, met oog voor het verhaal eronder — en met de overtuiging dat jongeren rust, vertrouwen en tijd verdienen. Voor opdrachtgevers betekent dat: korte lijnen, heldere afspraken en bereikbaarheid wanneer het nodig is."
  - Stats grid (3-col): `"10 jr / ervaring in de jeugdhulp"`, `"SKJ / geregistreerd"`, `"HBO+ / Social Work met excellentie"`. Each is a `var(--cream)` rounded tile (16px radius, padding 16px). Number is Bricolage 500, 1.7rem, color `var(--olive-deep)`. Label is 0.78rem, color `var(--ink-2)`.

### 4. Samenwerking (`#werkwijze`) — 4 process steps

Section header centered: pill `"Samenwerking"`, H2 `"Hoe een opdracht meestal verloopt."`, body `"Van eerste aanvraag tot afsluitende rapportage — in vier overzichtelijke stappen."`

Steps grid `.process`: `display: grid; gap: 14px` (vertical list).

Each step `.step`:
- `background: #fff; border: 1px solid var(--line); border-radius: 22px; padding: 24px 28px`
- Grid: `grid-template-columns: 90px 1fr auto; gap: 24px; align-items: center` (60px first col on mobile; `.dur` wraps to full-width row on small screens).
- Big number `.n`: Bricolage 500, 3rem (2.2rem mobile), color `var(--olive)`, line-height 1.
- H4 + p: standard.
- Duration pill `.dur`: olive-faint background, olive-deep text, padding 8×14, radius 999, 0.78rem, `white-space: nowrap`.

The 4 steps (exact copy):

| # | H4                          | Body                                                                                                                                                | Dur                       |
|---|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| 01| Aanvraag                    | U mailt of belt met een casus, een lopend project of een specifieke vraag. Ik reageer binnen één werkdag met een eerste reactie.                    | ≤ 1 werkdag               |
| 02| Kennismaking & match        | Korte verkenning of het past — bij u op locatie, bij mij of digitaal. We bespreken inhoud, beschikbaarheid en tarief.                               | ~ 1 uur · vrijblijvend    |
| 03| Inzet                       | Uitvoering met korte lijn naar u als opdrachtgever en het netwerk rond de jongere. Tussentijds bereikbaar, geen onnodige administratie.            | Op maat                   |
| 04| Rapportage & afronding      | Heldere tussentijdse terugkoppeling en een afsluitend gesprek. Met, indien gewenst, een schriftelijk eindverslag.                                   | Op vaste momenten         |

### 5. Opdrachtgevers (`#opdrachtgevers`)

Section header centered: pill `"Opdrachtgevers"`, H2 `"Voor wie ik werk."`, body `"Drie type partijen die mij inzetten — elk met een eigen vraagstuk en tempo."`

3-column audience grid (.audience), 1-col on mobile.

Each card `.aud`: white background, line border, radius 22px, padding 28px, flex column gap 12px.
- Tag (small uppercase olive-deep label).
- H4 (Bricolage 500, 1.4rem).
- UL with checkmark bullets — `li::before { content: "✓"; color: var(--olive); font-weight: 600 }`, items separated by hairline borders.

**The 3 cards (exact copy):**

1. **Gemeentes & wijkteams** — H4: "Wanneer een casus om extra handen vraagt."
   List: Casusregie op lopende trajecten / Jeugdhulp via ZIN of PGB / Overbruggings­zorg bij wachttijd / Korte, heldere terugkoppeling

2. **Zorgaanbieders** — H4: "Wanneer uw caseload of expertise tekortschiet."
   List: Detachering of onderaannemerschap / Complexe casuïstiek erbij pakken / Bokscoaching als interventie / Tijdelijke vervanging of uitbreiding

3. **Scholen & projecten** — H4: "Wanneer er meer nodig is dan de mentor kan bieden."
   List: Groepswerk & weerbaarheids­trainingen / Individuele begeleiding op school / Inzet bij jongeren­projecten / Meedenken aan programma-ontwerp

### 6. Contact (`#contact`)

Large rounded contact box `.contactBox`: white background, line border, radius 36px, padding 60px (32px mobile), 2-col grid (1-col mobile), positioned olive-faint decorative circle at bottom-left.

- Left column:
  - Pill `"Contact"` (olive-faint).
  - H2: `"Bespreek vrijblijvend <em>een opdracht.</em>"` (em → olive normal-style).
  - Body: `"Een casus, een lopend project of een specifieke vraag? Stuur een bericht of bel direct. Ik reageer binnen één werkdag — en als het niet past, denk ik graag mee over een passend alternatief."`
  - Primary CTA: `"Stuur een bericht →"` linking `mailto:info@socialedienstverlener.nl`.
- Right column (`.links`, vertical stack gap 12px). 3 link tiles:
  | Label / value                                                    | href                                  |
  |-------------------------------------------------------------------|---------------------------------------|
  | `Bellen of appen` / `06 — 33 66 83 70`                            | `tel:+31633668370`                    |
  | `E-mail` / `info@socialedienstverlener.nl`                        | `mailto:info@socialedienstverlener.nl`|
  | `WhatsApp` / `Direct bericht via WhatsApp`                        | `https://wa.me/31633668370` (new tab) |

  Each tile: `background: var(--cream); padding: 18px 22px; border-radius: 16px; font-weight: 500; display: flex; justify-content: space-between; align-items: center`. Hover → `background: var(--olive-faint)`. Right side has a 36×36 olive circle with white arrow `→`.

### 7. Footer

Centered footer block, padding `50px 0 90px` (extra bottom space to clear the floating cookie banner).

- Logo lockup: same `mark` (s + olive D in circle) + "De Sociale Dienstverlener".
- Row of meta items: `"© 2026 · Freelancer, voor de jeugd."`, `"SKJ geregistreerd"`, `"Regio Noord-Holland"`, `"Privacy"` (link, placeholder).
- Color: `var(--ink-2)`, font-size 0.86rem.

### 8. Cookie banner (fixed, bottom)

Functional-cookies-only AVG notice.

- Position: `fixed; bottom: 18px; left: 18px; right: 18px; max-width: 520px; margin: 0 auto z-index: 60`.
- Card: white, line border, radius 20px, padding `22px 24px`, shadow `0 22px 50px -22px #1a1c1440`.
- H5: `"Cookies & privacy"` with leading olive dot (8×8 circle).
- Body: `"Deze website gebruikt alleen functionele cookies om te zorgen dat alles werkt. Geen tracking, geen advertenties. Lees meer in het privacystatement."`
- 2 buttons in a row, each `flex: 1`, padding `12px 18px`, radius 999, weight 500:
  - "Alleen noodzakelijk" — ghost (transparent + line border)
  - "Akkoord" — dark filled (`var(--ink)` background, white text)
- **Behavior:** On click of either, persist choice to `localStorage` under key `sdv_cookie_choice` (value `"accept"` or `"decline"`), and slide the banner out via `.hidden` class (`transform: translateY(140%); opacity: 0; pointer-events: none`). On subsequent page loads, if the key exists, banner is hidden on mount.
- **Note:** Currently the site doesn't set any actual cookies; the banner is courtesy-level AVG compliance. If analytics or third-party scripts are added later, gate them on `localStorage.getItem('sdv_cookie_choice') === 'accept'`.

---

## Tweaks Panel — Design-mode only

The current HTML includes a "Tweaks" panel that lets the designer toggle 3 visual variables live: headline copy variant, accent intensity, and density. **This panel is a design-iteration tool and should NOT be shipped in production**, BUT the developer should pick the chosen variant values from it.

**Chosen defaults (what to ship):**

- **Headline:** Variant 1 — `"Jeugdhulp op maat — daar waar het reguliere aanbod tekortschiet."`
- **Accent:** Standard
- **Density:** Standard

The 4 other headline variants in the file are for reference. If the client later changes their mind, they're documented here:

| # | Headline                                                                         |
|---|----------------------------------------------------------------------------------|
| 1 | Jeugdhulp op maat — daar waar het reguliere aanbod tekortschiet. **(SHIP THIS)** |
| 2 | Inzetbare jeugdhulp voor casuïstiek die om méér vraagt.                          |
| 3 | Tien jaar in de jeugdhulp. Eén paar handen, direct inzetbaar.                    |
| 4 | Een vaste schakel in een complex jeugd-landschap.                                |
| 5 | Freelance jeugdhulp die naast de jongere staat — en naast u.                     |

**You do not need to port the tweaks panel itself, just hard-code the chosen variant.**

---

## Interactions & Behavior

- **Smooth anchor scroll** to all `#section-id` links. The current site uses CSS `html { scroll-behavior: smooth }`.
- **Sticky nav** with `backdrop-filter: blur(10px)` and translucent white background.
- **Button hover:** `transform: translateY(-1px)` on all `.btn`. Primary button background transitions from `var(--ink)` → `var(--olive-deep)` on hover (200ms).
- **Service card hover:** lifts 2px, gains soft shadow, border tinted olive.
- **Contact link tile hover:** background goes from `var(--cream)` → `var(--olive-faint)`.
- **External links** (WhatsApp) open in new tab: `target="_blank" rel="noopener"`.
- **No JavaScript animations** beyond the cookie banner transform/opacity slide.

## Responsive behavior

Mobile breakpoints used in the design:
- **920px**: hero collapses to single column; about-card collapses; contact-box collapses.
- **820px**: nav links list hides (only brand + CTA show); services grid collapses to single column; audience cards collapse to single column.
- **720px**: process step's `.dur` pill wraps to a new row.
- **520px**: hero stack shrinks further; c2 widens to 78%.

Below 820px, the site needs a **mobile menu** — the current prototype simply hides the nav links. The developer should add a hamburger + slide-out / dropdown.

## Accessibility checklist

- All clickable links/buttons have text labels (no icon-only buttons except the close `×` in tweaks).
- Cookie banner has `role="dialog" aria-label="Cookievoorkeuren"`.
- Color contrast: olive-deep on cream-deep is the tightest pair — verify >4.5:1 (it's close; bump to `#2d3e00` if needed).
- All decorative SVGs are inline and inherit color via `currentColor`.
- Provide an `<html lang="nl">` (already present in the prototype).
- Replace placeholder photos with real ones having proper `alt` text — e.g. `alt="Portret van Javer Hannani"`.

## SEO meta (already set, keep)

- `<title>De Sociale Dienstverlener — Javer Hannani</title>`
- `<meta name="description" content="Freelance jeugdhulpverlening 13–27 jaar in Noord-Holland. SKJ geregistreerd." />`
- Add Open Graph + Twitter meta tags for nicer link previews.
- Add a `<link rel="canonical">` once hosted.
- Submit a sitemap to Google Search Console.

## Assets

- `assets/logo.png` — the supplied brand logo (transparent background). Use it in the favicon, the `<head>` `<link rel="icon">`, and optionally in the footer if the client prefers the full logo over the "sD" lockup. The visual brand-mark used in the design (sD circle) is a typographic rendering, not the logo itself — both can coexist.
- **Photography to be supplied by client:**
  - Portrait of Javer (vertical, 4:5 aspect) for the About block.
  - Sfeerfoto (any aspect) for the hero c1 placeholder — could be a bokszaal, wandeling, or natural-light gesprek.

## Files in this handoff

- `site.html` — the full single-file design prototype. Inline `<style>` + inline `<script>` for cookie banner and tweaks panel. Loads Google Fonts `Bricolage Grotesque` and `DM Sans`.
- `assets/logo.png` — brand logo, 3125×1806 PNG, transparent background. Olive-green wordmark "DE SOCIALE DIENSTVERLENER" on a black abstract mark.
- `screenshots/` — reference screenshots of each major section, in order:
  - `01-hero.png` — above-the-fold hero with headline + card stack
  - `02-diensten.png` — services grid (6 tiles)
  - `03-over.png` — about block with portrait + bio + stats
  - `04-samenwerking.png` — 4-step process list
  - `05-opdrachtgevers.png` — audience cards (3 columns)
  - `06-contact.png` — contact block with 3 link tiles
  - `07-cookie-banner.png` — floating cookie banner state at top of page
- `README.md` — this file.

## Open questions for the developer

1. **Real contact form?** Currently the page uses `mailto:` and `tel:` links. Decide with client whether to add a Formspree/Netlify-style form.
2. **Mobile nav menu** — the prototype hides links below 820px. A hamburger menu is needed.
3. **Privacy & cookie statement page** — the cookie banner and footer reference `/privacy` placeholders. A short statement page needs to be written (with client).
4. **Photography** — placeholders need replacing before launch.
5. **Domain migration** — current site is on Wix at `socialedienstverlener.nl`. Coordinate DNS swap with the client; preserve email DNS records (MX, SPF, DKIM) since `info@socialedienstverlener.nl` is in active use.
6. **Analytics?** — none currently. If desired, recommend a privacy-friendly option (Plausible/Umami) and gate behind cookie consent.

---

_Generated as a handoff package for Claude Code implementation. Treat the HTML as design source-of-truth; rebuild in the target framework._
