const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

content = content.replace("export const PAGE_TO_URL: Record<string, string> = {", "export const PAGE_TO_URL: Record<string, string> = {\n  'agence-seo-ecommerce-2026': '/blog/agence-seo-ecommerce',");
content = content.replace("export const URL_TO_PAGE: Record<string, string> = {", "export const URL_TO_PAGE: Record<string, string> = {\n  '/blog/agence-seo-ecommerce': 'agence-seo-ecommerce-2026',");

fs.writeFileSync('constants.ts', content);
