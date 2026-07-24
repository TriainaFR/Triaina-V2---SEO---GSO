const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const newPost = `,
  {
    id: 'seo-local-france-2026',
    source: 'Guide Local',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'SEO Local France : guide complet 2026',
    excerpt: "Le SEO local, c'est l'ensemble des techniques qui font apparaître votre entreprise dans les résultats géolocalisés de Google. En 2026, c'est critique.",
    url: '/blog/seo-local-france',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
    tag: 'SEO LOCAL'
  }
];`;

content = content.replace("tag: 'E-COMMERCE'\n  }\n];", "tag: 'E-COMMERCE'\n  }" + newPost);
content = content.replace("export const PAGE_TO_URL: Record<string, string> = {", "export const PAGE_TO_URL: Record<string, string> = {\n  'seo-local-france-2026': '/blog/seo-local-france',");
content = content.replace("export const ROUTES: Record<string, Page> = {", "export const ROUTES: Record<string, Page> = {\n  '/blog/seo-local-france': 'seo-local-france-2026',");

fs.writeFileSync('constants.ts', content);
