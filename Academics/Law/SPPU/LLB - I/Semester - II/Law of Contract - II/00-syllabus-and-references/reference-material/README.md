# PDF → text extracts (`pdftotext`)

Generated with **poppler `pdftotext -layout -enc UTF-8`** from the PDFs in the parent folder.

| Text file | Source PDF | Notes |
|-----------|------------|--------|
| `ICA1872.txt` | `ICA1872.pdf` | ~1.2k lines |
| `5382_unit_1_part_II.txt` | `5382_unit 1 part II.pdf` | Short unit handout |
| `CONTRACT-II-new.txt` | `CONTRACT-II-new.pdf` | Long course notes |
| `Contract_II_(1).txt` | `Contract II (1).pdf` | KLE / KSLU style material |
| `13_Contracts-II-OCR.pdf` | `13_Contracts-II.pdf` | **Searchable PDF** after **`ocrmypdf --force-ocr --deskew`** (v17.4.2); keep for re-running `pdftotext` |
| `13_Contracts-II.txt` | `13_Contracts-II-OCR.pdf` | **Full text** via `pdftotext -layout -enc UTF-8` (~3.7k lines); source: Tamil Nadu Dr. Ambedkar Law University Contracts-II study material |

**Existing extract (repo root of this folder):** `01-contract-II.txt` — full text of Mohit Manderna guide (not regenerated here).

Re-run all conversions:

```bash
REF="…/00-syllabus-and-references"
OUT="$REF/extracted"
mkdir -p "$OUT"
for pdf in "$REF"/*.pdf; do
  base=$(basename "$pdf" .pdf)
  safe=$(echo "$base" | sed 's/ /_/g')
  pdftotext -layout -enc UTF-8 "$pdf" "$OUT/${safe}.txt"
done
```

**Scanned PDF (`13_Contracts-II.pdf`)** — plain `pdftotext` is useless; use OCR first:

```bash
REF="…/00-syllabus-and-references"
ocrmypdf --force-ocr --deskew --optimize 1 "$REF/13_Contracts-II.pdf" "$REF/extracted/13_Contracts-II-OCR.pdf"
pdftotext -layout -enc UTF-8 "$REF/extracted/13_Contracts-II-OCR.pdf" "$REF/extracted/13_Contracts-II.txt"
```
