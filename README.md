# Maison Belle — Static Site

Pure HTML / CSS / JS export. No build step. Drop into Netlify and you're live.

## Structure
```
.
├── index.html              Home
├── services.html           Services & pricing
├── about.html              Story + team
├── booking.html            Booking form (Netlify Forms ready)
├── contacts.html           Contacts + map
├── assets/
│   ├── styles.css          All styles
│   ├── main.js             Sticky nav, mobile menu, reveal, form toast
│   └── *.jpg               Images
├── _data/                  CMS-managed content (JSON)
│   ├── site.json
│   ├── home.json
│   ├── about.json
│   └── services.json
├── content/
│   └── testimonials/       Markdown entries (one per testimonial)
├── admin/
│   ├── index.html          Decap CMS (Netlify CMS) admin app
│   └── config.yml          CMS schema
└── netlify.toml            Build config + clean URLs
```

## Deploy to Netlify
1. Push this folder to a Git repo.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build command: *(none)*  ·  Publish directory: `.`
4. Done.

## Enable the CMS admin
1. In Netlify: **Site → Identity → Enable Identity**.
2. **Identity → Registration**: Invite-only.
3. **Identity → Services → Git Gateway**: enable.
4. Visit `https://your-site.netlify.app/admin/` and log in.

The admin uses **Decap CMS** (the maintained fork of Netlify CMS).

## Editing content
- **Site Settings** → contact info, social links.
- **Pages** → Home, About copy, gallery, testimonials.
- **Services** → categories, benefits, prices.
- **Testimonials** → add entries one by one (Markdown).

> Note: `_data/*.json` is the source of truth for the rendered pages.
> The HTML mirrors the JSON manually (no JS framework). When content changes,
> re-render the HTML or edit the matching `<section>` in the corresponding `.html`.
> For a fully dynamic flow, plug a tiny generator (Eleventy / Astro) on top of `_data/`.

## Booking form
Uses Netlify Forms (`data-netlify="true"`). Submissions appear under
**Netlify → Forms** once deployed.

## Local preview
Any static server works:
```bash
npx serve .
# or
python3 -m http.server 8080
```
