
## **1. Purpose of This Document**

This document explains exactly **how the Sentinel Labs Website Studio operates**, from planning → building → review → pre-deployment.

The Studio is the public-facing frontend branch of Sentinel Labs, responsible for all:

* Website pages
* UI components
* Styles and themes
* Public documentation
* Architecture diagrams
* Visitor onboarding flows
* Static/static-ready content

This process overview ensures everyone builds with the same standards, rhythm, and clarity.

---

## **2. Operating Rules (PRISM Requirements)**

### **This team CAN:**

* Create all website-related materials
* Build pages, components, diagrams, docs
* Refactor for clarity, readability, and organization
* Improve public UX and UI
* Work exclusively inside the `Sentinel_Hub` repository
* Build everything needed *up to but not including* live deployment

### **This team CANNOT:**

* Access sealed/proprietary systems
* Reference internal algorithms or S³ logic
* Deploy the site (domain not purchased yet)
* Make business, legal, or strategic decisions
* Modify governance documents
* Enter ARBITER or STEWARD domains

The Website Studio creates **public infrastructure only**.

---

## **3. Studio Workflow Overview**

The Studio uses a 6-phase workflow that keeps development clean, predictable, and public-safe.

---

# **PHASE 1 — Intake**

**Goal:** Understand what needs to be built.

Inputs may come from:

* Founder
* PRISM tasks
* `/docs/` content needing a webpage
* User onboarding improvements
* Architectural materials that need to go visual

The team clarifies:

* Purpose
* Audience
* Expected page behavior
* Required visuals or text
* File locations

*No coding begins until requirements are clear.*

---

# **PHASE 2 — Planning & Structure**

**Goal:** Design the skeleton before writing code.

The team produces:

* Page map or component outline
* Expected folder path
* Content blocks
* Wireframe-level layout
* Required diagrams

Outputs often include:

```
/architecture/diagrams/
/website_team/plans/
/src/website/pages/DRAFT.md
```

This phase ensures everything is thought out before building.

---

# **PHASE 3 — Build**

**Goal:** Implement the page or component.

Tools & expectations:

* React / Next.js (or equivalent chosen stack)
* Tailwind or public-safe CSS framework
* Strong readability
* Commented code
* Accessible and responsive UI
* No backend, no sealed calls, no proprietary hooks

All code must remain **public-safe and structural**.

---

# **PHASE 4 — Documentation**

**Goal:** Make the output understandable by anyone.

Documentation includes:

* A short README in the component or page folder
* Usage examples (if component)
* Public explanation of function or purpose
* Links back to `/docs/` where relevant

The Studio writes documentation as part of the build, not afterward.

---

# **PHASE 5 — Review**

**Goal:** Ensure clarity, PRISM safety, and alignment.

Review checklist:

* ✔ Public-safe
* ✔ No sealed inference
* ✔ No proprietary wording
* ✔ Clean code
* ✔ Clear documentation
* ✔ Accurate visuals
* ✔ Folder placement correct
* ✔ Accessible (labels, alt, contrast, etc.)

Final approval is always by the **Founder**.

---

# **PHASE 6 — Pre-Deployment Packaging**

**Goal:** Keep everything in a state that could go live instantly once a domain is purchased.

This phase includes:

* Ensuring pages compile locally
* Ensuring assets are referenced correctly
* Ensuring no hardcoded domain assumptions
* Maintaining a `build_ready/` snapshot folder (optional)
* Ensuring folder hierarchy is portable

**Deployment does *not* occur.**
We stop at packaging.

---

## **4. Studio Folder Structure**

Recommended layout inside the repo:

```
Sentinel_Hub/
 ├─ /src/
 │   └─ /website/
 │        ├─ pages/
 │        ├─ components/
 │        ├─ styles/
 │        ├─ assets/
 │        └─ README.md
 │
 ├─ /website_team/
 │   ├─ Website_Studio_Process_Overview.md
 │   ├─ website_creation_team_readme.md
 │   └─ drafts/
 │
 └─ /docs/
      └─ website/
```

This structure keeps all public website operations clean and discoverable.

---

## **5. Studio Values**

The Website Studio follows these core principles:

### **Clarity First**

Code is written for humans, not machines.

### **Public-Safe Always**

No leaks, no hints, no sealed references.

### **Beginner-Friendly**

Any new developer should be able to understand the structure without guidance.

### **Consistency**

Naming, structure, and tone must align with Sentinel’s public brand.

### **Founder Review**

Every merge requires approval.

### **Zero-Deployment Until Domain**

We prepare, but we do not publish.

---

## **6. Summary**

The **Website Studio** is Sentinel Labs’ public-facing engine for all website creation.
It builds everything visitors will eventually see, understand, and interact with — safely, clearly, and professionally.

This process overview ensures:

* Predictable workflow
* Clean communication
* Consistent quality
* PRISM-boundary alignment
* Zero sealed-system risk

The Studio builds the **public face of Sentinel Labs**.

---

If you'd like, Founder, I can also generate:

* A companion file: **Website_Studio_Task_Flow.md**
* A full **team charter**
* A **checklist for contributions**
* A **component naming and styling convention guide**
* A **public-safe UI design system**

Just tell me what you want created next.
