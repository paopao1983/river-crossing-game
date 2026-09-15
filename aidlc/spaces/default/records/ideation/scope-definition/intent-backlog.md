# Intent Backlog — River Crossing Puzzle Web App

## Must-Have (MVP)

| ID | Capability | Description | Source |
|---|---|---|---|
| IB-1 | Game board rendering | Display the river, two banks, characters, and boat in their current positions | [Q1] |
| IB-2 | Character selection & loading | User clicks a character to load them onto the boat (max 1 passenger + farmer) | [Q1] |
| IB-3 | Boat crossing | User triggers the boat to cross the river | [Q1] |
| IB-4 | Constraint enforcement | After each move, validate no dangerous pair is left unsupervised on either bank; block or undo invalid states | [Q1] |
| IB-5 | Win detection | Detect when all four characters are on the destination bank and show a success state | [Q1] |

## Nice-to-Have (Post-MVP)

| ID | Capability | Description | Source |
|---|---|---|---|
| IB-6 | Animated transitions | Smooth animation of the boat and characters moving across the river | [Q2] |

## Explicitly Excluded

| Capability | Source |
|---|---|
| Move counter | [Q1] |
| Reveal Solution walkthrough | [Q1] |
| Invalid move feedback messages | [Q1] |
| Reset button | [Q2] |
| Mobile-responsive layout | [Q2] |
| Backend / accounts / leaderboard | [scope] |

## Assumptions & Open Questions

- [assumption] IB-2 assumes the farmer must always be in the boat (cannot send the boat across empty).
- [assumption] Constraint rules: Fox eats Chicken if unsupervised; Chicken eats Grain if unsupervised; Farmer supervises any pair.
