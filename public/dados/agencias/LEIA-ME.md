# Base derivada de agências bancárias

Fonte: Banco Central do Brasil, catálogo de agências e participantes STR.
Coleta UTC: 2026-10-17T13:08:52.595307+00:00
Posições informadas pela fonte: 15/10/2026
Registros na fonte: 13663; vinculados: 12898.

Licença da base de agências: Open Data Commons Open Database License (ODbL) 1.0: https://opendatacommons.org/licenses/odbl/1-0/
Esta base derivada é disponibilizada sob ODbL 1.0; a licença se aplica aos dados, independentemente da licença do código do portal. Atribuição: Banco Central do Brasil / Departamento de Monitoramento do Sistema Financeiro.

Vínculo: ISPB da relação STR com CnpjBase do cadastro de agências. O vínculo cobre correspondências exatas desses identificadores; instituições sem correspondência, cooperativas e postos podem não estar cobertos. Não se usa sequencial CNPJ como número de agência. Não se retorna sede em substituição a agência.

Fontes:
- https://dadosabertos.bcb.gov.br/dataset/agencias
- https://olinda.bcb.gov.br/olinda/servico/Informes_Agencias/versao/v1/odata/Agencias
- https://www.bcb.gov.br/content/estabilidadefinanceira/str1/ParticipantesSTR.csv

Reprodução: python3 scripts/atualizar-agencias.py
