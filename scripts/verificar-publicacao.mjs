import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = fs.readFileSync('src/pages/verificar-link.astro', 'utf8').split('<script>')[1].split('</script>')[0];
class Element {
  children = []; textContent = ''; value = ''; handlers = {};
  classList = { add() {}, remove() {} };
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  addEventListener(name, callback) { this.handlers[name] = callback; }
}
const elements = Object.fromEntries(['#url-form', '#suspect-url', '#url-result'].map(id => [id, new Element()]));
const document = { querySelector: id => elements[id], createElement: () => new Element() };
vm.runInNewContext(ts.transpile(source, { target: ts.ScriptTarget.ES2022 }), { document, URL });
function analyze(value) {
  elements['#suspect-url'].value = value;
  elements['#url-form'].handlers.submit({ preventDefault() {} });
  const collect = element => [element.textContent, ...element.children.map(collect)].join('\n');
  return collect(elements['#url-result']);
}
assert.match(analyze('https://www.exemplo.com.br/teste'), /www\.exemplo\.com\.br/);
assert.match(analyze('https://banco.com.br@fraude.example'), /fraude\.example/);
assert.match(analyze('https://banco.com.br@fraude.example'), /credenciais/);
assert.match(analyze('javascript:alert(1)'), /Não foi possível/);
assert.match(analyze('https://[::1]'), /endereço IP/);
assert.match(analyze('https://xn--exmple-cua.com'), /punycode/);
assert.match(analyze('http://exemplo.com:8080'), /porta incomum/);
elements['#url-form'].handlers.reset();
assert.equal(elements['#url-result'].children.length, 0);
const htmlFiles = [];
function walk(dir) { for (const item of fs.readdirSync(dir, { withFileTypes: true })) { const full = path.join(dir, item.name); if (item.isDirectory()) walk(full); else if (full.endsWith('.html')) htmlFiles.push(full); } }
walk('dist');
const broken = [];
for (const file of htmlFiles) {
 const html = fs.readFileSync(file, 'utf8');
 assert.match(html, /lang="pt-BR"/);
 for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
   const target = path.join('dist', decodeURIComponent(href));
   if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html'))) broken.push({file, href});
 }
}
assert.deepEqual(broken, []);
assert.ok(fs.existsSync('dist/.htaccess'));
assert.ok(fs.existsSync('dist/sitemap-index.xml'));
console.log(`Verificador: 8 cenários aprovados. ${htmlFiles.length} páginas: links internos e idioma conferidos.`);
