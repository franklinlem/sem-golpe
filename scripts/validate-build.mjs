import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const root = resolve('dist');
const origin = 'https://semgolpe.franklem.com';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)))).flat();
}
const files = await walk(root);
const failures = [];
for (const file of files.filter(f => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const relative = file.slice(root.length).replaceAll('\\', '/');
  const page = new URL(relative.replace(/index\.html$/, ''), origin);
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), page);
    if (url.origin !== origin) continue;
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { failures.push(`${relative}: endereço inválido`); continue; }
    const target = resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(root + '/')) { failures.push(`${relative}: caminho inválido`); continue; }
    const candidates = [target, join(target, 'index.html')];
    const exists = await Promise.all(candidates.map(p => stat(p).then(s => s.isFile()).catch(() => false)));
    if (!exists.some(Boolean)) failures.push(`${relative}: ${url.pathname}`);
  }
}
for (const required of ['index.html', '404.html', '.htaccess', 'robots.txt', 'sitemap-index.xml']) {
  if (!files.includes(join(root, required))) failures.push(`Arquivo obrigatório ausente: ${required}`);
}
const sitemaps = files.filter(f => /sitemap.*\.xml$/.test(f));
for (const file of sitemaps) {
  const xml = await readFile(file, 'utf8');
  if (xml.includes(`${origin}/golpes/`)) failures.push('Ficha beta incluída no sitemap');
}
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Build validada: ${files.filter(f => f.endsWith('.html')).length} páginas, links e arquivos de hospedagem presentes.`);
