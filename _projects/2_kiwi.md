---
layout: page
title: Kiwi+
description: Context-aware educational chatbot using RAG for personalized learning experiences
img:
importance: 2
category: EdTech
selected: true
---

## Overview

Kiwi+ is a multimodal educational chatbot that uses Retrieval-Augmented Generation (RAG) to provide context-specific explanations rather than direct answers, fostering deeper learning engagement.

## Key Features

- **Context-Aware Responses**: Instead of providing direct answers, Kiwi+ retrieves relevant course materials and guides students toward understanding through scaffolded explanations
- **Multimodal Integration**: Supports audio and video modalities to accommodate different learning styles and accessibility needs
- **Knowledge Retrieval**: RAG-based architecture ensures responses are grounded in course-specific content

## Architecture

1. **Document Ingestion**: Course materials (PDFs, lecture notes, videos) are processed and embedded into a vector store
2. **Query Understanding**: Student questions are analyzed to determine intent and required context
3. **Retrieval**: Relevant passages are retrieved from the knowledge base
4. **Response Generation**: LLM generates pedagogically-sound responses that guide rather than answer

## Impact

- Designed to foster deeper engagement with course material
- Supports more accessible learning experiences through multimodal content delivery

## Technical Stack

- LangChain for RAG pipeline
- Vector database for semantic search
- OpenAI GPT for response generation
- Audio/video processing modules

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <a href="/assets/pdf/NYUSH_DS_CS_Kiwi__Capstone.pdf" class="btn btn-primary">View Full Report (PDF)</a>
    </div>
</div>
