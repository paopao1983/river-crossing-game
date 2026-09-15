# Architecture Decision Records — River Crossing Puzzle Web App

## ADR-001: Vanilla HTML/CSS/JS with no build step

**Context**
The app is a simple single-page puzzle with no routing, no server, and no complex state management needs. The user confirmed no tech stack preference and chose vanilla JS explicitly.

**Decision**
Use plain HTML, CSS, and JavaScript. No framework, no bundler, no build step. The app is a single `index.html` with linked `.js` and `.css` files, openable directly in a browser.

**Consequences**
- Positive: Zero tooling setup, maximum portability, deployable anywhere static files are served.
- Positive: No framework learning curve for future maintainers.
- Negative: No type safety (no TypeScript). Mitigated by keeping the codebase small and well-structured.
- Negative: No hot-reload dev server. Acceptable for this scope.

**Alternatives Rejected**
- TypeScript + Vite: Adds build tooling overhead not justified for a 3-component app.
- React + TypeScript + Vite: Framework overhead not warranted for a single interactive page with simple state.

---

## ADR-002: Dedicated GameState class for state management

**Context**
Game state (character positions, boat position, move count, selected character, win status) needs to be mutated and queried by both the UIRenderer and MoveCounter. Two options were viable.

**Decision**
Use a dedicated `GameState` class with explicit methods (`selectCharacter()`, `loadToBoat()`, `cross()`, `reset()`, `isValid()`, `isWon()`). The class is the single source of truth for all game state.

**Consequences**
- Positive: Clear API boundary between game logic and UI — GameEngine is independently testable without DOM.
- Positive: State mutations are explicit and traceable.
- Negative: Slightly more code than plain module variables. Acceptable given the testability benefit.

**Alternatives Rejected**
- Module-level variables: Harder to test, no clear API boundary, state mutations scattered across the codebase.

---

## ADR-003: Three-component decomposition (GameEngine / UIRenderer / MoveCounter)

**Context**
The app needs game logic, rendering, and a move counter. The question was whether MoveCounter warrants its own component or should be folded into UIRenderer.

**Decision**
MoveCounter is a separate component. It has a distinct display concern and a distinct update trigger (incremented on crossing, reset on game reset) that is independent of the full board re-render.

**Consequences**
- Positive: UIRenderer does not need to know about move counting logic.
- Positive: MoveCounter can be updated without triggering a full board re-render.
- Negative: One extra file. Acceptable — the separation is clean and the overhead is minimal.

**Alternatives Rejected**
- Fold MoveCounter into UIRenderer: Simpler file count but mixes display concerns; harder to test move counting in isolation.
