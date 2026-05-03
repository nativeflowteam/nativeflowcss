/**
 * Runs timed typecheck + build + size gate, writes build-report.md for the PR comment bot.
 * Env: COMMIT_SHA, COMMIT_URL, RUN_URL (set by GitHub Actions).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
process.chdir(root);

function runTimed(label, command) {
  const t0 = performance.now();
  execSync(command, { stdio: 'inherit' });
  const ms = Math.round(performance.now() - t0);
  return { label, ms };
}

const steps = [];
steps.push(runTimed('npm run typecheck', 'npm run typecheck'));
steps.push(runTimed('npm run build', 'npm run build'));
runTimed('npm run check:size', 'npm run check:size');

const lib = path.join(root, 'lib');
const files = ['index.js', 'index.cjs', 'index.d.ts'];
const rows = files.map((f) => {
  const p = path.join(lib, f);
  return { file: f, bytes: fs.statSync(p).size };
});

const commitSha = process.env.COMMIT_SHA ?? '';
const commitUrl = process.env.COMMIT_URL ?? '';
const runUrl = process.env.RUN_URL ?? '';
const shortSha = commitSha ? commitSha.slice(0, 7) : '';

function fmtMs(ms) {
  return `${(ms / 1000).toFixed(2)}s (${ms.toLocaleString()} ms)`;
}

let md = '';
md += `### nativeflowcss — build stats\n\n`;
md += `| Step | Wall time |\n|:------|:----------|\n`;
for (const s of steps) {
  md += `| \`${s.label}\` | ${fmtMs(s.ms)} |\n`;
}
md += `\n**Published bundle (\`lib/\`)**\n\n`;
md += `| File | Size |\n|:------|-----:|\n`;
for (const r of rows) {
  md += `| \`${r.file}\` | ${r.bytes.toLocaleString()} bytes |\n`;
}
if (commitUrl && commitSha) {
  md += `\n**Head commit:** [\`${shortSha}\`](${commitUrl})\n`;
} else if (commitSha) {
  md += `\n**Head commit:** \`${shortSha}\`\n`;
}
if (runUrl) {
  md += `\n[View workflow run](${runUrl})\n`;
}
md += `\n_Comment updated on each push to this PR._\n`;

const marker = '<!-- nativeflowcss-build-report -->';
const outPath = path.join(root, 'build-report.md');
fs.writeFileSync(outPath, `${marker}\n\n${md}`, 'utf8');
console.log('Wrote', outPath);
