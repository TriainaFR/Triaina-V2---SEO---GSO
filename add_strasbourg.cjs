const fs = require('fs');

// 1. types.ts
let typesContent = fs.readFileSync('types.ts', 'utf8');
typesContent = typesContent.replace(
  "  | 'maillage-interne-seo-2026'",
  "  | 'maillage-interne-seo-2026'\n  | 'agence-seo-strasbourg-2026'"
);
fs.writeFileSync('types.ts', typesContent);

// 2. constants.ts
let constContent = fs.readFileSync('constants.ts', 'utf8');
constContent = constContent.replace(
  "  'maillage-interne-seo-2026': '/blog/maillage-interne-seo-2026',",
  "  'maillage-interne-seo-2026': '/blog/maillage-interne-seo-2026',\n  'agence-seo-strasbourg-2026': '/blog/agence-seo-strasbourg-2026',"
);
constContent = constContent.replace(
  "  '/blog/maillage-interne-seo-2026': 'maillage-interne-seo-2026',",
  "  '/blog/maillage-interne-seo-2026': 'maillage-interne-seo-2026',\n  '/blog/agence-seo-strasbourg-2026': 'agence-seo-strasbourg-2026',"
);

const newBlog = `,
  {
    id: 'agence-seo-strasbourg-2026',
    source: 'Classement',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Agence SEO Strasbourg : top 5 SEO & GEO en 2026',
    excerpt: 'Découvrez le top 5 des agences SEO à Strasbourg en 2026 : référencement naturel, GEO et visibilité IA. Comparatif complet pour bien choisir.',
    url: '/blog/agence-seo-strasbourg-2026',
    image: 'https://triaina.fr/images/agence-seo-strasbourg-2026.jpg',
    tag: 'SEO LOCAL'
  }
];`;

constContent = constContent.replace(
  "    tag: 'SEO'\n  }\n];",
  "    tag: 'SEO'\n  }" + newBlog
);
fs.writeFileSync('constants.ts', constContent);

// 3. App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf8');
appContent = appContent.replace(
  "import { MaillageInterneSeo2026 } from './views/blog/MaillageInterneSeo2026';",
  "import { MaillageInterneSeo2026 } from './views/blog/MaillageInterneSeo2026';\nimport { AgenceSeoStrasbourg2026 } from './views/blog/AgenceSeoStrasbourg2026';"
);
appContent = appContent.replace(
  "case 'maillage-interne-seo-2026':\n        return <MaillageInterneSeo2026 />;",
  "case 'maillage-interne-seo-2026':\n        return <MaillageInterneSeo2026 />;\n      case 'agence-seo-strasbourg-2026':\n        return <AgenceSeoStrasbourg2026 />;"
);
fs.writeFileSync('App.tsx', appContent);

console.log("Files updated");
