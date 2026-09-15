# Requirements Analysis Questions — River Crossing Puzzle Web App

## Sources
- [desc] Initial description: "Using AI-DLC let's build a web application to solve the river crossing puzzle."
- [scope] Workflow-selected scope: `mvp`.

---

## Q1. How does the user interact with the puzzle — what is the click model?

A. Click a character on the bank to select them, then click the boat to load them; click the boat to cross
B. Click a character to toggle them onto/off the boat; a separate "Cross" button sends the boat
C. Drag characters onto the boat; click "Cross" to send it
D. Agent's discretion — pick the most intuitive model
X. Other (please specify)

[Answer]: A. Click a character on the bank to select them, then click the boat to load them; click the boat to cross

---

## Q2. What happens when the user attempts an invalid move (e.g., leaving fox and chicken alone)?

A. The move is silently blocked — nothing happens
B. The move is blocked and a brief message explains why (e.g., "Fox would eat the chicken!")
C. The move is allowed but the game shows a "Game Over / You lost" state
D. Agent's discretion
X. Other (please specify)

[Answer]: A. The move is silently blocked — nothing happens

---

## Q3. What does the win state look like?

A. A simple text message: "You solved it!" with a play-again option
B. A more celebratory display (e.g., highlighted board, congratulations banner)
C. Agent's discretion — keep it simple
X. Other (please specify)

[Answer]: A. A simple text message: "You solved it!" with a play-again option

---

## Q4. Should the app track and display the number of moves the user has taken?

(Note: move counter was marked out-of-scope in Ideation — confirming that decision)

A. No — confirmed out of scope, do not include
B. Yes — include a simple move counter after all (overrides Ideation decision)
X. Other (please specify)

[Answer]: B. Yes — include a simple move counter after all (overrides Ideation decision)

---

## Q5. Browser and accessibility baseline?

A. Modern desktop browsers only (Chrome, Firefox, Edge, Safari — latest 2 versions)
B. Must also work on mobile browsers
C. Must meet WCAG 2.1 AA accessibility standards
D. A + C (desktop + accessible)
X. Other (please specify)

[Answer]: B. Must also work on mobile browsers

---

## Assumptions & Open Questions

- [assumption] The boat can carry at most 1 passenger in addition to the farmer.
- [assumption] The farmer must always operate the boat — it cannot cross empty.
- [assumption] Starting state: all characters on the left bank; goal: all on the right bank.
