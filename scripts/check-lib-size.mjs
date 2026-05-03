import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const esmPath = path.join(root, 'lib', 'index.js');
const cjsPath = path.join(root, 'lib', 'index.cjs');

const maxBytes = Number(process.env.MAX_LIB_BYTES ?? 45 * 1024);

function check(label, filePath) {
  const bytes = fs.statSync(filePath).size;
  console.log(`${label}: ${bytes} bytes (max ${maxBytes})`);
  if (bytes > maxBytes) {
    console.error(`${label} exceeds budget — raise MAX_LIB_BYTES only after intentional growth`);
    process.exit(1);
  }
}

check('lib/index.js', esmPath);
check('lib/index.cjs', cjsPath);
