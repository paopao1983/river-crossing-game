# Unit of Work — Dependency Map

## Dependency DAG

Single unit — no inter-unit dependencies.

```yaml
units:
  - name: river-crossing-puzzle
    kind: ui
    depends_on: []
```

## Integration Points

None — single unit with no external service dependencies.

## Parallel Development Opportunities

Not applicable — single unit, built sequentially in one pass.

## Assumptions & Open Questions

None.
