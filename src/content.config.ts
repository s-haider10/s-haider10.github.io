import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ─── Research themes (the spine of /research) ────────────────────────
// To add or rename a theme, edit this list AND the labels in
// src/pages/research.astro (and THEMES in scripts/new-content.mjs).
export const THEMES = [
  "agent-alignment",
  "monitoring",
  "adversarial-robustness",
  "technical-ai-governance",
  "nlp",
] as const;

// ─── Papers ───────────────────────────────────────────────────────────
const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    venue: z.string(), // e.g. "NeurIPS 2026 D&B"
    status: z.enum([
      "manuscript-in-preparation",
      "under-review",
      "accepted",
      "published",
      "target",
    ]),
    theme: z.enum(THEMES),
    date: z.coerce.date(),
    authors: z.array(z.string()).optional(),
    one_liner: z.string(), // single sentence: "why this matters"
    pdf: z.string().optional(), // e.g. "/pdfs/multipetri.pdf"
    code: z.string().optional(),
    arxiv: z.string().optional(),
    openreview: z.string().optional(),
    project_page: z.string().optional(),
    poster: z.string().optional(),
    order: z.number().default(0), // sort within theme (lower first)
    draft: z.boolean().default(false), // hide from /research and skip the detail page
  }),
});

// ─── Projects (applied / systems work) ───────────────────────────────
// Categories are free-form strings. The /projects page groups by
// whatever distinct values appear in the data — add a new category
// just by typing it in a frontmatter field.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(), // e.g. "Tools & systems"
    venue: z.string().optional(), // e.g. "NYU Shanghai", "Dartmouth"
    date: z.coerce.date(),
    one_liner: z.string(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    project_page: z.string().optional(),
    order: z.number().default(0),
  }),
});

// ─── News (dated updates) ────────────────────────────────────────────
// News, awards and service share one shape: a dated one-line entry.
const datedItem = z.object({
  date: z.coerce.date(),
  title: z.string(), // supports [links](url) and **bold**
  order: z.number().default(0), // tie-break within the same date (lower first)
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: datedItem,
});

// ─── Grants & awards / Service (homepage sections) ───────────────────
const awards = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/awards" }),
  schema: datedItem,
});

const service = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/service" }),
  schema: datedItem,
});

// ─── Writings (essays, lecture notes, philosophy, takes) ─────────────
// Dual publish:
//   - external_url set  → row links out (LessWrong, Medium, etc.); no detail page
//   - external_url unset → row links to /writings/[slug]; full markdown body
//                          renders as a page with Shiki syntax highlighting,
//                          images, etc.
//
// Categories are free-form. The /writings page groups by distinct values.
const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    category: z.string(), // e.g. "Lecture notes", "On technology"
    date: z.coerce.date(),
    one_liner: z.string().optional(),
    external_url: z.string().optional(), // if set: link out instead of internal page
    draft: z.boolean().default(false), // hide from listing
  }),
});

export const collections = { papers, projects, news, awards, service, writings };
