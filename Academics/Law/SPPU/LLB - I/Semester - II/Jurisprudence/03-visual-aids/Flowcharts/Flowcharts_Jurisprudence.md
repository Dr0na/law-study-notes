# 📐 Flowcharts and Diagrams - Jurisprudence

## 1. Kelsen's Hierarchy of Norms (The Pyramid)

This diagram illustrates how laws derive their validity from a single "Basic Norm."

```mermaid
graph TD
    G[**GRUNDNORM**<br/>The Basic Norm / Constitution] --> S[**STATUTES**<br/>Acts passed by Parliament]
    S --> R[**RULES**<br/>Delegated Legislation]
    R --> D[**DECISIONS**<br/>Court Judgments / Contracts]
```

💡 **Exam Tip**: Draw this pyramid when explaining Kelsen's "Pure Theory of Law."

---

## 2. Hohfeldian Jural Relations

Hohfeld's system explains the precise relationship between legal concepts.

### Jural Correlatives (Vertical Pairs)
If A has a Right, B has a Duty.

```mermaid
graph LR
    subgraph Correlatives
    R[Right] <--> D[Duty]
    P[Privilege] <--> N[No-Right]
    PO[Power] <--> L[Liability]
    I[Immunity] <--> DI[Disability]
    end
```

### Jural Opposites (Diagonal Pairs)
If A has a Right, A cannot have a No-Right.

```mermaid
graph TD
    R[Right] --- N[No-Right]
    P[Privilege] --- DU[Duty]
    PO[Power] --- DI[Disability]
    I[Immunity] --- L[Liability]
```

💡 **Exam Tip**: This is high-scoring for 10-mark questions on "Rights and Duties."

---

## 3. Classification of Law

```mermaid
graph TD
    L[**LAW**] --> M[Municipal Law]
    L --> I[International Law]
    M --> PUB[Public Law]
    M --> PRI[Private Law]
    PUB --> C[Constitutional]
    PUB --> A[Administrative]
    PUB --> CR[Criminal]
    PRI --> CON[Contract]
    PRI --> T[Tort]
    PRI --> P[Property]
```

💡 **Exam Tip**: Use this to show the "Generous Frontiers" of Jurisprudence.
