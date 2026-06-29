import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const AuditGeo2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'audit-geo-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Audit GEO : qu'est-ce que c'est et comment le réaliser en 2026 ?",
      "description": "Un audit GEO mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot). Découvrez notre méthode en 4 phases et 30 points de contrôle.",
      "image": "https://www.triaina.fr/images/audit-geo.jpg",
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
        "@id": "https://triaina.fr/blog/audit-geo"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle différence entre un audit GEO et un audit SEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'audit SEO classique mesure votre positionnement dans Google - positions, backlinks, Core Web Vitals. L'audit GEO mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot). Les critères sont différents : chunking du contenu, E-E-A-T auteur identifié, données structurées JSON-LD, fraîcheur des contenus. Un bon SEO est la condition nécessaire - pas suffisante."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps prend un audit GEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En DIY avec les outils gratuits listés dans cet article : 1 à 2 jours de travail. Avec une agence spécialisée : 1 à 2 semaines selon la taille du site et la profondeur de l'analyse concurrentielle."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on faire un audit GEO soi-même ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Avec la checklist 30 points et les outils gratuits (Score-GEO.fr, Geoptie.com, Bing Webmaster Tools, Rich Results Test), un audit GEO gratuit DIY couvre les 80 % critiques. Une agence apporte la profondeur d'analyse concurrentielle, le plan d'action priorisé, et - dans le cas de Triaina - un réseau de publications tierces pour accélérer les citations."
          }
        },
        {
          "@type": "Question",
          "name": "À quelle fréquence réaliser un audit GEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tous les 3 mois minimum. Les LLM évoluent rapidement - nouvelles versions (GPT-5, Gemini 2.0, Claude 4), nouveaux critères de sélection, nouvelles interfaces. Un audit trimestriel permet d'ajuster la stratégie avant de perdre des positions acquises. Le suivi hebdomadaire des citations (5 prompts, 10 minutes) complète l'audit trimestriel."
          }
        },
        {
          "@type": "Question",
          "name": "Un bon SEO suffit-il pour être cité par les IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le SEO est la base indispensable - une page non indexée ne peut pas être citée. Mais les IA ont des critères supplémentaires que Google n'évalue pas : structure du contenu (chunking), auteur identifié avec E-E-A-T, données structurées JSON-LD, fraîcheur, mentions tierces. C'est précisément ce que mesure l'audit visibilité LLM - et ce qu'un audit SEO classique ne détecte pas."
          }
        }
      ]
    }
  ];

  const htmlBody = `
<p><strong>TL;DR - Ce qu'il faut retenir</strong></p>
<ul>
  <li><p>Un <strong>audit GEO</strong> mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot) - c'est fondamentalement différent d'un <a target="_blank" rel="noopener noreferrer" href="/blog/audit-seo-guide-complet" class="text-violet-600 hover:text-violet-700 underline font-medium">audit SEO classique</a>.</p></li>
  <li><p>Le trafic issu des LLM a bondi de <strong>+527 % en un an</strong> (2024-2025) : si vous n'avez pas de citations, vous n'existez pas pour une part croissante de vos prospects.</p></li>
  <li><p>La méthode se déroule en <strong>4 phases</strong> : mesure des citations, audit du chunking, vérification E-E-A-T, analyse des données structurées.</p></li>
  <li><p>30 points de contrôle couvrent l'essentiel - la checklist ci-dessous est opérationnelle immédiatement, sans outil payant.</p></li>
  <li><p>Un audit GEO DIY prend 1 à 2 jours avec les outils gratuits listés ici ; une agence facture entre 800 € et 3 000 €.</p></li>
</ul>

<h2>Qu'est-ce qu'un audit GEO ?</h2>
<p>Un <strong>audit GEO</strong> est une analyse complète de la visibilité d'un site dans les moteurs génératifs - ChatGPT, Perplexity, Gemini, Copilot. L'objectif : savoir si votre marque est citée, à quelle position, sur quels sujets, et pourquoi elle ne l'est pas quand ce n'est pas le cas. Pour comprendre le cadre général, voir notre <a target="_blank" rel="noopener noreferrer" href="/blog/geo-definition-2026" class="text-violet-600 hover:text-violet-700 underline font-medium">définition du GEO (Generative Engine Optimization)</a>.</p>

<h3>Pourquoi c'est différent d'un audit SEO</h3>
<p>Google crawle, indexe, et classe. Les LLM, eux, <em>sélectionnent et paraphrasent</em>. Ce n'est pas le même mécanisme, donc ce ne sont pas les mêmes critères.</p>
<p>Un <a target="_blank" rel="noopener noreferrer" href="/blog/audit-seo-guide-complet" class="text-violet-600 hover:text-violet-700 underline font-medium">audit SEO complet</a> mesure des positions, des backlinks, des Core Web Vitals, une structure de crawl. Tout ça reste nécessaire - mais insuffisant. Une page peut être en position 1 sur Google et complètement absente des réponses IA. Inversement, une page bien structurée, avec un auteur identifié et des données structurées solides, peut être citée par Perplexity même si elle est en position 8 sur Google.</p>

<h3>Ce qu'un audit GEO mesure concrètement</h3>
<ul>
  <li><p><strong>Taux de citation par LLM</strong> : sur 10 prompts représentatifs, combien de fois votre domaine apparaît-il dans les réponses ?</p></li>
  <li><p><strong>Qualité des extraits cités</strong> : l'IA cite-t-elle votre marque, votre URL, un passage précis de votre contenu ?</p></li>
  <li><p><strong>Signaux E-E-A-T détectés par les IA</strong> : auteur identifié, expertise démontrée, mentions tierces.</p></li>
  <li><p><strong>Structure du contenu (chunking)</strong> : vos sections sont-elles extractibles comme des blocs de sens autonomes ?</p></li>
  <li><p><strong>Données structurées</strong> : JSON-LD Article, FAQPage, Organization - présents et valides ?</p></li>
  <li><p><strong>Fraîcheur</strong> : les IA privilégient les contenus mis à jour récemment, surtout sur des sujets évolutifs.</p></li>
</ul>

<h3>Ce qu'un audit SEO classique ne détecte pas</h3>
<p>C'est là que réside l'angle mort. Un audit SEO standard ne voit pas :</p>
<ul>
  <li><p>L'<strong>absence de citations dans les IA</strong> - aucun outil SEO classique ne mesure ça nativement.</p></li>
  <li><p>Un <strong>mauvais chunking</strong> : des pages bien optimisées pour Google mais structurées en longs blocs narratifs que les LLM ne savent pas extraire proprement.</p></li>
  <li><p>L'<strong>absence d'auteur identifié</strong> : un article sans byline passe les audits SEO sans problème, mais les IA le traitent comme une source anonyme - donc moins fiable.</p></li>
  <li><p>Un <strong>contenu non paraphrasable</strong> : trop dense, trop jargonneux, sans réponse directe en début de section.</p></li>
</ul>

<h2>Pourquoi réaliser un audit GEO en 2026 ?</h2>
<p>Le trafic généré par la recherche IA a augmenté de <strong>+527 % en un an</strong> entre 2024 et 2025, selon les données agrégées des plateformes IA. ChatGPT seul compte entre 800 et 900 millions d'utilisateurs actifs hebdomadaires en 2026. Gemini dépasse les 750 millions d'utilisateurs mensuels, en croissance de +114 % sur un an. Ce n'est plus un phénomène émergent - c'est un canal d'acquisition à part entière.</p>
<p>Les décideurs B2B utilisent ChatGPT et Copilot pour leurs recherches fournisseurs. Pas pour trouver une recette. Pour comparer des prestataires, évaluer des solutions, préparer un appel d'offres. <strong>Si votre marque n'est pas citée dans ces réponses, vous n'existez pas</strong> pour cette partie du parcours d'achat.</p>
<p>Google AI Overviews - déjà déployés aux États-Unis, attendus en France - vont capter les clics des positions 1 à 3 sur les requêtes informationnelles. Seules les sources citées dans l'AI Overview survivent à cette transformation. Les autres perdent du trafic sans même comprendre pourquoi.</p>
<p>L'audit GEO permet de <strong>prioriser les actions</strong> : pas besoin de tout refaire. Dans la plupart des sites audités, 20 % des corrections génèrent 80 % des gains de citations. L'audit identifie ces 20 %.</p>

<h2>Les 4 phases d'un audit GEO complet</h2>

<h3>Phase 1 - Mesurer le taux de citation actuel</h3>
<p>Avant de corriger quoi que ce soit, il faut savoir où vous en êtes. La méthode manuelle est la plus fiable - et la seule qui mesure ce que les utilisateurs voient vraiment.</p>
<p><strong>Méthode :</strong> testez 10 à 15 prompts représentatifs de vos prospects dans ChatGPT, Perplexity, Gemini et Copilot, <em>toujours en navigation privée</em> pour éviter les biais de personnalisation.</p>
<p><strong>Prompts types à tester :</strong></p>
<ul>
  <li><p>« Meilleure agence SEO Paris 2026 »</p></li>
  <li><p>« Comment optimiser son site pour les IA génératives ? »</p></li>
  <li><p>« Qu'est-ce que le GEO ? »</p></li>
  <li><p>« Comparatif outils GEO 2026 »</p></li>
  <li><p>« Agence référencement IA France »</p></li>
</ul>
<p><strong>Grille de notation par prompt et par LLM :</strong></p>
<ul>
  <li><p>Cité en position 1 dans la réponse → <strong>3 points</strong></p></li>
  <li><p>Cité en position 2-3 → <strong>2 points</strong></p></li>
  <li><p>Cité en bas de réponse ou dans les sources → <strong>1 point</strong></p></li>
  <li><p>Non cité → <strong>0 point</strong></p></li>
</ul>
<p><strong>Outils :</strong> <a target="_blank" rel="noopener noreferrer nofollow" href="https://copilot.microsoft.com" class="text-violet-600 hover:text-violet-700 underline font-medium">copilot.microsoft.com</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.perplexity.ai" class="text-violet-600 hover:text-violet-700 underline font-medium">perplexity.ai</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://chat.openai.com" class="text-violet-600 hover:text-violet-700 underline font-medium">chat.openai.com</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://gemini.google.com" class="text-violet-600 hover:text-violet-700 underline font-medium">gemini.google.com</a> - navigation privée systématique.</p>
<p><strong>Fréquence recommandée :</strong> 1 fois par semaine, 5 à 10 prompts représentatifs de vos prospects. Documentez dans un tableau simple (date, prompt, LLM, sources citées, votre position).</p>
<p>Pour aller plus loin sur la stratégie d'<a target="_blank" rel="noopener noreferrer" href="/blog/etre-cite-par-chatgpt" class="text-violet-600 hover:text-violet-700 underline font-medium">être cité par ChatGPT</a>, nous avons détaillé les leviers spécifiques à OpenAI dans un article dédié.</p>

<h3>Phase 2 - Auditer la structure du contenu (chunking)</h3>
<p>Les LLM n'ingèrent pas vos pages entières. Ils extraient des <strong>chunks</strong> - des blocs de sens cohérents - et les paraphrasent dans leurs réponses. Si votre contenu n'est pas structuré pour faciliter cette extraction, il sera ignoré même si Google le classe en position 1.</p>
<p><strong>Critères à vérifier sur vos 10 pages stratégiques :</strong></p>
<ul>
  <li><p><strong>H2/H3 explicites</strong> : chaque titre doit formuler une question ou une affirmation autonome. « Notre approche » ne vaut rien. « Comment auditer la structure d'un contenu pour les IA » est extractible.</p></li>
  <li><p><strong>Réponse directe en début de section</strong> : la réponse à la question implicite du titre doit être dans les 2 premières lignes - pas après 3 paragraphes d'introduction.</p></li>
  <li><p><strong>Paragraphes courts</strong> : moins de 5 lignes par paragraphe. Les blocs denses sont mal extraits.</p></li>
  <li><p><strong>Listes et tableaux</strong> : les IA les extraient quasi verbatim. Un tableau comparatif bien structuré est une mine d'or pour les citations.</p></li>
  <li><p><strong>Absence de contenu dilutif</strong> : introductions longues, conclusions redondantes, transitions génériques - tout ça dilue le signal et réduit la probabilité d'extraction.</p></li>
  <li><p><strong>FAQ présente</strong> : le format question/réponse est le format natif des LLM. Une section FAQ bien rédigée est systématiquement extraite.</p></li>
  <li><p><strong>TL;DR en tête d'article</strong> : les IA lisent souvent le début de la page en priorité. Un résumé structuré augmente le taux de citation.</p></li>
</ul>
<p><strong>Test rapide :</strong> lisez chaque H2 comme une question. La réponse est-elle dans les 2 premières lignes qui suivent ? Si non, c'est un point de correction.</p>
<p><strong>Score de chunking :</strong> 1 point par critère validé, sur vos 10 pages stratégiques. Un score inférieur à 5/7 sur une page est un signal d'alerte.</p>

<h3>Phase 3 - Vérifier les signaux E-E-A-T et d'entité</h3>
<p>Les IA génératives font confiance aux sources identifiables. Une page sans auteur, sans mentions tierces, sans présence dans le Knowledge Graph est traitée comme une source anonyme - donc déprioritisée.</p>
<p><strong>Points à vérifier :</strong></p>
<ul>
  <li><p><strong>Auteur identifié</strong> : nom réel, titre professionnel précis, lien LinkedIn actif, photo - présent sur chaque article ? « L'équipe éditoriale » ne suffit pas.</p></li>
  <li><p><strong>Schema.org Person</strong> : l'auteur est-il balisé en JSON-LD avec ses attributs (name, jobTitle, url) ? Voir notre guide sur les <a target="_blank" rel="noopener noreferrer" href="/blog/schema-org-donnees-structurees-gso" class="text-violet-600 hover:text-violet-700 underline font-medium">données structurées JSON-LD pour le GEO</a>.</p></li>
  <li><p><strong>Mentions externes</strong> : votre domaine est-il cité dans des publications tierces reconnues - presse sectorielle, LinkedIn, forums spécialisés ? Ces mentions construisent l'autorité d'entité aux yeux des LLM.</p></li>
  <li><p><strong>Knowledge Graph</strong> : tapez le nom de votre marque dans ChatGPT ou Perplexity. L'IA la connaît-elle comme une entité ? Peut-elle décrire ce que vous faites sans chercher sur le web ?</p></li>
  <li><p><strong>Bing Webmaster Tools</strong> : votre site est-il indexé ? Le tableau de bord « AI Performance » (disponible depuis février 2026) est-il activé ? C'est critique pour Copilot et Perplexity, qui s'appuient tous deux sur l'index Bing.</p></li>
  <li><p><strong>Fraîcheur</strong> : les articles stratégiques ont-ils été mis à jour dans les 6 derniers mois ? Les LLM privilégient les contenus récents sur les sujets évolutifs.</p></li>
</ul>

<h3>Phase 4 - Analyser les données structurées et l'indexation IA</h3>
<p>C'est la phase la plus technique, mais aussi l'une des plus actionnables : les corrections de données structurées et de robots.txt se font en quelques heures et ont un impact immédiat.</p>
<p><strong>Checklist technique :</strong></p>
<ul>
  <li><p>Présence de <strong>JSON-LD Article</strong> sur toutes les pages de contenu stratégiques.</p></li>
  <li><p>Présence de <strong>JSON-LD FAQPage</strong> sur les pages qui contiennent une FAQ.</p></li>
  <li><p>Présence de <strong>JSON-LD Organization</strong> sur la page d'accueil et la page À propos.</p></li>
  <li><p>Validation via <a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google.com/test/rich-results" class="text-violet-600 hover:text-violet-700 underline font-medium">Rich Results Test (Google)</a> et <a target="_blank" rel="noopener noreferrer nofollow" href="https://validator.schema.org" class="text-violet-600 hover:text-violet-700 underline font-medium">Schema.org Validator</a>.</p></li>
  <li><p><strong>Sitemap soumis à Bing Webmaster Tools</strong> - pas seulement à Google Search Console. Bing est plus lent à découvrir les URLs organiquement.</p></li>
  <li><p><strong>Robots.txt</strong> : vérifiez l'absence de blocages pour les crawlers IA. Les agents à autoriser pour les citations : <code>OAI-SearchBot</code> (ChatGPT Search), <code>PerplexityBot</code>, <code>Claude-SearchBot</code>, <code>BingBot</code>. Attention : <code>GPTBot</code> et <code>ClaudeBot</code> sont les crawlers d'entraînement - leur blocage n'empêche pas les citations.</p></li>
  <li><p><strong>Cohérence des métadonnées</strong> : title, meta description, OG tags - les IA lisent ces balises pour qualifier le contenu avant même d'en lire le corps.</p></li>
  <li><p><strong>IndexNow actif</strong> : ce protocole notifie Bing en quelques minutes après chaque publication, rendant vos pages éligibles aux citations Copilot dans l'heure.</p></li>
</ul>

<h2>Checklist audit GEO - 30 points de contrôle</h2>
<p>Cette checklist couvre les 30 points critiques d'un <strong>audit GEO</strong> complet. Priorité : 🔴 critique (à corriger en priorité), 🟠 important, 🟡 optimisation.</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Point de contrôle</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Priorité</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Outil de vérification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3" class="bg-slate-100 p-3 border border-slate-200 font-bold text-slate-900 text-center"><strong>Citations IA (5 points)</strong></td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Taux de citation dans ChatGPT sur 10 prompts cibles</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">chat.openai.com (navigation privée)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Taux de citation dans Perplexity sur 10 prompts cibles</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">perplexity.ai (navigation privée)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Taux de citation dans Gemini sur 10 prompts cibles</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">gemini.google.com (navigation privée)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Taux de citation dans Copilot sur 10 prompts cibles</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">copilot.microsoft.com (navigation privée)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Position dans les réponses (1er, 2e-3e, bas, absent)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Grille de notation manuelle</td>
      </tr>

      <tr>
        <td colspan="3" class="bg-slate-100 p-3 border border-slate-200 font-bold text-slate-900 text-center"><strong>Structure du contenu - Chunking (8 points)</strong></td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">H2/H3 explicites et autonomes (chaque titre = une question)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle des pages stratégiques</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Réponse directe dans les 2 premières lignes de chaque section</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Paragraphes courts (&lt; 5 lignes)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle / Word count</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Listes à puces et tableaux présents sur les pages clés</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Absence d'introductions longues avant l'information</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Section FAQ présente sur les pages stratégiques</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">TL;DR ou résumé en tête d'article</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟡</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Contenu paraphrasable (pas de jargon opaque, phrases directes)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟡</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle / test de paraphrase IA</td>
      </tr>

      <tr>
        <td colspan="3" class="bg-slate-100 p-3 border border-slate-200 font-bold text-slate-900 text-center"><strong>E-E-A-T &amp; Entité (7 points)</strong></td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Auteur identifié (nom réel + titre professionnel) sur chaque article</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Lien LinkedIn de l'auteur présent et actif</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Photo de l'auteur présente</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Lecture manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Mentions tierces du domaine (presse, LinkedIn, forums)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Ahrefs / Semrush / recherche manuelle</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Marque reconnue comme entité dans les réponses IA</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Test manuel ChatGPT / Perplexity</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Site indexé dans Bing + AI Performance activé</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Bing Webmaster Tools</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Fraîcheur : articles stratégiques mis à jour &lt; 6 mois</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Google Search Console / lecture manuelle</td>
      </tr>

      <tr>
        <td colspan="3" class="bg-slate-100 p-3 border border-slate-200 font-bold text-slate-900 text-center"><strong>Données structurées (5 points)</strong></td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">JSON-LD Article sur toutes les pages de contenu</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Rich Results Test / Schema.org Validator</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">JSON-LD FAQPage sur les pages avec FAQ</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Rich Results Test</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">JSON-LD Organization sur la page d'accueil</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Rich Results Test</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">JSON-LD Person (auteur) sur les articles</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Schema.org Validator</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Validation Rich Results Test sans erreur</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">search.google.com/test/rich-results</td>
      </tr>

      <tr>
        <td colspan="3" class="bg-slate-100 p-3 border border-slate-200 font-bold text-slate-900 text-center"><strong>Indexation &amp; Technique (5 points)</strong></td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Sitemap soumis à Bing Webmaster Tools</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">Bing Webmaster Tools</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Robots.txt : crawlers IA de citation non bloqués (OAI-SearchBot, PerplexityBot)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🔴</td>
        <td class="p-3 border border-slate-200 text-slate-700">votredomaine.com/robots.txt</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">IndexNow actif (notification instantanée Bing)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">indexnow.org / Bing Webmaster Tools</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Core Web Vitals dans le vert (LCP, INP, CLS)</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟠</td>
        <td class="p-3 border border-slate-200 text-slate-700">Google Search Console / PageSpeed Insights</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Canonical www/non-www cohérent sur tout le site</td>
        <td class="p-3 border border-slate-200 text-slate-700 text-center">🟡</td>
        <td class="p-3 border border-slate-200 text-slate-700">Screaming Frog / Ahrefs</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Outils pour réaliser un audit GEO</h2>
<p>La bonne nouvelle : la majorité des outils nécessaires à un <strong>audit visibilité LLM</strong> sont gratuits. Voici la liste complète, par usage.</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Outil</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Usage dans l'audit GEO</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Gratuit / Payant</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.bing.com/webmasters" class="text-violet-600 hover:text-violet-700 underline font-medium">Bing Webmaster Tools</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Indexation Bing + tableau de bord AI Performance (citations Copilot)</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google.com/search-console" class="text-violet-600 hover:text-violet-700 underline font-medium">Google Search Console</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Indexation Google + requêtes organiques (base de l'audit)</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google.com/test/rich-results" class="text-violet-600 hover:text-violet-700 underline font-medium">Rich Results Test (Google)</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Validation des données structurées JSON-LD</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://validator.schema.org" class="text-violet-600 hover:text-violet-700 underline font-medium">Schema.org Validator</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Validation JSON-LD complète (tous types de schémas)</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://score-geo.fr" class="text-violet-600 hover:text-violet-700 underline font-medium">Score-GEO.fr</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Audit GEO automatisé - score 0 à 100 sur 91 points de contrôle</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><a target="_blank" rel="noopener noreferrer nofollow" href="https://geoptie.com/fr" class="text-violet-600 hover:text-violet-700 underline font-medium">Geoptie.com</a></td>
        <td class="p-3 border border-slate-200 text-slate-700">Audit GEO multi-dimensions (6 axes : citation readiness, autorité, technique, etc.)</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">ChatGPT / Perplexity / Gemini / Copilot</td>
        <td class="p-3 border border-slate-200 text-slate-700">Test manuel des citations - la mesure la plus directe qui soit</td>
        <td class="p-3 border border-slate-200 text-slate-700">Gratuit</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700">Semrush / Ahrefs</td>
        <td class="p-3 border border-slate-200 text-slate-700">Audit SEO + profil de backlinks + mentions tierces (base autorité)</td>
        <td class="p-3 border border-slate-200 text-slate-700">Payant</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Notre recommandation :</strong> commencez par Score-GEO.fr et Geoptie.com pour avoir un diagnostic rapide en 30 secondes, puis approfondissez manuellement les phases 1 à 4 décrites ci-dessus. Les outils automatisés donnent une direction - la méthode manuelle donne la précision.</p>

<h2>Audit GEO vs Audit SEO : tableau comparatif</h2>
<p>Un <strong>audit GEO</strong> ne remplace pas l'<a target="_blank" rel="noopener noreferrer" href="/blog/audit-seo-guide-complet" class="text-violet-600 hover:text-violet-700 underline font-medium">audit SEO classique</a> - il le complète. Voici les différences structurelles entre les deux approches.</p>

<div class="overflow-x-auto my-8">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Dimension</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Audit SEO</th>
        <th class="bg-violet-50 p-3 border border-slate-200 font-bold text-slate-900">Audit GEO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Objectif principal</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">Améliorer le positionnement dans les SERP Google</td>
        <td class="p-3 border border-slate-200 text-slate-700">Augmenter le taux de citation dans les IA génératives</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Ce qu'on mesure</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">Positions, trafic organique, backlinks, Core Web Vitals</td>
        <td class="p-3 border border-slate-200 text-slate-700">Taux de citation par LLM, qualité des extraits, score de chunking</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Outils principaux</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">Google Search Console, Semrush, Ahrefs, Screaming Frog</td>
        <td class="p-3 border border-slate-200 text-slate-700">Bing Webmaster Tools, Score-GEO.fr, Geoptie.com, tests manuels LLM</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Critères de contenu</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">Densité de mots-clés, cocon sémantique, maillage interne, longueur</td>
        <td class="p-3 border border-slate-200 text-slate-700">Chunking, réponse directe, paraphrasabilité, FAQ, TL;DR</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Signaux d'autorité</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">Backlinks, Domain Rating, ancres, PageRank</td>
        <td class="p-3 border border-slate-200 text-slate-700">E-E-A-T auteur, mentions tierces, entité Knowledge Graph, fraîcheur</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Fréquence recommandée</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">1 fois par an (audit complet) + suivi mensuel</td>
        <td class="p-3 border border-slate-200 text-slate-700">Tous les 3 mois minimum (les LLM évoluent vite)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 text-slate-700"><strong>Durée estimée</strong></td>
        <td class="p-3 border border-slate-200 text-slate-700">3 à 10 jours selon la taille du site</td>
        <td class="p-3 border border-slate-200 text-slate-700">1 à 2 jours (DIY) / 1 à 2 semaines (agence)</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Le SEO reste la fondation : une page non indexée ne peut pas être citée. Mais le SEO seul ne suffit plus. L'<strong>audit GEO</strong> - ou <strong>audit référencement IA</strong> - est la couche complémentaire qui mesure ce que Google Search Console ne voit pas.</p>

<h2>Combien coûte un audit GEO ?</h2>
<p>La réponse dépend de la profondeur souhaitée et de la taille du site. Voici les trois scénarios réalistes.</p>

<h3>Audit GEO DIY - gratuit</h3>
<p>Avec les outils listés ci-dessus (Score-GEO.fr, Geoptie.com, Bing Webmaster Tools, Rich Results Test) et la méthode en 4 phases, un responsable marketing ou un consultant SEO peut réaliser un <strong>audit GEO gratuit</strong> complet en 1 à 2 jours de travail. Cet audit DIY couvre les 80 % critiques. Il manquera la profondeur d'analyse concurrentielle et le plan d'action priorisé - mais il identifie les angles morts principaux.</p>

<h3>Audit GEO par une agence - 800 € à 3 000 €</h3>
<p>Une agence spécialisée en <strong>audit GEO generative engine optimization</strong> facture entre 800 € et 3 000 € selon la profondeur de l'analyse, le nombre de pages auditées, et le nombre de LLM testés. À ce niveau, l'audit inclut une analyse concurrentielle (qui est cité à votre place ?), un scoring détaillé par page, et des recommandations priorisées.</p>

<h3>Audit GEO + plan d'action - 1 500 € à 5 000 €</h3>
<p>La formule complète inclut l'audit, une roadmap priorisée, et un accompagnement à l'implémentation. C'est la formule que propose Triaina dans le cadre d'une <a target="_blank" rel="noopener noreferrer" href="/expertise-gso" class="text-violet-600 hover:text-violet-700 underline font-medium">stratégie GSO</a> complète, avec l'avantage d'un groupe média propriétaire pour accélérer les citations tierces - l'un des signaux les plus difficiles à construire rapidement en autonomie.</p>
<p><strong>Ce qui justifie le coût :</strong> un audit bien réalisé identifie les 20 % d'actions qui génèrent 80 % des gains de citations IA. Sur un site qui génère des leads B2B, même une augmentation marginale du taux de citation dans ChatGPT ou Copilot peut représenter plusieurs dizaines de milliers d'euros de pipeline supplémentaire.</p>

<h2>FAQ - Audit GEO</h2>
<p><strong>Quelle différence entre un audit GEO et un audit SEO ?</strong></p>
<p>L'<a target="_blank" rel="noopener noreferrer" href="/blog/audit-seo-guide-complet" class="text-violet-600 hover:text-violet-700 underline font-medium">audit SEO classique</a> mesure votre positionnement dans Google - positions, backlinks, Core Web Vitals. L'audit GEO mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot). Les critères sont différents : chunking du contenu, E-E-A-T auteur identifié, <a target="_blank" rel="noopener noreferrer" href="/blog/schema-org-donnees-structurees-gso" class="text-violet-600 hover:text-violet-700 underline font-medium">données structurées JSON-LD</a>, fraîcheur des contenus. Un bon SEO est la condition nécessaire - pas suffisante.</p>

<p><strong>Combien de temps prend un audit GEO ?</strong></p>
<p>En DIY avec les outils gratuits listés dans cet article : 1 à 2 jours de travail. Avec une agence spécialisée : 1 à 2 semaines selon la taille du site et la profondeur de l'analyse concurrentielle.</p>

<p><strong>Peut-on faire un audit GEO soi-même ?</strong></p>
<p>Oui. Avec la checklist 30 points et les outils gratuits (Score-GEO.fr, Geoptie.com, Bing Webmaster Tools, Rich Results Test), un <strong>audit GEO gratuit</strong> DIY couvre les 80 % critiques. Une agence apporte la profondeur d'analyse concurrentielle, le plan d'action priorisé, et - dans le cas de Triaina - un réseau de publications tierces pour accélérer les citations.</p>

<p><strong>À quelle fréquence réaliser un audit GEO ?</strong></p>
<p>Tous les 3 mois minimum. Les LLM évoluent rapidement - nouvelles versions (GPT-5, Gemini 2.0, Claude 4), nouveaux critères de sélection, nouvelles interfaces. Un audit trimestriel permet d'ajuster la stratégie avant de perdre des positions acquises. Le suivi hebdomadaire des citations (5 prompts, 10 minutes) complète l'audit trimestriel.</p>

<p><strong>Un bon SEO suffit-il pour être cité par les IA ?</strong></p>
<p>Non. Le SEO est la base indispensable - une page non indexée ne peut pas être citée. Mais les IA ont des critères supplémentaires que Google n'évalue pas : structure du contenu (chunking), auteur identifié avec E-E-A-T, données structurées JSON-LD, fraîcheur, mentions tierces. C'est précisément ce que mesure l'<strong>audit visibilité LLM</strong> - et ce qu'un audit SEO classique ne détecte pas.</p>

<h2>Sources utiles</h2>
<ul>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.bing.com/webmasters" class="text-violet-600 hover:text-violet-700 underline font-medium">Bing Webmaster Tools</a> - bing.com/webmasters</p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google.com/test/rich-results" class="text-violet-600 hover:text-violet-700 underline font-medium">Rich Results Test (Google)</a> - search.google.com/test/rich-results</p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://validator.schema.org" class="text-violet-600 hover:text-violet-700 underline font-medium">Schema.org Validator</a> - validator.schema.org</p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://score-geo.fr" class="text-violet-600 hover:text-violet-700 underline font-medium">Score-GEO.fr</a> - audit GEO automatisé gratuit</p></li>
  <li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://geoptie.com/fr" class="text-violet-600 hover:text-violet-700 underline font-medium">Geoptie.com</a> - audit GEO multi-dimensions gratuit</p></li>
</ul>
  `;

  if (!post) return null;

  return (
    <>
      <SEO 
        title="Audit GEO : qu'est-ce que c'est et comment le réaliser en 2026 ?"
        description="Un audit GEO mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot). Découvrez notre méthode en 4 phases et 30 points de contrôle."
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
