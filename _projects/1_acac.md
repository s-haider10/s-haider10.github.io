---
layout: page
title: ACAC-4K Classification
description: Ensemble deep learning framework for multi-class image classification with novel data cleaning techniques
img: assets/img/nyu.png
importance: 1
category: ML
selected: true
---

## Overview

An ensemble framework combining ResNet and DenseNet architectures for multi-class image classification on the ACAC-4K dataset.

## Key Contributions

- **Confusing Data Points Cleaner**: A novel technique to filter ambiguous high-confidence misclassifications from the training set, improving model robustness
- **Focal Loss Integration**: Addressed significant class imbalance in the dataset using Focal Loss, which down-weights easy examples and focuses training on hard negatives
- **Ensemble Architecture**: Combined predictions from ResNet and DenseNet models to leverage complementary feature representations

## Results

- Achieved **71% accuracy** on the test set
- Demonstrated improved performance on minority classes compared to baseline models

## Technical Stack

- PyTorch
- ResNet, DenseNet architectures
- Focal Loss for class imbalance
- Custom data preprocessing pipeline

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <a href="/assets/pdf/ACAC_Report.pdf" class="btn btn-primary">View Full Report (PDF)</a>
    </div>
</div>
