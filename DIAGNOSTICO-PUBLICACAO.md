# Diagnóstico de publicação — 17/10/2026

## Acessos confirmados
- GitHub: repositório privado `franklinlem/sem-golpe`, branch `main`, commit `833a6c9e5ec343267e860c051187cb91bfd7ffa8`.
- Código recuperado pelo conector GitHub para o diretório local; esta cópia ainda não é um checkout Git.
- Hostinger: site `semgolpe.franklem.com`, conta `u568310789`; criação concluída, site habilitado.
- Raiz remota: `/home/u568310789/domains/semgolpe.franklem.com/public_html`.
- A lista de repositórios Git vinculados ao site está vazia.

## Impedimentos observados
- Acesso HTTPS pelo domínio expirou em 20 segundos. Teste direto ao IP usado pelo registro FTP do domínio também expirou; esse IP não foi confirmado como origem do site.
- A zona DNS de `franklem.com` retornada pela Hostinger não contém registro específico `semgolpe`. Confirmar nameservers autoritativos e IP/origem corretos antes de alterar DNS.
- Instalação de dependências falhou por `ETIMEDOUT`, inclusive com execução fora do sandbox e nova tentativa com prazo maior. A tentativa inicial também encontrou cache npm não gravável dentro do sandbox.
- Build e testes de navegador não foram concluídos. Nenhum arquivo foi publicado e nenhum registro DNS foi alterado.

## Estado do produto
A versão recuperada tem 12 modalidades de golpes, três ferramentas, página de ação para vítimas, Sobre, Privacidade e Aviso legal. Ela é uma versão inicial; não representa o MVP completo do planejamento.

Pendências incluem cinco ferramentas completas, busca local, páginas editoriais e institucionais restantes, fontes e revisão por guia, testes funcionais/acessibilidade, CI/CD com artefato e rollback, validação editorial e verificação de produção.

## Revisões técnicas antes da publicação
- O verificador de links calcula domínio aparente pelos dois últimos rótulos: em domínios brasileiros pode exibir `com.br` em vez do domínio registrável. Corrigir antes de lançamento público.
- A política CSP atual permite scripts inline; revisar endurecimento e comportamento das ferramentas.
- Cache longo para SVGs sem versão pode manter favicon e imagem social antigos; preferir revalidação nesses arquivos e cache longo para assets com hash.
- Não há evidência de revisão editorial final; não ativar publicidade, analytics ou declarar MVP pronto.

## Próxima execução
1. Concluir `npm ci` e `npm run build`.
2. Corrigir e testar problemas identificados; validar navegação e ferramentas no navegador.
3. Confirmar DNS autoritativo, origem e HTTPS.
4. Gerar arquivo contendo somente `dist/`, com `index.html` na raiz.
5. Obter confirmação específica para escrita na Hostinger quando artefato e alterações estiverem prontos para revisão, conforme SKILL.md do plugin.
6. Publicar e conferir conteúdo, rotas, robots, sitemap, cabeçalhos e 404 em produção.

## Atualização após validação local
- Usuário confirmou subdomínio e SSL ativo; HTTPS agora retorna 200 e conteúdo da página padrão Hostinger.
- Build local concluído com zero erros, avisos e hints: 23 páginas estáticas.
- Verificador corrigido para exibir hostname completo, rejeitar protocolos fora de HTTP(S) e renderizar resultados com textContent.
- Cache de SVGs sem hash reduzido para um dia.
- `node scripts/verificar-publicacao.mjs`: oito cenários do verificador e links internos das 23 páginas aprovados.
- Pacote preparado: `sem-golpe_20261017_091128.zip`, somente arquivos de dist, incluindo .htaccess e index.html na raiz.
- Prévia no navegador não acessível por localhost (ERR_CONNECTION_REFUSED); não há validação visual concluída nesta sessão.
- Fonte modificada apenas localmente; alterações ainda não enviadas ao GitHub.
- Publicação aguarda confirmação específica exigida pela skill Hostinger; não houve alteração remota.

## Publicação concluída — 17/10/2026
- Publicação autorizada explicitamente pelo usuário e executada via Hostinger Connector.
- Pacote sem-golpe_20261017_091128.zip publicado; home exibe o conteúdo Sem Golpe por HTTPS.
- Rotas de três ferramentas, Fui vítima e guia de falso advogado responderam HTTP 200.
- robots.txt e sitemap-index.xml responderam HTTP 200; rota inexistente retornou 404 personalizado.
- Cabeçalhos CSP, nosniff, DENY, Referrer-Policy e Permissions-Policy confirmados em produção.
- Home conferida visualmente no Chrome; verificador testado com banco.com.br@fraude.example, exibindo corretamente fraude.example e alerta de credenciais, também acionado por Enter.
- Continua sendo versão inicial, com pendências do MVP e alterações locais ainda não sincronizadas ao GitHub.

## Revisão publicada — privacidade, falso boleto e imagem
- Política de privacidade substituída por descrição da operação atual, removendo o aviso de ambiente de desenvolvimento.
- Novo guia /golpes/falso-boleto/ com fontes Banco Central e Febraban; incluído entre os destaques da home.
- Imagem fictícia do usuário incorporada na home e no guia de falso parente, com WebP responsivo (15–38 KB), dimensões 640x960, lazy loading, legenda e transcrição.
- Removido aviso de pré-lançamento do template dos guias, preservando aviso educativo.
- Build: 24 páginas, zero erros/avisos/hints; verificação de links internos e oito cenários do verificador aprovados.
- Publicado pacote sem-golpe_20261017_094000.zip na Hostinger. Rotas atualizadas e imagem retornam HTTP 200; imagem servida como image/webp.
- Guia novo e transcrição conferidos no Chrome; imagem visualmente carregada.
- Alterações permanecem locais; sincronização ao GitHub segue pendente.

## Sincronização com GitHub
Código, imagem original, verificação de publicação e documentação reunidos em um commit na branch main. Pacotes ZIP, dist e node_modules não integram este commit.

## Verificador com DNS público — publicado em 17/10/2026
- Consulta opcional real de registros A/AAAA ao Google Public DNS, com divulgação prévia de hostname e provedor, sem caminho, query, credenciais ou fragmento.
- NXDOMAIN, resolução positiva, ausência de IP e erros tratados separadamente; timeout de 10s, cancelamento e proteção contra resultados antigos.
- Link complementar para consulta RDAP/WHOIS na ICANN. Não há consulta automatizada de reputação ou de registro nesta versão.
- Política de privacidade, CSP, home e README atualizados.
- Build sem erros; cenários locais, DNS simulado, privacidade das solicitações e links das 24 páginas aprovados.
- Publicado sem-golpe_20261017_100000.zip. Chrome: example.com exibiu IPv4/IPv6; teste-sem-golpe-20261017.invalid exibiu NXDOMAIN. Falha transitória da primeira consulta exibiu mensagem inconclusiva corretamente.

## Consulta de banco e agência — publicada em 17/10/2026
- Página /consultar-agencia/ adicionada à home e ferramentas; apenas código de banco e agência, sem dados de cliente.
- Fonte oficial BCB: 13.663 registros de agência na fonte; 12.898 vinculados por identificadores exatos à relação STR; 461 códigos bancários no índice. Posição 15/10/2026, coleta 17/10/2026.
- Arquivos de banco carregados da própria hospedagem; número de agência filtrado localmente. Busca Google opcional e explícita. Política de privacidade atualizada.
- Base derivada sob ODbL com atribuição, fontes, documentação de cobertura e script de atualização reproduzível.
- Testes de normalização, zeros, dígito após hífen, busca exata, ausências e integridade dos 461 arquivos aprovados; build sem erros/avisos, 25 páginas, links internos aprovados.
- Pacote sem-golpe_20261017_101000.zip publicado via Hostinger. Chrome: banco 104, agência 02816-0 exibiu Barra Velha/SC, Rua Gov. Celso Ramos, 381, CEP 88390-000, conforme a fonte.

## Guias de resposta e revisão editorial — publicados em 17/10/2026
- Ampliados Pix, falsa central, falso boleto e falso parente com fontes, dúvidas, autoria e datas de conferência.
- Criados /pix-med/, /preservar-provas/ e /onde-denunciar/, integrados a Fui vítima, ferramentas e rodapé.
- Checklist com oito itens locais, TXT e impressão, sem dados do caso. Privacidade atualizada.
- Build sem erros/avisos/hints: 28 páginas. Testes de exportação, fontes/datas e links, agências e DNS aprovados. CI passa a executar npm test após o build.
- Publicado sem-golpe_20261017_103600.zip; sete rotas revisadas responderam HTTP 200 e mostram fontes/datas corretas.
- Chrome: duas marcações atualizam contador para 2/8; exportação TXT confirmada nos arquivos baixados (oito itens, com e sem duas marcações). Monitoramento de evento de download pela automação expirou, mas os arquivos reais foram baixados e conferidos.
- Layout do checklist e canais oficiais conferido em largura de celular, sem rolagem horizontal; viewport restaurado ao final.
- Revisão de fontes não é apresentada como aprovação jurídica ou institucional. Checagem prevista para 17/11/2026 não é execução automática.

## Impressão do checklist corrigida — 17/10/2026
- CSS de impressão específico em preservar-provas limita saída ao formulário do checklist, título, orientação curta e origem.
- Textos do guia, fontes, navegação e rodapé não aparecem na impressão; caixas de seleção em esquema claro preservam marcações.
- Build sem erros e testes aprovados. Publicado sem-golpe_20261017_105000.zip.
- Conferido no Chrome com emulação de mídia print: somente checklist e marcações visíveis. Mídia restaurada ao final.

## Links contextuais oficiais — 17/10/2026
- Transformação de HTML no build vincula menções a Pix e Banco Central à página oficial BCB Segurança no Pix, sem JavaScript no navegador.
- Preserva fontes e destinos já vinculados, controles interativos, scripts, metadados, campos e conteúdo fornecido pelo usuário.
- 36 menções vinculadas; build sem erros e testes de segurança estrutural/idempotência e demais ferramentas aprovados.
- Publicado sem-golpe_20261017_105700.zip. Home, Pix/MED, guia Pix e Fui vítima retornaram 200 com links contextuais.

## Segunda rodada de guias — publicada em 17/10/2026
- Ampliados falso advogado, intermediário de veículo, falso leilão e falso trader, com exemplos fictícios, orientações, perguntas, fontes e datas.
- Conteúdo em revisoes-negociacoes.json, integrado ao template e aos links oficiais. Oito modalidades agora têm revisão ampliada; cinco continuam pendentes.
- Fonte de notícia de leilão temporariamente restrita substituída pela página pública de serviço da Receita Federal; regras específicas não generalizadas.
- Build: 28 páginas, zero erros/avisos/hints, 38 menções com links oficiais. npm test aprovado após build concluído; tentativa anterior em paralelo ao build falhou porque dist estava sendo recriado, sem defeito funcional.
- Pacote sem-golpe_20261017_110300.zip publicado. Quatro rotas responderam 200 com fontes e perguntas.
- Chrome: guia de falso advogado, expansão de pergunta e resposta visível conferidos; sem rolagem horizontal na largura observada de 645px.

## Compartilhamento, OAB e ajustes de guias — 17/10/2026
- ConfirmADV nas Ferramentas como acesso externo oficial; não localizada documentação de API pública nas fontes oficiais pesquisadas. Não houve integração por endpoints internos.
- Links contextuais OAB, ConfirmADV e denúncia à OAB incluídos; frase completa recebe destino de denúncia.
- Home e 13 tipos de golpe com WhatsApp (título + URL canônica) e copiar link, com alternativa manual. Privacidade atualizada.
- Veículo: documento, pagamento ao proprietário e nota fiscal condicional. Leilão: Maps/Street View como checagem complementar. Trader: perfis falsos, promessas sem risco e avatares IA; sem generalização estatística por escolaridade.
- Build: 28 páginas, zero erros/avisos/hints. npm test incluindo compartilhamento de 14 páginas, cópia/fallback e novos destinos aprovado.
- Publicado sem-golpe_20261017_113500.zip. Seis rotas conferidas HTTP 200 com textos/destinos.
- Chrome: destinos OAB e denúncia, estado Link copiado e href WhatsApp conferidos, sem envio de mensagem. Layout em largura útil 375px sem rolagem horizontal; viewport restaurado.

## Identidade visual — 17/10/2026
- Artes fornecidas preservadas em public/marca; logo WebP de 600 px aplicado com dimensões explícitas no cabeçalho e rodapé.
- Favicons ICO/32px e Apple Touch 180px ativos. Prévia Open Graph substituída por PNG 1200×630 sobre fundo escuro, com URL absoluta, tipo, dimensões e texto alternativo.
- Maps vinculado ao Google Maps no guia de falso leilão.
- Build: 28 páginas, zero erros/avisos. Suíte completa aprovada e metadados conferidos nas 28 páginas.
- Produção: HTML, imagem social, logo e ícones com HTTP 200 e tipos corretos; Maps conferido no HTML publicado. Navegador desktop e móvel sem transbordamento (375px úteis).
- A renderização final da prévia no WhatsApp não foi testada por envio de mensagem; o serviço pode manter cache da URL.
