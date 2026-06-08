# Flowcharts: Law of Evidence processes

This document contains Mermaid diagrams illustrating key procedural flows in the Law of Evidence.

---

## 1. Hierarchy of Admissibility of Evidence

```mermaid
graph TD
    A[Fact Presented to Court] --> B{Is it logically relevant?}
    B -->|No| C[Inadmissible]
    B -->|Yes| D{Is it legally relevant under BSS Sec. 3-50?}
    D -->|No| C
    D -->|Yes| E{Is it excluded by any statutory rule?}
    E -->|Yes| C
    E -->|No| F[Admissible in Court]
```

---

## 2. Confession Admissibility Decision Tree

```mermaid
graph TD
    A[Confession of Guilt] --> B{To whom was it made?}
    B -->|To Police Officer| C[Strictly Inadmissible - Sec. 23.1]
    B -->|In Police Custody| D{Was a Magistrate present?}
    D -->|No| E{Did it lead to discovery of a distinct fact?}
    E -->|Yes| F[Only information leading to discovery is Admissible - Sec. 23.2]
    E -->|No| C
    D -->|Yes| G[Admissible - Sec. 23 Exception]
    B -->|To Private Person / Extra-Judicial| H[Admissible but weak evidence]
```

### Visual Guide: Section 23 Admissibility Flow
![Police Confessions & The Discovery of Fact Infographic](../images/police_confessions_discovery.jpg)

---

## 3. Admissibility of Electronic Records (Sec. 63 Certification)

```mermaid
graph TD
    A[Electronic Record presented] --> B{Is it the original device/media?}
    B -->|Yes| C[Admissible as Primary Evidence - Sec. 62]
    B -->|No| D{Is it accompanied by a Section 63 Certificate?}
    D -->|Yes| E{Are Section 63 validation conditions satisfied?}
    E -->|Yes| F[Admissible as Secondary Electronic Evidence]
    E -->|No| G[Inadmissible]
    D -->|No| G
```

### Visual Guide: Section 63 Admissibility Checklist (Electronic & Digital Records)
![Section 63 Admissibility of Electronic Records Infographic](../images/electronic_evidence.jpg)

---

## 4. Order of Witness Examination

```mermaid
graph TD
    Start([Witness Called to Court]) --> Step1[1. Examination-in-Chief<br/>By party calling witness]
    Step1 --> Step2[2. Cross-Examination<br/>By adverse party]
    Step2 --> Step3{Are clarifications needed?}
    Step3 -->|Yes| Step4[3. Re-Examination<br/>By party calling witness]
    Step3 -->|No| End([Witness Discharged])
    Step4 --> End
```
