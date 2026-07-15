const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

// Insert into PAGE_TO_URL
content = content.replace(
  /'agence-geo-ecommerce-2026': '\/blog\/agence-geo-ecommerce-2026',/,
  "'agence-geo-ecommerce-2026': '/blog/agence-geo-ecommerce-2026',\n  'audit-eeat-2026': '/blog/audit-eeat-2026',"
);

// Insert into ROUTES
content = content.replace(
  /'\/blog\/agence-geo-ecommerce-2026': 'agence-geo-ecommerce-2026',/,
  "'/blog/agence-geo-ecommerce-2026': 'agence-geo-ecommerce-2026',\n  '/blog/audit-eeat-2026': 'audit-eeat-2026',"
);

// Insert into BLOG_DATA
const blogPostStr = `  {
    id: 'audit-eeat-2026',
    source: 'E-E-A-T',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Audit E-E-A-T 2026 : comment préparer votre site ?',
    excerpt: 'L\\'E-E-A-T est le cadre que Google utilise pour évaluer la fiabilité d\\'un contenu et de son auteur. Ce guide vous aide à préparer votre site.',
    url: '/blog/audit-eeat-2026',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  }
];

export const CAREERS_DATA`;

content = content.replace(/];\s*export const CAREERS_DATA/, blogPostStr);

fs.writeFileSync('constants.ts', content);
