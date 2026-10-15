---
title: "Moral Surface Without Moral Character: Value Labels Do Not Determine LLM Agent Behavior"
venue: "NeurIPS 2026 Workshop on Foundations of Agentic Systems Theory (FAST), Paris"
status: "accepted"
theme: "agent-alignment"
date: 2026-10-05
authors:
  - "Syed Ali Haider"
one_liner: "The value a system prompt names does not pin down agent behavior: one operationalization clause can swing defection by 47 points within the same moral framework."
order: 4
# Add these as you have them:
# pdf: /pdfs/moral-surface.pdf
# openreview: https://openreview.net/forum?id=...
---

## What this is

Frontier labs install values into language models through training, but every deployed model is wrapped in a system prompt that operationalizes those values for a specific setting. That deployment-time layer is what audits actually examine, yet its contribution to behavior has not been isolated from training-time alignment. This paper asks whether the value _label_ a prompt invokes determines behavior, or whether the _operationalization_ of that label silently does the work.

Across six frontier models in the iterated Prisoner's Dilemma and a four-player Public Goods Game, the label does not pin behavior down: a hierarchy over labels exists, but variation within a single label is as large as variation across labels. Two virtue-ethics prompts naming the same framework, differing only in one operationalization clause, produce mean defection rates of 26% and 73% against an always-defect opponent — a 47-point gap that reaches 87 points within a single model. Four paraphrases of Kantian deontology swing defection by up to 73 points. The gap reproduces across six non-Western traditions, five resource-pressure regimes, both games, and an open-weights model. Constitutionally trained models show smaller gaps (3–10 points versus 40–87), so training-time alignment attenuates the effect without closing it.

## Why it matters

The gap is invisible to every signal an auditor would reach for. The label is uninformative by construction; the chain-of-thought advocates cooperation in 37% of rounds that end in defection; and justification style is stamped by model identity rather than persona (persona explains 9% of stylistic variance). This is _moral surface without moral character_. Conformity regimes that elicit principle-naming cannot detect it; matched-variant behavioral probing can. Specifying which values a deployed system holds is not sufficient to constrain what it does — what must be documented and tested is how those values are operationalized.
