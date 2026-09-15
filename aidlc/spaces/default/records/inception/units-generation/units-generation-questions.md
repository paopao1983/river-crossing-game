# Units Generation Questions — River Crossing Puzzle Web App

## Sources
- [desc] Initial description: "Using AI-DLC let's build a web application to solve the river crossing puzzle."
- [scope] Workflow-selected scope: `mvp`.

---

## Q1. How should the app be structured as files/units of work?

A. One single unit — everything in one pass (index.html + game.js + style.css)
B. Two units — game logic first (GameEngine), then UI (UIRenderer + MoveCounter + HTML/CSS)
C. Three units — one per component (GameEngine, UIRenderer, MoveCounter) built independently
D. Agent's discretion — pick the most practical split for a vanilla JS app
X. Other (please specify)

[Answer]: A. One single unit — everything in one pass (index.html + game.js + style.css)

---

## Q2. Should the units be built one at a time (sequentially) or can some be built in parallel?

A. Sequentially — one unit fully done before the next starts
B. Parallel where possible — independent units can be built at the same time
C. Agent's discretion
X. Other (please specify)

[Answer]: A. Sequentially — one unit fully done before the next starts

---

## Assumptions & Open Questions

- [assumption] The app is a single deployable unit (one static site), even if built in multiple passes.
- [assumption] MoveCounter depends on GameEngine (reads moveCount), so it cannot be built before GameEngine.
