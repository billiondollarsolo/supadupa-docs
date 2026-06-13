---
title: DNS And TLS
description: DNS records, TLS certificate issuance, and route expectations.
---

# DNS And TLS

Supadupa's public edge path expects a control-plane domain and a wildcard project domain.

## DNS Shape

```text
*.example.com           A/AAAA  <server-ip>
*.apps.example.com      A/AAAA  <server-ip>
```

You may use explicit `admin.example.com` and `api.example.com` records instead of, or in addition to, `*.example.com`.

## Certificate Flow

Traefik uses Cloudflare DNS-01 to issue certificates. The Cloudflare token must be able to edit DNS records for the zone.

Supadupa `0.2.0` requests two wildcard certificate scopes:

- Control plane: `*.example.com`, covering `admin.example.com` and `api.example.com`.
- Project apps: `*.apps.example.com`, covering generated project API, Studio, Storage, DB, pooler, Realtime, and Functions hostnames.

The apps wildcard is requested when a project route exists. On a fresh install with no projects, only the control-plane certificate may be present.

## Route Verification

After startup, verify:

- `https://admin.example.com` loads the Admin UI.
- `https://api.example.com` reaches the control-plane API.
- Project API routes resolve under `*.apps.example.com`.
- Studio routes resolve under `studio-<ref>.apps.example.com`.
- Database and pooler routes are only reachable when explicitly enabled.

## Custom Domains

Supadupa supports custom domain metadata and generated route/cert artifacts. Treat custom domains as operationally sensitive because DNS ownership, certificate state, and route manifests must all converge.

## Common Failures

| Symptom | Likely cause |
| --- | --- |
| Certificate never issues | Cloudflare token lacks DNS edit permission or DNS zone is wrong. |
| Project route does not resolve | Wildcard record missing or points to the wrong IP. |
| Admin UI loads but project route fails | Project route manifest did not converge or project is not healthy. |
| Database route open unexpectedly | Host port bind and project DB ingress settings need review. |

## Related Docs

- [Routing](../concepts/routing.md)
- [Security](./security.md)
- [Troubleshooting](./troubleshooting.md)
