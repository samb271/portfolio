---
title: "TRUST: Test-Time Refinement using Uncertainty-Guided SSM Traverses"
authors: [Sahar Dastani, Ali Bahri, Gustavo Adolfo Vargas Hakim, Moslem Yazdanpanah, Mehrdad Noori, David Osowiechi, Samuel Barbeau, Ismail Ben Ayed, Herve Lombaert, Christian Desrosiers]
venue: Conference on Neural Information Processing Systems (NeurIPS)
tag: NeurIPS 2025
date: "2025-12"
arxiv: "2509.22813"
---
State Space Models (SSMs) have emerged as efficient alternatives to Vision Transformers (ViTs), with VMamba standing out as a pioneering architecture designed for vision tasks. However, their generalization performance degrades significantly under distribution shifts. To address this limitation, we propose TRUST (Test-Time Refinement using Uncertainty-Guided SSM Traverses), a novel test-time adaptation (TTA) method that leverages diverse traversal permutations to generate multiple causal perspectives of the input image. Model predictions serve as pseudo-labels to guide updates of the Mamba-specific parameters, and the adapted weights are averaged to integrate the learned information across traversal scans. Altogether, TRUST is the first approach that explicitly leverages the unique architectural properties of SSMs for adaptation. Experiments on seven benchmarks show that TRUST consistently improves robustness and outperforms existing TTA methods.
