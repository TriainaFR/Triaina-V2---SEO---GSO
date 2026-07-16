const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

if (!content.includes("'agence-seo-geo-rennes-2026'")) {
    content = content.replace(
        "  'agence-seo-lyon-2026': '/blog/agence-seo-lyon',",
        "  'agence-seo-lyon-2026': '/blog/agence-seo-lyon',\n  'agence-seo-geo-rennes-2026': '/blog/agence-seo-geo-rennes-2026',"
    );

    content = content.replace(
        "  '/blog/agence-seo-lyon': 'agence-seo-lyon-2026',",
        "  '/blog/agence-seo-lyon': 'agence-seo-lyon-2026',\n  '/blog/agence-seo-geo-rennes-2026': 'agence-seo-geo-rennes-2026',"
    );

    const newBlogEntry = `  {
    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
`;

    content = content.replace(
        "export const BLOG_DATA: BlogItem[] = [\n",
        "export const BLOG_DATA: BlogItem[] = [\n" + newBlogEntry
    );

    fs.writeFileSync('constants.ts', content);
    console.log("Patched constants.ts");
}
