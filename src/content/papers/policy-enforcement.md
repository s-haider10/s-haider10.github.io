---
title: "Operationalizing Policy Enforcement for LLM Deployments"
venue: "ACL Industry 2026 (under review)"
status: "under-review"
theme: "safety-deployment"
date: 2026-01-20
authors:
  - "Syed Ali Haider"
one_liner: "What it actually takes to make a stated safety policy enforceable in production."
order: 1
# pdf: /pdfs/policy-enforcement.pdf
---

## What this is

A study of the gap between *stated* safety policies for LLM deployments and *enforceable* ones — the operational, organizational, and technical work required to make a policy something a deployed system actually satisfies. The paper draws on real deployment patterns from production-scale LLM systems and characterizes where stated policies tend to break down: policy ambiguity at the spec level, observability gaps at the system level, and incentive misalignment at the organizational level.

## Why it matters

Safety policies that look well-defined on paper frequently fail to translate into deployed behavior. Understanding why is necessary for any serious account of "responsible deployment" — and the answer is rarely a missing technical capability. More often, it's a missing seam between teams, between systems, or between a policy and the surface area where it has to hold.
