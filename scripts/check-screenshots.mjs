import {existsSync} from 'node:fs';
import {readdir} from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('static/img/screenshots');
const allowed = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.md']);
const maxBytes = Number.parseInt(process.env.SCREENSHOT_MAX_BYTES ?? `${2 * 1024 * 1024}`, 10);
const failures = [];

async function walk(dir) {
  if (!existsSync(dir)) {
    failures.push(`Missing screenshot directory: ${dir}`);
    return;
  }

  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!allowed.has(ext)) {
      failures.push(`Unexpected file type in screenshots: ${fullPath}`);
      continue;
    }

    if (ext === '.md') {
      continue;
    }

    const stat = await import('node:fs/promises').then(({stat}) => stat(fullPath));
    if (stat.size > maxBytes) {
      failures.push(`${fullPath} is ${Math.round(stat.size / 1024)} KB; max is ${Math.round(maxBytes / 1024)} KB`);
    }
  }
}

await walk(root);

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Screenshot asset check passed.');
