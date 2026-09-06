# Local Experience Discovery Platform

## Overview

This project is a new application for intelligent, personalized discovery of local experiences.

It connects:

- **Travelers** looking for experiences that fit their current needs.
- **Providers** listing local experiences and offerings.

The product should move beyond generic search by considering the traveler's:

- interests
- available time
- budget
- location
- group type
- relevant accessibility requirements

The central experience is:

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

## Requirements

`prd.md` is the **single source of truth for product requirements and scope**.

Do not create another PRD.

Do not silently change the approved feature set.

## Design

The supplied Stitch ZIP is a **visual/reference asset** for the intended interface quality and direction.

A separate `design.md` will be provided later.

When `design.md` is available, read it before starting work and follow it for final visual/branding decisions.

## Product Name

The final website/product name has **not been decided yet**.

Until `design.md` defines it:

- do not invent a permanent product name
- do not permanently hard-code a final brand name
- keep product-name text easy to replace
- treat the current logo/reference as provisional

## Mobile-First Requirement

The website must be prominently **mobile-phone friendly**.

Traveler-facing screens should be designed around phone use first.

The experience should have:

- comfortable touch controls
- readable typography
- sensible mobile spacing
- responsive cards
- mobile-friendly filters
- usable forms
- usable modals/bottom sheets
- no accidental horizontal overflow
- clear primary actions

Tablet and desktop layouts should adapt from the mobile foundation.

## MVP

### Must Have

1. Traveler profile/quick input.
2. Provider listings using seeded/mock data.
3. Personalized recommendation logic.
4. Results with visible recommendation reasoning.
5. Adaptive re-suggestion/re-ranking when constraints change.
6. Minimal provider listing form.

### Nice to Have

- conversational/chat input
- itinerary stitching
- weather-based reshuffle
- map visualization

### Skip for MVP

- real payments/booking confirmation
- real-time provider notifications
- full analytics dashboards
- complex login/auth
- multi-language support
- other functionality explicitly outside the approved MVP scope

## Intelligence Approach

A transparent weighted scoring system is sufficient for the MVP.

The important demonstration is that the system is **personalized and adaptive**.

Example:

```text
Interests + location + time + budget + group type
                         ↓
                 Recommendation score
                         ↓
                 Ranked experiences
                         ↓
                Why this matched you
                         ↓
                   User changes
                         ↓
                Re-ranked experiences
```

## Project Files

| File | Purpose |
|---|---|
| `agent.md` | Autonomous development workflow and rules |
| `backend.md` | Backend, data, and recommendation plan |
| `memory.md` | Persistent project decisions and current state |
| `milestone.md` | Milestone plan and progress |
| `prd.md` | Single product requirements source of truth |
| `review.md` | Quality/review gate |
| `README.md` | Project overview |

## Current Status

**Milestone 2 — IN_PROGRESS**

The current priority is the core mobile-first traveler experience and the intelligent recommendation loop.

## Important

This is a **new project being built from scratch**.

Do not treat it as a rebuild, migration, restoration, or continuation of an older codebase.
