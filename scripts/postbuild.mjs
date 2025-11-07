#!/usr/bin/env node
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ogDir = join(process.cwd(), 'public', 'og');
if (!existsSync(ogDir)) {
  mkdirSync(ogDir, { recursive: true });
}

const defaults = [
  { name: 'default', title: 'Clone — Automate Smarter' },
];

for (const { name, title } of defaults) {
  const filePath = join(ogDir, `${name}.json`);
  if (!existsSync(filePath)) {
    writeFileSync(filePath, JSON.stringify({ title }, null, 2));
  }
}

console.log('OG placeholder assets ensured.');
