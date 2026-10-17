# Continuação do Sem Golpe — 17/10/2026

## Objetivo
Retomar o código existente, validar a versão inicial e preparar publicação estática na Hostinger em semgolpe.franklem.com.

## Etapas
1. Conferir planejamento e código da branch main do repositório privado franklinlem/sem-golpe.
2. Confirmar acesso à Hostinger e configuração existente, sem recriar o site.
3. Recuperar cópia local do código sem alterar o planejamento anexado.
4. Instalar dependências reproduzíveis, executar checagem e build e inspecionar HTML, links internos e configuração de segurança e indexação.
5. Documentar diferenças entre a versão inicial e o MVP completo. Preparar arquivo estático com index.html na raiz.
6. Publicar após confirmação específica exigida pelo plugin Hostinger e verificar HTTPS, conteúdo, rotas e cabeçalhos.

## Critérios
- Manter processamento local das ferramentas e ausência de telemetria sensível.
- Não ativar publicidade ou analytics nem inventar aprovação editorial.
- Não declarar MVP completo sem todos os critérios do planejamento.
- Preservar fonte e gerar artefato de publicação separado.

## Estado confirmado
- GitHub acessível; main em 833a6c9e5ec343267e860c051187cb91bfd7ffa8.
- Hostinger acessível; domínio já criado, conta u568310789.
- Nenhum repositório Git vinculado ao site na Hostinger.

## Revisão solicitada em 17/10/2026
1. Substituir política preliminar por descrição da operação atual: ferramentas locais, hospedagem/CDN, registros técnicos, contato editorial, ausência de anúncios/analytics e atualização futura.
2. Incluir modalidade falso boleto, com retirada da segunda via em canal oficial, conferência do beneficiário e roteiro após pagamento; citar Banco Central e Febraban.
3. Substituir conversa desenhada na home pela imagem fictícia fornecida, otimizada em WebP, com dimensões, carregamento tardio, descrição acessível e transcrição; repetir no guia de falso parente.
4. Executar build e verificação de links, conferir layout e preparar publicação da revisão autorizada pelo usuário.

## Verificador com consulta pública de DNS
- Problema: análise sintática não verifica existência do endereço.
- Implementar consulta opcional explícita ao Google Public DNS (API JSON DoH), somente após clique em Consultar DNS público.
- Enviar exclusivamente hostname normalizado; descartar credenciais, caminho, parâmetros e fragmento. Informar domínio e provedor antes do clique; atualizar privacidade e CSP.
- Consultar A e AAAA; distinguir NXDOMAIN, domínio sem IP, falha/timeout e resolução positiva, sem associar existência a legitimidade.
- Não visitar o endereço suspeito. IPs literais não recebem uma falsa consulta de existência DNS.
- Oferecer acesso à consulta pública RDAP/WHOIS da ICANN como investigação complementar, sem fingir consulta de reputação.
- Cancelar consulta ao limpar ou iniciar outra análise e impedir resultado antigo sobre endereço novo.
- Testar respostas simuladas de DNS, falhas e minimização de dados, compilar, publicar e verificar domínio existente e inexistente no navegador.
- Referência: https://developers.google.com/speed/public-dns/docs/doh/json

## Consulta pública de banco e agência
1. Obter relação oficial de participantes STR (código bancário/ISPB) e agências (OData Informes_Agencias) do Banco Central.
2. Gerar snapshot estático por instituição, com origem, licença ODbL, data de coleta e posição do cadastro; relacionar pelo identificador institucional de oito dígitos e registrar cobertura/limites. Sem busca aproximada por nome de banco ou por sequencial do CNPJ.
3. Página /consultar-agencia/: dois campos (código bancário e agência), normalização de zeros e dígito separado por hífen; endereço, nome, cidade/UF, CEP, código cadastral, data e fonte.
4. Quando a combinação não constar, não inventar localização ou usar sede. Oferecer busca web explícita só com banco e agência, informando destino.
5. Dados são arquivos públicos do próprio portal, filtrados no navegador; nenhum número de conta, CPF, comprovante ou nome de cliente é solicitado.
6. Adicionar ferramentas/home, atualizar privacidade e README, testar códigos repetidos entre bancos, zeros, hífen, ausências, falhas e links. Build, deploy, verificação em produção e commit.
7. Criar script reproduzível para atualizar a base; atualização automática requer monitorar mudanças de schema e cobertura, sem publicar snapshot vazio.
Fontes: https://dadosabertos.bcb.gov.br/dataset/agencias ; https://www.bcb.gov.br/content/estabilidadefinanceira/str1/ParticipantesSTR.csv
