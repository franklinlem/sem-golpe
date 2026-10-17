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
