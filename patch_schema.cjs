const fs = require('fs');
let content = fs.readFileSync('views/blog/AgenceGeoEcommerce2026.tsx', 'utf-8');

const updatedSchema = `  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Agence GEO e-commerce : comment choisir en 2026 ?",
      "description": "Ce guide compare les critères de sélection d'une agence GEO spécialisée dans le commerce en ligne, présente cinq profils d'agences, propose une matrice comparative.",
      "image": "https://www.triaina.fr/images/agence-geo-ecommerce.jpg",
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
      "author": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'une agence GEO e-commerce ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est une agence spécialisée dans l'optimisation de la visibilité d'un site marchand au sein des réponses générées par l'intelligence artificielle (Google AI Overview, ChatGPT, Perplexity, Gemini), en complément du référencement naturel classique."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle différence entre une agence SEO et une agence GEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le SEO vise à obtenir un classement en tête des résultats de recherche pour générer un clic. Le GEO vise à être cité comme source de référence dans une réponse générative, avec ou sans clic vers le site."
          }
        },
        {
          "@type": "Question",
          "name": "Quand l'AI Overview arrive-t-il vraiment en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google a confirmé le déploiement entre l'été et le 23 septembre 2026, après un accord avec les éditeurs de presse français sur la rémunération et un système d'opt-out. La date exacte du jour de lancement n'a pas été communiquée."
          }
        },
        {
          "@type": "Question",
          "name": "Une agence GEO e-commerce remplace-t-elle une agence SEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le GEO complète le SEO, il ne le remplace pas. La majorité du trafic reste aujourd'hui organique classique ; le GEO sécurise la part de visibilité captée par les réponses IA en croissance."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûte une prestation GEO pour un site e-commerce ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les tarifs varient fortement selon la taille du catalogue et le périmètre (audit ponctuel, accompagnement mensuel, ou stratégie combinée GEO/SEA). Un audit initial permet généralement de cadrer un budget adapté à votre volumétrie de produits."
          }
        }
      ]
    }
  ];`;

content = content.replace(
  /const seoSchema = \[[\s\S]*?\];/,
  updatedSchema
);

fs.writeFileSync('views/blog/AgenceGeoEcommerce2026.tsx', content);
