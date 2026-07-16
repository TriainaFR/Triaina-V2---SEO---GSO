const fs = require('fs');

// 1. Patch types.ts
let typesContent = fs.readFileSync('types.ts', 'utf-8');
typesContent = typesContent.replace(
  "| 'google-ai-mode-2026'",
  "| 'google-ai-mode-2026'\n  | 'prix-tarifs-agence-seo-geo-2026'"
);
fs.writeFileSync('types.ts', typesContent);

// 2. Patch constants.ts
let constContent = fs.readFileSync('constants.ts', 'utf-8');
constContent = constContent.replace(
  "'google-ai-mode-2026': '/blog/google-ai-mode-2026',",
  "'google-ai-mode-2026': '/blog/google-ai-mode-2026',\n  'prix-tarifs-agence-seo-geo-2026': '/blog/prix-tarifs-agence-seo-geo-2026',"
);
constContent = constContent.replace(
  "'/blog/google-ai-mode-2026': 'google-ai-mode-2026',",
  "'/blog/google-ai-mode-2026': 'google-ai-mode-2026',\n  '/blog/prix-tarifs-agence-seo-geo-2026': 'prix-tarifs-agence-seo-geo-2026',"
);

const blogPostStr = `    tag: 'GUIDE'
  },
  {
    id: 'prix-tarifs-agence-seo-geo-2026',
    source: 'GEO',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Prix & tarifs agence SEO/GEO en 2026 : combien ça coûte ?',
    excerpt: 'Une prestation SEO en France coûte en moyenne entre 500 € et 8 000 € par mois selon la taille du site, les objectifs et le niveau de concurrence.',
    url: '/blog/prix-tarifs-agence-seo-geo-2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  }
];

export const CAREERS_DATA`;

constContent = constContent.replace(/    tag: 'GUIDE'\n  }\n\];\n\nexport const CAREERS_DATA/, blogPostStr);
fs.writeFileSync('constants.ts', constContent);

// 3. Patch App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf-8');
appContent = appContent.replace(
  "import { GoogleAiMode2026 } from './views/blog/GoogleAiMode2026';",
  "import { GoogleAiMode2026 } from './views/blog/GoogleAiMode2026';\nimport { PrixTarifsAgenceSeoGeo2026 } from './views/blog/PrixTarifsAgenceSeoGeo2026';"
);
appContent = appContent.replace(
  "case 'google-ai-mode-2026':\n        return <GoogleAiMode2026 />;",
  "case 'google-ai-mode-2026':\n        return <GoogleAiMode2026 />;\n      case 'prix-tarifs-agence-seo-geo-2026':\n        return <PrixTarifsAgenceSeoGeo2026 />;"
);
fs.writeFileSync('App.tsx', appContent);

console.log("Patches applied.");
