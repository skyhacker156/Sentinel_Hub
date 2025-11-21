# /website/ — maxlaboratories.com

Next.js application with two completely separate user experiences.

## Two-Pathway Architecture

### 🚪 Public Pathway (`/public/`)
- **Purpose**: Landing page + narrative storytelling
- **Access**: Anyone visiting maxlaboratories.com
- **URL**: `/` (root)
- **Authentication**: None
- **Content**: Table A / Hallway / Table B, founder story, contact
- **LLM Safety**: ✅ 100% safe

### 🚪 Founder Pathway (`/founder/`)
- **Purpose**: Private operational War Room HQ
- **Access**: Password-protected (founder only)
- **URL**: `/login` → `/warroom`
- **Authentication**: Password required
- **Content**: Charts, notes, watchlists, Enclave Shell (black-box)
- **LLM Safety**: ⚠️ Restricted (UI OK, Enclave Shell off-limits)

## Key Files

- **`package.json`** — Dependencies (Next.js, React, etc.)
- **`.env.example`** — Environment variables template
- **`next.config.js`** — Next.js configuration
- **`/public/`** — Public pathway code
- **`/founder/`** — Founder pathway code
- **`/shared/`** — Utilities, hooks, helpers
- **`/api/`** — Backend API routes (optional)
- **`/tests/`** — Test files

## Governance

See [`/docs/governance/Two_Pathway_Website_Architecture.md`](../docs/governance/Two_Pathway_Website_Architecture.md) for complete architecture documentation.

### Rules

- ✅ Public pathway: Pure narrative, no APIs, no secrets
- ✅ Founder pathway: Public APIs only, password-protected
- ❌ Never: S³ logic, proprietary computation, signal processing
- ⚠️ Enclave Shell: Black-box interface only, founder-controlled

## Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Public Pathway
```
http://localhost:3000/          # Landing page
http://localhost:3000/about     # About section
http://localhost:3000/narrative # Table A/B/Hallway
```

### Founder Pathway
```
http://localhost:3000/login     # Password gate
http://localhost:3000/warroom   # War Room HQ (authenticated)
```

## Deployment

Both pathways deploy together to **Vercel/Netlify**:
```
GitHub: /src/website/
   ↓
Vercel/Netlify CI/CD
   ↓
maxlaboratories.com
```

Environment variables (set in Vercel):
```
FOUNDER_PASSWORD_HASH=...
JWT_SECRET=...
NEXT_PUBLIC_YAHOO_API_KEY=...
NEXT_PUBLIC_NEWS_API_KEY=...
```

## LLM Collaboration

**✅ LLMs CAN:**
- Review and improve `/public/` code (100% safe)
- Review UI components, styling, layouts
- Improve authentication logic
- Write public API client wrappers
- Help with `/shared/` utilities

**⚠️ LLMs CANNOT:**
- Modify `/founder/enclave-shell/` files
- Process or interpret verdicts
- Suggest S³-adjacent features

**❌ LLMs MUST NOT:**
- Access Repository B/C (sealed engines)
- Implement proprietary logic
- Create signal processing code

---

**Last Updated**: November 2025  
**Version**: 1.0  
**Status**: Ready for Implementation
