from pathlib import Path
import re
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

ROOT = Path('/Users/vnalwar/work/law/law-study-notes')
JOURNAL = ROOT / 'Academics/Law/SPPU/LLB - II/Semester - III/Professional Ethics and Contempt of Court Law/Journal'
SOURCE = JOURNAL / 'Professional_Ethics_and_Contempt_Law_Journal_Draft.md'
OUTPUT = JOURNAL / 'Professional_Ethics_and_Contempt_Law_Journal_2026-2027.docx'
LOGO = ROOT / 'presentation-build/abhinav-law-college-logo.jpg'

doc = Document()
section = doc.sections[0]
section.page_width = Inches(8.5)
section.page_height = Inches(11)
section.top_margin = Inches(.8)
section.bottom_margin = Inches(.75)
section.left_margin = Inches(.85)
section.right_margin = Inches(.85)

# Reproduce the double-line page frame used in the supplied college journal.
page_borders = OxmlElement('w:pgBorders')
page_borders.set(qn('w:offsetFrom'), 'page')
for edge in ('top', 'left', 'bottom', 'right'):
    border = OxmlElement('w:' + edge)
    border.set(qn('w:val'), 'double')
    border.set(qn('w:sz'), '8')
    border.set(qn('w:space'), '22')
    border.set(qn('w:color'), '000000')
    page_borders.append(border)
section._sectPr.append(page_borders)

normal = doc.styles['Normal']
normal.font.name = 'Times New Roman'
normal.font.size = Pt(10)
normal.font.color.rgb = RGBColor(0, 0, 0)
normal.paragraph_format.space_after = Pt(4)
normal.paragraph_format.line_spacing = 1.05
for style_name, size in [('Title', 21), ('Heading 1', 16), ('Heading 2', 13), ('Heading 3', 11.5), ('Heading 4', 11)]:
    style = doc.styles[style_name]
    style.font.name = 'Times New Roman'
    style.font.size = Pt(size)
    style.font.bold = True
    style.font.color.rgb = RGBColor(0, 0, 0)
    style.paragraph_format.space_before = Pt(10 if style_name != 'Title' else 0)
    style.paragraph_format.space_after = Pt(5)

# The supplied cover includes the college emblem above the institution name.
logo_paragraph = doc.add_paragraph()
logo_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
logo_paragraph.paragraph_format.space_before = Pt(38)
logo_paragraph.paragraph_format.space_after = Pt(18)
logo_paragraph.add_run().add_picture(str(LOGO), height=Inches(1.0))

def shade(cell, color='E6E6E6'):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:fill'), color)
    tc_pr.append(shd)

def set_cell_border(cell, color='B7B7B7', sz='6'):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    borders = tc_pr.first_child_found_in('w:tcBorders')
    if borders is None:
        borders = OxmlElement('w:tcBorders')
        tc_pr.append(borders)
    for edge in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'):
        tag = 'w:' + edge
        element = borders.find(qn(tag))
        if element is None:
            element = OxmlElement(tag)
            borders.append(element)
        element.set(qn('w:val'), 'single')
        element.set(qn('w:sz'), sz)
        element.set(qn('w:color'), color)

def add_runs(paragraph, text):
    parts = re.split(r'(\*\*.*?\*\*|\*.*?\*)', text)
    for part in parts:
        if not part:
            continue
        if part.startswith('**') and part.endswith('**'):
            run = paragraph.add_run(part[2:-2])
            run.bold = True
        elif part.startswith('*') and part.endswith('*'):
            run = paragraph.add_run(part[1:-1])
            run.italic = True
        else:
            paragraph.add_run(part)
    for run in paragraph.runs:
        run.font.name = 'Times New Roman'
        run.font.color.rgb = RGBColor(0, 0, 0)

def table_from_markdown(lines):
    parsed = []
    for line in lines:
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if cells and all(re.fullmatch(r':?-{2,}:?', c.replace(' ', '')) for c in cells):
            continue
        parsed.append(cells)
    if not parsed:
        return
    cols = max(len(row) for row in parsed)
    table = doc.add_table(rows=len(parsed), cols=cols)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    try:
        table.style = 'Table Grid'
    except KeyError:
        pass
    for i, row in enumerate(parsed):
        for j in range(cols):
            cell = table.cell(i, j)
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            value = row[j] if j < len(row) else ''
            p = cell.paragraphs[0]
            p.paragraph_format.space_after = Pt(2)
            p.paragraph_format.space_before = Pt(2)
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if j == 0 or j >= cols - 2 else WD_ALIGN_PARAGRAPH.LEFT
            add_runs(p, value)
            for run in p.runs:
                run.font.size = Pt(9.2)
                if i == 0:
                    run.bold = True
            set_cell_border(cell)
            if i == 0:
                shade(cell)

lines = SOURCE.read_text(encoding='utf-8').splitlines()
page_number = 0
i = 0
cover = True
while i < len(lines):
    raw = lines[i]
    stripped = raw.strip()
    if not stripped:
        i += 1
        continue
    if stripped == '---':
        doc.add_page_break()
        page_number += 1
        cover = False
        i += 1
        continue
    if stripped.startswith('|'):
        group = []
        while i < len(lines) and lines[i].strip().startswith('|'):
            group.append(lines[i].strip())
            i += 1
        table_from_markdown(group)
        continue
    if stripped.startswith('> '):
        stripped = stripped[2:].strip()
    heading = re.match(r'^(#{1,4})\s+(.*)$', stripped)
    if heading:
        level = len(heading.group(1))
        title = heading.group(2).strip()
        p = doc.add_paragraph()
        if cover:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(10 if 'ABHINAV' in title else 24)
            p.paragraph_format.space_after = Pt(8)
            r = p.add_run(title)
            r.bold = True
            r.font.name = 'Times New Roman'
            r.font.size = Pt(18 if 'ABHINAV' in title else 21)
        elif title.startswith('SECTION '):
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(180)
            p.paragraph_format.space_after = Pt(12)
            r = p.add_run(title)
            r.bold = True
            r.underline = True
            r.font.name = 'Times New Roman'
            r.font.size = Pt(20)
        elif title in {'CERTIFICATE', 'STUDENT PARTICULARS', 'INDEX'}:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_before = Pt(12)
            p.paragraph_format.space_after = Pt(18)
            r = p.add_run(title)
            r.bold = True
            r.font.name = 'Times New Roman'
            r.font.size = Pt(16)
        else:
            p.style = f'Heading {min(level, 4)}'
            p.paragraph_format.keep_with_next = True
            add_runs(p, title)
        i += 1
        continue
    if re.match(r'^\d+\.\s+', stripped):
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(3)
        add_runs(p, stripped)
    elif stripped.startswith('- '):
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(3)
        add_runs(p, stripped[2:])
    else:
        p = doc.add_paragraph()
        if cover:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_after = Pt(7)
        if stripped.startswith('**Place:**') or stripped.startswith('**Date:**'):
            p.paragraph_format.space_before = Pt(8)
        add_runs(p, stripped)
    i += 1

doc.core_properties.title = 'Journal for Practical Training - Professional Ethics and Contempt of Court Law'
doc.core_properties.subject = 'LLB-II Semester III, Academic Year 2026-2027'
doc.core_properties.author = 'Vikas Nalwar'
doc.save(OUTPUT)
print(OUTPUT)
