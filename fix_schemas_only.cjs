const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Replace the entire const seoSchema = ...; block
  // First, find where const seoSchema = is
  const seoSchemaRegex = /const seoSchema = \[[\s\S]*?(?=\s*if \(!post\))/;
  
  const newSchemaBlock = `const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post?.title || '',
      "description": post?.excerpt || '',
      "image": post?.image || '',
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.triaina.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": post?.title || '', "item": \`https://www.triaina.fr\${post?.url || ''}\` }
      ]
    }
  ];`;

  content = content.replace(seoSchemaRegex, newSchemaBlock + '\n\n');
  
  fs.writeFileSync(path.join(dir, file), content);
}

console.log("All schemas fixed!");
