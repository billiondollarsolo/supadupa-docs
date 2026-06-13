---
title: Supabase Compatibility
description: Compatibility notes for Supabase clients, CLI workflows, and Studio.
---

# Supabase Compatibility

Supadupa aims to expose Supabase-style project surfaces while letting operators run the control plane on their own infrastructure.

## Working Compatibility Areas

- Supabase JS client usage through the project API URL.
- Supadupa project API keys surfaced from the Connect page.
- Supabase Studio access through Supadupa-authenticated routes.
- Database access through direct Postgres and pooler routes when enabled.
- Official Supabase CLI database workflows where the network and TLS shape is supported.

## Known Caveats

:::warning
Official `supabase gen types --db-url` against the public DB route still has an upstream Supabase CLI TLS/CA caveat. Supadupa provides tunnel or wrapper workarounds in the main repository.
:::

Compatibility should be validated per stack version. Treat test results as tied to the exact Supadupa and Supabase stack versions under evaluation.

## Related Docs

- [Connect page](../admin-ui/connect.md)
- [CLI reference](../reference/cli.md)
- [Known issues](../operations/known-issues.md)
