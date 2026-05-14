# Generate law study material (autonomous pack under `.temp/`)

Generate **comprehensive, exam-oriented** law study material using the rule:

- **`.cursor/rules/autonomous-law-study-material-generator.mdc`**

Follow that rule strictly for discovery, classification, knowledge-base merge, layer outputs, model answer formats, question bank structure, legal-accuracy discipline, deduplication, icons, and naming conventions.

## INPUT

- **INPUT_DIRECTORY**: Root folder to scan (syllabus, PYQs, books, PDFs, notes, acts, cases, mixed files). Pass as the command **input** when you run the slash command.

## Execution workflow

### Step 1 — Scan and classify

1. **Recursively scan** the entire **INPUT_DIRECTORY** (all nested paths).
2. **Classify** every file: syllabus, PYQs, bare acts, case law, reference material, classroom notes.
3. **Identify** the subject name, relevant statutes, module/unit count, and any PYQs.

### Step 2 — Build knowledge base

4. **Merge** syllabus topics with reference material, statutes, cases, and notes into a unified knowledge base.
5. **Align** all generation to the **syllabus hierarchy** (module/unit order). If no syllabus exists, infer and flag.

### Step 3 — Generate navigation trio

6. Create `README.md` (repository overview), `NAVIGATION_INDEX.md` (master index), and `📖_START_HERE.md` (study path guide) at the root of `.temp/{subject-slug}/`.

### Step 4 — Generate Layer 1: Complete Notes

7. Create **one file per module/unit** in `01-complete-notes/`: `Module_NN_{Title}.md`.
8. Each file: statutory provisions, definitions with section numbers, essential elements with counts, detailed explanations, case laws woven in, conclusions.
9. **Embed mnemonics** (🧠) inline after every enumerable list (essentials, exceptions, rights, duties, grounds, classes). Use acronym-based or sentence-based mnemonics.
10. **Embed Mermaid diagrams** (📐) inline for hierarchies, processes, decision trees, and classifications. At least 2 diagrams across the entire Layer 1.

### Step 5 — Generate Layer 2: Condensed Notes

11. Create **2-3 files** in `02-condensed-notes/` grouping modules logically.
12. Bullet-point format: keywords, section tags, doctrines, case names, essential counts.
13. **Include mnemonics** from Layer 1 for rapid recall.

### Step 6 — Generate Layer 3: Visual Aids

14. Create **minimum 3 comparison tables** in `03-visual-aids/Comparison_Tables/`.
15. Create **minimum 3 Mermaid flowchart/diagram files** in `03-visual-aids/Flowcharts/` (hierarchy trees, decision trees, process flows).
16. Use emoji-headed table columns and exam tips below each table and diagram.

### Step 7 — Generate Layer 4: Case Law Digests

17. Create `04-case-laws/Module_Wise_Cases/Important_Cases_{Subject}.md`.
18. Per case: Facts → Issue → Held → Principle → Exam Relevance. Aim for 1-2 cases per module.

### Step 8 — Generate Layer 5: Question Bank (CRITICAL)

19. Create **individual Q&A files** (one question + model answer per file) in:
    - `05-question-bank/5_Marks/Q01_{Topic}.md` ... (minimum 5)
    - `05-question-bank/10_Marks/Q01_{Topic}.md` ... (minimum 5)
    - `05-question-bank/15_Marks/Q01_{Topic}.md` ... (minimum 5)
    - `05-question-bank/Distinguish_Between/Q01_{A}_Vs_{B}.md` ... (minimum 5)
20. Every question file MUST contain a **complete model answer** — not just the question.
21. Follow the mark-specific model answer templates defined in the rule.
22. Create `05-question-bank/Most_Probable_Questions_{Exam_Session}.md` with:
    - Probability-ranked questions (🔴🟠🟡) across all mark levels.
    - Links to each model answer file.
    - Priority preparation order table.
    - Inventory summary.

### Step 9 — Generate Layers 6-8: Revision, Strategy, Practice

23. Create `07-quick-revision/Doctrines_and_Maxims.md`: maxims table, section checklists, essential counts, **consolidated mnemonics cheat sheet** (all mnemonics from the pack in one place).
24. Create `08-exam-strategy/Answer_Writing_Template.md`: answer scaffolds by mark level.
25. Create `09-practice-worksheets/Self_Assessment_Test.md`: full mock paper.
26. Create `06-previous-papers/README.md`: PYQ analysis or absence note.

### Step 10 — Final verification

27. Verify the total file count meets the minimum targets:
    - ≥ 1 complete note per module
    - ≥ 5 Q&As per mark folder (5, 10, 15, Distinguish)
    - ≥ 20 total Q&A files
    - ≥ 3 flowchart/diagram files in `03-visual-aids/Flowcharts/`
    - ≥ 1 mnemonic per module across the pack
    - All 3 navigation files exist
28. Update `NAVIGATION_INDEX.md` to link every generated file.

## Output quality (must satisfy)

- ✅ Exam-oriented and **university-style**
- ✅ Concise but **comprehensive** where marks demand depth
- ✅ **Legally accurate** — no invented sections, articles, cases, or citations
- ✅ **Revision-friendly** and high-scoring structure (counts, headings, conclusions)
- ✅ Uses **icons/emojis** for visual navigation throughout
- ✅ Every question has a **complete model answer** (not just the question text)
- ✅ **Mnemonics (🧠)** embedded after every major enumerable list
- ✅ **Mermaid diagrams (📐)** for hierarchies, processes, and decision trees

## Do not generate

- ❌ Logs, debug files, raw metadata dumps
- ❌ Temporary or clutter artifacts unrelated to the study pack
- ❌ Bullet-only skeletons marketed as "complete" notes
- ❌ Question files without model answers

## Reply checklist

After generation, report:
- 📂 Path to **`.temp/{subject-slug}/`**
- 📋 **Inventory**: what was classified (syllabus path, PYQ count if any, main acts/statutes)
- 📊 **Module/unit count** and total files generated
- 📝 **Question bank counts**: X files in 5_Marks, Y in 10_Marks, Z in 15_Marks, W in Distinguish_Between
- 🧠 **Mnemonics count**: total mnemonics generated
- 📐 **Diagrams count**: total Mermaid diagrams generated
- 📍 Where **README** / **NAVIGATION_INDEX** / **📖_START_HERE** live

## PLACEHOLDERS

```text
INPUT_DIRECTORY: {{input}}
```
