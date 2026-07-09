const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf-8');

const articleCode = `
  {
    id: 'top-10-agences-seo-geo-paris-2026',
    source: 'Classement Agences',
    logo: '',
    date: '10 JUILLET 2026',
    title: 'Top 10 Agences SEO et GEO à Paris en 2026',
    excerpt: 'Découvrez notre classement exclusif des meilleures agences SEO et GEO parisiennes pour dominer Google et les intelligences artificielles.',
    url: '/blog/top-agences-seo-geo-paris',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },`;

if (!code.includes("id: 'top-10-agences-seo-geo-paris-2026'")) {
    code = code.replace(
        "export const BLOG_DATA: BlogItem[] = [",
        "export const BLOG_DATA: BlogItem[] = [" + articleCode
    );
}

fs.writeFileSync('constants.ts', code);
