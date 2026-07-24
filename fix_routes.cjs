const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

content = content.replace("export const ROUTES: Record<string, Page> = {", "export const ROUTES: Record<string, Page> = {\n  '/blog/agence-seo-ecommerce': 'agence-seo-ecommerce-2026',");

fs.writeFileSync('constants.ts', content);
