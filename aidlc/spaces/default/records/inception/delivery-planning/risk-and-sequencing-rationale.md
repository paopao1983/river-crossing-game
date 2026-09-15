# Risk & Sequencing Rationale — River Crossing Puzzle Web App

## Sequencing Approach

Walking-skeleton-first. Bolt 1 delivers the static HTML/CSS shell; Bolt 2 delivers the complete game logic and UI wiring.

## Rationale

| Factor | Assessment |
|---|---|
| Technical risk | Low — vanilla JS, well-understood puzzle algorithm, no integrations |
| Value delivery | Bolt 2 delivers all user value; Bolt 1 is the structural foundation |
| Walking skeleton | Affirmed team practice — always build the shell first to prove the page loads and the layout works before adding logic |
| Dependency | Bolt 2 depends on Bolt 1's HTML structure (JS selects DOM elements by ID/class) |

## Sequencing Decision

Bolt 1 before Bolt 2 is both topologically required (JS depends on HTML structure) and aligned with the affirmed walking-skeleton practice. No deviation from topological order.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Constraint logic edge cases missed | Low | Medium | Unit tests for GameEngine cover all dangerous pairs and boundary conditions |
| Mobile touch targets too small | Low | Low | NFR4 mandates 44×44px minimum — verified in Bolt 2 DoD |

## Assumptions & Open Questions

None.
