# /src/ — Source Code

This folder contains all application code for Sentinel Labs.

## Structure

- `/website/` — maxlaboratories.com code (Next.js application)
- Other code folders (future)

## Governance

All code in this folder follows the **Firewall Principle**:

- **Public Pathway** (`/website/public/`) — Narrative-safe, LLM-safe, no authentication
- **Founder Pathway** (`/website/founder/`) — Password-protected, Enclave Shell access (black-box only)
- **No S³ logic anywhere** — Proprietary internals remain sealed in Repository B/C (offline)

## Key Rules

1. **Complete Separation** — Public and Founder pathways are isolated
2. **Firewall at URL Level** — Different access rules for different routes
3. **Public Data Only** — No proprietary data or signals
4. **Enclave Shell (Black-Box)** — Loads sealed engine, displays verdicts only
5. **Authentication = Founder Control** — Simple password, founder-only access

## Documentation

For detailed architecture, see:
- [`/docs/governance/Two_Pathway_Website_Architecture.md`](/docs/governance/Two_Pathway_Website_Architecture.md)
- [`/docs/README.md`](/docs/README.md)

## Development
```bash
cd src/website/
npm install
npm run dev
# Visit http://localhost:3000
```

## LLM Collaboration

✅ **Public Pathway** — Fully safe for LLM review and improvement  
⚠️ **Founder Pathway** — Restricted (UI/charts/auth OK, Enclave Shell off-limits)  
❌ **Enclave Shell** — Founder-only, no LLM modifications

---

**Last Updated**: November 2025  
**Version**: 1.0  
**Status**: Ready for Implementation
