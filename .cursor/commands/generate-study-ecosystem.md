# Build SPPU LLB study ecosystem (full subject pack — Constitutional Law II format)

Produce **real, exam-ready study material** in the **same layout and depth** as in-repo **Constitutional Law - II** (`Academics/Law/SPPU/LLB - I/Semester - 2/Constitutional Law - II/`): `00–09` folders, **one deep complete-notes file per module**, **one EXAM_READY condensed file per module**, **mark-sliced question bank** (`2_Marks/`, `5_Marks/`, `10_Marks/`, `15_Marks/`) with **one question per file** and a **full `## MODEL ANSWER` section** in each, `Distinguish_Between/`, weightage / probable-question docs, visuals under `Mind_Maps/`, `Flowcharts/`, `Comparison_Tables/`, case compendiums, quick revision, exam strategy, **≥2** practice worksheets, plus root **`README.md`**, **`NAVIGATION_INDEX.md`**, **`📖_START_HERE.md`**.

Shallow outputs (for example only `knowledge-base/` + a single outline, or one `Probable_Questions` list without per-question files) are **out of scope** for this command unless the user explicitly asks for **outline-only**.

## Applies (rule stack — use all)

1. **`.cursor/rules/sppu-llb-master-study-system-generator.mdc`** — scanning, prioritization, generators, **mandatory Subject Folder Pack output** (see its “OUTPUT STRUCTURE (subject folder pack)” section).
2. **`.cursor/rules/sppu-llb-subject-folder-pack.mdc`** — exact `00–09` layout, filenames (`Module_<NN>_...`, `Q<###>_...`, `D<###>_...`), question file structure, navigation.
3. **`.cursor/rules/sppu-llb-topper-generator-ultimate.mdc`** — topper-style depth inside complete notes, condensed EXAM_READY blocks, and in-file model answers (synopsis, intro, hybrid body, cases, diagram where useful, conclusion; mark-based length).

**Format reference (read-only template):** scan `Academics/Law/SPPU/LLB - I/Semester - 2/Constitutional Law - II/` for structure, tone, and file patterns before generating a new subject.

## INPUT (fill in)

- **INPUT_ROOT**: Syllabus-and-references folder **or** full subject root (must contain or sit beside syllabus + enough material to author notes). Example: `Academics/.../<Subject>/00-syllabus-and-references` or `Academics/.../<Subject>/`.
- **OUTPUT_ROOT** (optional): default **`/.temp/<Subject-Slug>-subject-pack/`**. Use the live `Academics/.../<Subject>/` tree **only** if the user explicitly allows overwrite / merge.
- **SUBJECT_ABBR** (optional): short code for question IDs (e.g. `CON2`, `CNT2`, `CON2`). Required when generating `05-question-bank/` files with IDs like `CON2-15M-Q001`.

## TASK

1. Recursively scan **INPUT_ROOT** (and parent subject folder if input is only `00-syllabus-and-references`).
2. Discover syllabus, PYQs, bare acts, cases, and reference notes; build internal priority (syllabus → PYQs → statutes → cases → references).
3. Extract **Module → Topic → Subtopic**; align file count in `01-complete-notes/` and `02-condensed-notes/` to **syllabus modules**.
4. Create the **full** `00–09` tree under **OUTPUT_ROOT** per `sppu-llb-subject-folder-pack`.
5. **Author content** (not placeholders): populate each module in `01` and `02`; add visuals, cases, questions with **full model answers**, revision and strategy files, and **≥2** practice tests.
6. Write **`README.md`**, **`NAVIGATION_INDEX.md`**, **`📖_START_HERE.md`** with **correct relative links** to created files.
7. If `.markdownlint-cli2.yaml` exists under `05-question-bank/` or subject root, new markdown must comply.

## OUTPUT (reply must include)

- **OUTPUT_ROOT** path used.
- **Module count** and confirmation that **each** module has both `01-complete-notes` and `02-condensed-notes` files.
- **Question file counts** by mark folder (`2_Marks`, `5_Marks`, `10_Marks`, `15_Marks`) and count of **`Distinguish_Between`** files.
- Paths to **`📖_START_HERE.md`** and **`NAVIGATION_INDEX.md`**.

## PLACEHOLDERS

```text
INPUT_ROOT: {{input}}
OUTPUT_ROOT: {{output_root}}
SUBJECT_ABBR: {{subject_abbr}}
```
