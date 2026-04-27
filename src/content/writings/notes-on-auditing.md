---
title: "Notes on what 'auditing' an LLM actually means"
category: "On technology"
date: 2026-04-15
one_liner: "Auditing-as-discipline borrows vocabulary from finance and security, but the analogy breaks down in informative ways."
---

This is a placeholder writing — replace it with your own. Markdown features all work:

## Headers

Standard markdown headers, inline `code`, **bold**, *italic*, [links](https://example.com).

## Code blocks

Fenced code blocks get Shiki syntax highlighting automatically:

```python
def audit(model, scenarios):
    for scenario in scenarios:
        trace = run(model, scenario)
        if trace.contains_failure():
            yield trace
```

## Images

Drop images into `public/images/` and reference them like:

```markdown
![Caption](/images/your-figure.jpg)
```

## Blockquotes

> Long-quoted passages render with a subtle left rule and italic styling, useful
> for extended quotations from books or papers.

## Lists

- Unordered lists work
- With multiple items
- And nesting:
  - Like this

1. Numbered lists too
2. Same deal

---

To publish externally instead of writing on-site, set `external_url` in the
frontmatter and skip the body. The listing row will link straight to the
external post.
