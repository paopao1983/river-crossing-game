# Requirements — River Crossing Puzzle Web App

## Intent Analysis

Build a browser-based, pure-frontend implementation of the classic Farmer, Fox, Chicken, and Grain river crossing puzzle. The app must be playable by casual users on both desktop and mobile, track the number of moves taken, and show a win state when the puzzle is solved. No backend, no accounts, no server-side runtime. [desc] [scope]

---

## Functional Requirements

### FR1 — Game Board

**FR1.1** The app shall display a game board showing: a river in the centre, a left bank and a right bank, the boat (initially on the left bank), and all four characters (Farmer, Fox, Chicken, Grain) positioned on the left bank at game start. [Q1]

**FR1.2** The board shall reflect the current position of every character and the boat after each move. [Q1]

### FR2 — Character Interaction

**FR2.1** The user shall be able to click a character on a bank to select them. Only characters on the same bank as the boat may be selected. [Q1]

**FR2.2** A selected character shall be visually distinguished (e.g., highlighted). [Q1]

**FR2.3** The user shall be able to click the boat to load the currently selected character onto it. The boat may carry at most one passenger in addition to the Farmer. [Q1]

**FR2.4** The user shall be able to click the boat to send it across the river. The Farmer must always be on the boat when it crosses — the boat cannot cross empty. [Q1]

**FR2.5** When the boat arrives at the opposite bank, all characters on the boat are unloaded onto that bank. [Q1]

### FR3 — Constraint Enforcement

**FR3.1** After every move, the app shall validate that no dangerous pair is left unsupervised on either bank. Dangerous pairs are: Fox + Chicken (Fox eats Chicken), Chicken + Grain (Chicken eats Grain). The Farmer supervises any pair on the same bank. [Q2]

**FR3.2** If a proposed move would result in a dangerous unsupervised pair, the move shall be silently blocked — the game state shall not change. [Q2]

### FR4 — Move Counter

**FR4.1** The app shall display a move counter showing the total number of boat crossings made by the user. [Q4]

**FR4.2** The counter shall increment by one each time the boat successfully crosses the river. [Q4]

### FR5 — Win Detection

**FR5.1** The app shall detect when all four characters (Farmer, Fox, Chicken, Grain) are on the right bank. [Q3]

**FR5.2** Upon win detection, the app shall display a "You solved it!" message and the final move count. [Q3]

**FR5.3** The win state shall include a play-again option that resets the game to its initial state. [Q3]

---

## Non-Functional Requirements

**NFR1 — Browser Compatibility**: The app shall run correctly on the latest 2 versions of Chrome, Firefox, Edge, Safari on both desktop and mobile. [Q5]

**NFR2 — Static Deployment**: The app shall be deployable as a self-contained static bundle (HTML, CSS, JS) with no server-side runtime. [scope] [team-practices]

**NFR3 — Performance**: The app shall load and be interactive within 3 seconds on a standard broadband connection. [scope]

**NFR4 — Usability**: All interactive elements shall be touch-friendly (minimum 44×44px tap target) to support mobile users. [Q5]

---

## Constraints

- Pure frontend — no backend, no database, no server-side runtime. [scope]
- No user accounts, authentication, or persistent storage. [scope]
- Single puzzle variant only (Farmer, Fox, Chicken, Grain). [scope]

---

## Assumptions

- The Farmer must always operate the boat; the boat cannot cross empty.
- The boat carries at most 1 passenger (+ the Farmer).
- Starting state: all characters on the left bank. Goal: all characters on the right bank.
- "Move" is defined as one boat crossing (one direction).

---

## Out of Scope

- Reveal Solution / step-by-step walkthrough
- Invalid move feedback messages
- Reset / Start Over button (play-again on win state covers restart)
- Animated transitions (nice-to-have, post-MVP)
- Multiple puzzle variants
- Leaderboard, scoring beyond move count, user accounts

---

## Open Questions

- Specific static hosting target (GitHub Pages vs Netlify) — deferred to deployment stage.
- Tech stack selection — deferred to Domain Design.
