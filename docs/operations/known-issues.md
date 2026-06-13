---
title: Known Issues
description: Current MVP limitations and operational caveats.
---

# Known Issues

Supadupa is early software. Treat this page as required reading before production-like testing.

## MVP Caveats

- The Docker Compose backend is the supported runtime path.
- Kubernetes is not the MVP runtime path.
- A full-profile project needs meaningful memory headroom.
- Off-host destructive recovery still needs real-world proof.
- Failed-upgrade restore must be proven with durable backup artifacts.
- Some third-party provider behavior needs external validation.
- Compliance screens are evidence helpers, not certification claims.

## Resource Sizing

A full-profile project should be planned at about 4 GB RAM. Under-sized projects may become `degraded`, especially when analytics/logging services are OOM-killed.

## Supabase CLI TLS Caveat

Official `supabase gen types --db-url` against a public DB route has an upstream TLS/CA caveat. Use the documented workaround from the main repository until this is fully resolved.

## Operational Guidance

- Use local loopback for first evaluation.
- Use a real VPS only after reviewing DNS, TLS, and route behavior.
- Add off-host backups before storing important data.
- Prove restore before trusting backups.
- Keep project count small until resource behavior is understood.

## Related Docs

- [Introduction](../intro.md)
- [Resources](../concepts/resources.md)
- [Backups and recovery](./backups-recovery.md)
