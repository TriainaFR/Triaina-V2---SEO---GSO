const fs = require('fs');
let content = fs.readFileSync('types.ts', 'utf-8');

if (!content.includes("'agence-seo-geo-rennes-2026'")) {
    content = content.replace(
        "  | 'agence-seo-lyon-2026'\n",
        "  | 'agence-seo-lyon-2026'\n  | 'agence-seo-geo-rennes-2026'\n"
    );
    fs.writeFileSync('types.ts', content);
    console.log("Patched types.ts");
}
