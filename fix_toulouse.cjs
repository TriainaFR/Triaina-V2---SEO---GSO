const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const toulouseItem = `  {
    id: 'agence-seo-toulouse-2026',
    source: 'Comparatif',
    logo: '',
    date: '20 JUILLET 2026',
    title: 'Agence SEO/GEO Toulouse : le top 5 en 2026',
    excerpt: "Le marché de l'agence SEO/GEO à Toulouse en 2026 : spécificités du secteur aéronautique, comparatif des 5 profils d'agences et critères de choix.",
    url: '/blog/agence-seo-geo-toulouse-2026',
    image: 'https://images.unsplash.com/photo-1542104337-336c1e309322?auto=format&fit=crop&q=80&w=1200',
    tag: 'GEO'
  },`;

// We have the item at the top:
// export const BLOG_DATA: BlogItem[] = [
//   {
//     id: 'agence-seo-toulouse-2026',
// ...
//   },
// {

// We will find it and remove it:
const exactMatch = `export const BLOG_DATA: BlogItem[] = [
  {
    id: 'agence-seo-toulouse-2026',
    source: 'Comparatif',
    logo: '',
    date: '20 JUILLET 2026',
    title: 'Agence SEO/GEO Toulouse : le top 5 en 2026',
    excerpt: "Le marché de l'agence SEO/GEO à Toulouse en 2026 : spécificités du secteur aéronautique, comparatif des 5 profils d'agences et critères de choix.",
    url: '/blog/agence-seo-geo-toulouse-2026',
    image: 'https://images.unsplash.com/photo-1542104337-336c1e309322?auto=format&fit=crop&q=80&w=1200',
    tag: 'GEO'
  },
{`;
if (content.includes(exactMatch)) {
  content = content.replace(exactMatch, `export const BLOG_DATA: BlogItem[] = [\n{`);
} else {
  // Try another variation
  const match2 = `export const BLOG_DATA: BlogItem[] = [
  {
    id: 'agence-seo-toulouse-2026',
    source: 'Comparatif',
    logo: '',
    date: '20 JUILLET 2026',
    title: 'Agence SEO/GEO Toulouse : le top 5 en 2026',
    excerpt: "Le marché de l'agence SEO/GEO à Toulouse en 2026 : spécificités du secteur aéronautique, comparatif des 5 profils d'agences et critères de choix.",
    url: '/blog/agence-seo-geo-toulouse-2026',
    image: 'https://images.unsplash.com/photo-1542104337-336c1e309322?auto=format&fit=crop&q=80&w=1200',
    tag: 'GEO'
  },
`;
  content = content.replace(match2, `export const BLOG_DATA: BlogItem[] = [\n`);
}

// Add to the bottom
content = content.replace(`    tag: 'TECH'
  }
];`, `    tag: 'TECH'
  },
${toulouseItem.slice(0, -1)}
];`);

fs.writeFileSync('constants.ts', content);
console.log("fixed constants");
