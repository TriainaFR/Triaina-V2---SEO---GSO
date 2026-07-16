const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');

const blogEntryRegex = /  \{\s*id: 'agence-seo-geo-rennes-2026',[\s\S]*?tag: 'CLASSEMENT'\s*\},\n/;
const match = content.match(blogEntryRegex);

if (match) {
    // Remove it from the beginning
    content = content.replace(match[0], '');
    
    // Create the updated entry with a reindeer image
    const newEntry = `  {
    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: 'https://images.unsplash.com/photo-1544062425-ceb8c4c3e721?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  }
];`;

    // Append to the end of BLOG_DATA array (which ends with '];')
    content = content.replace(/  \}\n\];/, '  },\n' + newEntry);
    fs.writeFileSync('constants.ts', content);
    console.log("Moved blog entry to the end and updated image.");
} else {
    console.log("Blog entry not found.");
}
