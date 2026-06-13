---
title: Install
description: Installation paths and prerequisites for Supadupa.
---

# Install

Supadupa currently has two practical installation paths:

- Local loopback for evaluation.
- VPS with DNS and TLS for public route testing.

Kubernetes manifests exist, but Kubernetes is not the primary MVP runtime path.

## Requirements

For local evaluation:

- Docker.
- Docker Compose v2.
- Git.

For a VPS install:

- Linux VPS.
- Public IP address.
- Docker and Docker Compose v2.
- Domain control.
- Cloudflare DNS API token for DNS-01 certificates.
- Open inbound `80` and `443`.

## Supported MVP Runtime

Docker Compose is the supported path for bringing projects up on a Linux host or VPS. The Compose setup builds the control plane and frontend in containers, so Go and Node are not required unless you are developing locally outside Compose.

## Installation Commands

Local:

```bash
export SUPADUPA_BOOTSTRAP_PASSWORD='change-this-password'
scripts/setup-compose.sh --mode local
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml up -d --build
```

VPS:

```bash
export CLOUDFLARE_API_TOKEN='...'
export SUPADUPA_BOOTSTRAP_PASSWORD='change-this-password'
scripts/setup-compose.sh --mode vps --domain example.com --email ops@example.com
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml --profile edge up -d --build
```

## Post-Install Checklist

- Log in to the Admin UI.
- Confirm `Settings -> Defaults`.
- Add an off-host backup target for production-like testing.
- Create an organization.
- Create a project.
- Confirm project route health.
- Confirm backup and recoverability state.

## Related Docs

- [Local loopback quickstart](../quickstart/local-loopback.md)
- [VPS quickstart](../quickstart/vps-dns-tls.md)
- [Troubleshooting](./troubleshooting.md)
