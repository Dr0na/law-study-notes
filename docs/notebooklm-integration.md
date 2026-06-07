# notebooklm-integration.md

# NotebookLM Integration Specification

## Purpose

This document defines how the system integrates with Google NotebookLM to generate:

* Mind Maps
* Infographics
* Flowcharts
* Timelines
* Concept Maps
* Revision Sheets

The integration is designed to ensure that all visual assets are:

* Accurate
* Examination-focused
* Derived from generated study material
* Consistent with legal content

---

# Design Philosophy

NotebookLM is not a source of legal knowledge.

NotebookLM is a visualization engine.

The system itself is responsible for:

* Legal accuracy
* Statutory references
* Case law selection
* Examination relevance

NotebookLM is responsible only for:

* Visual organization
* Visual summarization
* Concept visualization

---

# Architecture

```text
Study Material
        │
        ▼

Visual Data Extraction
        │
        ▼

NotebookLM Source Pack Generation
        │
        ▼

NotebookLM Prompt Generation
        │
        ▼

NotebookLM Visual Assets
```

---

# Critical Rule

NotebookLM must never consume:

```text
Raw Syllabus
```

NotebookLM must never consume:

```text
Raw Knowledge Base
```

NotebookLM must only consume:

```text
Finalized Study Material
```

and

```text
NotebookLM Source Packs
```

---

# Data Sources

NotebookLM receives information from:

```text
.temp/content/

.temp/revision/

.temp/notebooklm/
```

NotebookLM does not directly access:

```text
input/

knowledge-base/

enriched-knowledge/
```

---

# Integration Workflow

## Step 1

Generate Study Material

Output:

```text
.temp/content/
```

---

## Step 2

Generate Revision Material

Output:

```text
.temp/revision/
```

---

## Step 3

Extract Visual Metadata

Output:

```text
.temp/visual-data/
```

---

## Step 4

Generate NotebookLM Source Packs

Output:

```text
.temp/notebooklm/
```

---

## Step 5

Generate NotebookLM Prompts

Output:

```text
.temp/visuals/
```

---

# NotebookLM Source Packs

## Purpose

NotebookLM performs best when given curated content.

The system therefore generates dedicated source packs.

---

## Topic Source Pack

One source pack per topic.

Example:

```text
Quasi Contract Source Pack
```

Contains:

* Definition
* Essentials
* Relevant Sections
* Case Laws
* Examination Notes

---

## Unit Source Pack

One source pack per unit.

Contains:

All topics from a unit.

---

## Subject Source Pack

One source pack per subject.

Contains:

* Major concepts
* Important doctrines
* Important cases
* Important sections
* Important articles

---

# Source Pack Rules

Include:

* Definitions
* Essentials
* Principles
* Doctrines
* Articles
* Sections
* Landmark Cases

Exclude:

* Repetitive explanations
* Long narratives
* Redundant examples

---

# Visual Types

The system generates six visual categories.

---

## Mind Maps

Purpose:

Conceptual understanding.

Best for:

* Definitions
* Essentials
* Principles
* Doctrines

---

### Structure

```text
Topic

├── Definition
├── Essentials
├── Principles
├── Doctrines
├── Case Laws
└── Exam Keywords
```

---

## Flowcharts

Purpose:

Process visualization.

Best for:

* Procedures
* Legal workflows
* Constitutional processes
* Contract formation

---

### Structure

```text
Start

↓

Step 1

↓

Step 2

↓

End
```

---

## Timelines

Purpose:

Chronological understanding.

Best for:

* Amendments
* Historical developments
* Evolution of legal principles

---

### Structure

```text
Year

↓

Event

↓

Impact
```

---

## Concept Maps

Purpose:

Relationship visualization.

Best for:

* Doctrines
* Principles
* Schools of thought

---

### Structure

```text
Concept

↔ Related Concept

↔ Doctrine

↔ Case Law
```

---

## Infographics

Purpose:

Revision-oriented summaries.

Best for:

* High-weightage topics
* Exam revision
* Last-minute preparation

---

### Components

Include:

* Definition
* Essentials
* Key Sections
* Key Articles
* Key Cases
* Mnemonics

---

## Revision Sheets

Purpose:

One-page revision aids.

Include:

* Key Terms
* Key Cases
* Key Sections
* Expected Questions

---

# Prompt Generation Rules

All prompts must be:

* Deterministic
* Examination-oriented
* Concise
* Structured

---

## Prompt Style

Use:

```text
Generate a law student revision mind map.
```

Avoid:

```text
Create something interesting.
```

---

# Prompt Requirements

Every prompt must contain:

* Topic Name
* Legal Terminology
* Examination Focus
* Hierarchical Structure

---

# Prompt Length

Target:

```text
100-500 words
```

Warning:

```text
500-1000 words
```

Failure:

```text
Above 1000 words
```

---

# Visual Metadata

Every study note must contain:

```html
<!-- VISUAL_DATA_START -->

Topic:

MindMapNodes:

FlowchartNodes:

TimelineNodes:

ComparisonNodes:

DoctrineNodes:

CaseLawNodes:

StatutoryNodes:

ArticleNodes:

MnemonicNodes:

<!-- VISUAL_DATA_END -->
```

---

# Visual Selection Rules

## Generate Mind Map When

Contains:

* Essentials
* Principles
* Characteristics

---

## Generate Flowchart When

Contains:

* Procedure
* Process
* Workflow

---

## Generate Timeline When

Contains:

* Amendments
* Historical Development
* Evolution

---

## Generate Concept Map When

Contains:

* Multiple Doctrines
* Interrelated Principles

---

## Generate Comparison Chart When

Contains:

* Distinguish Between
* Comparison
* Difference Between

---

## Generate Revision Sheet When

Topic Weightage:

```text
High
```

or

```text
Very High
```

---

# High Weightage Topics

Must generate:

* Mind Map
* Infographic
* Revision Sheet

Plus at least one:

* Timeline
* Flowchart
* Concept Map

---

# Constitutional Law Rules

Generate:

* Doctrine Maps
* Amendment Timelines
* Article Maps

Examples:

```text
Basic Structure Doctrine

Doctrine of Eclipse

Doctrine of Severability
```

---

# Contract Law Rules

Generate:

* Essentials Maps
* Contract Formation Flowcharts
* Comparison Charts

Examples:

```text
Contract vs Quasi Contract

Bailment vs Pledge
```

---

# Jurisprudence Rules

Generate:

* Thinker Maps
* School Comparison Charts
* Theory Networks

---

# Family Law Rules

Generate:

* Conditions Flowcharts
* Relationship Maps
* Comparative Tables

---

# QA Requirements

Visual QA must verify:

✓ Topic Coverage

✓ Prompt Quality

✓ Legal Consistency

✓ NotebookLM Compatibility

✓ Examination Relevance

✓ Metadata Completeness

---

# Failure Conditions

Fail if:

* Prompt references missing content
* Visual metadata missing
* Prompt exceeds maximum length
* Coverage incomplete

---

# Success Criteria

NotebookLM integration is successful only when:

✓ Source Packs Generated

✓ Visual Metadata Generated

✓ Visual Prompts Generated

✓ Visual QA Passed

✓ All High-Weightage Topics Have Required Visuals

Status:

```text
NOTEBOOKLM READY
```
