const fs = require('fs');

let content = fs.readFileSync('App.tsx', 'utf8');

content = content.replace(
  "import { AgenceSeoFrance2026 } from './views/blog/AgenceSeoFrance2026';",
  "import { AgenceSeoFrance2026 } from './views/blog/AgenceSeoFrance2026';\nimport { SeoLocalFrance2026 } from './views/blog/SeoLocalFrance2026';"
);

content = content.replace(
  "case 'agence-seo-france':\n        return <AgenceSeoFrance2026 onNavigate={handleNavigation} />;",
  "case 'agence-seo-france':\n        return <AgenceSeoFrance2026 onNavigate={handleNavigation} />;\n      case 'seo-local-france-2026':\n        return <SeoLocalFrance2026 />;"
);

fs.writeFileSync('App.tsx', content);
