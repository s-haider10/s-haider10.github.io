---
title: "MultiPetri: Auditing Genuine Multi-Agent LLM Systems"
venue: "NeurIPS 2026 Datasets & Benchmarks (target)"
status: "in-progress"
theme: "auditing-multi-agent"
date: 2026-04-01
authors:
  - "Syed Ali Haider"
one_liner: "An auditing framework for production multi-agent LLM systems — the case Petri leaves open."
order: 1
# Add these as you have them:
# pdf: /pdfs/multipetri.pdf
# code: https://github.com/s-haider10/multipetri
# arxiv: https://arxiv.org/abs/...
---

## What this is

Anthropic's [Petri](https://www.anthropic.com/research/petri) framework is a strong primitive for alignment auditing of single-agent LLMs. In its current form, however, multi-agent behavior is *simulated* — the framework injects synthetic tool calls and synthetic peer responses into a single real target model. That choice is reasonable for the original scope but leaves a meaningful gap: production multi-agent systems in industry today involve multiple real models actually interacting, often with heterogeneous objectives and incomplete shared context.

MultiPetri is an extension that closes this gap. It supports genuine multi-agent rollouts, with full state tracking across agents, structured logging of inter-agent messages and tool calls, and a set of auditing primitives designed for the failure modes that only emerge under interaction — coordination breakdowns, cross-agent deception, misalignment amplification, and emergent goal drift.

## Why it matters

Practitioners building multi-agent systems today are deploying without an auditing story. Petri's framing is the right one — alignment auditing as a first-class engineering primitive — but the tooling needs to catch up to what's actually being shipped. MultiPetri is meant to be that tooling.

## Status

Currently in active development, targeting NeurIPS 2026 Datasets & Benchmarks track. A Tier-1 empirical finding (e.g., misalignment amplification or inter-agent deception emergence under specific conditions) is treated as a bonus.
