const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

const caenBlock = `  {
    id: 'agence-seo-geo-caen-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'
  },`;

content = content.replace(caenBlock + "\\n", "");
content = content.replace(caenBlock + "\\r\\n", "");
content = content.replace(caenBlock, "");

const caenBlockNoComma = caenBlock.replace(',', '');
content = content.replace(caenBlockNoComma + "\\n", "");
content = content.replace(caenBlockNoComma, "");

// Append to the end of BLOG_DATA
const blogDataEnd = `  }\n];\n\nexport const PARTNERS_DATA`;
content = content.replace(blogDataEnd, "  },\n" + caenBlockNoComma + "\n];\n\nexport const PARTNERS_DATA");

const blogDataEnd2 = `  }\n];\nexport const PARTNERS_DATA`;
content = content.replace(blogDataEnd2, "  },\n" + caenBlockNoComma + "\n];\nexport const PARTNERS_DATA");

fs.writeFileSync('constants.ts', content);
console.log("Moved to end of BLOG_DATA.");
