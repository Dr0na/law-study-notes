# Generate SPPU LLB subject folder pack (Constitutional Law II style)

Generate a **full course** study pack: multi-layer notes, visuals, cases, mark-sliced question bank, revision, exam strategy, worksheets, and **root navigation** docs.

## Applies

- Cursor rule: **`sppu-llb-subject-folder-pack`**
- Also follow: **`sppu-llb-topper-generator-ultimate`** for answer depth, case brief quality, and model-answer structure inside question files.

## INPUT (fill in)

- **SUBJECT_FOLDER**: Target directory (e.g. `Academics/Law/SPPU/LLB - I/Semester - 2/<Subject>/`). If not safe to write in-place, use `/.temp/<Subject-Slug>-subject-pack/` and say so in the reply.
- **SYLLABUS**: Path or pasted syllabus (modules + topics).
- **SUBJECT_ABBR**: Short code for question IDs (e.g. `CON2`, `CNT2`).
- **COURSE_CODE / TITLE** (optional): e.g. `LCC 0602 Law of Contract II`.

## TASK

1. Parse syllabus into **modules** aligned with SPPU numbering; list modules in **`README.md`**.
2. Create folder tree **`00-` … `09-`** as defined in rule `sppu-llb-subject-folder-pack` (skip optional folders with a one-line README if unused).
3. For **each module**:
   - `01-complete-notes/Module_<NN>_<Title>.md` — deep notes (tables + case blocks where relevant).
   - `02-condensed-notes/Module_<NN>_<Label>_EXAM_READY.md` — Quick Stats, COUNT lists, mnemonics, exam trigger lines.
   - `04-case-laws/Module_Wise_Cases/Module_<NN>_..._Cases.md` when cases apply.
   - At least **one** of: mind map, flowchart, or comparison table in `03-visual-aids/` **per module** (rotate by need).
4. **`05-question-bank/`**: populate mark folders with **distinct** files `Q###_Title.md`; include **several** `Distinguish_Between/D###_A_vs_B.md` items where the syllabus invites comparison; add **`Topic_Weightage_and_Focus_Map.md`** and **`Most_Probable_Questions_Next_Exam.md`** (or equivalent).
5. **`07-quick-revision/`**: at minimum `Last_Hour_Checklist.md` + `All_Mnemonics_One_Page.md` (or merge if user prefers single file—state in reply).
6. **`08-exam-strategy/`**: at minimum `Answer_Writing_Template.md` + `Common_Mistakes_to_Avoid.md`.
7. **`09-practice-worksheets/`**: at least **two** practice tests spanning modules.
8. **`README.md`**, **`NAVIGATION_INDEX.md`**, **`📖_START_HERE.md`** at subject root; index must cross-link **complete**, **condensed**, **visuals**, **cases**, and **question IDs** by module.
9. If subject already has **`.markdownlint-cli2.yaml`**, new markdown must comply.

## OUTPUT

- All files under **SUBJECT_FOLDER** (or agreed `/.temp/...` staging path).
- Short summary reply listing **module count**, **question file counts by mark**, and path to **START_HERE** / **NAVIGATION_INDEX**.

## PLACEHOLDERS

```
SUBJECT_FOLDER: {{subject_folder}}
SUBJECT_ABBR: {{subject_abbr}}
SYLLABUS: {{input}}
COURSE_CODE: {{course_code}}
```
