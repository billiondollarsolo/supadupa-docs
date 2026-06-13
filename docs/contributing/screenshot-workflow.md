---
title: Screenshot Workflow
description: Capture, review, optimize, and commit Supadupa docs screenshots.
---

# Screenshot Workflow

Screenshots are maintained docs assets. They should clarify workflows and show the current Admin UI, not decorate pages.

## Storage

Committed screenshots live under:

```text
static/img/screenshots/
```

Use actual color-mode folders:

```text
actual/light/
actual/dark/
```

## Naming

Use:

```text
<area>-<workflow>-<state>-<viewport>.png
```

Example:

```text
projects-overview-healthy-desktop.png
```

## Demo Data

Use deterministic demo values:

- Organization: `Demo Org`
- User: `admin@example.test`
- Project name: `Smoke`
- Project ref: `smoke`
- Apps domain: `apps.example.test`

Never capture real passwords, service role keys, cloud tokens, private domains, or customer data.

## Capture

This repo includes a Playwright capture helper:

```bash
SD_BASE=http://localhost:3000 \
SD_EMAIL=admin@example.test \
SD_PASSWORD='change-this-password' \
SD_REF=smoke \
npm run capture-screenshots
```

The script writes to:

```text
static/img/screenshots/captured/
```

Review every image manually before moving it into the public feature folders.

## Optimize And Check

```bash
npm run optimize-images
npm run check:screenshots
```

## Quality Bar

- No browser chrome unless needed.
- No real secrets.
- Readable text at docs width.
- Stable UI state.
- No loading spinners unless documenting loading behavior.
- Consistent desktop viewport.
- Meaningful alt text wherever embedded.

## Current Assets

The site includes the real screenshot set copied from the main `supadupa` repository. The [Screenshot Gallery](../admin-ui/screenshots.mdx) embeds every current light-mode and dark-mode image for review.
