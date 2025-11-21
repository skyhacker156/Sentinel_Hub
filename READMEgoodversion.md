# Sentinel_Hub

**Sentinel Labs Three-Repository Architecture**  
Public-Facing Infrastructure & Digital Control Hub

---

## What Is This Repository?

Sentinel_Hub is the **public-facing, LLM-safe collaborative space** for Sentinel Labs. It contains:

- HUD code (websocket clients, brokers, visualization)
- Enclave shell (state enums, signature checks, USB detection, engine loader)
- Documentation (legal, operational, research summaries)
- Business files (compliance, hiring, operational processes)
- Tools, utilities, and tests (mock engines for testing)
- Research notes that do **not** reveal proprietary internals
- Website/dashboard code (maxlaboratories.com)

## What This Repository Is NOT

This repository does **not** contain:

- Proprietary S3 mathematical research
- Signal kernels, transforms, or experimental logic
- Actual enclave engine code (Python or compiled)
- Draft implementations of sealed S3 engines
- Any files from Sentinel_Enclave1 or Sentinel_Enclave2 (the sealed repositories)
- API keys, credentials, or plaintext secrets
- Personal identity records or financial data

---

## Three-Repository Model

Sentinel Labs operates using **strict separation of concerns**:

### Repository A: Sentinel_Hub (This Repo - GitHub)
- **Location**: GitHub (private)
- **Access**: Founder, collaborators, LLMs (under controlled conditions)
- **Purpose**: Define public interfaces, HUD, control hub, documentation
- **What it does**: Loads enclave engines via black-box interface, displays verdicts, executes trades

### Repository B: Sentinel_Enclave1 (USB Only - Offline)
- **Location**: Offline (USB, encrypted storage, air-gapped)
- **Access**: Founder only
- **Purpose**: Full proprietary S3 trading engine (Python scripts)
- **What it contains**: Complete signal kernels, transforms, proprietary mathematics, full research notes
- **What it returns**: Trading verdicts ("BUY", "SELL", "NO TRADE") via enclave shell interface

### Repository C: Sentinel_Enclave2 (USB Only - Offline)
- **Location**: Offline (USB, encrypted storage, air-gapped)
- **Access**: Founder only
- **Purpose**: Simplified lite S3 engine for MVP/testing/backup (Python scripts)
- **What it contains**: Simplified signal processing, basic transforms, reduced research logic
- **What it returns**: Same verdicts ("BUY", "SELL", "NO TRADE") via identical interface to Enclave1

### The Firewall Principle
**LLMs and collaborators may refine the world around the Judge, but may never see the Judge itself.**

This means:
- Repository A calls the enclave shell
- The enclave shell loads either Enclave1 (full) or Enclave2 (lite) from USB
- Enclaves run offline as Python scripts or compiled binaries
- Repository A receives only verdicts (BUY/SELL/NO TRADE)
- At no point does Repository A contain proprietary S3 mathematics
- Both enclaves remain sealed, founder-only, never on GitHub

---

## What Happens Here

### Allowed Activities
- Document HUD behavior and interfaces
- Develop enclave shell logic (state enums, signature checks)
- Create mock/test implementations (e.g., mock verdicts for testing)
- Write business and operational documentation
- Organize and improve folder structure
- Create tests and utilities

### Forbidden Activities
- **Do not attempt to reverse-engineer or approximate S3 internals**
- Do not write formulas, kernels, or thresholds related to the sealed engine
- Do not modify or interpret proprietary founder mathematics
- Do not commit API keys, credentials, or secrets
- Do not commit personal identity or financial records

---

## How to Use This Repository

1. **Read the architecture documentation** in `/docs/architecture.md`
2. **Understand the enclave interface** in `/docs/enclave-interface.md`
3. **Check the folder structure** to know where to add new code
4. **Write code for HUD, enclave shell, or utilities**
5. **Test against mock verdicts** (see `/tests/`)
6. **Never attempt to predict or approximate the sealed engine logic**

---

## Repository Structure

```
Sentinel_Hub/
├── README.md                    # You are here
├── .gitignore                   # Files Git should never track
├── LICENSE                      # Intellectual property protection
├── docs/
│   ├── architecture.md          # Three-repo model explained
│   ├── enclave-interface.md     # How shells load and interact with engines
│   ├── research-summary.md      # High-level research overview (no secrets)
│   └── three-repo-guide.md      # Detailed guide: A, B, C and how they work
├── src/
│   ├── hud/                     # HUD visualization, websocket clients, brokers
│   ├── enclave-shell/           # Enclave shell (USB detection, engine loader)
│   │   ├── engine_loader.py     # Loads Enclave1 or Enclave2 from USB
│   │   └── interface.py         # Black-box interface definition
│   ├── website/                 # maxlaboratories.com code
│   ├── broker-connectors/       # Exchange API clients (data only)
│   └── utils/                   # Shared utilities and tools
├── tests/
│   ├── mock-enclave.py          # Mock engine for testing (no real logic)
│   └── integration-tests.py     # Test HUD with mock engine
├── business/
│   ├── compliance/              # Legal, regulatory, and IP documentation
│   ├── payroll/                 # (When applicable)
│   └── hiring/                  # (When applicable)
└── .github/
    └── SECURITY.md              # Security vulnerability reporting
```

---

## Collaborators & LLM Safety

This repository is designed to be safe for LLM collaboration and refinement. The two-repo firewall ensures that even if an LLM has access to Sentinel_Hub, it cannot infer, approximate, or reconstruct the proprietary mathematics of the sealed S3 engine.

---

## License

[See LICENSE file for full terms]

---

## Contact

Questions about architecture or collaboration boundaries? Contact the Founder.

---

**Last Updated**: November 2025  
**Version**: 1.0
