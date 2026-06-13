---
title: Projects
description: How Supadupa represents and provisions Supabase-style projects.
---

# Projects

A Supadupa project is an isolated Supabase-style runtime with its own ref, routes, credentials, stack version, profile, resource settings, and operational state.

## Project Lifecycle

```mermaid
stateDiagram-v2
  [*] --> provisioning
  provisioning --> starting
  starting --> healthy
  starting --> degraded
  healthy --> paused
  paused --> starting
  healthy --> upgrading
  upgrading --> healthy
  upgrading --> degraded
  degraded --> recovering
  recovering --> healthy
```

Project creation is asynchronous. The API returns quickly with status `provisioning`; the scheduler then converges runtime state in the background.

## Important Fields

- `ref`: stable project identifier used in routes and resource names.
- `name`: display name.
- `org`: owning organization.
- `stack version`: Supabase stack release selected for the project.
- `profile`: service set such as a full runtime.
- `status`: current operational state.

## Admin UI Workflow

![Create project wizard showing stack profile and service selection](/img/screenshots/actual/light/03-project-new.png)

## Related Docs

- [Admin UI projects](../admin-ui/projects.md)
- [Resources](./resources.md)
- [Upgrades](../operations/upgrades.md)
