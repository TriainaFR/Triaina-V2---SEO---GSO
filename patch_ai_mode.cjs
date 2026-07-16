const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

// Insert into PAGE_TO_URL
content = content.replace(
  /'audit-eeat-2026': '\/blog\/audit-eeat-2026',/,
  "'audit-eeat-2026': '/blog/audit-eeat-2026',\n  'google-ai-mode-2026': '/blog/google-ai-mode-2026',"
);

// Insert into ROUTES
content = content.replace(
  /'\/blog\/audit-eeat-2026': 'audit-eeat-2026',/,
  "'/blog/audit-eeat-2026': 'audit-eeat-2026',\n  '/blog/google-ai-mode-2026': 'google-ai-mode-2026',"
);

// Insert into BLOG_DATA
const blogPostStr = `  {
    id: 'google-ai-mode-2026',
    source: 'GEO',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Google AI Mode : qu\\'est-ce que c\\'est et comment s\\'y préparer en 2026 ?',
    excerpt: 'Google AI Mode, c\\'est un onglet de recherche à part entière, distinct des AI Overviews, qui remplace la page de résultats classique par une conversation construite avec Gemini 3.',
    url: '/blog/google-ai-mode-2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  }
];

export const CAREERS_DATA`;

content = content.replace(/];\s*export const CAREERS_DATA/, blogPostStr);

fs.writeFileSync('constants.ts', content);
