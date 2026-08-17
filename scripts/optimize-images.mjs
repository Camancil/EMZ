import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/images",
);

const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

const entries = await readdir(imagesDir);
const sources = entries.filter((name) =>
  SOURCE_EXT.has(path.extname(name).toLowerCase()),
);

if (sources.length === 0) {
  console.log(`No PNG/JPG files found in ${imagesDir}`);
  process.exit(0);
}

console.log(`Optimizing ${sources.length} image(s) in public/images/\n`);

for (const name of sources) {
  const srcPath = path.join(imagesDir, name);
  const destName = `${path.parse(name).name}.webp`;
  const destPath = path.join(imagesDir, destName);
  const before = (await stat(srcPath)).size;

  await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);

  const after = (await stat(destPath)).size;
  const saved = before > 0 ? (((before - after) / before) * 100).toFixed(0) : "0";
  console.log(
    `${name}  ${formatKb(before)}  →  ${destName}  ${formatKb(after)}  (${saved}% smaller)`,
  );
}

console.log("\nDone.");
