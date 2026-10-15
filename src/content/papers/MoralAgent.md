---
title: "What Is a Morally Aligned AI Agent? A Philosophical Coverage Map and Its Failure Under Composition"
venue: "NeurIPS 2026 Workshop on Foundations of Agentic Systems Theory (FAST), Paris"
status: "accepted"
theme: "agent-alignment"
date: 2026-10-05
authors:
  - "Syed Ali Haider"
one_liner: "An 8×3 coverage map of agency and morality, and why per-agent alignment fails to compose."
order: 3
---

## What this is

Alignment research has a vocabulary problem: we ask systems to be safe, reliable, and trustworthy without specifying what those words require of a system philosophically, then optimize precisely for targets we have not defined. The paper decomposes agency into eight dimensions and morality into three — normativity, deliberation, and judgment — and crosses them into an 8×3 coverage map. Unlike prior framework papers, it supplies the coding protocol and survey standing behind every cell. Coverage is uneven in a specific way: deliberation reaches only two of the eight agency dimensions, against four for normativity and six for judgment.

## Why it matters

The paper then asks whether these properties survive composition into agentic systems. Largely they do not: two are blocked by standing impossibility results (Arrow, 1951; List & Pettit, 2002), one dilutes (Thompson, 1980), and one attenuates along delegation chains. Per-agent alignment does not lift to system-level alignment, which reframes several observed multi-agent failures as structural rather than incidental.
