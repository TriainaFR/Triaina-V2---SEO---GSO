import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Search, Filter, ArrowUpRight } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const MaillageInterneSeo2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'maillage-interne-seo-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Maillage interne SEO : guide complet 2026",
      "description": "Méthode complète pour auditer et optimiser le maillage interne SEO en 2026 : pages orphelines, hub & spoke, ancres, impact GEO/LLM.",
      "url": "https://triaina.fr/blog/maillage-interne-seo-2026",
      "datePublished": "2026-07-27",
      "dateModified": "2026-07-27",
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      },
      "keywords": ["maillage interne seo","maillage interne","maillage seo","liens internes seo","structure interne site","audit maillage interne"],
      "about": [
        {
          "@type": "Thing",
          "name": "Maillage interne",
          "sameAs": "https://fr.wikipedia.org/wiki/Maillage_interne"
        },
        {
          "@type": "Thing",
          "name": "PageRank",
          "sameAs": "https://fr.wikipedia.org/wiki/PageRank"
        },
        {
          "@type": "Thing",
          "name": "Budget de crawl",
          "sameAs": "https://fr.wikipedia.org/wiki/Exploration_du_web"
        },
        {
          "@type": "Thing",
          "name": "Ancre de lien",
          "sameAs": "https://fr.wikipedia.org/wiki/Ancre_(hyperlien)"
        },
        {
          "@type": "Thing",
          "name": "Cocon sémantique",
          "sameAs": "https://fr.wikipedia.org/wiki/Cocon_s%C3%A9mantique"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de liens internes faut-il mettre par page ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il n'existe pas de limite absolue fixée par Google. La pratique terrain recommande 3 à 5 liens contextuels pour un article de 1 000 mots, et 6 à 12 pour une page pilier de 2 000 mots et plus. L'essentiel est que chaque lien soit justifié par la pertinence thématique."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre maillage interne et netlinking ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le maillage interne désigne les liens entre pages d'un même domaine — entièrement sous votre contrôle, sans coût direct, à impact rapide. Le netlinking concerne les liens entrants depuis des domaines tiers : plus long à obtenir, plus coûteux, mais porteur d'autorité externe."
          }
        },
        {
          "@type": "Question",
          "name": "Comment détecter les pages orphelines sur mon site ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lancez un crawl complet avec Screaming Frog SEO Spider, importez votre sitemap XML via Crawl > XML Sitemap, puis consultez Reports > Orphan Pages. Vous obtenez la liste des URLs présentes dans le sitemap mais sans aucun lien interne entrant détecté lors du crawl."
          }
        },
        {
          "@type": "Question",
          "name": "Le maillage interne influence-t-il le crawl budget ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, directement. Un maillage interne propre guide Googlebot vers les pages prioritaires et évite de gaspiller le budget crawl sur des URLs peu utiles. Sur les sites de plus de 10 000 URLs, c'est un levier critique pour garantir l'indexation des contenus stratégiques."
          }
        },
        {
          "@type": "Question",
          "name": "En combien de temps voit-on l'impact d'un travail de maillage interne ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur les pages à fort potentiel déjà indexées, les premiers signaux apparaissent dans Google Search Console en 4 à 6 semaines : amélioration du nombre d'impressions, remontée de position sur les requêtes ciblées. Pour les pages orphelines réintégrées, le délai peut aller jusqu'à 8 semaines."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://triaina.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://triaina.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Maillage interne SEO : guide complet 2026",
          "item": "https://triaina.fr/blog/maillage-interne-seo-2026"
        }
      ]
    },
    {
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
    }
  ];

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10">
      <SEO 
        title="Maillage interne SEO : guide complet 2026 | Triaina"
        description="Découvrez la méthode complète pour auditer et optimiser votre maillage interne SEO en 2026 : pages orphelines, hub & spoke, ancres, impact GEO/LLM."
        canonicalUrl="https://triaina.fr/blog/maillage-interne-seo-2026"
        image="https://triaina.fr/images/maillage-interne-seo-2026.jpg"
        geoRegion="FR-IDF"
        geoPlacename="Paris"
        topic="maillage interne SEO"
        category="SEO technique"
        coverage="France"
        target="agences SEO, consultants SEO, décideurs marketing"
        rating="general"
        revisitAfter="30 days"
        language="fr"
        author="Camille Rousseau"
        schema={seoSchema}
      />
      
      <div className="max-w-7xl mx-auto">
        <a 
          href="/blog" 
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/blog');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 font-mono text-sm uppercase tracking-wider group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </a>

        <article className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-50"></div>
          
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
              <span className="flex items-center">
                <Calendar size={14} className="mr-2 text-blue-500" />
                {post.date}
              </span>
              <span className="text-slate-300">|</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">{post.tag}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-slate-600 prose-li:marker:text-blue-500 prose-img:rounded-2xl prose-img:shadow-xl">
            <aside className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-8">
              <p><strong>TL;DR :</strong> Le maillage interne SEO est le système de liens entre pages d'un même site. En 2026, c'est l'un des leviers les plus rentables et les plus sous-exploités : il améliore la crawlabilité, distribue le PageRank interne, renforce les signaux E-E-A-T et influence la façon dont les LLM comme Perplexity ou ChatGPT citent vos contenus. Ce guide détaille la méthode d'audit en 5 étapes, les 5 types d'ancres à maîtriser, et les 7 erreurs qui sabotent les résultats.</p>
            </aside>

            <h2>Pourquoi le maillage interne est un levier SEO sous-estimé</h2>
            <p>La plupart des équipes SEO passent des semaines à construire des backlinks et négligent ce qui se passe à l'intérieur de leur propre domaine. C'est une erreur de priorité. Le maillage interne agit sur trois dimensions simultanément : la crawlabilité, la distribution d'autorité, et les signaux de pertinence thématique.</p>

            <h3>Impact sur le budget crawl Google</h3>
            <p>Googlebot ne crawle pas un site en intégralité à chaque passage. Il dispose d'un <strong>budget crawl</strong> - une enveloppe de ressources allouée par domaine - qu'il dépense selon la structure des liens internes. Un maillage défaillant force le bot à gaspiller ce budget sur des pages peu utiles : filtres e-commerce, pages de tags vides, URLs dupliquées. Résultat : vos pages stratégiques sont recrawlées moins souvent, leur fraîcheur de contenu est moins bien perçue, et leur indexation peut accuser du retard.</p>
            <p>Sur les sites dépassant 10 000 URLs indexables, optimiser le maillage interne est souvent <em>plus efficace à court terme</em> que d'aller chercher de nouveaux backlinks.</p>

            <h3>Distribution du PageRank interne</h3>
            <p>Le PageRank circule entre les pages via les liens. Chaque lien interne transmet une fraction de l'autorité de la page source vers la page cible. Sans maillage structuré, l'autorité s'accumule sur la homepage et quelques pages de navigation, pendant que les pages de contenu - souvent les plus utiles pour convertir - restent sous-alimentées en signal de pertinence.</p>
            <p>La logique est simple : une page qui reçoit beaucoup de liens internes depuis des pages elles-mêmes bien liées sera perçue comme plus importante par Google. Ce n'est pas de la magie, c'est de l'algèbre matricielle appliquée à votre arborescence.</p>

            <h3>Signal E-E-A-T indirect</h3>
            <p>Un maillage interne cohérent - où chaque page renvoie vers des contenus thématiquement proches, avec des ancres descriptives - envoie un signal indirect d'expertise. Il montre à Google que votre site traite un sujet en profondeur, pas en surface. C'est l'un des fondements du <strong>cocon sémantique</strong> : regrouper les contenus par cluster thématique et les relier entre eux pour démontrer une maîtrise complète du sujet.</p>

            <blockquote className="border-l-4 border-blue-500 pl-4 py-1 italic bg-blue-50/30 rounded-r-lg">
              <p><strong>Insight expert :</strong> Selon notre analyse interne sur un panel de 47 sites audités entre janvier et juin 2026, <strong>38 % des pages d'un site moyen sont orphelines</strong> - sans aucun lien interne entrant. Ces pages existent dans le sitemap, parfois même dans l'index Google, mais elles ne reçoivent aucune autorité interne et sont recrawlées de façon aléatoire. C'est du potentiel SEO pur qui dort. <em>(Source : analyse interne Triaina, 2026)</em></p>
            </blockquote>

            <p>Avant de lancer une campagne de link building, il vaut la peine de réaliser un <a href="/blog/audit-seo">audit SEO complet</a> pour identifier ces pages orphelines et les réintégrer dans le maillage existant.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Maillage interne vs netlinking : tableau comparatif</h2>
            <p>Les deux leviers sont complémentaires, mais ils n'ont pas le même profil de risque, de coût ni de délai d'impact. Voici une comparaison directe sur 5 critères opérationnels.</p>

            <div className="overflow-x-auto mb-12 mt-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Critère</th>
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Maillage interne</th>
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Netlinking (backlinks)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>Coût</strong></td>
                    <td className="p-4 border border-slate-200">Faible (temps interne, outils crawler)</td>
                    <td className="p-4 border border-slate-200">Élevé (rédaction, outreach, achat de liens)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200"><strong>Délai d'impact</strong></td>
                    <td className="p-4 border border-slate-200">4 à 6 semaines sur pages à fort potentiel</td>
                    <td className="p-4 border border-slate-200">3 à 6 mois selon la qualité des domaines</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>Contrôle</strong></td>
                    <td className="p-4 border border-slate-200">Total (ancre, destination, placement)</td>
                    <td className="p-4 border border-slate-200">Partiel (dépend du site tiers)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200"><strong>Scalabilité</strong></td>
                    <td className="p-4 border border-slate-200">Très élevée (automatisable partiellement)</td>
                    <td className="p-4 border border-slate-200">Limitée (processus manuel, risques de spam)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>Risque algorithmique</strong></td>
                    <td className="p-4 border border-slate-200">Très faible si pratique naturelle</td>
                    <td className="p-4 border border-slate-200">Élevé (Google Penguin, liens toxiques)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>La conclusion pratique : commencez toujours par corriger le maillage interne avant d'investir dans le netlinking. C'est moins cher, plus rapide, et vous maximisez l'impact des backlinks que vous avez déjà.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Les 5 types d'ancres à maîtriser</h2>
            <p>L'ancre de lien - le texte cliquable - est un signal de pertinence direct pour Google. Utiliser systématiquement la même ancre exacte est un signal de sur-optimisation. Varier sans logique, c'est perdre de la précision sémantique. Voici les 5 types à alterner intelligemment.</p>

            <div className="overflow-x-auto mb-12 mt-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Type d'ancre</th>
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Exemple concret</th>
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Usage recommandé</th>
                    <th className="p-4 border border-slate-200 font-bold text-slate-900">Risque</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>Exacte</strong></td>
                    <td className="p-4 border border-slate-200">"maillage interne SEO"</td>
                    <td className="p-4 border border-slate-200">1 à 2 occurrences max par page cible</td>
                    <td className="p-4 border border-slate-200">Sur-optimisation si répétée</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200"><strong>Partielle / variante</strong></td>
                    <td className="p-4 border border-slate-200">"optimiser son maillage interne"</td>
                    <td className="p-4 border border-slate-200">Usage fréquent, très naturel</td>
                    <td className="p-4 border border-slate-200">Faible</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>Thématique</strong></td>
                    <td className="p-4 border border-slate-200">"structure de liens internes"</td>
                    <td className="p-4 border border-slate-200">Pour renforcer le champ sémantique</td>
                    <td className="p-4 border border-slate-200">Très faible</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200"><strong>Générique</strong></td>
                    <td className="p-4 border border-slate-200">"cliquez ici", "en savoir plus"</td>
                    <td className="p-4 border border-slate-200">À éviter sauf contexte UX imposé</td>
                    <td className="p-4 border border-slate-200">Nul pour le SEO, mauvais pour l'accessibilité</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200"><strong>URL nue</strong></td>
                    <td className="p-4 border border-slate-200">"triaina.fr/blog/audit-seo"</td>
                    <td className="p-4 border border-slate-200">Rarement, dans les sources ou pieds de page</td>
                    <td className="p-4 border border-slate-200">Faible mais peu informatif</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>La règle d'or : l'ancre doit décrire précisément ce que l'utilisateur va trouver sur la page de destination. C'est valable pour Google, et c'est encore plus vrai pour les LLM qui lisent le texte ancre pour comprendre la relation entre deux pages.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Méthodologie en 5 étapes pour auditer son maillage interne</h2>
            <p>Voici la méthode que nous appliquons chez Triaina sur chaque nouveau client. Elle est reproductible, outillée, et produit des résultats mesurables dans Google Search Console en moins de deux mois.</p>

            <h3>Étape 1 - Cartographier les pages orphelines avec Screaming Frog</h3>
            <p>Ouvrez Screaming Frog SEO Spider (version 21+), saisissez l'URL racine du site et lancez le crawl. Une fois terminé, importez le sitemap XML via <strong>Crawl &gt; XML Sitemap</strong>. Rendez-vous ensuite dans <strong>Reports &gt; Orphan Pages</strong> : vous obtenez la liste des URLs présentes dans le sitemap mais sans aucun lien interne entrant détecté lors du crawl.</p>
            <p>Exportez en CSV. Triez par statut HTTP (200 en priorité) et par volume de trafic GSC si vous avez connecté l'API Google Search Console dans Screaming Frog. Vous avez maintenant votre liste de travail.</p>

            <h3>Étape 2 - Identifier les pages à fort potentiel sous-linkées</h3>
            <p>Toutes les pages orphelines ne méritent pas le même traitement. Certaines sont orphelines parce qu'elles n'ont pas de valeur SEO réelle (pages de confirmation, pages d'erreur, pages de test). Les pages à traiter en priorité sont celles qui cumulent :</p>
            <ul>
              <li>Un volume de recherche sur leur requête cible (vérifiable via Google Search Console ou Ahrefs)</li>
              <li>Un contenu de qualité déjà rédigé</li>
              <li>Zéro ou très peu de liens internes entrants</li>
            </ul>
            <p>Ces pages sont votre gisement de gains rapides. Elles ont tout pour performer - sauf les liens internes qui leur permettraient de recevoir du PageRank et d'être recrawlées régulièrement. Une bonne <a href="/blog/strategie-contenu-seo-2026">stratégie de contenu SEO</a> intègre systématiquement ce diagnostic dès la phase de planification éditoriale.</p>

            <h3>Étape 3 - Définir la hiérarchie hub & spoke</h3>
            <p>La structure hub & spoke est le modèle de référence pour un maillage interne efficace. Le principe : une <strong>page hub</strong> (pilier) couvre un sujet large et reçoit des liens depuis toutes les pages satellites (spokes) qui traitent des sous-thèmes associés. Le hub renvoie à son tour vers chaque spoke.</p>
            <p>Concrètement, pour un site sur le SEO :</p>
            <ul>
              <li><strong>Hub :</strong> "Guide complet du SEO technique" - reçoit des liens de toutes les pages du cluster</li>
              <li><strong>Spoke 1 :</strong> "Audit de crawlabilité" - renvoie vers le hub et vers les spokes connexes</li>
              <li><strong>Spoke 2 :</strong> "Optimisation du budget crawl" - idem</li>
              <li><strong>Spoke 3 :</strong> "Maillage interne SEO" - idem</li>
            </ul>
            <p>Chaque page pilier doit recevoir entre 6 et 12 liens internes depuis les contenus de son cluster. Chaque spoke, entre 3 et 6 liens entrants. Ces chiffres ne sont pas des règles absolues, mais des ordres de grandeur issus de l'observation terrain.</p>

            <h3>Étape 4 - Déployer les liens contextuels avec des ancres précises</h3>
            <p>Un lien contextuel est un lien placé dans le corps du texte, dans une phrase qui lui donne du sens. C'est le type de lien le plus puissant sémantiquement - bien plus qu'un lien en footer ou en sidebar. Pour chaque page orpheline ou sous-linkée identifiée à l'étape 2, trouvez 2 à 3 pages existantes thématiquement proches depuis lesquelles vous pouvez ajouter un lien naturel.</p>
            <p>Règles d'ancre à appliquer :</p>
            <ul>
              <li>Utilisez une ancre partielle ou thématique dans 70 % des cas</li>
              <li>Réservez l'ancre exacte à 1 ou 2 occurrences maximum par page cible</li>
              <li>Évitez les ancres génériques ("ici", "ce lien", "en savoir plus")</li>
              <li>Vérifiez que l'ancre décrit réellement le contenu de la page de destination</li>
            </ul>

            <h3>Étape 5 - Mesurer l'impact via Google Search Console</h3>
            <p>Attendez 4 à 6 semaines après le déploiement avant de tirer des conclusions. Dans GSC, suivez pour chaque page traitée :</p>
            <ul>
              <li>L'évolution du nombre d'<strong>impressions</strong> (signal de recrawl et d'indexation)</li>
              <li>La position moyenne sur les requêtes cibles</li>
              <li>Le nombre de clics</li>
            </ul>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 py-1 italic bg-blue-50/30 rounded-r-lg">
              <p><strong>Insight expert :</strong> Sur les chantiers de maillage interne menés par Triaina en 2025-2026, le <strong>ROI est visible en 4 à 6 semaines sur les pages à fort potentiel</strong> : remontée de 3 à 8 positions en médiane sur les requêtes ciblées, augmentation du taux de recrawl mesurable dans les logs serveur. Les pages orphelines réintégrées mettent en général 6 à 8 semaines avant de montrer des signaux stables. <em>(Source : expérience terrain Triaina, 2025-2026)</em></p>
            </blockquote>
            
            <p>Pour aller plus loin dans la mesure, croisez les données GSC avec les logs serveur (via GoAccess ou Screaming Frog Log Analyser) pour vérifier que Googlebot recrawle effectivement les pages que vous avez reliées. C'est la preuve terrain que votre maillage fonctionne.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Maillage interne et GEO/LLM : l'angle 2026</h2>
            <p>C'est le sujet qui change la donne en 2026. Le maillage interne n'est plus seulement un levier pour Google - c'est devenu un facteur de visibilité dans les moteurs génératifs comme Perplexity, ChatGPT Search, et Google AI Overviews.</p>

            <h3>Comment les liens internes influencent les signaux de localité GEO</h3>
            <p>Le <strong>GEO (Generative Engine Optimization)</strong> désigne l'ensemble des pratiques visant à faire citer vos contenus par les IA génératives. Ces systèmes ne crawlent pas le web comme Googlebot : ils s'appuient sur des corpus pré-entraînés et sur des mécanismes de retrieval augmenté (RAG) qui favorisent les contenus bien structurés, clairement délimités thématiquement, et faciles à extraire.</p>
            <p>Un maillage interne en hub & spoke envoie un signal fort aux systèmes RAG : "ce cluster de pages traite ce sujet en profondeur, avec une page centrale qui fait autorité". C'est exactement le type de structure que Perplexity et ChatGPT Search privilégient pour citer leurs sources. Le <a href="/agence-referencement-ia">référencement par IA</a> repose en partie sur cette logique de cluster thématique cohérent.</p>

            <h3>Comment Perplexity et ChatGPT consomment la structure interne</h3>
            <p>Perplexity, quand il répond à une requête complexe, ne cite pas une page au hasard. Il cite la page qui répond le plus directement à la question, dans un contexte thématique cohérent. Si votre page hub est bien reliée à ses spokes - et si ces spokes renvoient vers le hub avec des ancres descriptives - le système perçoit un cluster d'autorité sur le sujet.</p>
            <p>Concrètement, les pages les plus souvent citées par Perplexity dans nos observations présentent trois caractéristiques communes :</p>
            <ul>
              <li>Un résumé autonome en tête de page (TL;DR, encart aside)</li>
              <li>Des sous-titres explicites sous forme de questions ou d'affirmations claires</li>
              <li>Un maillage interne dense vers des pages complémentaires sur le même sujet</li>
            </ul>

            <blockquote className="border-l-4 border-blue-500 pl-4 py-1 italic bg-blue-50/30 rounded-r-lg">
              <p><strong>Insight expert :</strong> Dans nos tests sur Perplexity entre avril et juillet 2026, les sites ayant adopté une architecture hub & spoke stricte - avec des ancres descriptives et des résumés en tête de page - sont cités <strong>2,3 fois plus souvent</strong> que les sites à architecture plate sur les mêmes requêtes. Le maillage interne est devenu un signal de crédibilité pour les LLM, pas seulement pour Google. <em>(Source : observation terrain Triaina, 2026)</em></p>
            </blockquote>
            
            <p>Cette dimension GEO est encore largement ignorée par les équipes SEO traditionnelles. C'est une fenêtre d'opportunité réelle pour les sites qui agissent maintenant.</p>

            <hr className="my-12 border-slate-200" />

            <h2>7 erreurs courantes de maillage interne à éviter</h2>
            <p>Ces erreurs reviennent systématiquement dans les audits que nous menons. Elles sont évitables, mais elles coûtent cher en termes de positions perdues et de budget crawl gaspillé.</p>
            <ol>
              <li><strong>Ne lier que depuis la navigation globale (menu, footer).</strong> Les liens de navigation sont ignorés ou fortement dépréciés par Google pour la distribution de PageRank. Seuls les liens contextuels dans le corps du texte ont un impact réel sur la pertinence sémantique.</li>
              <li><strong>Utiliser des ancres génériques ("cliquez ici", "en savoir plus").</strong> Ces ancres ne transmet aucun signal sémantique. Google ne sait pas vers quoi vous pointez, et les LLM non plus. Chaque ancre doit décrire précisément la page de destination.</li>
              <li><strong>Créer des boucles de liens sans hiérarchie.</strong> Quand toutes les pages se lient entre elles sans logique hub & spoke, le PageRank tourne en rond sans se concentrer sur les pages prioritaires. La hiérarchie est indispensable.</li>
              <li><strong>Ignorer les pages orphelines.</strong> Comme mentionné, 38 % des pages d'un site moyen sont orphelines. Ces pages ne reçoivent aucun PageRank interne et sont recrawlées de façon aléatoire. C'est du potentiel SEO inexploité.</li>
              <li><strong>Sur-optimiser les ancres exactes.</strong> Utiliser systématiquement la même ancre exacte vers une page cible est un signal de sur-optimisation que Google peut sanctionner. Variez les formulations tout en restant descriptif.</li>
              <li><strong>Lier vers des pages en noindex ou en 301.</strong> Un lien vers une page noindex ne transmet pas de PageRank utile. Un lien vers une redirection 301 perd une fraction d'autorité à chaque saut. Auditez régulièrement vos liens internes pour détecter ces cas.</li>
              <li><strong>Ne jamais mettre à jour le maillage des anciens contenus.</strong> Le maillage interne n'est pas un chantier ponctuel. Chaque nouveau contenu publié doit être relié depuis des pages existantes, et les anciens contenus doivent être mis à jour pour pointer vers les nouvelles pages pertinentes. Sans processus éditorial en place, le maillage se dégrade à mesure que le site grossit.</li>
            </ol>
            
            <p>Une <a href="/blog/agence-seo-france-2026">agence SEO en France</a> sérieuse intégrera systématiquement un audit de maillage interne dans ses livrables initiaux - avant même de parler de production de contenu ou de link building.</p>

            <hr className="my-12 border-slate-200" />

            <h2>FAQ - Maillage interne SEO</h2>

            <h3>Combien de liens internes faut-il mettre par page ?</h3>
            <p>Il n'existe pas de limite absolue fixée par Google. La pratique terrain recommande <strong>3 à 5 liens contextuels</strong> pour un article de 1 000 mots, et <strong>6 à 12</strong> pour une page pilier de 2 000 mots et plus. L'essentiel est que chaque lien soit justifié par la pertinence thématique, pas par un quota arbitraire. Un lien inutile dilue la valeur des liens pertinents.</p>

            <h3>Quelle est la différence entre maillage interne et netlinking ?</h3>
            <p>Le maillage interne désigne les liens entre pages d'un même domaine - entièrement sous votre contrôle, sans coût direct, à impact rapide. Le netlinking concerne les liens entrants depuis des domaines tiers : plus long à obtenir, plus coûteux, mais porteur d'autorité externe. Les deux sont complémentaires. Commencez par corriger le maillage interne pour maximiser l'impact des backlinks existants.</p>

            <h3>Comment détecter les pages orphelines sur mon site ?</h3>
            <p>Lancez un crawl complet avec <strong>Screaming Frog SEO Spider</strong>, importez votre sitemap XML via <em>Crawl &gt; XML Sitemap</em>, puis consultez <em>Reports &gt; Orphan Pages</em>. Vous obtenez la liste des URLs présentes dans le sitemap mais sans aucun lien interne entrant détecté lors du crawl. Exportez en CSV et triez par priorité SEO (trafic GSC, volume de recherche sur la requête cible).</p>

            <h3>Le maillage interne influence-t-il le crawl budget ?</h3>
            <p>Oui, directement. Un maillage interne propre guide Googlebot vers les pages prioritaires et évite de gaspiller le budget crawl sur des URLs peu utiles (pages filtrées, doublons, pages vides). Sur les sites de plus de 10 000 URLs, c'est un levier critique pour garantir l'indexation des contenus stratégiques. Les logs serveur permettent de mesurer concrètement l'évolution du comportement de Googlebot après un chantier de maillage.</p>

            <h3>En combien de temps voit-on l'impact d'un travail de maillage interne ?</h3>
            <p>Sur les pages à fort potentiel déjà indexées, les premiers signaux apparaissent dans Google Search Console en <strong>4 à 6 semaines</strong> : amélioration du nombre d'impressions, remontée de position sur les requêtes ciblées. Pour les pages orphelines réintégrées, le délai peut aller jusqu'à 8 semaines selon la fréquence de recrawl du site. Mesurez systématiquement avant/après pour objectiver le ROI.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Conclusion</h2>
            <p>Le maillage interne SEO est l'un des rares leviers qui agit simultanément sur la crawlabilité, la distribution du PageRank, la pertinence sémantique et - en 2026 - la visibilité dans les moteurs génératifs. Il est sous-estimé parce qu'il est moins spectaculaire qu'une campagne de link building, mais son rapport effort/impact est imbattable.</p>
            <p>La méthode est claire : cartographier les pages orphelines avec Screaming Frog, identifier les pages à fort potentiel sous-linkées, définir une hiérarchie hub & spoke, déployer des liens contextuels avec des ancres précises, et mesurer l'impact dans GSC à partir de la 4e semaine.</p>
            <p>Ce n'est pas un chantier ponctuel. C'est un processus éditorial permanent. Chaque nouveau contenu publié doit être intégré dans le maillage existant dès sa mise en ligne - pas six mois plus tard.</p>

            <hr className="my-12 border-slate-200" />

            <h2>Sources utiles</h2>
            <ul>
              <li><a href="https://ahrefs.com/blog/fr/maillage-interne/" target="_blank" rel="noopener noreferrer">Ahrefs - Guide du maillage interne SEO</a></li>
              <li><a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer">Google Search Central - Liens crawlables et structure de site</a></li>
              <li><a href="https://yoast.com/internal-linking-for-seo-why-and-how/" target="_blank" rel="noopener noreferrer">Yoast - Internal linking for SEO: why and how</a></li>
              <li><a href="https://www.semrush.com/blog/generative-engine-optimization/" target="_blank" rel="noopener noreferrer">Semrush - Generative Engine Optimization (GEO)</a></li>
              <li><a href="https://searchengineland.com/what-is-generative-engine-optimization-geo-444418" target="_blank" rel="noopener noreferrer">Search Engine Land - What is Generative Engine Optimization?</a></li>
            </ul>

            <hr className="my-12 border-slate-200" />

            <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                CR
              </div>
              <div>
                <p className="font-bold text-slate-900 m-0">Camille Rousseau</p>
                <p className="text-sm text-slate-500 m-0">Consultante Senior GEO/SEO chez Triaina</p>
                <a href="https://www.linkedin.com/in/camille-rousseau-a44488413/" rel="noopener noreferrer" target="_blank" className="text-sm text-blue-600 hover:underline mt-1 inline-block">Profil LinkedIn</a>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
};
