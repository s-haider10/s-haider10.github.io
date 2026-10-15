---
title: "Belief Attribution Requires Behavioral Evidence and Agents Now Supply It"
venue: "NeurIPS 2026 Workshop on Foundations of Agentic Systems Theory (FAST), Paris"
status: "accepted"
theme: "agent-alignment"
date: 2026-10-05
authors:
  - "Syed Ali Haider"
one_liner: "Agents now act under uncertainty with stakes, so belief claims about models can be tested against behavior."
order: 2
---

## What this is

Machine learning attributes beliefs to language models through verbal reports, output probabilities, probing classifiers, and localized circuits, and these operationalizations disagree. Philosophical work on belief in language models has explained why measurement moved inside the model: a model that only completes text offers little behavior to interpret, while its activations are fully accessible. This paper argues that premise is contingent, and that agentic deployment has removed it. A model that acts through tools over many steps, under consequences it can infer, faces choices under uncertainty with stakes — the setting in which Ramsey's functional account of belief was written.

The paper gives a criterion for belief attribution indexed to a decision class, a perturbation family, and a stake structure, built on recent utility-agnostic conditions for eliciting beliefs from an agent's choices. Structural evidence such as a probe direction counts only when intervening on the structure moves behavior across the perturbation family.

## Why it matters

Interpretability is increasingly cited as a foundation for safety arguments, which makes the question of what a belief attribution is tracking a practical one. Four published results — on contrast-consistent search, causal-tracing localization, theory-of-mind tests, and alignment faking — are reread as verdicts returned by single clauses of the criterion. The paper closes with a protocol for measuring what an agent believes.
