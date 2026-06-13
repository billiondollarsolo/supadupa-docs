---
title: Troubleshooting
description: Common Supadupa install, routing, project, and backup failures.
---

# Troubleshooting

Start troubleshooting by identifying the layer that failed:

- Host and Docker.
- Control plane.
- Traefik routing and certificates.
- Project runtime.
- Backup target.
- Client connectivity.

## Useful Commands

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml ps
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml logs --tail=200
```

With the edge profile:

```bash
docker compose --env-file .env -f deploy/compose.yaml -f deploy/compose.apply.yaml --profile edge ps
```

## Common Issues

| Symptom | Check |
| --- | --- |
| Admin UI does not load locally | Confirm Compose is running and port `3000` is free. |
| Admin UI loads but login fails | Confirm bootstrap email/password in `.env`. |
| Project stuck provisioning | Check scheduler/provisioner logs and host resources. |
| Project degraded | Check container health and memory pressure. |
| TLS certificate missing | Check Cloudflare token, DNS zone, and Traefik logs. |
| Backup target unreachable | Check target credentials, endpoint, bucket, and network egress. |

## Project Health

![Project overview showing healthy routes and services](/img/screenshots/actual/light/10-project-overview.png)

## Related Docs

- [Install](./install.md)
- [DNS and TLS](./dns-tls.md)
- [Backups and recovery](./backups-recovery.md)
