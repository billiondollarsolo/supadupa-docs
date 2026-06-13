---
title: Settings
description: Platform defaults, project domain, backup targets, and runtime settings.
---

# Settings

Use Settings to configure platform-wide defaults and operational integrations.

![Settings defaults showing project domain and stack defaults](/img/screenshots/actual/light/08-settings.png)

## Defaults To Review First

- Project domain.
- Default stack version.
- Default profile and tier.
- Backup schedule.
- Runtime host defaults.

`SUPADUPA_APPS_DOMAIN` seeds a fresh/default project domain so the Admin UI can remain the normal operator control. Set `SUPADUPA_PROJECT_DOMAIN` only when the environment file should explicitly override Admin UI state on every restart.

## Backup Targets

Production-like environments should add at least one off-host backup target. Review [Backups and recovery](../operations/backups-recovery.md) before relying on any backup policy.

## Related Docs

- [Configuration reference](../reference/configuration.md)
- [Backups](./backups.md)
