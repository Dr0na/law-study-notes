# pipeline.md

# SPPU LLB Autonomous Content Generation Pipeline

## Purpose

This document defines the complete execution pipeline for generating examination-oriented SPPU LLB study material.

It describes:

* Workflow order
* Agent execution sequence
* Data flow
* Input and output contracts
* Quality gates
* Failure conditions
* Success criteria

This document is the authoritative workflow specification for the system.

---

# Pipeline Overview

```text
Input Directory
        │
        ▼

Knowledge Phase
        │
        ▼

Content Phase
        │
        ▼

Visual Phase
        │
        ▼

Quality Assurance Phase
        │
        ▼

Export Phase
        │
        ▼

Final Deliverables
```

---

# Complete Workflow

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

# Phase 1: Knowledge Phase

## Objective

Build an authoritative legal knowledge repository covering the complete syllabus.

---

## Step 1: syllabus-discovery

### Inputs

```text
input/
```

### Responsibilities

* Discover syllabus documents
* Extract subject name
* Extract units
* Extract topics
* Extract subtopics
* Preserve official ordering

### Outputs

```text
.temp/knowledge-base/syllabus.json
```

### Required Result

```text
100% syllabus identified
```

---

## Step 2: knowledge-builder

### Inputs

```text
syllabus.json

reference books

notes

bare acts

legal resources
```

### Responsibilities

Generate:

* Definitions
* Principles
* Characteristics
* Elements
* Illustrations
* Applications

### Outputs

```text
.temp/knowledge-base/topics/
```

---

## Step 3: citation-enricher

### Inputs

```text
.temp/knowledge-base/topics/
```

### Responsibilities

Attach:

* Acts
* Sections
* Articles
* Amendments
* Case Laws
* Doctrines
* Maxims
* Committees
* Commissions

### Outputs

```text
.temp/enriched-knowledge/
```

---

## Step 4: syllabus-coverage-auditor

### Inputs

```text
syllabus.json

knowledge-base

enriched-knowledge
```

### Responsibilities

Validate:

* Unit Coverage
* Topic Coverage
* Subtopic Coverage
* Citation Coverage

### Outputs

```text
coverage-report.md

missing-topics.md

coverage.json
```

### Gate

```text
Coverage = 100%
```

Otherwise:

```text
STOP WORKFLOW
```

---

# Phase 2: Content Phase

## Objective

Generate examination-oriented content.

---

## Step 5: pyq-analyzer

### Inputs

```text
PYQs
```

### Responsibilities

Analyze:

* Frequency
* Trends
* Marks Distribution
* Recurring Questions

### Outputs

```text
topic-frequency.json

pyq-analysis.md
```

---

## Step 6: exam-intelligence

### Inputs

```text
topic-frequency.json

syllabus.json
```

### Responsibilities

Determine:

* Important Topics
* High Weightage Topics
* Examination Priorities

### Outputs

```text
probable-questions.md

exam-priority-map.json
```

---

## Step 7: examiner-simulator

### Inputs

```text
PYQ Analysis

Exam Intelligence
```

### Responsibilities

Generate:

* Likely 5 Mark Questions
* Likely 10 Mark Questions
* Likely 15 Mark Questions
* Predicted Question Paper

### Outputs

```text
.temp/predictions/
```

---

## Step 8: study-material-generator

### Inputs

```text
enriched-knowledge

exam-intelligence

subject templates
```

### Responsibilities

Generate:

* Notes
* Model Answers
* Topic Explanations
* Revision Sections

### Outputs

```text
.temp/content/
```

### Mandatory Components

Every topic must contain:

* Definition
* Introduction
* Core Concepts
* Case Laws
* Examination Notes
* Conclusion
* Visual Metadata

---

## Step 9: revision-generator

### Inputs

```text
.temp/content/
```

### Responsibilities

Generate:

* 5 Marks Revision
* 10 Marks Revision
* 15 Marks Revision
* One-Day-Before-Exam Notes
* Last-Hour Revision
* Case Law Revision
* Sections & Articles Revision

### Outputs

```text
.temp/revision/
```

---

# Phase 3: Visual Phase

## Objective

Generate visual-learning artifacts.

---

## Step 10: visual-data-extractor

### Inputs

```text
.temp/content/
```

### Responsibilities

Extract:

* Mind Map Nodes
* Timeline Data
* Flowchart Data
* Concept Data

### Outputs

```text
.temp/visual-data/
```

---

## Step 11: notebooklm-source-pack-generator

### Inputs

```text
.temp/content/

.temp/revision/
```

### Responsibilities

Generate:

* Topic Source Packs
* Unit Source Packs
* Subject Source Packs

### Outputs

```text
.temp/notebooklm/
```

---

## Step 12: notebooklm-visualizer

### Inputs

```text
.temp/content/

.temp/visual-data/

.temp/notebooklm/
```

### Responsibilities

Generate prompts for:

* Mind Maps
* Infographics
* Timelines
* Flowcharts
* Concept Maps
* Revision Sheets

### Outputs

```text
.temp/visuals/
```

---

## Step 13: visual-qa-reviewer

### Inputs

```text
visual-data

visual prompts

visual reports
```

### Responsibilities

Validate:

* Coverage
* Accuracy
* Prompt Quality
* NotebookLM Compatibility

### Outputs

```text
visual-qa-report.md
```

### Gate

```text
Visual QA PASS
```

Otherwise:

```text
STOP WORKFLOW
```

---

# Phase 4: Quality Assurance

## Step 14: qa-reviewer

### Responsibilities

Validate:

* Study Material
* Citations
* Coverage
* Revision Material
* Visual Metadata

### Outputs

```text
qa-report.md
```

### Gate

```text
QA PASS
```

Otherwise:

```text
STOP WORKFLOW
```

---

# Phase 5: Export

## Step 15: exporter

### Responsibilities

Organize final deliverables.

Generate final folder structure.

Remove temporary intermediate artifacts.

Produce final student-ready package.

---

# Data Flow Summary

```text
Input

    ↓

Knowledge Phase

    ↓

Enriched Knowledge

    ↓

Content Phase

    ↓

Study Material

    ↓

Revision Material

    ↓

Visual Phase

    ↓

Visual Assets

    ↓

QA

    ↓

Export

    ↓

Final Package
```

---

# Failure Conditions

Workflow immediately stops if:

* Missing syllabus
* Missing topic
* Coverage below 100%
* Missing citations
* Missing case laws
* Missing visual metadata
* Visual QA failure
* QA failure

---

# Success Criteria

The workflow succeeds only when:

✓ Syllabus Coverage = 100%

✓ Citation Coverage = 100%

✓ Content Generated

✓ Revision Generated

✓ Visuals Generated

✓ Visual QA PASS

✓ QA PASS

✓ Export PASS

Final Status:

```text
READY FOR STUDY
```
