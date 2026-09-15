# Unit of Work — Story Map

## FR-to-Unit Mapping

| Requirement | Description | Unit | Directory |
|---|---|---|---|
| FR1.1 | Game board rendering — initial state | U1 | u1-river-crossing-puzzle |
| FR1.2 | Board reflects current state after each move | U1 | u1-river-crossing-puzzle |
| FR2.1 | Click character to select | U1 | u1-river-crossing-puzzle |
| FR2.2 | Selected character visually distinguished | U1 | u1-river-crossing-puzzle |
| FR2.3 | Click boat to load selected character | U1 | u1-river-crossing-puzzle |
| FR2.4 | Click boat to cross river (Farmer always aboard) | U1 | u1-river-crossing-puzzle |
| FR2.5 | Characters unloaded on arrival at opposite bank | U1 | u1-river-crossing-puzzle |
| FR3.1 | Validate no dangerous unsupervised pair after each move | U1 | u1-river-crossing-puzzle |
| FR3.2 | Silently block invalid moves | U1 | u1-river-crossing-puzzle |
| FR4.1 | Display move counter | U1 | u1-river-crossing-puzzle |
| FR4.2 | Increment counter on each successful crossing | U1 | u1-river-crossing-puzzle |
| FR5.1 | Detect win condition | U1 | u1-river-crossing-puzzle |
| FR5.2 | Display "You solved it!" with final move count | U1 | u1-river-crossing-puzzle |
| FR5.3 | Play-again button resets game | U1 | u1-river-crossing-puzzle |

## Coverage Verification

All 14 FR sub-requirements assigned to U1. No gaps. No cross-cutting concerns (single unit).

## Implementation Order Within U1

1. GameEngine (GameState class, constraint logic, win detection) — FR3, FR4, FR5
2. UIRenderer (board rendering, event handling) — FR1, FR2
3. MoveCounter (display) — FR4
4. Win overlay + play-again — FR5.2, FR5.3

## Assumptions & Open Questions

None.
