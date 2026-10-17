import {parse,serialize} from 'parse5';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const destinoPix='https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca';
const excluded=new Set(['a','button','script','style','textarea','input','select','option','summary','label','svg','code','pre']);
export function vincularFontes(html){
 const doc=parse(html); let count=0;
 function visit(node,insideMain=false,blocked=false){
  const active=insideMain||node.tagName==='main';
  const skip=blocked||excluded.has(node.tagName)||node.attrs?.some(a=>a.name==='data-no-auto-links');
  if(!node.childNodes)return;
  const children=[];
  for(const child of node.childNodes){
   if(child.nodeName==='#text'&&active&&!skip){
    const regex=/\b(?:pix|banco central)\b/gi;let last=0,match;
    while((match=regex.exec(child.value))){
     if(match.index>last)children.push({nodeName:'#text',value:child.value.slice(last,match.index),parentNode:node});
     const anchor={nodeName:'a',tagName:'a',namespaceURI:'http://www.w3.org/1999/xhtml',attrs:[{name:'href',value:destinoPix},{name:'class',value:'official-reference'}],childNodes:[],parentNode:node};
     anchor.childNodes.push({nodeName:'#text',value:match[0],parentNode:anchor});children.push(anchor);count++;last=match.index+match[0].length;
    }
    if(last){if(last<child.value.length)children.push({nodeName:'#text',value:child.value.slice(last),parentNode:node});}else children.push(child);
   }else{visit(child,active,skip);children.push(child);}
  }
  node.childNodes=children;
 }
 visit(doc);return {html:serialize(doc),count};
}
export default function linksOficiais(){return {name:'sem-golpe-links-oficiais',hooks:{'astro:build:done':async({dir,logger})=>{
 let total=0;
 async function walk(folder){for(const item of await fs.readdir(folder,{withFileTypes:true})){const file=path.join(folder,item.name);if(item.isDirectory())await walk(file);else if(file.endsWith('.html')){const result=vincularFontes(await fs.readFile(file,'utf8'));if(result.count){await fs.writeFile(file,result.html);total+=result.count;}}}}
 await walk(fileURLToPath(dir));logger.info(`${total} menções vinculadas à fonte oficial.`);
}}};}
