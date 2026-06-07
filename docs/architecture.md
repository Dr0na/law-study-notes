# architecture.md

# SPPU LLB Autonomous Study Material Generation System

## Overview

This system is an autonomous multi-agent content generation platform designed to generate complete SPPU LLB examination-oriented study material from:

* Official syllabus documents
* Reference textbooks
* Bare Acts
* Constitutional texts
* Class notes
* Previous Year Question Papers (PYQs)
* Supplementary legal resources

The system automatically:

* Discovers syllabus structure
* Builds a legal knowledge base
* Enriches content with statutes and case laws
* Predicts examination trends
* Generates study material
* Generates revision material
* Generates NotebookLM source packs
* Generates visual prompts
* Validates output quality
* Produces final examination-ready content

---

# Design Goals

The system is designed to achieve:

## Completeness

Every syllabus topic must be covered.

Target:

```text
100% syllabus coverage
```

---

## Legal Accuracy

All legal content must originate from authoritative sources.

Authority hierarchy:

```text
Bare Act
    ↓
Constitution
    ↓
Supreme Court
    ↓
High Court
    ↓
Commentary
    ↓
Class Notes
```

Higher authority always overrides lower authority.

---

## Examination Focus

The system is designed for:

* SPPU LLB examinations
* University answer-writing
* Marks maximization
* Revision efficiency

---

## Visual Learning

The system generates:

* Mind Maps
* Flowcharts
* Timelines
* Concept Maps
* Revision Sheets
* Infographics

through NotebookLM-compatible prompts.

---

# System Architecture

The architecture is divided into four layers.

```text
Documentation Layer

        ↓

Orchestration Layer

        ↓

Agent Layer

        ↓

Template Layer
```

---

# Layer 1: Documentation Layer

Location:

```text
docs/
```

Purpose:

Human-readable system documentation.

Contains:

```text
architecture.md
pipeline.md
folder-structure.md
sppu-answer-writing-rules.md
notebooklm-integration.md
output-specification.md
```

Documentation is never executed.

Documentation exists only for understanding and maintenance.

---

# Layer 2: Orchestration Layer

Location:

```text
.agents/
```

Files:

```text
master-orchestrator.md

knowledge-orchestrator.md

content-orchestrator.md

visual-orchestrator.md
```

Purpose:

Control execution order.

Validate workflow stages.

Stop execution when quality gates fail.

---

## Master Orchestrator

Top-level controller.

Responsibilities:

* Execute workflow phases
* Enforce gates
* Manage failures
* Trigger final export

---

## Knowledge Orchestrator

Responsible for:

```text
Syllabus Discovery

Knowledge Building

Citation Enrichment

Coverage Validation
```

Output:

```text
Knowledge Base
```

---

## Content Orchestrator

Responsible for:

```text
PYQ Analysis

Exam Intelligence

Question Prediction

Study Material Generation

Revision Generation
```

Output:

```text
Study Material
```

---

## Visual Orchestrator

Responsible for:

```text
Visual Extraction

NotebookLM Source Packs

Visual Prompt Generation

Visual Validation
```

Output:

```text
Visual Assets
```

---

# Layer 3: Agent Layer

Individual agents perform actual work.

---

## Knowledge Phase

### syllabus-discovery

Purpose:

Identify:

* Subject
* Units
* Topics
* Subtopics

Output:

```text
syllabus.json
```

---

### knowledge-builder

Purpose:

Build legal knowledge repository.

Collect:

* Definitions
* Concepts
* Principles
* Classifications
* Illustrations

Output:

```text
knowledge-base
```

---

### citation-enricher

Purpose:

Attach legal references.

Generate:

* Acts
* Sections
* Articles
* Doctrines
* Amendments
* Case Laws
* Maxims

Output:

```text
enriched-knowledge
```

---

### syllabus-coverage-auditor

Purpose:

Verify:

```text
100% syllabus coverage
```

Failure blocks workflow.

---

# Content Phase

### pyq-analyzer

Purpose:

Analyze:

* PYQs
* Frequency
* Trends
* Weightage

Output:

```text
topic-frequency.json
```

---

### exam-intelligence

Purpose:

Predict:

* Important Topics
* Probable Questions
* Examination Priorities

---

### examiner-simulator

Purpose:

Simulate examiner behavior.

Generate:

* Expected 5 Mark Questions
* Expected 10 Mark Questions
* Expected 15 Mark Questions
* Predicted Question Paper

---

### study-material-generator

Purpose:

Generate complete study material.

Consumes:

* Enriched Knowledge
* Exam Intelligence
* Subject Templates

Produces:

* Topic Notes
* Model Answers
* Revision Sections

---

### revision-generator

Purpose:

Generate compact revision artifacts.

Produces:

```text
5 Marks Revision

10 Marks Revision

15 Marks Revision

One Day Before Exam

Last Hour Revision

Case Law Revision

Sections & Articles Revision
```

---

# Visual Phase

### visual-data-extractor

Purpose:

Extract structured visual metadata from notes.

Produces:

```json
{
  "mindmap": [],
  "timeline": [],
  "flowchart": []
}
```

---

### notebooklm-source-pack-generator

Purpose:

Generate optimized NotebookLM source documents.

Produces:

```text
Subject Source Pack

Unit Source Pack

Topic Source Pack
```

---

### notebooklm-visualizer

Purpose:

Generate NotebookLM-ready prompts.

Produces:

* Mind Maps
* Flowcharts
* Timelines
* Infographics
* Revision Sheets

---

### visual-qa-reviewer

Purpose:

Validate:

* Prompt Quality
* Visual Coverage
* Exam Relevance

Failure blocks workflow.

---

# Final Validation Phase

## qa-reviewer

Purpose:

Validate:

* Content Completeness
* Legal Accuracy
* Citation Coverage
* Revision Coverage
* Visual Metadata

Failure blocks workflow.

---

## exporter

Purpose:

Generate final deliverables.

Organize:

```text
Notes

Revision

Visuals

NotebookLM

Predictions

Reports
```

---

# Layer 4: Template Layer

Location:

```text
.templates/
```

Purpose:

Control study material structure.

Templates are not executable.

Templates are consumed only by:

```text
study-material-generator
```

---

# Supported Templates

```text
constitutional-law.md

contract-law.md

jurisprudence.md

family-law.md

property-law.md

tort-law.md

criminal-law.md

administrative-law.md

labour-law.md

company-law.md

public-international-law.md
```

---

# Execution Flow

```text
master-orchestrator

│

├── knowledge-orchestrator
│
│   ├── syllabus-discovery
│   ├── knowledge-builder
│   ├── citation-enricher
│   └── syllabus-coverage-auditor
│

├── content-orchestrator
│
│   ├── pyq-analyzer
│   ├── exam-intelligence
│   ├── examiner-simulator
│   ├── study-material-generator
│   └── revision-generator
│

├── visual-orchestrator
│
│   ├── visual-data-extractor
│   ├── notebooklm-source-pack-generator
│   ├── notebooklm-visualizer
│   └── visual-qa-reviewer
│

├── qa-reviewer
│

└── exporter
```

---

# Quality Gates

## Coverage Gate

Requirement:

```text
Coverage = 100%
```

---

## Citation Gate

Requirement:

Every topic must contain:

* Statute
* Section
* Case Law

---

## Study Material Gate

Requirement:

Every topic must contain:

* Definition
* Core Concepts
* Case Laws
* Conclusion

---

## Visual Gate

Requirement:

At least one visual artifact per topic.

High-weightage topics require:

* Mind Map
* Infographic
* Revision Sheet

---

## QA Gate

Requirement:

QA PASS

---

# Final Success Criteria

The workflow is successful only when:

✓ Knowledge PASS

✓ Coverage PASS

✓ Content PASS

✓ Revision PASS

✓ Visual PASS

✓ Visual QA PASS

✓ QA PASS

✓ Export PASS

Status:

```text
READY FOR STUDY
```
