---
name: Collage Editorial & Hyper-Local Craft
colors:
  surface: '#fbf8ff'
  surface-dim: '#dbd9e1'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fb'
  surface-container: '#efecf5'
  surface-container-high: '#eae7ef'
  surface-container-highest: '#e4e1ea'
  on-surface: '#1b1b21'
  on-surface-variant: '#554147'
  inverse-surface: '#303036'
  inverse-on-surface: '#f2eff8'
  outline: '#887177'
  outline-variant: '#dbbfc6'
  surface-tint: '#a63164'
  primary: '#a63164'
  on-primary: '#ffffff'
  primary-container: '#ff78ac'
  on-primary-container: '#770440'
  inverse-primary: '#ffb0ca'
  secondary: '#386571'
  on-secondary: '#ffffff'
  secondary-container: '#bceaf8'
  on-secondary-container: '#3f6b77'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c6a11a'
  on-tertiary-container: '#493900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#ffb0ca'
  on-primary-fixed: '#3e001f'
  on-primary-fixed-variant: '#87164c'
  secondary-fixed: '#bceaf8'
  secondary-fixed-dim: '#a1cedc'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#1e4d58'
  tertiary-fixed: '#ffe086'
  tertiary-fixed-dim: '#eac33e'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf8ff'
  on-background: '#1b1b21'
  surface-variant: '#e4e1ea'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.005em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sticker:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
---
## Authoritative Prototype Palette

For the current Nearby prototype, the following palette is authoritative:

- Primary / Electric Rose: `#FF78AC`
- Secondary / Coastal Teal: `#A8D5E3`
- Base / Warm Cream: `#F2F0EA`
- Text / Deep Charcoal: `#1E1E24`
- Tertiary / Sun Gold: `#FCD34D`
- Supportive Accent / Soft Sage: `#D1E7DD`

When the generated token values above conflict with this explicit prototype
palette, use this palette for the implementation.
---
## Brand & Style
This design system crafts an energetic, tactile, and intelligent editorial aesthetic for hyper-local discovery. It merges the intimacy of an independent city zine with the precision of a modern discovery engine. The brand personality is adaptive, optimistic, sun-drenched, and culturally curious. 

Visually, the system leans into an editorial-tactile movement: layered paper-like surfaces, generous warm negative space, physical sticker badges with deliberate micro-rotations (-2° to 3°), asymmetric cards, and vibrant accents set against calm, natural surfaces. Interactions feel bouncy and grounded—mimicking physical ephemera like city guides, stamped tickets, and curated field notes.

## Colors
The palette pairs an expressive, high-voltage punch with calm, grounded foundational tones:

- **Primary (`#FF78AC`):** Electric Rose. Reserved for primary interactive touchpoints, hero action triggers, match affinity scores, high-priority notifications, and key navigational milestones.
- **Secondary (`#A8D5E3`):** Coastal Teal. Delivers visual cooling, map pins, secondary category badging, background washes for secondary containers, and informational metadata.
- **Tertiary (`#FCD34D`):** Sun Gold. Auxiliary highlights, curated "Staff Pick" ribbons, temporal tags ("Happening Now"), and rating stamps.
- **Supportive Accent (`#D1E7DD`):** Soft Sage. Open-status pills, green-space indicators, neighborhood vibe tags, and peaceful micro-interactions.
- **Neutral & Surface Foundations:**
  - Base Ground: Warm Cream (`#F2F0EA`) acts as the overall canvas and canvas background.
  - Surface Raised / Paper Card: Light Milk (`#FAFAF7`) for elevated cards.
  - Surface Inset: Muted Stone (`#E5E2D9`) for wells, inactive search inputs, and dividing contours.
  - Text Primary: Deep Charcoal (`#1E1E24`) ensuring WCAG AAA accessibility on cream.
  - Text Muted: Soft Graphite (`#5A5A64`) for secondary metadata, timestamps, and captions.

## Typography
Typography is anchored entirely by **Plus Jakarta Sans**, utilizing its geometric clarity and expressive, humanist alternate glyphs to balance editorial presence with technical legibility.

- **Headlines & Display:** Set tight with negative tracking (`-0.03em` to `-0.01em`) and bold-to-extrabold weights (`700` and `800`), evoking print titles, independent magazines, and street-level posters.
- **Body:** Open, relaxed line-heights on cream surfaces ensure sustained readability without eye fatigue.
- **Stickers & Microcopy:** `label-sticker` uses full uppercase transformations, heavy weights (`800`), and generous letter-spacing (`0.05em`) to balance small sizes on rotated badges and tactile tokens.

## Layout & Spacing
The layout system follows a deliberate rhythm between organized modular alignment and organic collage hierarchy:

- **Grid Architecture:** 
  - **Mobile (<768px):** 4-column fluid layout with `margin-mobile` (20px) and `gutter-mobile` (16px).
  - **Tablet (768px–1024px):** 8-column layout with 24px gutters.
  - **Desktop (>1024px):** 12-column fixed/fluid grid with a maximum content constraint of `1240px` centered, 24px gutters, and dynamic exterior margins.
- **Asymmetric Card Hierarchy:** Feeds avoid homogeneous card walls. Promoted experiences, neighborhood digests, and daily drops occupy staggered spans (e.g., alternating between 7-column and 5-column widths on desktop, or wide panoramic cards followed by two-column mini-posters).
- **Whitespace Rules:** Maintain generous cream borders around core groups to prevent visual noise. Generous padding (`space-lg` to `space-xl`) inside cards preserves a tactile, unhurried, boutique travel feel.

## Elevation & Depth
Depth is constructed through tactile, layered stationery techniques rather than synthetic, harsh drop shadows:

- **Level 0 (Canvas Base):** Warm Cream background (`#F2F0EA`), zero shadow.
- **Level 1 (Collage Cards & Panels):** Subtle ambient contact shadow.
  `box-shadow: 0 4px 16px -2px rgba(30, 30, 36, 0.04), 0 1px 3px 0 rgba(30, 30, 36, 0.02);`
  Surfaces are set on Milk Paper (`#FAFAF7`) with an ultra-fine structural border: `1px solid rgba(30, 30, 36, 0.06)`.
- **Level 2 (Floating Pills, Sticky Controls & Interactive Hover):**
  `box-shadow: 0 8px 24px -4px rgba(30, 30, 36, 0.08), 0 2px 6px -1px rgba(30, 30, 36, 0.03);`
  Used for elevated search toggles, floating map triggers, and active category filters.
- **Level 3 (Modal Sheets & Drawer Overlays):**
  `box-shadow: 0 20px 40px -8px rgba(30, 30, 36, 0.14);`
- **Tactile Sticker Depth:** Rotated labels (-2° to 3°) use crisp micro-offsets to simulate physical tape or stickers pressed onto cardstock:
  `box-shadow: 1px 2px 0px rgba(30, 30, 36, 0.12);`

## Shapes
The design system employs a soft, sculpted geometry:

- **Containers & Experience Cards:** Normalized at 16px to 24px (`rounded-lg` to `rounded-xl`), creating approachable, paper-weight corners.
- **Pill Chips & Tactile Buttons:** Full circular rounding (`9999px`) to create an ergonomic contrast with square or rectangular card imagery.
- **Sticker Badges:** Tight 6px to 8px radii to mirror physical die-cut adhesive badges.
- **Micro-Angled Elements:** Accent badges, tags, and promotional ribbons apply subtle CSS transforms (`transform: rotate(-1.5deg)` to `rotate(2.5deg)`) to disrupt robotic UI uniformity and evoke handcrafted zines.

## Components

### Buttons
- **Primary Action:** Solid Electric Rose (`#FF78AC`) with Charcoal text (`#1E1E24`). Pill-shaped (`rounded-full`), padded `14px 28px`. On hover, elevates with a soft spring transition (`scale(1.02)`) and activates `box-shadow: 0 6px 20px rgba(255, 120, 172, 0.35)`.
- **Secondary Action:** Coastal Teal (`#A8D5E3`) background with dark charcoal typography, or pure cream surface outlined with a crisp `1.5px solid #1E1E24`.
- **Ghost / Tertiary:** Transparent base with charcoal label and an animated hand-drawn underline on hover.

### Chips & Tactile Pills
- Interactive filter chips are rendered as pill-shaped tactile buttons.
- Inactive state: Cream or Milk background with a soft border (`1px solid rgba(30, 30, 36, 0.1)`).
- Active state: Charcoal (`#1E1E24`) background with Cream (`#F2F0EA`) text, or tinted pastel background (Teal or Rose) with an embedded active indicator dot.

### Sticker Badges & Match Tokens
- Compact badges positioned slightly overlapping card borders.
- Micro-rotations: Staggered dynamically across elements (`-2deg` to `+2.5deg`).
- Tone mapping: Sun Gold (`#FCD34D`) for staff selections and ratings; Electric Rose (`#FF78AC`) for match affinity percentages; Soft Sage (`#D1E7DD`) for live status ("Open until 11pm").

### Input Fields & Search
- Generously padded input fields (16px vertical, 20px horizontal) with roundedness between 16px and 20px.
- Background: Pure Milk (`#FAFAF7`) against Cream canvas (`#F2F0EA`).
- Border: `1.5px solid rgba(30, 30, 36, 0.08)`. Focus states shift border color to `#1E1E24` with a subtle outline glow of `#A8D5E3`.

### Experience Cards
- Asymmetric presentation: Prominent visual imagery framed with 16px border-radius, cushioned by generous internal card margins.
- Metadata: High-contrast display headlines followed by crisp, muted body tags and category badges.
- Live Indicator Dots: 8px glowing pulsing circles (Emerald/Soft Sage) alongside venue status to signify real-time local activity.

### Checkboxes & Radios
- Tactile rounded squares (8px radius for checkboxes) and circles (for radios) with a 2px charcoal perimeter.
- Checked state fills with Electric Rose (`#FF78AC`) and a crisp white/charcoal checkmark, triggering a slight scale punch animation.

## Stitch Visual References

The `/reference/Stitch/` directory contains the approved Stitch-generated visual references for the Nearby platform.

These references should be used to guide:
- visual composition
- layout hierarchy
- component placement
- interaction patterns
- card structure
- visual density
- responsive adaptation
- motion and tactile interaction feel

### Reference Screens

| File | Purpose |
|---|---|
| `nearby_recommendation_feed_connected` | Primary traveler discovery/feed reference. Use for the main recommendation experience, conversational input, constraint chips, recommendation cards, match badges, and adaptive re-ranking presentation. |
| `nearby_experience_detail` | Experience detail reference. Use for the experience hero, match explanation, timeline, host information, and reservation CTA. |
| `nearby_live_map_explorer` | Map reference. Use for map styling, live pins, walking-radius visualization, and selected-experience preview. |
| `nearby_booking_checkout` | Booking reference. Use for slot selection, attendee stepper, pricing summary, and confirmation CTA. |
| `nearby_booking_confirmed` | Booking/pass reference. Use for the confirmation state, digital pass, countdown, directions, and host connection. |
| `nearby_my_bookings` | Booking management reference. Use for active/upcoming booking cards, status tabs, and booking actions. |
| `nearby_provider_dashboard` | Provider/host reference. Use for provider controls, demand indicators, listing status, and host-side interactions. |
| `nearby_brand_logo` | Branding/logo reference only. This does not make the current visual name a permanent product name. |
   - Temporary prototype logo reference.
   - This logo is approved for the current prototype and may be used in the implementation.
   - The logo is NOT the final brand identity and must remain easy to replace later.
   - The final logo and branding will be defined separately.

### Reference Priority

The `nearby_recommendation_feed_connected` screen is the primary visual reference because it represents the core product experience.

The `nearby_experience_detail` and `nearby_provider_dashboard` references are the next priority for the MVP.

Other screens should be implemented according to the current milestone rather than being built merely because they exist in the Stitch reference set.

### Prototype Content Rule

Names, prices, locations, booking IDs, weather conditions, host names, ratings, times, and other values visible in the Stitch references are representative prototype content.

Do not hard-code these values into business logic unless explicitly required by the PRD or implementation requirements.

### Mobile-First Adaptation

The Stitch references may use desktop-oriented canvases.

They are visual references, not fixed viewport requirements.

The actual implementation must remain mobile-first:
- Design for phone width first.
- Preserve the visual hierarchy when adapting to smaller screens.
- Use responsive layouts rather than simply shrinking desktop layouts.
- Prevent horizontal overflow.
- Keep controls comfortable for touch interaction.
- Expand into tablet/desktop layouts only after the mobile experience is solid.

### Prototype Branding Rule

"Nearby" is the current working/prototype name.

The supplied Nearby logo may be used for the MVP prototype so the interface has a coherent brand presentation. However, both the product name and logo are provisional and must not be treated as permanently finalized branding.

Avoid tightly coupling application logic to the brand name or logo. Keep them centralized so they can be replaced later without restructuring the application.