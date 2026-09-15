# Frontend Components — U1: river-crossing-puzzle

## Component Hierarchy

```
App (index.html)
├── GameBoard
│   ├── Bank (left)
│   │   └── CharacterToken × n
│   ├── River
│   │   └── Boat
│   │       └── CharacterToken × n (passengers)
│   └── Bank (right)
│       └── CharacterToken × n
├── MoveCounter
└── WinOverlay (hidden until won)
    └── PlayAgainButton
```

## Component Specs

### GameBoard
- Renders the full game layout: left bank, river with boat, right bank
- Re-renders on every state change
- Reads: all Character locations, boatSide from GameState

### Bank (left / right)
- Displays all characters currently on that bank
- Characters on the same side as the boat are clickable
- Characters on the opposite side are dimmed / not clickable
- Props: side (left|right), characters[], boatSide, selectedCharacter

### Boat
- Displays the boat and any passengers currently aboard
- Clickable: if a character is selected → loadToBoat(); if no character selected → cross()
- Props: passengers[], boatSide

### CharacterToken
- Displays one character (Farmer, Fox, Chicken, Grain) with a label
- Highlighted state when selected
- Minimum tap target: 44×44px (NFR4)
- Props: character, isSelected, isClickable

### MoveCounter
- Displays "Moves: N" where N is the current moveCount
- Updates after each successful crossing

### WinOverlay
- Hidden during PLAYING state, visible during WON state
- Shows "You solved it!" and final move count
- Contains PlayAgainButton

### PlayAgainButton
- Triggers GameEngine.reset() and re-renders the board

## Interaction Flows

1. Click character on bank → selectCharacter(id) → re-render (highlight)
2. Click boat (character selected) → loadToBoat() → re-render
3. Click boat (no character selected) → cross() → validate → re-render → check win
4. Win detected → show WinOverlay
5. Click play-again → reset() → hide WinOverlay → re-render initial state

## Assumptions & Open Questions

- [assumption] No CSS framework — plain CSS with flexbox layout.
- [assumption] Characters represented as styled div elements with emoji labels (no image assets needed).
