---
title: Backups
description: Configure and review backup policies and targets in the Admin UI.
---

# Backups

The Backups views show project policy, storage target state, run history, and recoverability signals.

![Backups page showing configured policy and target status](/img/screenshots/actual/light/15-project-backups.png)

## What To Check

- Target exists and is reachable.
- Policy schedule is correct.
- Recent backup runs succeeded.
- WAL artifacts exist when expected.
- Restore has been tested against the intended target.

## Related Docs

- [Backups and recovery](../operations/backups-recovery.md)
- [Known issues](../operations/known-issues.md)
