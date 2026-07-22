const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

if (!content.includes("import { IAAnalyseDonnees2026 } from './views/blog/IAAnalyseDonnees2026';")) {
  content = content.replace("import { GoogleAIOverviewFrance } from './views/blog/GoogleAIOverviewFrance';", "import { GoogleAIOverviewFrance } from './views/blog/GoogleAIOverviewFrance';\nimport { IAAnalyseDonnees2026 } from './views/blog/IAAnalyseDonnees2026';");
}

if (!content.includes("case 'ia-analyse-donnees-optimisation-seo-2026':")) {
  content = content.replace("case 'core-web-vitals-seo-2026':", "case 'ia-analyse-donnees-optimisation-seo-2026':\n        return <IAAnalyseDonnees2026 onNavigate={handleNavigation} />;\n      case 'core-web-vitals-seo-2026':");
}

fs.writeFileSync('App.tsx', content);
