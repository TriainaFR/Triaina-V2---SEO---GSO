const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf-8');

content = content.replace(
  "import { AiOverviewEcommerce2026 } from './views/blog/AiOverviewEcommerce2026';",
  "import { AiOverviewEcommerce2026 } from './views/blog/AiOverviewEcommerce2026';\nimport { AgenceGeoEcommerce2026 } from './views/blog/AgenceGeoEcommerce2026';"
);

content = content.replace(
  "      case 'ai-overview-ecommerce-2026':\n        return <AiOverviewEcommerce2026 />;",
  "      case 'ai-overview-ecommerce-2026':\n        return <AiOverviewEcommerce2026 />;\n      case 'agence-geo-ecommerce-2026':\n        return <AgenceGeoEcommerce2026 />;"
);

fs.writeFileSync('App.tsx', content);
