# Scope Document — River Crossing Puzzle Web App

## In Scope

| Capability | Priority | Source |
|---|---|---|
| Boat movement — click to load/unload characters onto the boat and cross the river | Must-Have | [Q1] |
| Constraint enforcement — prevent moves that leave dangerous pairs unsupervised | Must-Have | [Q1] |
| Win detection — detect and celebrate when all characters reach the far bank | Must-Have | [Q1] |
| Animated boat/character transitions | Nice-to-Have | [Q2] |

## Out of Scope

| Capability | Reason | Source |
|---|---|---|
| Move counter | Not selected as must-have | [Q1] |
| Reveal Solution / step-by-step walkthrough | Not selected as must-have | [Q1] |
| Invalid move feedback messages | Not selected as must-have | [Q1] |
| Reset / Start Over button | Not selected as nice-to-have | [Q2] |
| Mobile-responsive layout | Not selected as nice-to-have | [Q2] |
| Backend, user accounts, leaderboard | Pure frontend MVP | [scope] |
| Multiple puzzle variants | Single puzzle only | [scope] |

## Scope Boundary

A single-page, pure-frontend web application implementing the classic Farmer, Fox, Chicken, and Grain river crossing puzzle. The app is playable in any modern desktop browser with no installation or backend required. [desc] [Q1] [scope]

## Assumptions & Open Questions

- [assumption] "Win detection" includes a visible success state (e.g., a congratulations message).
- [assumption] Animations are a stretch goal — the app ships without them if they add significant complexity.
