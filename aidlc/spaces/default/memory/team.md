# Team-Level Rules

> This team's affirmed practices and corrections. Loaded after `org.md` as
> strict-additive guidance; contradictions with broader policy are rejected.
> Populated by the practices-discovery affirmation gate. Edit at the gate,
> not directly.

## Way of Working

We use GitHub Flow. Work happens on short-lived feature branches; each branch merges to `main` via a pull request. No squash requirement for this solo project.

## Walking Skeleton

We run a walking skeleton first. The first deliverable is a minimal working page with the game board visible — no game logic yet, just the structural shell. Game logic is added in subsequent bolts.

## Testing Posture

- **Methodology**: test-after
- **Ordering**: implement each component fully, then write and run that component's tests before moving to the next.
- Coverage: happy-path floor per component; at least one test per must-have requirement.
- Test types: unit tests for game logic; no E2E or integration tests required.

## Change Control

<!-- Affirmed by the team. Mode: strict or relaxed. Strict here holds for every intent and cannot be changed from chat. -->

## Deployment

We deploy as a static site. Target: GitHub Pages, Netlify, or equivalent. No server-side runtime.

## Code Style

Language-idiomatic defaults. Formatter and linter follow the chosen stack's standard tooling (Prettier + ESLint for JS/TS). No custom project-wide conventions.

## Forbidden

<!-- Team-specific forbidden patterns -->

## Mandated

<!-- Team-specific mandates -->

## Corrections

<!-- Self-learning loop appends here. -->
