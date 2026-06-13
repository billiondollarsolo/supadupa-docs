---
title: Security
description: Security guidance for operating Supadupa.
---

# Security

Supadupa centralizes operational control over many project runtimes. Protect the control plane and review public routes carefully.

## High-Priority Controls

- Use strong bootstrap credentials and rotate them after first setup.
- Restrict Admin UI access where possible.
- Protect Cloudflare and backup target credentials.
- Avoid exposing Postgres and pooler routes unless required.
- Use off-host backups with constrained credentials.
- Review audit logs and access grants.

## Public Route Risks

:::warning
Database and pooler routes can expose direct data access. Enable external DB access only for environments that require it, and confirm network, TLS, credential, and project ingress settings together.
:::

## Secrets In Docs And Screenshots

Never commit:

- Passwords.
- Service role keys.
- API tokens.
- Database passwords.
- Cloud provider credentials.
- Real private domains.

The docs screenshot workflow uses demo data and redaction rules to avoid leaking sensitive values.

## Related Docs

- [DNS and TLS](./dns-tls.md)
- [Screenshot workflow](../contributing/screenshot-workflow.md)
- [Known issues](./known-issues.md)
