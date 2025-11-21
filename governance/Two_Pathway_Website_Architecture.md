# 🌐 Two-Pathway Website Architecture (Exhibit H)

**Version**: 1.0  
**Status**: Final (Founder-Controlled)  
**Purpose**: Define the dual-pathway structure for maxlaboratories.com

---

## I. Overview

maxlaboratories.com operates as **two completely separate user experiences** within a single domain:

1. **Public Pathway** — Landing page + narrative (anyone can visit)
2. **Founder Pathway** — War Room HQ (password-protected, founder-only)

Both live in `/src/website/` but are completely firewalled from each other.

---

## II. Pathway 1: Public Visitor (Narrative Layer)

**Purpose**: Brand storytelling  
**Access**: Anyone visiting maxlaboratories.com  
**URL**: `/` (root)  
**Authentication**: None

### What It Contains
- Landing page with 30-second film placeholder
- Table A / Hallway / Table B explanation
- Sentinel Labs founder story
- Contact information
- Brand narrative

### What It NEVER Contains
- S³ references
- Trading signals
- Performance claims
- Proprietary logic hints
- Login or private features

### Technology
- React/Next.js
- Tailwind CSS
- Static content
- No APIs, no database

### Folder Structure
```
/src/website/public/
├── /pages/
│   ├── index.js          # Landing page
│   ├── about.js
│   └── narrative.js
├── /components/
├── /styles/
└── /public/ (images, video)
```

### LLM Collaboration
✅ **Fully safe** — LLMs can review and improve all code

---

## III. Pathway 2: Founder Pathway (War Room)

**Purpose**: Private operational dashboard  
**Access**: Founder only (password)  
**URL**: `/login` → `/warroom`  
**Authentication**: Password required

### What It Contains (Now)
- Login page (password gate)
- War Room dashboard
- 30-second film display
- HUD (public API market data only)
- Research notes & journaling
- Workspace tabs

### What It WILL Contain (Later)
- Candlestick charts
- Technical indicators (EMA, RSI, MACD)
- Watchlists & alerts
- News feeds
- Economic calendar
- Enclave Shell verdict display (black-box)
- Order Sheet creation

### What It NEVER Contains
- S³ logic
- Causal drift detection
- Proprietary computation
- Signal processing
- Verdict interpretation (just display)

### Technology
- Next.js with auth middleware
- PostgreSQL (notes)
- JWT sessions
- Public APIs only (Yahoo Finance, NewsAPI)
- Enclave Shell (USB loader)

### Folder Structure
```
/src/website/founder/
├── /login/
│   ├── page.js
│   └── middleware.js
├── /warroom/
│   ├── /dashboard/
│   ├── /hud/
│   │   ├── /charts/
│   │   ├── /watchlists/
│   │   ├── /news/
│   │   └── /calendar/
│   ├── /notes/
│   ├── /workspaces/
│   ├── /movie/
│   └── /enclave-shell/   ⚠️ FOUNDER-ONLY
│       ├── shell.js      (USB loader)
│       ├── interface.js  (Black-box I/O)
│       └── verdict-display.js
├── /middleware/
└── /api/
```

### Authentication
```
Simple password-only:
1. /login page
2. User enters password
3. Frontend verifies hash
4. JWT session created
5. Middleware protects /warroom routes
```

### LLM Collaboration
✅ **Can review**: UI, charts, notes, auth logic, public APIs  
⚠️ **Cannot touch**: Enclave Shell files, black-box interface  
❌ **Cannot access**: S³ internals (Repository B/C)

---

## IV. Key Architecture Rules

### Rule 1: Complete Separation
- Public and Founder pathways are separate folders
- No code cross-contamination
- Different styling, components, logic

### Rule 2: Firewall at URL Level
```
maxlaboratories.com/           → Public pathway
maxlaboratories.com/login/     → Founder gateway
maxlaboratories.com/warroom/   → Private (authenticated)
```

### Rule 3: Public Data Only
- Public pathway: No APIs, pure static narrative
- Founder pathway: Public APIs only (Yahoo Finance, NewsAPI)
- **Never** proprietary data, signals, or S³ logic

### Rule 4: Enclave Shell (Black-Box Only)
- Lives in `/founder/enclave-shell/`
- Loads sealed engine from USB
- Returns verdict only (BUY/SELL/NO TRADE)
- Founder sees result, no interpretation
- LLMs cannot modify this section

### Rule 5: Authentication = Founder Control
- Simple password (no OAuth, no signup)
- Session-based access control
- Founder is only valid user
- Automatic logout protection

---

## V. Deployment

Both pathways deploy together to **Vercel/Netlify**:

```
GitHub: /src/website/
   ↓
Vercel/Netlify automatic CI/CD
   ↓
maxlaboratories.com
   ├── / → public pathway
   └── /login, /warroom → founder pathway (protected)
```

Environment variables:
```
FOUNDER_PASSWORD_HASH=bcrypt_hash_here
JWT_SECRET=random_secret_here
NEXT_PUBLIC_YAHOO_API_KEY=...
NEXT_PUBLIC_NEWS_API_KEY=...
```

---

## VI. Governance

### Public Pathway (Pure Narrative)
✅ No S³, no secrets, LLM-safe  
✅ Static content, no computation  
✅ Brand storytelling only

### Founder Pathway (Operational)
✅ Password-protected  
✅ Black-box Enclave Shell access  
✅ Public data aggregation  
✅ Founder decision-making  
❌ No proprietary computation

---

## VII. Summary

| Aspect | Public | Founder |
|--------|--------|---------|
| **Access** | Anyone | Password |
| **Content** | Narrative | War Room HQ |
| **APIs** | None | Public only |
| **S³ Logic** | ❌ None | ❌ None |
| **Verdicts** | ❌ No | ✅ Display only |
| **LLM Safe** | ✅ 100% | ⚠️ Restricted |

This is your two-pathway architecture. Ready to build.
