# Intent Capture Questions — River Crossing Puzzle Web App

## Sources
- [desc] Initial description: "Using AI-DLC let's build a web application to solve the river crossing puzzle."
- [scope] Workflow-selected scope: `mvp`.

---

## Q1. What specific river crossing puzzle variant are we building?

The classic river crossing puzzle has several well-known variants. Which one (or ones) should this app cover?

A. The classic Farmer, Fox, Chicken, and Grain puzzle (one boat, one passenger at a time, no unsupervised dangerous pairs)
B. The Missionaries and Cannibals puzzle (groups crossing, balance constraints)
C. A generic/configurable puzzle engine where the rules can be customized
D. Multiple built-in puzzles the user can choose from
E. A different specific variant (please describe)
X. Other (please specify)

[Answer]: A. The classic Farmer, Fox, Chicken, and Grain puzzle

---

## Q2. What is the primary goal of the application — playing or learning?

A. The user plays the puzzle interactively (drag/click to move characters across the river)
B. The app shows/teaches the solution step-by-step (educational/solver mode)
C. Both — the user can try it themselves and also reveal the solution
D. An AI solver that finds and animates the optimal solution automatically
X. Other (please specify)

[Answer]: C. Both — the user can try it themselves and also reveal the solution

---

## Q3. Who is the target audience?

A. General public / casual users (anyone curious about the puzzle)
B. Students / educational context (classroom, homework aid)
C. Developers / technical users exploring AI/algorithm demos
D. Children (simplified UI, guided experience)
X. Other (please specify)

[Answer]: A. General public / casual users

---

## Q4. What does success look like for this project?

A. A working, playable puzzle in the browser — the puzzle is solvable and fun
B. A polished, shareable app (good visuals, mobile-friendly, deployable URL)
C. A demonstration of an AI/algorithm solving the puzzle (technical showcase)
D. A learning tool with explanations of why each move is valid or invalid
X. Other (please specify)

[Answer]: A. A working, playable puzzle in the browser — the puzzle is solvable and fun

---

## Q5. What is the scope of the MVP — what is explicitly out of scope?

A. Single puzzle only, no accounts, no backend — pure frontend
B. Single puzzle with a score/move counter, still no backend
C. Multiple puzzles with a selection screen, still no backend
D. Needs a backend (e.g., leaderboard, saved progress, user accounts)
X. Other (please specify)

[Answer]: B. Single puzzle with a score/move counter, still no backend

---

## Q6. Are there any technology preferences or constraints?

A. No preference — use whatever fits best
B. Plain HTML/CSS/JavaScript only (no frameworks)
C. A specific frontend framework (React, Vue, Svelte — please specify in X)
D. Must be deployable as a static site (GitHub Pages, S3, Netlify, etc.)
X. Other (please specify)

[Answer]: A. No preference — use whatever fits best

---

## Q7. Is there a visual style or interaction model in mind?

A. Simple and functional — clean UI, no elaborate graphics
B. Illustrated / cartoon style with character images
C. Animated transitions when characters move
D. No strong preference — agent's discretion
X. Other (please specify)

[Answer]: A. Simple and functional — clean UI, no elaborate graphics

---

## Assumptions & Open Questions

- [assumption] The workflow-selected scope is `mvp`, implying a Standard depth, no backend required unless confirmed otherwise.
- [assumption] "River crossing puzzle" refers to the classic Farmer/Fox/Chicken/Grain variant unless the user specifies otherwise.
- [assumption] This is a greenfield project with no existing codebase.
