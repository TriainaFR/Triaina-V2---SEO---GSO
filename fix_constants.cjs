const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

// The incorrect insertion:
// export const BLOG_DATA: BlogItem[  {    id: 'etre-cite-par-chatgpt', ...  },] = [    {

content = content.replace("export const BLOG_DATA: BlogItem[  {\n    id: 'etre-cite-par-chatgpt',\n    source: 'Guide IA',\n    logo: '',\n    date: '7 JUILLET 2026',\n    title: 'Comment être cité par ChatGPT en 2026 : le guide complet',\n    excerpt: 'Référencement ChatGPT : découvrez les 7 facteurs clés pour être cité par ChatGPT en 2026, mesurer votre taux de citation IA et optimiser votre site pour les LLM.',\n    url: '/blog/etre-cite-par-chatgpt',\n    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=1200',\n    tag: 'GUIDE'\n  },] = [", 
"export const BLOG_DATA: BlogItem[] = [\n  {\n    id: 'etre-cite-par-chatgpt',\n    source: 'Guide IA',\n    logo: '',\n    date: '7 JUILLET 2026',\n    title: 'Comment être cité par ChatGPT en 2026 : le guide complet',\n    excerpt: 'Référencement ChatGPT : découvrez les 7 facteurs clés pour être cité par ChatGPT en 2026, mesurer votre taux de citation IA et optimiser votre site pour les LLM.',\n    url: '/blog/etre-cite-par-chatgpt',\n    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=1200',\n    tag: 'GUIDE'\n  },");

fs.writeFileSync('constants.ts', content);
