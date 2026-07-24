const fs = require('fs');

let content = fs.readFileSync('types.ts', 'utf8');

content = content.replace("export type Page =", "export type Page =\n  | 'seo-local-france-2026'");

fs.writeFileSync('types.ts', content);
