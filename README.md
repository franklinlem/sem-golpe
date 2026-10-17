# Sem Golpe

Portal educativo brasileiro sobre prevenção a golpes e segurança digital, planejado para `semgolpe.franklem.com`.

## Aviso importante

Conteúdo educativo. O projeto não substitui polícia, banco, advogado ou atendimento de emergência e não recebe ocorrências, denúncias ou provas.

## Recursos

- Identificador educativo de sinais de risco
- Verificador de links com consulta opcional ao DNS público
- Consulta de banco e agência em base pública do Banco Central
- Gerador de prompt seguro para IA
- Guias sobre modalidades de golpes
- Roteiro de ação para vítimas

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
```

## Privacidade

As ferramentas executam no navegador. A consulta opcional ao Google Public DNS envia apenas o hostname após clique explícito, sem caminho, parâmetros ou credenciais; veja a política de privacidade. Não introduza telemetria que registre links, contexto, respostas ou conteúdo digitado pelo usuário.

## Autoria

Desenvolvido por Franklin Martins, Investigador de Polícia de Classe Especial, com 25 anos de experiência na Polícia Civil do Estado de São Paulo. Projeto pessoal e independente.

## Licença

Todos os direitos reservados até a definição separada das licenças do código, conteúdo e identidade visual.


## Base de agências

Atualize com `python3 scripts/atualizar-agencias.py`, confira cobertura/data, execute o build e publique o novo artefato. A consulta não é em tempo real e não substitui confirmação com o banco. Dados derivados do Banco Central sob ODbL 1.0; origem e licença em `public/dados/agencias/LEIA-ME.md`.
