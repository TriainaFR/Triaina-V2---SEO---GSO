const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const newPost = `,
  {
    id: 'agence-seo-france-2026',
    source: 'Guide Agences',
    logo: '',
    date: '23 JUILLET 2026',
    title: 'Agence SEO France : comment choisir en 2026 ?',
    excerpt: "Le marché des agences SEO en France compte plusieurs centaines d'acteurs. Ce guide compare les cinq agences qui sortent du lot en 2026, avec les critères concrets pour faire le bon choix.",
    url: '/blog/agence-seo-france',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'AGENCES'
  }
];`;

content = content.replace("tag: 'ANALYSE'\n  }];", "tag: 'ANALYSE'\n  }" + newPost);

fs.writeFileSync('constants.ts', content);
