---
title: CLI Reference
description: Supadupa CLI entry points and common workflows.
---

# CLI Reference

The Supadupa CLI talks to the control-plane API. In the MVP repo, invoke it from the main `supadupa` checkout with Go.

## Login

```bash
go run ./cmd/supadupa-cli --api https://api.example.com login \
  --email admin@example.com \
  --password 'change-this-password'
```

## Create A Project

```bash
go run ./cmd/supadupa-cli --api https://api.example.com projects create \
  --org-id <org-id> \
  --ref smoke \
  --name "Smoke"
```

## Connection Values

Prefer the Admin UI Connect page or the Management API for canonical project URLs and credentials.

## Related Docs

- [Connect](../admin-ui/connect.md)
- [API reference](./api.md)
