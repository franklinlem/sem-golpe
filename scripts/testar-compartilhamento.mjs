import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {parse} from 'parse5';
const files=['dist/index.html',...fs.readdirSync('dist/golpes',{withFileTypes:true}).filter(item=>item.isDirectory()).map(item=>`dist/golpes/${item.name}/index.html`)];
function nodes(root){return [root,...(root.childNodes??[]).flatMap(nodes)];}
for(const file of files){
 const all=nodes(parse(fs.readFileSync(file,'utf8')));
 const attr=(node,name)=>node.attrs?.find(a=>a.name===name)?.value;
 const block=all.find(node=>attr(node,'data-share-url')!==undefined);assert.ok(block,file);
 const canonical=attr(all.find(node=>node.tagName==='link'&&attr(node,'rel')==='canonical'),'href');
 assert.equal(attr(block,'data-share-url'),canonical);assert.equal(new URL(canonical).search,'');assert.equal(new URL(canonical).hash,'');
 const wa=nodes(block).find(node=>node.tagName==='a'&&attr(node,'href')?.startsWith('https://wa.me/'));
 assert.ok(wa);assert.ok(new URL(attr(wa,'href')).searchParams.get('text').includes(canonical));
}
const source=fs.readFileSync('src/components/Compartilhar.astro','utf8').split('<script>')[1].split('</script>')[0];
async function testCopy(deny){
 let callback;let copied;let focused=false;let selected=false;
 const field={focus(){focused=true},select(){selected=true}};
 const button={disabled:false,addEventListener(_,fn){callback=fn}};
 const status={textContent:''};const fallback={hidden:true,querySelector(){return field}};
 const block={dataset:{shareUrl:'https://semgolpe.franklem.com/'},querySelector(selector){return selector==='[data-copy-link]'?button:selector==='[data-share-status]'?status:fallback}};
 const navigator={clipboard:{async writeText(value){if(deny)throw Error('Negado');copied=value}}};
 vm.runInNewContext(ts.transpile(source,{target:ts.ScriptTarget.ES2022}),{document:{querySelectorAll:()=>[block]},navigator});
 await callback();assert.equal(button.disabled,false);
 if(deny){assert.equal(fallback.hidden,false);assert.ok(focused&&selected);assert.match(status.textContent,/manualmente/);}
 else{assert.equal(copied,block.dataset.shareUrl);assert.equal(fallback.hidden,true);assert.match(status.textContent,/Link copiado/);}
}
await testCopy(false);await testCopy(true);
console.log(`Compartilhamento: ${files.length} páginas, URL canônica, cópia e alternativa manual aprovados.`);
