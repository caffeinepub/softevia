# Specification

## Summary
**Goal:** Build a single-page, modern, high-conversion B2B SaaS landing page for Softevia targeting the keyword “Market Research Technology in Europe”, with conversion CTAs wired to a lead-capture form backed by a Motoko canister.

**Planned changes:**
- Create a responsive single-page landing layout with a clean enterprise look, blue/purple gradient accents, and AI/analytics-themed visuals.
- Implement the exact section order and required copy: Hero (H1 exactly “Market Research Technology in Europe”), Evolution, About, Solutions/Capabilities (exactly 6 blocks), Why Choose (5 icon bullets), Industries (6-item grid), How the Technology Works (5-step flow), Final CTA (two CTAs).
- Add header navigation (smooth scroll) with persistent access to primary CTA, plus a footer with basic positioning and section links.
- Implement “Request a Demo” and “Speak with an Expert” CTAs opening a shared modal/section form with intent preselected, client-side validation, and a clear success state.
- Add a backend Motoko update method to store lead submissions (timestamp, intent, name, email, company, message) with basic sanity checks and stable, upgrade-safe persistence; submit from the frontend (no mock-only flow).
- Add on-page SEO: document title + meta description including “Market Research Technology in Europe” and include all provided related keywords naturally in visible copy.
- Add required static image assets under `frontend/public/assets/generated`, integrate at least one illustration and one dashboard mockup into relevant sections, and provide descriptive alt text.

**User-visible outcome:** Visitors can view a polished Softevia landing page optimized for “Market Research Technology in Europe”, navigate smoothly across sections, and submit a validated demo/expert request form that confirms success and stores the lead in the canister backend.
