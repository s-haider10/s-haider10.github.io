// Render a single-line string with [text](url) links into HTML.
// Everything non-link is HTML-escaped.
export function renderInline(title: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;');

  // Escape the whole string first, then replace markdown links (still recognizable
  // since their special chars — `[`, `]`, `(`, `)` — aren't HTML-special).
  return escape(title).replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, text, href) => {
      const external = /^https?:/i.test(href);
      const attrs = external ? ` target="_blank" rel="noopener"` : '';
      return `<a href="${href}"${attrs}>${text}</a>`;
    },
  );
}
