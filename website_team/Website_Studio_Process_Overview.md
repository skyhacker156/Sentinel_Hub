# Website Studio — Process Overview

**Status:** Active  
**Scope:** Public website development workflow. No sealed systems.  
**Badge Required:** PRISM  
**Parent Doc:** `README.md` (read that first)

---

## Purpose

This document defines how the Website Studio operates — from intake to pre-deployment.

It answers: "What's the process for building public website assets?"

---

## The 6 Phases

| Phase | Goal | Output |
|-------|------|--------|
| **1. Intake** | Understand what needs to be built | Clear requirements |
| **2. Plan** | Design the skeleton before coding | Page map, wireframe, folder path |
| **3. Build** | Implement the page or component | Working code in `/src/website/` |
| **4. Document** | Make it understandable | README in component folder |
| **5. Review** | Verify PRISM safety and quality | Founder approval |
| **6. Package** | Prepare for deployment (but don't deploy) | Build-ready, portable assets |

---

## Phase Details

### 1. Intake

Clarify before coding:
- What's the purpose?
- Who's the audience?
- What's the expected behavior?
- Where does it live?

**No coding until requirements are clear.**

---

### 2. Plan

Produce before building:
- Page map or component outline
- Folder path
- Content blocks
- Wireframe-level layout

---

### 3. Build

Implement with:
- React / Next.js
- Tailwind CSS
- Readable, commented code
- Accessible, responsive UI
- No backend, no sealed calls

**Public-safe and structural only.**

---

### 4. Document

Write as you build:
- Short README in component folder
- Usage examples
- Links to `/docs/` where relevant

Documentation is part of the build, not an afterthought.

---

### 5. Review

Verify before merge:
- [ ] Public-safe
- [ ] No sealed inference
- [ ] Clean code
- [ ] Clear documentation
- [ ] Correct folder placement
- [ ] Accessible (labels, alt text, contrast)

**Founder gives final approval.**

---

### 6. Package

Prepare for deployment:
- Pages compile locally
- Assets referenced correctly
- No hardcoded domain assumptions
- Folder structure is portable

**Deployment does NOT occur.** Domain not yet purchased.

---

## Folder Structure
```
Sentinel_Hub/
├── /src/website/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── assets/
│   └── README.md
│
├── /website_team/
│   ├── README.md
│   ├── PROCESS_OVERVIEW.md (this file)
│   └── drafts/
│
└── /docs/website/
```

---

## Operating Rules

**CAN:**
- Build pages, components, diagrams, docs
- Refactor for clarity and readability
- Work inside `Sentinel_Hub` only
- Build up to (but not including) deployment

**CANNOT:**
- Access sealed systems
- Reference S³ logic
- Deploy the site
- Make governance decisions
- Enter ARBITER or STEWARD domains

---

## Swarm Task Pattern

1. Check `TODO.md` for unclaimed work
2. Claim one task
3. Complete phases 1–6
4. Submit for Founder review
5. Stop

One task per session.

---

## Handshake

Before starting, confirm:
- [ ] I have read the team README
- [ ] I have read this process overview
- [ ] I am operating under PRISM badge
- [ ] I understand the 6-phase workflow
- [ ] I will not deploy or touch sealed systems

---

## Reference

- `README.md` — Team overview and scope
- `/architecture/FOLDER_PURPOSE_MATRIX.md` — What lives where
- `/src/website/README.md` — Codebase conventions

---

Last updated: November 24, 2025  
Maintained by: Founder + STEWARD  
Status: Ready for development
