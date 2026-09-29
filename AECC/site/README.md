# AECC Marketing Website

The full 5-page production marketing site for **Antros Engineering Construction
Company**. Built from the design system in this project — every color, type,
spacing, radius, shadow, and component lifts from `colors_and_type.css` and the
patterns documented in the project root `README.md`.

## Pages

| Page                         | File                  | Notes |
|------------------------------|-----------------------|-------|
| Home                         | `index.html`          | Hero · Why AECC · Two service lines · Vision/Mission · CTA |
| About                        | `about.html`          | Page hero · Overview + At-a-glance sidebar · Vision/Mission · Why AECC · CTA |
| Industrial Services          | `industrial.html`     | Page hero · 8-card grid (blue accent) · 4-stat strip · CTA |
| Home & Facility Services     | `home-services.html`  | Page hero · 8-card grid (amber accent) · How it works (4 steps) · CTA |
| Contact                      | `contact.html`        | Page hero · Reach card + Response promise (left) + Request-a-quote form (right) |

## Run

Open `index.html` in a browser. No build step — React + Babel are loaded from
unpkg, page components are inline JSX.

## File map

```
website/
├── index.html            — Home
├── about.html            — About
├── industrial.html       — Industrial Services
├── home-services.html    — Home & Facility Services
├── contact.html          — Contact
├── styles.css            — Base shared styles (imports ../colors_and_type.css)
├── styles-pages.css      — Page-specific styles (hero, pillars, service lines, etc)
├── Icons.jsx             — Lucide-style icon set (40+ icons)
├── Primitives.jsx        — Button · Eyebrow · Logo · IconTile · CheckItem · SectionHead · PageHero
├── Header.jsx            — Sticky navy header w/ 5 nav links + mobile menu
├── Footer.jsx            — 4-column dark footer
├── CTABanner.jsx         — Reusable navy CTA banner (eyebrow/title/body/actions props)
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── IndustrialPage.jsx
    ├── HomeServicesPage.jsx
    └── ContactPage.jsx
```

## Design decisions

- **Two-line color signalling.** Industrial work uses blue tiles and accent;
  Home & Facility work uses amber. Same components, different variants.
- **Eyebrow chip above every section H2.** Creates rhythm — the visitor learns
  to expect a small label that names the section before the headline.
- **Icon-tile motif everywhere.** Every iconographic element uses the same
  48×48 (or 56×56) rounded tile pattern. This is the most repeated visual in
  the system.
- **Card hover is the only "delight" interaction.** translateY(-4px) + shadow/lg
  + accent border. Buttons get a 1px lift + colored shadow. Nothing else moves.
- **No carousels, no popups, no chatbots, no cookie banner mock.** Per brief.
- **No photography in v1.** Icon tiles stand in for stock photos. Real editorial
  photo slots can be added when imagery is available.

## Open questions / placeholders

- **Phone number** is `+91-XXXXXXXXXX` — replace with real number before launch.
- **Office address / GST / CIN** not yet in footer — ask client for what they
  want visible.
- **Photography** — site is currently icon-only. Add real industrial site photos
  and a residential install photo per the imagery guidelines in `../README.md`.
- **Logo** — placeholder square-A wordmark from the design system. Drop real
  SVG into `../assets/logo/` and swap in `Header.jsx` / `Footer.jsx`.
- **Form submission** — currently just shows a success state on submit. Wire up
  to a real endpoint (email/CRM/Zapier) before launch.
