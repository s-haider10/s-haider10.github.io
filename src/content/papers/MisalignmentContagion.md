---
title: "Misalignment Contagion: Can a Misaligned Minority Shift Aligned Agents in Multi-Agent LLM Deliberation?"
venue: "COLM 2026 (main conference)"
status: "published"
theme: "agent-alignment"
date: 2026-01-15
authors:
  - "Syed Ali Haider"
  - "Soroush Vosoughi"
one_liner: "A misaligned minority can systematically shift aligned LLM agents' private safety beliefs through multi-agent deliberation."
order: 1
pdf: /pdfs/Misalignment_Contagion__preprint.pdf
code: https://github.com/s-haider10/Misalignment-Contagion
openreview: https://openreview.net/forum?id=tj2fLGyWC9
---

## What this is

A systematic study of multi-agent LLM debate under adversarial conditions. Aligned agents are placed in deliberation with a misaligned minority across four network topologies and tracked across 27,900 trials. The finding: the minority does not need majority status to win — it reshapes the private safety beliefs of the aligned agents through deliberation itself. The effect holds across topologies and is not reducible to obvious failure modes like jailbreaks or prompt injection.

## Why it matters

Debate is one of the most prominent proposals for scalable oversight of capable AI systems — the idea being that disagreement between agents will surface truth without requiring a human to evaluate every step. This paper is direct evidence that the proposal is not robust to coalition adversaries: a small misaligned group can move the consensus in a direction the aligned agents would not, on reflection, endorse. Any scalable oversight scheme that depends on multi-agent deliberation has to confront this failure mode before being deployed.
