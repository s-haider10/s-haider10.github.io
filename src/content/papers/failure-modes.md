---
title: "A Taxonomy of LLM Failure Modes Under Pressured Interaction"
venue: "COLM 2026 (under review)"
status: "under-review"
theme: "behavior-under-pressure"
date: 2026-02-10
authors:
  - "Syed Ali Haider"
one_liner: "Mapping the regimes where standard LLM evaluations stop being informative."
order: 2
# pdf: /pdfs/failure-modes.pdf
---

## What this is

A systematic taxonomy of the failure modes LLMs exhibit under pressured, adversarial, or long-horizon interaction — the regimes where standard benchmarks stop being informative. The taxonomy is built bottom-up from observed model behavior across a structured set of evaluations rather than top-down from theoretical safety categories.

## Why it matters

Without shared vocabulary for failure modes, the field can't accumulate findings. Two papers reporting "the model was deceptive" may be describing very different phenomena with different causes and different mitigations. A grounded taxonomy is a precondition for cumulative progress on these problems, and the existing taxonomies are either too coarse (single-token-level robustness categories) or too theoretical (mesa-optimization, deceptive alignment) to be actionable for empirical work.
