---
title: "Strategic Communication & Deception Under Alignment Tiers"
category: "AI Safety"
# venue: "Complete (null finding)"
date: 2026-01-01
one_liner: "Null result: alignment tier has no detectable effect on deceptive communication in multi-agent PD; prosocial framing dominates regardless."
order: 3
---

A six-round repeated Prisoner's Dilemma in groups of 4, with information asymmetry (each agent gets a private 80%-accurate signal about the optimal action) and a free-text message preceding each action, plus a +1 bonus whenever the partner cooperates after reading the message. Qwen-2.5-32B-Instruct across four alignment tiers — Base, SFT, RL, HHH — with three persona conditions. 864 agent-rounds. The null is the result: no detectable effect of alignment tier on any behavioral metric (χ² = 1.07, p = 0.78). All tiers cooperate ~90%, override their own private signal 76–82%, and are judged deceptive 50–57%. The interpretation: communication style is fixed by instruction-tuning before any alignment prompt is applied, and prompt-level alignment is a lossy proxy for training-level alignment in multi-agent deception settings.
