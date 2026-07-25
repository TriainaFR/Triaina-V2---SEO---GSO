const fs = require('fs');
let content = fs.readFileSync('types.ts', 'utf8');
content = content.replace("export type Page =\\n", "export type Page =\\n  | 'strategie-contenu-seo-2026'\\n");
fs.writeFileSync('types.ts', content);
