const fs = require('fs');

const schemaString = `
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Agence SEO Montpellier : top 5 SEO & GEO en 2026",
      "description": "Découvrez le top 5 des meilleures agences SEO & GEO à Montpellier en 2026. Critères de sélection, comparatif et conseils pour choisir la bonne agence.",
      "url": "https://triaina.fr/blog/agence-seo-montpellier-2026",
      "datePublished": "2026-07-29T08:00:00+02:00",
      "dateModified": "2026-07-29T08:00:00+02:00",
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO",
        "worksFor": { "@type": "Organization", "name": "Triaina" },
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      },
      "keywords": "agence seo montpellier, agence geo montpellier, agence référencement montpellier, référencement naturel montpellier, meilleure agence seo montpellier",
      "about": [
        { "@type": "Thing", "name": "SEO" },
        { "@type": "Thing", "name": "Generative Engine Optimization" },
        { "@type": "Place", "name": "Montpellier" },
        { "@type": "Organization", "name": "Triaina" }
      ],
      "inLanguage": "fr-FR",
      "isPartOf": { "@type": "Blog", "name": "Blog Triaina", "url": "https://triaina.fr/blog" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte une agence SEO à Montpellier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les tarifs varient selon la taille du projet : TPE/petite PME 500 à 800 € HT/mois, PME avec accompagnement complet 1 200 à 3 500 € HT/mois, e-commerce/ETI 3 500 à 8 000 € HT/mois et plus, audit ponctuel 1 500 à 5 000 € HT selon la taille du site."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps une agence SEO obtient-elle des résultats à Montpellier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les premiers signaux apparaissent entre 1 et 3 mois. Les résultats tangibles (trafic qualifié, leads, ventes) arrivent entre 3 et 6 mois. Un plein effet se constate sur 6 à 12 mois selon la concurrence et l'état initial du site."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre SEO et GEO en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le SEO vise les résultats classiques de Google. Le GEO (Generative Engine Optimization) optimise la présence dans les IA génératives : ChatGPT, Perplexity, Google AI Overviews, Gemini. En 2026, les deux leviers sont complémentaires et indissociables."
          }
        },
        {
          "@type": "Question",
          "name": "Quels critères pour choisir la meilleure agence SEO à Montpellier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cinq critères essentiels : expertise technique SEO et couverture GEO/LLM, cas clients mesurables, transparence de la méthode et reporting orienté business, capacité à couvrir les 4 piliers SEO (technique, contenu, netlinking, suivi), adéquation budget/profil."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi choisir Triaina comme agence SEO & GEO à Montpellier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Triaina est la seule agence à combiner 4 leviers en un seul contrat : SEO organique, GEO/LLM, SEA/Paid et médias propriétaires + régie. Résultats documentés : 0 → 73 % et 0 → 90 % de citations IA sur les requêtes cibles clients."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://triaina.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://triaina.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Agence SEO Montpellier : top 5 SEO & GEO en 2026", "item": "https://triaina.fr/blog/agence-seo-montpellier-2026" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Camille Rousseau",
      "jobTitle": "Consultante Senior GEO/SEO",
      "worksFor": { "@type": "Organization", "name": "Triaina", "url": "https://triaina.fr" },
      "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
    }
  ];
`;

let content = fs.readFileSync('views/blog/AgenceSeoMontpellier2026.tsx', 'utf8');

// Insert schemas before the component
content = content.replace("export function AgenceSeoMontpellier2026() {", schemaString + "\nexport function AgenceSeoMontpellier2026() {");

// Add schema and other geo/LLM tags to SEO
const seoReplacement = `<SEO 
        title="Agence SEO Montpellier : top 5 SEO & GEO en 2026"
        description="Découvrez le top 5 des meilleures agences SEO & GEO à Montpellier en 2026. Critères de sélection, comparatif et conseils pour choisir la bonne agence."
        canonicalUrl="https://triaina.fr/blog/agence-seo-montpellier-2026"
        image="https://triaina.fr/images/agence-seo-montpellier-2026.jpg"
        type="article"
        schema={schemas}
        geoRegion="FR-34"
        geoPlacename="Montpellier"
        topic="Agences SEO et GEO à Montpellier"
        category="Référencement naturel"
        coverage="Montpellier, Hérault, Occitanie, France"
        target="Dirigeants PME, e-commerçants, startups Montpellier"
        rating="general"
        revisitAfter="30 days"
        language="fr"
        author="Camille Rousseau"
      />`;

content = content.replace(/<SEO[\s\S]*?\/>/, seoReplacement);

fs.writeFileSync('views/blog/AgenceSeoMontpellier2026.tsx', content);
