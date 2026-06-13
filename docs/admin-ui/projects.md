---
title: Projects
description: Create, inspect, and operate Supadupa projects from the Admin UI.
---

# Projects

The Projects area lists runtime state and starts the project creation workflow.

## Create A Project

The wizard has three steps:

1. Identity: name, ref, and base domain.
2. Organization and placement.
3. Stack: stack version, profile, size, resource limits, and service toggles.

![Create project wizard showing stack profile and service selection](/img/screenshots/actual/light/03-project-new.png)

Project creation is asynchronous. A successful request returns quickly, then the project transitions through runtime states such as `provisioning`, `starting`, and `healthy`.

## Project Overview

Use the project overview page to verify route and service health.

![Project overview showing healthy routes and services](/img/screenshots/actual/light/10-project-overview.png)

## Related Docs

- [Project concepts](../concepts/projects.md)
- [Connect](./connect.md)
- [Troubleshooting](../operations/troubleshooting.md)
