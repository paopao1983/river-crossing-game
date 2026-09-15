# Business Rules — U1: river-crossing-puzzle

```yaml
rules:
  - id: BR1.1
    statement: The Farmer must always operate the boat
    category: constraint
    applies_to: GameState, Character
    trigger: User attempts to cross the river
    logic: IF Farmer.location != boat THEN block the crossing
    violation_behaviour: Silent block — game state unchanged
    source: FR2.4

  - id: BR1.2
    statement: The boat carries at most one passenger in addition to the Farmer
    category: constraint
    applies_to: Character
    trigger: User attempts to load a character onto the boat
    logic: IF count(characters where location=boat AND id!=farmer) >= 1 THEN block the load
    violation_behaviour: Silent block — game state unchanged
    source: FR2.3

  - id: BR2.1
    statement: Fox and Chicken must not be left unsupervised on the same bank
    category: constraint
    applies_to: Character
    trigger: After any move (load, unload, or crossing)
    logic: IF fox.location == chicken.location AND farmer.location != fox.location THEN the state is invalid
    violation_behaviour: Silent block — move that would cause this state is not executed
    source: FR3.1

  - id: BR2.2
    statement: Chicken and Grain must not be left unsupervised on the same bank
    category: constraint
    applies_to: Character
    trigger: After any move (load, unload, or crossing)
    logic: IF chicken.location == grain.location AND farmer.location != chicken.location THEN the state is invalid
    violation_behaviour: Silent block — move that would cause this state is not executed
    source: FR3.1

  - id: BR3.1
    statement: Only characters on the same bank as the boat may be selected
    category: validation
    applies_to: Character
    trigger: User clicks a character
    logic: IF character.location != boatSide THEN block the selection
    violation_behaviour: Silent block — selection not registered
    source: FR2.1

  - id: BR4.1
    statement: Move counter increments by one on each successful crossing
    category: calculation
    applies_to: GameState
    trigger: Boat successfully crosses the river
    logic: moveCount = moveCount + 1
    violation_behaviour: N/A
    source: FR4.2

  - id: BR5.1
    statement: Win condition is all four characters on the right bank
    category: constraint
    applies_to: GameState, Character
    trigger: After each successful crossing
    logic: IF farmer.location == right AND fox.location == right AND chicken.location == right AND grain.location == right THEN status = won
    violation_behaviour: N/A
    source: FR5.1
```

## Rules Summary

| ID | Statement | Category | Source |
|---|---|---|---|
| BR1.1 | Farmer must always operate the boat | constraint | FR2.4 |
| BR1.2 | Boat carries at most 1 passenger + Farmer | constraint | FR2.3 |
| BR2.1 | Fox + Chicken unsupervised → invalid | constraint | FR3.1 |
| BR2.2 | Chicken + Grain unsupervised → invalid | constraint | FR3.1 |
| BR3.1 | Only characters on boat's bank are selectable | validation | FR2.1 |
| BR4.1 | Move counter increments on each crossing | calculation | FR4.2 |
| BR5.1 | Win = all four characters on right bank | constraint | FR5.1 |
