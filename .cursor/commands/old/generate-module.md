
Generate study material for a SINGLE module from the syllabus.

INPUT:
- Module name or number
- Full syllabus

TASK:
1. Extract only the specified module
2. Split into topics
3. Generate topic-wise files under:

/.temp/<Module-Name>/

4. Apply all rules

MODULE:
{{module}}

SYLLABUS:
{{input}}
