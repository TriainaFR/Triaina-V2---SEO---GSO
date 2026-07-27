const fs = require('fs');

const personSchema = `    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Camille Rousseau",
      "jobTitle": "Consultante Senior GEO/SEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      },
      "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
    }`;

// For ReferencementIaEcommerce2026
let content1 = fs.readFileSync('views/blog/ReferencementIaEcommerce2026.tsx', 'utf8');
if (!content1.includes('"@type": "Person"')) {
    // it's inside Article author, but as a separate schema it might not be.
}
if (!content1.includes('jobTitle": "Consultante Senior GEO/SEO",')) {
    content1 = content1.replace(
        `      ]\n    }\n  ];`,
        `      ]\n    },\n${personSchema}\n  ];`
    );
    fs.writeFileSync('views/blog/ReferencementIaEcommerce2026.tsx', content1);
}

// For MaillageInterneSeo2026
let content2 = fs.readFileSync('views/blog/MaillageInterneSeo2026.tsx', 'utf8');
if (!content2.includes('jobTitle": "Consultante Senior GEO/SEO",\n      "worksFor": {')) {
    content2 = content2.replace(
        `      ]\n    }\n  ];`,
        `      ]\n    },\n${personSchema}\n  ];`
    );
    fs.writeFileSync('views/blog/MaillageInterneSeo2026.tsx', content2);
}
console.log('Schemas updated');
