const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

// Insert into PAGE_TO_URL
content = content.replace(
  /'ai-overview-ecommerce-2026': '\/blog\/ai-overview-ecommerce-france-2026',/,
  "'ai-overview-ecommerce-2026': '/blog/ai-overview-ecommerce-france-2026',\n  'agence-geo-ecommerce-2026': '/blog/agence-geo-ecommerce-2026',"
);

// Insert into ROUTES
content = content.replace(
  /'\/blog\/ai-overview-ecommerce-france-2026': 'ai-overview-ecommerce-2026',/,
  "'/blog/ai-overview-ecommerce-france-2026': 'ai-overview-ecommerce-2026',\n  '/blog/agence-geo-ecommerce-2026': 'agence-geo-ecommerce-2026',"
);

// Insert into BLOG_DATA
const blogPostStr = `  {
    id: 'agence-geo-ecommerce-2026',
    source: 'GEO',
    logo: '',
    date: '15 JUILLET 2026',
    title: 'Agence GEO e-commerce : comment choisir en 2026 ?',
    excerpt: 'Ce guide compare les critères de sélection d\\'une agence GEO spécialisée dans le commerce en ligne, présente cinq profils d\\'agences et propose une matrice comparative.',
    url: '/blog/agence-geo-ecommerce-2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
`;

content = content.replace(
  /export const BLOG_DATA: BlogItem\[\] = \[/,
  "export const BLOG_DATA: BlogItem[] = [\n" + blogPostStr
);

fs.writeFileSync('constants.ts', content);
