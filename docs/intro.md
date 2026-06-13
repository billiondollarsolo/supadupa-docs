---
title: Introduction
description: What Supadupa is, what is supported today, and where to start.
---

# Supadupa Docs

Supadupa is a self-hosted, multi-project Supabase control plane. It lets an operator run many isolated Supabase-style projects on their own infrastructure and manage them through a browser admin UI, CLI, Terraform provider, and Management API.

Each project receives its own public API, Studio, Postgres, pooler, Storage, Realtime, and Functions routes. The control plane provisions project runtimes, tracks state in a meta database, manages routes, and exposes operational surfaces for backups, logs, metrics, security, and settings.

:::warning MVP status
Supadupa is in MVP shape. The Docker Compose backend is the supported runtime for evaluation and early operational testing. Kubernetes support exists as a renderer/operator contract, but it is not the primary MVP install path yet.
:::

## Start Here

- [Local loopback quickstart](./quickstart/local-loopback.md) for the fastest evaluation loop.
- [VPS quickstart with DNS and TLS](./quickstart/vps-dns-tls.md) for a public edge install.
- [Architecture](./concepts/architecture.md) for the control plane and project runtime model.
- [Known issues](./operations/known-issues.md) before treating an install as production-like.

## Working Today

- Admin UI for organizations, users, projects, routes, settings, backups, logs, metrics, security, and operations.
- Multi-project Docker Compose provisioning with isolated project directories, networks, secrets, routes, and public hostnames.
- Public project routes through Traefik.
- Project Connect page and CLI profile for remote clients.
- Studio access through Supadupa control-plane login.
- Custom domains with generated route/cert artifacts and BYO certificate upload.
- Logical backups, physical backup plumbing, WAL archive plumbing, and recoverability reporting.
- Stack release catalog and project upgrade guardrails.
- Compatibility test suite in the main repository.

## Not Hosted-Grade Yet

- Destructive PITR against a real off-host S3/R2/remote-MinIO target still needs live proof.
- Failed-upgrade restore needs proof with durable off-host artifacts.
- Public DB type generation through the upstream Supabase CLI still has a TLS/CA caveat.
- Third-party provider propagation needs more proof for external CDN, SMS, and multi-region behavior.
- Kubernetes is not the MVP runtime path.
- Compliance screens are operator evidence helpers, not certification claims.

## Canonical Docs Scope

This site is intended to become the public operator and user documentation for Supadupa. The main `supadupa` repository can keep code-adjacent developer notes, but duplicated public docs should eventually move here.
