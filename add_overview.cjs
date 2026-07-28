const fs = require('fs');

// 1. types.ts
let typesContent = fs.readFileSync('types.ts', 'utf8');
typesContent = typesContent.replace(
  "  | 'agence-seo-strasbourg-2026'",
  "  | 'agence-seo-strasbourg-2026'\n  | 'optimiser-ai-overview-2026'"
);
fs.writeFileSync('types.ts', typesContent);

// 2. constants.ts
let constContent = fs.readFileSync('constants.ts', 'utf8');
constContent = constContent.replace(
  "  'agence-seo-strasbourg-2026': '/blog/agence-seo-strasbourg-2026',",
  "  'agence-seo-strasbourg-2026': '/blog/agence-seo-strasbourg-2026',\n  'optimiser-ai-overview-2026': '/blog/optimiser-ai-overview-2026',"
);
constContent = constContent.replace(
  "  '/blog/agence-seo-strasbourg-2026': 'agence-seo-strasbourg-2026',",
  "  '/blog/agence-seo-strasbourg-2026': 'agence-seo-strasbourg-2026',\n  '/blog/optimiser-ai-overview-2026': 'optimiser-ai-overview-2026',"
);

const newBlog = `,
  {
    id: 'optimiser-ai-overview-2026',
    source: 'SEO & GEO',
    logo: '',
    date: '28 JUILLET 2026',
    title: 'Optimiser pour AI Overview : stratégie complète 2026',
    excerpt: 'Stratégie complète pour optimiser AI Overview en 2026 : RAG, E-E-A-T, schema markup, 7 leviers actionnables, e-commerce et GEO. Guide expert par Triaina.',
    url: '/blog/optimiser-ai-overview-2026',
    image: 'https://triaina.fr/images/blog/optimiser-ai-overview-2026.jpg',
    tag: 'GEO'
  }
];`;

constContent = constContent.replace(
  "    tag: 'SEO LOCAL'\n  }\n];",
  "    tag: 'SEO LOCAL'\n  }" + newBlog
);
fs.writeFileSync('constants.ts', constContent);

// 3. App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf8');
appContent = appContent.replace(
  "import { AgenceSeoStrasbourg2026 } from './views/blog/AgenceSeoStrasbourg2026';",
  "import { AgenceSeoStrasbourg2026 } from './views/blog/AgenceSeoStrasbourg2026';\nimport { OptimiserAiOverview2026 } from './views/blog/OptimiserAiOverview2026';"
);
appContent = appContent.replace(
  "case 'agence-seo-strasbourg-2026':\n        return <AgenceSeoStrasbourg2026 />;",
  "case 'agence-seo-strasbourg-2026':\n        return <AgenceSeoStrasbourg2026 />;\n      case 'optimiser-ai-overview-2026':\n        return <OptimiserAiOverview2026 />;"
);
fs.writeFileSync('App.tsx', appContent);

console.log("Files updated");
