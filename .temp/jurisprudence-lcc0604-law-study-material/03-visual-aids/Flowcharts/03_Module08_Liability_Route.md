# 📐 Flowchart — routing a liability question (Module 08)

```mermaid
flowchart TD
    Q["Facts disclosing harm / breach"]
    Q --> S{"Source of obligation?"}
    S -- Agreement --> CT["Contractual liability"]
    S -- Wrongful act --> T{"Civil or criminal wrong?"}
    S -- Implied by law --> QC["Quasi-contract (S.68–72 ICA)"]
    T -- Civil tort --> TY{"Type of tortious liability?"}
    T -- Criminal --> PEN["Penal liability — IPC / special law"]
    TY -- Fault-based --> FAULT["Fault liability — duty + breach + cause + damage"]
    TY -- Non-natural use, escape --> STR["Strict liability — Rylands v Fletcher (defences available)"]
    TY -- Hazardous / inherently dangerous --> ABS["Absolute liability — M.C. Mehta (no defences)"]
    TY -- Through another --> VIC["Vicarious — master/servant, principal/agent, partners, State"]
    FAULT --> R["Remedy: damages / injunction / specific relief"]
    STR --> R
    ABS --> R
    VIC --> R
    CT --> R2["Remedy: damages / specific performance / rescission"]
    QC --> R2
    PEN --> R3["Sanction: imprisonment / fine / both"]
```

**Reading guide:**

1. First fix the **source** of obligation.
2. For tort, distinguish **fault**, **strict**, **absolute**, **vicarious**.
3. **Defences** drop away as you move from strict → absolute.
4. End the answer with the **remedy** appropriate to the head of liability.
