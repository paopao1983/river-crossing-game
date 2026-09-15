# AI-DLC Process Summary — River Crossing Puzzle

This document consolidates all artifacts produced during the AI-DLC workflow for this project.

---

## Phase 1 — Ideation

### Problem Statement

There is no readily available, simple browser-based implementation of the classic Farmer, Fox, Chicken, and Grain river crossing puzzle that lets casual users play interactively in a browser without installing anything.

### Target Customer

General public / casual users. No technical background required.

### Scope

| Capability | Priority |
|---|---|
| Boat movement — load/unload characters and cross the river | Must-Have |
| Constraint enforcement — prevent dangerous unsupervised pairs | Must-Have |
| Win detection — success state when all reach the far bank | Must-Have |
| Animated boat/character transitions | Nice-to-Have (post-MVP) |

**Out of scope**: backend, user accounts, leaderboard, multiple puzzle variants, reveal solution, animated transitions.

### Go / No-Go

**GO.** Scope is clear, feasibility confirmed, no blockers.

---

## Phase 2 — Inception

### Requirements

**Functional**

| ID | Requirement |
|---|---|
| FR1.1 | Display game board: river, two banks, boat, four characters on left bank at start |
| FR1.2 | Board reflects current positions after each move |
| FR2.1 | User can click a character on the same bank as the boat to select it |
| FR2.2 | Selected character is visually highlighted |
| FR2.3 | Click boat to load selected character (max 1 passenger + Farmer) |
| FR2.4 | Click boat to cross — Farmer must always be aboard |
| FR2.5 | Characters unload onto destination bank on arrival |
| FR3.1 | Validate no dangerous pair is left unsupervised after every move |
| FR3.2 | Invalid moves are blocked — game state unchanged |
| FR4.1 | Display move counter showing total crossings |
| FR4.2 | Counter increments by 1 on each successful crossing |
| FR5.1 | Detect when all four characters are on the right bank |
| FR5.2 | Show "You solved it!" message with final move count |
| FR5.3 | Play-again button resets the game to initial state |

**Non-Functional**

| ID | Requirement |
|---|---|
| NFR1 | Runs on latest 2 versions of Chrome, Firefox, Edge, Safari — desktop and mobile |
| NFR2 | Deployable as a self-contained static bundle (HTML, CSS, JS) |
| NFR3 | Loads and is interactive within 3 seconds on broadband |
| NFR4 | All interactive elements touch-friendly (min 44×44px tap target) |

### Architecture Decisions

**ADR-001 — Vanilla HTML/CSS/JS, no build step**
Use plain HTML, CSS, and JavaScript. No framework, no bundler. Open `index.html` directly in a browser.
- ✅ Zero tooling setup, maximum portability
- ✅ No framework learning curve
- ❌ No type safety — mitigated by small, well-structured codebase

**ADR-002 — Dedicated GameState class**
A single `GameState` class owns all game state and exposes explicit mutation methods. Single source of truth.
- ✅ Clear API boundary between logic and UI
- ✅ Independently testable without DOM

**ADR-003 — Three-component decomposition**
`GameEngine` / `UIRenderer` / `MoveCounter` as separate files with distinct responsibilities.
- ✅ Each component has a single, clear concern
- ✅ MoveCounter can update without triggering a full board re-render

### Delivery Plan (Bolts)

**Bolt 1 — Walking Skeleton ⚡**
Static HTML/CSS shell — game board visible in browser, no JavaScript logic yet.
- Done when: `index.html` opens and shows the board correctly on desktop and mobile.

**Bolt 2 — Full Game 🎮**
Complete implementation: `game.js`, `ui.js`, `counter.js`, unit tests.
- Done when: all FR requirements pass, 17/17 unit tests pass, puzzle playable end-to-end.

---

## Phase 3 — Construction

### Business Rules

| ID | Rule | Category |
|---|---|---|
| BR1.1 | Farmer must always operate the boat | constraint |
| BR1.2 | Boat carries at most 1 passenger + Farmer | constraint |
| BR2.1 | Fox + Chicken unsupervised on same bank → invalid | constraint |
| BR2.2 | Chicken + Grain unsupervised on same bank → invalid | constraint |
| BR3.1 | Only characters on the boat's bank are selectable | validation |
| BR4.1 | Move counter increments by 1 on each successful crossing | calculation |
| BR5.1 | Win = all four characters on the right bank | constraint |

### Files Delivered

| File | Description |
|---|---|
| `index.html` | Page structure and game board markup |
| `style.css` | Full visual styling, responsive layout, feedback toast |
| `game.js` | GameEngine — GameState class, constraint logic, win detection |
| `counter.js` | MoveCounter — move count DOM display |
| `ui.js` | UIRenderer — DOM rendering, event handlers, win overlay |
| `game.test.js` | 17 unit tests (Node 18+ built-in test runner) |

### Test Results

| Suite | Tests | Result |
|---|---|---|
| Initial state | 2 | ✔ PASS |
| selectCharacter (BR3.1) | 4 | ✔ PASS |
| loadToBoat (BR1.2) | 2 | ✔ PASS |
| cross (BR1.1, BR2.1, BR2.2, BR4.1) | 4 | ✔ PASS |
| Win detection (BR5.1) | 1 | ✔ PASS |
| unloadFromBoat | 3 | ✔ PASS |
| Reset | 1 | ✔ PASS |
| **Total** | **17** | **✔ 17/17 PASS** |

---

## Post-MVP Changes

| Change | Description |
|---|---|
| Feedback toast | Invalid moves show a red message explaining why (e.g. "Fox would eat the Chicken!") |
| Unload from boat | Click boat with passenger → unloads back to bank |
| Direct passenger swap | Select new character → click boat → replaces passenger in one click |

---

## Optimal Solution

The puzzle is solvable in a minimum of **7 moves**:

| # | Action |
|---|---|
| 1 | Farmer + Chicken → right |
| 2 | Farmer alone ← left |
| 3 | Farmer + Fox → right |
| 4 | Farmer + Chicken ← left |
| 5 | Farmer + Grain → right |
| 6 | Farmer alone ← left |
| 7 | Farmer + Chicken → right |

---

## Deployment

Static site — no server required. Hosted on GitHub Pages:
[https://paopao1983.github.io/river-crossing-game](https://paopao1983.github.io/river-crossing-game)
