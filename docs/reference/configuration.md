---
title: Configuration
description: Important Supadupa configuration values and environment behavior.
---

# Configuration

Configuration is currently managed through setup scripts, `.env`, platform defaults, and the Admin UI.

## Important Values

| Value | Purpose |
| --- | --- |
| `SUPADUPA_BOOTSTRAP_PASSWORD` | Initial admin bootstrap password. |
| `CLOUDFLARE_API_TOKEN` | DNS-01 certificate automation token for VPS installs. |
| `SUPADUPA_APPS_DOMAIN` | Seeds a fresh/default project domain. |
| `SUPADUPA_PROJECT_DOMAIN` | Explicitly overrides the Admin UI project domain on restart. |

## Domain Defaults

Prefer setting the app/project domain through `Settings -> Defaults` after the first boot. Use environment overrides only when you intentionally want configuration to be enforced on restart.

## Compose Files

The common startup shape is:

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml up -d --build
```

For edge/VPS mode:

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml --profile edge up -d --build
```

## Related Docs

- [Install](../operations/install.md)
- [Settings](../admin-ui/settings.md)
- [DNS and TLS](../operations/dns-tls.md)
