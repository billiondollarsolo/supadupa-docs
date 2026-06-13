---
title: Terraform Provider
description: Terraform provider overview and current documentation status.
---

# Terraform Provider

The Terraform provider models Supadupa resources through the control-plane API.

## Current Scope

The main repository includes Terraform resources and tests for:

- Organizations, teams, members, and quotas.
- Projects, branches, replicas, and project config.
- Project database roles, schemas, extensions, queues, cron jobs, and webhooks.
- Storage buckets, CDN policy, analytics buckets, and vector buckets.
- Functions, function regions, and function storage mounts.
- Network connections, custom domains, access grants, log drains, and backup policies.
- Platform defaults, SSO, and backup storage targets.

## Documentation Status

This page should become generated provider documentation once provider schema output is stable enough for docs automation.

## Related Docs

- [Management API](./api.md)
- [Configuration](./configuration.md)
