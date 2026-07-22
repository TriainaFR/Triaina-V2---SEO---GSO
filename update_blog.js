const fs = require('fs');
let content = fs.readFileSync('src/constants.ts', 'utf8');

const newBlogItem = `  {
    id: 'ia-analyse-donnees-optimisation-seo-2026',
    source: 'Data SEO & IA',
    logo: '',
    date: '22 JUILLET 2026',
    title: 'IA et Analyse de Données SEO : comment l\\'intelligence artificielle redéfinit l\\'optimisation en 2026',
    excerpt: 'Comment Triaina utilise l\\'IA analyse SEO pour transformer la prise de décision : signaux comportementaux, clustering sémantique, prédiction ranking. Cas concret 2026.',
    url: '/blog/ia-analyse-donnees-optimisation-seo-2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tag: 'ANALYSE'
  },
`;

content = content.replace('export const BLOG_DATA: BlogItem[] = [', 'export const BLOG_DATA: BlogItem[] = [\n' + newBlogItem);
fs.writeFileSync('src/constants.ts', content);
