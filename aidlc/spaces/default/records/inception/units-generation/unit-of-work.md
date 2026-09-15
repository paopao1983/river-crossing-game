# Unit of Work — River Crossing Puzzle Web App

## Units

| Unit ID | Name | Directory | Kind | Complexity | Deployment |
|---|---|---|---|---|---|
| U1 | river-crossing-puzzle | u1-river-crossing-puzzle | ui | M | Static site (single HTML page) |

---

## U1 — river-crossing-puzzle

**Description**: The complete river crossing puzzle web application — a single deployable static page implementing all game logic, rendering, and UI.

**Responsibilities**:
- Game board rendering (river, banks, characters, boat) — FR1
- Character selection and loading interaction — FR2
- Boat crossing trigger — FR2
- Constraint enforcement (Fox/Chicken, Chicken/Grain rules) — FR3
- Move counter display — FR4
- Win detection and win state display — FR5
- Play-again / reset — FR5.3

**Components included**: GameEngine, UIRenderer, MoveCounter

**Files**:
- `index.html` — page structure and game board markup
- `game.js` — GameEngine (GameState class, constraint logic, win detection)
- `ui.js` — UIRenderer (DOM rendering, event handling)
- `counter.js` — MoveCounter (move count display)
- `style.css` — visual styling

**Deployment model**: Standalone static site. No server required. Deployable to GitHub Pages, Netlify, or any static host.

**Complexity**: M — well-understood domain, small codebase, no integrations.

**Implementation notes**:
- Farmer must always be in the boat; boat cannot cross empty.
- Boat carries at most 1 passenger + Farmer.
- Invalid moves are silently blocked (no error message).
- Touch targets minimum 44×44px for mobile support (NFR4).
- Must run on latest 2 versions of Chrome, Firefox, Edge, Safari — desktop and mobile (NFR1).

## Assumptions & Open Questions

- [assumption] All three components (GameEngine, UIRenderer, MoveCounter) are built in a single construction pass.
- [assumption] Walking skeleton (Bolt 1) delivers a visible HTML page with static game board layout before game logic is added.
