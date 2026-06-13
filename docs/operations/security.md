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

## Admin Sessions

Supadupa `0.2.0` uses HttpOnly browser cookies for Admin UI sessions and rejects cookie-authenticated mutations without an allowed origin. Platform admin tokens include a token version; privileged routes reject stale tokens after user role, password, email, MFA, or deletion changes.

Admins may need to log in again after deploying `0.2.0`.

## Docker Apply Mode

In Compose apply mode, the control plane talks to a scoped first-party Docker API proxy instead of mounting the raw Docker socket directly. The proxy is the only service with the socket mount and is isolated on an internal Docker network.

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

Also keep `.env`, runtime route state, certificates, backups, and local logs ignored. Use the runtime secret hygiene check in the main repository when preparing review or release bundles.

The docs screenshot workflow uses demo data and redaction rules to avoid leaking sensitive values.

## Related Docs

- [DNS and TLS](./dns-tls.md)
- [Screenshot workflow](../contributing/screenshot-workflow.md)
- [Known issues](./known-issues.md)
