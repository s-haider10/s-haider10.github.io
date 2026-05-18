---
title: "CoT Visibility in Extensive-Form Games"
category: "AI Safety"
# venue: "In progress"
date: 2026-02-01
one_liner: "Tests whether visible chain-of-thought is asymmetrically helpful across incentive structures: cooperative games vs. misaligned signaling."
order: 2
---

A formalization of CoT-augmented extensive-form games where strategies factor into a reasoning policy and an action policy, and an information structure distinguishes observability (whether the CoT is visible) from elicitation (whether the agent _knows_ it's visible). Two canonical games are tested: a one-shot Trust Game with aligned-enough interests, and a Crawford–Sobel Sender–Receiver game with misaligned interests. Three frontier reasoning models — Claude Opus 4.7, GPT-5, Gemini 2.5 Pro — are run across four conditions spanning the information-structure lattice, with native reasoning APIs (not prompted reasoning tags) to ensure the CoT is the model's actual computation. The hypothesis: visibility is asymmetric across incentive structure — in Trust, it lifts cooperation; in Sender–Receiver, it unravels the private information signaling depends on.
