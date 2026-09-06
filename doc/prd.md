# Frontend PRD — "Nearby"
### Hyper-local Experience Discovery Platform (Traveler + Provider App)

**Doc owner:** Product/Design
**Purpose:** Define the frontend scope, screens, design system, and interaction requirements for generating/building the UI in Stitch.
**Version:** v1.0 (MVP)

---

## 1. Overview

**Problem:** Travelers struggle to find local experiences that actually fit their real-time constraints — how much time they have, how much they want to spend, and what mood they're in — rather than generic "top 10" lists.

**Solution:** A two-sided platform where travelers get personalized, constraint-aware recommendations (time-fit, budget-fit, distance-fit, interest-match) and local providers can list and manage experiences.

**Frontend goal:** Build an interface that visibly *feels* intelligent and adaptive — not a static directory — while staying lightweight enough for an MVP/hackathon build.

---

## 2. Users & Core Jobs-to-be-Done

| User | Core Job |
|---|---|
| **Traveler** | "Given my time, budget, and mood right now, show me what fits — and let me adjust on the fly." |
| **Provider** | "Let me list what I offer and see who's finding it." |

---

## 3. Design Principles

1. **Show the reasoning, not just the result.** Every recommendation should visibly explain *why* it matched (time-fit, budget-fit, interest tag).
2. **Feel alive, not static.** Motion, live indicators, and reactive UI reinforce "this updates in real time."
3. **Distinctive, not generic.** Avoid default SaaS/travel-app patterns (plain white cards, uniform grids, flat blue CTAs). Use an editorial, collage-like, energetic layout.
4. **Energetic, but never cluttered.** Motion, asymmetry, and playful accents must sit on top of a clear structure — generous spacing, one clear focal point per screen, and a consistent visual rhythm. "Hyperactive" describes the interaction/motion layer, not information density. If a screen has too many competing elements, colors, or animations firing at once, it has failed this principle.
5. **Fast constraint input.** Getting from "open app" to "seeing relevant results" should take three taps or fewer.
6. **Two-sided but traveler-first.** Provider tools should be simple and functional, not a fully separate product experience.

---

## 4. Visual Design System

### 4.1 Color Palette
| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary / Energy | Pink | `#FF78AC` | Primary CTAs, active states, match badges, highlights |
| Secondary / Calm | Teal | `#A8D5E3` | Secondary buttons, info tags, map elements, backgrounds |
| Base | Cream | `#F2F0EA` | App background, card base, whitespace |
| Text (implied) | Near-black / charcoal | — | Body copy, headlines (not pure black, for warmth) |

### 4.2 Typography
- **Display/Headline font:** Bold, rounded/chunky sans (high visual weight) — used for section titles, hero text.
- **Body font:** Clean, legible sans — used for descriptions, form labels, metadata.
- Strong contrast in scale (e.g., 28–32px headlines vs 14px body) to avoid a flat, generic hierarchy.

### 4.3 Shape & Layout Language
- Rounded corners: 16–24px radius on cards, buttons, chips.
- Soft, layered drop shadows (avoid flat/borderless cards).
- **Asymmetric/masonry grids** over uniform list grids — cards vary in size based on content weight.
- Slight tilt/rotation on select photo tiles for a collage feel.
- Hand-drawn style accent lines, arrows, or dotted paths connecting itinerary steps.
- Sticker-style badges (match %, "live now", "new") — circular/pill shapes with slight rotation.

### 4.4 Motion & "Hyperactive" Interaction Layer
This is a core differentiator — the UI should never feel static.
- Filter chips **bounce** slightly on tap/select.
- Time-sensitive listings show a **pulsing live dot**.
- A successful match triggers a **brief sparkle/confetti micro-animation** on the card.
- Cards **subtly scale/tilt** on hover/press.
- Floating chat/AI assistant bubble **gently jiggles** periodically to invite interaction.
- Recommendation feed **re-flows with a smooth transition** (not a hard reload) when filters change.

### 4.5 Clarity & Anti-Clutter Guardrails
Energy and personality should never come at the cost of readability. Rules:
- **One dominant focal point per screen** (e.g., the feed on the recommendation screen, the CTA on onboarding) — everything else visually recedes.
- **Consistent spacing scale** (e.g., 8/16/24/32px) even within an asymmetric grid — "asymmetric" means varied card sizes, not inconsistent margins.
- **Max 2–3 accent colors visible at once** in any single view; cream should always dominate as breathing room, with pink and teal used deliberately, not evenly scattered.
- **Motion is purposeful, not simultaneous.** Only one or two animated elements should be active in the viewport at a time (e.g., a pulsing live dot on a card the user is looking at) — avoid multiple bouncing/pulsing/sparkling elements firing together.
- **Card content hierarchy is fixed and predictable** (photo → title → why-recommended → metadata) even as card size varies, so the eye always knows where to look.
- **Whitespace is a design element, not empty space to fill** — resist the urge to add badges, tags, or decorative lines just because there's room.

### 4.6 What to Avoid
- Flat white backgrounds with default blue accents.
- Perfectly symmetric Airbnb-style grid with no visual hierarchy.
- Static list UI with no motion or feedback on interaction.
- Generic dashboard charts (plain bar/line charts) for provider analytics — prefer bold stat chips.
- Overcrowded screens: too many badges, chips, colors, or animations competing at once — "hyperactive" applies to interaction feedback, not visual density.

---

## 5. Information Architecture

```
Nearby App
├── Onboarding / Quick Input
├── Home / Conversational Search
├── Recommendation Feed
│   └── Map + List Toggle
├── Experience Detail
├── Itinerary Builder
├── Real-time Re-plan Modal
├── Save/Bookmarks
└── Provider Side
    ├── Provider Signup / Listing Form
    └── Provider Dashboard
```

---

## 6. Screen-by-Screen Requirements

### 6.1 Onboarding / Quick Input
**Goal:** Capture traveler constraints fast, without full auth.
- Interest multi-select chips (food, culture, adventure, nightlife, shopping) — icon + label, pink when selected
- Budget input as a styled slider/gauge (not a plain number field)
- Available time selector — radial dial or segmented control (e.g., 1hr / 2hr / half-day)
- Group type toggle — solo / family / group, shown as simple illustrated icons
- Primary CTA: "Find my match" (pink, full-width, rounded)
- Skip auth — mock/local session is acceptable for MVP

**States:** default, chip-selected (bounce animation), form-complete (CTA becomes active/enabled)

---

### 6.2 Home / Conversational Search
**Goal:** Alternate entry point — natural language intent input.
- Chat-style input bar pinned near top: placeholder example like *"I have 2 hours and ₹2000, want something authentic nearby"*
- Friendly AI avatar with animated typing indicator when processing
- Quick-reply suggestion pills below input (e.g., "Something quiet", "Family friendly", "Under ₹500")
- Parsed intent should visibly convert into filter chips above the results feed (shows the "intelligence" working)

---

### 6.3 Recommendation Feed
**Goal:** Primary results screen — must visibly justify each recommendation.
- Asymmetric masonry-style card grid (varied card sizes, not uniform rows)
- Each card includes:
  - Photo
  - Title + category tag
  - **"Why recommended" line** (e.g., "Fits your 2hr window · ₹500 under budget")
  - Rating
  - Pink "Match %" sticker badge (top corner, slightly rotated)
  - Teal save/bookmark icon
- Filter bar at top: distance, price, group size, accessibility, rating, open-now — chip style, bounces on select
- Empty/no-match state: friendly illustration + suggestion to relax a filter
- **Live re-ranking:** when a filter changes, cards reorder/reflow with animated transition (not instant reload) — this is the core "adaptive" demo moment

---

### 6.4 Map + List Toggle View
**Goal:** Spatial context for results.
- Toggle control (pill switch) between Map and List
- Map: teal-tinted base map, pink pulsing pins for open-now/live experiences, static teal pins for others
- Tapping a pin surfaces a mini card preview (bottom sheet style)
- List view: same cards as recommendation feed, condensed

---

### 6.5 Experience Detail
**Goal:** Full info + booking/request action.
- Hero photo (or photo carousel)
- Title, category, price, duration, accessibility tags
- "Why recommended for you" section (reuses match logic)
- Reviews/ratings section
- Availability slots — simple selectable time chips
- Primary CTA: "Request Slot" (MVP — not full payment/booking)
- Secondary: Save, Share

---

### 6.6 Itinerary Builder
**Goal:** Stitch 2–3 experiences into a mini-plan.
- Horizontal or vertical timeline/journey-strip layout
- Experiences connected by a **dotted walking-path line** with travel-time badges between them
- Drag-to-reorder cards
- Running total: time used / budget used, shown as a small progress bar
- CTA: "Save Itinerary" / "Share with companions"

---

### 6.7 Real-time Re-plan Modal
**Goal:** Demonstrate adaptive re-suggestion (key differentiator).
- Triggered by a mock event (e.g., "It's raining ☔", "Slot cancelled", "Budget changed")
- Bold pink banner/modal with short message + reason
- Horizontal swap-card carousel of 3 alternative suggestions
- One-tap "Swap" action, card animates into itinerary in place of removed one

---

### 6.8 Save/Bookmarks
- Grid or list of saved experiences and itineraries
- Simple remove/unsave action
- Share itinerary via link (mock is fine for MVP)

---

### 6.9 Provider Signup / Listing Form
**Goal:** Prove two-sided concept with minimal friction.
- Multi-step form (not one long form): 
  1. Basic info (name, category, description)
  2. Pricing & duration
  3. Availability calendar (simple date/time picker)
  4. Photos
- Teal progress dots across the top
- CTA: "Publish Listing" (pink)

---

### 6.10 Provider Dashboard
**Goal:** Lightweight visibility into performance — not a full analytics suite.
- Bold **stat chips** instead of generic charts: Views, Requests, Top traveler segment reached
- List of active listings with quick-edit
- "Boost this listing" playful toggle (e.g., highlights listing for a time window/segment)
- Reviews section with reply action

---

## 7. Component Inventory (for Stitch generation)

| Component | Variants needed |
|---|---|
| Filter/interest chip | default, selected (bounce), disabled |
| Experience card | standard, compact (map preview), itinerary (with travel-time connector) |
| Match badge/sticker | percentage badge, "live now" badge, "new" badge |
| Primary button | pink, full-width and inline sizes |
| Secondary button | teal outline/fill |
| Budget slider/gauge | — |
| Time radial selector | — |
| Chat input bar | with typing indicator state |
| Bottom sheet | map pin preview |
| Modal/banner | re-plan alert style |
| Progress dots | provider form stepper |
| Stat chip | dashboard metric display |
| Toggle switch | map/list, boost listing |

---

## 8. Responsive Scope
- **Primary target:** Mobile-first (traveler-facing screens).
- **Secondary:** Tablet/desktop adaptation for Provider Dashboard and Listing Form (these benefit from wider layouts).
- Masonry grid should collapse to single/double column on mobile, expand to 3–4 columns on desktop.

---

## 9. MVP Cut Line (Frontend Scope)

**In scope for MVP UI:**
- Onboarding/Quick Input
- Recommendation Feed (with why-recommended + live re-ranking)
- Basic Map + List toggle
- Experience Detail
- Provider Listing Form (single simple form acceptable if multi-step is too heavy)
- One demo of Real-time Re-plan modal

**Stretch (build if time permits):**
- Conversational/chat search input
- Itinerary Builder
- Provider Dashboard with stat chips
- Save/Bookmarks

**Explicitly out of scope for frontend MVP:**
- Real payment/booking flows
- Full auth system
- Multi-language support
- Push notification UI

---

## 10. Notes for Stitch Prompting
When generating in Stitch, prompt screen-by-screen using this PRD as the source of truth, and always restate the color palette and motion/style rules in each prompt so visual consistency holds across screens (Stitch does not retain style memory between separate generations by default).
