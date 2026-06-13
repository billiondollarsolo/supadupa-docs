---
title: VPS Quickstart With DNS And TLS
description: Install Supadupa on a VPS with public DNS, Traefik routing, and TLS.
---

# VPS Quickstart With DNS And TLS

Use this path when you want public control-plane and project routes with real TLS certificates.

Example domain:

```text
example.com
```

The resulting routes are:

```text
https://admin.example.com
https://api.example.com
https://smoke.apps.example.com
https://studio-smoke.apps.example.com
db-smoke.apps.example.com:5432
pooler-smoke.apps.example.com:6543
```

## Prerequisites

- Linux VPS with a public IPv4 or IPv6 address.
- Docker and Docker Compose v2.
- DNS control for your domain.
- Cloudflare DNS API token for Let's Encrypt DNS-01.
- Inbound ports `80` and `443`.
- Ports `5432` and `6543` only when you intentionally expose public database and pooler routes.

:::warning Resource planning
Plan for about 4 GB RAM per `full` profile project plus about 0.5 GB for the control plane. Under-sized full-profile projects can become `degraded`, commonly from analytics/logging OOM behavior.
:::

## Configure DNS

Create records pointing at the VPS:

```text
admin.example.com       A/AAAA  <server-ip>
api.example.com         A/AAAA  <server-ip>
*.apps.example.com      A/AAAA  <server-ip>
```

## Configure Supadupa

```bash
git clone https://github.com/billiondollarsolo/supadupa.git
cd supadupa

export CLOUDFLARE_API_TOKEN='...'
export SUPADUPA_BOOTSTRAP_PASSWORD='change-this-password'

scripts/setup-compose.sh \
  --mode vps \
  --domain example.com \
  --email ops@example.com \
  --bootstrap-email admin@example.com
```

Postgres and pooler edge ports publish on `0.0.0.0` by default, but Traefik routing remains the access gate. Pass `--db-loopback` if the host should bind those ports to `127.0.0.1`.

## Start The Edge Stack

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml --profile edge up -d --build
```

Open:

```text
https://admin.example.com
```

## Initial Admin UI Setup

1. Go to `Settings -> Defaults`.
2. Confirm the project domain, for example `apps.example.com`.
3. Confirm the default stack version, profile, tier, and backup schedule.
4. Go to `Settings -> Backups`.
5. Add a real off-host S3/R2 target for production-like recovery testing.
6. Create an organization.
7. Create a project.
8. Open the project `Connect` page.

![Settings defaults showing project domain and stack defaults](/img/screenshots/actual/light/08-settings.png)

## Verification

- `https://admin.example.com` loads with a valid certificate.
- `https://api.example.com` reaches the control-plane API.
- A created project becomes `healthy`.
- The project's API and Studio routes resolve under `*.apps.example.com`.
- Traefik has issued certificates through DNS-01.

## Related Docs

- [DNS and TLS](../operations/dns-tls.md)
- [Backups and recovery](../operations/backups-recovery.md)
- [Security](../operations/security.md)
