---
title: Release Notes
description: Documentation expectations for Supadupa release notes.
---

# Release Notes

Release notes should point readers to the docs that changed with a release.

## Required Updates

Update docs when a release changes:

- Install or setup steps.
- Configuration behavior.
- Runtime defaults.
- Project lifecycle behavior.
- Route shape or DNS/TLS requirements.
- Backup, restore, or upgrade workflows.
- API, CLI, or Terraform behavior.
- Admin UI workflows that appear in screenshots.

## Release Note Shape

Use clear sections:

- Highlights.
- Breaking changes.
- Upgrade notes.
- Operational notes.
- Docs links.

## Source-Based Releases

Supadupa releases are currently tagged source releases. The release contains the repository state: source code, migrations, Compose and Helm manifests, setup scripts, docs, changelog, and validation notes. It does not contain `.env`, runtime state, certificates, Docker volumes, or built container images.

After tagging, rebuild the live stack from the tag and confirm `/v1/health` reports the release version and build SHA.

## Related Docs

- [Docs workflow](./docs-workflow.md)
- [Screenshot workflow](./screenshot-workflow.md)
