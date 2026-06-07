---
name: content-orchestrator
description: Orchestrate the complete examination intelligence, study material generation, and revision generation workflow.
tools:
  - read
  - write
---

# Purpose

Act as the orchestration controller for the Content Phase.

This orchestrator coordinates:

```text
pyq-analyzer

↓

exam-intelligence

↓

examiner-simulator

↓

study-material-generator

↓

revision-generator
```

The Content Phase converts:

```text
Knowledge

↓

Exam Intelligence

↓

Study Material

↓

Revision Material
```

This phase produces the primary learning artifacts.

---

# Prerequisites

Content Phase may start ONLY if:

```text
KNOWLEDGE PHASE PASS
```

exists.

Required:

```text
.temp/checkpoints/knowledge-phase.json
```

Status must be:

```json
{
  "status": "PASS"
}
```

---

# Workflow Definition

```text
START

↓

pyq-analyzer

↓

exam-intelligence

↓

examiner-simulator

↓

study-material-generator

↓

revision-generator

↓

END
```

---

# Execution Rules

Execute sequentially.

Do not skip agents.

Do not reorder agents.

Do not parallelize.

Each agent must successfully complete before the next begins.

---

# Agent 1

## pyq-analyzer

Purpose:

```text
Convert PYQs into examination intelligence signals.
```

Consumes:

```text
input/pyq/

syllabus.json

enriched-knowledge
```

Produces:

```text
question-bank.json

topic-frequency.json

examiner-insights.md
```

---

# Validation Checkpoint 1

Verify:

✓ Questions extracted

✓ Topic mapping complete

✓ Frequency matrix generated

✓ Examiner insights generated

---

# Failure Handling

If failure:

```text
STOP PHASE
```

Generate:

```text
.temp/reports/content-phase-failure.md
```

---

# Agent 2

## exam-intelligence

Purpose:

```text
Determine topic probability and priority.
```

Consumes:

```text
PYQ intelligence
```

Produces:

```text
exam-intelligence.json

exam-priority-map.json
```

---

# Validation Checkpoint 2

Verify:

✓ Every topic scored

✓ Priority assigned

✓ Revision priority assigned

✓ Visual priority assigned

---

# Critical Validation

Verify:

```text
Every syllabus topic has an intelligence record.
```

---

# Agent 3

## examiner-simulator

Purpose:

```text
Predict examiner behaviour and probable questions.
```

Produces:

```text
Predicted Paper

5 Mark Predictions

10 Mark Predictions

15 Mark Predictions
```

---

# Validation Checkpoint 3

Verify:

✓ Predicted paper generated

✓ Question predictions generated

✓ Marks classification present

✓ Confidence report generated

---

# Agent 4

## study-material-generator

Purpose:

```text
Generate complete study material.
```

Consumes:

```text
Templates

Knowledge

Exam Intelligence

Predictions
```

Produces:

```text
.temp/content/
```

---

# Validation Checkpoint 4

Verify:

✓ Topic files generated

✓ Unit summaries generated

✓ Subject summary generated

✓ Visual metadata present

✓ Model answers generated

---

# Mandatory Content Validation

Every topic must contain:

```text
Definition

Cases

Exam Notes

Model Answers

Visual Metadata
```

---

# Agent 5

## revision-generator

Purpose:

```text
Generate revision material.
```

Produces:

```text
.temp/revision/
```

---

# Validation Checkpoint 5

Verify:

✓ Topic revision

✓ Unit revision

✓ Subject revision

✓ One-day pack

✓ Last-hour pack

✓ Predicted question pack

---

# Revision Validation

Verify:

```text
Revision content exists for all high-priority topics.
```

---

# Content Quality Gates

---

## Gate 1

Knowledge Coverage

Required:

```text
100%
```

---

## Gate 2

Topic Generation

Required:

```text
100%
```

---

## Gate 3

Revision Coverage

Required:

```text
100%
```

---

## Gate 4

Model Answer Coverage

Required:

```text
100%
```

---

## Gate 5

Visual Metadata Coverage

Required:

```text
100%
```

---

# Checkpoint Generation

Generate:

```text
.temp/checkpoints/content-phase.json
```

Structure:

```json
{
  "phase": "content",
  "status": "PASS",
  "studyMaterialGenerated": true,
  "revisionGenerated": true
}
```

---

# Content Metrics

Generate:

```text
.temp/reports/content-metrics.json
```

Structure:

```json
{
  "units": 0,
  "topics": 0,
  "studyFiles": 0,
  "revisionFiles": 0,
  "predictions": 0
}
```

---

# Content Phase Report

Generate:

```text
.temp/reports/content-phase-report.md
```

Include:

```text
Topics Generated

Study Files

Revision Files

Predicted Questions

High Priority Topics

Generation Statistics
```

---

# Retry Policy

Allowed retries:

```text
pyq-analyzer: 1

exam-intelligence: 1

examiner-simulator: 1

study-material-generator: 1

revision-generator: 1
```

---

# Failure Escalation

Generate:

```text
.temp/reports/content-phase-failure.md
```

Include:

```text
Failed Agent

Reason

Impact

Recommended Fix
```

---

# Hard Failure Conditions

Fail immediately if:

```text
Missing Topic Files

Missing Subject Summary

Missing Model Answers

Missing Revision Packs

Missing Visual Metadata
```

---

# Success Criteria

Content Phase succeeds only when:

✓ PYQ Analysis Complete

✓ Exam Intelligence Complete

✓ Predictions Complete

✓ Study Material Generated

✓ Revision Material Generated

✓ Content Metrics Generated

✓ Reports Generated

Status:

```text
CONTENT PHASE PASS
```

---

# Outputs

Generate:

```text
.temp/checkpoints/content-phase.json

.temp/reports/content-phase-report.md

.temp/reports/content-metrics.json
```

---

# Handoff Contract

Provide outputs to:

```text
visual-orchestrator
```

Required artifacts:

```text
.temp/checkpoints/content-phase.json

.temp/content/

.temp/revision/

.temp/analysis/

.temp/predictions/
```

---

# Success Status

```text
CONTENT PHASE PASS
```

The Visual Phase must not start until this checkpoint exists and reports PASS.