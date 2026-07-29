const fs = require('fs');

// 1. types.ts
let typesContent = fs.readFileSync('types.ts', 'utf8');
typesContent = typesContent.replace(
  "  | 'optimiser-ai-overview-2026'",
  "  | 'optimiser-ai-overview-2026'\n  | 'agence-seo-montpellier-2026'"
);
fs.writeFileSync('types.ts', typesContent);

// 2. constants.ts
let constContent = fs.readFileSync('constants.ts', 'utf8');
constContent = constContent.replace(
  "  'optimiser-ai-overview-2026': '/blog/optimiser-ai-overview-2026',",
  "  'optimiser-ai-overview-2026': '/blog/optimiser-ai-overview-2026',\n  'agence-seo-montpellier-2026': '/blog/agence-seo-montpellier-2026',"
);
constContent = constContent.replace(
  "  '/blog/optimiser-ai-overview-2026': 'optimiser-ai-overview-2026',",
  "  '/blog/optimiser-ai-overview-2026': 'optimiser-ai-overview-2026',\n  '/blog/agence-seo-montpellier-2026': 'agence-seo-montpellier-2026',"
);

const newBlog = `,
  {
    id: 'agence-seo-montpellier-2026',
    source: 'Classement',
    logo: '',
    date: '29 JUILLET 2026',
    title: 'Agence SEO Montpellier : top 5 SEO & GEO en 2026',
    excerpt: 'Découvrez le top 5 des meilleures agences SEO & GEO à Montpellier en 2026. Critères de sélection, comparatif et conseils pour choisir la bonne agence.',
    url: '/blog/agence-seo-montpellier-2026',
    image: 'https://triaina.fr/images/agence-seo-montpellier-2026.jpg',
    tag: 'SEO LOCAL'
  }
];`;

constContent = constContent.replace(
  "    tag: 'GEO'\n  }\n];",
  "    tag: 'GEO'\n  }" + newBlog
);
fs.writeFileSync('constants.ts', constContent);

// 3. App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf8');
appContent = appContent.replace(
  "import { OptimiserAiOverview2026 } from './views/blog/OptimiserAiOverview2026';",
  "import { OptimiserAiOverview2026 } from './views/blog/OptimiserAiOverview2026';\nimport { AgenceSeoMontpellier2026 } from './views/blog/AgenceSeoMontpellier2026';"
);
appContent = appContent.replace(
  "case 'optimiser-ai-overview-2026':\n        return <OptimiserAiOverview2026 />;",
  "case 'optimiser-ai-overview-2026':\n        return <OptimiserAiOverview2026 />;\n      case 'agence-seo-montpellier-2026':\n        return <AgenceSeoMontpellier2026 />;"
);
fs.writeFileSync('App.tsx', appContent);

console.log("Files updated");
