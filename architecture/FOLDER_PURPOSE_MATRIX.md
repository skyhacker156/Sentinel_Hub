# Folder Purpose Matrix — Sentinel_Hub

**Status:** Active  
**Scope:** Public directory structure only. No sealed repository contents.  
**Badge Required:** PRISM

---

## Purpose

This document maps every top-level folder in Sentinel_Hub to its purpose, badge requirement, and boundary status.

It answers: "What lives where, who can work on it, and does it touch sealed systems?"

---

## Matrix

| Folder | Purpose | Badge | Sealed Reference Allowed? |
|--------|---------|-------|---------------------------|
| `.github/` | CI/CD workflows, issue templates, repo config | PRISM | No |
| `LLM_Portable/` | Portable READMEs and onboarding docs for LLMs | STEWARD | No |
| `architecture/` | Public system design, diagrams, interface specs | PRISM | No |
| `governance/` | Policies, doctrines, protocols, narrative specs | ARBITER | No |
| `s3/` | Public-facing S3 documentation (not the engine) | PRISM | Boundary only |
| `sentinel_bio/` | Bioscience division — public research + proposals | PRISM | No |
| `sentinel_capital/` | Capital/finance division — public models + proposals | ARBITER | No |
| `sentinel_grid/` | Grid/energy division — public pilots + proposals | PRISM | No |
| `sentinel_patents/` | Defensive patent lattice — claim sets only | ARBITER | No |
| `sentinel_public/` | Public-facing content, marketing, external comms | PRISM | No |
| `sentinel_standards/` | Internal standards, style guides, conventions | PRISM | No |
| `shadow_momentum_swarm/` | Swarm coordination, task routing, LLM orchestration | STEWARD | No |
| `src/` | Source code — frontend, adapters, public APIs | PRISM | Boundary only |

---

## Badge Key

| Badge | Authority | Typical Work |
|-------|-----------|--------------|
| **PRISM** | Technical/builder | Code, diagrams, documentation, implementation |
| **ARBITER** | Advisory | Legal, financial, compliance, policy drafts |
| **STEWARD** | Routing/coordination | Badge assignment, README writing, swarm orchestration |

---

## Sealed Reference Rules

| Status | Meaning |
|--------|---------|
| **No** | Folder contains no references to sealed systems. Fully public. |
| **Boundary only** | Folder may reference the Hallway (boundary) but not what's inside it. |

If a folder says "Boundary only":
- You may acknowledge the sealed system exists
- You may document the interface (inputs accepted, outputs returned)
- You may NOT describe internal logic, algorithms, or decision processes

---

## How to Use This Matrix

**Starting a task?**
1. Find the folder you're working in
2. Check the badge requirement — do you have that badge?
3. Check sealed reference status — know your boundaries
4. Proceed within scope

**Unsure which folder to use?**
- Code/implementation → `src/`
- System design/diagrams → `architecture/`
- Policy/doctrine → `governance/`
- LLM onboarding → `LLM_Portable/`
- Division-specific work → `sentinel_[division]/`

---

## Folders NOT in This Repository

The following exist but are **not in Sentinel_Hub**:

| Repository | Contents | Access |
|------------|----------|--------|
| Repository B | Sealed computation | Founder only |
| Repository C | Sealed data | Founder only |

These are never referenced by contents, only by existence.

---

## Maintenance

When adding a new top-level folder:
1. Add a row to this matrix
2. Assign appropriate badge
3. Declare sealed reference status
4. Update `README.md` in the new folder to match

---

## Reference

- `README.md` — Architecture folder overview
- `DATA_FLOW_OVERVIEW.md` — How data moves through public layers
- `/governance/Firewall_Principle.md` — Why sealed stays sealed

---

Last updated: November 24, 2025  
Maintained by: Founder + STEWARD  
Status: Ready for architecture review
