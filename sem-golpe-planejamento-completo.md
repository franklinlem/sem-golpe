# Sem Golpe — Planejamento completo do portal

**Projeto:** Guia de segurança digital e prevenção a fraudes  
**Endereço planejado:** `https://semgolpe.franklem.com`  
**Responsável editorial e autor:** Franklin Martins — Investigador de Polícia de Classe Especial, com 25 anos de experiência na Polícia Civil do Estado de São Paulo  
**Contato profissional:** `franklin.martins@policiacivil.sp.gov.br`  
**Página pessoal:** `https://franklem.com`  
**Hospedagem:** Hostinger Business Web Hosting  
**Modelo inicial de monetização:** Google AdSense  
**Status:** proposta para revisão antes do desenvolvimento  
**Versão do planejamento:** 1.0 — 17/10/2026

---

## 1. Recomendação executiva

Criar um portal brasileiro, gratuito e acessível que ajude pessoas comuns a reconhecer sinais de golpes, agir rapidamente após uma fraude, preservar provas e localizar os canais oficiais adequados. O diferencial não deve ser apenas publicar artigos: a página inicial e os guias devem conduzir o visitante por **ferramentas interativas, fluxos visuais, checklists, simuladores educativos e ações de emergência**.

A arquitetura recomendada é:

- **Astro** para geração de páginas estáticas e SEO;
- **TypeScript** para as ferramentas interativas;
- **CSS próprio**, sem framework visual pesado;
- conteúdo em **Markdown/MDX**, versionado no GitHub;
- **Pagefind** para pesquisa local, sem enviar consultas a terceiros;
- compilação no **GitHub Actions** e publicação dos arquivos estáticos na Hostinger;
- PHP somente em uma fase posterior, se houver formulário ou serviço que realmente exija backend;
- nenhuma mensagem, imagem, link ou documento suspeito enviado ao servidor no MVP.

Essa abordagem é compatível com hospedagem compartilhada: a Hostinger Business aceita sites, PHP, Git e tarefas Cron, mas Node.js exige VPS. O Node será usado somente no ambiente de compilação, não em produção.

### Resultado esperado do MVP

Um portal com 15 guias completos, 5 ferramentas interativas, uma central “Fui vítima agora”, páginas institucionais, pesquisa, glossário, alertas e estrutura técnica pronta para AdSense, Search Console e expansão editorial.

### Indicadores iniciais de sucesso (primeiros 6 meses)

| Indicador | Meta de validação |
|---|---:|
| Páginas indexadas válidas | ≥ 90% das URLs enviadas |
| LCP p75 em dispositivos móveis | ≤ 2,5 s |
| INP p75 | ≤ 200 ms |
| CLS p75 | ≤ 0,1 |
| Visitantes orgânicos/mês | 5.000 após 6 meses (hipótese) |
| Retorno à busca após visitar a página | redução progressiva, avaliada indiretamente por engajamento |
| Conclusão do identificador educativo | ≥ 55% dos usuários que o iniciarem |
| Cliques em canais oficiais | medição sem registrar conteúdo sensível |
| Conteúdo revisado no prazo | 100% dos artigos críticos a cada 90 dias |

As metas de tráfego e receita são hipóteses. Não há garantia de indexação, posicionamento ou aprovação no AdSense.

---

## 2. Propósito, público e posicionamento

### 2.1 Propósito

Reduzir danos causados por golpes digitais por meio de orientação clara, preventiva, acionável e baseada em fontes oficiais.

### 2.2 Público prioritário

- pessoas que receberam uma mensagem, ligação, cobrança ou proposta suspeita;
- vítimas que precisam saber o que fazer imediatamente;
- familiares ajudando idosos ou pessoas com pouca familiaridade digital;
- trabalhadores de escritórios, comércio e administração pública;
- compradores e vendedores de veículos;
- usuários de WhatsApp, Pix, redes sociais, bancos digitais e criptoativos;
- profissionais que desejam distribuir checklists educativos.

### 2.3 Proposta de valor

> **Desconfie. Verifique. Proteja-se.** Identifique sinais de golpe e encontre os próximos passos sem entregar seus dados a desconhecidos.

### 2.4 Princípios editoriais

1. **Ação antes da explicação:** em situação urgente, apresentar primeiro como interromper o dano.
2. **Fontes primárias:** Banco Central, Polícia Civil, Planalto, CERT.br, consumidor.gov.br, instituições financeiras e órgãos oficiais.
3. **Sem promessas:** não afirmar que o site confirma crimes, recupera dinheiro ou garante devolução.
4. **Linguagem simples:** explicar termos técnicos e jurídicos.
5. **Privacidade por padrão:** não coletar evidências, documentos, números bancários ou conversas no MVP.
6. **Atualização visível:** todo guia mostra autor, fontes, data da última revisão e próxima revisão prevista.
7. **Transparência profissional:** informar que o conteúdo é educativo, não atendimento policial, jurídico ou bancário oficial.

### 2.5 Autoridade e limites

A experiência profissional de Franklin deve ser apresentada de forma clara e factual, fortalecendo a credibilidade sem fazer o portal parecer um serviço oficial da Polícia Civil. Não usar brasões, logotipos, fardas, distintivos ou elementos que sugiram representação institucional. Não publicar casos protegidos, dados pessoais, rotinas operacionais, documentos internos ou informações de investigação.

Texto-base recomendado para a página de autor:

> **Franklin Martins** é Investigador de Polícia de Classe Especial e possui 25 anos de experiência profissional na Polícia Civil do Estado de São Paulo. É responsável pelo conteúdo editorial do Sem Golpe, projeto independente de educação e segurança digital. Contato profissional: franklin.martins@policiacivil.sp.gov.br. Página pessoal: franklem.com.

O cargo e a experiência devem ser confirmados antes da publicação e atualizados quando necessário. Incluir, imediatamente após a biografia, um aviso de independência:

> O Sem Golpe é um projeto pessoal e educativo. Não é um canal oficial da Polícia Civil do Estado de São Paulo e não recebe registros de ocorrência, denúncias, pedidos de investigação ou atendimento emergencial.

O e-mail profissional será exibido como meio de contato editorial e de verificação de autoria, não como canal para boletins, envio de provas ou atendimento individual. Recomenda-se apresentá-lo como texto ou link protegido contra coleta automatizada e incluir orientação para que o visitante não envie documentos, senhas, comprovantes, conversas, dados bancários ou informações pessoais. A página `franklem.com` deverá receber futuramente atualização coerente de biografia, identidade, links recíprocos, privacidade e segurança.

Crédito recomendado no rodapé e na página “Sobre”:

> Desenvolvido por **Franklin Martins**, Investigador de Polícia de Classe Especial, com 25 anos de experiência na Polícia Civil do Estado de São Paulo. [franklem.com](https://franklem.com)

O rodapé também deverá oferecer um link separado para “Contato editorial”, com `franklin.martins@policiacivil.sp.gov.br`, e repetir de forma breve que o portal é independente e não recebe ocorrências.

---

## 3. Escopo do produto

### 3.1 MVP — incluído

- página inicial visual e orientada por tarefas;
- botão destacado **“Fui vítima agora”**;
- identificador educativo de sinais de golpe;
- verificador educativo de link, executado localmente;
- construtor de prompt seguro para pedir ajuda a uma IA;
- gerador de checklist de provas;
- guia de canais oficiais por situação;
- guias sobre as modalidades solicitadas;
- central sobre Pix e MED;
- seção de legislação explicada;
- notícias e alertas publicados manualmente e revisados;
- estrutura editorial preparada para futuros resumos anonimizados de ocorrências de estelionato, fraude e golpes;
- busca no conteúdo;
- sitemap, robots.txt, RSS e página HTML com todos os conteúdos;
- páginas Sobre, Metodologia, Política editorial, Correções, Contato, Privacidade, Cookies, Termos e Aviso legal;
- analytics e consentimento configurados de forma compatível com LGPD;
- espaços publicitários preparados, mas ativados somente após conteúdo e políticas estarem maduros.

### 3.2 Fora do MVP

- recebimento ou armazenamento de documentos, prints, áudios e conversas;
- análise automática que declare “é golpe” ou “não é golpe”;
- consulta automática a CPF, CNPJ, chave Pix, placa, conta bancária ou telefone;
- integração com sistemas policiais ou bancários;
- publicação de boletins de ocorrência, peças policiais, números de procedimento ou narrativas que permitam identificar envolvidos;
- denúncia feita em nome da vítima;
- consultoria jurídica individual;
- comentários públicos ou fórum;
- login de usuários;
- aplicativo móvel nativo;
- chatbot generativo próprio;
- raspagem automática de notícias de terceiros;
- API pública.

### 3.3 Expansões futuras

- PWA instalável e modo offline para os checklists;
- boletim por e-mail com consentimento explícito;
- central de golpes contra empresas;
- páginas estaduais de delegacias eletrônicas;
- painel editorial protegido;
- conteúdo em espanhol;
- materiais imprimíveis para idosos, escolas e empresas;
- parcerias com órgãos públicos, associações e entidades de educação digital.

---

## 4. Arquitetura de informação

### 4.1 Navegação principal

- **Início**
- **Fui vítima**
- **Identificar golpe**
- **Tipos de golpe**
- **Ferramentas**
- **Alertas**
- **Onde denunciar**
- **Legislação**
- **Sobre**
- **Autor**

No celular, manter “Fui vítima” como ação persistente no menu, sem cobrir conteúdo nem anúncio.

### 4.2 Mapa de URLs sugerido

```text
/
/fui-vitima/
/fui-vitima/pix/
/fui-vitima/cartao-ou-conta/
/fui-vitima/whatsapp-ou-rede-social/
/fui-vitima/instalei-aplicativo/
/identificar-golpe/
/verificar-link/
/ia-contra-golpes/
/preservar-provas/
/onde-denunciar/
/delegacia-eletronica-sp/
/pix-med/
/golpes/
/golpes/falso-advogado/
/golpes/intermediario-veiculo/
/golpes/falso-leilao/
/golpes/falsa-central-bancaria/
/golpes/whatsapp-falso-parente/
/golpes/pix/
/golpes/roubo-de-conta/
/golpes/clonagem-de-perfil/
/golpes/dom-juan/
/golpes/premio-ou-promocao-falsa/
/golpes/falso-trader/
/golpes/falsa-videochamada/
/alertas/
/alertas/{slug}/
/casos-e-relatos/
/casos-e-relatos/{slug}/
/legislacao/
/legislacao/estelionato-e-fraude-eletronica/
/glossario/
/sobre/
/autor/franklin-martins/
/metodologia/
/politica-editorial/
/correcoes/
/contato/
/privacidade/
/cookies/
/termos/
/aviso-legal/
```

Não criar centenas de páginas programáticas por cidade ou palavra-chave. Cada URL precisa resolver uma necessidade distinta e oferecer conteúdo substancial.

### 4.3 Estrutura padrão de cada guia de golpe

1. resumo de 40–70 palavras;
2. faixa visual com nível de urgência;
3. “Se está acontecendo agora”;
4. como o golpe funciona em etapas;
5. sinais de alerta em cartões ilustrados;
6. exemplo fictício claramente identificado;
7. o que não fazer;
8. como verificar por canais independentes;
9. o que fazer se houve pagamento, invasão ou instalação;
10. provas a preservar;
11. onde comunicar;
12. legislação relacionada em linguagem simples;
13. perguntas frequentes reais;
14. ferramentas relacionadas;
15. fontes oficiais, autor e datas de revisão.

---

## 5. Experiência visual — não ser uma página só de texto

### 5.1 Identidade

| Token | Cor sugerida | Uso |
|---|---|---|
| `--bg` | `#090909` | fundo principal |
| `--surface` | `#151515` | cartões e blocos |
| `--surface-2` | `#202020` | campos e áreas elevadas |
| `--text` | `#F7F7F5` | texto principal |
| `--muted` | `#B7B7B2` | texto secundário |
| `--orange` | `#FF7A00` | marca e ações principais |
| `--orange-light` | `#FFB15C` | destaque e foco |
| `--danger` | `#FF4D4D` | emergência/alto risco |
| `--success` | `#49C77A` | ação protetiva concluída |
| `--border` | `#353535` | divisórias |

O laranja não deve ser usado em parágrafos longos. Botões precisam manter contraste AA, foco visível e estados hover/focus/disabled distinguíveis sem depender apenas da cor.

### 5.2 Tipografia

- fonte de sistema no MVP: `Inter` somente se auto-hospedada; alternativa preferida para desempenho: `system-ui`, `Segoe UI`, Roboto, Arial, sans-serif;
- tamanho base mínimo de 17 px;
- largura de leitura de 65–75 caracteres;
- títulos curtos e hierarquia sem saltos;
- números de emergência e ações com peso visual elevado.

### 5.3 Componentes visuais

- cards com ícones SVG próprios;
- linha do tempo “como o golpe acontece”;
- árvore de decisão no identificador;
- comparações “sinal legítimo × sinal suspeito”;
- checklists com progresso local;
- fluxos de ação por método de pagamento;
- exemplos de conversas **fictícias** em balões, sem números reais;
- diagramas simplificados de movimentação do dinheiro;
- acordeões acessíveis para perguntas frequentes;
- caixas “pare, verifique, aja”;
- cartões de fonte oficial;
- infográficos exportáveis em SVG/PNG;
- vídeos curtos opcionais, sempre com legenda e poster otimizado.

### 5.4 Home page proposta

1. **Hero:** “Recebeu algo suspeito?” + dois botões: “Identificar sinais” e “Fui vítima agora”.
2. **Seletor visual:** Mensagem, ligação, Pix, veículo, investimento, relacionamento ou promoção.
3. **Identificador rápido:** 5 perguntas, sem solicitar dados pessoais.
4. **Golpes em destaque:** cards ilustrados.
5. **Ações imediatas:** banco, conta, aparelho e provas.
6. **Alertas recentes:** três cards com data e fonte.
7. **Ferramentas:** link, IA segura, checklist e canais oficiais.
8. **Como trabalhamos:** fontes, revisão humana e limites.
9. **Autor:** bio curta, experiência e transparência.
10. **Newsletter futura:** somente após infraestrutura de consentimento.

### 5.5 Imagens

Priorizar ilustrações próprias em SVG para consistência, tamanho reduzido e ausência de disputa autoral. Temas: escudo, conversa suspeita, chamada bancária, anúncio de veículo, martelo de leilão, gráfico enganoso, câmera e compartilhamento de tela.

Quando foto real for necessária, usar apenas acervos com licença adequada, como Unsplash, Pexels ou Wikimedia Commons, registrando em `content/credits/images.yml`: URL original, autor, licença, data de acesso, alterações e página de uso. Não copiar imagens de matérias jornalísticas, bancos, delegacias ou concorrentes. Remover metadados EXIF e gerar AVIF/WebP em tamanhos responsivos. Imagens geradas por IA devem ser identificadas internamente e não reproduzir marcas ou documentos oficiais.

---

## 6. Ferramentas interativas

### 6.1 Identificador educativo de sinais de golpe

**Objetivo:** orientar o usuário por padrões de risco, sem diagnosticar crime.

Perguntas adaptativas:

- houve urgência, segredo ou ameaça?
- pediram pagamento, Pix, código, senha ou instalação de aplicativo?
- o contato veio por canal diferente do habitual?
- há promessa de lucro, prêmio ou vantagem desproporcional?
- impediram a confirmação por outro canal?
- os dados de pagamento pertencem a terceiro?
- pediram compartilhamento de tela ou acesso remoto?

**Saída:** “Poucos”, “Vários” ou “Muitos sinais de risco”, acompanhada de explicação, próximos passos e links oficiais. Nunca exibir “é seguro” ou “é golpe confirmado”. O algoritmo será determinístico e documentado; respostas permanecem em memória/localStorage somente com opção clara de limpar.

### 6.2 Verificador educativo de links

Processamento local no navegador. Recursos:

- normalizar e exibir domínio real;
- destacar subdomínio, caracteres parecidos, punycode, IP no lugar de domínio, porta incomum, encurtador e protocolo;
- informar que HTTPS/cadeado não prova legitimidade;
- botão para copiar apenas o domínio;
- orientação para abrir o site oficial digitando o endereço, sem acessar o link recebido;
- links opcionais para serviços externos oficiais/reputacionais, com aviso de que a URL será enviada a terceiros somente após consentimento.

**Limite de segurança:** a ferramenta não deve fazer requisição automática ao endereço fornecido, gerar preview remoto, baixar conteúdo, seguir redirecionamentos nem armazenar a URL. Isso evita SSRF, rastreamento e exposição de tokens presentes no link.

### 6.3 Construtor de prompt seguro para IA

Fluxo:

1. selecionar o tipo de conteúdo suspeito;
2. receber instruções para ocultar nome, CPF, telefone, endereço, placa, chaves, códigos, QR Codes, dados bancários e rostos;
3. escolher o objetivo: identificar sinais, criar perguntas de verificação, resumir riscos ou organizar provas;
4. gerar um prompt copiável;
5. lembrar que IA pode errar e não substitui banco, polícia ou advogado.

Exemplo de prompt-base:

> Analise apenas os sinais de possível fraude no texto abaixo. Não conclua que é legítimo ou criminoso. Liste pressão, urgência, pedido de segredo, solicitação financeira, inconsistências e meios independentes de verificação. Não sugira clicar em links nem ligar para números presentes na mensagem. Ocultei meus dados pessoais. Texto: [cole aqui].

O portal não receberá upload no MVP. O conteúdo será colado diretamente pelo usuário na IA que ele escolher, após anonimização. Incluir instrução especial: documentos oficiais, boletins de ocorrência, extratos, conversas íntimas e imagens de terceiros não devem ser enviados sem remoção dos dados pessoais e compreensão da política do serviço escolhido.

### 6.4 Checklist para preservar provas

Checklist por tipo de ocorrência:

- capturas completas, com data, hora, perfil e contexto;
- URL e nome do perfil;
- número de telefone e identificadores visíveis;
- comprovante e ID da transação;
- extrato que mostre a saída, evitando exposição pública;
- e-mails originais e cabeçalhos quando aplicável;
- anúncio, descrição, fotos e termos apresentados;
- protocolos do banco e plataformas;
- linha do tempo dos fatos;
- arquivos originais preservados sem edição.

Permitir imprimir ou exportar um PDF **sem incluir as evidências**, apenas a lista marcada e um campo opcional de linha do tempo digitado localmente. Antes da exportação, avisar que o arquivo gerado pode conter o texto inserido pelo usuário.

### 6.5 Assistente “Onde comunicar”

Árvore de decisão por estado, urgência, tipo de fraude, método de pagamento, comprometimento de conta e existência de ameaça. Para São Paulo, direcionar à Delegacia Digital oficial e explicar que o serviço atende fatos ocorridos no estado. Em emergência ou risco físico, orientar 190; para comunicação policial não emergencial, os canais apropriados; para banco, canal oficial dentro do app ou verso do cartão.

Os links externos devem mostrar o domínio de destino e abrir com `rel="noopener noreferrer"`. Canais e telefones precisam ter data de revisão.

### 6.6 Simulador de abordagem

Recurso adicional recomendado: mostrar conversas fictícias e pedir ao usuário que identifique sinais. Ao final, revelar os padrões. Não usar conteúdo real de vítimas. Excelente para retenção, compartilhamento e educação de familiares.

---

## 7. Conteúdo editorial inicial

### 7.1 Guias obrigatórios

| Guia | Intenção principal | Elemento visual/interativo |
|---|---|---|
| Falso advogado | reconhecer cobrança/contato em processo | fluxo de confirmação por canal independente |
| Intermediário de veículo | evitar triangulação entre vendedor e comprador | diagrama das três partes |
| Falso leilão | conferir leiloeiro, domínio, edital e pagamento | checklist pré-arremate |
| Falsa central bancária | interromper engenharia social | simulação de ligação |
| WhatsApp/falso parente | validar identidade | cartão “pergunta de segurança familiar” |
| Golpes com Pix | agir rápido e acionar o banco | linha do tempo MED |
| Roubo de conta | recuperar acesso e sessões | passos por prioridade |
| Clonagem de perfil | denunciar e avisar contatos | checklist de contenção |
| Dom Juan | reconhecer manipulação afetiva/financeira | ciclo da abordagem |
| Prêmio/promoção falsa | checar organizador e regulamento | comparação de sinais |
| Falso trader | avaliar promessa e pressão | calculadora educativa de promessa irreal, sem recomendar investimento |
| Falsa videochamada | impedir compartilhamento de tela e acesso remoto | mapa de permissões perigosas |

### 7.2 Conteúdos transversais

- como conferir uma identidade por canal independente;
- por que o cadeado HTTPS não garante legitimidade;
- encurtadores, QR Codes e domínios parecidos;
- autenticação em dois fatores e chaves de acesso;
- proteção do WhatsApp e recuperação de conta;
- como revisar aplicativos de acesso remoto;
- segurança para familiares idosos;
- plano familiar contra o falso parente;
- como falar com o banco sem usar o número recebido;
- engenharia social: urgência, autoridade, medo, escassez e reciprocidade;
- privacidade ao usar IA para analisar material suspeito.

### 7.3 “Fui vítima agora” — prioridades

O conteúdo deve variar conforme o caso, mas seguir esta ordem:

1. interromper contato e novas transferências;
2. usar outro aparelho seguro se houver controle remoto ou comprometimento;
3. contatar o banco imediatamente por canal oficial;
4. no Pix, solicitar abertura do MED o quanto antes;
5. bloquear cartões, sessões, dispositivos e credenciais comprometidas;
6. trocar senhas começando pelo e-mail principal, preferencialmente em dispositivo seguro;
7. preservar comprovantes, identificadores, conversas, URLs e protocolos;
8. registrar a ocorrência no canal policial adequado;
9. avisar contatos se o perfil ou conta tiver sido usado para enganá-los;
10. acompanhar banco e plataformas, guardando protocolos.

Deixar explícito que o MED não garante devolução e depende de análise e saldo disponível. O prazo oficial informado pelo Banco Central deve ser verificado na data de publicação e a página revisada sempre que a regulamentação mudar.

### 7.4 Alertas e notícias

Publicação manual, não agregação automática. Cada alerta deve conter:

- título descritivo, sem sensacionalismo;
- data da ocorrência/notícia e data da publicação;
- região afetada quando confirmada;
- descrição do padrão, não instruções que facilitem a fraude;
- ações de prevenção;
- fonte primária e, quando necessário, uma segunda fonte confiável;
- correções transparentes;
- data de expiração/revisão do alerta.

Evitar reescrever notícias apenas para volume. Alertas sem relevância permanente podem ser removidos do sitemap após expirar, mas permanecer acessíveis se ainda úteis.

### 7.5 Casos e relatos educativos — expansão futura

Reservar a seção **“Casos e relatos”** para resumos educativos de ocorrências de estelionato, fraude e golpes preparados por Franklin. O objetivo será permitir que o visitante reconheça um padrão semelhante ao que está enfrentando, compreenda os sinais de alerta e encontre o guia de ação correspondente.

Esses textos não serão cópias de boletins de ocorrência nem relatos investigativos. O formato deve transformar o fato em aprendizado, com anonimização forte e sem prejudicar investigação, processo, vítima ou terceiros.

#### Estrutura recomendada de cada resumo

1. título pelo padrão do golpe, nunca pelo nome dos envolvidos;
2. aviso: “Caso resumido e anonimizado para finalidade educativa”;
3. contexto genérico, sem endereço ou data exata;
4. como ocorreu a primeira abordagem;
5. técnica de engenharia social empregada;
6. sequência dos acontecimentos em linha do tempo visual;
7. sinais que poderiam ter despertado atenção;
8. momento em que a vítima percebeu o golpe;
9. providências recomendadas para situação semelhante;
10. checklist de provas normalmente úteis;
11. links para guia do golpe, MED e canais oficiais;
12. aprendizado principal;
13. nota editorial explicando se o texto combina elementos de mais de um caso.

#### Regras obrigatórias de anonimização

- retirar nomes, iniciais, apelidos, fotos, vozes e características físicas;
- retirar CPF, RG, e-mail, telefone, placa, chassi, chave Pix, dados bancários, usuário e identificadores de contas;
- generalizar profissão, idade, cidade, bairro, datas, horários, valores e relação entre pessoas quando não forem essenciais;
- não divulgar número de boletim, inquérito, processo, protocolo interno ou unidade policial;
- não reproduzir prints, áudios, documentos, comprovantes ou mensagens originais;
- não publicar modus operandi em detalhe que ensine a executar ou aperfeiçoar a fraude;
- não informar diligências, técnicas investigativas, hipóteses, suspeitos, provas não públicas ou andamento de investigação;
- não publicar ocorrência em apuração, caso sigiloso ou situação com risco de identificação por combinação de detalhes;
- quando a anonimização não for suficiente, criar um **caso composto e fictício**, inspirado em padrões recorrentes, e identificá-lo expressamente dessa forma;
- submeter o material a revisão humana específica antes da publicação.

#### Classificação editorial

Cada página deverá usar um selo visível:

- **Caso anonimizado:** baseado em uma ocorrência, com detalhes removidos ou generalizados;
- **Caso composto:** reúne padrões observados em diferentes ocorrências;
- **Exemplo fictício:** criado exclusivamente para educação.

Não usar “caso real” como chamariz. Não informar desfecho, prisão, autoria ou recuperação de valores sem fonte pública verificável e revisão apropriada.

#### Relação com SEO e experiência

Cada resumo precisa ter valor próprio e não deve ser criado apenas para capturar variações de palavras-chave. Usar títulos como “Falso advogado: contato por mensagem e cobrança urgente — caso anonimizado”, com links para o guia permanente. Dados estruturados de `Article` podem ser usados quando compatíveis; não marcar como notícia policial oficial. Resumos muito semelhantes devem ser consolidados numa análise de padrão, evitando conteúdo repetitivo.

#### Fluxo de publicação

1. Franklin redige uma versão já minimizada, sem copiar o boletim;
2. aplica-se checklist de anonimização e risco de reidentificação;
3. separa-se fato, inferência e orientação;
4. realiza-se revisão editorial e, quando necessário, jurídica/institucional;
5. registra-se internamente apenas a classificação do texto, sem anexar a ocorrência original ao repositório;
6. publica-se com data, autor, revisão e canal para solicitar correção;
7. revisa-se periodicamente a necessidade de manter a página pública.

O repositório GitHub jamais deverá conter boletins, provas ou uma tabela que relacione o resumo publicado à ocorrência de origem.

---

## 8. Legislação e orientação institucional

### 8.1 Conteúdo jurídico mínimo

- Código Penal, art. 171 — estelionato;
- fraude eletrônica, art. 171, § 2º-A;
- furto mediante fraude eletrônica, art. 155, § 4º-B;
- invasão de dispositivo informático, art. 154-A, quando pertinente;
- Lei nº 14.155/2021;
- regras de representação e exceções, descritas com revisão jurídica;
- competência territorial em estelionato praticado por transferência, conforme legislação vigente;
- Marco Civil da Internet e LGPD somente quando pertinentes;
- preservação e apresentação de elementos de prova sem prometer validade automática.

### 8.2 Forma de apresentação

Cada página jurídica terá três camadas:

1. “Em linguagem simples”;
2. “Texto legal e contexto” com link oficial;
3. “Quando procurar orientação profissional”.

Não reproduzir interpretação categórica para um caso concreto. Incluir versão e data de consulta. Mudanças legislativas, decisões judiciais e regras bancárias serão itens de revisão editorial.

### 8.3 Canais oficiais essenciais

- Delegacia Digital da Polícia Civil de São Paulo;
- instituição bancária por canal oficial;
- Banco Central para informações e reclamações cabíveis;
- consumidor.gov.br e Procon quando aplicável;
- plataforma/rede social onde ocorreu abuso;
- operadora de telefonia quando houver linha/SIM comprometido;
- CVM para verificar participantes do mercado de valores mobiliários;
- SUSEP quando a situação envolver entidade sob sua supervisão;
- Junta Comercial e Receita Federal apenas para confirmação cadastral, explicando que cadastro existente não prova legitimidade.

Nunca exibir um canal privado ou comercial como se fosse oficial.

---

## 9. Arquitetura técnica

### 9.1 Stack recomendada

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Gerador | Astro, modo `static` | HTML pronto, excelente desempenho e URLs indexáveis |
| Linguagem | TypeScript | segurança de tipos nas ferramentas |
| Conteúdo | Markdown/MDX + Astro Content Collections | revisão em Git, esquema consistente e fácil autoria |
| Estilos | CSS Modules/CSS global com tokens | baixo peso e controle total |
| Interatividade | componentes Astro + JS/TS nativo | hidratação apenas onde necessária |
| Pesquisa | Pagefind | índice estático, privado e sem servidor |
| Ícones | SVG próprios ou Lucide com importação individual | acessibilidade e baixo peso |
| Imagens | pipeline `astro:assets` | dimensões, formatos e `srcset` automáticos |
| Testes unitários | Vitest | regras das ferramentas |
| Testes E2E | Playwright | jornadas críticas |
| Acessibilidade | axe-core + Lighthouse CI | validações automatizadas |
| Qualidade | ESLint, Prettier, markdownlint | padronização |
| Deploy | GitHub Actions + SFTP/FTP ou Git do hPanel | compatível com hospedagem estática |

### 9.2 Alternativas consideradas

| Opção | Vantagem | Limitação | Decisão |
|---|---|---|---|
| WordPress | painel editorial imediato | mais plugins, manutenção e superfície de ataque | não no MVP |
| Criador de Sites Hostinger | implantação simples | menor controle sobre ferramentas, Git e desempenho fino | não recomendado |
| Next.js/Node em produção | backend moderno | Node.js não é suportado na hospedagem compartilhada | descartado |
| PHP puro | suporte nativo | pior experiência de conteúdo/componentes e mais código próprio | reservado para endpoints futuros |
| Astro estático | desempenho, SEO, segurança e Git | edição requer fluxo de repositório | escolhido |

### 9.3 Estrutura do repositório

```text
sem-golpe/
├── .github/
│   ├── workflows/ci.yml
│   └── workflows/deploy-hostinger.yml
├── public/
│   ├── favicon.svg
│   ├── icons/
│   ├── robots.txt
│   └── _headers.example
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── content/
│   │   ├── interactive/
│   │   ├── layout/
│   │   └── seo/
│   ├── content/
│   │   ├── golpes/
│   │   ├── alertas/
│   │   ├── casos/
│   │   ├── guias/
│   │   └── config.ts
│   ├── data/
│   │   ├── official-links.ts
│   │   ├── legislation.ts
│   │   └── review-schedule.ts
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   └── utils/
├── tests/
│   ├── unit/
│   └── e2e/
├── scripts/
│   ├── validate-external-links.mjs
│   └── check-review-dates.mjs
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
└── README.md
```

### 9.4 Modelo de conteúdo

Campos obrigatórios em cada artigo:

```yaml
title:
description:
slug:
category:
summary:
publishedAt:
updatedAt:
reviewedAt:
nextReviewAt:
author:
reviewer:
sources:
urgency:
featuredImage:
imageAlt:
draft:
```

O build deve falhar se faltar fonte, descrição, alt, data de revisão ou slug único.

Para conteúdos em `casos/`, acrescentar:

```yaml
caseClassification: anonymized | composite | fictional
anonymizationReviewed: true
institutionalReviewRequired: true | false
relatedGuides:
```

O campo `anonymizationReviewed` precisa ser verdadeiro para o build de produção. Nenhum identificador da ocorrência de origem deve constar no frontmatter, no histórico Git, em comentários ou metadados.

### 9.5 Backend e banco de dados

Não são necessários no MVP. Se futuramente houver formulário:

- endpoint PHP separado;
- proteção CSRF, honeypot e limitação de taxa;
- validação no servidor;
- nenhum anexo;
- retenção mínima;
- não aceitar relatos de ocorrência nem dados bancários;
- política de privacidade atualizada antes da ativação.

MySQL só deve ser introduzido quando houver requisito real, como painel editorial autenticado. Notícias em Markdown são suficientes inicialmente.

---

## 10. SEO conforme Google Search Central

### 10.1 Fundamentos

- HTML semântico e conteúdo principal disponível sem executar JavaScript;
- uma intenção de busca clara por URL;
- títulos e meta descriptions únicos;
- URLs curtas e estáveis em português, sem datas desnecessárias;
- links internos em elementos `<a>` rastreáveis;
- breadcrumbs visíveis;
- canonical autorreferente;
- sitemap somente com URLs canônicas, indexáveis e status 200;
- `lastmod` alterado apenas quando houver mudança relevante;
- página 404 útil;
- redirecionamento 301 ao mudar slug;
- nenhuma página vazia, tag sem conteúdo ou resultado de busca indexado;
- conteúdo escrito para pessoas, com exemplos originais e revisão humana;
- autoria e metodologia transparentes por se tratar de tema que afeta segurança e finanças.

### 10.2 Metadados por página

- `<title>` conciso e específico;
- meta description factual e sem promessa;
- Open Graph e Twitter Card;
- imagem social 1200 × 630;
- `lang="pt-BR"`;
- `theme-color` coerente;
- canonical absoluto;
- diretivas robots específicas quando necessário.

### 10.3 Dados estruturados

Usar somente marcações que correspondam ao conteúdo visível:

- `WebSite` na home, incluindo nome preferido;
- `Organization` ou `Person` conforme definição editorial final;
- `BreadcrumbList` nas páginas internas;
- `Article`/`NewsArticle` em guias e alertas quando elegíveis;
- `ProfilePage` na página do autor, se houver conteúdo suficiente;
- `VideoObject` apenas se o vídeo estiver incorporado com dados completos.

Não depender de `FAQPage` para resultados enriquecidos; FAQs continuam úteis ao leitor, mas a marcação só deve ser usada se estiver de acordo com a documentação vigente. Validar no Rich Results Test antes do lançamento.

### 10.4 E-E-A-T na prática

- página de autor com experiência relevante, limites e conflitos de interesse;
- revisão jurídica externa antes de publicar interpretações sensíveis;
- fontes oficiais próximas das afirmações;
- política de correções e histórico de atualização;
- explicação do método do identificador;
- distinção visual entre conteúdo editorial, alerta, publicidade e ferramenta;
- datas verdadeiras — não atualizar artificialmente para parecer recente.

### 10.5 `robots.txt` planejado

```txt
User-agent: *
Allow: /
Disallow: /busca/
Disallow: /api/

Sitemap: https://semgolpe.franklem.com/sitemap-index.xml
```

Observação: `robots.txt` controla rastreamento, não garante remoção do índice. Páginas que não devem aparecer no Google usarão `noindex` e permanecerão rastreáveis quando necessário.

### 10.6 Sitemap

Gerado no build por `@astrojs/sitemap`, com exclusão de:

- busca interna;
- páginas de preview;
- rascunhos;
- resultados temporários das ferramentas;
- políticas redundantes sem valor de pesquisa, se a estratégia exigir;
- URLs redirecionadas, duplicadas ou não canônicas.

Criar também `/todos-os-conteudos/` como mapa HTML e RSS em `/rss.xml`.

### 10.7 Search Console

- verificar a propriedade de domínio `franklem.com` ou prefixo do subdomínio;
- enviar sitemap;
- inspecionar home e principais guias;
- acompanhar indexação, Core Web Vitals, ações manuais e segurança;
- analisar consultas por intenção e melhorar páginas existentes antes de criar volume;
- não usar Search Console ou Analytics para coletar o conteúdo digitado nas ferramentas.

---

## 11. Core Web Vitals e desempenho

### 11.1 Orçamento de desempenho

| Recurso na carga inicial | Limite desejado |
|---|---:|
| JavaScript compactado | ≤ 80 KB na home; ≤ 130 KB em página com ferramenta |
| CSS compactado | ≤ 45 KB |
| Imagem LCP móvel | ≤ 120 KB |
| Total inicial móvel | ≤ 500 KB sem anúncios |
| Requisições iniciais | ≤ 25 sem anúncios |

### 11.2 Estratégias

- HTML estático e hidratação sob demanda (`client:visible`/`client:idle`);
- nenhuma biblioteca de componentes entregue integralmente;
- fontes de sistema ou uma fonte auto-hospedada com subset e `font-display: swap`;
- imagens com largura/altura explícitas, `srcset`, AVIF/WebP e lazy loading fora da dobra;
- imagem LCP sem lazy loading e com preload somente quando comprovadamente útil;
- SVG inline limitado e sanitizado;
- CSS crítico pequeno; restante otimizado pelo build;
- reservar dimensões de anúncios, imagens, embeds e banners para evitar CLS;
- terceiros carregados após consentimento quando exigido e, de preferência, após interação/ociosidade;
- sem autoplay de vídeo;
- service worker apenas depois de medir custo e benefício;
- cache longo para ativos com hash e cache curto para HTML;
- compressão Brotli/Gzip quando disponível.

### 11.3 Metas oficiais

- LCP ≤ 2,5 s;
- INP < 200 ms;
- CLS < 0,1;
- avaliação no 75º percentil, separando mobile e desktop.

Monitorar dados de campo no Search Console/CrUX e laboratório no Lighthouse CI. Lighthouse alto não substitui métrica real.

### 11.4 Impacto do AdSense

- slots com dimensões mínimas reservadas;
- anúncios fora do caminho de urgência e longe de “Denunciar”, “Acionar banco”, “Copiar domínio” e “Baixar checklist”;
- limitar quantidade inicial;
- não inserir anúncio acima das ações de emergência;
- lazy load abaixo da dobra quando permitido;
- medir CWV antes e depois da ativação;
- publicidade identificada explicitamente;
- Consent Mode/CMP conforme requisitos aplicáveis do Google e legislação.

---

## 12. Segurança, privacidade e ética

### 12.1 Modelo de ameaças

| Risco | Controle principal |
|---|---|
| link malicioso inserido na ferramenta | análise somente local; não buscar a URL |
| armazenamento acidental de dado sensível | sem backend; não persistir entradas; analytics sem conteúdo |
| XSS por conteúdo/URL | escape de saída, validação e CSP |
| dependência comprometida | lockfile, Dependabot, auditoria e atualizações controladas |
| site imitado por golpistas | canonical, contatos oficiais, monitoramento e orientações sobre domínio |
| conteúdo desatualizado | datas de revisão, alertas automáticos no CI |
| publicidade enganosa | categorias sensíveis bloqueadas e revisão periódica |
| uso do site como autoridade falsa | aviso de independência e identidade clara |

### 12.2 Cabeçalhos recomendados

Configurar via `.htaccess` conforme testes na Hostinger:

- `Content-Security-Policy` com allowlist mínima;
- `Strict-Transport-Security` após confirmar HTTPS em todo o subdomínio;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy` bloqueando câmera, microfone, geolocalização e outras APIs não usadas;
- `frame-ancestors 'none'` pela CSP;
- política de cache por tipo de arquivo.

A CSP precisará contemplar os domínios estritamente exigidos pelo AdSense e analytics quando forem ativados. Evitar `unsafe-inline` sempre que possível.

### 12.3 LGPD e minimização

- analytics com IP anonimizado/controles disponíveis;
- não criar fingerprinting;
- consentimento granular para cookies não essenciais;
- rejeitar deve ser tão acessível quanto aceitar;
- registrar somente eventos genéricos, nunca URLs suspeitas, texto, nomes, telefone, documentos ou resposta detalhada do questionário;
- política de retenção documentada;
- canal para solicitações de titulares;
- revisão da política antes de newsletter, formulário ou IA integrada.

### 12.4 Segurança editorial

- não publicar links ativos para sites fraudulentos;
- apresentar domínios maliciosos defangados (`exemplo[.]com`);
- não divulgar técnicas com nível operacional que facilite fraude;
- remover dados de vítimas e terceiros;
- capturas fictícias ou fortemente anonimizadas;
- não prometer sigilo em um formulário que não foi desenhado para denúncias;
- página `SECURITY.md` no GitHub para relato responsável de vulnerabilidade.

---

## 13. Acessibilidade

Meta: WCAG 2.2 AA.

- navegação integral por teclado;
- link “Pular para o conteúdo”;
- foco sempre visível;
- áreas clicáveis com tamanho adequado;
- contraste validado;
- labels e mensagens de erro associadas;
- `aria-live` nas respostas das ferramentas sem excesso de anúncios;
- não depender apenas de cor ou ícone;
- animações respeitando `prefers-reduced-motion`;
- linguagem clara e frases curtas em fluxos urgentes;
- alt text funcional, não recheado de palavras-chave;
- tabelas responsivas com cabeçalhos corretos;
- PDFs futuros acessíveis ou acompanhados por versão HTML equivalente.

Testar com teclado, TalkBack/VoiceOver e zoom de 200%.

---

## 14. GitHub e README.md

### 14.1 Estratégia de branches

- `main`: produção;
- branches `feat/*`, `fix/*`, `content/*`;
- pull request obrigatório para alterações em código ou conteúdo sensível;
- tags semânticas (`v0.1.0`, `v1.0.0`);
- nenhuma credencial no repositório;
- secrets de deploy somente no GitHub Actions.

### 14.2 Conteúdo obrigatório do README

```md
# Sem Golpe

Portal educativo brasileiro sobre prevenção a golpes e segurança digital.

## Aviso importante
Conteúdo educativo. O projeto não substitui polícia, banco, advogado ou atendimento de emergência.

## Recursos
- Identificador educativo de sinais
- Verificador local de links
- Checklists de preservação
- Guias de ação e canais oficiais

## Stack
Astro, TypeScript, CSS, Pagefind, Vitest e Playwright.

## Desenvolvimento
npm ci
npm run dev

## Testes
npm run lint
npm run test
npm run test:e2e
npm run build

## Conteúdo editorial
Explicar frontmatter, fontes aceitas, revisão e datas.

## Deploy
Build estático e publicação automatizada na Hostinger.

## Segurança
Não abra issue pública com vulnerabilidade; consulte SECURITY.md.

## Licença
Definir separadamente licença de código e conteúdo.
```

### 14.3 Licenciamento sugerido

- código: MIT, se Franklin desejar permitir reutilização;
- textos, ilustrações e marca: `Todos os direitos reservados`, inicialmente;
- ou conteúdo em CC BY-NC-ND após avaliação;
- dependências e imagens mantêm suas próprias licenças e créditos.

Não usar uma licença única sem distinguir código, conteúdo, marca e ativos de terceiros.

---

## 15. CI/CD e implantação na Hostinger

### 15.1 Pipeline de pull request

1. instalar dependências com lockfile;
2. lint de código e Markdown;
3. validar schema do conteúdo;
4. testar links internos;
5. verificar datas de revisão vencidas;
6. testes unitários;
7. build de produção;
8. Pagefind;
9. testes E2E contra o build;
10. axe-core;
11. Lighthouse CI com limites;
12. checar vazamento de segredos e dependências.

### 15.2 Deploy

1. merge em `main`;
2. gerar `dist/` no GitHub Actions;
3. backup/manifesto dos arquivos implantados;
4. envio SFTP/FTP para a pasta do subdomínio ou uso do mecanismo Git do hPanel;
5. não apagar arquivos fora do diretório explicitamente configurado;
6. smoke test em home, ferramenta, guia, sitemap e robots;
7. rollback por artefato da release anterior.

### 15.3 Configuração do subdomínio

- criar `semgolpe.franklem.com` no hPanel;
- confirmar pasta raiz exclusiva;
- emitir SSL;
- forçar HTTPS e host canônico;
- testar HTTP/2 ou HTTP/3 conforme disponibilidade;
- configurar redirects e cabeçalhos no `.htaccess`;
- verificar se não há indexação do ambiente de homologação;
- cadastrar a propriedade no Search Console.

---

## 16. Testes e critérios de aceite

### 16.1 Funcionais

- todos os fluxos do identificador produzem saída coerente e não afirmam segurança/crime;
- verificador aceita URL completa ou domínio e nunca faz fetch automático;
- prompt de IA contém orientação de anonimização;
- checklist imprime/exporta corretamente e não envia dados;
- links oficiais apontam para HTTPS e domínio correto;
- busca encontra termos, sinônimos e nomes populares de golpes;
- navegação e breadcrumbs funcionam sem JavaScript.

### 16.2 Conteúdo

- cada guia possui ao menos duas fontes, priorizando fonte primária;
- linguagem revisada em pt-BR;
- exemplos são fictícios e identificados;
- toda orientação bancária/jurídica tem data de revisão;
- nenhum caso real permite identificar vítima, suspeito ou investigação;
- avisos não escondem as ações práticas.

### 16.3 SEO

- zero páginas órfãs;
- canonical e metadata únicos;
- sitemap válido e sem URL 3xx/4xx/noindex;
- robots acessível;
- dados estruturados sem erro no Rich Results Test;
- renderização principal disponível no HTML;
- nenhuma `meta noindex` em produção por engano.

### 16.4 Performance

- Lighthouse mobile em ambiente de produção: desempenho ≥ 90 antes do AdSense, acessibilidade ≥ 95, boas práticas ≥ 95 e SEO ≥ 95;
- LCP, INP e CLS dentro das metas em testes e posteriormente no p75 real;
- nenhuma mudança de layout ao carregar anúncios;
- ferramentas continuam responsivas em aparelho Android intermediário.

### 16.5 Segurança

- CSP sem violações inesperadas nas rotas críticas;
- nenhum segredo no bundle;
- entradas com payloads XSS não executam;
- nenhuma entrada sensível aparece em log, URL, analytics ou armazenamento permanente;
- dependências sem vulnerabilidade crítica conhecida;
- headers validados após deploy.

### 16.6 Aceite do MVP

O MVP será considerado pronto quando:

- 15 guias/conteúdos essenciais estiverem publicados e revisados;
- 5 ferramentas estiverem funcionais e acessíveis;
- páginas legais e editoriais estiverem completas;
- todos os testes críticos passarem;
- deploy e rollback forem reproduzíveis;
- Search Console, sitemap, robots e analytics com privacidade estiverem configurados;
- não houver envio de documentos ou conteúdo suspeito ao servidor;
- a análise jurídica/editorial final tiver sido concluída.

---

## 17. Plano de execução

Estimativa para uma pessoa trabalhando em ritmo parcial. Ajustar após protótipo.

| Fase | Entregas | Estimativa | Critério de aceite |
|---|---|---:|---|
| 0. Validação | nome, público, limites, fontes e política editorial | 2–3 dias | decisões registradas |
| 1. UX e identidade | wireframes mobile/desktop, tokens e componentes | 4–6 dias | fluxos testados sem código |
| 2. Fundação | Astro, conteúdo, CI, layout e navegação | 4–6 dias | build/deploy de homologação |
| 3. Ferramentas | 5 ferramentas e testes unitários | 7–10 dias | critérios funcionais atendidos |
| 4. Conteúdo | 15 guias, fontes, ilustrações e revisão | 12–18 dias | checklist editorial completo |
| 5. SEO/CWV | metadata, schema, sitemap, busca e performance | 4–6 dias | auditorias aprovadas |
| 6. Segurança/LGPD | CSP, políticas, consentimento e testes | 3–5 dias | revisão técnica concluída |
| 7. Lançamento | produção, Search Console e monitoramento | 2–3 dias | smoke tests e rollback válidos |

**Total indicativo:** 38–57 dias úteis em ritmo parcial, com conteúdo bem pesquisado. Um lançamento em duas ondas reduz risco:

- **Beta privado:** estrutura, 6 guias e 3 ferramentas;
- **MVP público:** 15 guias, 5 ferramentas e base completa de SEO/políticas.

### Caminho crítico

Política editorial → esquema de conteúdo → componentes padrão → guias e ferramentas → revisão oficial/jurídica → testes → lançamento.

---

## 18. Backlog priorizado

### P0 — obrigatório

- home, “Fui vítima”, identificador, links, IA segura e checklist;
- 12 modalidades de golpe;
- Pix/MED, preservação de provas, onde denunciar e Delegacia Digital SP;
- legislação essencial;
- busca, sitemap, robots, políticas e acessibilidade;
- GitHub, README, CI/CD e deploy.

### P1 — após validar uso

- simulador de conversa;
- glossário ampliado;
- PDFs/infográficos acessíveis;
- RSS de alertas;
- painel simples de revisão de links;
- PWA/offline;
- conteúdo especial para idosos e familiares.

### P2 — crescimento

- newsletter;
- demais estados;
- programa de parcerias;
- séries em vídeo para o canal @franklem_;
- API somente se houver demanda e governança.

---

## 19. Riscos

| Risco | Prob. | Impacto | Sinal | Mitigação |
|---|---:|---:|---|---|
| orientação desatualizada | média | alto | link/prazo divergente | revisão trimestral e fontes versionadas |
| usuário tratar resultado como diagnóstico | média | alto | linguagem categórica | terminologia de sinais e limites visíveis |
| envio de dados pessoais para IA | alta | alto | usuário cola documento integral | fluxo de anonimização e sem upload interno |
| anúncio enganoso no próprio portal | média | alto | categoria financeira suspeita | bloqueio e revisão no AdSense |
| baixo tráfego inicial | média | médio | poucas impressões | clusters úteis, conteúdo original e distribuição |
| CWV degradado por anúncios | alta | médio | CLS/LCP pioram | slots reservados, limite e monitoramento |
| falsa aparência oficial | baixa | alto | reclamação/confusão | identidade independente e sem símbolos públicos |
| exposição profissional/institucional | baixa | alto | conteúdo de caso interno | política rígida e revisão antes de publicar |
| invasão/supply chain | baixa | alto | alerta de dependência | site estático, poucas dependências e CI |
| escopo excessivo | alta | médio | muitos rascunhos | beta com 6 guias/3 ferramentas |

---

## 20. Monetização responsável

### 20.1 AdSense

Ativar somente após:

- conteúdo original suficiente;
- navegação completa;
- políticas publicadas;
- domínio sem páginas inacabadas;
- desempenho medido;
- mecanismo de consentimento configurado.

Em um portal antifraude, a reputação pode ser destruída por anúncios de investimentos duvidosos, empréstimos agressivos ou suporte técnico falso. Revisar o Ad Review Center, bloquear categorias sensíveis quando necessário e oferecer canal “denunciar anúncio inadequado”. Receita não deve prevalecer sobre segurança.

### 20.2 Alternativas futuras

- patrocínio claramente identificado de campanhas educativas;
- materiais de treinamento para empresas;
- palestras e workshops;
- apoio recorrente sem vantagens editoriais;
- licenciamento de cartilhas, mantendo versão pública essencial.

Não vender prioridade editorial nem publicar advertorial disfarçado.

---

## 21. Governança editorial e manutenção

### 21.1 Cadência

- links oficiais: verificação automatizada semanal e revisão humana mensal;
- Pix/MED e canais de denúncia: revisão mensal;
- legislação: revisão trimestral ou por alerta de mudança;
- guias: revisão a cada 90–180 dias;
- alertas: data de expiração definida na publicação;
- casos e relatos: revisão de anonimização antes de publicar e reavaliação anual de permanência;
- dependências: atualização mensal, urgente para falhas críticas;
- backup do repositório e exportação de produção antes de grandes releases.

### 21.2 Workflow editorial

1. pauta baseada em necessidade real;
2. pesquisa em fonte primária;
3. rascunho e ilustrações;
4. checagem de segurança e privacidade;
5. checklist de anonimização e risco de reidentificação para casos e relatos;
6. revisão técnica, jurídica ou institucional quando necessária;
7. publicação por pull request;
8. inspeção da URL;
9. monitoramento e correção.

### 21.3 Política de IA

IA pode auxiliar pesquisa, estrutura e revisão, mas:

- fontes devem ser abertas e conferidas por humano;
- IA não será citada como fonte factual;
- conteúdo legal, bancário e policial requer conferência primária;
- nenhum documento sigiloso, caso real ou dado pessoal será fornecido ao modelo;
- texto publicado terá responsável humano identificado.

---

## 22. Fontes oficiais iniciais

Estas fontes devem ser confirmadas novamente durante o desenvolvimento:

- Google Search Central — SEO Starter Guide: `https://developers.google.com/search/docs/fundamentals/seo-starter-guide`
- Google Search Central — Core Web Vitals: `https://developers.google.com/search/docs/appearance/core-web-vitals`
- Google Search Central — dados estruturados: `https://developers.google.com/search/docs/appearance/structured-data/search-gallery`
- Delegacia Digital SP: `https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia`
- Banco Central — Segurança no Pix: `https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca`
- Banco Central — MED: `https://www.bcb.gov.br/meubc/faqs/p/o-que-e-e-como-funciona-o-mecanismo-especial-de-devolucao-med`
- Código Penal compilado: `https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm`
- Lei nº 14.155/2021: `https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm`
- ANPD — titular de dados: `https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados`
- Hostinger — deploy Git: `https://support.hostinger.com/pt/articles/1583302-como-implantar-fazer-o-deploy-de-um-repositorio-git`
- Hostinger — suporte a Node.js: `https://support.hostinger.com/pt/articles/1583661-o-node-js-e-compativel-com-a-hostinger`

Adicionar CERT.br, CVM, consumidor.gov.br e páginas oficiais de cada plataforma conforme os guias forem escritos.

---

## 23. Decisões pendentes antes do desenvolvimento

1. **Nome público:** “Sem Golpe” ou “Sem Golpe — Guia de Segurança Digital”.
2. **Apresentação profissional:** confirmar o texto final da biografia de Franklin Martins e se existe autorização institucional necessária para exibir cargo e e-mail funcional no projeto independente.
3. **Contato:** decidir se o e-mail profissional ficará visível diretamente ou protegido por formulário/obfuscação, mantendo o aviso de que não recebe ocorrências ou provas.
4. **Licença:** código MIT ou proprietário; conteúdo reservado ou Creative Commons.
5. **Analytics:** solução sem cookies ou GA4 com CMP/Consent Mode.
6. **Comentários/contato:** confirmar que o MVP aceitará apenas contato editorial, nunca relatos com provas.
7. **Revisor jurídico/institucional:** definir pessoa ou processo antes de lançar legislação, ações pós-fraude e resumos anonimizados de ocorrências.

---

## 24. Próximos três passos

1. Aprovar nome, posicionamento, escopo do MVP e decisões pendentes.
2. Criar wireframes da home, do guia e do fluxo “Fui vítima agora”, com protótipo móvel primeiro.
3. Inicializar o repositório Astro, configurar CI e publicar uma homologação protegida contra indexação.

---

## 25. Conclusão

O projeto é tecnicamente viável no plano Hostinger Business e possui forte aderência à experiência profissional e técnica de Franklin. O melhor formato não é um blog comum, mas um **portal de decisão e resposta rápida**, apoiado por guias visuais e ferramentas locais que preservem privacidade.

O maior ativo será a confiança. Por isso, o MVP deve privilegiar poucas páginas excelentes, fontes oficiais, revisão visível e ferramentas que nunca coletem material sensível. A monetização deve entrar depois da segurança, da utilidade e da reputação — e os anúncios não podem disputar atenção com ações de emergência.

