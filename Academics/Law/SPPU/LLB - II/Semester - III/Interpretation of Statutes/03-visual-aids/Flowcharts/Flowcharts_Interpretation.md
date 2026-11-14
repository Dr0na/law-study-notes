# Interpretation of Statutes — Flowcharts

## Choosing an interpretive rule

```mermaid
flowchart TD
 A[Identify disputed words and legal question] --> B[Read text grammatically]
 B --> C[Read definition, surrounding sections and whole Act]
 C --> D{Meaning clear and workable?}
 D -->|Yes| E[Apply ordinary contextual meaning]
 D -->|No| F[Identify ambiguity, conflict or absurdity]
 F --> G[Choose relevant tool: golden / mischief / harmonious / contextual canon]
 G --> H[Use internal aids]
 H --> I{Uncertainty remains?}
 I -->|Yes| J[Use relevant external aids and precedent]
 I -->|No| K[State construction]
 J --> K
 K --> L[Test against text, scheme, purpose and constitutional limits]
```

## General Clauses Act question

```mermaid
flowchart TD
 A[Identify enactment and disputed term] --> B{Special definition in target Act?}
 B -->|Yes| C[Apply special definition in its scope]
 B -->|No| D{Central Act/Regulation within GCA scope?}
 D -->|No| E[Check relevant State GCA or other interpretation law]
 D -->|Yes| F[Find GCA definition/default rule]
 F --> G{Contrary intention from subject/context?}
 G -->|Yes| H[Do not apply default mechanically]
 G -->|No| I[Apply GCA rule]
```

## Commencement, amendment and repeal

```mermaid
flowchart TD
 A[Identify enactment/amendment] --> B[Check commencement clause/notification]
 B --> C[Fix operative date]
 C --> D[Locate relevant conduct or transaction in time]
 D --> E{New rule changes substantive rights, liability or penalty?}
 E -->|Yes| F[Presumption against retrospectivity; inspect clear language/savings]
 E -->|No| G[Assess procedural/declaratory character and statutory intent]
 F --> H[Check GCA ss.5-6, s.24, express savings, Art.20(1)]
 G --> H
 H --> I[State effect on accrued rights and pending proceedings]
```
