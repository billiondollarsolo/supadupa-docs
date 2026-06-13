---
title: Resources
description: Resource planning for Supadupa control plane and project runtimes.
---

# Resources

Supadupa runs more than a single database. A full-profile project is a multi-service Supabase-style runtime, so resource planning must include the control plane and every active project.

## Planning Baseline

For MVP evaluation:

| Runtime | Planning note |
| --- | --- |
| Control plane | About 0.5 GB RAM minimum for the local control-plane services. |
| Full-profile project | About 4 GB RAM per project. |
| Leaner profiles | Use when you do not need every Supabase surface during evaluation. |

:::warning
Under-sized full-profile projects may show `degraded` when non-core services, especially logging/analytics, are OOM-killed.
:::

## What Consumes Resources

- Postgres and extensions.
- API gateway and Supabase services.
- Studio.
- Storage.
- Realtime.
- Functions runtime.
- Analytics/logging services.
- Backup and WAL activity.

## Operator Guidance

- Start with one local project.
- Measure memory and disk behavior before adding projects.
- Use off-host backup targets for recovery testing.
- Treat full-profile projects as substantial runtimes, not lightweight tenants.

## Related Docs

- [Install](../operations/install.md)
- [Known issues](../operations/known-issues.md)
