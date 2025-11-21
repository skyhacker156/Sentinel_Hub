# Multi-Repository Architecture: Complete Guide

**Understanding Sentinel Labs' Separation Model**

---

## Overview

Sentinel Labs operates using **multiple separate repositories** to protect intellectual property while enabling safe collaboration:

1. **Repository A (Sentinel_Hub)** — GitHub, collaborative, public-facing
2. **Repository B (Sentinel_Enclave1)** — USB offline, founder-only, full S3 engine
3. **Repository C (Sentinel_Enclave2)** — USB offline, founder-only, simplified S3 engine (MVP/testing)
4. **Repository D+ (Future Enclaves)** — USB offline, founder-only, specialized variants

This guide explains why this model exists, how it works, and how to work within it.

---

## Why Multiple Repositories?

### The Problem

Sentinel Labs has fundamentally different types of content that must never mix:

1. **Public Infrastructure** (HUD, documentation, interfaces) — Safe for collaboration
2. **Full Proprietary Research** (S3 complete mathematics) — Sealed, founder-only
3. **Simplified Research** (S3 lite variants) — Sealed, founder-only, for testing/backup
4. **Future Variants** (Specialized engines) — Sealed, founder-only, for specific use cases

If these mix in a single repository:
- Trade secrets leak into version control
- Collaborators could infer proprietary logic
- Patent protection weakens
- The competitive advantage disappears

### The Solution

Separate them completely with strict architectural boundaries. Repository A is the only collaborative space. Repositories B, C, D+ remain sealed and offline.

---

## Repository A: Sentinel_Hub (GitHub)

### What It Is
The **public-facing, collaborative space** for Sentinel Labs. This is where team members, collaborators, and LLMs work safely.

### Where It Lives
- **GitHub** (private repository)
- URL: `https://github.com/skyhacker156/Sentinel_Hub`
- **Publicly accessible** to: Founder, authorized team members, collaborators, LLMs (under rules)

### What It Contains

#### Documentation
- README.md (Founder Narrative)
- architecture.md (repository model)
- enclave-interface.md (technical interface)
- research-summary.md (S3 overview, no math)
- three-repo-guide.md (this file)

#### Code
- `/src/hud/` — Trading dashboard and visualization
- `/src/enclave-shell/` — Interface to sealed engines (USB loader, signature checks, version detection)
- `/src/website/` — maxlaboratories.com code
- `/src/broker-connectors/` — Exchange API clients
- `/src/utils/` — Shared utilities

#### Testing & Mocking
- `/tests/mock-enclave.py` — Mock engine (for testing without real engines)
- `/tests/integration-tests.py` — System validation tests

#### Business
- `/business/compliance/` — Legal, regulatory, IP docs
- `/business/payroll/` — (When applicable)
- `/business/hiring/` — (When applicable)

#### Security
- `/.github/SECURITY.md` — Vulnerability disclosure policy

#### Configuration
- `.gitignore` — Prevents accidental secret commits
- `LICENSE` — IP protection notice

### What It DOES NOT Contain

❌ **Never allowed in Repository A**:
- S3 engine source code (any variant)
- Proprietary mathematical formulas
- Signal kernels or transforms
- Sealed algorithm implementations
- Files from Repositories B, C, D+ (any sealed repo)
- API keys or plaintext credentials
- Personal identity or financial records

### Who Has Access?

- ✅ **Founder** — Full read/write access
- ✅ **Authorized collaborators** — Limited read/write (per founder's choice)
- ✅ **LLMs** — Read access, can assist with documentation/code, under collaboration rules
- ❌ **Everyone else** — No access (private repository)

### LLM Collaboration Rules

LLMs working with Repository A **MAY**:
- Explain narrative concepts (Table A, Hallway, Table B, Shadow Momentum™)
- Improve documentation clarity
- Assist with HUD code, utilities, and tests
- Generate fictional examples or analogies
- Help organize folder structure
- Create mock implementations for testing

LLMs **MUST NOT**:
- Infer or reconstruct S3 mathematics (any variant)
- Propose proprietary equations
- Reverse-engineer the sealed engines
- Access Repositories B, C, D+ (sealed repos)
- Suggest trading logic based on sealed math
- Attempt to approximate enclave internals

---

## Repository B: Sentinel_Enclave1 (USB, Offline)

### What It Is
The **sealed founder research environment** containing the **full, production-grade S3 engine**. This is the complete implementation with all proprietary mathematics.

### Where It Lives
- **Offline USB drive** (encrypted, air-gapped)
- **Not on GitHub, not in cloud**
- **Not accessible by any automated systems**
- Physical possession: Founder only

### What It Contains

#### Full S3 Engine
- Complete signal kernel implementations
- All proprietary mathematical transforms
- Causal drift detection logic
- Pressure evaluation mechanisms
- All threshold values and tuning parameters
- Full source code (Python, compiled binaries, or both)

#### Research Notes
- Development journals
- Mathematical proofs and derivations
- Experimental results and performance metrics
- Patent filing documentation
- Competitive analysis (sealed)

#### Production Assets
- Compiled binaries (e.g., `libs3.so`)
- Cryptographic signatures for validation
- Hardware-bound execution keys (TPM, etc.)

### Who Has Access?

- ✅ **Founder only** — Exclusive access, full control
- ❌ **Collaborators** — No access
- ❌ **LLMs** — No access, never
- ❌ **Automated systems** — No access
- ❌ **Cloud or internet** — Never synced, never uploaded

### How Is It Protected?

1. **Physical Isolation**: Offline, on encrypted USB
2. **Access Control**: Founder-only access
3. **Encryption**: USB drive encrypted
4. **No Cloud Sync**: Never pushed to GitHub or cloud
5. **Air-Gapped**: Never connected to internet while running

---

## Repository C: Sentinel_Enclave2 (USB, Offline)

### What It Is
A **simplified, lite version of the S3 engine** for MVP testing, validation, and backup. Has the **same interface as Repository B** but with reduced internal complexity and simplified signal processing.

### Where It Lives
- **Offline USB drive** (encrypted, air-gapped)
- **Separate from Repository B** (different USB or partition, per founder's choice)
- **Not on GitHub, not in cloud**

### What It Contains

#### Simplified S3 Engine
- Simplified signal kernel implementations (core logic only)
- Basic proprietary transforms (reduced complexity)
- Causal drift detection (simplified)
- Pressure evaluation (basic thresholds)
- Lite source code (Python or compiled)

#### Testing & Validation
- Integration test results
- Comparison with Repository B (performance metrics)
- Known limitations documentation
- Edge cases and failure modes

#### Backup Assets
- Compiled lite binaries (e.g., `libs3_lite.so`)
- Cryptographic signatures
- Version metadata

### Purpose

Repository C serves multiple functions:

1. **MVP Validation**: Test HUD, enclave shell, and broker connections without full engine
2. **Performance Baseline**: Compare full engine (B) vs. lite engine (C) results
3. **Disaster Recovery**: Backup if Repository B is unavailable
4. **Development Testing**: Faster iteration during development
5. **Research**: Explore simplified signal processing approaches

### Interface Compatibility

Repository C **uses the same EnclaveShell interface as Repository B**:
```python
Repository A (GitHub)
↓
├─ HUD code
├─ Enclave shell interface
├─ Documentation
└─ Public utilities
↓
[Enclave Shell loads engine at runtime]
↓
Repositories B, C, D+ (USB, Offline)
├─ B: Full S3 engine
├─ C: Lite S3 engine (testing/backup)
├─ D: Crypto-specific variant
├─ E: Forex-specific variant
└─ (More variants as needed)
↓
Engine returns verdict
↓
Back to Repository A HUD
↓
Execute trade / Log result
### Data Flow
User interacts with HUD (Repository A code)
HUD prepares market data
Enclave shell (Repository A) is called with market data
Shell loads engine from USB (Repository B, C, D+, etc.)
Engine (offline, sealed) processes data
Engine returns verdict: "BUY", "SELL", or "NO TRADE"
Shell receives verdict (no internals exposed)
HUD receives verdict and displays/executes
Trade is logged and documented

At no point does Repository A see the engine's mathematics.
---

## The S3 Firewall Principle

**LLMs and collaborators may refine Repository A, but may never see the sealed engines (B, C, D+).**

This principle ensures:
- Trade secrets remain protected
- Patents stay defensible
- Team members can help without accessing proprietary math
- LLMs can improve documentation and interfaces safely

---

## Enclave Shell: The Interface Bridge

The **enclave shell** (Repository A code) is the boundary between public and sealed:

### What It Does
```python
class EnclaveShell:
    """
    Bridge between Repository A (public) and sealed engines (B, C, D+).
    Handles: USB detection, signature verification, error handling.
    Returns only verdicts, never exposes internals.
    """
    
    def request_verdict(self, market_data):
        # Check USB attached
        if not self.check_usb_attached():
            return "NO TRADE"  # Safe default
        
        # Verify signature
        if not self.validate_engine_signature():
            raise SignatureError("Engine tampered with")
        
        # Call sealed engine (could be B, C, D+, etc.)
        # Repository A doesn't know or care which one
        verdict = self._call_engine(market_data)
        
        # Return verdict only (never expose internals)
        return verdict
```

### Why It Matters

- **Transparent Switching**: Can swap engines (B ↔ C ↔ D+) without Repository A code changes
- **Security**: Verifies engine hasn't been tampered with
- **Failsafe**: Returns "NO TRADE" if anything fails
- **Isolation**: Never exposes engine internals to Repository A

---

## Benefits of Multi-Repository Model

| Benefit | Why It Matters |
|---------|----------------|
| **Trade Secret Protection** | Proprietary math sealed in offline repos |
| **Flexible Testing** | Can run lite engine (C) vs. full engine (B) |
| **Disaster Recovery** | Backup engines (C) if primary unavailable |
| **Specialized Variants** | Future engines (D+) for crypto, forex, etc. |
| **Collaboration Safety** | Team helps Repository A without seeing secrets |
| **Patent Defense** | Clear separation protects IP |
| **Scalability** | Can add team without exposing sealed logic |
| **Audit Trail** | Clear boundaries for compliance |

---

## Summary

| Aspect | Repository A (GitHub) | B, C, D+ (USB, Sealed) |
|--------|----------------------|------------------------|
| **Location** | GitHub (private) | Offline USB (encrypted) |
| **Access** | Founder + team + LLMs | Founder only |
| **Content** | Interfaces, HUD, docs | Engines, proprietary math |
| **Version Control** | Git on GitHub | Local or none |
| **Collaboration** | Yes (under rules) | No |
| **LLM Safe?** | Yes | No (never shared) |
| **Variants** | 1 repo | Multiple engines (B, C, D+...) |

---

## Next Steps

- Review `enclave-interface.md` for how Repository A calls sealed engines
- See `research-summary.md` for S3 overview
- Check `architecture.md` for foundational principles

---

**Questions?** Contact the Founder.

---

**Last Updated**: November 2025  
**Version**: 2.0 (Multi-Repository)
