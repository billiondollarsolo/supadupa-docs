---
title: Operations
description: "Operate Supadupa after installation: DNS, TLS, backups, upgrades, security, and troubleshooting."
slug: /operations
---

# Operations

Use this section after the initial quickstart to harden, monitor, recover, and maintain a Supadupa installation.

## Core Runbooks

| Runbook | Use it for |
| --- | --- |
| [Install](./install.md) | Deployment modes, setup scripts, and compose startup. |
| [DNS and TLS](./dns-tls.md) | Wildcard DNS records, certificate issuance, and route checks. |
| [Backups and recovery](./backups-recovery.md) | Backup targets, restore behavior, and recovery expectations. |
| [Upgrades](./upgrades.md) | Stack release handling and guarded project upgrades. |
| [Security](./security.md) | Exposure review, secret handling, auth boundaries, and operator posture. |
| [Troubleshooting](./troubleshooting.md) | Common runtime, routing, health, and certificate problems. |
| [Known issues](./known-issues.md) | Current limitations and production-readiness caveats. |

## Baseline Checks

- Public installs should expose only the intended edge ports.
- Database and pooler ports should stay private unless you intentionally enable public database access.
- Production-like installs should configure off-host backups before relying on project data.
- Route and certificate changes should be validated after each project create, domain change, or upgrade.

## Next

- [Configuration reference](../reference/configuration.md)
- [Architecture](../concepts/architecture.md)
- [Admin UI overview](../admin-ui/overview.md)
