"""Gera base pública de agências a partir do Banco Central, sem dados de clientes."""
import csv, io, json, urllib.request, urllib.parse, datetime, pathlib
STR = 'https://www.bcb.gov.br/content/estabilidadefinanceira/str1/ParticipantesSTR.csv'
API = 'https://olinda.bcb.gov.br/olinda/servico/Informes_Agencias/versao/v1/odata/Agencias'
ROOT = pathlib.Path(__file__).resolve().parents[1] / 'public/dados/agencias'
def download(url):
    with urllib.request.urlopen(url, timeout=60) as response: return response.read()
banks = {row['Número_Código'].zfill(3): {'codigo':row['Número_Código'].zfill(3), 'ispb':row['ISPB'], 'nome':row['Nome_Extenso']} for row in csv.DictReader(io.StringIO(download(STR).decode('utf-8-sig'))) if row['Número_Código'].isdigit()}
rows = []; offset = 0
while True:
    params = {'$format':'json', '$top':'10000', '$skip':str(offset), '$orderby':'CnpjBase,CodigoCompe,CnpjSequencial'}
    page = json.loads(download(API+'?'+urllib.parse.urlencode(params)))['value']
    rows.extend(page)
    if len(page) < 10000: break
    offset += len(page)
if len(rows) < 1000: raise RuntimeError('Base incompleta; publicação interrompida')
fields = ['CnpjBase','CodigoCompe','NomeIf','NomeAgencia','Endereco','Numero','Complemento','Bairro','Cep','Municipio','UF','Posicao']
if any(any(field not in row for field in fields) for row in rows): raise RuntimeError('Schema inesperado')
collected = datetime.datetime.now(datetime.timezone.utc).isoformat()
positions = sorted(set(row['Posicao'] for row in rows))
index = {'coleta':collected,'posicoes':positions,'fonte':API,'catalogo':'https://dadosabertos.bcb.gov.br/dataset/agencias','fonteBancos':STR,'licenca':'https://opendatacommons.org/licenses/odbl/1-0/','totalFonte':len(rows),'bancos':list(banks.values())}
ROOT.mkdir(parents=True, exist_ok=True)
covered = 0
for code, bank in banks.items():
    matches = [{field:str(row[field] or '').strip() for field in fields if field not in ['CnpjBase','NomeIf']} for row in rows if row['CnpjBase'] == bank['ispb'] and str(row['CodigoCompe'] or '').strip().isdigit()]
    bank['agenciasNaBase'] = len(matches)
    covered += len(matches)
    payload = {'banco':bank,'coleta':collected,'fonte':API,'agencias':matches}
    (ROOT/(code+'.json')).write_text(json.dumps(payload,ensure_ascii=False,separators=(',',':'))+'\n')
index['totalVinculadas'] = covered
(ROOT/'indice.json').write_text(json.dumps(index,ensure_ascii=False,separators=(',',':'))+'\n')
(ROOT/'LEIA-ME.md').write_text(f'''# Base derivada de agências bancárias\n\nFonte: Banco Central do Brasil, catálogo de agências e participantes STR.\nColeta UTC: {collected}\nPosições informadas pela fonte: {', '.join(positions)}\nRegistros na fonte: {len(rows)}; vinculados: {covered}.\n\nLicença da base de agências: Open Data Commons Open Database License (ODbL) 1.0: https://opendatacommons.org/licenses/odbl/1-0/\nEsta base derivada é disponibilizada sob ODbL 1.0; a licença se aplica aos dados, independentemente da licença do código do portal. Atribuição: Banco Central do Brasil / Departamento de Monitoramento do Sistema Financeiro.\n\nVínculo: ISPB da relação STR com CnpjBase do cadastro de agências. O vínculo cobre correspondências exatas desses identificadores; instituições sem correspondência, cooperativas e postos podem não estar cobertos. Não se usa sequencial CNPJ como número de agência. Não se retorna sede em substituição a agência.\n\nFontes:\n- https://dadosabertos.bcb.gov.br/dataset/agencias\n- {API}\n- {STR}\n\nReprodução: python3 scripts/atualizar-agencias.py\n''')
print(json.dumps({'bancos':len(banks),'agenciasFonte':len(rows),'vinculadas':covered,'posicoes':positions},ensure_ascii=False))
