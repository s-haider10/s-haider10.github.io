---
layout: page
title: Motion Prediction
description: Transformer-based steering angle prediction for autonomous vehicles
img:
importance: 3
category: AV
selected: true
---

## Overview

A comparative study introducing a Transformer-based model for predicting steering angles in autonomous vehicles, leveraging spatial awareness through positional encoding.

## Architecture

- **Transformer Encoder Blocks**: Self-attention mechanism captures long-range dependencies in sequential driving data
- **Positional Encoding**: Enables the model to understand spatial and temporal relationships in the input sequence
- **Regression Head**: Predicts continuous steering angle values from encoded representations

## Key Results

- Achieved **95.5% accuracy** on test datasets
- Demonstrated competitive performance against CNN and RNN baselines
- Efficient inference suitable for real-time deployment

## Methodology

1. **Data Preprocessing**: Driving sequences normalized and augmented for robust training
2. **Feature Extraction**: Visual features extracted from front-facing camera feeds
3. **Sequence Modeling**: Transformer encoder processes temporal sequences of features
4. **Prediction**: Final layer outputs steering angle predictions

## Technical Stack

- PyTorch
- Transformer architecture
- Computer vision preprocessing
- Autonomous driving datasets

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <a href="/assets/pdf/Motion_Prediction.pdf" class="btn btn-primary">View Full Report (PDF)</a>
    </div>
</div>
