const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const newRoute = "  'strategie-contenu-seo-2026': '/blog/strategie-contenu-seo-2026',\n";
content = content.replace("export const PAGE_TO_URL: Record<string, string> = {", "export const PAGE_TO_URL: Record<string, string> = {\n" + newRoute);

const newBlogItem = `  {
    id: 'strategie-contenu-seo-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'Stratégie de contenu SEO 2026 : le guide complet',
    excerpt: 'Construisez une stratégie de contenu SEO efficace en 2026 : clusters thématiques, E-E-A-T, optimisation GEO pour ChatGPT et AI Overview.',
    url: '/blog/strategie-contenu-seo-2026',
    image: 'https://images.unsplash.com/photo-1542435503-956c221e7a56?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
`;
content = content.replace("export const BLOG_DATA: BlogItem[] = [", "export const BLOG_DATA: BlogItem[] = [\n" + newBlogItem);

const newRoutesEntry = "  '/blog/strategie-contenu-seo-2026': 'strategie-contenu-seo-2026',\n";
content = content.replace("export const ROUTES: Record<string, Page> = {", "export const ROUTES: Record<string, Page> = {\n" + newRoutesEntry);

fs.writeFileSync('constants.ts', content);
