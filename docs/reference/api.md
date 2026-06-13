---
title: Management API
description: Overview of the Supadupa Management API documentation surface.
---

# Management API

The Management API backs the Admin UI, CLI, and Terraform provider. It manages account, organization, platform, project, routing, backup, security, and runtime operations.

## Documentation Status

This page is a starting overview. A later milestone should generate or extract endpoint-level reference from the API routes in the main repository.

## Major Areas

- Authentication and account state.
- Organizations, teams, users, and access grants.
- Projects, branches, replicas, config, domains, routes, and lifecycle.
- Database roles, schemas, extensions, queues, cron jobs, and webhooks.
- Backup policy, PITR policy, WAL archive, storage targets, and recovery state.
- Platform defaults, SSO, SCIM, SMTP, and feature flags.
- Logs, metrics, audit, compliance, and advisor findings.

## Related Docs

- [CLI reference](./cli.md)
- [Terraform provider](./terraform.md)
- [Configuration](./configuration.md)
