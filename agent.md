# AI Agent Workflow

## Purpose

This project follows a milestone-based autonomous development workflow.

The project is a **new project**. Build it from the ground up according to the requirements and references provided in this folder.

## Mandatory Context

Before starting any task, always read:

- `prd.md`
- `design.md`
- `milestone.md`
- `memory.md`

`design.md` will be provided later. Until it exists, do not invent a replacement design specification. Use `prd.md` and the supplied Stitch reference only for the currently available product and visual requirements.

## Source of Truth

### Product Requirements

`prd.md` is the **single source of truth for product scope and functionality**.

Do not create another PRD.

Do not silently:

- add major features
- remove MVP features
- change the intended behavior
- turn stretch features into mandatory features
- reinterpret the problem statement into a different product

Implementation improvements are allowed when they improve quality, responsiveness, accessibility, maintainability, or reliability without changing the approved product scope.

### Visual / Design Requirements

`design.md` will define the final visual and branding decisions when it is supplied.

The supplied Stitch ZIP is a **reference for the intended visual direction and UI quality**. Use it as a visual reference, not as a second product specification.

The final website/product name is **not decided yet**.

Until `design.md` defines the final name:

- do not invent a permanent brand name
- do not hard-code a final brand identity
- keep the product-name location easy to replace
- do not assume the current logo is final

## Mobile-First Requirement

The website must be **prominently mobile-phone friendly**.

Mobile is the primary target for traveler-facing experiences.

Always prioritize:

- phone-sized layouts first
- comfortable touch targets
- readable typography
- accessible controls
- sensible spacing
- responsive cards and forms
- mobile-friendly filters
- mobile-friendly modals and bottom sheets
- no accidental horizontal overflow

Tablet and desktop layouts should adapt from the mobile foundation.

Do not design desktop first and squeeze the UI into a phone afterward.

## Development Workflow

For each task:

1. Read the mandatory context files.
2. Inspect the current project state.
3. Identify the active milestone in `milestone.md`.
4. Work on the active milestone before moving to later milestones.
5. Implement the smallest complete change that satisfies the task.
6. Preserve already-working behavior.
7. Keep implementation aligned with `prd.md` and `design.md` when available.
8. Validate the changed experience, especially on mobile.
9. Check for build, runtime, and console errors.
10. Record meaningful decisions or completed work in `memory.md`.
11. Update `milestone.md` only when milestone progress genuinely changes.
12. Use `review.md` as the quality gate.

## Autonomous Behavior

The agent may make normal implementation decisions independently when the requirements are clear.

The agent should not stop for unnecessary confirmation about:

- file organization
- component naming
- reasonable implementation details
- minor responsive adjustments
- small accessibility improvements
- ordinary refactoring

The agent should stop and request clarification when a decision would materially change:

- product scope
- MVP behavior
- branding direction
- major user flow
- core recommendation logic
- requirements explicitly defined by the user

## MVP Priority

The goal is a polished hackathon MVP, not unnecessary production complexity.

Prioritize the core loop:

```text
Traveler constraints
        ↓
Personalized matching
        ↓
Constraint-aware ranking
        ↓
Why-recommended explanation
        ↓
Constraint changes
        ↓
Updated recommendations
```

The minimal provider side must also be represented.

Do not spend MVP time on functionality explicitly outside the approved scope.

## Quality Gate

A task is complete when:

- the requested behavior works
- the implementation follows `prd.md`
- the visual direction is respected
- mobile phone usability is strong
- no obvious build/runtime errors remain
- existing functionality has not been unnecessarily broken
- project memory and milestone status are accurate

## Important

This is a **new project**.

Do not describe the project as a rebuild, migration, restoration, continuation, or replacement of an older codebase. Build the application from scratch using the provided requirements and reference material.
