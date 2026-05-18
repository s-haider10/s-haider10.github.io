---
title: "PolicyLLM: Policy Extraction and Enforcement for Runtime AI Governance"
venue: "ICML Technical AI Governance Research 2026 (poster)"
status: "published"
theme: "technical-ai-governance"
date: 2026-01-01
authors:
  - "Syed Ali Haider*"
  - "B. Huh*"
  - "H. H. Kim*"
  - "G. Nalagatla"
  - "C. Guerrero Alvarez"
  - "Y. Raj"
  - "S. Vosoughi"
one_liner: "Compiles natural-language safety policies into symbolically validated decision graphs that act as a runtime governance layer over LLM outputs."
order: 1
pdf: /pdfs/PolicyLLM_ICML_TAIGR_preprint.pdf
code: https://github.com/s-haider10/PolicyLLM
---

## What this is

A runtime governance system that takes natural-language safety policies — the kind of documents organizations actually write — and compiles them into formally validated decision graphs using Z3 SMT solving. The compiled artifact sits between an LLM and its consumers, enforcing the policy on every output. Policies move from English prose into a structured representation that can be checked, audited, and verifiably enforced, without the policy author having to learn a formal specification language.

## Why it matters

The gap between _stated_ and _enforced_ safety policy is one of the most consistent failure modes in deployed LLM systems. Most organizations have safety policies; few have the infrastructure to make those policies operative at inference time. PolicyLLM is a step toward closing that gap on the technical side — making informal policy machine-checkable without requiring it to be written formally in the first place. The longer-term bet is that runtime governance, not just training-time alignment, is where a meaningful share of real-world safety work has to happen.
