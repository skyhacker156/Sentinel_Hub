# Architecture Documentation — Sentinel_Hub
**Purpose**: Define the public architectural understanding of Sentinel_Hub frontend and its relationship to the Sentinel Labs ecosystem  
**Status**: Active (Documentation-Only, LLM-Safe)  
**Scope**: Repository A only — Frontend and public architecture  
**Binding Document**: Yes (aligns with Firewall Principle, Separation Doctrine, LLM Collaboration Protocol Section III-A)

---

## What This Folder Does

The `/architecture` directory is a **documentation-only space** that explains:

- **System design** of Sentinel_Hub (frontend architecture, component relationships)
- **Interface specifications** (how public systems interact)
- **Frontend-backend separation** (where the line is drawn)
- **Multi-repo architecture layouts** (Sentinel_Hub relationship to sealed systems)
- **Public workflows** (Table A → Hallway → Table B as narrative metaphors)
- **Safe-development principles** (Separation Doctrine, Firewall Principle applied to architecture)

**Core principle:** This folder explains the **scaffolding** (public interface structure), never the **kernel** (proprietary computation).

All architecture documentation is narrative-safe and designed for both human and LLM consumption.

---

## LLMs May (In Scope)

✅ **System Design & Diagrams**
- Create system architecture diagrams (ASCII, Mermaid, SVG)
- Explain component relationships and data flow
- Document module boundaries and interfaces
- Visualize folder structure and dependency trees
- Generate flow charts for public processes

✅ **Documentation & Clarity**
- Improve clarity of existing architecture docs
- Expand explanations for complex diagrams
- Add examples of how modules interact
- Create navigation guides through the architecture
- Reorganize for better readability

✅ **Multi-Repo Structure**
- Explain the relationship between Sentinel_Hub and sealed systems
- Document what lives in Repository A vs. B/C
- Describe the boundary layer between public and private
- Clarify the purpose of each folder and its constraints
- Create architecture maps showing system topology

✅ **Narrative-Safe Concepts**
- Elaborate on Table A / Hallway / Table B as architectural metaphors
- Describe how these concepts inform system design
- Explain the Founder's workflow using approved vocabulary
- Document the Separation Doctrine as applied to code structure
- Describe the Firewall Principle as applied to interfaces

✅ **Safe-Development Principles**
- Document how Separation Doctrine is enforced in code
- Explain module isolation and dependency constraints
- Describe authentication and access control architecture
- Document data flow boundaries (what crosses them, what doesn't)
- Create guidelines for maintaining the firewall during development

✅ **Interface Specifications**
- Define public API contracts (what's exposed, what's sealed)
- Document communication protocols between modules
- Specify input/output specifications for public functions
- Describe error handling and edge cases at module boundaries
- Create stub specifications for future integrations

---

## LLMs Must Not (Out of Scope)

❌ **Proprietary S³ Logic**
- Do NOT describe how the S³ Engine works
- Do NOT propose internal algorithms or transformations
- Do NOT suggest data structures for sealed computation
- Do NOT infer mathematical logic from architecture
- Do NOT discuss threshold values, internal states, or verdict generation

❌ **Enclave Computation**
- Do NOT document Enclave1 or Enclave2 internals
- Do NOT propose how enclaves process data
- Do NOT design communication protocols that expose sealed logic
- Do NOT suggest enclave architecture or module boundaries
- Do NOT describe signal processing or detection mechanisms

❌ **Sealed Transforms & Signals**
- Do NOT explain Transfer Entropy calculations
- Do NOT discuss causal drift detection mechanisms
- Do NOT describe pressure coherence analysis
- Do NOT document internal signal processing
- Do NOT propose features that would expose verdict logic

❌ **Infer Hidden Mechanisms**
- Do NOT attempt to reverse-engineer S³ from architecture
- Do NOT speculate about internal computation pathways
- Do NOT reconstruct hidden math from interface specifications
- Do NOT propose what sealed systems "might" be doing
- Do NOT suggest equations or algorithms that might match sealed logic

❌ **Connect Hub to Enclave**
- Do NOT propose architecture that bridges Repository A to B/C
- Do NOT suggest data flow from Hub directly to sealed systems
- Do NOT design APIs that would expose enclave internals
- Do NOT create interfaces that imply verdict visibility
- Do NOT suggest Hub could display internal engine state

❌ **Proprietary Detection Methods**
- Do NOT document how Sentinel detects market opportunities
- Do NOT describe methods for identifying trade signals
- Do NOT propose monitoring or alerting mechanisms for verdicts
- Do NOT suggest analytical approaches Sentinel uses
- Do NOT create architectures that would expose detection logic

❌ **Break Narrative Canon**
- Do NOT reinterpret or redefine Table A / Hallway / Table B
- Do NOT suggest alternative metaphors that weaken the firewall
- Do NOT modify approved vocabulary without Founder approval
- Do NOT propose architectural shortcuts that bypass the workflow
- Do NOT create inconsistencies with Narrative_Specifications

---

## Dependencies & Connections

**This folder inherits from:**
- `LLM_COLLABORATION_PROTOCOL.md` (binding authority, Section III-A: Code Assistance, Section VI: Permitted Examples)
- `LLM_PORTABLE_README.md` (onboarding and operating instructions)
- `ORIENTATION.md` (context for Sentinel_Hub)
- `BOUNDARIES.md` (repo-level constraints)
- `TASKS_ALLOWED.md` (safe tasks for this repo)

**This folder connects to:**
- `/governance/` (Separation_Doctrine, Firewall_Principle, Narrative_Specifications)
- `/docs/` (research summaries, conceptual explanations)
- `/src/website/` (implementation of public architecture)
- All other folders in the repo (each folder's architecture is defined here)

**Other folders reference this:**
- Every folder README should reference `/architecture` for design context
- Every major code change should be reflected in architecture docs
- Every LLM working on `/src/` should read the relevant architecture docs

---

## Content Review Checklist (Before Documenting Architecture)

Before creating or modifying architecture documentation, verify:

**Is this narrative-safe?**
- [ ] Does this explain public architecture only (scaffolding)?
- [ ] Does this avoid describing sealed computation (kernel)?
- [ ] Does this use only approved Sentinel vocabulary?
- [ ] Does this strengthen the firewall, not weaken it?

**Is this within my scope?**
- [ ] Am I documenting Repository A only?
- [ ] Am I not describing Repositories B or C internals?
- [ ] Does this explain interfaces, not implementations of sealed logic?
- [ ] Am I not inferring or speculating about S³ internals?

**Does this respect the Separation Doctrine?**
- [ ] Does this keep narrative and computation separate?
- [ ] Does this avoid suggesting internal mechanisms?
- [ ] Does this document the boundary line clearly?
- [ ] Does this show what crosses boundaries and what doesn't?

**Does this protect IP?**
- [ ] Am I not reverse-engineering from outputs?
- [ ] Am I not inferring S³ internals from architecture?
- [ ] Am I not breaking the Firewall Principle?
- [ ] Am I not proposing how sealed systems work?

**If ANY answer is NO: STOP. Do not proceed. Ask the Founder.**

---

## Example Safe Tasks

### ✅ Safe: "Create a system diagram showing Sentinel_Hub folders and their purposes"

- **Action**: Draw a diagram with `/src/website/`, `/docs/`, `/governance/`, `/architecture/` labeled
- **Include**: Purpose of each folder, high-level what files live there
- **Avoid**: Any description of sealed systems or internal computation
- **Result**: PERMITTED

### ✅ Safe: "Explain how the Separation Doctrine applies to module design"

- **Action**: Document how modules are isolated, what they can/can't access, boundary enforcement
- **Include**: Authentication layers, data flow restrictions, access control patterns
- **Avoid**: Any suggestion of internal S³ logic or sealed computation
- **Result**: PERMITTED

### ✅ Safe: "Create a diagram showing the public workflow: Table A → Hallway → Table B"

- **Action**: Visualize the three narrative concepts as architectural states/transitions
- **Include**: How Founder interacts with each stage, where decisions are made
- **Avoid**: Any implication that this maps to internal computation
- **Result**: PERMITTED

### ✅ Safe: "Document the Firewall Principle as applied to this codebase"

- **Action**: Show what files/modules have access to what
- **Include**: Boundary enforcement, sealed vs. public layers, one-way data flow
- **Avoid**: Any description of what's actually sealed or why
- **Result**: PERMITTED

### ❌ Unsafe: "Design an architecture for how the engine could process trading signals"

- **Problem**: Proposing internal computation structure
- **Risk**: Inferring sealed logic
- **Action**: STOP. Ask Founder: "Are you asking me to document a public interface for signals, or design internal signal processing? Signal processing is sealed."
- **Result**: PROHIBITED

### ❌ Unsafe: "Create a diagram showing how causal drift detection might work internally"

- **Problem**: Speculating about sealed mechanism
- **Risk**: Reverse-engineering S³ internals
- **Action**: STOP. Clarify: "Causal drift detection is a sealed mechanism. I can document it conceptually as part of the workflow, but not propose internal architecture."
- **Result**: PROHIBITED

---

## How to Use This Folder (LLM Workflow)

### Before Documenting Architecture:

1. **Read the LLM_Portable README** (onboarding)
2. **Read LLM_COLLABORATION_PROTOCOL.md** (Section III-A: Code Assistance is relevant here)
3. **Read this README** (what you're reading now)
4. **Read `/governance/Separation_Doctrine.md`** (understand the principle you're documenting)
5. **Read `/governance/Firewall_Principle.md`** (understand what's sealed and why)
6. **Use the Content Review Checklist** before generating diagrams or documentation

### Step-by-step for a specific task:

1. **Identify what you're documenting** (e.g., "module relationships in `/src/website/`")
2. **Determine the scope** (public only? repository A only? what's sealed?)
3. **Use the Content Review Checklist** (run through all questions)
4. **Ask if unclear** ("Can I document this, or does it touch sealed logic?")
5. **Document at the scaffolding level** (interfaces, not hidden implementations)
6. **Reference governance documents** where relevant

---

## Escalation Rule

**If you are unsure whether a piece of architecture is safe to document:**

1. **STOP immediately.** Do not proceed.
2. **Identify the concern:** "This appears to be [describe the boundary issue]"
3. **Ask the Founder:** "Can I document this at the interface level, or does it require understanding sealed logic?"
4. **Wait for clarification** before proceeding.

**Examples of questions to ask:**

- "Is this a public interface I can document, or internal enclave computation I must avoid?"
- "Does this diagram require understanding S³ internals, or can I show it as a black box?"
- "Is this narrative (Table A/B/Hallway) or computation? Should I document it?"

---

## Key Principle (Emphasized)

**Architecture documents the house, not the power grid inside the walls.**

This means:
- ✅ Document the rooms (folders, modules), their purposes, and how they connect
- ✅ Document the doors (interfaces), how data flows between rooms
- ✅ Document the locks (authentication, access control), what's sealed and why
- ✅ Document the blueprints (design patterns, structure, organization)

- ❌ Do NOT document the wiring (internal computation)
- ❌ Do NOT explain how electricity works (sealed logic)
- ❌ Do NOT suggest where hidden circuits might be (reverse-engineer)
- ❌ Do NOT propose adding new wires that bypass the walls (connect to sealed systems)

---

## Governance Documents This Folder Implements

This folder operationalizes three key governance principles:

1. **Firewall Principle** (see `/governance/Firewall_Principle.md`)
   - Sealed systems remain sealed
   - Architecture respects the boundary
   - No bridges to internal computation

2. **Separation Doctrine** (see `/governance/Separation_Doctrine.md`)
   - Narrative and computation stay separate
   - Architecture keeps them isolated
   - One-way verdict flow only

3. **Narrative Specifications** (see `/governance/Narrative_Specifications.md`)
   - Approved vocabulary and metaphors only
   - Table A / Hallway / Table B as organizing principles
   - Architecture documents the Founder's workflow, not hidden logic

---

## File Structure (What Lives Here)

Expected files in `/architecture/`:

- **README.md** (this file) — Folder purpose and LLM guidelines
- **System_Design.md** — High-level system architecture and component relationships
- **Module_Specifications.md** — Interface specs for each module, what's public vs. sealed
- **Data_Flow_Diagrams.md** — How data moves through public systems
- **Multi_Repo_Structure.md** — Relationship between Sentinel_Hub and sealed repositories
- **Narrative_Architecture.md** — How Table A / Hallway / Table B map to the system
- **Development_Principles.md** — How Separation Doctrine and Firewall Principle are enforced
- Various **diagrams** (ASCII, Mermaid, SVG) illustrating the above

---

## Content Review Checklist (Quick Version)

Use this before documenting anything:

- [ ] Is this Repository A public architecture only?
- [ ] Does this avoid describing sealed computation?
- [ ] Does this strengthen the firewall, not weaken it?
- [ ] Does this use approved vocabulary and metaphors?
- [ ] Am I documenting interfaces, not sealed implementations?
- [ ] Would a reader understand the boundary between public and sealed?

**If any answer is NO: STOP and ask the Founder.**

---

## Founder Declaration

By establishing this Architecture Documentation folder and README, I (the Founder) affirm:

- ✅ This folder is LLM-safe for documentation of public architecture
- ✅ LLMs may help create diagrams, explanations, and interface specs
- ✅ All architecture must respect the Firewall Principle and Separation Doctrine
- ✅ Sealed systems remain sealed; no inference or reconstruction permitted
- ✅ I will review all architecture documentation against these standards

Any architecture documentation that bridges Repository A to B/C, infers sealed logic, or breaks the firewall will be rejected and the violation documented.

---

**Folder Status**: ACTIVE (Documentation-Only, LLM-Safe)  
**Last Updated**: November 22, 2025  
**Maintained By**: Founder, Sentinel Laboratories  
**Protocol Reference**: LLM_COLLABORATION_PROTOCOL.md (Section III-A, VI)  
**Governance Reference**: Firewall_Principle.md, Separation_Doctrine.md, Narrative_Specifications.md  
**Next Review**: Upon material architecture change or annual, whichever comes first

---

## Quick Navigation

- [What This Folder Does](#what-this-folder-does)
- [In Scope (LLMs May)](#llms-may-in-scope)
- [Out of Scope (LLMs Must Not)](#llms-must-not-out-of-scope)
- [Content Review Checklist](#content-review-checklist-before-documenting-architecture)
- [Example Safe Tasks](#example-safe-tasks)
- [How to Use This Folder](#how-to-use-this-folder-llm-workflow)
- [Key Principle](#key-principle-emphasized)
- [Escalation Rule](#escalation-rule)
