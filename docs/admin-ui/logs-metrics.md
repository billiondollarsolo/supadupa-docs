---
title: Logs And Metrics
description: Use logs and metrics to understand project and fleet health.
---

# Logs And Metrics

Logs and metrics help explain project status transitions and runtime failures.

## Use Cases

- Project stuck in `provisioning`.
- Project becomes `degraded`.
- Route exists but service health fails.
- Backup run fails.
- Memory pressure or service restarts appear in runtime state.

## Operator Flow

1. Check the project status.
2. Review recent project activity.
3. Open logs for failing services.
4. Compare with host resource pressure.
5. Fix configuration or resource limits.
6. Re-run the failed workflow.

## Related Docs

- [Troubleshooting](../operations/troubleshooting.md)
- [Resources](../concepts/resources.md)
