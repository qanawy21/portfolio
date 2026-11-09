# Mahmoud Shehto - Portfolio

Terminal-style portfolio: a `$` prompt bar, a hero with a blinking cursor, and sections written like code
(`//about`, `class Company // Role`, `const Project`, `// key_skills = [ ... ]`). Dark by default, light when the
system asks for it. Built with Next.js 16, React 19 and TypeScript, with plain CSS (no Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Needs Node 20.9 or newer.

## Edit your content

All text lives in **`data/portfolio.ts`**: profile, skills, experience, training, projects, education and certificates.

- **Photo:** put an image in `public/` and set `profile.photo` (for example `"/me.webp"`). Empty hides it.
- **Resume:** replace `public/resume.pdf`.
- **Projects:** `kind: "client"` or `"personal"` only changes the small label next to the name.
- **Certificates:** the first six show before *View All*, so keep the strongest first.
- **Colours:** the variables at the top of `app/globals.css` (`--g` green, `--b` blue, `--p` purple, `--a` amber).

## Deploy

Push to GitHub and import the repository in Vercel with the default Next.js settings.
