---
title: Helm Chart
description: Kubernetes and Helm chart status for Supadupa.
---

# Helm Chart

Supadupa includes Kubernetes chart and CRD assets in the main repository.

:::warning Non-MVP path
Kubernetes support exists as a renderer/operator contract, but it is not the primary MVP install path. Use Docker Compose for the supported evaluation runtime.
:::

## Current Assets

The main repo contains:

- Helm chart metadata and values.
- Control-plane, operator, admin, RBAC, ingress, and secret templates.
- Project-related CRDs.
- Kubernetes smoke rendering tools.

## Documentation Approach

Keep Kubernetes docs visible but clearly marked as non-MVP until:

- Install and upgrade paths are proven.
- Runtime reconciliation is tested against real clusters.
- Backup and recovery behavior is validated.
- Operator lifecycle expectations are documented.

## Related Docs

- [Architecture](../concepts/architecture.md)
- [Known issues](../operations/known-issues.md)
