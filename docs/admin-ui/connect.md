---
title: Connect
description: Find project URLs, credentials, database strings, and CLI profile values.
---

# Connect

Use the project `Connect` page to copy canonical connection values for a Supadupa-managed project.

![Project Connect page showing project connection overview](/img/screenshots/actual/light/11-project-connect.png)

## Common Values

```text
SUPABASE_URL=https://smoke.apps.example.com
SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
DATABASE_URL=postgres://postgres:<password>@db-smoke.apps.example.com:5432/postgres?sslmode=require
POOLER_TRANSACTION_URL=postgres://postgres.<ref>:<password>@pooler-smoke.apps.example.com:6543/postgres?sslmode=require
```

## Security Notes

- Treat service role keys as secrets.
- Avoid sharing screenshots that show unmasked keys.
- Use least-privilege database roles for application workloads when possible.
- Confirm DB and pooler routes are intentionally exposed before distributing connection strings.

## Related Docs

- [Supabase compatibility](../concepts/supabase-compatibility.md)
- [CLI reference](../reference/cli.md)
- [Security](../operations/security.md)
