const fs = require('fs');

let content = fs.readFileSync('views/blog/AgenceSeoGeoRouen2026.tsx', 'utf-8');

const newSchema = `[
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Agence SEO/GEO Rouen : le top 5 en 2026",
      "description": "Comparatif détaillé des 5 profils d'agences SEO/GEO actives sur Rouen et la Seine-Maritime. Découvrez comment le marché évolue et pourquoi choisir un expert.",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.triaina.fr/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://triaina.fr/blog/agence-seo-geo-rouen-2026"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le prix moyen d'une agence SEO/GEO à Rouen ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comptez entre 700 € et 1 800 € HT/mois pour un accompagnement local basique, et entre 1 500 € et 5 000 € HT/mois pour une stratégie SEO/GEO complète incluant contenu, technique, GEO et pilotage média/SEA."
          }
        },
        {
          "@type": "Question",
          "name": "Une agence qui promet des 'résultats garantis' en SEO/GEO est-elle fiable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, pas par principe. Aucune agence ne contrôle l'algorithme de Google ni les réponses générées par ChatGPT, Perplexity ou l'AI Mode."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il choisir une agence locale à Rouen ou une agence nationale ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une agence locale connaît mieux le tissu économique rouennais, mais une agence nationale ou hybride apporte souvent des moyens plus larges et une expertise GEO/SEA plus mature."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que le GEO et pourquoi ça compte pour une entreprise à Rouen ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le GEO consiste à optimiser sa présence dans les réponses générées par les IA comme ChatGPT, Perplexity ou l'AI Mode de Google. C'est essentiel pour ne pas perdre en visibilité sur les recherches informationnelles."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps pour voir des résultats avec une agence SEO/GEO à Rouen ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comptez généralement 3 à 6 mois pour des premiers signaux, et 6 à 12 mois pour des résultats significatifs et durables."
          }
        }
      ]
    }
  ]`;

content = content.replace(/const seoSchema = \[[^]*?\];\s+if/g, "const seoSchema = " + newSchema + ";\n\n  if");

fs.writeFileSync('views/blog/AgenceSeoGeoRouen2026.tsx', content);
