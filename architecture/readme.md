# Architecture Documentation — Sentinel_Hub

**Status:** Active  
**Scope:** Public architecture only. No sealed systems. No S³ internals.  
**Badge Required:** PRISM — documentation and diagrams only.

---

## Purpose

This folder documents the **scaffolding** of Sentinel_Hub — folder structure, module relationships, interfaces, data flow.

It never documents the **kernel** — sealed computation, S³ logic, enclave internals.

**Metaphor:** Document the house, not the wiring inside the walls.

---

## Core Rules

1. **Public only** — Repository A architecture, nothing from B/C
2. **Interfaces, not internals** — describe what connects, not what computes
3. **No inference** — don't speculate about sealed systems
4. **Approved vocabulary** — use Table A / Hallway / Table B as defined in `/governance/`

---

## In Scope

- System diagrams (ASCII, Mermaid, SVG)
- Folder structure and module relationships
- Interface specifications (public APIs)
- Data flow between public components
- Separation Doctrine and Firewall Principle as applied to code

---

## Out of Scope

- S³ Engine internals
- Enclave computation (Enclave1, Enclave2)
- Sealed transforms, signals, or detection methods
- Anything that infers how sealed systems work

**If unsure:** Stop. Ask Founder.

---

## Swarm Task

1. Open `TODO.md`
2. Claim one unclaimed file
3. Deliver documentation that respects the firewall
4. Commit and stop

One file per session.

---

## Handshake

Before beginning, confirm:
- [ ] I have read this README
- [ ] I am operating under PRISM badge
- [ ] I will document scaffolding only, not kernel
- [ ] I will stop and ask if I approach a boundary

---

## Reference

For detailed rules and examples, see:
- `GUIDELINES.md` (full scope/exclusion details)
- `/governance/Firewall_Principle.md`
- `/governance/Separation_Doctrine.md`

---

Last updated: November 24, 2025  
Maintained by: Founder + STEWARD
