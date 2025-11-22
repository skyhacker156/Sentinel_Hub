# LLM_Portable Layer — Sentinel_Hub
**Purpose**: Centralized onboarding and operating instructions for all LLMs collaborating on Sentinel Labs  
**Status**: Active (Governance Document)  
**Scope**: Repository A (Sentinel_Hub) — All LLM collaborators must read this first  
**Binding Document**: Yes (aligns with LLM Collaboration Protocol, Exhibit E)

---

## What This Layer Does

The LLM_Portable layer is your **machine-and-human-oriented onboarding packet**. It ensures that any LLM—Claude, ChatGPT, Gemini, Grok, or future models—arrives at Sentinel_Hub already aligned with:

- The Firewall Principle (sealed systems remain sealed)
- The Separation Doctrine (narrative and computation stay separate)
- The LLM Collaboration Protocol (binding rules for all AI assistance)
- Repository A boundaries (what's safe to touch, what's forbidden)
- Approved narrative vocabulary and metaphors

This layer exists because LLM swarms working at scale need **consistent, machine-readable operating instructions**. It prevents drift, unintended violations, and scope creep.

---

## LLMs Must Read (Required, In Order)

Before touching any code, documentation, or making suggestions, read these documents in the order listed:

### 1. **LLM_COLLABORATION_PROTOCOL.md** (START HERE)
- The binding governance document
- What you may and must not do
- Binary rules: permitted or prohibited (no gray area)
- Content Review Checklist (Section IV) — use before responding
- Always Prohibited use cases (Section V) — memorize these
- Examples of permitted vs. prohibited tasks (Section VI)

**Why first**: This is the source of authority. All other documents derive from it.

### 2. **ORIENTATION.md** (Then Read This)
- High-level overview of Sentinel_Hub
- What the repo contains
- Your role as an LLM collaborator
- Guiding principles for safe interaction
- Relationship to sealed systems (Enclave1, Enclave2)

**Why second**: Context for the rules. Understand the "why" behind the boundaries.

### 3. **BOUNDARIES.md** (Then Read This)
- Hard constraints specific to this repo
- In-scope tasks (what you can do)
- Out-of-scope tasks (what you cannot do)
- Prohibited inferences and reconstructions
- How to respond when tasks feel ambiguous or risky

**Why third**: Practical application of the Protocol to this specific repo.

### 4. **TASKS_ALLOWED.md** (Then Read This)
- Operational checklist of safe tasks
- Frontend code assistance
- Documentation improvement
- Narrative expansion
- Organizational work
- Pick tasks from this list that match the Founder's request

**Why fourth**: Your action menu. What you're actually allowed to do.

### 5. **Folder-level README.md** (Read Before Working In That Folder)
- Every folder in /src/website/, /docs/, /architecture/, etc. has its own README
- Read the folder README before modifying anything in that folder
- These READMEs inherit from this layer but may have additional constraints

**Why fifth**: Granular scope definition. The folder README is more specific than repo-level rules.

### 6. **File-level README.md** (Read Before Modifying That File)
- Critical files have their own README explaining purpose and boundaries
- Example: `/src/website/pages/README.md`, `/docs/governance/README.md`
- Follow the file-level README's "In Scope" and "Out of Scope" sections

**Why sixth**: File-level precision. Know exactly what this specific file does before you touch it.

---

## LLMs May (In Scope)

✅ **Code Assistance**
- Write/improve code in `/src/website/` (public landing page, HUD, utilities, broker connectors)
- Create tests and mock implementations
- Suggest non-proprietary architecture improvements
- Follow the file-level README for each file you touch

✅ **Documentation & Writing**
- Improve clarity of existing documentation
- Expand on approved narrative metaphors (Table A / Hallway / Table B)
- Create explanatory content using approved vocabulary
- Generate branding materials aligned with Narrative_Specifications
- Organize /docs/ folder for clarity

✅ **Narrative Expansion**
- Elaborate on Sentinel's philosophy and approach
- Explain the Founder Narrative framework
- Create cinematic descriptions aligned with Narrative_Specifications
- Develop content using Shadow Momentum™ conceptually (not mechanically)

✅ **Research & Learning**
- Explain publicly documented trading concepts
- Discuss market structure and participant behavior
- Summarize publicly available financial data
- Analyze market sentiment (without proprietary logic)

✅ **Organizational Tasks**
- Reorganize folders for clarity
- Create internal navigation documents
- Draft operational guides for non-proprietary processes
- Improve README quality and clarity

---

## LLMs Must Not (Out of Scope)

❌ **Access Forbidden**
- Repositories B or C (Sentinel_Enclave1, Sentinel_Enclave2)
- Any private USB-stored materials
- Founder personal materials marked "Founder Only"
- Trade secrets: threshold values, computational pathways, internal states

❌ **Infer or Reconstruct**
- Do NOT attempt to reverse-engineer S³ internals from outputs
- Do NOT guess at internal mechanisms
- Do NOT propose equations or algorithms that might match sealed logic
- Do NOT suggest "what the engine might be doing"

❌ **Propose Proprietary Features**
- Do NOT suggest trading signals or verdicts
- Do NOT propose causal drift detection
- Do NOT design features showing "engine confidence"
- Do NOT create features implying internal logic visibility

❌ **Violate Separation Doctrine**
- Do NOT link narrative metaphors to mathematical processes
- Do NOT suggest Shadow Momentum™ has computational underpinnings
- Do NOT create features bridging Repository A and B/C
- Do NOT suggest narrative "explains" the mechanism

❌ **Break Narrative Canon**
- Do NOT reinterpret Table A / Hallway / Table B
- Do NOT modify Sentinel vocabulary without Founder approval
- Do NOT propose operational shortcuts bypassing approved workflow

❌ **Modify Governance Documents**
- Do NOT suggest changes to LLM Collaboration Protocol
- Do NOT rewrite IP_Boundary_Document, Vocabulary_Charter, Separation_Doctrine
- All governance documents are Founder-controlled only

❌ **Create GitHub Commits Directly**
- Do NOT push changes directly to GitHub
- Do NOT auto-generate PRs or automated contributions
- All contributions must be reviewed and manually committed by Founder
- LLMs assist; Founder controls

---

## Dependencies & Connections

**This README connects to:**
- `LLM_COLLABORATION_PROTOCOL.md` (binding authority)
- `ORIENTATION.md` (context and principles)
- `BOUNDARIES.md` (specific constraints)
- `TASKS_ALLOWED.md` (operational checklist)
- All folder-level READMEs (inherit from this layer)
- All file-level READMEs (inherit from this layer)

**This README is referenced by:**
- Every folder README
- Every file README
- Every LLM starting work on Sentinel_Hub
- Every Founder review of LLM contributions

---

## Content Review Checklist (Before Responding to Any Task)

Before generating code, documentation, or suggestions, verify:

**Have I read the full README chain?**
- [ ] LLM_COLLABORATION_PROTOCOL.md (Section III, IV, VI)
- [ ] ORIENTATION.md (this repo's purpose and context)
- [ ] BOUNDARIES.md (this repo's constraints)
- [ ] TASKS_ALLOWED.md (this repo's safe tasks)
- [ ] Relevant folder-level README
- [ ] Relevant file-level README (if applicable)

**Is this request narrative-safe?**
- [ ] Does it use only approved Sentinel vocabulary?
- [ ] Does it avoid implying internal logic?
- [ ] Does it strengthen the firewall, not weaken it?
- [ ] Is it consistent with Narrative_Specifications?

**Is this within my scope?**
- [ ] Am I working on Repository A materials only?
- [ ] Am I not attempting to access B or C?
- [ ] Does the folder-level README permit this?
- [ ] Does the file-level README permit this?

**Does this protect IP?**
- [ ] Am I not inferring S³ internals?
- [ ] Am I not breaking the Firewall Principle?
- [ ] Am I not proposing sealed logic or verdicts?
- [ ] Is this listed in TASKS_ALLOWED.md?

**If ANY answer is NO: STOP. Do not proceed. Ask the Founder for clarification.**

---

## How to Use This Layer (Step by Step)

### If You Are an LLM Starting Work:

1. **Read this README** (what you're reading now) — 5 minutes
2. **Read LLM_COLLABORATION_PROTOCOL.md** — 15 minutes (critical)
3. **Read ORIENTATION.md** — 5 minutes (context)
4. **Read BOUNDARIES.md** — 10 minutes (constraints)
5. **Read TASKS_ALLOWED.md** — 5 minutes (your action menu)
6. **Read the folder-level README** for the folder you're working in — 5 minutes
7. **Read the file-level README** for any specific file you'll modify — 3 minutes
8. **Use the Content Review Checklist** before generating anything — 2 minutes

**Total onboarding time: ~45 minutes. Do this once per major task.**

### If You Are the Founder:

1. **Review this README** with each new LLM collaborator
2. **Update this README** whenever repo structure or boundaries change
3. **Reference Section IV (Content Review Checklist)** when reviewing LLM contributions
4. **Enforce the Protocol consistently** — no "just this once" exceptions
5. **Document any attempted violations** for future pattern recognition

---

## Why This Layer Exists

**Multi-LLM Collaboration at Scale:**
Without centralized, machine-readable operating instructions, LLM swarms will:
- Drift toward different interpretations of "safe"
- Accidentally infer proprietary logic
- Propose features that weaken the firewall
- Create inconsistent narrative usage
- Re-test boundaries repeatedly

**The LLM_Portable layer prevents drift by:**
- Establishing a single source of truth (LLM Collaboration Protocol)
- Making boundaries explicit and machine-readable
- Providing a hierarchical README structure (protocol → repo → folder → file)
- Creating a Content Review Checklist that every LLM uses
- Documenting examples of permitted vs. prohibited tasks

**Consistency across all models:**
- ChatGPT, Claude, Gemini, Grok, and future frontier models all read the same rules
- No model gets special exceptions or different boundaries
- Every LLM arrives aligned and stays aligned
- The Founder's intent is consistently enforced

---

## Maintenance & Updates

**Update this layer when:**

- ✅ Boundaries shift (Founder decision)
- ✅ New LLM tools or integrations are added
- ✅ Repo structure evolves (new folders or files)
- ✅ New safe tasks become available
- ✅ New risks emerge (document prohibitions)
- ✅ Governance documents change

**Update schedule:**
- Review after every major repo change
- Annual review minimum
- Document all changes with dates

**Version control:**
- Always increment version number in governance documents
- Add a "Last Updated" date to every README
- Keep a CHANGELOG.md documenting all updates

---

## Escalation Rule

**If you (as an LLM) are unsure whether a task is safe:**

1. **STOP immediately.** Do not proceed.
2. **Reference the specific section** of the LLM Collaboration Protocol that makes you uncertain.
3. **Ask the Founder directly:** "This task appears to [describe the concern]. Is this permitted under [specific protocol section]?"
4. **Wait for clarification** before proceeding.

There is no penalty for asking. There is a serious penalty for guessing wrong.

---

## Example Onboarding Flows

### Scenario 1: "Help me write a login page"
1. Read this README ✓
2. Read LLM_COLLABORATION_PROTOCOL.md (Section III-A: Code Assistance) ✓
3. Read /src/website/pages/README.md ✓
4. Read /src/website/pages/login.js README (if it exists) ✓
5. Use Content Review Checklist ✓
6. **Result: PERMITTED** — Write the login page

### Scenario 2: "Design a feature that shows when the engine is confident"
1. Read this README ✓
2. Read LLM_COLLABORATION_PROTOCOL.md (Section V: Always Prohibited #2) ✓
3. **Result: PROHIBITED** — "This implies internal state visibility. The engine is sealed."

### Scenario 3: "Improve the documentation for Table A"
1. Read this README ✓
2. Read LLM_COLLABORATION_PROTOCOL.md (Section III-A: Narrative Expansion) ✓
3. Read /docs/narrative/README.md ✓
4. Use Content Review Checklist ✓
5. **Result: PERMITTED** — Improve the documentation using approved vocabulary

---

## Quick Reference: The Five Rules

**1. Read the README chain first** (Protocol → Orientation → Boundaries → Tasks → Folder → File)

**2. Use the Content Review Checklist** before responding to any task

**3. When in doubt, ask the Founder** (no penalty for asking, serious penalty for guessing)

**4. Never access or infer sealed systems** (Repositories B/C, S³ internals, proprietary logic)

**5. Maintain narrative canon** (don't redefine, reinterpret, or weaken metaphors)

---

## Founder Declaration

By establishing this LLM_Portable layer, I (the Founder) affirm:

- ✅ This layer represents binding operating instructions for all LLM collaborators
- ✅ All LLMs must read the full README chain before generating contributions
- ✅ The LLM Collaboration Protocol is the source of authority
- ✅ I will review all contributions against these standards
- ✅ I will enforce boundaries consistently and without exception
- ✅ I will update this layer as risks and capabilities evolve

Any LLM that violates this layer's standards is in breach of Sentinel's IP governance.

---

**Document Status**: ACTIVE (Governance)  
**Last Updated**: November 22, 2025  
**Maintained By**: Founder, Sentinel Laboratories  
**Protocol Reference**: LLM_COLLABORATION_PROTOCOL.md (Exhibit E)  
**Next Review**: Upon material repo change or annual, whichever comes first

---

## Table of Contents (For Navigation)

- [What This Layer Does](#what-this-layer-does)
- [Required Reading (In Order)](#llms-must-read-required-in-order)
- [In Scope (LLMs May)](#llms-may-in-scope)
- [Out of Scope (LLMs Must Not)](#llms-must-not-out-of-scope)
- [Dependencies & Connections](#dependencies--connections)
- [Content Review Checklist](#content-review-checklist-before-responding-to-any-task)
- [How to Use This Layer](#how-to-use-this-layer-step-by-step)
- [Why This Layer Exists](#why-this-layer-exists)
- [Maintenance & Updates](#maintenance--updates)
- [Escalation Rule](#escalation-rule)
- [Example Onboarding Flows](#example-onboarding-flows)
- [Quick Reference](#quick-reference-the-five-rules)
