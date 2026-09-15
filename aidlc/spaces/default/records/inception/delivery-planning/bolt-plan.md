# Bolt Plan — River Crossing Puzzle Web App

A Bolt is one complete build pass over a piece of the work, ending in something that runs and can be reviewed.

---

## Bolt 1 — Walking Skeleton ⚡

**Units**: U1 (river-crossing-puzzle) — structural shell only

**Walking Skeleton**: Yes. This Bolt proves the page loads in a browser, the game board layout is visible, and the static structure is in place before any game logic is added.

**Scope**:
- `index.html` — full page structure, game board markup (river, left bank, right bank, boat, character placeholders)
- `style.css` — layout and visual styling for all game elements
- No JavaScript game logic — characters are static, nothing is interactive yet

**Definition of Done**:
- Opening `index.html` in a browser shows the game board with the river, two banks, boat, and all four characters (Farmer, Fox, Chicken, Grain) in their starting positions on the left bank
- The layout is clean and readable on both desktop and mobile viewports
- No JavaScript errors in the browser console

**Confidence Hypothesis**: The HTML/CSS structure correctly represents the game board and is responsive enough for both desktop and mobile before any logic is written.

**Expected Demo**: Open `index.html` in a browser — see the static game board.

---

## Bolt 2 — Full Game 🎮

**Units**: U1 (river-crossing-puzzle) — complete implementation

**Walking Skeleton**: No — builds on Bolt 1's structure.

**Scope**:
- `game.js` — GameEngine: GameState class, selectCharacter(), loadToBoat(), cross(), reset(), isValid(), isWon(), move counter
- `ui.js` — UIRenderer: DOM rendering, click event handlers, board re-render after each move, win overlay
- `counter.js` — MoveCounter: move count display, reset on play-again
- Wire all JS to the HTML from Bolt 1
- Unit tests for GameEngine (constraint logic, win detection, move counter)

**Definition of Done**:
- All 14 FR sub-requirements (FR1.1–FR5.3) pass manual verification
- Constraint enforcement correctly blocks all invalid moves (Fox+Chicken, Chicken+Grain unsupervised)
- Win state displays "You solved it!" with final move count and play-again button
- Move counter increments on each successful crossing
- Unit tests for GameEngine pass (happy path + at least 2 edge cases per requirement)
- App runs on Chrome, Firefox, Edge, Safari (latest 2 versions) — desktop and mobile

**Confidence Hypothesis**: The complete puzzle is playable end-to-end with correct constraint enforcement and win detection.

**Expected Demo**: Play the puzzle to completion in the browser — all moves enforced, win state displayed.

---

## Assumptions & Open Questions

- [assumption] Bolt 1 is gated — user approves before Bolt 2 begins (per affirmed walking skeleton practice).
- [assumption] Both Bolts executed by the AI developer agent (solo project).
