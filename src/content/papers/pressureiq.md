---
title: "PressureIQ: A DPO Dataset for LLM Behavior Under Pressure"
venue: "EMNLP 2026 (ARR May)"
status: "in-progress"
theme: "behavior-under-pressure"
date: 2026-04-15
authors:
  - "Syed Ali Haider"
one_liner: "A DPO dataset and training methodology for adversarial and pressured LLM interaction."
order: 1
# pdf: /pdfs/pressureiq.pdf
# code: https://github.com/s-haider10/pressureiq
---

## What this is

LLMs evaluated in single-turn, low-stakes settings often behave very differently when subjected to sustained adversarial pressure: prolonged push-back, social engineering, manipulation attempts, escalating requests. PressureIQ is a DPO dataset built specifically to surface and train against this divergence — preference pairs constructed from adversarial multi-turn rollouts, with annotation focused on behavior consistency under pressure rather than single-turn refusal accuracy.

The accompanying training methodology shows that DPO on this distribution improves robustness to a class of failures that standard refusal tuning leaves largely untouched.

## Why it matters

Most existing safety evaluations are single-turn and adversarially weak. The failures that matter operationally — cases where a model is talked into a behavior it would have refused in isolation — only show up under sustained pressure. PressureIQ is an attempt to make those failures measurable and trainable.
