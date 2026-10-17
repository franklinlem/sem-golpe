import assert from 'node:assert/strict';
import test from 'node:test';
import { analyzeLink } from '../src/lib/analyze-link.js';

test('accepts a domain without a scheme and reports only the hostname', () => {
  const result = analyzeLink('banco.example/conta?token=nao-deve-aparecer');
  assert.equal(result.ok, true);
  assert.equal(result.hostname, 'banco.example');
  assert.equal(result.protocol, 'https:');
  assert.deepEqual(result.flags, []);
  assert.deepEqual(Object.keys(result).sort(), ['flags', 'hostname', 'ok', 'protocol']);
});

test('flags HTTP, IP addresses, unusual ports, and credentials', () => {
  const result = analyzeLink('http://user:secret@192.0.2.1:8443/login');
  assert.equal(result.ok, true);
  assert.ok(result.flags.includes('não usa HTTPS'));
  assert.ok(result.flags.some((flag) => flag.includes('endereço IP')));
  assert.ok(result.flags.some((flag) => flag.includes('porta não padrão')));
  assert.ok(result.flags.some((flag) => flag.includes('antes do domínio')));
});

test('flags a hostname with many subdomain levels', () => {
  const result = analyzeLink('https://a.b.c.d.e.example');
  assert.equal(result.ok, true);
  assert.ok(result.flags.some((flag) => flag.includes('muitos níveis')));
});

test('flags punycode host labels', () => {
  const result = analyzeLink('https://xn--e1afmkfd.example');
  assert.equal(result.ok, true);
  assert.ok(result.flags.some((flag) => flag.includes('punycode')));
});

test('rejects non-web protocols and malformed addresses', () => {
  assert.equal(analyzeLink('javascript:alert(1)').ok, false);
  assert.equal(analyzeLink('data:text/html,<script>alert(1)</script>').ok, false);
  assert.equal(analyzeLink('https://').ok, false);
});

test('rejects invisible and control characters', () => {
  assert.equal(analyzeLink('https://bank.example/\u202eexe').ok, false);
  assert.equal(analyzeLink('https://bank.example/\nlogin').ok, false);
});

test('does not treat absence of warnings as proof of legitimacy', () => {
  const result = analyzeLink('https://banco.example');
  assert.equal(result.ok, true);
  assert.deepEqual(result.flags, []);
  assert.equal('safe' in result, false);
});
