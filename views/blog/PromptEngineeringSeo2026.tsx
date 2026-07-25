import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const PromptEngineeringSeo2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'prompt-engineering-seo');

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
  <p><strong>TL;DR - Ce qu'il faut retenir en 30 secondes</strong></p>
  <ul>
    <li>Le <strong>prompt engineering pour le SEO</strong> n'est pas une liste de prompts magiques : c'est un <strong>système</strong> composé de rôle, contexte, contraintes et format de sortie.</li>
    <li>Bien structurés, vos prompts réduisent le temps de production de contenu de <strong>50 à 80 %</strong> et le temps d'édition de <strong>60 à 70 %</strong> (données 2025).</li>
    <li>Les 5 erreurs les plus fréquentes : prompt trop vague, absence de contexte, pas de format de sortie, zéro contrainte, et oublier l'intention de recherche.</li>
    <li>Le lien entre prompt engineering et <strong>GSO/GEO</strong> est direct : un contenu bien structuré par un bon prompt est aussi plus facilement cité par les IA génératives.</li>
    <li>Les outils pour industrialiser : <strong>Notion</strong> (bibliothèque), <strong>LangChain</strong> (orchestration), <strong>Make/n8n</strong> (automatisation), API OpenAI/Anthropic/Google.</li>
  </ul>
</blockquote>

<p>La plupart des SEOs utilisent l'IA comme un moteur de recherche amélioré. Ils tapent une question, récupèrent une réponse approximative, corrigent à la main. Résultat : l'IA leur fait perdre autant de temps qu'elle en fait gagner.</p>

<p>Le <strong>prompt engineering pour le SEO</strong> change ça. Pas en trouvant le prompt parfait, mais en construisant un <em>système</em> de prompts reproductibles, versionnés et mesurables. Ce guide vous montre exactement comment.</p>

<h2>Qu'est-ce que le prompt engineering appliqué au SEO ?</h2>

<p><strong>Définition :</strong> Le prompt engineering SEO est la discipline qui consiste à concevoir des instructions structurées pour guider un LLM (Large Language Model) vers des livrables SEO précis, fiables et réutilisables - briefs, balises title, méta descriptions, clusters de mots-clés, FAQ, données structurées.</p>

<p>Ce n'est pas "écrire une meilleure question à ChatGPT". C'est construire un protocole d'instruction qui transforme un LLM généraliste en assistant SEO spécialisé.</p>

<h3>LLM : calculateur probabiliste, pas un expert humain</h3>

<p>Un LLM comme GPT-4o, Claude 3.5 Sonnet ou Gemini 1.5 Pro ne "comprend" pas le SEO. Il prédit le token le plus probable à chaque étape, en fonction de son entraînement et de votre prompt.</p>

<p>Conséquence directe : <strong>la qualité de votre output dépend à 80 % de la qualité de votre input.</strong> Un prompt vague produit une réponse vague. Un prompt structuré produit un livrable utilisable.</p>

<p>Trois comportements à connaître :</p>
<ul>
  <li><strong>Hallucination :</strong> le modèle invente des faits (volumes de recherche, URLs, statistiques) avec une confiance totale. Vérifiez toujours.</li>
  <li><strong>Sycophance :</strong> le modèle valide vos hypothèses même fausses si vous les formulez comme des affirmations.</li>
  <li><strong>Dérive de contexte :</strong> sur de longues conversations, le modèle "oublie" les contraintes initiales. Réinjectez le contexte régulièrement.</li>
</ul>

<h3>Pourquoi le prompt engineering change la donne pour les SEOs</h3>

<p>Les chiffres sont clairs. En 2025, des équipes SEO bien équipées en prompts structurés ont observé :</p>

<table>
  <thead>
    <tr>
      <th>Tâche SEO</th>
      <th>Gain de temps estimé</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Production de contenu</td>
      <td>50–80 %</td>
      <td>GenesysGrowth, 2025</td>
    </tr>
    <tr>
      <td>Édition et révision</td>
      <td>60–70 %</td>
      <td>GenesysGrowth, 2025</td>
    </tr>
    <tr>
      <td>Génération de briefs</td>
      <td>~40 %</td>
      <td>Estimations terrain</td>
    </tr>
    <tr>
      <td>Précision (few-shot vs zero-shot)</td>
      <td>+25–40 %</td>
      <td>SQMagazine, 2025</td>
    </tr>
  </tbody>
</table>

<p>Ces gains ne tombent pas du ciel. Ils supposent des prompts versionnés, testés et adaptés à chaque outil.</p>

<h2>Les 5 erreurs de prompt qui sabotent vos résultats SEO</h2>

<p>Avant de construire de bons prompts, identifiez ce qui fait rater les mauvais.</p>

<ol>
  <li>
    <strong>Prompt trop vague.</strong> "Écris un article SEO sur le café" ne donne aucune contrainte au modèle. Il produit du contenu générique, sans angle, sans structure utile.
  </li>
  <li>
    <strong>Absence de contexte métier.</strong> Le LLM ne sait pas que vous ciblez des restaurateurs parisiens B2B avec un budget moyen de 500 €/mois. Sans ce contexte, il écrit pour tout le monde - donc pour personne.
  </li>
  <li>
    <strong>Pas de format de sortie défini.</strong> Si vous ne précisez pas "retourne un tableau JSON avec 3 colonnes", vous obtenez du texte libre que vous devrez reformater à la main.
  </li>
  <li>
    <strong>Zéro contrainte de longueur ou de ton.</strong> "Rédige une méta description" peut produire 300 caractères ou 50. Précisez : "155 caractères maximum, ton direct, mot-clé principal en début de phrase".
  </li>
  <li>
    <strong>Oublier l'intention de recherche.</strong> Un prompt SEO sans mention de l'intent (informationnelle, commerciale, transactionnelle) produit un contenu qui ne répond pas à ce que l'utilisateur cherche réellement.
  </li>
</ol>

<blockquote>
  <p><strong>Règle d'or :</strong> un prompt SEO sans rôle, sans contexte, sans contrainte et sans format de sortie n'est pas un prompt - c'est une question posée à un inconnu.</p>
</blockquote>

<h2>Anatomie d'un prompt SEO efficace</h2>

<p>Un bon <strong>prompt SEO IA</strong> n'est pas une phrase. C'est une structure en 4 composantes qui s'enchaînent logiquement.</p>

<h3>Les 4 composantes d'un bon prompt SEO</h3>

<table>
  <thead>
    <tr>
      <th>Composante</th>
      <th>Rôle</th>
      <th>Exemple concret</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rôle</strong></td>
      <td>Calibre le registre et l'expertise du modèle</td>
      <td>"Tu es expert SEO avec 10 ans d'expérience en e-commerce B2C français."</td>
    </tr>
    <tr>
      <td><strong>Contexte</strong></td>
      <td>Donne les informations que le modèle ne peut pas deviner</td>
      <td>"La page cible des acheteurs de logiciels RH en PME (50–200 salariés). Intent : commerciale."</td>
    </tr>
    <tr>
      <td><strong>Contraintes</strong></td>
      <td>Définit les limites à ne pas dépasser</td>
      <td>"Max 155 caractères. Pas de majuscules inutiles. Mot-clé principal en début de phrase."</td>
    </tr>
    <tr>
      <td><strong>Format de sortie</strong></td>
      <td>Rend l'output directement utilisable</td>
      <td>"Retourne 3 variantes numérotées dans un bloc de code."</td>
    </tr>
  </tbody>
</table>

<p>Pour les modèles comme <strong>Claude</strong>, vous pouvez encapsuler ces composantes dans des balises XML (<code>&lt;role&gt;</code>, <code>&lt;context&gt;</code>, <code>&lt;constraints&gt;</code>, <code>&lt;output&gt;</code>) pour une clarté maximale. <strong>Gemini</strong> répond mieux à une structure hiérarchique (objectif global → sous-sections → détails). <strong>ChatGPT</strong> préfère des contraintes numériques explicites ("3 options", "sous 120 mots").</p>

<h3>Exemple de prompt SEO complet annoté</h3>

<pre><code>[RÔLE]
Tu es expert SEO copywriter spécialisé dans le SaaS B2B français.

[CONTEXTE]
Page : fiche produit d'un logiciel de gestion de congés.
Audience : DRH de PME (50-200 salariés), France.
Intention de recherche : commerciale (l'utilisateur compare des solutions).
Mot-clé principal : "logiciel gestion congés PME"
Mots-clés secondaires : "suivi absences", "planning RH automatisé"

[CONTRAINTES]
- Title : 55-60 caractères, mot-clé principal en début
- Méta description : 145-155 caractères, appel à l'action en fin
- Ton : professionnel, direct, sans jargon technique
- Ne pas mentionner de prix

[FORMAT DE SORTIE]
Retourne un bloc JSON structuré ainsi :
{
  "title": "...",
  "meta_description": "...",
  "h1_suggestion": "..."
}</code></pre>

<p>Ce prompt produit un output directement intégrable dans votre CMS. Pas de reformatage, pas de copier-coller approximatif.</p>

<h2>7 cas d'usage concrets avec prompts prêts à l'emploi</h2>

<p>Voici les 7 cas d'usage les plus rentables du <strong>prompt engineering SEO guide</strong> en pratique, avec un prompt opérationnel pour chacun.</p>

<h3>1. Recherche de mots-clés et clustering</h3>

<p><strong>Objectif :</strong> générer un cluster sémantique autour d'un mot-clé principal, avec intention de recherche associée.</p>

<pre><code>Tu es expert en stratégie de contenu SEO.
Génère un cluster sémantique pour le mot-clé principal : "[MOT-CLÉ]".
Pour chaque mot-clé secondaire, indique :
1. L'intention de recherche (informationnelle / commerciale / transactionnelle / navigationnelle)
2. Le type de contenu recommandé (article de blog / page produit / landing page / FAQ)
3. Le niveau de concurrence estimé (faible / moyen / élevé)
Retourne un tableau avec 4 colonnes : Mot-clé | Intention | Type de contenu | Concurrence.
Limite : 20 mots-clés maximum.</code></pre>

<p><strong>Outil recommandé :</strong> ChatGPT-4o ou Perplexity (pour les données actualisées). Croisez toujours avec Google Search Console ou Semrush pour valider les volumes.</p>

<h3>2. Génération de briefs SEO</h3>

<p><strong>Objectif :</strong> produire un brief rédactionnel complet en quelques minutes. C'est l'un des cas d'usage les plus rentables des <strong>briefs SEO avec IA</strong>.</p>

<pre><code>Tu es stratège SEO senior.
Génère un brief rédactionnel complet pour un article ciblant : "[MOT-CLÉ PRINCIPAL]".
Le brief doit inclure :
- Angle éditorial différenciant (pas le même que les 3 premiers résultats Google)
- Structure H2/H3 recommandée (8-10 sections)
- Intention de recherche principale et secondaires
- 5 entités sémantiques à mentionner obligatoirement
- Questions PAA (People Also Ask) à traiter
- Longueur cible : [X] mots
- Ton : [professionnel / conversationnel / expert]
- 3 sources externes de référence à citer
Format : markdown structuré.</code></pre>

<h3>3. Optimisation de balises title et méta description</h3>

<p>Les <strong>méta descriptions IA</strong> sont l'un des quick wins les plus immédiats. Un bon prompt produit 3 variantes testables en A/B.</p>

<pre><code>Tu es expert SEO copywriter.
Optimise les balises pour la page suivante :
- URL : [URL]
- Sujet : [SUJET]
- Mot-clé principal : [MOT-CLÉ]
- Audience : [PERSONA]
- Intention : [informationnelle / commerciale / transactionnelle]

Contraintes title :
- 55-60 caractères
- Mot-clé principal en début
- Pas de | ou : en début de titre

Contraintes méta description :
- 145-155 caractères
- Appel à l'action en fin
- Inclure un bénéfice concret

Retourne 3 variantes de chaque dans un tableau.</code></pre>

<h3>4. Génération de FAQ et données structurées</h3>

<p>La <strong>FAQ SEO générée par IA</strong> est particulièrement puissante pour les rich snippets et pour le GSO. Voici comment générer FAQ + <strong>structured data SEO</strong> en une seule passe.</p>

<pre><code>Tu es expert SEO et développeur schema.org.
Pour la page sur "[SUJET]", génère :
1. Une FAQ de 6 questions/réponses couvrant l'intention informationnelle et commerciale.
   - Chaque réponse doit être auto-suffisante (pas de "comme mentionné ci-dessus").
   - Longueur de réponse : 40-80 mots.
2. Le JSON-LD FAQPage correspondant, valide selon schema.org.

Format de sortie :
- D'abord la FAQ en markdown
- Puis le bloc JSON-LD dans une balise &lt;script type="application/ld+json"&gt;</code></pre>

<p>Validez toujours le JSON-LD généré avec le Riche Results Test de Google avant publication.</p>

<h3>5. Rédaction de contenu E-E-A-T</h3>

<p>L'IA seule ne produit pas de contenu E-E-A-T. Mais un prompt bien construit force le modèle à structurer le contenu pour que <em>vous</em> puissiez y injecter l'expertise réelle.</p>

<pre><code>Tu es rédacteur SEO expert en [DOMAINE].
Rédige une section de 300 mots sur "[SUJET]" pour une audience [PERSONA].
Contraintes E-E-A-T :
- Commence par une définition extractible en 1-2 phrases
- Inclure au moins 1 exemple concret avec chiffre ou date
- Mentionner 1 limite ou mise en garde (crédibilité)
- Terminer par un takeaway actionnable en gras
- Ton : expert mais accessible, pas de jargon inutile
[PLACEHOLDER : insérez ici votre anecdote ou donnée propriétaire]</code></pre>

<p>Le placeholder vous rappelle d'injecter ce que l'IA ne peut pas inventer : votre expérience terrain, vos données clients, vos cas réels.</p>

<h3>6. Audit de maillage interne</h3>

<pre><code>Tu es expert SEO technique.
Voici une liste de 20 URLs de mon site avec leur titre H1 :
[LISTE D'URLs ET H1]

Analyse les opportunités de maillage interne :
1. Identifie les clusters thématiques naturels
2. Pour chaque URL, suggère 2-3 pages à lier (avec ancre recommandée)
3. Signale les pages orphelines potentielles
4. Priorise par impact SEO estimé (fort / moyen / faible)
Retourne un tableau : URL source | URL cible | Ancre suggérée | Priorité</code></pre>

<h3>7. Prompt engineering pour le GSO/GEO (être cité par les IA)</h3>

<p>C'est le cas d'usage que la plupart des guides ignorent. Voici le principe : <strong>les IA génératives citent préférentiellement les contenus qui ressemblent à ce qu'elles produiraient elles-mêmes</strong> - c'est-à-dire des réponses structurées, factuelles, avec définitions claires et listes numérotées.</p>

<pre><code>Tu es expert en Generative Search Optimization (GSO).
Réécris la section suivante pour maximiser les chances d'être cité par ChatGPT, Gemini ou Perplexity :
[SECTION EXISTANTE]

Critères de réécriture :
- Commence par une définition en 1-2 phrases (extractible par les IA)
- Utilise des listes numérotées ou à puces pour les points clés
- Ajoute un blockquote avec le takeaway principal
- Inclure des chiffres ou dates précis (les IA citent les données chiffrées)
- Chaque paragraphe doit être auto-suffisant (pas de référence à "ci-dessus")
- Longueur : [X] mots maximum</code></pre>

<h2>Prompt engineering et GSO : le lien que peu d'agences expliquent</h2>

<p>Voici l'insight que la plupart des guides de <strong>prompt SEO IA</strong> ne font pas :</p>

<blockquote>
  <p><strong>Un bon prompt SEO et un bon contenu GSO suivent exactement la même logique structurelle.</strong> Dans les deux cas, vous guidez une IA vers une réponse précise, extractible et vérifiable.</p>
</blockquote>

<p>Quand vous rédigez un prompt avec une définition claire, des listes numérotées et un format de sortie explicite, vous entraînez votre cerveau à produire du contenu que les IA génératives peuvent citer. Ce n'est pas un hasard : <strong>les LLM citent ce qui ressemble à leurs propres outputs</strong>.</p>

<p>Le lien entre <strong>AEO prompt engineering</strong> et GSO se joue sur 3 niveaux :</p>

<ol>
  <li><strong>Structure extractible :</strong> définitions en tête de section, listes numérotées, tableaux - exactement ce que vous mettez dans vos prompts SEO.</li>
  <li><strong>Données structurées (structured data SEO) :</strong> le JSON-LD FAQPage et Article Schema aident les crawlers des IA à comprendre le type de contenu et son autorité.</li>
  <li><strong>Précision factuelle :</strong> les IA génératives préfèrent citer des sources avec chiffres précis, dates et entités nommées - les mêmes éléments que vous devez injecter dans vos prompts pour éviter les hallucinations.</li>
</ol>

<p>En pratique, chez Triaina, nous appelons ça le <em>double effet prompt</em> : un prompt bien conçu produit un livrable SEO de qualité <em>et</em> structure votre pensée éditoriale pour le GSO.</p>

<h2>Les outils pour industrialiser vos prompts SEO</h2>

<p>Un prompt qui vit dans un fichier texte n'est pas un actif. Un prompt versionné, testé et partagé dans un système, si.</p>

<table>
  <thead>
    <tr>
      <th>Outil</th>
      <th>Rôle dans le workflow</th>
      <th>Cas d'usage SEO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Notion</strong></td>
      <td>Bibliothèque et versioning des prompts</td>
      <td>Base de données avec champs : type, intent, mot-clé, score qualité, statut test/prod</td>
    </tr>
    <tr>
      <td><strong>LangChain / LangGraph</strong></td>
      <td>Orchestration agentique multi-étapes</td>
      <td>Pipeline : recherche SERP → extraction concurrents → génération outline → export CMS</td>
    </tr>
    <tr>
      <td><strong>Make / n8n</strong></td>
      <td>Automatisation sans code</td>
      <td>Déclenchement automatique de prompts sur nouvelles URLs ou nouveaux mots-clés</td>
    </tr>
    <tr>
      <td><strong>API OpenAI / Anthropic / Google</strong></td>
      <td>Production à fort volume</td>
      <td>Génération en batch de méta descriptions, FAQ, balises title</td>
    </tr>
    <tr>
      <td><strong>PromptBase</strong></td>
      <td>Catalogue de prompts réutilisables</td>
      <td>Distribution et standardisation des prompts entre équipes</td>
    </tr>
    <tr>
      <td><strong>Perplexity</strong></td>
      <td>Recherche avec citations</td>
      <td>Vérification factuelle des outputs IA, sourcing de données récentes</td>
    </tr>
  </tbody>
</table>

<p><strong>Conseil pratique :</strong> commencez par Notion pour structurer votre bibliothèque de prompts. Versionnez chaque prompt (v1, v2…) et notez le score qualité de l'output sur 5. Vous aurez des données pour améliorer vos prompts en continu - exactement comme vous A/B testez vos balises title.</p>

<h2>Mesurer l'impact de vos prompts sur le SEO</h2>

<p>Un prompt SEO sans mesure est une hypothèse. Voici comment transformer vos expérimentations en données actionnables.</p>

<p><strong>Les KPIs à suivre dans Google Search Console :</strong></p>

<ul>
  <li><strong>CTR (taux de clic) :</strong> indicateur direct de l'efficacité de vos balises title et méta descriptions générées par IA. Comparez avant/après sur les mêmes requêtes.</li>
  <li><strong>Impressions :</strong> si elles montent mais que le CTR baisse, le problème est l'attractivité du snippet, pas la visibilité.</li>
  <li><strong>Position moyenne :</strong> évitez de confondre gain de CTR et gain de rang. Isolez les deux métriques.</li>
  <li><strong>Requêtes en positions 4–15 :</strong> c'est là que l'optimisation des snippets a le plus d'impact immédiat.</li>
</ul>

<p><strong>Méthode de mesure propre :</strong></p>

<ol>
  <li>Sélectionnez un lot de 20–30 pages avec fort volume d'impressions et CTR inférieur à la moyenne de votre secteur.</li>
  <li>Générez de nouvelles balises avec vos prompts optimisés. Déployez-les.</li>
  <li>Attendez 4 semaines minimum (cycle d'indexation + données Search Console).</li>
  <li>Comparez CTR et clics sur la même fenêtre temporelle N-1, à impressions comparables.</li>
  <li>Notez le prompt utilisé dans votre bibliothèque Notion avec le delta de performance.</li>
</ol>

<p><strong>Attention :</strong> en 2025-2026, les AI Overviews de Google peuvent faire baisser le CTR organique sur certaines requêtes informationnelles, indépendamment de la qualité de vos snippets. Si vos méta descriptions s'améliorent mais que le CTR stagne, vérifiez si un AIO est présent sur la requête avant de conclure à l'échec du prompt.</p>

<p>Pour le <strong>GSO</strong>, la mesure est différente : testez manuellement vos requêtes cibles dans ChatGPT, Perplexity et Gemini. Votre contenu est-il cité ? Paraphrasé ? Ignoré ? Documentez ces résultats dans votre bibliothèque de prompts.</p>
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
