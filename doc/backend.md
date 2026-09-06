# Backend Plan

## Purpose

Define the backend/data approach required to implement the MVP described in `prd.md`.

The backend should be lightweight, understandable, deterministic, and sufficient to demonstrate the intelligent recommendation loop.

Do not introduce production-scale complexity unless it is required by the MVP.

## Core Backend Responsibilities

The backend/data layer should support:

- experience data
- traveler constraints
- recommendation scoring
- explainable recommendation reasons
- adaptive re-ranking
- minimal provider listing creation
- availability information needed by the MVP

## Experience Data

Each experience should contain, at minimum:

```text
id
name
description
category
tags[]
location
price
durationMinutes
rating
openingHours
availableSlots[]
capacity
accessibility
image
providerId
```

Useful accessibility fields may include:

```text
wheelchair
kidFriendly
```

Additional fields are allowed when they support the approved MVP without changing its scope.

## Traveler Input

The recommendation request should support:

```text
interests[]
location
availableMinutes
budget
groupType
accessibilityNeeds[]
```

Location may be manual or simulated for the MVP.

## Recommendation Engine

The recommendation engine is the central intelligence layer.

A rules-based weighted scoring system is appropriate for the MVP.

Suggested structure:

```text
overallScore =
  interestMatch * 0.35
+ timeFit       * 0.25
+ budgetFit     * 0.20
+ distanceFit   * 0.15
+ ratingFit     * 0.05
```

These weights can be tuned during development, but the concept must remain constraint-aware.

The recommendation engine should:

1. evaluate each experience
2. apply important constraints
3. calculate normalized fit scores
4. calculate the combined score
5. generate explanation reasons
6. rank the experiences
7. return the ranked results

## Scoring Rules

### Interest Match

Compare traveler interests with experience tags.

Use simple tag overlap for the MVP.

### Time Fit

Prefer experiences whose duration fits within the traveler's available time.

```text
durationMinutes <= availableMinutes
```

Experiences that cannot reasonably fit should be strongly penalized or excluded where appropriate.

### Budget Fit

Prefer experiences that fit within the traveler's budget.

```text
price <= budget
```

Budget mismatches should significantly reduce recommendation quality.

### Distance Fit

Use location information to calculate or approximate distance.

Haversine/straight-line distance is acceptable for the MVP when realistic routing is unavailable.

### Rating Fit

Rating should be supportive, not dominant.

High ratings must not overpower severe mismatches in budget, time, or distance.

## Explainable Results

Every recommendation should expose reasons based on actual input/data.

Examples:

```text
Fits your 2-hour window
₹500 under your budget
1.2 km away
Matches your food + culture interests
```

Never display a reason that is unsupported by the actual data or user input.

## Adaptive Re-ranking

The backend must support live recalculation when the user changes constraints.

Example:

```text
Initial
Budget = ₹2000
Time = 120 minutes

Changed
Budget = ₹800

Action
Recalculate scores
Re-rank results
Return updated explanations
```

The frontend may animate the visual transition, but the backend logic should remain deterministic and explainable.

## Provider MVP

Provider functionality is intentionally minimal.

The provider side needs enough support to demonstrate that a provider can create an experience listing.

Minimum listing information:

```text
name
description
category
price
duration
availability
location
```

A new listing should be able to enter the experience dataset used by recommendations.

Do not build full provider analytics, real payment flows, notification infrastructure, or complex promotion systems for the MVP.

## Mock Dataset

Use approximately 20–30 seeded experiences covering categories such as:

- food
- culture
- adventure
- nightlife
- shopping

The dataset should vary meaningfully in:

- price
- duration
- rating
- location
- availability
- accessibility
- opening state

The purpose is to make the intelligence visible during the demo.

## API Shape

A lightweight implementation may use endpoints such as:

### `GET /experiences`

Returns seeded or currently available experiences.

### `POST /recommendations`

Accepts traveler constraints and returns ranked recommendations with match explanations.

Example request:

```json
{
  "interests": ["food", "culture"],
  "location": {
    "lat": 19.0607,
    "lng": 72.8362
  },
  "availableMinutes": 120,
  "budget": 2000,
  "groupType": "solo",
  "accessibilityNeeds": []
}
```

Example response:

```json
{
  "results": [
    {
      "experienceId": "exp-001",
      "matchPercent": 94,
      "reasons": [
        "Fits your 2-hour window",
        "Matches your food interest",
        "₹500 under budget"
      ]
    }
  ]
}
```

### `POST /providers/experiences`

Creates a minimal provider listing.

The exact route names may change to fit the chosen framework, but the responsibilities should remain.

## Engineering Rules

- Keep recommendation calculations pure and testable.
- Keep recommendation logic separate from API transport code.
- Keep data models consistent.
- Avoid coupling business logic to UI components.
- Avoid unnecessary AI/ML infrastructure.
- Keep the backend simple enough to demonstrate during a hackathon.
