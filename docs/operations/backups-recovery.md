---
title: Backups And Recovery
description: Backup targets, policies, recoverability reporting, and restore caveats.
---

# Backups And Recovery

Supadupa includes logical backup workflows, physical backup plumbing, WAL archive plumbing, control-plane backup support, backup target management, and recoverability reporting.

:::warning Recovery proof
Before relying on Supadupa for real data, prove backup and restore against a durable off-host target such as S3, R2, or remote MinIO. Local backup artifacts are not enough for production-like confidence.
:::

## Backup Targets

Use `Settings -> Backups` to configure storage targets. Production-like targets should be off-host and protected from accidental deletion.

Recommended properties:

- Separate credentials from application runtime credentials.
- Bucket lifecycle policy that matches retention requirements.
- Access logs or audit visibility.
- Restore test cadence.

## Project Backup Policy

Project backup policies define schedule and target behavior. Keep policies simple until restore procedures have been tested.

![Backups page showing configured policy and target status](/img/screenshots/actual/light/15-project-backups.png)

## Recoverability Review

Use recoverability reporting to answer:

- Is there a configured target?
- Have recent backups succeeded?
- Are WAL artifacts present when expected?
- Are checksums and timestamps present?
- Has a restore been proven recently?

## Restore Runbook

1. Identify the project, target, and artifact set.
2. Confirm the restore point and expected data loss window.
3. Stop writes or pause the source project when required.
4. Run the restore path in a test environment first.
5. Verify data, auth, storage, and route behavior.
6. Document the exact restore result.

:::danger
Destructive restore actions can replace or remove project data. Always verify target project, artifact set, and operator intent before running a destructive recovery.
:::

## Related Docs

- [Admin UI backups](../admin-ui/backups.md)
- [Known issues](./known-issues.md)
- [Security](./security.md)
