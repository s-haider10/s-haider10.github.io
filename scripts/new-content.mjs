#!/usr/bin/env node
// Interactive scaffolder for content collections.
// Run: npm run new
//
// Field definitions mirror src/content.config.ts. If you change a schema
// there, change it here too.

import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = join(ROOT, "src", "content");

const THEMES = [
  "agent-alignment",
  "adversarial-robustness",
  "technical-ai-governance",
  "nlp",
];

const STATUSES = [
  "manuscript-in-preparation",
  "under-review",
  "accepted",
  "published",
  "target",
];

// Each field: { key, label, type, opts?, optional?, default? }
const SCHEMAS = {
  papers: {
    dir: "papers",
    dated: false,
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "venue", label: "Venue (e.g. NeurIPS 2026 D&B)", type: "text" },
      { key: "status", label: "Status", type: "choice", opts: STATUSES },
      { key: "theme", label: "Theme", type: "choice", opts: THEMES },
      { key: "date", label: "Date", type: "date" },
      { key: "authors", label: "Authors (comma-separated)", type: "list", optional: true },
      { key: "one_liner", label: "One-liner (why this matters)", type: "text" },
      { key: "pdf", label: "PDF path (e.g. /pdfs/x.pdf)", type: "text", optional: true },
      { key: "code", label: "Code URL", type: "text", optional: true },
      { key: "arxiv", label: "arXiv URL", type: "text", optional: true },
      { key: "project_page", label: "Project page URL", type: "text", optional: true },
      { key: "poster", label: "Poster path", type: "text", optional: true },
      { key: "order", label: "Order within theme (lower first)", type: "number", default: 0 },
    ],
    body: "## What this is\n\n\n\n## Why it matters\n\n\n",
  },
  projects: {
    dir: "projects",
    dated: false,
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "category", label: "Category (e.g. AI Safety, Tools & systems)", type: "text" },
      { key: "venue", label: "Venue (e.g. Dartmouth)", type: "text", optional: true },
      { key: "date", label: "Date", type: "date" },
      { key: "one_liner", label: "One-liner", type: "text" },
      { key: "pdf", label: "PDF path", type: "text", optional: true },
      { key: "code", label: "Code URL", type: "text", optional: true },
      { key: "project_page", label: "Project page URL", type: "text", optional: true },
      { key: "order", label: "Order (lower first)", type: "number", default: 0 },
    ],
    body: "",
  },
  news: {
    dir: "news",
    dated: true, // filename is YYYY-MM-DD-slug.md, date derived from it
    fields: [
      { key: "date", label: "Date", type: "date" },
      { key: "title", label: "Title", type: "text" },
    ],
    body: "",
  },
  writings: {
    dir: "writings",
    dated: false,
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "category", label: "Category (e.g. Lecture notes, On technology)", type: "text" },
      { key: "date", label: "Date", type: "date" },
      { key: "one_liner", label: "One-liner", type: "text", optional: true },
      {
        key: "external_url",
        label: "External URL (leave blank for a local page)",
        type: "text",
        optional: true,
      },
      { key: "draft", label: "Draft? (hide from listing)", type: "bool", default: false },
    ],
    body: "",
  },
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

const today = () => new Date().toISOString().slice(0, 10);

// YAML double-quoted scalars accept JSON string escaping, so this is safe
// for titles containing colons, quotes, etc.
const yamlStr = (s) => JSON.stringify(String(s));

async function main() {
  // NOTE: deliberately not using node:readline/promises. Its question() only
  // resolves for the first line when stdin is a pipe; every later call hangs.
  // Iterating lines works identically for a TTY and for piped input, which
  // also makes this script testable.
  const rl = createInterface({ input: stdin, terminal: false });
  const lineIter = rl[Symbol.asyncIterator]();
  let eof = false;

  const ask = async (q, dflt = "") => {
    stdout.write(dflt ? `${q} [${dflt}]: ` : `${q}: `);
    const { value, done } = await lineIter.next();
    if (done) {
      eof = true;
      stdout.write("\n");
      return dflt;
    }
    const a = String(value).trim();
    if (!stdin.isTTY) stdout.write(a + "\n"); // echo piped input so logs read sensibly
    return a || dflt;
  };

  const bail = (msg) => {
    console.error(`\n✗ ${msg}`);
    rl.close();
    process.exit(1);
  };

  const names = Object.keys(SCHEMAS);
  console.log("\nWhich collection?");
  names.forEach((n, i) => console.log(`  ${i + 1}) ${n}`));
  let idx = NaN;
  while (Number.isNaN(idx) || idx < 0 || idx >= names.length) {
    idx = parseInt(await ask("Choice"), 10) - 1;
    if (eof && (Number.isNaN(idx) || idx < 0 || idx >= names.length)) {
      bail("no collection chosen");
    }
  }
  const kind = names[idx];
  const schema = SCHEMAS[kind];
  console.log(`\n— new ${kind} entry —\n`);

  const values = {};
  for (const f of schema.fields) {
    if (f.type === "choice") {
      console.log(`${f.label}:`);
      f.opts.forEach((o, i) => console.log(`  ${i + 1}) ${o}`));
      let c = NaN;
      while (Number.isNaN(c) || c < 0 || c >= f.opts.length) {
        c = parseInt(await ask("Choice", "1"), 10) - 1;
        if (eof && (Number.isNaN(c) || c < 0 || c >= f.opts.length)) {
          bail(`no valid choice for "${f.label}"`);
        }
      }
      values[f.key] = f.opts[c];
      console.log("");
      continue;
    }
    if (f.type === "date") {
      let d = "";
      while (!/^\d{4}-\d{2}-\d{2}$/.test(d)) {
        d = await ask(`${f.label} (YYYY-MM-DD)`, today());
        if (eof && !/^\d{4}-\d{2}-\d{2}$/.test(d)) bail(`invalid date for "${f.label}"`);
      }
      values[f.key] = d;
      continue;
    }
    if (f.type === "bool") {
      const a = (await ask(`${f.label} y/N`, f.default ? "y" : "n")).toLowerCase();
      values[f.key] = a.startsWith("y");
      continue;
    }
    if (f.type === "number") {
      const a = await ask(f.label, String(f.default ?? 0));
      values[f.key] = Number.isFinite(Number(a)) ? Number(a) : (f.default ?? 0);
      continue;
    }
    if (f.type === "list") {
      const a = await ask(f.label + (f.optional ? " (blank to skip)" : ""));
      if (a) values[f.key] = a.split(",").map((x) => x.trim()).filter(Boolean);
      continue;
    }
    // text
    let a = "";
    do {
      a = await ask(f.label + (f.optional ? " (blank to skip)" : ""));
      if (eof && !a && !f.optional) bail(`"${f.label}" is required`);
    } while (!a && !f.optional);
    if (a) values[f.key] = a;
  }

  const slug = slugify(values.title);
  const filename = schema.dated ? `${values.date}-${slug}.md` : `${slug}.md`;
  const dir = join(CONTENT, schema.dir);
  const path = join(dir, filename);

  try {
    await access(path);
    console.error(`\n✗ ${path} already exists — aborting.`);
    rl.close();
    process.exit(1);
  } catch {
    /* does not exist, good */
  }

  // Emit in schema order so files stay visually consistent.
  const lines = ["---"];
  for (const f of schema.fields) {
    const v = values[f.key];
    if (v === undefined) continue;
    if (f.type === "list") {
      lines.push(`${f.key}:`);
      for (const item of v) lines.push(`  - ${yamlStr(item)}`);
    } else if (f.type === "date") {
      lines.push(`${f.key}: ${v}`);
    } else if (f.type === "number" || f.type === "bool") {
      lines.push(`${f.key}: ${v}`);
    } else if (f.key === "pdf" || f.key === "code" || f.key === "arxiv" ||
               f.key === "project_page" || f.key === "poster" || f.key === "external_url") {
      lines.push(`${f.key}: ${v}`); // URLs/paths: unquoted, matching existing files
    } else {
      lines.push(`${f.key}: ${yamlStr(v)}`);
    }
  }
  lines.push("---", "");
  if (schema.body) lines.push(schema.body);

  await mkdir(dir, { recursive: true });
  await writeFile(path, lines.join("\n"), "utf8");

  rl.close();
  console.log(`\n✓ created src/content/${schema.dir}/${filename}`);
  console.log(`  next: npm run check     (validates the schema)`);
  console.log(`        npm run dev       (preview at localhost:4321)\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
