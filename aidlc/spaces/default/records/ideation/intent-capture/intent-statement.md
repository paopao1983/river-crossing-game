# Intent Statement — River Crossing Puzzle Web App

## Problem Statement

There is no readily available, simple browser-based implementation of the classic Farmer, Fox, Chicken, and Grain river crossing puzzle that lets casual users both play interactively and learn the solution. [desc] [Q1] [Q2]

## Target Customer

General public / casual users — anyone curious about the puzzle who wants to play it in a browser without installing anything. No technical background required. [Q3]

## Success Metrics

- The puzzle is fully playable in the browser: all valid and invalid moves are enforced correctly. [Q4] [Q5]
- Users can attempt the puzzle themselves and, when stuck, reveal the step-by-step solution. [Q2]
- A move counter tracks the number of moves taken. [Q5]
- The app runs as a pure frontend with no backend dependency. [Q5]

## Initiative Trigger

The user wants to build a concrete, working web application using the AI-DLC workflow as the development process. [desc]

## Initial Scope Signal

- **Workflow-selected scope**: `mvp` [scope]
- **User-confirmed product boundary**: Single puzzle (Farmer, Fox, Chicken, Grain), move counter, pure frontend, no backend, no user accounts, no multiple puzzle selection. [Q1] [Q5]

## Assumptions & Open Questions

- [assumption] "Reveal solution" means a step-by-step walkthrough of one valid solution path, not an exhaustive solver showing all paths.
- [assumption] The move counter tracks total boat trips made, not an optimal-move comparison.
- [assumption] No specific deployment target was confirmed; the app will be buildable as a static site by default.
