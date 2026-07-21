const fs = require('fs');

function addArticle() {
  let content = fs.readFileSync('constants.ts', 'utf8');
  
  if (!content.includes("'core-web-vitals-seo-2026'")) {
    content = content.replace(
      "export const PAGE_TO_URL: Record<string, string> = {",
      "export const PAGE_TO_URL: Record<string, string> = {\n  'core-web-vitals-seo-2026': '/blog/core-web-vitals-seo-2026',"
    );

    content = content.replace(
      "export const ROUTES: Record<string, Page> = {",
      "export const ROUTES: Record<string, Page> = {\n  '/blog/core-web-vitals-seo-2026': 'core-web-vitals-seo-2026',"
    );

    const articleData = `  {
    id: 'core-web-vitals-seo-2026',
    source: 'Guide Technique',
    logo: '',
    date: '21 JUILLET 2026',
    title: 'Core Web Vitals et SEO Technique : Le Guide Complet pour Performer en 2026',
    excerpt: "Les Core Web Vitals sont un signal de classement Google officiel depuis 2021, et ils le restent en 2026 - avec un poids amplifié par NavBoost. Un LCP au-dessus de 4 s, c\\'est une suppression active de votre ranking.",
    url: '/blog/core-web-vitals-seo-2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'TECH'
  },
`;
    content = content.replace(
      "export const BLOG_DATA: BlogItem[] = [",
      "export const BLOG_DATA: BlogItem[] = [\n" + articleData
    );

    fs.writeFileSync('constants.ts', content);
  }
}

addArticle();
