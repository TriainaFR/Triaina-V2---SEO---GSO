import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const AgenceNetlinking2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'agence-netlinking-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Agence netlinking : comment choisir ses backlinks en 2026 ?",
      "description": "En 2026, un backlink sert à construire l'autorité pour les LLMs (ChatGPT, Gemini). Guide pour choisir une agence de netlinking intégrant la dimension GEO.",
      "image": "https://www.triaina.fr/images/agence-netlinking.jpg",
      "datePublished": "2026-06-29",
      "dateModified": "2026-06-29",
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
        "@id": "https://triaina.fr/blog/agence-netlinking"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre netlinking et link building ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les deux termes désignent la même pratique : l'acquisition de liens entrants (backlinks) depuis des sites tiers. \"Netlinking\" est le terme dominant en France, \"link building\" est l'équivalent anglophone utilisé internationalement. Sur le fond, aucune différence de méthode ou d'objectif."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps faut-il pour voir les résultats d'une campagne de netlinking ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En règle générale, comptez 3 à 6 mois avant d'observer des résultats significatifs sur les positions. Google prend environ 90 jours pour intégrer pleinement de nouveaux liens dans son algorithme. Les premiers signaux (hausse du Domain Rating, apparition de nouveaux domaines référents) sont visibles dès le premier mois - mais l'impact sur le trafic organique demande de la patience."
          }
        },
        {
          "@type": "Question",
          "name": "Le netlinking est-il risqué pour mon site ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le netlinking mal pratiqué est risqué : PBN, liens en masse sans contexte éditorial, ancres sur-optimisées. Bien pratiqué - liens éditoriaux, domaines thématiquement pertinents, profil d'ancres diversifié - il est non seulement sûr mais indispensable. Le risque zéro n'existe pas en SEO, mais une agence sérieuse applique des méthodes conformes aux guidelines Google et documente chaque lien obtenu."
          }
        },
        {
          "@type": "Question",
          "name": "Une agence de netlinking peut-elle aussi améliorer ma visibilité dans les IA comme ChatGPT ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, indirectement et directement. Indirectement : en améliorant votre classement Google, vous entrez dans le corpus que les LLMs consultent via leurs recherches web en temps réel. Directement : en ciblant des domaines référents reconnus par les LLMs (médias, sites d'autorité thématique), vous renforcez votre autorité d'entité. Une agence hybride SEO/GEO intègre cette dimension dès la sélection des sites partenaires et monitore votre visibilité dans les réponses génératives."
          }
        },
        {
          "@type": "Question",
          "name": "Comment savoir si les backlinks obtenus sont de qualité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quatre critères non négociables : trafic organique réel du site référent (vérifiable via Ahrefs ou Semrush), pertinence thématique entre le site et votre secteur, intégration éditoriale du lien dans le corps d'un article (pas en footer ou sidebar), et indexation confirmée par Google. Un lien qui coche ces quatre cases a de la valeur. Un lien qui en rate un seul mérite d'être questionné."
          }
        }
      ]
    }
  ];

  const htmlBody = `
<p><strong>TL;DR - Ce qu'il faut retenir</strong></p>
<ul>
  <li><p>Les backlinks restent un signal de classement de premier rang sur Google en 2026, mais leur rôle s'étend désormais aux moteurs génératifs (ChatGPT, Perplexity, Gemini, Copilot).</p></li>
  <li><p>Choisir une agence de netlinking se joue sur 5 critères clés : qualité éditoriale, pertinence thématique, transparence, reporting, et vision GEO/IA.</p></li>
  <li><p>Les budgets vont de 500 €/mois pour une PME locale à 10 000 €/mois pour les secteurs très compétitifs - le prix par lien oscille entre 50 € et 500 €+ selon la qualité.</p></li>
</ul>

<h2>Qu'est-ce qu'une agence de netlinking ?</h2>
<p>Une <strong>agence de netlinking</strong> est spécialisée dans l'acquisition de backlinks - des liens entrants provenant de sites tiers qui pointent vers votre domaine. Son rôle central : renforcer votre <strong>autorité de domaine</strong> (Domain Rating chez Ahrefs, Domain Authority chez Moz) pour améliorer votre positionnement dans les résultats de recherche organiques.</p>
<p>Concrètement, elle pilote tout le volet <strong>off-page SEO</strong> : identification des opportunités de liens, prospection éditoriale, négociation avec les éditeurs, production de contenus d'ancrage, et suivi de la transmission du PageRank. Ce n'est pas le même métier qu'une agence SEO full-service, qui couvre aussi l'on-page, le technique et le contenu.</p>
<p>La différence est importante. Une agence SEO généraliste fait du netlinking parmi dix autres choses. Une agence spécialisée en netlinking a des réseaux d'éditeurs établis, des processus de qualification des domaines rodés, et une vision fine du profil d'ancres. Pour des campagnes de volume ou des secteurs compétitifs, la spécialisation fait une vraie différence.</p>
<p>Les backlinks restent-ils un signal de premier rang en 2026 ? Oui, sans ambiguïté. Google a confirmé à plusieurs reprises que les liens entrants font partie des trois signaux les plus importants de son algorithme. Les études de corrélation d'Ahrefs et Semrush publiées en 2025 montrent que le nombre de <strong>domaines référents uniques</strong> reste l'un des meilleurs prédicteurs de position - devant la vitesse de chargement ou même la longueur du contenu.</p>

<h2>Netlinking et GEO : le lien que peu d'agences comprennent</h2>
<p>C'est ici que la plupart des acteurs du marché s'arrêtent à la surface. On vous parle de "LLM Ranking" comme d'un outil propriétaire, mais rarement de la mécanique sous-jacente. Expliquons-la clairement.</p>
<p><strong>Comment les LLMs sélectionnent leurs sources.</strong> ChatGPT (avec Bing Search), Perplexity, Gemini et Copilot ne génèrent pas leurs réponses depuis un corpus figé. Ils déclenchent des recherches web en temps réel, récupèrent les pages les mieux classées sur la requête, et les paraphrasent. Une étude de 2025 citée par Ahrefs montre que <strong>87 % des citations de ChatGPT correspondent au top 10 de Bing</strong>. Perplexity indexe plus de 200 milliards d'URLs en temps réel et cite Reddit dans 46,7 % des cas - mais aussi les médias spécialisés à forte autorité thématique.</p>
<p><strong>La chaîne causale complète.</strong> Backlinks de qualité → hausse du Domain Rating → meilleur classement Google et Bing → inclusion dans le corpus de recherche des LLMs → citation dans les réponses génératives. Ce n'est pas une corrélation floue, c'est un enchaînement mécanique. Si votre site n'est pas dans le top 10 sur une requête, aucun LLM ne vous citera sur cette requête.</p>
<p><strong>Les "brand mentions" non-linkées comptent aussi.</strong> Pour le GEO, les citations de marque sans lien hypertexte jouent un rôle complémentaire. Les LLMs reconnaissent l'autorité d'entité - le fait qu'un nom de marque apparaisse régulièrement dans des contextes éditoriaux crédibles, sur des plateformes comme LinkedIn, des médias sectoriels ou des forums spécialisés. Une étude de The Digital Bloom (2025) montre que les sites présents sur 4 plateformes tierces ou plus sont <strong>2,8 fois plus susceptibles</strong> d'apparaître dans les réponses de ChatGPT.</p>
<p><strong>Ce que ça change pour votre stratégie netlinking en 2026.</strong> La quantité brute de liens perd encore du terrain. Ce qui prime : la qualité éditoriale du site référent, la pertinence thématique, et le contexte dans lequel le lien est inséré. Un article de fond sur un média sectoriel avec 15 000 visiteurs/mois vaut infiniment plus - pour Google ET pour les IA - qu'une dizaine de liens dans des footers de blogs anonymes.</p>
<p><strong>L'approche hybride SEO/GEO.</strong> Une campagne de netlinking bien conçue en 2026 doit simultanément viser le classement Google <em>et</em> la citabilité par les moteurs génératifs. Cela implique de cibler des domaines que les LLMs considèrent déjà comme des sources fiables : médias reconnus, sites à fort trafic organique, plateformes avec une présence éditoriale établie. C'est précisément ce que nous appelons le netlinking hybride SEO/GEO.</p>

<h2>Les 5 critères pour choisir une agence de netlinking</h2>
<h3>1. La qualité éditoriale des liens</h3>
<p>Le premier critère, et de loin le plus discriminant. Un bon lien est intégré dans un article rédigé pour des lecteurs humains, sur un site qui génère du trafic SEO réel. Demandez à l'agence des exemples de publications récentes : si les articles ressemblent à du contenu généré en masse sans valeur ajoutée, passez votre chemin.</p>
<p>Les indicateurs à vérifier : trafic organique du site référent (via Ahrefs ou Semrush), cohérence thématique de l'article avec votre secteur, et position du lien dans le corps du texte (pas en footer, pas dans une liste de liens commerciaux).</p>

<h3>2. La pertinence thématique des domaines référents</h3>
<p>Un lien depuis un site de cuisine vers votre SaaS B2B ne transmet quasiment aucune valeur sémantique. Google et les LLMs évaluent la cohérence thématique entre le site référent et le site cible. Une agence sérieuse construit un profil de <strong>domaines référents</strong> thématiquement alignés avec votre activité - pas un portefeuille généraliste qui ressemble à un annuaire.</p>

<h3>3. La transparence sur les méthodes d'acquisition</h3>
<p>Achat de liens, guest blogging, partenariats éditeurs, digital PR - toutes ces méthodes coexistent légitimement. Ce qui doit être clair : l'agence doit vous expliquer précisément comment elle obtient les liens, sur quels sites, et selon quels critères de sélection. Toute opacité sur ce point est un signal d'alarme. Les réseaux de liens privés (PBN) et les liens en masse sans contexte éditorial exposent votre site à des pénalités algorithmiques.</p>

<h3>4. Le suivi et le reporting</h3>
<p>Une campagne de netlinking sans reporting rigoureux, c'est de l'argent jeté. Exigez un tableau de bord mensuel qui inclut : les liens obtenus avec URL et métriques du domaine référent, l'évolution du Domain Rating, les positions GSC sur vos mots-clés cibles, et le trafic organique. Vérifiez aussi que les liens sont bien indexés - un lien non indexé par Google ne transmet aucune valeur.</p>

<h3>5. La vision GEO et IA de l'agence</h3>
<p>C'est le critère qui sépare les agences de 2026 de celles qui raisonnent encore en 2020. Posez la question directement : "Comment vos campagnes de netlinking contribuent-elles à notre visibilité dans ChatGPT ou Perplexity ?" Si la réponse est vague ou inexistante, l'agence n'a pas encore intégré la dimension GEO. Une agence hybride SEO/GEO saura vous expliquer comment elle cible des domaines reconnus par les LLMs et comment elle intègre les brand mentions non-linkées dans la stratégie globale.</p>

<h2>Les méthodes d'acquisition de backlinks : ce que fait une bonne agence</h2>
<p>Les méthodes légitimes d'acquisition se répartissent en plusieurs catégories, chacune avec ses avantages et ses contraintes.</p>
<ul>
  <li><p><strong>Guest blogging / link building éditorial :</strong> rédaction d'articles invités publiés sur des médias tiers. C'est la méthode la plus naturelle et la plus durable. Elle exige du temps et un vrai travail éditorial, mais les liens obtenus sont contextuels et résistants aux mises à jour algorithmiques.</p></li>
  <li><p><strong>Partenariats éditeurs :</strong> accords formels avec des éditeurs de sites thématiques pour une intégration régulière de liens dans leurs contenus. Les meilleures agences disposent de réseaux d'éditeurs qualifiés dans des dizaines de secteurs.</p></li>
  <li><p><strong>Digital PR et mentions de marque :</strong> obtenir des citations dans des médias en ligne via des communiqués de presse, des études originales ou des prises de parole d'experts. C'est la méthode la plus efficace pour le GEO : les médias reconnus sont précisément ceux que les LLMs citent en priorité.</p></li>
  <li><p><strong>Achat de liens :</strong> pratique courante, mais qui exige des garde-fous stricts. Le lien doit être intégré dans un contenu éditorial réel, sur un site à trafic organique vérifiable. L'achat de liens en masse sur des plateformes low-cost expose à des pénalités Google - notamment les mises à jour Spam Update qui ont sanctionné des milliers de sites entre 2023 et 2025.</p></li>
  <li><p><strong>Broken link building :</strong> identification de liens cassés sur des sites tiers et proposition de votre contenu comme remplacement. Méthode chronophage mais à fort taux de conversion, car elle rend service à l'éditeur.</p></li>
  <li><p><strong>Brand mentions non-linkées :</strong> signal GEO complémentaire. Une agence avancée monitore les mentions de votre marque sans lien hypertexte et peut les convertir en backlinks, ou simplement les valoriser comme signaux d'autorité d'entité pour les LLMs.</p></li>
</ul>

<h2>Combien coûte une campagne de netlinking en 2026 ?</h2>
<p>Les tarifs varient considérablement selon le volume, la qualité des domaines ciblés et le niveau de service. Voici une grille réaliste basée sur les pratiques du marché français en 2026.</p>

<div class="overflow-x-auto my-8">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget mensuel</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Liens/mois</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profil type</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Entry</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 – 1 500 €</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 – 5 liens</td>
        <td class="px-6 py-4 text-sm text-gray-500">PME locale, site vitrine, secteur peu compétitif</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mid</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 500 – 4 000 €</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 – 15 liens</td>
        <td class="px-6 py-4 text-sm text-gray-500">E-commerce, SaaS, secteur intermédiaire</td>
      </tr>
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Premium</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 000 – 10 000 €</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20 – 40 liens</td>
        <td class="px-6 py-4 text-sm text-gray-500">Grands comptes, secteurs très compétitifs (finance, santé, immobilier)</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Le prix par lien varie de <strong>50 € à 500 €+</strong> selon le Domain Rating du site référent, son trafic organique réel et la qualité éditoriale de l'article d'ancrage. Un lien dans un média national comme Le Figaro ou L'Express peut dépasser 1 000 € - mais sa valeur SEO et GEO est sans commune mesure avec un lien dans un blog anonyme à 15 €.</p>
<p>Attention aux offres "100 liens pour 100 €" : elles reposent invariablement sur des PBN ou des réseaux de sites sans trafic réel. Le risque de pénalité dépasse largement le bénéfice potentiel.</p>

<h2>Les erreurs à éviter quand on choisit une agence de netlinking</h2>
<ul>
  <li><p><strong>PBN et réseaux de liens privés :</strong> Google les détecte de mieux en mieux. Les Spam Updates successives ont déclassé des milliers de sites qui s'appuyaient sur ces réseaux artificiels.</p></li>
  <li><p><strong>Liens en masse sans contexte éditorial :</strong> volume ≠ valeur. Cent liens dans des footers ou des commentaires de blogs valent moins qu'un seul lien dans un article de fond sur un média sectoriel.</p></li>
  <li><p><strong>Ignorer la pertinence thématique :</strong> un profil de backlinks incohérent thématiquement dilue l'autorité sémantique de votre domaine et réduit votre citabilité par les LLMs.</p></li>
  <li><p><strong>Sur-optimisation des ancres :</strong> un profil d'ancres trop commercial (80 % d'ancres exactes sur votre mot-clé principal) est un signal de manipulation flagrant pour Google. Une agence sérieuse diversifie les ancres : marque, URL nue, ancres génériques, ancres partielles.</p></li>
  <li><p><strong>Ne pas vérifier l'indexation des liens obtenus :</strong> un lien non indexé par Google ne transmet aucun PageRank. Exigez un suivi de l'indexation dans le reporting mensuel.</p></li>
</ul>

<h2>Comment mesurer l'efficacité d'une campagne de netlinking ?</h2>
<p>Les résultats d'une campagne de netlinking ne sont jamais immédiats. Google intègre les nouveaux liens progressivement - la fenêtre de transition est généralement de <strong>90 jours</strong> avant d'observer un impact significatif sur les positions. Planifiez vos analyses en conséquence.</p>
<p>Les KPIs à suivre :</p>
<ul>
  <li><p><strong>Domain Rating / Domain Authority :</strong> progression mensuelle via Ahrefs ou Moz. Indicateur de l'autorité globale acquise.</p></li>
  <li><p><strong>Nombre de domaines référents uniques :</strong> à distinguer du nombre brut de backlinks. 50 domaines différents valent plus que 500 liens depuis le même site.</p></li>
  <li><p><strong>Positions GSC sur les mots-clés cibles :</strong> la Google Search Console reste la source de vérité pour mesurer l'impact réel sur le classement.</p></li>
  <li><p><strong>Trafic organique :</strong> l'objectif final. Une hausse de Domain Rating sans hausse de trafic indique un problème on-page ou de ciblage de mots-clés.</p></li>
  <li><p><strong>Citations IA (GEO monitoring) :</strong> suivez votre présence dans les réponses de ChatGPT, Perplexity et Gemini sur vos requêtes cibles. Des outils comme Brand Radar ou AuthorityTech permettent de monitorer cette visibilité génératives.</p></li>
</ul>
<p>Pour approfondir la mécanique des liens entrants et comprendre comment construire un profil de backlinks solide, consultez notre <a target="_blank" rel="noopener noreferrer" href="/blog/backlinks-seo-guide" class="text-violet-600 hover:text-violet-700 underline font-medium">guide complet sur les backlinks SEO</a>.</p>

<h2>FAQ</h2>
<h3>Quelle est la différence entre netlinking et link building ?</h3>
<p>Les deux termes désignent la même pratique : l'acquisition de liens entrants (backlinks) depuis des sites tiers. "Netlinking" est le terme dominant en France, "link building" est l'équivalent anglophone utilisé internationalement. Sur le fond, aucune différence de méthode ou d'objectif.</p>

<h3>Combien de temps faut-il pour voir les résultats d'une campagne de netlinking ?</h3>
<p>En règle générale, comptez <strong>3 à 6 mois</strong> avant d'observer des résultats significatifs sur les positions. Google prend environ 90 jours pour intégrer pleinement de nouveaux liens dans son algorithme. Les premiers signaux (hausse du Domain Rating, apparition de nouveaux domaines référents) sont visibles dès le premier mois - mais l'impact sur le trafic organique demande de la patience.</p>

<h3>Le netlinking est-il risqué pour mon site ?</h3>
<p>Le netlinking mal pratiqué est risqué : PBN, liens en masse sans contexte éditorial, ancres sur-optimisées. Bien pratiqué - liens éditoriaux, domaines thématiquement pertinents, profil d'ancres diversifié - il est non seulement sûr mais indispensable. Le risque zéro n'existe pas en SEO, mais une agence sérieuse applique des méthodes conformes aux guidelines Google et documente chaque lien obtenu.</p>

<h3>Une agence de netlinking peut-elle aussi améliorer ma visibilité dans les IA comme ChatGPT ?</h3>
<p>Oui, indirectement et directement. Indirectement : en améliorant votre classement Google, vous entrez dans le corpus que les LLMs consultent via leurs recherches web en temps réel. Directement : en ciblant des domaines référents reconnus par les LLMs (médias, sites d'autorité thématique), vous renforcez votre autorité d'entité. Une agence hybride SEO/GEO intègre cette dimension dès la sélection des sites partenaires et monitore votre visibilité dans les réponses génératives.</p>

<h3>Comment savoir si les backlinks obtenus sont de qualité ?</h3>
<p>Quatre critères non négociables : <strong>trafic organique réel</strong> du site référent (vérifiable via Ahrefs ou Semrush), <strong>pertinence thématique</strong> entre le site et votre secteur, <strong>intégration éditoriale</strong> du lien dans le corps d'un article (pas en footer ou sidebar), et <strong>indexation confirmée</strong> par Google. Un lien qui coche ces quatre cases a de la valeur. Un lien qui en rate un seul mérite d'être questionné.</p>

<h2>Sources utiles</h2>
<ul>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://ahrefs.com/blog/llm-citations/" class="text-violet-600 hover:text-violet-700 underline font-medium">Ahrefs - LLM Citations : comment les IA sélectionnent leurs sources</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/" class="text-violet-600 hover:text-violet-700 underline font-medium">The Digital Bloom - 2025 AI Citation &amp; LLM Visibility Report</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.codeur.com/pages/combien-coute-netlinking" class="text-violet-600 hover:text-violet-700 underline font-medium">Codeur.com - Combien coûte le netlinking en France ?</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://searchatlas.com/blog/domain-industry-analysis-in-llm-responses/" class="text-violet-600 hover:text-violet-700 underline font-medium">SearchAtlas - Domain Authority et citations LLM : analyse sectorielle</a></p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://contently.com/2026/04/29/top-sources-llms-cite/" class="text-violet-600 hover:text-violet-700 underline font-medium">Contently - Top sources citées par les LLMs en 2026</a></p></li>
</ul>
  `;

  if (!post) return null;

  return (
    <>
      <SEO 
        title={`${post.title} | Triaina`}
        description="En 2026, un backlink sert à construire l'autorité pour les LLMs (ChatGPT, Gemini). Guide pour choisir une agence de netlinking intégrant la dimension GEO."
        url={window.location.href}
        type="article"
        schema={seoSchema}
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
                <div className="bg-slate-900 text-white rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-4 font-sans text-white">Besoin d'optimiser pour l'IA ?</h3>
                  <p className="text-slate-300 mb-6 text-sm">
                    Triaina accompagne les entreprises dans l'optimisation de leur visibilité sur Google et auprès des LLMs (Copilot, ChatGPT, Gemini, Perplexity).
                  </p>
                  <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', PAGE_TO_URL['contact']);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="inline-block w-full text-center bg-violet-600 hover:bg-violet-500 text-white font-mono text-sm py-3 px-4 transition-colors rounded-xl"
                  >
                    NOUS CONTACTER
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
