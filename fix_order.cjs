const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf-8');

// The caen block
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
  }`;

// Remove caen block from the bottom
content = content.replace(caenBlock + "\n", "");
content = content.replace(caenBlock, "");
content = content.replace(/,\s*];\n\nexport const PARTNERS_DATA/, "\n];\n\nexport const PARTNERS_DATA");
content = content.replace(/,\s*];\nexport const PARTNERS_DATA/, "\n];\nexport const PARTNERS_DATA");

// Now we need to insert it at the very top of BLOG_DATA
const blogDataStart = `export const BLOG_DATA: BlogItem[] = [\n`;
if (content.includes(blogDataStart)) {
    content = content.replace(blogDataStart, blogDataStart + caenBlock + ",\n");
    fs.writeFileSync('constants.ts', content);
    console.log("Moved to top of BLOG_DATA.");
} else {
    console.log("Could not find BLOG_DATA start.");
}

