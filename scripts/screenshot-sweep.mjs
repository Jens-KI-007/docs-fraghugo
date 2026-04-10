import sharp from 'sharp';
import { readdir, writeFile } from 'fs/promises';
import { statSync } from 'fs';
import { join, basename } from 'path';

const DIR = 'public/screenshots';
const MAX_W = 1600;
const PNG_OPTS = { quality: 85, compressionLevel: 9, palette: true };

function human(n) { return n < 1024 ? n+'B' : n < 1024*1024 ? (n/1024).toFixed(0)+'KB' : (n/1024/1024).toFixed(2)+'MB'; }

const files = (await readdir(DIR)).filter(f => f.toLowerCase().endsWith('.png')).map(f => join(DIR, f));

let sumBefore = 0, sumAfter = 0, touched = 0;
for (const file of files) {
  const before = statSync(file).size;
  sumBefore += before;
  const img = sharp(file);
  const meta = await img.metadata();
  const pipe = sharp(file)
    .resize({ width: Math.min(meta.width, MAX_W), withoutEnlargement: true })
    .png(PNG_OPTS);
  const buf = await pipe.toBuffer();
  if (buf.length < before * 0.95) {
    await writeFile(file, buf);
    sumAfter += buf.length;
    touched++;
    console.log(`  ${human(before)} → ${human(buf.length)}  ${basename(file)}`);
  } else {
    sumAfter += before;
    console.log(`  kept ${human(before)}  ${basename(file)}  (no gain)`);
  }
}

console.log('---');
console.log(`Touched: ${touched}/${files.length}`);
console.log(`Before: ${human(sumBefore)}  After: ${human(sumAfter)}  Saved: ${human(sumBefore - sumAfter)}`);
