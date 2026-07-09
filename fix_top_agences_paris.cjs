const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf-8');

// Remove from BLOG_DATA
code = code.replace(/\{\s*id:\s*'top-10-agences-seo-geo-paris-2026'[\s\S]*?\},/g, '');

// Remove from PAGE_TO_URL and ROUTES mapping
code = code.replace(/.*?top-10-agences-seo-geo-paris-2026.*?\n/g, '');

fs.writeFileSync('constants.ts', code);
