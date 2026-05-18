export const isSelf = (name: string) => /haider/i.test(name);

export function formatAuthor(name: string): string {
  const trimmed = name.trim();
  const match = trimmed.match(/^(.*?)(\*+)?$/);
  const base = (match?.[1] ?? trimmed).trim();
  const marker = match?.[2] ?? '';

  if (isSelf(base)) return `S. A. Haider${marker}`;

  const parts = base.split(/\s+/);
  if (parts.length < 2) return `${base}${marker}`;

  const last = parts[parts.length - 1];
  const initials = parts
    .slice(0, -1)
    .map(p => `${p.charAt(0).toUpperCase()}.`)
    .join(' ');
  return `${initials} ${last}${marker}`;
}
