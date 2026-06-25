# Isabelle Usuquen — Portfolio Site

Personal portfolio site for Isabelle Usuquen, musical theatre artist. Built with React 19 + Vite.

## Stack

- **React 19** — UI components
- **Vite 8** — dev server and build
- **Plain CSS** — design tokens + scoped class names in `App.css`
- No external UI libraries or CSS frameworks

## Project structure

```
src/
  components/
    NavBar.jsx       sticky navigation bar
    Hero.jsx         name/tagline hero block
    StatsBar.jsx     four highlight stats (productions, voice, degree, awards)
    About.jsx        headshot + bio
    Credits.jsx      stage credits table
    CreditsRow.jsx   single row within the credits table
    Awards.jsx       national awards banner
    Training.jsx     education & training grid
    Skills.jsx       special skills pill list
    Footer.jsx       contact footer
  data/
    productions.js   static array of stage credits
    skills.js        static array of special skills
  App.jsx            thin composition layer — renders sections in order
  App.css            design tokens and all styles
```

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` with hot module replacement.

## Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Content updates

| What to change | Where |
|---|---|
| Stage credits | `src/data/productions.js` |
| Special skills | `src/data/skills.js` |
| Bio copy | `src/components/About.jsx` |
| Awards | `src/components/Awards.jsx` |
| Training cards | `src/components/Training.jsx` |
| Stats bar values | `src/components/StatsBar.jsx` |
| Colors / fonts | `:root` tokens in `src/App.css` |
| Headshot image | replace `public/headshot1.jpg` |
