# Pages Directory — Sentinel_Hub Website

The `/pages` folder defines all **Next.js routes** for the public site and the Founder dashboard.

This is an LLM-safe folder with strict frontend boundaries.

---

## 📌 What Lives Here

- Public landing page (`/`)
- Narrative page (`/narrative`)
- Founder login (`/login`)
- Founder War Room (`/founder`)
- Additional public or internal pages

All routes are **UI only**.  
No backend logic, computation, or proprietary code is allowed here.

---

## 🧭 LLM Collaboration Rules

### Allowed:
- Create new pages
- Refactor layouts
- Add navigation
- Write JSX/React components
- Add placeholders or text content
- Enhance styling and user experience
- Add safe API-client calls to *public data sources only*

### Forbidden:
- Anything referencing sealed S³ Engine internals
- Describing or inferring proprietary logic
- Backend logic (server-side computation)
- Suggesting private API endpoints or database use

If unsure → ask.

---

## 🛡 Key Principle

**Pages control navigation and public narrative.  
All computation remains sealed and offline.**

---

**Last Updated:** November 2025  
