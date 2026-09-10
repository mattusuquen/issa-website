# Isabelle Usuquen — Portfolio Site

A personal portfolio and press-kit site for Isabelle Usuquen, a musical theatre actress, singer, and dancer. It's a single-page-app-style React site with client-side routing that brings her reels, photo gallery, headshots, resume, and a contact form together in one place — built so casting directors and recruiters can find everything they need without leaving the site.

**Live site:** [issa-website-ten.vercel.app](https://issa-website-ten.vercel.app)
**Pages:** Welcome · About · Media · Gallery · Headshots & Resume (H&R) · Contact

## Highlights

- **All-in-one press kit** — reels, a production photo gallery, downloadable headshots/resume, and a contact form, all in one place.
- **Embedded media reels** — YouTube, Instagram, and TikTok clips play in a swipeable carousel, no jumping between apps.
- **In-browser resume viewer** — the resume PDF renders inline via `react-pdf`, with a direct download option, so it's readable on any device.
- **Lightweight stack** — React 19 + Vite 8 with hand-written CSS and no UI framework, so the site stays fast and easy to restyle.
- **Working contact form** — submissions go straight to an inbox via Formspree; no custom backend needed.

## Tech stack

| Layer | Tool |
| --- | --- |
| UI | React 19 + [React Router 7](https://reactrouter.com/) |
| Build/dev server | Vite 8 |
| Resume viewer | `react-pdf` |
| Styling | Plain CSS — design tokens in `src/App.css` |
| Contact form | Formspree (no custom backend) |

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
git clone https://github.com/mattusuquen/issa-website.git
cd issa-website
npm install
```

### Configure the contact form

The contact form posts to Formspree and needs a form ID. Create a `.env` file in the project root:

```
VITE_FORMSPREE_ID=your_formspree_form_id
```

Get a free form ID at [formspree.io](https://formspree.io/).

### Run it

```bash
npm run dev
```

The site runs at `http://localhost:5173` with hot module replacement.

### Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project structure

```
public/
  gallery/            production photos used on the Gallery page
  resume.pdf          resume served to the H&R page and download link
  headshot*.jpg       headshots used across Hero, Contact, and H&R pages

src/
  components/
    NavBar.jsx             sticky nav with route-aware dropdown menu
    ScrollToTop.jsx        resets scroll position on route change
    Hero.jsx               welcome/landing page
    About.jsx              bio section with scroll-reveal animation
    Media.jsx              YouTube / Instagram / TikTok reel carousels
    Gallery.jsx            draggable photo marquee + lightbox, grouped by show
    HeadshotsResume.jsx    downloadable headshots + inline PDF resume viewer
    Contact.jsx            contact form (submits to Formspree)
    Footer.jsx             social links, shown on every page
  App.jsx                route definitions
  App.css                design tokens and all styles
  main.jsx               app entry point
```

> `Awards.jsx`, `Credits.jsx`, `CreditsRow.jsx`, `StatsBar.jsx`, `Training.jsx`, `Skills.jsx`, and `src/data/` are leftovers from an earlier version of the site and aren't wired into any route.

## Updating content

| To change | Edit |
| --- | --- |
| Bio copy | `src/components/About.jsx` |
| Media reel links | `platforms` array in `src/components/Media.jsx` |
| Gallery photos | `images` array in `src/components/Gallery.jsx`, files in `public/gallery/` |
| Headshots | `headshots` array in `src/components/HeadshotsResume.jsx`, files in `public/` |
| Resume | Replace `public/resume.pdf` |
| Social links | `socials` array in `src/components/Footer.jsx` |
| Nav links | `src/components/NavBar.jsx` |
| Colors / fonts | `:root` tokens in `src/App.css` |

## Getting help

- Bugs or feature requests → open an [issue](https://github.com/mattusuquen/issa-website/issues)
- React/Vite questions → [React docs](https://react.dev/), [Vite docs](https://vite.dev/)
- Contact form / inbox setup → [Formspree docs](https://help.formspree.io/)

## Maintainers & contributing

Maintained by [Matt Usuquen](https://github.com/mattusuquen). PRs are welcome — open an issue first for larger changes so we can discuss the approach.
