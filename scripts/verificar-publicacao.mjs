import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = fs.readFileSync('src/pages/verificar-link.astro', 'utf8').split('<script>')[1].split('</script>')[0];
class Element {
  children = []; textContent = ''; value = ''; handlers = {};
  classList = { add() {}, remove() {} };
  setAttribute() {}
  append(child) { this.children.push(child); }
  replaceChildren() { this.children = []; }
  addEventListener(name, callback) { this.handlers[name] = callback; }
}
const elements = Object.fromEntries(['#url-form', '#suspect-url', '#url-result'].map(id => [id, new Element()]));
const document = { querySelector: id => elements[id], createElement: () => new Element() };
let dnsData = [];
const requests = [];
const fetch = async (endpoint, options) => {
 requests.push({url: String(endpoint), options});
 const data = dnsData.shift();
 if (data instanceof Error) throw data;
 return { ok: true, json: async () => data };
};
vm.runInNewContext(ts.transpile(source, { target: ts.ScriptTarget.ES2022 }), { document, URL, fetch, AbortController, setTimeout, clearTimeout });
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
assert.equal(requests.length, 0, 'A análise inicial não deve consultar serviços externos');
async function queryDNS(data) {
 analyze('https://usuario:senha@dominio.example/caminho-secreto?token=privado#fragmento');
 dnsData = data;
 const button = elements['#url-result'].children.find(element => element.handlers.click);
 await button.handlers.click();
 return elements['#url-result'].children.map(element => element.textContent).join('\n');
}
assert.match(await queryDNS([{Status:3},{Status:3}]), /NXDOMAIN/);
assert.match(await queryDNS([{Status:0,Answer:[{type:1,data:'192.0.2.1'}]},{Status:0}]), /192\.0\.2\.1/);
assert.match(await queryDNS([{Status:0},{Status:0}]), /não publicou/);
assert.match(await queryDNS([{Status:2},{Status:2}]), /inconclusiva/);
assert.match(await queryDNS([new Error('rede'),new Error('rede')]), /Não foi possível concluir/);
for (const request of requests) {
 const url = new URL(request.url);
 assert.equal(url.origin, 'https://dns.google');
 assert.equal(url.searchParams.get('name'), 'dominio.example');
 assert.ok(!request.url.includes('privado') && !request.url.includes('senha') && !request.url.includes('caminho-secreto'));
 assert.equal(request.options.credentials, 'omit');
 assert.equal(request.options.referrerPolicy, 'no-referrer');
}
analyze('https://192.0.2.1');
assert.ok(!elements['#url-result'].children.some(element => element.handlers.click), 'IP literal não deve gerar consulta DNS de domínio');
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
console.log(`Verificador: cenários locais, DNS e minimização de dados aprovados. ${htmlFiles.length} páginas: links internos e idioma conferidos.`);
