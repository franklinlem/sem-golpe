const INVISIBLE_OR_CONTROL = /[\u0000-\u001f\u007f\u200b\u200c\u200d\u202a-\u202e\u2060\u2066-\u2069]/;
const IPV4 = /^(?:\d{1,3}\.){3}\d{1,3}$/;
const IPV6 = /^\[[\da-f:]+\]$/i;

/**
 * Analyze URL features locally; this function never requests the supplied URL.
 * @param {unknown} input
 * @returns {{ok: true, hostname: string, protocol: string, flags: string[]} | {ok: false, message: string}}
 */
export function analyzeLink(input) {
  const value = typeof input === 'string' ? input.trim() : '';
  if (!value) return { ok: false, message: 'Digite um link ou domínio.' };
  if (INVISIBLE_OR_CONTROL.test(value)) {
    return { ok: false, message: 'O endereço contém caracteres de controle ou invisíveis.' };
  }

  const explicitWebScheme = /^https?:\/\//i.test(value);
  const otherScheme = /^([a-z][a-z\d+.-]*):\/\//i.exec(value);
  if (otherScheme && !explicitWebScheme) {
    return { ok: false, message: 'Use um endereço web que comece com http:// ou https://.' };
  }
  const candidate = explicitWebScheme ? value : `https://${value}`;
  let parsed;
  try {
    parsed = new URL(candidate);
  } catch {
    return { ok: false, message: 'Não foi possível interpretar o endereço. Confira o domínio sem abrir o link.' };
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    return { ok: false, message: 'Use um endereço web que comece com http:// ou https://.' };
  }
  if (!parsed.hostname) return { ok: false, message: 'O endereço não contém um domínio reconhecível.' };

  const hostname = parsed.hostname.toLowerCase().replace(/\.$/, '');
  if (!hostname || hostname.includes('..')) {
    return { ok: false, message: 'O endereço não contém um domínio reconhecível.' };
  }

  const flags = [];
  if (parsed.protocol !== 'https:') flags.push('não usa HTTPS');
  if (IPV4.test(hostname) || IPV6.test(hostname)) flags.push('usa um endereço IP no lugar de um nome de domínio');
  if (hostname.split('.').some((label) => label.startsWith('xn--'))) {
    flags.push('contém caracteres internacionais representados em punycode');
  }
  if (hostname.split('.').filter(Boolean).length > 4) flags.push('possui muitos níveis de subdomínio');
  if (parsed.port) flags.push(`usa uma porta não padrão (${parsed.port})`);
  if (parsed.username || parsed.password) flags.push('inclui dados antes do domínio que podem confundir a leitura');

  return { ok: true, hostname, protocol: parsed.protocol, flags };
}
