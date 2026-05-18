---
title: "Position: Belief Attributions Require Behavioral Evidence"
venue: "ICML Philosophy meets ML 2026 (under review)"
status: "under-review"
theme: "agent-alignment"
date: 2026-01-20
authors:
  - "Syed Ali Haider"
one_liner: "What makes something a belief is not its form but its functional role in guiding action across perturbation."
order: 3
pdf: /pdfs/Belief_Attributions_Require_Behavioral_Evidence.pdf
---

## What this is

A position paper arguing that the field's current methods for attributing beliefs to ML systems — verbal outputs, log probabilities, probing-classifier directions, internal circuits — disagree with each other, and that the question of which one _is_ the belief is misposed at the level of structural form. Drawing on Ramsey's functionalist account of credence and a parallel move in consciousness research, the paper defends a criterion: a representation counts as a belief when it plays the right functional role in guiding action across perturbation. Two recent results illustrate the criterion's bite. Farquhar et al. show that contrast-consistent search recovers prominent features rather than knowledge — exactly the failure a structural method should exhibit. Hase et al. show that causal-tracing localization is uncorrelated with edit success, yet locate-then-edit methods still dominate the field.

## Why it matters

Interpretability is increasingly cited as a foundation for safety arguments — "we can read off what the model believes, therefore we can verify it." But three subfields — probing, mechanistic interpretability, and model editing — are quietly converging on the same philosophical question without recognizing it as one. Until we settle what _kind of thing_ a belief attribution is supposed to be tracking, we will keep building methods that look successful on their stated targets and fail on the underlying question. The paper is not arguing for a particular method; it is arguing that functional grounding is the discipline the question requires.
