---
title: Upgrades
description: Upgrade guardrails for Supadupa projects and platform changes.
---

# Upgrades

Supadupa tracks stack releases and project upgrade guardrails. Treat upgrades as operational changes that require backup review and rollback planning.

## Before Upgrading

- Confirm the project is healthy.
- Confirm a recent off-host backup exists.
- Review known issues for the target version.
- Verify enough disk and memory headroom.
- Capture current project route and service health.

## Upgrade Flow

1. Select the target stack version.
2. Confirm guardrail checks.
3. Start the upgrade.
4. Watch project status.
5. Verify project API, Studio, database, and pooler routes.
6. Run application smoke tests.

## Failed Upgrade Handling

Failed-upgrade restore needs live proof with durable off-host artifacts. Do not assume local/dev artifacts prove production recovery.

## Related Docs

- [Backups and recovery](./backups-recovery.md)
- [Projects](../concepts/projects.md)
- [Known issues](./known-issues.md)
