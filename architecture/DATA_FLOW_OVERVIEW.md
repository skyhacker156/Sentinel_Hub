# Data Flow Overview — Sentinel_Hub

**Status:** Active  
**Scope:** Public data movement only. No sealed logic. No kernel.  
**Badge Required:** PRISM

---

## Purpose

This document shows how data moves through the **public layer** of Sentinel_Hub.

It answers: "How does information flow from input to output without exposing the engine?"

---

## The Three Stages

All public data flow follows the **Table A → Hallway → Table B** model:

| Stage | What Happens | What's Visible |
|-------|--------------|----------------|
| **Table A** | Raw inputs arrive, get normalized | Fully public |
| **Hallway** | Data crosses to sealed systems | Boundary only — no visibility inside |
| **Table B** | Public outputs emerge | Fully public |

The Hallway is a **one-way door**. Data enters. Results exit. Nothing else is observable.

---

## Flow Diagram
```mermaid
