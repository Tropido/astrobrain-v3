# Brain Higher School — Astro Bright v3 (Mega Menu + Landing Pages)

## What's new
- Header **mega menu**: hover Courses → vendor → certification list.
- Each certification opens a **landing-page style** course page with sections, CTA, FAQ, sticky sidebar.
- Still easy to edit: courses are Markdown files under `src/content/courses/`.

## Run locally
```bash
npm install
copy .env.example .env
npm run dev
```
Open http://localhost:4321

## Edit a course landing page
Open one file in:
- `src/content/courses/*.md`

Frontmatter fields you can edit:
- `title`, `vendor`, `level`, `durationHours`
- `heroTagline`, `heroBadges`, `heroImage`
- `audience`, `prerequisites`, `outcomes`, `modules`
- `includes`, `tools`, `faq`, `exam`

Body content below the frontmatter is also shown.

## Add images
Place images in `public/images/` and set `heroImage: "/images/your-image.jpg"`.

## Deploy
Build: `npm run build` then upload `dist/` to OVH web hosting.
