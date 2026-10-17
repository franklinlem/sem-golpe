export function normalizarBanco(raw: string): string {
  const value = raw.trim();
  if (!/^\d{1,3}$/.test(value) || Number(value) === 0) throw new Error('Informe o código do banco com até três dígitos, como 001 ou 104.');
  return value.padStart(3, '0');
}
export function normalizarAgencia(raw: string): string {
  const match = raw.trim().match(/^(\d{1,5})(?:\s*-\s*[\dXx])?$/);
  if (!match) throw new Error('Informe a agência com até cinco dígitos. O dígito verificador pode vir separado por hífen, como 1234-5. Não informe a conta.');
  return String(Number(match[1]));
}
export function localizarAgencias<T extends {CodigoCompe: string}>(rows: T[], agency: string): T[] {
  return rows.filter(row => /^\d+$/.test(row.CodigoCompe) && String(Number(row.CodigoCompe)) === agency);
}
