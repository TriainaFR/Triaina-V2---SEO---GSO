import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const AiOverviewEcommerce2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'ai-overview-ecommerce-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Google AI Overview et e-commerce : impact sur le trafic organique",
      "description": "Google a confirmé le lancement d'AI Overview en France entre l'été et le 23 septembre 2026. Découvrez l'impact sur le SEO e-commerce et les actions à mener.",
      "image": "https://www.triaina.fr/images/ai-overview-ecommerce.jpg",
      "datePublished": "2026-07-06",
      "dateModified": "2026-07-06",
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
        "@id": "https://www.triaina.fr/blog/ai-overview-ecommerce-france-2026"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quand AI Overview sera-t-il lancé en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google a confirmé un déploiement entre l'été 2026 et le 23 septembre 2026 au plus tard, sans date journalière précise communiquée à ce jour."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que tous les sites e-commerce vont perdre du trafic ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas uniformément. Les études américaines et britanniques montrent une baisse moyenne de CTR organique de 61 % sur les requêtes concernées, mais les sites cités dans l'AI Overview conservent un CTR nettement supérieur aux non-cités, et un trafic souvent mieux converti."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il ajouter un balisage spécial pour apparaître dans AI Overview ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Google précise dans sa documentation officielle qu'il n'existe pas de balisage schema.org spécifique ni de format de fichier dédié à l'IA. Les bonnes pratiques SEO classiques (contenu utile, données structurées cohérentes, crawlabilité) restent la base."
          }
        },
        {
          "@type": "Question",
          "name": "Les annonces Shopping vont-elles disparaître au profit d'AI Overview ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, les deux coexistent. Les annonces Shopping continuent généralement de s'afficher au-dessus ou à côté du contenu généré, mais la concurrence pour l'attention de l'utilisateur s'intensifie."
          }
        },
        {
          "@type": "Question",
          "name": "Comment savoir si mes produits sont déjà repris par Google dans une réponse IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il faut surveiller manuellement les SERP sur les requêtes prioritaires, suivre les impressions dans Google Search Central pour les nouvelles métriques liées aux fonctionnalités IA, et auditer régulièrement la qualité du flux Merchant Center et du balisage produit."
          }
        }
      ]
    }
  ];

  const htmlBody = `
<div class="bg-violet-50 p-6 md:p-8 rounded-3xl border border-violet-100 mb-10 shadow-sm relative overflow-hidden not-prose">
  <div class="absolute top-0 left-0 w-1 h-full bg-violet-600"></div>
  <h3 class="text-xl font-bold text-violet-900 mb-3 mt-0 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-violet-600"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    TL;DR
  </h3>
  <p class="text-violet-800 m-0 leading-relaxed text-sm md:text-base">Google a confirmé le lancement d'AI Overview en France entre l'été et le 23 septembre 2026 au plus tard. Pour les sites marchands, l'enjeu est majeur : aux États-Unis et au Royaume-Uni, le CTR organique sur les requêtes concernées par AI Overview a chuté de 61 à 79 % selon les études (Seer Interactive, Ahrefs, Pew Research). Les recherches shopping sont particulièrement exposées : leur couverture par AI Overview a été multipliée par 5,6 en quatre mois début 2025. Les marchands qui optimisent leur balisage produit, leurs avis et leur fraîcheur de stock/prix restent visibles ; les autres perdent du trafic qualifié. Cet article détaille le mécanisme, les chiffres, et les actions concrètes à engager avant le rollout français.</p>
</div>

<h2>Introduction : la France entre dans l'ère AI Overview</h2>
<p>C'est officiel. Google a adressé un courrier aux éditeurs de presse français confirmant le déploiement d'AI Overview (et d'AI Mode, l'interface conversationnelle basée sur Gemini) en France entre fin juin et le <strong>23 septembre 2026</strong>. La France figure parmi les derniers grands marchés à recevoir la fonctionnalité, déjà active dans plus de 120 pays depuis deux ans, le temps que Google négocie avec les éditeurs sur trois points : contrôle, transparence et rémunération.</p>
<p>Pour le e-commerce français, ce n'est pas un détail technique de plus. AI Overview s'affiche tout en haut de la page de résultats, avant les liens organiques classiques et parfois même avant les annonces Shopping. Sur une requête produit - "meilleur aspirateur robot moins de 300 euros", "chaussures de running trail femme" - l'utilisateur peut désormais obtenir un résumé généré par IA, avec comparatif de prix, caractéristiques et liens vers quelques marchands, sans jamais scroller plus bas.</p>
<p>Les retours d'expérience américains et britanniques, disponibles depuis le rollout SGE puis AI Overview dès 2024, donnent une idée assez précise de ce qui attend les sites marchands français. Le constat est sans détour : moins de clics, mais un trafic restant plus qualifié pour les marques citées.</p>

<h2>Comment AI Overview restructure les SERP produit</h2>
<p>AI Overview ne fonctionne pas comme un featured snippet classique. Sur les requêtes e-commerce, le résumé généré s'appuie sur trois briques principales :</p>

<h3>Le Shopping Graph, socle des recommandations produit</h3>
<p>Le <strong>Shopping Graph</strong> est la base de données de Google qui référence plus de 50 milliards d'offres produit, actualisée en continu à partir des flux Merchant Center, du crawl des sites marchands et des données structurées. C'est de là que l'IA puise les informations pour composer ses réponses shopping : prix, disponibilité, marque, avis, variantes.</p>
<p>Concrètement, un produit mal renseigné dans le flux Merchant Center (GTIN manquant, description trop courte, stock non actualisé) a beaucoup moins de chances d'être repris dans un AI Overview, même si la fiche produit est bien positionnée en SEO classique.</p>

<h3>Les avis et le contenu généré par les utilisateurs</h3>
<p>AI Overview cite systématiquement des signaux de réassurance : note moyenne, nombre d'avis, extraits de commentaires. Ces données proviennent du balisage <code>AggregateRating</code> et <code>Review</code> présent sur la page produit, mais aussi de sites tiers (comparateurs, forums, avis vérifiés Trustpilot ou Avis Vérifiés). Un produit sans avis structurés est quasiment invisible dans ce type de résumé.</p>

<h3>Les comparateurs et contenus tiers</h3>
<p>Sur les requêtes comparatives ("meilleur", "vs", "avis"), l'IA agrège aussi des sources éditoriales - comparateurs, tests indépendants, guides d'achat. Un site marchand qui ne produit que des fiches produit standardisées, sans contenu comparatif original, laisse le champ libre à des tiers pour capter la citation dans l'AI Overview, et donc une partie du trafic de recherche.</p>

<h2>Impact chiffré sur le trafic organique e-commerce</h2>
<p>Les données disponibles depuis le rollout américain et britannique sont convergentes, même si les méthodologies diffèrent. Voici les chiffres qui comptent pour un site marchand :</p>
<ul>
  <li><p><strong>CTR organique en présence d'AI Overview :</strong> chute de 1,76 % à 0,61 % en moyenne, soit -61 %, selon l'étude Seer Interactive menée sur 3 119 requêtes informationnelles et 25,1 millions d'impressions organiques (juin 2024 – septembre 2025).</p></li>
  <li><p><strong>CTR payant :</strong> baisse de 68 % sur la même période, avec un décrochage particulièrement marqué en juillet 2025 (de 11 % à 3 %).</p></li>
  <li><p><strong>Ahrefs :</strong> -34,5 % de CTR en position 1 lorsqu'un AI Overview est présent, sur un panel de 300 000 mots-clés.</p></li>
  <li><p><strong>Pew Research (juillet 2025) :</strong> seulement 8 % des utilisateurs cliquent sur un résultat classique quand un AI Overview s'affiche, contre 15 % en son absence. 26 % des sessions s'arrêtent net après lecture du résumé, contre 16 % sans AI Overview.</p></li>
  <li><p><strong>Requêtes shopping :</strong> la couverture des requêtes shopping par AI Overview a été multipliée par 5,6 en quatre mois début 2025, pour atteindre environ 14 % des requêtes de ce type, selon BrightEdge.</p></li>
  <li><p><strong>Nuance pour le e-commerce :</strong> le trafic qui parvient malgré tout jusqu'au site depuis un AI Overview affiche des taux de conversion supérieurs de l'ordre de 40 %, car l'utilisateur arrive avec une intention déjà "pré-qualifiée" par le résumé IA.</p></li>
  <li><p><strong>Marques citées vs non citées :</strong> Seer Interactive montre que les sites cités dans l'AI Overview conservent un CTR organique de 0,70 % contre 0,52 % pour les non-cités - un écart qui, cumulé sur des milliers de requêtes, pèse lourd sur le chiffre d'affaires.</p></li>
</ul>
<p>Le message est clair : le volume de clics baisse structurellement, mais la bataille se déplace vers la <strong>citation</strong> dans le résumé généré. Ne pas y figurer, c'est perdre une part croissante de la visibilité sur les requêtes produit.</p>

<h2>SERP classique vs AI Overview : comparatif sur une requête produit type</h2>
<p>Prenons l'exemple d'une requête transactionnelle typique : "aspirateur robot laveur avis prix".</p>

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Élément de la SERP</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SERP classique (avant AI Overview)</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SERP avec AI Overview</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Premier élément visible</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Annonces Shopping ou liens sponsorisés</td>
        <td class="px-6 py-4 text-sm text-gray-500">Bloc AI Overview généré par Gemini, souvent avant ou entrelacé avec les annonces</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Position organique n°1</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CTR moyen autour de 25-30 %</td>
        <td class="px-6 py-4 text-sm text-gray-500">CTR résiduel estimé entre 8 et 15 % (position "sous" le résumé)</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Sources citées</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aucune citation, juste des liens classés</td>
        <td class="px-6 py-4 text-sm text-gray-500">3 à 5 liens sélectionnés, souvent comparateurs, avis vérifiés, grandes enseignes</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Avis produit</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Étoiles affichées via rich snippet, sur la fiche uniquement</td>
        <td class="px-6 py-4 text-sm text-gray-500">Synthèse des avis intégrée directement dans le texte généré</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Comparaison de prix</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Nécessite de cliquer sur plusieurs résultats ou d'utiliser Google Shopping</td>
        <td class="px-6 py-4 text-sm text-gray-500">Fourchette de prix et comparatif synthétisés dans le résumé</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Zero-click</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Minoritaire sur les requêtes transactionnelles</td>
        <td class="px-6 py-4 text-sm text-gray-500">Majoritaire : jusqu'à 83 % de zero-click sur les requêtes déclenchant un AI Overview (BrightEdge)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>6 actions concrètes pour les sites marchands</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">01</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Fiabiliser le product et offer schema</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Le balisage <code>Product</code> et <code>Offer</code> (schema.org) doit être complet et strictement cohérent avec le flux Merchant Center : prix, devise, disponibilité, GTIN ou MPN, marque, variantes (couleur, taille, matière). Un écart entre le flux et la page produit dilue la confiance de Google dans l'entité produit, et réduit sa probabilité de citation. Google le rappelle dans son guide sur les fonctionnalités IA : la donnée structurée n'est pas obligatoire pour apparaître dans un AI Overview, mais elle reste le canal le plus fiable pour les rich results et les fonctionnalités shopping.</p>
  </div>

  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">02</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Miser sur les avis vérifiés et l'UGC</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Intégrer le balisage <code>AggregateRating</code> et <code>Review</code>, collecter des avis via des plateformes tierces reconnues (Trustpilot, Avis Vérifiés), et afficher des retours clients détaillés sur la fiche produit. Plus le volume et la qualité des avis sont élevés, plus la probabilité que l'IA les cite dans son résumé augmente.</p>
  </div>

  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">03</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Garantir la fraîcheur prix et stocks</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Un flux Merchant Center non synchronisé en temps réel (prix obsolète, produit indiqué disponible alors qu'il est en rupture) peut faire disparaître un produit du Shopping Graph, ou pire, générer une citation erronée qui nuit à la confiance utilisateur. La mise à jour automatisée du flux, plusieurs fois par jour, devient un prérequis technique.</p>
  </div>

  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">04</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Renforcer l'E-E-A-T</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Expérience, expertise, autorité, fiabilité : ces critères qualité de Google s'appliquent aussi aux pages marchandes. Cela passe par des descriptions rédigées par de vrais experts produit (pas du contenu générique dupliqué), des mentions légales claires, une politique de retour transparente, et des pages "À propos" ou "Notre expertise" qui démontrent un savoir-faire réel sur la catégorie vendue.</p>
  </div>

  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">05</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Produire du contenu comparatif</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Face à des comparateurs tiers qui captent les citations sur les requêtes "meilleur X" ou "X vs Y", les sites marchands ont intérêt à publier leurs propres guides d'achat, tableaux comparatifs et tests produits argumentés. Un contenu qui apporte un angle inédit - mesures propres, tests internes, retours clients agrégés - a davantage de chances d'être repris qu'une fiche produit standard.</p>
  </div>

  <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-violet-300 transition-colors">
    <div class="absolute top-0 left-0 w-full h-1 bg-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div class="text-5xl font-black text-slate-200 mb-4 tracking-tighter">06</div>
    <h3 class="text-xl font-bold text-slate-900 mb-4">Exploiter des données propriétaires</h3>
    <p class="text-slate-600 text-sm leading-relaxed">Statistiques de vente internes, enquêtes de satisfaction maison, données d'usage produit : ce type de contenu original, impossible à répliquer ailleurs, constitue un signal fort de valeur ajoutée. Google et les moteurs génératifs valorisent ce genre de source pour ses résumés, précisément parce qu'elle n'est pas un doublon de ce qui existe déjà ailleurs sur le web.</p>
  </div>
</div>

<div class="bg-gradient-to-br from-slate-900 to-violet-950 p-8 md:p-12 rounded-3xl text-white my-16 not-prose shadow-xl relative overflow-hidden">
  <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-violet-500/20 blur-3xl"></div>
  <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
  <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-violet-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    Étude de cas anonymisée
  </h2>
  <p class="text-slate-300 text-lg leading-relaxed relative z-10 mb-8">
    Un site marchand spécialisé dans l'électroménager, générant environ 50 000 visites organiques mensuelles avant le rollout AI Overview sur son marché anglophone de référence, a observé une baisse de 18 % du trafic organique sur ses pages catégorie entre janvier et avril 2025.
  </p>
  <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative z-10">
    <p class="text-white text-base leading-relaxed m-0">
      Après un audit du flux Merchant Center et l'ajout systématique du balisage <code class="bg-black/30 px-1 py-0.5 rounded text-violet-200">Review</code> et <code class="bg-black/30 px-1 py-0.5 rounded text-violet-200">AggregateRating</code> sur 100 % des fiches produit, le site a enregistré une reprise partielle de visibilité dans les citations AI Overview sur ses requêtes prioritaires, avec un taux de conversion du trafic résiduel supérieur de <strong>42 %</strong> à la moyenne historique. Ce cas illustre une tendance observée plus largement : la quantité de trafic baisse, mais sa qualité peut compenser une partie de la perte si le site travaille ses signaux de confiance.
    </p>
  </div>
</div>

<h2>FAQ</h2>
<h3>Quand AI Overview sera-t-il lancé en France ?</h3>
<p>Google a confirmé un déploiement entre l'été 2026 et le 23 septembre 2026 au plus tard, sans date journalière précise communiquée à ce jour.</p>

<h3>Est-ce que tous les sites e-commerce vont perdre du trafic ?</h3>
<p>Pas uniformément. Les études américaines et britanniques montrent une baisse moyenne de CTR organique de 61 % sur les requêtes concernées, mais les sites cités dans l'AI Overview conservent un CTR nettement supérieur aux non-cités, et un trafic souvent mieux converti.</p>

<h3>Faut-il ajouter un balisage spécial pour apparaître dans AI Overview ?</h3>
<p>Non. Google précise dans sa documentation officielle qu'il n'existe pas de balisage schema.org spécifique ni de format de fichier dédié à l'IA. Les bonnes pratiques SEO classiques (contenu utile, données structurées cohérentes, crawlabilité) restent la base.</p>

<h3>Les annonces Shopping vont-elles disparaître au profit d'AI Overview ?</h3>
<p>Non, les deux coexistent. Les annonces Shopping continuent généralement de s'afficher au-dessus ou à côté du contenu généré, mais la concurrence pour l'attention de l'utilisateur s'intensifie.</p>

<h3>Comment savoir si mes produits sont déjà repris par Google dans une réponse IA ?</h3>
<p>Il faut surveiller manuellement les SERP sur les requêtes prioritaires, suivre les impressions dans Google Search Central pour les nouvelles métriques liées aux fonctionnalités IA, et auditer régulièrement la qualité du flux Merchant Center et du balisage produit.</p>

<h2>Sources utiles</h2>
<ul>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/appearance/ai-features" class="text-violet-600 hover:text-violet-700 underline font-medium">Google Search Central – AI features (documentation officielle)</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" class="text-violet-600 hover:text-violet-700 underline font-medium">Google Search Central – Guide d'optimisation pour la recherche IA</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update" class="text-violet-600 hover:text-violet-700 underline font-medium">Seer Interactive – AI Overviews impact on Google CTR (septembre 2025)</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://searchengineland.com/google-ai-overviews-drive-drop-organic-paid-ctr-464212" class="text-violet-600 hover:text-violet-700 underline font-medium">Search Engine Land – Google AI Overviews drive drop in organic and paid CTR</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/" class="text-violet-600 hover:text-violet-700 underline font-medium">Ahrefs – AI Overviews reduce clicks (étude sur 300 000 mots-clés)</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.pewresearch.org/" class="text-violet-600 hover:text-violet-700 underline font-medium">Pew Research Center – études sur le comportement de recherche</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.ouest-france.fr/high-tech/google/info-ouest-france-recherches-sur-google-la-fonctionnalite-de-resumes-ai-overviews-sera-lancee-en-france-cet-ete-2026-4d41cfa0-73bd-11f1-a0e7-4fa27dc4c816" class="text-violet-600 hover:text-violet-700 underline font-medium">Ouest-France – Confirmation du lancement d'AI Overviews en France</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.appearonline.co.uk/blog/google-shopping-graph-explained" class="text-violet-600 hover:text-violet-700 underline font-medium">Appear Online – Google Shopping Graph expliqué</a></p></li>
</ul>
  `;

  if (!post) return null;

  return (
    <>
      <SEO 
        title={`${post.title} | Triaina`}
        description="Google a confirmé le lancement d'AI Overview en France entre l'été et le 23 septembre 2026. Découvrez l'impact sur le SEO e-commerce et les actions à mener."
        canonicalUrl={`https://www.triaina.fr${post.url}`}
        type="article"
        schema={seoSchema}
        image={post.image}
      />
      <div className="pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 animate-fade-in-up">
            <a 
              href={PAGE_TO_URL['blog']}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', PAGE_TO_URL['blog']);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center text-slate-600 hover:text-violet-600 transition-colors font-mono text-sm tracking-wide"
            >
               <ArrowLeft size={16} className="mr-2" />
              RETOUR AU BLOG
            </a>
            <div className="flex flex-wrap items-center gap-4 text-slate-500 font-mono text-xs tracking-wider">
              <span className="flex items-center"><Calendar size={14} className="mr-2" />{post.date}</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center"><Clock size={14} className="mr-2" />6 min de lecture</span>
              <span className="text-slate-300">|</span>
              <span className="text-violet-600 border border-violet-200 bg-violet-50 px-2 py-1 rounded-full">{post.tag}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8 animate-fade-in-up md:w-4/5" style={{animationDelay: '0.1s'}}>
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-12 animate-fade-in-up md:w-3/4" style={{animationDelay: '0.2s'}}>
            {post.excerpt}
          </p>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 relative animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-a:underline prose-a:font-medium
                prose-li:text-slate-600 prose-li:marker:text-violet-500
                prose-ul:space-y-2 prose-ol:space-y-2
                animate-fade-in-up"
                style={{animationDelay: '0.3s'}}
                dangerouslySetInnerHTML={{ __html: htmlBody }}
            />

            <aside className="lg:w-1/3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-violet-600/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 font-sans text-white relative z-10">Besoin d'optimiser pour l'IA ?</h3>
                  <p className="text-slate-300 mb-6 text-sm relative z-10 leading-relaxed">
                    Triaina accompagne les entreprises dans l'optimisation de leur visibilité sur Google et auprès des LLMs (Copilot, ChatGPT, Gemini, Perplexity).
                  </p>
                  <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', PAGE_TO_URL['contact']);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="inline-flex items-center justify-center w-full bg-white text-black px-6 py-3 rounded-xl text-sm font-bold tracking-wide hover:bg-violet-50 transition-colors relative z-10"
                  >
                    PRENDRE RENDEZ-VOUS
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
