# Generate law study material (autonomous pack under `.temp/`)

Generate **comprehensive, exam-oriented** law study material using:

- **`.cursor/rules/autonomous-law-study-material-generator.mdc`**

Follow that rule for discovery, classification, knowledge-base merge, layer outputs, legal-accuracy discipline, deduplication, and naming.

## INPUT

- **INPUT_DIRECTORY**: Root folder to scan (syllabus, PYQs, books, PDFs, notes, acts, cases, mixed files). Pass as the command **input** when you run the slash command.

## Execution requirements

1. **Recursively scan** the entire **INPUT_DIRECTORY** (all nested paths).
2. **Automatically identify** and classify:
   - syllabus
   - PYQs (previous papers)
   - reference materials
   - bare acts or statutes
   - case law sources
   - notes (including OCR text where present)
3. **Build** a unified legal knowledge base (syllabus-first; deduplicate; preserve verified terminology and citations only).
4. **Organize** generation according to **syllabus hierarchy**; if no syllabus, infer structure and state limitations briefly in `README.md` (not a debug log).
5. **Generate** (per the autonomous rule’s layers and folder layout):
   - complete notes (`01-complete-notes/`)
   - condensed notes (`02-condensed-notes/`)
   - visual aids (`03-visual-aids/` with subfolders as appropriate)
   - case law digests (`04-case-laws/` including module-wise where useful)
   - question banks (`05-question-bank/` with mark buckets and distinguishers when applicable)
   - revision / quick revision (`07-quick-revision/`)
   - practice worksheets (`09-practice-worksheets/`)
   - exam strategy guides (`08-exam-strategy/`)
   - optional `06-previous-papers/` for PYQ index or extracts when material exists; otherwise a one-line `README.md` there
6. Emit a **structured repository**: root **`README.md`** and **`NAVIGATION_INDEX.md`** (and `📖_START_HERE.md` if you use the SPPU-style trio).
7. Save **ALL** generated output **only** under **`/.temp/`** (for example **`.temp/{subject-slug}/`**). Do not scatter deliverables outside `.temp/` unless the user **explicitly** overrides for that run.

## Output quality (must satisfy)

- exam-oriented and **university-style**
- concise but **comprehensive** where marks demand depth
- **legally accurate** — no invented sections, articles, cases, or citations
- **revision-friendly** and high-scoring structure (counts, headings, clear conclusions)

## Do not generate

- logs, debug files, raw metadata dumps
- temporary or clutter artifacts unrelated to the study pack
- bullet-only skeletons marketed as “complete” notes

## Reply checklist

- Path to **`.temp/{subject-slug}/`**
- Brief **inventory**: what was classified (syllabus path, PYQ count if any, main acts)
- **Module or unit count** and where **README** / **NAVIGATION_INDEX** live

## PLACEHOLDERS

```text
INPUT_DIRECTORY: {{input}}
```
