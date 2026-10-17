# Sem Golpe

Portal educativo brasileiro sobre prevenção a golpes e segurança digital, planejado para `semgolpe.franklem.com`.

## Aviso importante

Conteúdo educativo. O projeto não substitui polícia, banco, advogado ou atendimento de emergência e não recebe ocorrências, denúncias ou provas.

## Recursos

- Identificador educativo de sinais de risco
- Verificador local de links (não abre nem consulta o endereço)
- Gerador de prompt seguro para IA
- Checklist local para preservar registros
- Diretório de canais oficiais
- Guias introdutórios em revisão editorial, fora do sitemap
- Roteiro de ação com referências oficiais para Pix e São Paulo

## Stack

Astro, TypeScript e CSS. A saída é totalmente estática e adequada à hospedagem compartilhada da Hostinger.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação e build

```bash
npm run check
npm run build
npm run preview
npm test
```

## Privacidade

As ferramentas executam no navegador. Não introduza telemetria que registre links, contexto, respostas ou conteúdo digitado pelo usuário. Consulte as páginas de privacidade, cookies e metodologia antes de adicionar serviços externos.

## Autoria

Desenvolvido por Franklin Martins, Investigador de Polícia de Classe Especial, com 25 anos de experiência na Polícia Civil do Estado de São Paulo. Projeto pessoal e independente.

## Licença

Todos os direitos reservados até a definição separada das licenças do código, conteúdo e identidade visual.

## Estado editorial

O site está em beta. As fichas de modalidades de golpes ainda precisam de revisão de fontes e permanecem marcadas como `noindex`; não publique o sitemap dessas fichas antes de concluir a checagem editorial.


## Pacote de publicação

Execute `npm run release` em Linux ou no GitHub Actions. O comando roda os testes, gera a build, verifica links internos e arquivos obrigatórios e cria `release/sem-golpe.tar.gz` e `release/SHA256SUMS`. O arquivo contém somente a saída estática, com `index.html` e `.htaccess` na raiz. A CI disponibiliza o pacote como artefato por 14 dias.

Antes de publicar, confirme no hPanel a pasta exclusiva de `semgolpe.franklem.com` e faça backup dos arquivos existentes. Extraia o pacote nessa pasta, sem alterar outros sites. Confira home, ferramentas, `/404.html`, `/robots.txt`, `/sitemap-index.xml` e `/version.json`. Preserve o pacote anterior para rollback. A geração do pacote não executa deploy.
