import { mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const revision = process.env.GITHUB_SHA || 'local';
const version = JSON.parse(await readFile('package.json', 'utf8')).version;
await writeFile('dist/version.json', JSON.stringify({ version, revision }) + '\n');
await mkdir('release', { recursive: true });
// Archive only the static output, including .htaccess, with index.html at root.
execFileSync('tar', ['-czf', '../release/sem-golpe.tar.gz', '.'], { cwd: 'dist' });
async function hashes(dir, prefix = '') {
  const result = [];
  for (const entry of (await readdir(dir, { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name))) {
    const path = join(dir, entry.name);
    const name = prefix + entry.name;
    if (entry.isDirectory()) result.push(...await hashes(path, name + '/'));
    else result.push(`${createHash('sha256').update(await readFile(path)).digest('hex')}  ${name}`);
  }
  return result;
}
await writeFile('release/SHA256SUMS', (await hashes('dist')).join('\n') + '\n');
console.log('Pacote estático e manifesto criados em release/.');
