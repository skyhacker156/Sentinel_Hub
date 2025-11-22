# Sentinel_Hub — Website Layer (Frontend)
**Purpose**: Entire frontend architecture for the Sentinel Labs public website and Founder dashboard  
**Status**: Rough Framing (Foundation Phase)  
**Scope**: Repository A only — UI, frontend, public-facing, Founder dashboard (no backend, no sealed logic)  
**Binding Document**: Yes (aligns with LLM Collaboration Protocol Section III-A, VI; Foundation Mode brief)

---

## What This Folder Does

The `/src/website` directory is the **complete frontend implementation** for Sentinel Labs. It contains:

- **Next.js pages** (public landing, narrative pages, Founder login, private dashboard)
- **React components** (reusable UI elements, layout, navigation, widgets)
- **Routing and navigation** (public routes, founder-protected routes, authentication gates)
- **Styles and assets** (CSS, Tailwind, images, videos, brand assets)
- **Public data visualization** (charts, tables, public market data displays)
- **Narrative presentation** (cinematic pages explaining Table A/Hallway/Table B)
- **Founder dashboard UI** (war room, HUD, workspaces, command center)

**Critical constraint:** This folder is **UI only**. No backend logic, no proprietary computation, no sealed systems connections.

All code in this folder is narrative-safe, frontend-only, and designed for both public and Founder consumption.

---

## Current Phase: Rough Framing (Foundation Mode)

We are explicitly in the **Rough Framing / Foundation Phase** of the website build.

This means:
- ✅ Create folders and files, not finished UI
- ✅ Ensure routing structure is correct
- ✅ Use minimal placeholder components and text
- ✅ Stub API wrapper files with empty functions
- ✅ Create basic authentication scaffolding

This means:
- ❌ Do NOT implement complex styling yet
- ❌ Do NOT create functional charts or real data integration yet
- ❌ Do NOT build the HUD with live data yet
- ❌ Do NOT optimize for production performance yet
- ❌ Do NOT implement advanced features yet

**Metaphor:** We are framing the house, not installing cabinets or painting walls.

---

## LLMs May (In Scope)

✅ **Page Scaffolding & Routing**
- Create Next.js page components (minimal, placeholder-level)
- Set up routing structure (public routes, founder routes, protected routes)
- Create login/authentication page scaffolding
- Create page templates with placeholder content
- Set up folder structure for pages (pages/public/, pages/founder/, etc.)
- Ensure all routes compile and are reachable

✅ **React Component Creation**
- Create reusable React components (Button, Card, Modal, Navigation, etc.)
- Create layout components (Header, Sidebar, Footer, etc.)
- Create placeholder components for future features
- Refactor existing components for clarity and reusability
- Create error boundary components
- Create loading state components

✅ **CSS & Styling (Foundation Phase)**
- Create global CSS structure (globals.css, variables, basic theme)
- Set up Tailwind configuration and utility classes
- Create responsive layout styles
- Create basic component styles (buttons, inputs, containers)
- Create cinematic/atmospheric styling appropriate to the brand
- Do NOT implement complex animations or transitions yet

✅ **Navigation & Routing**
- Set up Next.js routing structure
- Create navigation components (navbar, sidebar)
- Set up public vs. founder route protection
- Create breadcrumb navigation
- Create link hierarchies
- Ensure all routes are functional

✅ **Public Data Visualization (Stubs)**
- Create chart component stubs (ChartWidget, CandlestickChart, etc.)
- Set up data visualization library imports (Recharts, Chart.js, etc.)
- Create placeholder chart components with mock data
- Do NOT connect to live APIs yet
- Do NOT implement real data processing yet

✅ **Public API Wrappers (Stubs)**
- Create stub API wrapper files (api/yahooFinance.js, api/newsApi.js, etc.)
- Export empty or placeholder functions with correct signatures
- Document what each API wrapper should do (in comments)
- Create .env.example with placeholder API keys
- Do NOT implement actual API calls yet
- Do NOT process real data yet

✅ **Authentication Scaffolding**
- Create login page with basic form (unstyled, placeholder)
- Create lib/auth.js stub with checkPassword function
- Create authentication context/provider stub
- Create protected route wrapper component
- Do NOT implement real authentication yet
- Do NOT store passwords or tokens yet

✅ **Documentation & Comments**
- Write inline comments explaining component purpose
- Create README files for subfolders (pages/, components/, lib/, etc.)
- Document placeholder structures and future implementation
- Write setup instructions for the project
- Create a DEVELOPMENT.md guide for future work

✅ **Folder Organization**
- Create expected folder structure (pages/, components/, lib/, api/, public/, styles/)
- Create README.md for each subfolder
- Create index files for cleaner imports
- Organize files logically within folders
- Set up git structure with .gitignore

---

## LLMs Must Not (Out of Scope)

❌ **Sealed Logic & Proprietary Computation**
- Do NOT infer, describe, or implement S³ Engine logic
- Do NOT propose internal algorithms or signal processing
- Do NOT create features that would expose proprietary computation
- Do NOT describe causal drift detection, pressure coherence, or internal transforms
- Do NOT suggest how the engine works or what it does

❌ **Link to Sealed Systems**
- Do NOT create connections to Repositories B/C
- Do NOT link the website to Enclave1 or Enclave2
- Do NOT propose APIs that would bridge to sealed systems
- Do NOT create features that display or expose sealed logic
- Do NOT suggest how the frontend could access proprietary systems

❌ **Proprietary Features**
- Do NOT create trading signal displays or verdict panels
- Do NOT build features suggesting engine confidence or correctness
- Do NOT implement automatic trading or execution features
- Do NOT create features displaying internal engine state
- Do NOT propose features exposing how verdicts are generated

❌ **Backend Logic**
- Do NOT implement backend computation in `/src/website/`
- Do NOT create backend services or microservices here
- Do NOT implement real database connectivity
- Do NOT process data in ways that imply proprietary logic
- Do NOT create hidden API endpoints (use `/pages/api/` only for stubs)

❌ **Advanced Features (Rough Framing Phase)**
- Do NOT implement complex animations or cinematic effects yet
- Do NOT create real data integration (charts with live data)
- Do NOT build sophisticated state management yet
- Do NOT implement production-grade performance optimizations yet
- Do NOT add advanced features beyond Foundation Phase scope

❌ **Break Narrative or IP Boundaries**
- Do NOT create content that breaks the Firewall Principle
- Do NOT violate the Separation Doctrine in code
- Do NOT use vocabulary that contradicts Narrative_Specifications
- Do NOT suggest operational shortcuts that weaken IP protection
- Do NOT create features that bridge narrative and sealed computation

---

## Dependencies & Connections

**This folder depends on:**
- `/governance/` (LLM Collaboration Protocol, Narrative_Specifications, Vocabulary_Charter)
- `/architecture/` (system design, interface specs, architectural principles)
- `/docs/` (narrative documentation, explanatory materials)
- Root-level governance documents (IP_Boundary_Document, Firewall_Principle, Separation_Doctrine)

**This folder connects to:**
- **Public website entry point** (public landing page, about page, narrative pages)
- **Founder dashboard** (login, war room, HUD, workspaces)
- **Browser environment** (React, Next.js, client-side JavaScript only)
- **Public APIs only** (Yahoo Finance, Finnhub, news APIs, etc. — no proprietary data)

**Other folders reference this:**
- Root README references `/src/website/` structure
- `/architecture/` documents the design of pages and components
- Deployment/hosting setup references this folder

---

## Content Review Checklist (Before Writing Code)

Before creating or modifying any code in this folder, verify:

**Is this frontend-only (UI, no backend logic)?**
- [ ] Does this code live in the browser (React, JavaScript)?
- [ ] Does this avoid backend computation or proprietary logic?
- [ ] Is this styling, components, pages, or navigation?
- [ ] Would this code work the same way if the backend was completely different?

**Is this narrative-safe (no sealed logic)?**
- [ ] Does this avoid exposing or inferring S³ internals?
- [ ] Does this avoid features that imply engine functionality?
- [ ] Does this use only approved Sentinel vocabulary?
- [ ] Does this strengthen the firewall, not weaken it?

**Is this appropriate for Rough Framing phase?**
- [ ] Is this structure/scaffolding (not finished UI)?
- [ ] Is this placeholder/stub code (not production-ready)?
- [ ] Does this avoid complex features or animations?
- [ ] Is this part of the Foundation Phase scope?

**Does this respect the boundaries?**
- [ ] Does this avoid connecting to sealed systems?
- [ ] Does this use public APIs only (not proprietary)?
- [ ] Does this not implement proprietary features?
- [ ] Does this not expose engine state or verdicts?

**Is this the Founder's request?**
- [ ] Is this aligned with the project spec (Foundation Mode brief)?
- [ ] Is this explicitly requested or approved by the Founder?
- [ ] Does this help move toward the war room login + fireplace goal?

**If ANY answer is NO: STOP. Do not proceed. Ask the Founder.**

---

## Folder Structure (Expected Layout)

```
/src/website/
├── pages/
│   ├── README.md                    # Pages folder guidelines
│   ├── index.js                     # Public landing page (placeholder)
│   ├── narrative.js                 # Narrative page (Table A/Hallway/B)
│   ├── login.js                     # Founder login page
│   ├── _document.js                 # Next.js document wrapper
│   ├── _app.js                      # Next.js app wrapper
│   └── founder/
│       ├── README.md                # Founder routes guidelines
│       ├── index.js                 # Founder dashboard (war room)
│       ├── hud.js                   # HUD page skeleton
│       └── workspaces.js            # Notes/journaling skeleton
├── components/
│   ├── README.md                    # Components folder guidelines
│   ├── Navbar.js                    # Navigation component
│   ├── Layout.js                    # Main layout wrapper
│   ├── ChartWidget.js               # Placeholder chart component
│   ├── LoginForm.js                 # Login form component
│   ├── ProtectedRoute.js            # Authentication wrapper
│   └── Fireplace.js                 # Fireplace animation (future)
├── lib/
│   ├── README.md                    # Utils folder guidelines
│   ├── auth.js                      # Authentication logic (stub)
│   └── storage.js                   # Local storage helper (stub)
├── api/
│   ├── README.md                    # API wrappers guidelines
│   ├── yahooFinance.js              # Yahoo Finance wrapper (stub)
│   ├── finnhub.js                   # Finnhub wrapper (stub)
│   └── newsApi.js                   # News API wrapper (stub)
├── public/
│   ├── README.md                    # Assets folder guidelines
│   ├── logo.svg                     # Sentinel Labs logo
│   ├── hero.png                     # Hero image (placeholder)
│   └── film/placeholder.mp4         # Cinematic video (placeholder)
├── styles/
│   ├── README.md                    # Styles folder guidelines
│   ├── globals.css                  # Global styles
│   ├── variables.css                # CSS variables/theme
│   └── components.css               # Component-specific styles
├── README.md                        # This file
├── next.config.js                   # Next.js configuration
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore rules
├── package.json                     # Node dependencies
└── DEVELOPMENT.md                   # Development setup guide
```

Each subfolder should have its own README following this template.

---

## Example Safe Tasks (Rough Framing Phase)

### ✅ Safe: "Create a skeleton pages/index.js with a heading and placeholder content"

- **Action**: Create a minimal Next.js page component
- **Include**: A heading, placeholder divs, basic structure
- **Avoid**: Real content, styling, complex logic
- **Example**: 
  ```jsx
  export default function Home() {
    return <div><h1>Sentinel Labs</h1></div>
  }
  ```
- **Result**: PERMITTED

### ✅ Safe: "Create a pages/founder/dashboard.js with links to HUD and Workspaces"

- **Action**: Create founder dashboard page skeleton
- **Include**: Heading, placeholder links, basic structure
- **Avoid**: Real functionality, styling, data integration
- **Example**:
  ```jsx
  export default function Dashboard() {
    return (
      <div>
        <h1>Founder Dashboard</h1>
        <a href="/founder/hud">HUD</a>
        <a href="/founder/workspaces">Workspaces</a>
      </div>
    )
  }
  ```
- **Result**: PERMITTED

### ✅ Safe: "Create a stub lib/auth.js with a checkPassword function"

- **Action**: Create placeholder authentication function
- **Include**: Function signature, environment variable check
- **Avoid**: Real password validation, complex logic
- **Example**:
  ```javascript
  export function checkPassword(username, password) {
    return username === process.env.FOUNDER_USERNAME &&
           password === process.env.FOUNDER_PASSWORD
  }
  ```
- **Result**: PERMITTED

### ✅ Safe: "Create empty api/yahooFinance.js and api/finnhub.js stubs"

- **Action**: Create API wrapper files with placeholder exports
- **Include**: Function signatures with comments
- **Avoid**: Real API calls, data processing
- **Example**:
  ```javascript
  export async function getStockPrice(symbol) {
    // TODO: implement Yahoo Finance API call
    return null
  }
  ```
- **Result**: PERMITTED

### ✅ Safe: "Create components/Navbar.js with navigation links"

- **Action**: Create navigation component
- **Include**: Links to pages, placeholder structure
- **Avoid**: Styling, complex state management
- **Result**: PERMITTED

### ❌ Unsafe: "Create a feature that displays trading signals from the engine"

- **Problem**: Proposing proprietary feature
- **Risk**: Exposing sealed logic
- **Action**: STOP. Clarify: "Trading signals are proprietary. I cannot create features that display them."
- **Result**: PROHIBITED

### ❌ Unsafe: "Implement a real-time HUD connected to the Enclave"

- **Problem**: Bridging to sealed systems
- **Risk**: Violating Firewall Principle
- **Action**: STOP. Reference governance: "The website cannot connect to sealed systems. We're in Rough Framing; the HUD is a placeholder for now."
- **Result**: PROHIBITED

---

## How to Use This Folder (LLM Workflow)

### Before Writing Code:

1. **Read the LLM_Portable README** (onboarding)
2. **Read LLM_COLLABORATION_PROTOCOL.md** (Section III-A: Code Assistance)
3. **Read this README** (what you're reading now)
4. **Read the Foundation Mode brief** (current phase, scope, allowed tasks)
5. **Read the relevant subfolder README** (pages/, components/, lib/, etc.)
6. **Use the Content Review Checklist** before generating any code

### Step-by-step for a specific task:

1. **Identify the task** ("Create pages/login.js with a login form")
2. **Check the phase** (Are we in Rough Framing? Yes → proceed with placeholder)
3. **Check the boundaries** (Is this frontend-only? Does it avoid sealed logic?)
4. **Use the Content Review Checklist** (run through all questions)
5. **Ask if unclear** ("Is this within Rough Framing scope, or does it require implementation?")
6. **Write minimal placeholder code** (scaffolding, not finished product)
7. **Add comments** explaining what future implementation should do

---

## Code Quality Standards (Even in Rough Framing)

Even though we're in Foundation Phase, code should meet these standards:

- ✅ **Clear variable and function names** (what does this do?)
- ✅ **Comments explaining purpose** (why does this exist?)
- ✅ **Proper file structure** (files organized logically)
- ✅ **No hardcoded secrets** (use environment variables)
- ✅ **Accessible HTML** (semantic markup, ARIA labels where appropriate)
- ✅ **Responsive design** (works on mobile and desktop)
- ✅ **No console errors** (code compiles cleanly)

- ❌ Production performance optimizations (not yet)
- ❌ Complex animations (not yet)
- ❌ Real data integration (not yet)
- ❌ Sophisticated state management (not yet)
- ❌ Advanced features (not yet)

---

## Escalation Rule

**If you (as an LLM) are unsure whether a task is safe:**

1. **STOP immediately.** Do not write code.
2. **Identify the concern:** "This task appears to [describe the concern]"
3. **Ask the Founder:** "Is this appropriate for [Rough Framing / Foundation Phase]? Does this risk exposing sealed logic?"
4. **Wait for clarification** before proceeding.

**Examples of questions to ask:**

- "Is this a placeholder/stub for Rough Framing, or a finished feature?"
- "Can I implement this using public data/APIs, or would it require sealed logic?"
- "Does this touch the Founder dashboard, or the public website?"
- "Should this page require authentication, or be public?"

---

## War Room Goal (Current Project)

This project is building toward a **war room login + fireplace** goal:

1. **Public side**: Minimal, atmospheric placeholder (not active yet)
2. **Founder side**: Login gate (username + password) → authenticated space
3. **Inside fireplace**: Minimal placeholder for future development

**This README supports that goal:**
- Foundation Phase scaffolding appropriate for login gates
- Authentication stubs (lib/auth.js, login.js, ProtectedRoute.js)
- Founder route structure (pages/founder/)
- Clear boundaries to prevent scope creep

---

## Founder Declaration

By establishing this `/src/website` folder and README, I (the Founder) affirm:

- ✅ This folder is for frontend code only (UI, no backend logic)
- ✅ LLMs may write Next.js, React, CSS, and frontend JavaScript
- ✅ All code must be narrative-safe and avoid sealed logic
- ✅ We are in Rough Framing phase (scaffolding, not finished features)
- ✅ I will review all contributions against these standards and the Protocol

Any code that bridges to sealed systems, exposes proprietary logic, or goes beyond Rough Framing scope will be rejected and the violation documented.

---

**Folder Status**: ACTIVE (Rough Framing Phase)  
**Last Updated**: November 22, 2025  
**Maintained By**: Founder, Sentinel Laboratories  
**Protocol Reference**: LLM_COLLABORATION_PROTOCOL.md (Section III-A)  
**Project Reference**: Sentinel_Labs_Website_Foundation_Mode.pdf  
**Current Goal**: War room login + fireplace  
**Next Phase**: Moving beyond Rough Framing (TBD by Founder)

---

## Quick Navigation

- [What This Folder Does](#what-this-folder-does)
- [Current Phase (Rough Framing)](#current-phase-rough-framing-foundation-mode)
- [In Scope (LLMs May)](#llms-may-in-scope)
- [Out of Scope (LLMs Must Not)](#llms-must-not-out-of-scope)
- [Folder Structure](#folder-structure-expected-layout)
- [Content Review Checklist](#content-review-checklist-before-writing-code)
- [Example Safe Tasks](#example-safe-tasks-rough-framing-phase)
- [Code Quality Standards](#code-quality-standards-even-in-rough-framing)
- [Escalation Rule](#escalation-rule)
- [War Room Goal](#war-room-goal-current-project)
