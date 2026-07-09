const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf-8');

if (!code.includes('TopAgencesSeoGeoParis2026')) {
    code = code.replace(
        "import { MarqueVisibleChatgpt2026 } from './views/blog/MarqueVisibleChatgpt2026';",
        "import { MarqueVisibleChatgpt2026 } from './views/blog/MarqueVisibleChatgpt2026';\nimport { TopAgencesSeoGeoParis2026 } from './views/blog/TopAgencesSeoGeoParis2026';"
    );
}

if (!code.includes("case 'top-10-agences-seo-geo-paris-2026':")) {
    code = code.replace(
        "case '10-conseils-marque-visible-chatgpt-2026':\n        return <MarqueVisibleChatgpt2026 />;",
        "case '10-conseils-marque-visible-chatgpt-2026':\n        return <MarqueVisibleChatgpt2026 />;\n      case 'top-10-agences-seo-geo-paris-2026':\n        return <TopAgencesSeoGeoParis2026 />;"
    );
}

fs.writeFileSync('App.tsx', code);
