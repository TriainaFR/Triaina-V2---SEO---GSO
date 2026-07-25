const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const newBlog = `  {
    id: 'agence-seo-nantes-2026',
    source: 'Classement',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'Agence SEO Nantes : top 5 SEO & GEO en 2026',
    excerpt: 'Découvrez le top 5 des meilleures agences SEO Nantes en 2026 : SEO, GEO, tarifs et comparatif. Triaina, NOIISE, Jloo, Sortlist, CyberCité.',
    url: '/blog/agence-seo-nantes-2026',
    image: 'https://triaina.fr/images/agence-seo-nantes-2026.jpg',
    tag: 'SEO LOCAL'
  }
`;

const match = content.match(/tag: 'GUIDE'\n  },\n\];/);
if (match) {
  content = content.replace(/tag: 'GUIDE'\n  },\n\];/, "tag: 'GUIDE'\n  },\n" + newBlog + "];");
  fs.writeFileSync('constants.ts', content);
  console.log("Appended successfully.");
} else {
  console.log("Not matched.");
}
