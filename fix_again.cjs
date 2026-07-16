const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

// remove from REFERENCES_DATA
const badEntry = `  {
    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: 'https://images.unsplash.com/photo-1544062425-ceb8c4c3e721?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  }`;

content = content.replace(",\n" + badEntry, "");

const goodEntry = `  {
    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: 'https://images.unsplash.com/photo-1544062425-ceb8c4c3e721?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  }
];

export const CAREERS_DATA: JobOffer[] = [];`;

content = content.replace("  }\n];\n\nexport const CAREERS_DATA: JobOffer[] = [];", "  },\n" + goodEntry);

fs.writeFileSync('constants.ts', content);
console.log("Fixed again.");
