const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf-8');

const sunlifeItem = `  {
    id: 'ref_sunlife_group',
    client: 'Sunlife Group',
    title: 'Stratégie SEO & GEO',
    summary: 'Accompagnement SEO et GEO pour les 5 hôtels et 2 golfs du groupe.',
    challenge: 'Développer la visibilité de l\\'ensemble des 5 hôtels et 2 golfs du groupe sur les moteurs de recherche traditionnels et les intelligences artificielles génératives.',
    solution: '',
    results: [
        'Accompagnement SEO et GEO en cours.'
    ],
    tags: ['SEO', 'GEO', 'Travel', 'Luxe'],
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&q=80&w=1200'
  },
`;

content = content.replace(
  "    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'\n  },\n  {\n    id: 'ref_leshardis',",
  "    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'\n  },\n" + sunlifeItem + "  {\n    id: 'ref_leshardis',"
);

fs.writeFileSync('constants.ts', content);
console.log("Patched constants.ts");
