import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const PerplexitySeo2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'perplexity-seo-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post?.title || '',
      "description": post?.excerpt || '',
      "image": post?.image || '',
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.triaina.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": post?.title || '', "item": `https://www.triaina.fr${post?.url || ''}` }
      ]
    }
  ];



  if (!post) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10">
      <SEO 
        title={`${post.title} - Triaina`}
        description={post.excerpt}
        canonicalUrl={`https://triaina.fr${post.url}`}
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
          className="inline-flex items-center text-sm font-mono text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </a>

        <article className="max-w-4xl mx-auto relative">
          {/* Accent decoration */}
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
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </header>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 relative group">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-2xl prose-strong:text-slate-900 prose-li:marker:text-blue-500">
<div dangerouslySetInnerHTML={{ __html: `
<blockquote>
  <p><strong>En résumé (TL;DR)</strong></p>
  <ul>
    <li><strong>Perplexity AI traite 780 millions de requêtes par mois</strong> (mai 2025) - ce n'est plus un gadget de niche.</li>
    <li>Le moteur s'appuie sur <strong>l'API Bing + son propre crawler PerplexityBot</strong> pour indexer le web en temps réel, puis un LLM synthétise les sources et les cite.</li>
    <li><strong>Ranker sur Bing est la condition n°1</strong> pour apparaître dans Perplexity.</li>
    <li>Les autres leviers : autoriser PerplexityBot, structurer le contenu pour l'extraction IA, répondre à des questions directes, renforcer l'E-E-A-T et maintenir la fraîcheur.</li>
    <li>Le Perplexity SEO n'est pas une discipline à part - c'est du <strong>SEO classique + des signaux de citabilité IA</strong>.</li>
  </ul>
</blockquote>

<p><strong>780 millions de requêtes en mai 2025.</strong> C'est le chiffre qu'Aravind Srinivas, PDG de Perplexity AI, a annoncé publiquement - soit une croissance de <strong>+239 % entre mai 2024 et mai 2025</strong>. À ce rythme, Perplexity vise le milliard de requêtes par semaine d'ici fin 2026.</p>

<p>La plateforme revendique <strong>45 millions d'utilisateurs actifs mensuels</strong> en propre, et plus de <strong>100 millions d'utilisateurs combinés</strong> avec ses produits agents (avril 2026). Sa part de marché dans l'univers des chatbots IA tourne autour de <strong>~4 %</strong> (First Page Sage, juin 2026), loin derrière ChatGPT (~61,8 %), mais sur une trajectoire ascendante claire.</p>

<p>Pour les équipes SEO, la question n'est plus "faut-il s'y intéresser ?" mais "comment ça marche et que faire concrètement ?". Cet article répond aux deux.</p>

<h2>Comment fonctionne Perplexity AI : le moteur sous le capot</h2>

<p>Perplexity n'est pas un simple chatbot à mémoire figée. C'est un <strong>moteur de recherche génératif</strong> qui exécute une vraie recherche web à chaque requête, puis synthétise les résultats via un LLM.</p>

<p>Le flux complet, étape par étape :</p>

<ol>
  <li><strong>L'utilisateur pose une question</strong> en langage naturel.</li>
  <li>Perplexity <strong>lance une recherche web en temps réel</strong> via l'API Bing et son propre crawler.</li>
  <li>Le moteur <strong>récupère les top résultats</strong> (généralement 5 à 10 sources).</li>
  <li>Un <strong>LLM synthétise le contenu</strong> de ces sources et génère une réponse structurée.</li>
  <li>Les <strong>sources sont citées explicitement</strong> avec un lien cliquable - c'est la mécanique des "Perplexity citations".</li>
</ol>

<p>Différence fondamentale avec ChatGPT sans plugin : ChatGPT (en mode standard) s'appuie sur ses données d'entraînement, figées à une date de coupure. Perplexity, lui, <strong>cherche en temps réel</strong>. C'est ce qui le rapproche davantage d'un moteur de recherche que d'un assistant conversationnel.</p>

<h3>Bing API + PerplexityBot : les deux sources d'indexation</h3>

<p>Perplexity utilise <strong>deux canaux d'indexation distincts</strong> :</p>

<ul>
  <li><strong>L'API Bing</strong> : Perplexity interroge l'index de Bing pour récupérer les pages pertinentes. Si votre site n'est pas indexé sur Bing, il est invisible pour Perplexity.</li>
  <li><strong>PerplexityBot</strong> : le crawler propriétaire de Perplexity, qui visite les pages en direct pour en extraire le contenu frais. Son user-agent déclaré est <code>PerplexityBot/1.0</code>. Il respecte le fichier <code>robots.txt</code> - ce qui signifie qu'un blocage explicite l'exclut de l'indexation.</li>
</ul>

<p>À noter : Perplexity utilise aussi un second agent, <strong>Perplexity-User</strong>, déclenché par les actions utilisateurs (clics sur "sources"). Celui-ci ignore généralement le <code>robots.txt</code> car il s'agit d'une requête initiée par un humain, et non d'un crawl automatique.</p>

<h3>Le rôle du LLM dans la sélection des sources</h3>

<p>Le LLM ne sélectionne pas les sources au hasard parmi les résultats Bing. Il <strong>évalue la pertinence sémantique</strong> de chaque page par rapport à la question posée, puis extrait les passages les plus répondants.</p>

<p>Les pages qui obtiennent des citations sont celles qui :</p>

<ul>
  <li>Répondent directement à la question dès les premiers paragraphes.</li>
  <li>Sont structurées de façon à ce que le LLM puisse en extraire des "chunks" cohérents.</li>
  <li>Présentent des signaux d'autorité et de fiabilité (auteur identifié, sources citées, données récentes).</li>
</ul>

<p>C'est exactement là que le <strong>référencement Perplexity</strong> diverge légèrement du SEO Google classique : la structure extractible du contenu pèse autant que le positionnement brut.</p>

<h2>Perplexity vs Google : ce qui change pour le SEO</h2>

<p>La bonne nouvelle : Perplexity SEO n'est pas une discipline à réinventer de zéro. La mauvaise : quelques dimensions changent suffisamment pour justifier une adaptation de votre stratégie.</p>

<table>
  <thead>
    <tr>
      <th>Dimension</th>
      <th>Google SEO</th>
      <th>Perplexity SEO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Signaux de ranking</strong></td>
      <td>200+ signaux Google (PageRank, Core Web Vitals, E-E-A-T…)</td>
      <td>Ranking Bing + pertinence sémantique LLM + citabilité</td>
    </tr>
    <tr>
      <td><strong>Format de contenu</strong></td>
      <td>Contenu long, maillage interne, balises meta</td>
      <td>Réponses directes, structure extractible (chunking), listes</td>
    </tr>
    <tr>
      <td><strong>CTR</strong></td>
      <td>Clic vers la page source attendu</td>
      <td>La réponse est consommée sur Perplexity ; le clic est optionnel</td>
    </tr>
    <tr>
      <td><strong>Backlinks</strong></td>
      <td>Signal majeur (autorité de domaine)</td>
      <td>Signal indirect via le DA/DR qui influence le ranking Bing</td>
    </tr>
    <tr>
      <td><strong>Fraîcheur</strong></td>
      <td>Importante pour les sujets d'actualité</td>
      <td><strong>Critique</strong> : Perplexity favorise systématiquement le contenu récent</td>
    </tr>
  </tbody>
</table>

<p><strong>Conclusion</strong> : optimiser pour Perplexity, c'est faire du bon SEO classique (Bing inclus), puis ajouter une couche de citabilité IA - structure, réponses directes, E-E-A-T visible. Rien de révolutionnaire, mais quelques priorités à réordonner.</p>

<h2>Comment Perplexity sélectionne ses sources : les 5 critères clés</h2>

<p>Comprendre ces critères, c'est comprendre où agir en priorité pour votre <strong>plexity optimization</strong>.</p>

<ol>
  <li><strong>Autorité du domaine (DA/DR)</strong><br />Perplexity s'appuie sur l'index Bing, qui utilise ses propres signaux d'autorité. Un domaine avec un bon profil de backlinks et une longue historique d'indexation a mécaniquement plus de chances d'être sélectionné. C'est le même levier qu'en SEO Google - il n'y a pas de raccourci.</li>
  <li><strong>Fraîcheur du contenu</strong><br />Le moteur de recherche IA de Perplexity est conçu pour répondre avec des informations récentes. Une page mise à jour en 2026 battra presque toujours une page identique datant de 2022, toutes choses égales par ailleurs. La date de dernière modification doit être visible et dans les métadonnées.</li>
  <li><strong>Pertinence sémantique exacte</strong><br />Le LLM évalue si la page répond précisément à la question posée. Un contenu qui tourne autour du sujet sans jamais répondre directement sera ignoré au profit d'une page plus courte mais plus précise.</li>
  <li><strong>Structure extractible (chunking)</strong><br />Le LLM découpe le contenu en blocs (chunks) pour en extraire les passages pertinents. Des H2/H3 clairs, des paragraphes courts, des listes à puces et des tableaux facilitent cette extraction. Un mur de texte sans structure est un handicap direct.</li>
  <li><strong>Signaux E-E-A-T</strong><br />Auteur identifié avec une bio et un profil LinkedIn, sources primaires citées dans le texte, données propriétaires ou études de cas, date de mise à jour visible : ces éléments signalent au LLM que le contenu est fiable et citable. C'est la même logique que pour Google, mais avec un impact plus immédiat sur la sélection des sources dans Perplexity.</li>
</ol>

<h2>6 actions concrètes pour apparaître dans Perplexity</h2>

<p>Voici les six leviers actionnables, classés par ordre de priorité et d'impact.</p>

<h3>1. Ranker sur Bing pour vos mots-clés cibles</h3>

<p>C'est la condition sine qua non. <strong>Si vous n'êtes pas dans les premiers résultats Bing, Perplexity ne vous verra pas.</strong> Or, la plupart des équipes SEO françaises optimisent exclusivement pour Google et ignorent Bing - une erreur qui coûte de la visibilité sur tous les moteurs IA.</p>

<p>Actions immédiates :</p>

<ul>
  <li>Créer ou revendiquer votre compte <a href="https://www.bing.com/webmasters/" target="_blank" rel="noopener noreferrer nofollow">Bing Webmaster Tools</a>.</li>
  <li>Soumettre votre sitemap XML directement dans l'interface Bing.</li>
  <li>Vérifier votre positionnement Bing sur vos 10 mots-clés stratégiques.</li>
  <li>Corriger les erreurs d'exploration signalées par Bing Webmaster Tools.</li>
</ul>

<p>Bing et Google partagent de nombreux signaux (backlinks, vitesse, mobile-first), donc un bon SEO Google est une base solide. Mais Bing a ses propres nuances : il valorise davantage les <strong>signaux sociaux</strong> et les <strong>métadonnées explicites</strong> (balises meta description bien renseignées, données structurées).</p>

<h3>2. Autoriser PerplexityBot dans votre robots.txt</h3>

<p>Si votre <code>robots.txt</code> bloque les bots IA de façon générique (pratique courante depuis 2023), vous bloquez probablement PerplexityBot sans le savoir.</p>

<p>Vérifiez que votre fichier <code>robots.txt</code> contient bien :</p>

<pre><code>User-agent: PerplexityBot
Allow: /</code></pre>

<p>Et qu'il ne contient <em>pas</em> de règle générique bloquante du type :</p>

<pre><code>User-agent: *
Disallow: /</code></pre>

<p>Sans accès crawler, PerplexityBot ne peut pas lire votre contenu en temps réel. Vous dépendez alors uniquement de l'index Bing, qui peut être moins frais. Autoriser le bot, c'est donner à Perplexity la version la plus à jour de vos pages.</p>

<h3>3. Structurer le contenu pour l'extraction IA (chunking)</h3>

<p>Le LLM de Perplexity découpe votre page en blocs de sens avant de les évaluer. <strong>Un contenu mal structuré est un contenu non citable.</strong></p>

<p>Règles de structuration à appliquer :</p>

<ul>
  <li><strong>H2 et H3 descriptifs</strong> : chaque titre doit résumer le contenu de la section, pas l'annoncer vaguement.</li>
  <li><strong>Paragraphes ≤ 4 lignes</strong> : les blocs longs sont difficiles à chunker proprement.</li>
  <li><strong>Réponse directe en début de section</strong> : la première phrase après un H2 doit répondre à la question implicite du titre.</li>
  <li><strong>Listes à puces et tableaux</strong> : ils sont nativement extractibles et apparaissent souvent tels quels dans les réponses Perplexity.</li>
  <li><strong>Éviter les introductions génériques</strong> : "Dans cet article, nous allons voir…" est du bruit pour un LLM.</li>
</ul>

<p>Pour optimiser votre site pour les LLM de façon systématique, cette logique de chunking s'applique à tous les moteurs génératifs - pas seulement Perplexity.</p>

<h3>4. Optimiser pour les questions directes (AEO)</h3>

<p>Perplexity est utilisé pour répondre à des questions. Ses utilisateurs tapent "comment faire X", "quelle est la différence entre Y et Z", "quel est le meilleur outil pour…". Votre contenu doit <strong>anticiper ces formulations exactes</strong>.</p>

<p>Actions concrètes :</p>

<ul>
  <li>Intégrer des questions exactes en H2 ou H3 (ex. : "Comment fonctionne Perplexity AI ?").</li>
  <li>Répondre immédiatement sous le titre, en 2 à 3 phrases maximum.</li>
  <li>Ajouter une section FAQ structurée avec le schéma FAQPage de Schema.org.</li>
  <li>Utiliser des outils comme AnswerThePublic ou la fonctionnalité "People Also Ask" de Google pour identifier les questions réelles de votre audience.</li>
</ul>

<p>Cette approche - l'Answer Engine Optimization (AEO) - est au cœur du Generative Engine Optimization. Elle s'applique à Perplexity, mais aussi à Google AI Overviews, ChatGPT Search et Gemini.</p>

<h3>5. Renforcer les signaux E-E-A-T</h3>

<p>Le LLM évalue implicitement la crédibilité de la source. Un contenu anonyme, sans date, sans références, sera systématiquement défavorisé face à un contenu signé, sourcé et daté.</p>

<p>Checklist E-E-A-T pour Perplexity :</p>

<ul>
  <li><strong>Auteur identifié</strong> : nom complet, photo, bio courte, lien LinkedIn.</li>
  <li><strong>Date de publication et de mise à jour</strong> visible dans le HTML (balise <code>&lt;time&gt;</code> recommandée).</li>
  <li><strong>Sources primaires citées</strong> : études, rapports officiels, données chiffrées avec liens.</li>
  <li><strong>Données propriétaires</strong> : retours d'expérience, tests internes, cas clients - ce que personne d'autre ne peut reproduire.</li>
  <li><strong>Schéma Article</strong> avec les champs <code>author</code>, <code>datePublished</code> et <code>dateModified</code> renseignés.</li>
</ul>

<p>Ces signaux sont exactement les mêmes que ceux valorisés par Google depuis les mises à jour Helpful Content. Travailler l'E-E-A-T, c'est optimiser pour les deux écosystèmes simultanément.</p>

<h3>6. Maintenir la fraîcheur du contenu</h3>

<p>Perplexity est conçu pour donner des réponses actuelles. Son crawler cherche activement le contenu récent. <strong>Un article publié en 2022 et jamais retouché est un article invisible pour Perplexity</strong>, même s'il est excellent.</p>

<p>Stratégie de fraîcheur :</p>

<ul>
  <li>Identifier vos 10 à 20 pages stratégiques sur des sujets à forte requête IA.</li>
  <li>Planifier une mise à jour trimestrielle minimum : nouvelles données, exemples récents, sections ajoutées.</li>
  <li>Mettre à jour la balise <code>dateModified</code> dans le schéma Article à chaque révision substantielle.</li>
  <li>Afficher la date de dernière mise à jour de façon visible pour l'utilisateur <em>et</em> pour les crawlers.</li>
</ul>

<p>La fraîcheur est aussi un signal pour être cité par ChatGPT dans sa version Search - la logique est identique sur tous les moteurs IA à recherche temps réel.</p>

<h2>Checklist Perplexity SEO : 10 points à valider avant publication</h2>

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Critère</th>
      <th>À vérifier</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><strong>PerplexityBot autorisé</strong></td>
      <td>Le <code>robots.txt</code> ne bloque pas <code>PerplexityBot</code></td>
    </tr>
    <tr>
      <td>2</td>
      <td><strong>Ranking Bing vérifié</strong></td>
      <td>La page est indexée et positionnée sur Bing Webmaster Tools</td>
    </tr>
    <tr>
      <td>3</td>
      <td><strong>H2/H3 structurés et descriptifs</strong></td>
      <td>Chaque titre résume le contenu de la section</td>
    </tr>
    <tr>
      <td>4</td>
      <td><strong>Réponse directe en intro de section</strong></td>
      <td>La première phrase après chaque H2 répond directement à la question implicite</td>
    </tr>
    <tr>
      <td>5</td>
      <td><strong>FAQ schema implémenté</strong></td>
      <td>Le schéma <code>FAQPage</code> JSON-LD est présent et valide</td>
    </tr>
    <tr>
      <td>6</td>
      <td><strong>Auteur identifié</strong></td>
      <td>Nom, photo, bio et lien LinkedIn visibles sur la page</td>
    </tr>
    <tr>
      <td>7</td>
      <td><strong>Date visible et dans les métadonnées</strong></td>
      <td>Date de publication et de mise à jour dans le HTML et le schéma Article</td>
    </tr>
    <tr>
      <td>8</td>
      <td><strong>Sources primaires citées</strong></td>
      <td>Au moins 2 à 3 sources externes fiables avec lien dans le corps du texte</td>
    </tr>
    <tr>
      <td>9</td>
      <td><strong>Contenu &gt; 1 000 mots</strong></td>
      <td>La page offre une couverture suffisante pour être extractible sur plusieurs angles</td>
    </tr>
    <tr>
      <td>10</td>
      <td><strong>Mise à jour planifiée</strong></td>
      <td>Une révision trimestrielle est calendée dans votre outil de gestion de contenu</td>
    </tr>
  </tbody>
</table>

<h2>Comment mesurer sa visibilité sur Perplexity</h2>

<p><strong>Google Search Console ne couvre pas Perplexity.</strong> Les clics générés par une citation Perplexity n'apparaissent pas dans GSC - ils arrivent en trafic direct ou référent, selon la façon dont l'utilisateur clique sur la source.</p>

<p>Trois approches pour suivre votre visibilité sur ce moteur de recherche IA :</p>

<h3>Outils spécialisés</h3>

<ul>
  <li><a href="https://meteoria.ai/" target="_blank" rel="noopener noreferrer nofollow"><strong>Météoria</strong></a> (outil français) : suit la présence d'une marque ou d'un domaine dans les réponses de ChatGPT, Perplexity, Gemini et Claude via des prompts personnalisés interrogés quotidiennement.</li>
  <li><a href="https://www.peec.ai/" target="_blank" rel="noopener noreferrer nofollow"><strong>Peec AI</strong></a> : monitoring GEO orienté citations, sentiment et benchmark concurrentiel sur les principaux moteurs IA. La startup a levé 7 millions d'euros en 2025 pour accélérer sur ce marché.</li>
</ul>

<h3>Méthode de tracking manuel (5 étapes)</h3>

<ol>
  <li>Identifier 10 à 20 requêtes cibles que votre audience pose sur Perplexity.</li>
  <li>Ouvrir Perplexity en navigation privée (pour éviter la personnalisation).</li>
  <li>Taper chaque requête et noter si votre domaine apparaît dans les sources citées.</li>
  <li>Consigner les résultats dans un tableur avec la date, la requête et le rang de citation.</li>
  <li>Répéter l'opération toutes les 4 à 6 semaines pour détecter les évolutions.</li>
</ol>

<p>C'est chronophage, mais c'est la méthode la plus fiable pour comprendre <em>pourquoi</em> vous êtes cité (ou non) sur des requêtes précises - avant d'investir dans un outil automatisé.</p>

<h2>Perplexity SEO et GSO : la convergence inévitable</h2>

<p>Perplexity n'est pas le seul moteur IA à surveiller. ChatGPT Search, Google AI Overviews, Claude et Gemini suivent des logiques similaires : recherche web en temps réel, synthèse LLM, citation de sources. <strong>La discipline qui couvre l'ensemble de ces moteurs s'appelle le GSO - Generative Search Optimization.</strong></p>

<p>L'approche est cohérente sur tous ces canaux :</p>

<ul>
  <li>Un SEO solide (Google + Bing) comme fondation.</li>
  <li>Des signaux de citabilité IA (structure, E-E-A-T, fraîcheur) comme couche additionnelle.</li>
  <li>Un monitoring dédié pour mesurer la visibilité réelle sur chaque moteur.</li>
</ul>

<p>Perplexity est aujourd'hui le moteur IA le plus "pur" dans cette logique - il cite systématiquement ses sources, ce qui en fait un terrain d'apprentissage idéal pour tester votre stratégie GSO avant de l'étendre aux autres plateformes.</p>

<h2>FAQ - Perplexity SEO</h2>

<h3>Perplexity utilise-t-il Google ou Bing pour ses résultats ?</h3>
<p>Perplexity utilise principalement <strong>l'API Bing</strong> pour récupérer ses résultats de recherche, et non l'index Google. Il dispose également de son propre crawler, <strong>PerplexityBot</strong>, qui visite les pages en temps réel pour en extraire le contenu frais. Pour apparaître dans Perplexity, il faut donc être bien positionné sur Bing - et non uniquement sur Google.</p>

<h3>Faut-il créer du contenu spécifique pour Perplexity ?</h3>
<p>Non. Il n'existe pas de format "Perplexity-only". Le contenu qui performe sur Perplexity est le même qui performe sur Google et Bing : bien structuré, répondant directement aux questions, signé par un auteur crédible et régulièrement mis à jour. L'adaptation porte sur la <strong>structure extractible</strong> (chunking, H2/H3 descriptifs, réponses directes) et les <strong>signaux E-E-A-T</strong>, pas sur un format propriétaire.</p>

<h3>Combien de temps faut-il pour apparaître dans Perplexity ?</h3>
<p>Il n'y a pas de délai fixe. Si votre page est déjà bien positionnée sur Bing et que PerplexityBot peut la crawler, elle peut apparaître dans les réponses Perplexity dès la prochaine visite du bot - parfois en quelques jours après une mise à jour. Pour les sites peu connus de Bing, le délai est celui du SEO classique : plusieurs semaines à plusieurs mois selon l'autorité du domaine.</p>

<h3>Perplexity peut-il crawler mon site si je bloque les bots IA ?</h3>
<p>Si votre <code>robots.txt</code> bloque explicitement <code>PerplexityBot</code>, le crawler officiel respectera cette directive et ne visitera pas vos pages. Vous dépendrez alors uniquement de l'index Bing pour apparaître dans les réponses. À noter : Cloudflare a documenté des cas où Perplexity aurait utilisé des crawlers non déclarés - mais la pratique recommandée reste d'autoriser explicitement PerplexityBot pour maximiser votre visibilité.</p>

<h3>Quelle différence entre SEO Perplexity et SEO ChatGPT ?</h3>
<p>Les deux moteurs s'appuient sur une recherche web en temps réel, mais leurs sources d'indexation diffèrent. ChatGPT Search utilise principalement <strong>Bing</strong> via un partenariat Microsoft. Perplexity combine Bing et son propre crawler. Les signaux de citabilité sont identiques (structure, E-E-A-T, fraîcheur), mais Perplexity cite ses sources de façon systématique et visible - ce qui en fait un canal plus facilement mesurable. La stratégie d'optimisation est la même pour les deux.</p>

<h2>Sources utiles</h2>

<ul>
  <li><a href="https://techcrunch.com/2025/06/05/perplexity-received-780-million-queries-last-month-ceo-says/" target="_blank" rel="noopener noreferrer nofollow">TechCrunch - Perplexity received 780 million queries last month, CEO says (juin 2025)</a></li>
  <li><a href="https://www.bing.com/webmasters/" target="_blank" rel="noopener noreferrer nofollow">Bing Webmaster Tools - Tableau de bord officiel</a></li>
  <li><a href="https://search.google.com/search-console/" target="_blank" rel="noopener noreferrer nofollow">Google Search Console - Documentation officielle</a></li>
  <li><a href="https://schema.org/FAQPage" target="_blank" rel="noopener noreferrer nofollow">Schema.org - FAQPage structured data</a></li>
  <li><a href="https://www.perplexity.ai/hub" target="_blank" rel="noopener noreferrer nofollow">Perplexity AI Hub - Blog et annonces officielles</a></li>
  <li><a href="https://firstpagesage.com/reports/top-generative-ai-chatbots/" target="_blank" rel="noopener noreferrer nofollow">First Page Sage - Top Generative AI Chatbots Market Share (2026)</a></li>
  <li><a href="https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/" target="_blank" rel="noopener noreferrer nofollow">Cloudflare Blog - Perplexity and undeclared crawlers</a></li>
</ul>
  ` }} />

            {/* Author Block */}
            <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 max-w-4xl mx-auto not-prose">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">À propos de l'auteure</h3>
                <div className="font-bold text-slate-900 text-xl mb-1">Camille Rousseau</div>
                <div className="text-sm text-blue-600 font-mono mb-4">Consultante Senior GEO/SEO chez Triaina</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Experte en stratégies d'acquisition hybrides. Camille accompagne les marques dans l'optimisation de leur visibilité sur les moteurs de recherche traditionnels (SEO) et les interfaces d'IA génératives (GSO).
                </p>
                <a href="https://www.linkedin.com/in/camille-rousseau-a44488413/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">
                    Voir son profil LinkedIn
                </a>
            </div>
          </div>
                </article>

        {/* Share / Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-mono text-slate-500">
                Partager cet article
            </div>
            <div className="flex gap-4">
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Share2 size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
