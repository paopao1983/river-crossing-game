# Domain Design Questions — River Crossing Puzzle Web App

## Sources
- [desc] Initial description: "Using AI-DLC let's build a web application to solve the river crossing puzzle."
- [scope] Workflow-selected scope: `mvp`.

---

## Q1. Tech stack — which should we use for this frontend app?

A. Vanilla HTML + CSS + JavaScript (no build step, open index.html directly)
B. TypeScript + Vite (modern build tooling, type safety, fast dev server)
C. React + TypeScript + Vite (component-based UI, good for interactive state)
D. Agent's discretion — pick what best fits a simple interactive puzzle
X. Other (please specify)

[Answer]: A. Vanilla HTML + CSS + JavaScript (no build step, open index.html directly)

---

## Q2. How should game state be managed?

A. Simple module-level variables / plain JS object (no framework state)
B. A dedicated state class/object with methods (e.g., GameState with move(), validate(), etc.)
C. Agent's discretion
X. Other (please specify)

[Answer]: B. A dedicated state class/object with methods (e.g., GameState with move(), validate(), etc.)

---

## Assumptions & Open Questions

- [assumption] The app is a single HTML page — no routing needed.
- [assumption] All game logic (constraint rules, win detection) lives in a separate module from the UI rendering code.
