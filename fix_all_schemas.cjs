const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // Replace any schema "author": { ... } inside article Schema (which is usually the first or second object)
  // We can just use regex to replace "author": { ... } if it contains "@type": "Person" or "@type": "Organization"
  const authorRegex = /"author":\s*\{[^}]+\}/g;
  
  content = content.replace(authorRegex, (match) => {
    // Only replace if it contains Person or Organization (which means it's schema)
    if (match.includes('"@type"')) {
      changed = true;
      return `"author": {
      "@type": "Person",
      "name": "Camille Rousseau",
      "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
      "url": "https://www.triaina.fr",
      "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
    }`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(p, content);
  }
}
console.log("All schemas updated.");
