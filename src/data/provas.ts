export const itensProvas=[
 {id:'cronologia',text:'Organizar uma cronologia com datas, horários, valores e descrição objetiva do ocorrido.'},
 {id:'conversas',text:'Guardar as mensagens e capturas disponíveis, com contexto, número ou identificação do perfil e horários.'},
 {id:'enderecos',text:'Anotar URLs, nomes de usuário, e-mails e números de telefone envolvidos, sem abrir novamente links suspeitos.'},
 {id:'pagamentos',text:'Guardar comprovantes completos, identificadores das transações e o banco/agência informados.'},
 {id:'arquivos',text:'Preservar arquivos recebidos e e-mails originais, sem executar anexos ou alterar o material.'},
 {id:'protocolos',text:'Anotar protocolos e datas de atendimento do banco, prestadora ou plataforma.'},
 {id:'copia',text:'Manter uma cópia protegida dos registros, sem publicar dados de terceiros ou enviá-los ao Sem Golpe.'},
 {id:'registro',text:'Registrar a ocorrência e guardar protocolo/boletim e orientações de apresentação dos arquivos.'}
];
export function exportarChecklist(marcados:Set<string>){return 'SEM GOLPE — CHECKLIST DE PRESERVAÇÃO\nMarcar um item indica sua própria conferência, não valida a prova.\n\n'+itensProvas.map(item=>`[${marcados.has(item.id)?'x':' '}] ${item.text}`).join('\n')+'\n\nGuia educativo: https://semgolpe.franklem.com/preservar-provas/\nNão substitui perícia ou orientação da autoridade responsável.\n';}
