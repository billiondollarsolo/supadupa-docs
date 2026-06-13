---
title: Admin UI Overview
description: Main areas of the Supadupa Admin UI.
---

# Admin UI Overview

The Admin UI is the operator-facing control surface for Supadupa. Use it to review fleet health, create projects, manage organizations, inspect routes, configure defaults, and monitor backups.

![Supadupa dashboard showing fleet health and operational panels](/img/screenshots/actual/light/01-dashboard.png)

## Main Areas

| Area | Purpose |
| --- | --- |
| Dashboard | Fleet posture, activity, alerts, and quick status. |
| Projects | Project list, project creation, health, and routes. |
| Organizations | Tenant and access organization. |
| Security | Advisor, compliance, audit, and access review surfaces. |
| Settings | Platform defaults, SSO, backup targets, feature flags, and runtime settings. |

## Workflow Pattern

Most workflows follow the same pattern:

1. Review current state.
2. Change desired state.
3. Wait for the scheduler/provisioner to converge.
4. Verify health and routes.
5. Check logs or activity if convergence fails.

## Related Docs

- [Projects](./projects.md)
- [Connect](./connect.md)
- [Settings](./settings.md)
