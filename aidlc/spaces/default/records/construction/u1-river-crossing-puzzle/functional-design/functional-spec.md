# Functional Spec — U1: river-crossing-puzzle

## Interaction Workflows

### WF1 — Select Character
1. User clicks a character on the current bank (same side as the boat)
2. System highlights the selected character
3. If user clicks the same character again, deselect it
4. Only one character may be selected at a time
5. Characters on the opposite bank are not clickable

### WF2 — Load Character onto Boat
1. User clicks the boat while a character is selected
2. System checks: boat has capacity (max 1 passenger + Farmer)
3. If capacity available: character moves to boat, selection cleared
4. If boat full: action is silently blocked

### WF3 — Cross the River
1. User clicks the boat (no character selected, or after loading)
2. System checks: Farmer is on the boat
3. If Farmer not on boat: action is silently blocked
4. System validates: would the crossing leave a dangerous pair unsupervised on the departure bank?
   - Dangerous pairs: Fox + Chicken, Chicken + Grain (without Farmer)
5. If invalid: action is silently blocked
6. If valid: boat and all aboard move to the opposite bank
7. Move counter increments by 1
8. Board re-renders to reflect new positions
9. System checks win condition (WF5)

### WF4 — Invalid Move (Silent Block)
1. User attempts an action that would violate a constraint
2. System does nothing — game state unchanged, no message shown

### WF5 — Win Detection
1. After each crossing, system checks if all four characters (Farmer, Fox, Chicken, Grain) are on the right bank
2. If yes: win overlay appears showing "You solved it!" and the final move count
3. Play-again button is shown

### WF6 — Play Again
1. User clicks the play-again button on the win overlay
2. System resets all characters to the left bank, boat to the left bank, move counter to 0
3. Win overlay is hidden
4. Board re-renders to initial state

---

## State Machine — Game Status

```
PLAYING --> (all on right bank) --> WON
WON --> (play-again clicked) --> PLAYING
```

## State Machine — Character Location

Each character is always in exactly one of: `left-bank`, `boat`, `right-bank`.

Initial state: all characters on `left-bank`, boat on `left-bank`.

---

## Screen / Component States

### Game Board (PLAYING state)
- Left bank: shows characters currently there
- River: shows boat on current side with any passengers
- Right bank: shows characters currently there
- Move counter: shows current count
- Characters on same bank as boat: clickable
- Characters on opposite bank: not clickable
- Selected character: visually highlighted

### Win Overlay (WON state)
- Message: "You solved it!"
- Final move count displayed
- Play-again button

---

## Assumptions & Open Questions

- [assumption] The Farmer is always the boat operator — selecting the Farmer loads them as the operator, not as a passenger.
- [assumption] The boat can cross with only the Farmer aboard (no passenger required).
