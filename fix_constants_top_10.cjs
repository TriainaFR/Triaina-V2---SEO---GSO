const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf-8');

if (!code.includes("'top-10-agences-seo-geo-paris-2026'")) {
    code = code.replace(
        "  '10-conseils-marque-visible-chatgpt-2026': '/blog/10-conseils-marque-visible-chatgpt',",
        "  '10-conseils-marque-visible-chatgpt-2026': '/blog/10-conseils-marque-visible-chatgpt',\n  'top-10-agences-seo-geo-paris-2026': '/blog/top-agences-seo-geo-paris',"
    );
    code = code.replace(
        "  '/blog/10-conseils-marque-visible-chatgpt': '10-conseils-marque-visible-chatgpt-2026',",
        "  '/blog/10-conseils-marque-visible-chatgpt': '10-conseils-marque-visible-chatgpt-2026',\n  '/blog/top-agences-seo-geo-paris': 'top-10-agences-seo-geo-paris-2026',"
    );
}

fs.writeFileSync('constants.ts', code);
