# Architecture Documentation — Sentinel_Hub

Welcome to the `/architecture` directory.  
This folder defines the **public architectural understanding** of the Sentinel_Hub frontend and its relationship to other programs in the Sentinel Labs ecosystem.

This is a **documentation-only** folder.  
LLMs are welcome here, but with strict boundaries.

---

## 📘 Purpose of This Folder

This folder contains:

- System design descriptions  
- High-level component relationships  
- Interface specifications  
- Frontend–backend separation descriptions  
- Multi-repo architecture layouts  
- Narrative-safe diagrams  
- Public understanding of how Sentinel_Hub fits into the ecosystem  

All contents here describe **frontend and public architecture only**.

---

## ❌ What Must NOT Appear Here

This folder must never contain or describe:

- Proprietary S³ Engine logic  
- Enclave computation  
- Transfer entropy internals  
- Sealed transforms or signals  
- Confidential or non-public mechanisms  
- Any attempt to infer how the private engine operates  

Architecture docs describe the **scaffolding**, not the **kernel**.

---

## 🧭 LLM Collaboration Rules

### Allowed (Safe):
- Create system diagrams  
- Explain multi-repo structure  
- Document folder purpose  
- Clarify interfaces between public systems  
- Improve clarity and readability  
- Explain public workflow (Table A → Hallway → Table B)  
- Describe safe-development principles (Separation Doctrine, Firewall Principle)  

### Forbidden (Unsafe):
- Speculating about S³ internals  
- Suggesting architecture that connects Hub → Enclave  
- Reconstructing or inferring hidden math  
- Proposing backend computation  
- Discussing proprietary detection methods  

If any task touches sealed internal logic → **stop and ask**.

---

## 🛡 Key Principle

**Architecture explains the house,  
not the power grid inside the walls.**

---

**Last Updated:** November 2025  
