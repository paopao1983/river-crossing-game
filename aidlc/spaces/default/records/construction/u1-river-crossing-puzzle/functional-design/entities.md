# Entities — U1: river-crossing-puzzle

```yaml
entities:
  - name: GameState
    description: Singleton representing the complete state of one game session
    attributes:
      - name: boatSide
        type: enum
        required: true
        allowed_values: [left, right]
        default: left
      - name: moveCount
        type: integer
        required: true
        default: 0
        min: 0
      - name: selectedCharacter
        type: string|null
        required: false
        default: null
      - name: status
        type: enum
        required: true
        allowed_values: [playing, won]
        default: playing
    entity_constraints:
      - Each character has exactly one location at all times
    relationships: []

  - name: Character
    description: One of the four puzzle entities that must cross the river
    attributes:
      - name: id
        type: enum
        required: true
        unique: true
        allowed_values: [farmer, fox, chicken, grain]
      - name: location
        type: enum
        required: true
        allowed_values: [left, boat, right]
        default: left
    entity_constraints:
      - Exactly one Character with id=farmer must exist
      - At most one non-farmer Character may have location=boat at any time
    relationships:
      - entity: GameState
        owned_by: GameEngine
        relationship: GameState contains exactly four Character instances
```

## Entity Summary

| Entity | Description | Key Attributes |
|---|---|---|
| GameState | Singleton game session state | boatSide, moveCount, selectedCharacter, status |
| Character | One puzzle entity (farmer/fox/chicken/grain) | id, location (left/boat/right) |
