---
title: "AgentFuse: Predicting Cascading Failures in Multi-Agent LLM Pipelines"
venue: "NeurIPS 2026 (target)"
status: "in-progress"
theme: "auditing-multi-agent"
date: 2026-03-15
authors:
  - "Syed Ali Haider"
one_liner: "Middleware that predicts where multi-agent pipelines will break — before they break."
order: 2
# pdf: /pdfs/agentfuse.pdf
# code: https://github.com/s-haider10/agentfuse
---

## What this is

Most multi-agent LLM pipelines fail in the seams: an upstream agent's plausible-but-wrong output gets passed to a downstream agent that confidently builds on it, and the error cascades. AgentFuse is a middleware layer that sits between agents in a pipeline and predicts the likelihood that any given hand-off is about to propagate a failure downstream.

The contribution is methodological as well as empirical: the framework treats inter-agent hand-offs as the primary unit of analysis, rather than individual agent outputs. This reframing turns out to be more predictive of end-to-end pipeline failure than scoring agents individually.

## Why it matters

The pattern of cascading failure in agent pipelines is currently invisible to standard evaluation. Per-agent benchmarks miss it by construction. Without an instrument for the hand-off layer, the field has no good answer to "where will this pipeline fail in production?" — which is the question deployment teams actually ask.
