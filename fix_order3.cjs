const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

const caenBlock = `  {
    id: 'agence-seo-geo-caen-2026'
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'
  },`;

// Clean up the mistake in REFERENCES_DATA
const badInsert = `  {
    id: 'agence-seo-geo-caen-2026'
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'
  },`;

content = content.replace(badInsert + "\\n", "");
content = content.replace(badInsert, "");

// Clean without comma
const badInsertNoComma = badInsert.replace(',', '');
content = content.replace(badInsertNoComma + "\\n", "");
content = content.replace(badInsertNoComma, "");

const correctCaenBlock = `  {
    id: 'agence-seo-geo-caen-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'
  }`;

// Find the end of BLOG_DATA which is before CAREERS_DATA
const careersDataStart = `export const CAREERS_DATA: JobOffer[] = [];`;
if (content.includes(careersDataStart)) {
    content = content.replace(
        `  }\n];\n\nexport const CAREERS_DATA`,
        `  },\n` + correctCaenBlock + `\n];\n\nexport const CAREERS_DATA`
    );
    content = content.replace(
        `  }\n];\nexport const CAREERS_DATA`,
        `  },\n` + correctCaenBlock + `\n];\nexport const CAREERS_DATA`
    );
}

fs.writeFileSync('constants.ts', content);
console.log("Moved correctly.");
