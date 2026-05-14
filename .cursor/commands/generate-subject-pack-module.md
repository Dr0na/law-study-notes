# Generate one module across all subject-pack layers

For a **single syllabus module**, generate (or refresh) **all artifact types** used in the Constitutional Law II style layout: complete notes, EXAM_READY condensed notes, module case file, visuals, mark-bucket questions, and update **navigation** pointers.

## Applies

- Cursor rule: **`sppu-llb-subject-folder-pack`**
- Also follow: **`sppu-llb-topper-generator-ultimate`** for legal depth and model answers.

## INPUT

- **SUBJECT_FOLDER**: Existing subject root that already follows (or will follow) the `00–09` pack layout.
- **MODULE_NUMBER**: e.g. `05` (zero-padded).
- **MODULE_TITLE**: Short slug for filenames, e.g. `Judiciary`.
- **SYLLABUS_SNIPPET**: Only this module’s topics from the syllabus.
- **SUBJECT_ABBR**: For new question IDs (e.g. `CON2`).
- **QUESTION_BASE_INDEX** (optional): Starting `Q` number for this batch (e.g. `310`) to avoid collisions; if omitted, scan existing `05-question-bank/**/Q*.md` and pick next free IDs.

## TASK

1. Write / update:
   - `01-complete-notes/Module_<NN>_<Title>.md`
   - `02-condensed-notes/Module_<NN>_<Label>_EXAM_READY.md`
   - `04-case-laws/Module_Wise_Cases/Module_<NN>_..._Cases.md` (if cases exist for this module; else add stub explaining “no landmark cases in module” only if true)
2. Add **at least two** visuals under `03-visual-aids/` (pick from mind map / flowchart / comparison table) tied to this module.
3. Add **minimum question set** under `05-question-bank/`:
   - `2_Marks`: **2** questions
   - `5_Marks`: **2** questions
   - `10_Marks`: **1** question
   - `15_Marks`: **1** question
   - `Distinguish_Between`: **1** file if a natural pair exists in the module; else skip and note why.
   Use the **Question ID** header format from the subject-pack rule.
4. Update **`NAVIGATION_INDEX.md`** “BY MODULE” section for this `NN` with relative links to all new/changed files.
5. Do **not** remove unrelated modules’ content; only patch index rows for this module unless index is missing (then create full index per **`/generate-subject-pack`**).

## OUTPUT

- List paths of created/updated files.
- State new **Q### / D###** IDs used.

## PLACEHOLDERS

```
SUBJECT_FOLDER: {{subject_folder}}
SUBJECT_ABBR: {{subject_abbr}}
MODULE_NUMBER: {{module_number}}
MODULE_TITLE: {{module_title}}
SYLLABUS_SNIPPET: {{input}}
QUESTION_BASE_INDEX: {{question_base}}
```
