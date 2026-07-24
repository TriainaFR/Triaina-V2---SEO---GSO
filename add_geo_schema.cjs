const fs = require('fs');

function addSchema(filename, faqSchema) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Check if we already have the FAQ schema
    if (content.includes('FAQPage')) return;
    
    // Find where seoSchema is defined
    let replacement = `    },
    ${faqSchema}
  ];`;
    
    content = content.replace(/    \}\n  \];/, replacement);
    fs.writeFileSync(filename, content);
}

const ecommerceSchema = `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un consultant SEO e-commerce et une agence SEO e-commerce ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un consultant travaille souvent en solo, idéal pour de petits catalogues, tandis qu'une agence apporte une équipe pluridisciplinaire et gère des projets de plus grande envergure."
          }
        },
        {
          "@type": "Question",
          "name": "L'AI Overview de Google va-t-il tuer le SEO e-commerce ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, mais il le transforme. Les requêtes transactionnelles précises résistent mieux, et il devient nécessaire d'adopter une stratégie GEO (Generative Engine Optimization)."
          }
        }
      ]
    }`;

const localSchema = `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de temps faut-il pour voir des résultats en SEO local ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les premières améliorations sur Google Business Profile sont visibles en 4 à 8 semaines. Les effets sur le trafic organique prennent 3 à 6 mois."
          }
        },
        {
          "@type": "Question",
          "name": "La fiche Google My Business est-elle toujours d'actualité en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, renommée Google Business Profile (GBP), elle reste l'outil central et gratuit du référencement local Google et est intégrée dans les IA (Gemini, AI Overviews)."
          }
        }
      ]
    }`;

addSchema('views/blog/AgenceSeoEcommerce2026.tsx', ecommerceSchema);
addSchema('views/blog/SeoLocalFrance2026.tsx', localSchema);
