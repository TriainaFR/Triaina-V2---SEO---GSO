const fs = require('fs');

let content = fs.readFileSync('views/blog/AgenceSeoFrance2026.tsx', 'utf8');

// The HTML has an <ol>...<h1...>
content = content.replace(/<ol><li><p><a target="_blank" rel="noopener noreferrer" href="\/">Accueil<\/a><\/p><\/li><li><p><a target="_blank" rel="noopener noreferrer" href="\/blog">Blog<\/a><\/p><\/li><li><p>Agence SEO France 2026<\/p><\/li><\/ol><h1>Agence SEO France : comment choisir en 2026 \?<\/h1>/, '');

// The HTML has an author block at the bottom
content = content.replace(/<hr><p><strong>Auteur :<\/strong> Camille Rousseau - Consultante Senior GEO\/SEO chez Triaina<br><a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/www.linkedin.com\/in\/camille-rousseau-a44488413\/">Profil LinkedIn<\/a><\/p>/, '');

fs.writeFileSync('views/blog/AgenceSeoFrance2026.tsx', content);

