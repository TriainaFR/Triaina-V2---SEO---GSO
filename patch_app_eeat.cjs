const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf-8');

content = content.replace(
  "import { AgenceGeoEcommerce2026 } from './views/blog/AgenceGeoEcommerce2026';",
  "import { AgenceGeoEcommerce2026 } from './views/blog/AgenceGeoEcommerce2026';\nimport { AuditEeat2026 } from './views/blog/AuditEeat2026';"
);

content = content.replace(
  "      case 'agence-geo-ecommerce-2026':\n        return <AgenceGeoEcommerce2026 />;",
  "      case 'agence-geo-ecommerce-2026':\n        return <AgenceGeoEcommerce2026 />;\n      case 'audit-eeat-2026':\n        return <AuditEeat2026 />;"
);

fs.writeFileSync('App.tsx', content);
