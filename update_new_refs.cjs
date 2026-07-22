const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

const newRefs = `
  {
    id: 'ref_younight',
    client: 'Younight Hospitality',
    title: 'Audit GEO & SEO',
    summary: 'Audit complet GEO & SEO pour le groupe hôtelier.',
    challenge: 'Identifier les opportunités de visibilité sur les moteurs de recherche traditionnels et IA.',
    solution: '',
    results: [
        'Audit GEO & SEO délivré.'
    ],
    tags: ['GEO', 'SEO', 'Hospitality', 'Audit'],
    image: '/images/Younight Hospitality Logo.jpg.png'
  },
  {
    id: 'ref_bomporto',
    client: 'Bomporto Hotels',
    title: 'Stratégie SEO & GEO',
    summary: 'Audit GEO + SEO et accompagnement SEO & GEO mensuel.',
    challenge: 'Améliorer le positionnement global et la présence sur les LLMs.',
    solution: '',
    results: [
        'Audit GEO + SEO réalisé.',
        'Accompagnement mensuel en cours.'
    ],
    tags: ['GEO', 'SEO', 'Hospitality'],
    image: '/images/Bomporto Hotel Logo.jpeg'
  },
`;

content = content.replace('export const REFERENCES_DATA: ReferenceItem[] = [', 'export const REFERENCES_DATA: ReferenceItem[] = [' + newRefs);

fs.writeFileSync('constants.ts', content);
