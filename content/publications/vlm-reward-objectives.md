---
title: Revisiting the Learning Objectives of Vision-Language Reward Models
authors: [Simon Roy*, Samuel Barbeau*, Giovanni Beltrame, Christian Desrosiers, Nicolas Thome]
venue: World Modeling Workshop (extended abstract)
tag: WMW 2026
date: "2026-01"
arxiv: "2512.20675"
---
Learning generalizable reward functions is a core challenge in embodied intelligence. Recent work leverages contrastive vision language models (VLMs) to obtain dense, domain-agnostic rewards without human supervision. These methods adapt VLMs into reward models through increasingly complex learning objectives, yet meaningful comparison remains difficult due to differences in training data, architectures, and evaluation settings. In this work, we isolate the impact of the learning objective by evaluating recent VLM-based reward models under a unified framework with identical backbones, finetuning data, and evaluation environments. Using Meta-World tasks, we assess modeling accuracy by measuring consistency with ground truth reward and correlation with expert progress. Remarkably, we show that a simple triplet loss outperforms state-of-the-art methods, suggesting that much of the improvements in recent approaches could be attributed to differences in data and architectures.
