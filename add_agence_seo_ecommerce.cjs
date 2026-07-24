const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const newPost = `,
  {
    id: 'agence-seo-ecommerce-2026',
    source: 'Guide E-commerce',
    logo: '',
    date: '24 JUILLET 2026',
    title: 'Agence SEO e-commerce : comment choisir en 2026 ?',
    excerpt: "Le référencement e-commerce n'a plus rien à voir avec le SEO d'un site vitrine. Choisir la mauvaise agence, c'est perdre six mois et un budget conséquent.",
    url: '/blog/agence-seo-ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    tag: 'E-COMMERCE'
  }
];`;

content = content.replace("tag: 'AGENCES'\n  }];", "tag: 'AGENCES'\n  }" + newPost);

// Also we need to add mapping to PAGE_TO_URL and URL_TO_PAGE if needed. Wait, PAGE_TO_URL logic is manual? Let's check how PAGE_TO_URL looks.
