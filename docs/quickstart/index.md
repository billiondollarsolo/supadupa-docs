---
title: Quickstart
description: Choose the fastest Supadupa installation path for local evaluation or a public VPS.
slug: /quickstart
---

# Quickstart

Start with the local loopback path when you want the fastest evaluation loop on one machine. Use the VPS path when you need public DNS, TLS certificates, and project routes that can be reached by external clients.

## Choose A Path

| Path | Use it when | What it validates |
| --- | --- | --- |
| [Local loopback](./local-loopback.md) | You are evaluating Supadupa on a workstation or private server. | Control plane startup, Admin UI login, project creation, and local routing. |
| [VPS with DNS and TLS](./vps-dns-tls.md) | You have a public server, DNS control, and a Cloudflare DNS token. | Public Admin UI/API routes, wildcard project routes, and Let's Encrypt DNS-01 certificates. |

## Recommended Order

1. Complete the [local loopback quickstart](./local-loopback.md).
2. Review [configuration](../reference/configuration.md) and [resource planning](../concepts/resources.md).
3. Move to the [VPS quickstart](./vps-dns-tls.md) when you need public routes.
4. Read [known issues](../operations/known-issues.md) before treating the install as production-like.

## Next

- [Install operations](../operations/install.md)
- [DNS and TLS](../operations/dns-tls.md)
- [Security](../operations/security.md)
