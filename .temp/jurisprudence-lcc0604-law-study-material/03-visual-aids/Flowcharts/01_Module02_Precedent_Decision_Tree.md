# 📐 Flowchart — applying precedent in court (Module 02)

```mermaid
flowchart TD
    Q["Question of law before the court"]
    Q --> P{"Is there a prior decision on this point?"}
    P -- No --> NEW["Decide on first principles<br/>(statute + custom + reasoning)"]
    P -- Yes --> H{"Decision from a higher / coordinate court?"}
    H -- Lower --> PER["At most persuasive"]
    H -- Higher / coordinate --> R{"Is what you rely on the ratio decidendi?"}
    R -- No (obiter) --> OB["Persuasive only"]
    R -- Yes --> F{"Decision still authoritative?"}
    F -- Per incuriam / overruled / reversed --> NO["No longer binding"]
    F -- Authoritative --> D{"Distinguishable on material facts?"}
    D -- Yes --> DIST["Distinguish and decide"]
    D -- No --> APP["Apply: bound by stare decisis (Art. 141 / hierarchy)"]
```

**Reading guide:**

1. Always check **prior decisions first**.
2. The **ratio** binds — the *obiter* persuades.
3. Watch for *per incuriam*, **statutory change**, or a later **constitution-bench overruling**.
4. **Distinguishing** is the safe escape route; **overruling** requires equal or higher authority.
