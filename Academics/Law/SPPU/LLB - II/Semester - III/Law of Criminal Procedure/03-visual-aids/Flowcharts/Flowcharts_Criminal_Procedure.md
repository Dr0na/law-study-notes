# 📐 Flowcharts and Diagrams - Law of Criminal Procedure (LCC 0701)

These diagrams illustrate the structural hierarchies, processes, and decision-making pathways within the criminal justice system under the BNSS, 2023.

---

## 1. Hierarchy and Sentencing Powers of Criminal Courts

This tree diagram shows the organization of criminal courts in India and their sentencing authorities under Sections 6, 22, and 23 of the BNSS.

```mermaid
graph TD
    HC["<b>High Court</b><br/>(Sec. 22(1))<br/>Sentence: Any sentence allowed by law"]
    
    HC --> SC["<b>Court of Session</b><br/>(Sec. 22(2))<br/>Sentence: Any sentence<br/>(Death requires HC confirmation)"]
    HC --> MC["<b>Judicial Magistrate Courts</b><br/>(Sec. 9 & 10)"]
    HC --> EM["<b>Executive Magistrate Courts</b><br/>(Sec. 14)<br/>Sentencing: Preventive custody only"]
    
    SC --> SJ["Sessions Judge"]
    SC --> ASJ["Additional Sessions Judge"]
    
    MC --> CJM["<b>Chief Judicial Magistrate</b><br/>(Sec. 23(1))<br/>Sentence: Up to 7 years"]
    CJM --> JMFC["<b>Judicial Magistrate First Class</b><br/>(Sec. 23(2))<br/>Sentence: Up to 3 years or ₹50k fine"]
    JMFC --> JMSC["<b>Judicial Magistrate Second Class</b><br/>(Sec. 23(3))<br/>Sentence: Up to 1 year or ₹10k fine"]
    
    EM --> DM["District Magistrate"]
    DM --> SDM["Sub-Divisional Magistrate"]
```

### Visual Guide: The Judicial Ladder (Court Hierarchy & Sentencing)
![The Judicial Ladder Infographic](../images/court_hierarchy.jpg)

💡 **Exam Tip**: Draw this flowchart when writing about "Hierarchy and Powers of Criminal Courts" in Module 01.

---

## 2. Step-by-Step Criminal Investigation Process

This flowchart maps the sequence of police actions from the registration of an FIR to the submission of the Charge Sheet.

```mermaid
graph TD
    A["Information of Cognizable Offence"] --> B["<b>Registration of FIR</b><br/>(Sec. 173)"]
    B --> C["Police proceeds to Crime Scene<br/>(Sec. 176)"]
    C --> D["Search & Seizure with Video Recording<br/>(Sec. 105)"]
    D --> E["Examining Witnesses & Statements<br/>(Sec. 179-180)"]
    E --> F["Apprehension / Arrest of Accused<br/>(Sec. 35)"]
    F --> G{"Produced before Magistrate<br/>within 24 Hours?"}
    G -->|Yes| H["Magistrate Remand Order<br/>(Sec. 187)"]
    G -->|No| I["Custodial Violence / Illegal Detention (Art. 22)"]
    H --> J["Collection of Forensics (Mandatory Sec. 176)"]
    J --> K["<b>Final Report / Charge Sheet</b><br/>(Sec. 193)"]
```

### Visual Guide: Legal Procedure Comparison (Cognizable vs Non-Cognizable)
![Cognizable vs. Non-Cognizable Offences Infographic](../images/cognizable_vs_noncognizable.jpg)

💡 **Exam Tip**: Draw this process map when explaining "FIR and Investigation Proceedings" under Module 03.

---

## 3. Stages in a Sessions Trial

This sequence diagram outlines the steps followed during a trial before a Court of Session under Sections 248 to 260 of the BNSS.

```mermaid
graph TD
    Start["<b>Committal of Case</b><br/>(Sec. 228)"] --> Opening["Opening Case by Public Prosecutor<br/>(Sec. 248)"]
    Opening --> Assessment{"Prima Facie Case?"}
    
    Assessment -->|No| Discharge["<b>Discharge of Accused</b><br/>(Sec. 250)"]
    Assessment -->|Yes| Framing["<b>Framing of Charge</b><br/>(Sec. 251)"]
    
    Framing --> Plea["Plea of Accused<br/>(Sec. 252)"]
    Plea --> Trial{"Pleads Guilty?"}
    
    Trial -->|Yes| ConvictionPlea["Conviction on Plea<br/>(Sec. 252)"]
    Trial -->|No| ProsecutionEvidence["<b>Prosecution Evidence</b><br/>(Sec. 254)"]
    
    ProsecutionEvidence --> AccusedStatement["Examination of Accused<br/>(Sec. 351)"]
    AccusedStatement --> DefenceEvidence["Defence Evidence<br/>(Sec. 256)"]
    DefenceEvidence --> Arguments["Final Arguments<br/>(Sec. 257)"]
    Arguments --> Judgment["<b>Judgment: Acquittal or Conviction</b><br/>(Sec. 258)"]
```

### Visual Guide: Comparison of Criminal Trial Types (BNSS 2023)
![Comparison of Criminal Trial Types Infographic](../images/trial_types.jpg)

💡 **Exam Tip**: Essential flowchart for long answers on "Trial before Court of Session" in Module 05.

---

## 4. Bail Decision Logic

This decision tree shows how police and courts determine bail under Sections 478 and 480.

```mermaid
graph TD
    A["Accused Apprehended"] --> B{"Is Offence Bailable?"}
    
    B -->|Yes| C["<b>Bail as a Right</b><br/>(Sec. 478)<br/>Release on Bond/Sureties"]
    B -->|No| D{"Is it a Life/Death Offence?"}
    
    D -->|Yes| E{"Is Accused minor, woman,<br/>sick, or infirm?"}
    E -->|Yes| F["Court may grant bail<br/>(Sec. 480)"]
    E -->|No| G["<b>Bail Denied</b><br/>(Usually)"]
    
    D -->|No| H["Court's Discretion to grant bail<br/>(Sec. 480)"]
```

### Visual Guide: Bail Admissibility Decision Tree (BNSS 2023)
![Bail Admissibility Decision Tree Infographic](../images/bail_decision_tree.jpg)

💡 **Exam Tip**: Draw this decision tree when answering questions on "Bail and Anticipatory Bail" in Module 04.

---

## 5. Juvenile Justice System Workflow

This diagram maps the path taken by children under the JJ Act, 2015 based on their classification under Section 2.

```mermaid
graph TD
    Child["Child Apprehended by Police<br/>(Person < 18 years)"] --> Classification{"Category?"}
    
    Classification -->|Child in Conflict<br/>with Law - CCL| JJB["<b>Juvenile Justice Board</b><br/>(Sec. 4)"]
    Classification -->|Child in Need of<br/>Care & Protection - CNCP| CWC["<b>Child Welfare Committee</b><br/>(Sec. 27)"]
    
    JJB --> Preliminary{"Age 16-18 & Heinous Crime?<br/>(Sec. 15)"}
    
    Preliminary -->|Yes| CC["<b>Children's Court</b><br/>(Tried as adult - Sec. 19)"]
    Preliminary -->|No| Reform["Special Home / Probation<br/>(Reformatory approach)"]
    
    CWC --> Care["Children's Home / Foster Care / secular Adoption"]
```

💡 **Exam Tip**: Draw this to illustrate the dual approach of the Juvenile Justice Act in Module 07 answers.
