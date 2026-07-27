const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const regex = /,[\s\n]*\{[\s\n]*id: 'referencement-ia-ecommerce-2026'[^}]*\}/g;
content = content.replace(regex, '');

const newBlog = `,
  {
    id: 'referencement-ia-ecommerce-2026',
    source: 'Guide E-commerce',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Référencement IA e-commerce : guide complet 2026',
    excerpt: 'Référencement IA e-commerce en 2026 : comment optimiser vos fiches produits, catégories et contenu pour être cité par ChatGPT, Gemini et les AI Overviews. Guide complet GEO.',
    url: '/blog/referencement-ia-ecommerce-2026',
    image: 'https://triaina.fr/images/referencement-ia-ecommerce-2026.jpg',
    tag: 'GEO'
  }
];`;

content = content.replace("    tag: 'SEO LOCAL'\n  }\n];", "    tag: 'SEO LOCAL'\n  }" + newBlog);

fs.writeFileSync('constants.ts', content);
console.log("Fixed successfully.");
