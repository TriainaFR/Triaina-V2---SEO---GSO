const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// I will append it manually
const urlToPage = "export const URL_TO_PAGE: Record<string, string> = {";
content = content.replace(urlToPage, urlToPage + "\n  '/blog/agence-seo-ecommerce': 'agence-seo-ecommerce-2026',");

fs.writeFileSync('constants.ts', content);
