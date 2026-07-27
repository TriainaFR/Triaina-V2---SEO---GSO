const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const newBlog = `,
  {
    id: 'maillage-interne-seo-2026',
    source: 'Guide SEO',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Maillage interne SEO : guide complet 2026',
    excerpt: 'Découvrez la méthode complète pour auditer et optimiser votre maillage interne SEO en 2026 : pages orphelines, hub & spoke, ancres, impact GEO/LLM.',
    url: '/blog/maillage-interne-seo-2026',
    image: 'https://triaina.fr/images/maillage-interne-seo-2026.jpg',
    tag: 'SEO'
  }
];`;

content = content.replace("    tag: 'GEO'\n  }\n];", "    tag: 'GEO'\n  }" + newBlog);
fs.writeFileSync('constants.ts', content);
console.log("Appended successfully.");
