const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

// Replace Rennes image
content = content.replace(
  "image: '/rennes_classic_architecture_v2.jpg'",
  "image: '/french_city_architecture.jpg'"
);

// Define the Caen blog post
const caenPost = `  {
    id: 'agence-seo-geo-caen-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: '/french_city_architecture.jpg',
    tag: 'CLASSEMENT'
  }
];`;

content = content.replace("  }\n];", "  },\n" + caenPost);

// Add to PAGE_TO_URL mapping
content = content.replace(
  "'/blog/agence-seo-geo-rennes-2026': 'agence-seo-geo-rennes-2026',",
  "'/blog/agence-seo-geo-rennes-2026': 'agence-seo-geo-rennes-2026',\n  '/blog/agence-seo-geo-caen-2026': 'agence-seo-geo-caen-2026',"
);

// Add to URL mappings list
content = content.replace(
  "'agence-seo-geo-rennes-2026': '/blog/agence-seo-geo-rennes-2026',",
  "'agence-seo-geo-rennes-2026': '/blog/agence-seo-geo-rennes-2026',\n  'agence-seo-geo-caen-2026': '/blog/agence-seo-geo-caen-2026',"
);

fs.writeFileSync('constants.ts', content);
console.log("Updated constants.ts");
