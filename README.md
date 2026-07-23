# Isabelle Usuquen — Portfolio Site

A personal portfolio and press-kit site for Isabelle Usuquen, a musical theatre actress, singer, and dancer. Built as a single-page-app-style React site with client-side routing, it brings together her reels, gallery, credits, headshots, resume, and a contact form in one place.

**Live pages:** Welcome · About · Media · Gallery · Headshots & Resume (H&R) · Contact

## Why this project is useful

- **All-in-one press kit** — recruiters, directors, and casting agents can view reels, browse a production gallery, download headshots/resume, and get in touch without leaving the site.
- **Embedded media reels** — YouTube, Instagram, and TikTok clips are embedded directly with a swipeable carousel, so visitors don't have to jump between platforms.
- **In-browser resume viewer** — the resume PDF renders inline via `react-pdf` (with a direct download option), so it's viewable on any device without opening a separate app.
- **Fast, dependency-light stack** — React 19 + Vite 8 with hand-written CSS (no UI framework), keeping the site quick to load and easy to restyle.
- **Working contact form** — submissions go straight to an inbox via Formspree, no backend required.

## Tech stack

- **React 19** — UI components, [React Router 7](https://reactrouter.com/) for client-side routing
- **Vite 8** — dev server and production build
- **react-pdf** — renders `resume.pdf` inline on the H&R page
- **Plain CSS** — design tokens and scoped class names in `src/App.css`
- **Formspree** — handles contact form submissions (no custom backend)

## Getting started

### Prerequisites
- Node.js 20+ and npm

### Installation

```bash
git clone https://github.com/mattusuquen/issa-website.git
cd issa-website
npm install
```

### Environment variables

The contact form posts to Formspree and needs a form ID. Create a `.env` file in the project root:

```bash
VITE_FORMSPREE_ID=your_formspree_form_id
```

You can get a form ID by creating a free form at [formspree.io](https://formspree.io/).

### Run the dev server

```bash
npm run dev
```

The site runs at `http://localhost:5173` with hot module replacement.

### Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Project structure

```
public/
  gallery/           production photos used on the Gallery page
  resume.pdf         resume served to the H&R page and download link
  headshot*.jpg      headshots used across Hero, Contact, and H&R pages

src/
  components/
    NavBar.jsx           sticky nav with route-aware dropdown menu
    ScrollToTop.jsx       resets scroll position on route change
    Hero.jsx             welcome/landing page
    About.jsx            bio section with scroll-reveal animation
    Media.jsx             YouTube / Instagram / TikTok reel carousels
    Gallery.jsx           draggable photo marquee + lightbox, grouped by show
    HeadshotsResume.jsx   downloadable headshots + inline PDF resume viewer
    Contact.jsx           contact form (submits to Formspree)
    Footer.jsx            social links, shown on every page
  App.jsx              route definitions
  App.css              design tokens and all styles
  main.jsx             app entry point
```

> Note: `Awards.jsx`, `Credits.jsx`, `CreditsRow.jsx`, `StatsBar.jsx`, `Training.jsx`, `Skills.jsx`, and `src/data/` are legacy components from an earlier version of the site and aren't currently wired into any route.

## Content updates

| What to change | Where |
|---|---|
| Bio copy | `src/components/About.jsx` |
| Media reel links | `platforms` array in `src/components/Media.jsx` |
| Gallery photos | `images` array in `src/components/Gallery.jsx`, files in `public/gallery/` |
| Headshots | `headshots` array in `src/components/HeadshotsResume.jsx`, files in `public/` |
| Resume | replace `public/resume.pdf` |
| Social links | `socials` array in `src/components/Footer.jsx` |
| Nav links | `src/components/NavBar.jsx` |
| Colors / fonts | `:root` tokens in `src/App.css` |

## Getting help

- Open an [issue](https://github.com/mattusuquen/issa-website/issues) for bugs or feature requests
- For React/Vite questions, see the [React docs](https://react.dev/) and [Vite docs](https://vite.dev/)
- For form/inbox setup questions, see the [Formspree docs](https://help.formspree.io/)

## Maintainers & contributing

Maintained by [Matt Usuquen](https://github.com/mattusuquen). Pull requests are welcome — please open an issue first for larger changes so we can discuss the approach.
