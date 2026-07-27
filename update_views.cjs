const fs = require('fs');

let content1 = fs.readFileSync('views/blog/ReferencementIaEcommerce2026.tsx', 'utf8');
content1 = content1.replace(
  `        geoRegion="FR"\n        geoPlacename="France"\n        schema={seoSchema}\n      />`,
  `        geoRegion="FR"\n        geoPlacename="France"\n        topic="référencement IA e-commerce GEO 2026"\n        category="GEO, SEO e-commerce, Intelligence Artificielle"\n        coverage="France, Europe"\n        target="e-commerçants, responsables marketing e-commerce, DSI"\n        rating="general"\n        revisitAfter="7 days"\n        language="fr"\n        author="Camille Rousseau"\n        schema={seoSchema}\n      />`
);
fs.writeFileSync('views/blog/ReferencementIaEcommerce2026.tsx', content1);

let content2 = fs.readFileSync('views/blog/MaillageInterneSeo2026.tsx', 'utf8');
content2 = content2.replace(
  `        geoRegion="FR"\n        geoPlacename="France"\n        schema={seoSchema}\n      />`,
  `        geoRegion="FR-IDF"\n        geoPlacename="Paris"\n        topic="maillage interne SEO"\n        category="SEO technique"\n        coverage="France"\n        target="agences SEO, consultants SEO, décideurs marketing"\n        rating="general"\n        revisitAfter="30 days"\n        language="fr"\n        author="Camille Rousseau"\n        schema={seoSchema}\n      />`
);
fs.writeFileSync('views/blog/MaillageInterneSeo2026.tsx', content2);
console.log('Views updated');
