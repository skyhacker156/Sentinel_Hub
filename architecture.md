# Sentinel Labs Architecture: Three-Repository Model

**Version 1.0**  
**Purpose**: Explain the three-repository structure for safe operations, testing, and backup without exposing proprietary mathematics.

---

## The Problem This Solves

Sentinel Labs contains three fundamentally different types of work:

1. **Public-Facing Infrastructure** — HUD code, documentation, business files, interfaces
2. **Full Proprietary Research** — S3 engine mathematics, signal kernels, transforms
3. **Simplified Operational Logic** — Lite S3 engine for MVP, testing, and backup

These must never mix. If they do:
- Trade secrets become visible in version control
- LLMs or collaborators could infer proprietary logic
- Patent protection weakens
- The competitive advantage disappears

**Solution**: Three separate repositories with a firewall between them.

---

## Repository A: Sentinel_Hub (GitHub, Collaborative)

### Purpose
Define all **public interfaces and behaviors** without revealing the internal logic that powers them.

### What Lives Here
- HUD websocket clients, brokers, visualization code
- Enclave shell (state enums, signature checks, USB detection logic)
- Documentation (operational, legal, business)
- Tests and mock implementations
- Tools and utilities
- Research summaries (high-level, no proprietary math)

### Who Has Access
- Founder (full access)
- Authorized collaborators (as permitted)
- LLMs (under strict constraints defined in LICENSE)

### What LLMs Can Do Here
- Reorganize folder structures
- Improve documentation
- Refine HUD code and shell logic
- Create tests with mock verdicts
- Write utilities and tools

### What LLMs CANNOT Do Here
- Attempt to approximate S3 internals
- Write formulas or kernels related to the sealed engine
- Modify or interpret proprietary mathematics
- Access Repository B

---

## Repository B: Sentinel_Core (USB, Founder Only)

### Purpose
Store all **proprietary mathematical research and sealed engine logic** in a secure, offline environment.

### What Lives Here
- S3 directional engine mathematics
- Signal kernels, transforms, and experimental logic
- Draft implementations of sealed components
- Early-stage models exploring causal drift or pressure
- Design notes for future enclave compilation
- Encrypted artifacts for hardware-bound execution

### Who Has Access
- **Founder only**
- Never shared with LLMs, collaborators, or external systems

### Storage
- **Offline** (USB drive, encrypted storage, air-gapped machine)
- **Not** in GitHub or cloud systems
- **Not** accessible by any automated systems
- **Encrypted** if possible

### What's Forbidden
- API keys or plaintext credentials
- Personal identity records
- Business financial data
- Anything requiring external AI tool access
- Any files that could accidentally expose the system to unauthorized access

---
User Interface (HUD)
↓
├─ Websocket connection
├─ Display market data, predictions, trade signals
└─ User clicks "BUY" / "SELL" button
↓
Repository A (Sentinel_Hub)
├─ HUD code validates user input
├─ Enclave shell prepares request
└─ Shell attempts to load compiled engine
↓
Repository B (Offline, USB)
├─ Compiled binary (e.g., libs3.so)
├─ Runs locally on founder's machine
├─ Receives market input
└─ Executes proprietary S3 logic
↓
Back to Enclave Shell
├─ Engine returns verdict (BUY/SELL/NO TRADE)
├─ Shell receives verdict
└─ No math or internals revealed
↓
Back to HUD
├─ Displays the verdict
├─ Executes the trade (or waits)
└─ Logs the result
Key Point: Repository A never sees the engine's source or math. It only sees verdicts.
## How They Work Together

### The Data Flow
### The Separation Principle

**Repository A defines interfaces. Repository B defines the secret logic.**

Example:

Repository A (Sentinel_Hub) contains:
```python
# Enclave shell code (this is public)
class EnclaveShell:
    def request_verdict(self, market_data):
        """
        Call the sealed engine for a trading verdict.
        Returns: "BUY", "SELL", or "NO TRADE"
        """
        try:
            verdict = self.load_engine_binary()
            result = verdict.execute(market_data)
            return result
        except EngineError:
            return "NO TRADE"
```

Repository B (USB) contains:
```python
# S3 engine internals (this is SEALED)
class S3Judge:
    def execute(self, market_data):
        # Proprietary signal kernels
        signal = self._compute_directional_bias(market_data)
        # Proprietary transforms
        adjusted = self._apply_pressure_transform(signal)
        # Proprietary thresholds (trade secret)
        if adjusted > 0.87:  # ← This number is a trade secret
            return "BUY"
        elif adjusted < -0.92:  # ← This number is a trade secret
            return "SELL"
        else:
            return "NO TRADE"
```

Repository A knows *what* the engine does (return a verdict).  
Repository B knows *how* it works (the math).

These never mix.

---

## The S3 Firewall Principle

**LLMs may refine the world around the Judge, but may never see the Judge itself.**

This means:
- LLMs can improve HUD code, documentation, structure
- LLMs cannot see proprietary mathematics
- LLMs cannot infer engine behavior from partial information
- LLMs cannot modify or interpret the sealed logic

This principle is enforced by:
1. **Physical separation** (Repository B is offline)
2. **Contractual separation** (LICENSE, README, SECURITY.md)
3. **Architectural separation** (enclave shell acts as a black box)
4. **Access control** (only founder can touch Repository B)

---

## Future Enclave Integration

When the proprietary S3 engine is complete:

1. **Compile** the engine into a binary (e.g., `libs3.so`)
2. **Encrypt** it (optional, depending on threat model)
3. **Store** it offline or on hardware media (USB, TPM, secure enclave)
4. **Load dynamically** at runtime from the enclave shell
5. **Execute** completely offline, never in version control
6. **Return only the verdict** to Sentinel_Hub

Example future workflow:
enclave_shell.py (Repository A) loads libs3.so (Repository B via USB)
↓
Repository B runs locally, never touches Git or internet
↓
Returns: "BUY", "SELL", or "NO TRADE"
↓
Repository A receives verdict and executes trade
This structure supports:
- Hardware enclaves (Intel SGX, ARM TrustZone)
- Sealed binaries (signed, encrypted)
- Isolated execution environments (Docker containers with restricted scope)
- USB-based hardware keys

---

## Benefits of This Model

| Benefit | Why It Matters |
|---------|--------------:|
| **Trade Secret Protection** | Proprietary mathematics never leave founder's control |
| **Collaboration Safety** | LLMs and collaborators help without seeing secrets |
| **Audit Trail** | Clear separation for IP, patent, and trademark protection |
| **Scalability** | Can add team members to Repository A without risk |
| **Compliance** | Fits high-security quantitative research practices |
| **Patent Strategy** | Keeps math sealed while publishing public interfaces |
| **Competitive Advantage** | The S3 engine stays yours alone |

---

## Summary

Sentinel Labs operates as three separate worlds:

| Aspect | Repository A (Sentinel_Hub) | Repository B (Sentinel_Enclave1) | Repository C (Sentinel_Enclave2) |
|--------|---------------------------|---------------------------------|----------------------------------|
| **Location** | GitHub (private) | USB (offline, encrypted) | USB (offline, encrypted) |
| **Access** | Founder + collaborators + LLMs | Founder only | Founder only |
| **Content** | Interfaces, HUD, documentation, tests | Full S3 math & logic | Simplified S3 logic |
| **Purpose** | Public-facing operations | Production engine | Testing & backup |
| **Version Control** | Git on GitHub | Local/offline | Local/offline |
| **Collaboration** | Yes (under constraints) | No | No |
| **LLM Safe?** | Yes (firewall enforced) | No (never shared) | No (never shared) |

The **S3 Firewall Principle** ensures that even with full access to Repository A, no one can infer, approximate, or reconstruct the proprietary mathematics of the S3 engine.

This is the foundation of Sentinel Labs' competitive advantage.

---

**Next Steps**:
- Read `enclave-interface.md` for detailed interface specifications
- Review `research-summary.md` for high-level research overview
- See `/src/` structure for where code actually lives

---

**Questions?** Contact the Founder.
