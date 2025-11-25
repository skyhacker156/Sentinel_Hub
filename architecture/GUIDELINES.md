# Architecture Documentation — Detailed Guidelines

**Parent:** `README.md` (read that first)  
**Purpose:** Complete rules, examples, and checklists for architecture documentation  
**Badge Required:** PRISM

---

## 1. What This Folder Does

The `/architecture` directory is a **documentation-only space** that explains:

- System design of Sentinel_Hub (frontend architecture, component relationships)
- Interface specifications (how public systems interact)
- Frontend-backend separation (where the line is drawn)
- Multi-repo architecture layouts (Sentinel_Hub relationship to sealed systems)
- Public workflows (Table A → Hallway → Table B as narrative metaphors)
- Safe-development principles (Separation Doctrine, Firewall Principle applied to architecture)

**Core principle:** This folder explains the **scaffolding** (public interface structure), never the **kernel** (proprietary computation).

---

## 2. In Scope — Full List

### System Design & Diagrams
- Create system architecture diagrams (ASCII, Mermaid, SVG)
- Explain component relationships and data flow
- Document module boundaries and interfaces
- Visualize folder structure and dependency trees
- Generate flow charts for public processes

### Documentation & Clarity
- Improve clarity of existing architecture docs
- Expand explanations for complex diagrams
- Add examples of how modules interact
- Create navigation guides through the architecture
- Reorganize for better readability

### Multi-Repo Structure
- Explain the relationship between Sentinel_Hub and sealed systems
- Document what lives in Repository A vs. B/C
- Describe the boundary layer between public and private
- Clarify the purpose of each folder and its constraints
- Create architecture maps showing system topology

### Narrative-Safe Concepts
- Elaborate on Table A / Hallway / Table B as architectural metaphors
- Describe how these concepts inform system design
- Explain the Founder's workflow using approved vocabulary
- Document the Separation Doctrine as applied to code structure
- Describe the Firewall Principle as applied to interfaces

### Safe-Development Principles
- Document how Separation Doctrine is enforced in code
- Explain module isolation and dependency constraints
- Describe authentication and access control architecture
- Document data flow boundaries (what crosses them, what doesn't)
- Create guidelines for maintaining the firewall during development

### Interface Specifications
- Define public API contracts (what's exposed, what's sealed)
- Document communication protocols between modules
- Specify input/output specifications for public functions
- Describe error handling and edge cases at module boundaries
- Create stub specifications for future integrations

---

## 3. Out of Scope — Full List

### Proprietary S³ Logic
- Do NOT describe how the S³ Engine works
- Do NOT propose internal algorithms or transformations
- Do NOT suggest data structures for sealed computation
- Do NOT infer mathematical logic from architecture
- Do NOT discuss threshold values, internal states, or verdict generation

### Enclave Computation
- Do NOT document Enclave1 or Enclave2 internals
- Do NOT propose how enclaves process data
- Do NOT design communication protocols that expose sealed logic
- Do NOT suggest enclave architecture or module boundaries
- Do NOT describe signal processing or detection mechanisms

### Sealed Transforms & Signals
- Do NOT explain Transfer Entropy calculations
- Do NOT discuss causal drift detection mechanisms
- Do NOT describe pressure coherence analysis
- Do NOT document internal signal processing
- Do NOT propose features that would expose verdict logic

### Infer Hidden Mechanisms
- Do NOT attempt to reverse-engineer S³ from architecture
- Do NOT speculate about internal computation pathways
- Do NOT reconstruct hidden math from interface specifications
- Do NOT propose what sealed systems "might" be doing
- Do NOT suggest equations or algorithms that might match sealed logic

### Connect Hub to Enclave
- Do NOT propose architecture that bridges Repository A to B/C
- Do NOT suggest data flow from Hub directly to sealed systems
- Do NOT design APIs that would expose enclave internals
- Do NOT create interfaces that imply verdict visibility
- Do NOT suggest Hub could display internal engine state

### Proprietary Detection Methods
- Do NOT document how Sentinel detects market opportunities
- Do NOT describe methods for identifying trade signals
- Do NOT propose monitoring or alerting mechanisms for verdicts
- Do NOT suggest analytical approaches Sentinel uses
- Do NOT create architectures that would expose detection logic

### Break Narrative Canon
- Do NOT reinterpret or redefine Table A / Hallway / Table B
- Do NOT suggest alternative metaphors that weaken the firewall
- Do NOT modify approved vocabulary without Founder approval
- Do NOT propose architectural shortcuts that bypass the workflow
- Do NOT create inconsistencies with Narrative_Specifications

---

## 4. Example Tasks

### ✅ Safe: "Create a system diagram showing Sentinel_Hub folders"

- **Action:** Draw a diagram with `/src/website/`, `/docs/`, `/governance/`, `/architecture/` labeled
- **Include:** Purpose of each folder, high-level what files live there
- **Avoid:** Any description of sealed systems or internal computation
- **Result:** PERMITTED

### ✅ Safe: "Explain how the Separation Doctrine applies to module design"

- **Action:** Document how modules are isolated, what they can/can't access, boundary enforcement
- **Include:** Authentication layers, data flow restrictions, access control patterns
- **Avoid:** Any suggestion of internal S³ logic or sealed computation
- **Result:** PERMITTED

### ✅ Safe: "Create a diagram showing Table A → Hallway → Table B"

- **Action:** Visualize the three narrative concepts as architectural states/transitions
- **Include:** How Founder interacts with each stage, where decisions are made
- **Avoid:** Any implication that this maps to internal computation
- **Result:** PERMITTED

### ✅ Safe: "Document the Firewall Principle as applied to this codebase"

- **Action:** Show what files/modules have access to what
- **Include:** Boundary enforcement, sealed vs. public layers, one-way data flow
- **Avoid:** Any description of what's actually sealed or why
- **Result:** PERMITTED

### ❌ Unsafe: "Design architecture for how the engine processes trading signals"

- **Problem:** Proposing internal computation structure
- **Risk:** Inferring sealed logic
- **Action:** STOP. Ask Founder.
- **Result:** PROHIBITED

### ❌ Unsafe: "Create a diagram showing how causal drift detection works internally"

- **Problem:** Speculating about sealed mechanism
- **Risk:** Reverse-engineering S³ internals
- **Action:** STOP. Clarify with Founder.
- **Result:** PROHIBITED

---

## 5. Content Review Checklist

Before creating or modifying architecture documentation:

### Is this narrative-safe?
- [ ] Does this explain public architecture only (scaffolding)?
- [ ] Does this avoid describing sealed computation (kernel)?
- [ ] Does this use only approved Sentinel vocabulary?
- [ ] Does this strengthen the firewall, not weaken it?

### Is this within scope?
- [ ] Am I documenting Repository A only?
- [ ] Am I not describing Repositories B or C internals?
- [ ] Does this explain interfaces, not implementations of sealed logic?
- [ ] Am I not inferring or speculating about S³ internals?

### Does this respect the Separation Doctrine?
- [ ] Does this keep narrative and computation separate?
- [ ] Does this avoid suggesting internal mechanisms?
- [ ] Does this document the boundary line clearly?
- [ ] Does this show what crosses boundaries and what doesn't?

### Does this protect IP?
- [ ] Am I not reverse-engineering from outputs?
- [ ] Am I not inferring S³ internals from architecture?
- [ ] Am I not breaking the Firewall Principle?
- [ ] Am I not proposing how sealed systems work?

**If ANY answer is NO:** STOP. Do not proceed. Ask Founder.

---

## 6. Escalation Protocol

If you are unsure whether a piece of architecture is safe to document:

1. **STOP immediately.** Do not proceed.
2. **Identify the concern:** "This appears to touch [describe boundary issue]"
3. **Ask Founder:** "Can I document this at the interface level, or does it require understanding sealed logic?"
4. **Wait for clarification** before proceeding.

**Example questions to ask:**
- "Is this a public interface I can document, or internal enclave computation?"
- "Does this diagram require understanding S³ internals, or can I show it as a black box?"
- "Is this narrative (Table A/B/Hallway) or computation?"

---

## 7. Key Principle

**Architecture documents the house, not the power grid inside the walls.**

| ✅ Document | ❌ Do NOT Document |
|-------------|-------------------|
| Rooms (folders, modules) | Wiring (internal computation) |
| Doors (interfaces) | How electricity works (sealed logic) |
| Locks (auth, access control) | Hidden circuits (reverse-engineer) |
| Blueprints (structure) | New wires bypassing walls (bridges to sealed) |

---

## 8. Dependencies

**This folder inherits from:**
- `LLM_COLLABORATION_PROTOCOL.md` (Section III-A, Section VI)
- `/governance/Firewall_Principle.md`
- `/governance/Separation_Doctrine.md`
- `/governance/Narrative_Specifications.md`

**This folder connects to:**
- `/docs/` (research summaries, conceptual explanations)
- `/src/website/` (implementation of public architecture)

---

## 9. Expected Files

- `README.md` — Folder purpose and quick-start
- `GUIDELINES.md` — This file (detailed rules)
- `System_Design.md` — High-level architecture
- `Module_Specifications.md` — Interface specs
- `Data_Flow_Diagrams.md` — How data moves
- `Multi_Repo_Structure.md` — Relationship to sealed repos
- `Narrative_Architecture.md` — Table A / Hallway / Table B mapping
- `Development_Principles.md` — How firewall is enforced
- Various diagrams (ASCII, Mermaid, SVG)

---

Last updated: November 24, 2025  
Maintained by: Founder + STEWARD
```

---

**Structure now:**
```
/architecture
├── README.md        ← Stuart hands this (short scroll)
├── GUIDELINES.md    ← LLM reads if they need detail
└── [other docs]     ← Actual architecture files
