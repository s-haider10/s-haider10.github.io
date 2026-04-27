# Personal site — s-haider10.github.io

Astro + content collections + GitHub Pages. Designed to be edited from the
GitHub mobile app, no local environment required.

---

## Site map

| Page             | URL                | Source                                                |
| ---------------- | ------------------ | ----------------------------------------------------- |
| About (homepage) | `/`                | `src/pages/index.astro` + `src/content/bio.md`        |
| Research         | `/research`        | `src/pages/research.astro`                            |
| Paper detail     | `/research/{slug}` | auto from `src/content/papers/`                       |
| Projects         | `/projects`        | `src/pages/projects.astro`                            |
| Writings         | `/writings`        | `src/pages/writings.astro`                            |
| Writing detail   | `/writings/{slug}` | auto from `src/content/writings/` (non-external only) |
| News archive     | `/news`            | `src/pages/news.astro`                                |
| Mountains        | `/mountains`       | `src/pages/mountains.astro`                           |
| CV               | `/cv.pdf`          | `public/cv.pdf`                                       |

Header pattern, every page: `Syed **Ali** Haider — {PageName}` + nav.
Homepage adds an `Ali — [photo]` hero block below the bar.

---

## Content layout

```
src/content/
├── bio.md                ← homepage bio prose
├── papers/               ← research papers (themed)
├── projects/             ← applied projects (free-form categories)
├── writings/             ← essays, lecture notes (free-form categories, dual-publish)
└── news/                 ← dated news items
```

To update the site, edit a markdown file and commit. GitHub Actions
rebuilds and deploys in ~90 seconds.

---

## First-time setup

### 1. Push this repo

```bash
git init
git add .
git commit -m "Astro rebuild"
git branch -M main
git remote add origin https://github.com/s-haider10/s-haider10.github.io.git
git push -u origin main --force
```

> **Backup the old site first.** `git checkout -b al-folio-backup &&
git push origin al-folio-backup` on your existing repo before force-pushing.

### 2. Enable GitHub Pages

Repo → Settings → Pages → Source: **GitHub Actions**. Push to `main`.
Live at https://s-haider10.github.io within ~2 min.

### 3. Replace the profile photo

Homepage references `/images/profile.svg` (placeholder with initials).

**Option A** — keep the .svg path: overwrite `public/images/profile.svg`
with your own SVG. No code change.

**Option B** — use a JPG: drop your photo at `public/images/profile.jpg`,
then in `src/pages/index.astro` change `src="/images/profile.svg"` to
`src="/images/profile.jpg"`.

### 4. Add your CV

Drop `public/cv.pdf`. The nav link already points to `/cv.pdf`.

### 5. Run locally (optional)

```bash
npm install
npm run dev      # → http://localhost:4321
```

Requires Node 20+.

---

## Mobile editing

### News item (≤ 30s)

`src/content/news/` → new file `YYYY-MM-DD-slug.md`:

```markdown
---
date: 2026-05-12
title: "Paper accepted at ICML 2026."
---
```

The homepage shows the 5 most recent. Older items reveal via "+ show more"
button (no separate page needed for ≤ ~30 items; for more, the full
archive at `/news` is always accessible from the nav).

### Paper

PDF → `public/pdfs/your-paper.pdf`.
New file at `src/content/papers/your-paper.md`:

```yaml
---
title: "Your Paper"
venue: "NeurIPS 2026"
status: in-progress # or under-review, published, target
theme: auditing-multi-agent # or behavior-under-pressure, safety-deployment
date: 2026-05-12
one_liner: "Single-sentence why-this-matters."
pdf: /pdfs/your-paper.pdf
code: https://github.com/...
---
[paper writeup body]
```

Detail page auto-generates at `/research/your-paper`.

### Project

`src/content/projects/your-project.md`:

```yaml
---
title: "Your Project"
category: "Tools & systems" # free-form, edit at will
date: 2026-05-12
one_liner: "..."
code: https://github.com/...
---
```

Categories are inferred from data. Add a new category by typing it.

### Writing — internal

`src/content/writings/your-writing.md`:

````yaml
---
title: "Your essay"
category: "On technology"   # free-form
date: 2026-05-12
one_liner: "Optional"
---

# Body

Markdown body. Code blocks with Shiki syntax highlighting:

​```python
print("hi")
​```

Images: `![Caption](/images/figure.jpg)`.
````

Detail page auto-generates at `/writings/your-writing`.

### Writing — external (link out instead)

Just add `external_url`, omit the body:

```yaml
---
title: "My LessWrong post"
category: "On technology"
date: 2026-05-12
external_url: "https://www.lesswrong.com/posts/..."
---
```

The listing row links straight out (new tab, marked with `↗`).
No detail page is generated.

### Bio

`src/content/bio.md`. Edit, commit. Homepage updates.

---

## Frontmatter reference

### `papers/*.md`

```yaml
title: string                   # required
venue: string                   # required
status: in-progress | under-review | published | target   # required
theme: auditing-multi-agent | behavior-under-pressure | safety-deployment   # required
date: YYYY-MM-DD                # required
one_liner: string               # required
authors: [string, ...]          # optional
pdf, code, arxiv, poster,
project_page: string            # all optional
order: number                   # optional, lower = earlier in theme
```

### `projects/*.md`

```yaml
title: string                   # required
category: string                # required, free-form
date: YYYY-MM-DD                # required
one_liner: string               # required
venue, pdf, code, project_page  # all optional
order: number                   # optional
```

### `writings/*.md`

```yaml
title: string # required
category: string # required, free-form
date: YYYY-MM-DD # required
one_liner: string # optional
external_url: string # optional → publishes externally instead of generating a page
draft: boolean # optional, default false
```

### `news/*.md`

```yaml
date: YYYY-MM-DD # required
title: string # required
```

---

## Layout

`Base.astro` takes a `pageName` prop and renders the title bar as
`Syed **Ali** Haider — {pageName}` plus nav. Layout options:

- `"narrow"` (60rem max) — homepage, news, mountains, 404
- `"wide"` (50rem max) — paper / writing detail pages
- `"with-rail"` (60rem max with sticky 11rem sidebar on ≥960px) — research, projects, writings

Mobile collapses everything to single column; rail hides below 960px.

---

## Design

### Rebrand (1 line)

`src/styles/global.css`:

```css
--accent: #6b2c20; /* deep oxblood */
```

Try `#1e3a5f` (navy), `#2c5f3d` (forest), `#3a3a3a` (charcoal).

### Other knobs

- `--bg`, `--text`, `--muted`, `--border` — neutral palette
- `--content-max: 60rem` (~960px) — outer width
- `--measure-prose: 38rem` — prose paragraph cap (reading width)
- `--font-serif`, `--font-mono` — fonts

---

## Stack

- **Astro 5** static site generator
- **Content layer + Zod schemas** for type-checked frontmatter
- **One stylesheet** (`global.css`), no Tailwind
- **Newsreader** serif (Google Fonts)
- **GitHub Actions** → **GitHub Pages**

Almost no JS — only the news show-more button (~15 lines, inline).

---

## File map

```
.
├── astro.config.mjs
├── package.json                       # one dep: astro
├── tsconfig.json
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   ├── pdfs/                          # drop PDFs here
│   └── images/profile.svg             # placeholder; replace with your photo
└── src/
    ├── content.config.ts              # collection schemas
    ├── styles/global.css              # design system (single file)
    ├── layouts/Base.astro             # head + header + footer
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── Rail.astro                 # sticky desktop sidebar
    │   ├── PaperRow.astro
    │   └── ProjectRow.astro
    ├── pages/
    │   ├── index.astro                # / (about)
    │   ├── research.astro             # /research
    │   ├── research/[...slug].astro   # /research/{paper}
    │   ├── projects.astro             # /projects
    │   ├── writings.astro             # /writings
    │   ├── writings/[...slug].astro   # /writings/{slug}
    │   ├── news.astro                 # /news
    │   ├── mountains.astro            # /mountains
    │   └── 404.astro
    └── content/
        ├── bio.md
        ├── papers/
        ├── projects/
        ├── writings/
        └── news/
```
