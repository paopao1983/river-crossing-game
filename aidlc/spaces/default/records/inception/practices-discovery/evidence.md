# Evidence — Practices Discovery

## Sources Inspected

- Greenfield project — no existing codebase, git history, or CI configuration to inspect.
- `aidlc/spaces/default/memory/org.md` — used as default-practice source for all five areas.
- Intent statement and scope document from Ideation phase.

## Interview Decisions

| Area | Decision | Rationale |
|---|---|---|
| Way of Working | GitHub Flow | User preference over org default (trunk-based) |
| Walking Skeleton | Yes — build skeleton first | User confirmed; minimal game board page before logic |
| Testing Posture | Test-after | User confirmed; implement then test |
| Deployment | Static site (GitHub Pages / Netlify) | Matches pure-frontend MVP scope |
| Code Style | Language-idiomatic defaults | No custom conventions needed for this project |

## Unresolved Uncertainty

- Specific static site host (GitHub Pages vs Netlify vs other) not yet decided — deferred to deployment stage.
- Tech stack not yet locked — agent's discretion confirmed in Intent Capture; will be decided in Requirements Analysis / Domain Design.
