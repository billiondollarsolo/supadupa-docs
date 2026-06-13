---
title: Local Loopback Quickstart
description: Start Supadupa locally with Docker Compose for evaluation.
---

# Local Loopback Quickstart

Use this path for the fastest evaluation loop. It starts the control plane, meta database, and Admin UI on local ports. It does not give you public project TLS routes.

## Prerequisites

- Linux or macOS.
- Docker.
- Docker Compose v2.
- Git.

Go and Node are only required if you build binaries or the frontend outside the Compose path.

## Clone Supadupa

```bash
git clone https://github.com/billiondollarsolo/supadupa.git
cd supadupa
```

## Configure The Local Environment

```bash
export SUPADUPA_BOOTSTRAP_PASSWORD='change-this-password'
scripts/setup-compose.sh --mode local
```

The setup script writes `.env` with local defaults and a bootstrap admin account. The default bootstrap email is `admin@example.test` unless you pass `--bootstrap-email`.

## Start The Stack

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml up -d --build
```

Open:

```text
http://localhost:3000
```

Log in with the bootstrap email and password from `.env`.

## First Verification

1. Open the Admin UI.
2. Confirm the dashboard loads.
3. Open `Settings`.
4. Confirm default project settings are visible.
5. Create an organization if one does not exist.
6. Create a small test project.
7. Wait until the project transitions from `provisioning` to `healthy`.

![Supadupa dashboard showing fleet health and operational panels](/img/screenshots/actual/light/01-dashboard.png)

## Stop The Stack

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml down
```

## Next Steps

- Read [routing concepts](../concepts/routing.md).
- Try the [VPS quickstart](./vps-dns-tls.md) when you need public routes and TLS.
- Review [known issues](../operations/known-issues.md) before production-like testing.
