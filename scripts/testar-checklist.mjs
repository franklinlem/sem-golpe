import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const compiled=ts.transpile(fs.readFileSync('src/data/provas.ts','utf8'),{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022});
const {itensProvas,exportarChecklist}=await import('data:text/javascript;base64,'+Buffer.from(compiled).toString('base64'));
assert.equal(new Set(itensProvas.map(item=>item.id)).size,itensProvas.length);
const empty=exportarChecklist(new Set());
assert.equal(empty.split('\n').filter(line=>line.startsWith('[ ]')).length,itensProvas.length);
const marked=exportarChecklist(new Set(['conversas','pagamentos','dado-nao-previsto']));
assert.equal(marked.split('\n').filter(line=>line.startsWith('[x]')).length,2);
assert.ok(!marked.includes('dado-nao-previsto'));
assert.match(marked,/Não substitui perícia/);
for(const slug of ['pix','falsa-central-bancaria','falso-boleto','whatsapp-falso-parente']){
 const html=fs.readFileSync(`dist/golpes/${slug}/index.html`,'utf8');
 assert.match(html,/Fontes e acompanhamento editorial/);
 assert.match(html,/2026-10-17/);
 assert.match(html,/Perguntas frequentes/);
 for(const route of ['/pix-med/','/preservar-provas/','/onde-denunciar/'])assert.ok(html.includes(`href="${route}"`));
}
for(const page of ['pix-med','preservar-provas','onde-denunciar']){
 const html=fs.readFileSync(`dist/${page}/index.html`,'utf8');
 assert.match(html,/Fontes conferidas em/);
 assert.match(html,/Próxima checagem prevista/);
}
assert.match(fs.readFileSync('dist/pix-med/index.html','utf8'),/80 dias/);
assert.match(fs.readFileSync('dist/onde-denunciar/index.html','utf8'),/não resolve casos individuais/);
console.log('Exportação do checklist, referências cruzadas, fontes e datas editoriais aprovadas.');
