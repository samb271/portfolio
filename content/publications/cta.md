---
title: "CTA: Cross-Task Alignment for Better Test Time Training"
authors: [Samuel Barbeau, Pedram Fekri, David Osowiechi, Ali Bahri, Moslem Yazdanpanah, Masih Aminbeidokhti, Christian Desrosiers]
venue: Preprint, under review
tag: preprint
date: "2025-07"
arxiv: "2507.05221"
---
Deep learning models have demonstrated exceptional performance across a wide range of computer vision tasks. However, their performance often degrades significantly when faced with distribution shifts, such as domain or dataset changes. Test-Time Training (TTT) has emerged as an effective method to enhance model robustness by incorporating an auxiliary unsupervised task during training and leveraging it for model updates at test time. In this work, we introduce CTA (Cross-Task Alignment), a novel approach for improving TTT. Unlike existing TTT methods, CTA does not require a specialized model architecture and instead takes inspiration from the success of multi-modal contrastive learning to align a supervised encoder with a self-supervised one. This process enforces alignment between the learned representations of both models, thereby mitigating the risk of gradient interference, preserving the intrinsic robustness of self-supervised learning and enabling more semantically meaningful updates at test-time. Experimental results demonstrate substantial improvements in robustness and generalization over the state-of-the-art on several benchmark datasets.
