# Scope Definition Questions — River Crossing Puzzle Web App

## Sources
- [desc] Initial description: "Using AI-DLC let's build a web application to solve the river crossing puzzle."
- [scope] Workflow-selected scope: `mvp`.
- [memory:M1] `aidlc/spaces/default/memory/org.md#Way of Working`: "We use trunk-based development."

---

## Q1. What is the must-have minimum for the app to be considered done?

A. Puzzle is playable: boat moves, constraint enforcement, win detection
B. A + move counter displayed during play
C. A + B + "Reveal Solution" step-by-step walkthrough
D. A + B + C + invalid move feedback (e.g., a message explaining why a move is not allowed)
X. Other (please specify)

[Answer]: A. Puzzle is playable: boat moves, constraint enforcement, win detection

---

## Q2. Which of these would you consider nice-to-have (not blocking launch)?

(select all that apply)

A. Animated boat/character transitions
B. "Reset" / "Start Over" button
C. Move counter showing optimal move count for comparison
D. Responsive / mobile-friendly layout
E. None of the above — keep it strictly minimal
X. Other (please specify)

[Answer]: A. Animated boat/character transitions

---

## Q3. Is there a hard deadline or time constraint for this project?

A. No deadline — ship when it's ready
B. I want it done in this session / today
C. Within a few days
D. Specific date (please specify in X)
X. Other (please specify)

[Answer]: A. No deadline — ship when it's ready

---

## Assumptions & Open Questions

- [assumption] "Reveal Solution" is Must-Have based on Q2 answer from Intent Capture (mode = both play and learn).
- [assumption] No hard deadline unless confirmed otherwise.
