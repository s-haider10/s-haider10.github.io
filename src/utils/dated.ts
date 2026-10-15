// Shared helpers for dated one-line entries (news, awards, service).

type Dated = { data: { date: Date; order: number } };

// Most recent first; entries on the same date fall back to `order` (lower first).
export const byRecent = (a: Dated, b: Dated) =>
  b.data.date.getTime() - a.data.date.getTime() || a.data.order - b.data.order;

export const fmtDay = (d: Date) => d.toLocaleDateString('en-US', {
  month: 'short', day: '2-digit', year: 'numeric',
});

export const fmtMonth = (d: Date) => d.toLocaleDateString('en-US', {
  month: 'short', year: 'numeric',
});
