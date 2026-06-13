# Supadupa Docs

Docusaurus documentation site for Supadupa.

## Local Development

```bash
npm install
npm start
```

The local server defaults to:

```text
http://localhost:3000/supadupa-docs/
```

## Build And Check

```bash
npm run check
```

This runs TypeScript, screenshot asset checks, and the production Docusaurus build.

## Screenshots

Screenshot assets live in:

```text
static/img/screenshots/
```

Capture live screenshots from a seeded Supadupa environment:

```bash
SD_BASE=http://localhost:3000 \
SD_EMAIL=admin@example.test \
SD_PASSWORD='change-this-password' \
SD_REF=smoke \
npm run capture-screenshots
```

Review every captured image before committing it.

## GitHub Pages

The site is configured for GitHub Pages at:

```text
https://billiondollarsolo.github.io/supadupa-docs/
```

In repository settings, set Pages source to GitHub Actions.
