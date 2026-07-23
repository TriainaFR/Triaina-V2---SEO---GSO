const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// 1. Restore the end of the file.
content = content.replace(
`  {
    id: 4,
    botMessage: "Dernière étape.\\nDécrivez brièvement votre défi actuel (Baisse de trafic, Lancement produit, Concurrence IA...).",
    fieldName: "project",
    placeholder: "Décrivez votre défi...",
    type: "textarea"
  }
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
  },
];`,
`  {
    id: 4,
    botMessage: "Dernière étape.\\nDécrivez brièvement votre défi actuel (Baisse de trafic, Lancement produit, Concurrence IA...).",
    fieldName: "project",
    placeholder: "Décrivez votre défi...",
    type: "textarea"
  }
];`
);

// Remove the item from the top of BLOG_DATA if it is still there
const newPost = `{
    id: 'agence-seo-france-2026',
    source: 'Guide Agences',
    logo: '',
    date: '23 JUILLET 2026',
    title: 'Agence SEO France : comment choisir en 2026 ?',
    excerpt: "Le marché des agences SEO en France compte plusieurs centaines d'acteurs. Ce guide compare les cinq agences qui sortent du lot en 2026, avec les critères concrets pour faire le bon choix.",
    url: '/blog/agence-seo-france',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'AGENCES'
  }`;

// Actually let's just do a clean regex replacement for it
content = content.replace(/\{\s*id:\s*'agence-seo-france-2026'[\s\S]*?\},/g, '');

// Append it right before `];\n\nexport const CAREERS_DATA`
content = content.replace(
`    tag: 'ANALYSE'
  }
];`, 
`    tag: 'ANALYSE'
  },
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
];`);

fs.writeFileSync('constants.ts', content);

