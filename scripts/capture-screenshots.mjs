import {chromium} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const base = process.env.SD_BASE ?? 'http://localhost:3000';
const email = process.env.SD_EMAIL;
const password = process.env.SD_PASSWORD;
const outputRoot = process.env.SD_OUT ?? 'static/img/screenshots/captured';
const theme = process.env.SD_THEME ?? 'light';
const projectRef = process.env.SD_REF ?? 'smoke';

if (!email || !password) {
  console.error('SD_EMAIL and SD_PASSWORD are required to capture live Supadupa screenshots.');
  process.exit(1);
}

const routes = [
  ['/login', 'admin-ui/login'],
  ['/', 'admin-ui/dashboard'],
  ['/organizations', 'admin-ui/organizations'],
  ['/projects', 'projects/list'],
  ['/projects/new', 'projects/create'],
  [`/projects/${projectRef}`, 'projects/overview'],
  [`/projects/${projectRef}/connect`, 'connect/page'],
  [`/projects/${projectRef}/backups`, 'backups/project'],
  ['/settings', 'settings/defaults'],
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: {width: 1440, height: 1000},
  deviceScaleFactor: 1,
  colorScheme: theme === 'dark' ? 'dark' : 'light',
});

await context.addInitScript((selectedTheme) => {
  localStorage.setItem('supadupa-theme', selectedTheme);
  if (document.documentElement) {
    document.documentElement.dataset.theme = selectedTheme;
  }
}, theme);

const page = await context.newPage();
page.setDefaultTimeout(20_000);

async function capture(route, name) {
  const out = path.join(outputRoot, `${name}-${theme}-desktop.png`);
  fs.mkdirSync(path.dirname(out), {recursive: true});
  await page.goto(`${base}${route}`, {waitUntil: 'domcontentloaded'});
  await page.waitForLoadState('networkidle', {timeout: 4000}).catch(() => {});
  await page.waitForTimeout(800);
  await page.screenshot({path: out, fullPage: true});
  console.log(`captured ${out}`);
}

await page.goto(`${base}/login`, {waitUntil: 'domcontentloaded'});
await page.evaluate((selectedTheme) => {
  document.documentElement.dataset.theme = selectedTheme;
}, theme);
await page.screenshot({path: path.join(outputRoot, `admin-ui/login-preauth-${theme}-desktop.png`), fullPage: true});
await page.getByPlaceholder('admin@example.com').fill(email);
await page.getByPlaceholder('Password', {exact: true}).fill(password);
await page.getByRole('button', {name: 'Login', exact: true}).click();
await page.getByRole('heading', {name: /Dashboard/i}).waitFor();

for (const [route, name] of routes.filter(([route]) => route !== '/login')) {
  await capture(route, name);
}

await browser.close();
