const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf-8');

if (!content.includes("AgenceSeoGeoRennes2026")) {
    content = content.replace(
        "import { AgenceSeoLyon2026 } from './views/blog/AgenceSeoLyon2026';",
        "import { AgenceSeoLyon2026 } from './views/blog/AgenceSeoLyon2026';\nimport { AgenceSeoGeoRennes2026 } from './views/blog/AgenceSeoGeoRennes2026';"
    );

    content = content.replace(
        "      case 'agence-seo-lyon-2026':\n        return <AgenceSeoLyon2026 />;",
        "      case 'agence-seo-lyon-2026':\n        return <AgenceSeoLyon2026 />;\n      case 'agence-seo-geo-rennes-2026':\n        return <AgenceSeoGeoRennes2026 />;"
    );

    fs.writeFileSync('App.tsx', content);
    console.log("Patched App.tsx");
}
