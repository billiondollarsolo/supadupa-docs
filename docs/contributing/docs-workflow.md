---
title: Docs Workflow
description: How to update and review the Supadupa docs site.
---

# Docs Workflow

Public user and operator docs should live in this repository. Code-adjacent implementation notes can remain in the main `supadupa` repository when they are tightly coupled to source changes.

## Local Development

```bash
npm install
npm start
```

Build before review:

```bash
npm run check
```

## Content Rules

- Keep operational instructions copyable.
- Use warnings for destructive or security-sensitive steps.
- Keep MVP limitations visible.
- Link related docs at the end of task pages.
- Do not duplicate full public docs in the main repo long-term.

## Review Checklist

- Page has front matter.
- Links resolve.
- Commands are current.
- Screenshots have alt text.
- No secrets or private domains are present.
- `npm run check` passes.

## Related Docs

- [Screenshot workflow](./screenshot-workflow.md)
- [Release notes](./release-notes.md)
