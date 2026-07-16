const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

const rennesTarget = `    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'`;

const rennesReplacement = `    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: '/rennes_classic_architecture_v2.jpg',
    tag: 'CLASSEMENT'`;

content = content.replace(rennesTarget, rennesReplacement);
fs.writeFileSync('constants.ts', content);
