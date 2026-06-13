import {existsSync} from 'node:fs';
import {mkdir, readdir} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('static/img/screenshots');
const exts = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  if (!existsSync(dir)) {
    return [];
  }

  const files = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    if (exts.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = await walk(root);

for (const file of files) {
  const tmp = `${file}.optimized`;
  const image = sharp(file).rotate();
  const metadata = await image.metadata();
  const resized = metadata.width && metadata.width > 1800 ? image.resize({width: 1800}) : image;

  if (path.extname(file).toLowerCase() === '.png') {
    await resized.png({compressionLevel: 9, adaptiveFiltering: true, palette: true}).toFile(tmp);
  } else {
    await resized.jpeg({quality: 84, mozjpeg: true}).toFile(tmp);
  }

  await mkdir(path.dirname(file), {recursive: true});
  await import('node:fs/promises').then(({rename}) => rename(tmp, file));
  console.log(`Optimized ${path.relative(process.cwd(), file)}`);
}

if (files.length === 0) {
  console.log('No PNG or JPEG screenshots found to optimize.');
}
