# Team Practices — River Crossing Puzzle Web App

## Way of Working

We use GitHub Flow. Work happens on short-lived feature branches; each branch merges to `main` via a pull request. No squash requirement — merge commits are fine for this solo project.

## Walking Skeleton

We run a walking skeleton first. The first deliverable is a minimal working page with the game board visible in the browser — no game logic yet, just the structural shell proving the pieces connect. Game logic is added in subsequent bolts.

## Testing Posture

- **Methodology**: test-after
- **Ordering**: implement each component fully, then write and run that component's tests before moving to the next.
- Coverage target: happy-path floor per component; at least one test per must-have requirement (IB-1 through IB-5).
- Test types: unit tests for game logic (constraint enforcement, win detection); no E2E or integration tests required for this scope.

## Deployment

We deploy as a static site. Target platforms: GitHub Pages, Netlify, or equivalent. The app must be buildable as a self-contained static bundle with no server-side runtime.

## Code Style

Language-idiomatic defaults. Formatter and linter configuration follows the chosen stack's standard tooling (e.g., Prettier for JS/TS, ESLint for JS/TS). No project-wide rename rules beyond language conventions.
