---
title: Upgrades
description: Upgrade guardrails for Supadupa projects and platform changes.
---

# Upgrades

Supadupa tracks stack releases and project upgrade guardrails. Treat upgrades as operational changes that require backup review and rollback planning.

## Current Release

Current platform release: `0.2.0`.

`0.2.0` is a security and deployment hardening release. It includes HttpOnly Admin UI sessions, platform admin token-version invalidation, metadata migration checksum validation, scoped Docker apply mode, improved Compose setup validation, and wildcard TLS handling for public edge installs.

### Operator Notes For 0.2.0

- Admins may need to log in again after deployment because old admin bearer tokens are rejected on privileged routes.
- Let metadata migrations run on startup. Do not edit previously applied migrations on a live install; migration checksums are enforced.
- Keep the Cloudflare or Route53 DNS token available to Traefik for ACME renewal.
- Public VPS installs should use two wildcard DNS/cert scopes: the control-plane suffix and the apps suffix.
- Run `govulncheck ./...` from CI or another network if `vuln.go.dev` is unreachable from the host.

## Before Upgrading

- Confirm the project is healthy.
- Confirm a recent off-host backup exists.
- Review known issues for the target version.
- Verify enough disk and memory headroom.
- Capture current project route and service health.

## Upgrade Flow

1. Select the target stack version.
2. Confirm guardrail checks.
3. Start the upgrade.
4. Watch project status.
5. Verify project API, Studio, database, and pooler routes.
6. Run application smoke tests.

## Failed Upgrade Handling

Failed-upgrade restore needs live proof with durable off-host artifacts. Do not assume local/dev artifacts prove production recovery.

## Validation Commands

For a source-based release or upgrade candidate:

```bash
go test ./...
npm --prefix frontend run build
npm --prefix frontend run check
npm --prefix frontend audit --omit=dev
scripts/check-setup-compose.sh
scripts/check-release-note-policy.sh
git diff --check
```

Run `govulncheck ./...` from a network that can reach `vuln.go.dev`.

## Related Docs

- [Backups and recovery](./backups-recovery.md)
- [Projects](../concepts/projects.md)
- [Known issues](./known-issues.md)
