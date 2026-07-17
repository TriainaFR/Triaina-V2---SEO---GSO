import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const SchemaOrgGso2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'schema-org-donnees-structurees-gso-2026');

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
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
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

        <article className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative">
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
<blockquote><p><strong>TL;DR</strong></p><ul><li>Les <strong>données structurées</strong> (Schema.org en JSON-LD) sont le signal machine le plus direct pour aider les moteurs génératifs à comprendre, vérifier et citer votre contenu.</li><li>Pour le <strong>GSO</strong> (Generative Search Optimization), les types prioritaires sont : <code>Organization</code>, <code>Article</code>, <code>FAQPage</code>, <code>HowTo</code>, <code>Person</code> et <code>BreadcrumbList</code>.</li><li>Le <strong>JSON-LD</strong> est le format recommandé par Google - plus facile à maintenir que Microdata ou RDFa, et préféré par les crawlers IA.</li><li>Un schema mal rempli ou incohérent avec le contenu visible est pire qu'aucun schema : il génère de la méfiance côté moteurs.</li><li>Validez systématiquement avec <strong>Google Rich Results Test</strong> et <strong>Schema Markup Validator</strong> avant toute mise en production.</li></ul></blockquote><h2>Qu'est-ce que les données structurées et pourquoi elles comptent pour le GSO ?</h2><p>Les <strong>données structurées</strong> ne sont plus un simple bonus pour décrocher des rich snippets. En 2026, elles sont devenues un pilier du <strong>GSO</strong> - la <strong>generative search optimization</strong> - c'est-à-dire l'art d'être cité et recommandé par ChatGPT, Perplexity, Google AI Overviews ou Gemini.</p><p>Ce guide couvre tout : définitions, mécanismes d'extraction IA, types <strong>schema markup</strong> prioritaires, exemples JSON-LD prêts à copier-coller, erreurs critiques à éviter et méthodes de validation. Aucun prérequis particulier, mais une connaissance de base du HTML est utile.</p><p>Les <strong>données structurées</strong> sont un balisage ajouté au code HTML d'une page pour décrire explicitement son contenu aux machines. Plutôt que de laisser un moteur "deviner" ce qu'est une page, vous lui dites directement : "ceci est un article, écrit par cette personne, publié le 1er juin 2026, sur ce sujet."</p><p><strong>Schema.org</strong> est le vocabulaire standard partagé par Google, Bing, Yahoo et Yandex depuis 2011. Il définit des centaines de types (<code>Article</code>, <code>Product</code>, <code>Person</code>, <code>LocalBusiness</code>…) et leurs propriétés associées.</p><h3>JSON-LD vs Microdata vs RDFa : lequel choisir ?</h3><p>Trois formats coexistent pour implémenter Schema.org :</p><ul><li><strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data) : bloc <code>&lt;script&gt;</code> séparé du HTML visible. <strong>Format recommandé par Google</strong>, le plus simple à maintenir et à déboguer.</li><li><strong>Microdata</strong> : attributs directement dans les balises HTML (<code>itemscope</code>, <code>itemprop</code>). Plus verbeux, couplé au DOM, difficile à modifier sans toucher au contenu.</li><li><strong>RDFa</strong> : attributs HTML similaires à Microdata, issu du W3C. Utilisé surtout dans des contextes académiques ou gouvernementaux.</li></ul><p><strong>En pratique : utilisez JSON-LD.</strong> Toujours. C'est le seul format que vous pouvez modifier sans risquer de casser le rendu visuel de la page.</p><h3>Pourquoi les LLMs et moteurs génératifs s'appuient dessus</h3><p>Les moteurs génératifs - ChatGPT (via Bing/SearchGPT), Perplexity, Google AI Overviews - crawlent le web et indexent des milliards de pages. Quand ils génèrent une réponse, ils sélectionnent des sources fiables et extractibles.</p><p>Les <strong>données structurées</strong> leur facilitent trois choses :</p><ul><li><strong>Identification de l'entité</strong> : qui a écrit ce contenu, quelle organisation le publie, est-ce une source vérifiable ?</li><li><strong>Extraction de faits précis</strong> : date de publication, auteur, questions/réponses, étapes d'un tutoriel - tout ce qui peut être cité directement dans une réponse IA.</li><li><strong>Résolution d'ambiguïté</strong> : via <code>sameAs</code> et <code>@id</code>, le moteur sait que "Triaina" et "triaina.fr" désignent la même entité.</li></ul><p>Les LLMs ne "parsent" pas le JSON-LD comme un moteur classique. Mais ils traitent le HTML rendu - et un JSON-LD dense en faits explicites contribue à la richesse sémantique de la page, ce qui augmente la probabilité d'extraction.</p><h2>Comment les moteurs génératifs (ChatGPT, Perplexity, Gemini) utilisent les données structurées</h2><p>Comprendre le mécanisme d'extraction, c'est comprendre pourquoi le schema markup change la donne pour le <strong>GSO</strong>.</p><h3>Mécanisme d'extraction et de citation</h3><p>Quand Perplexity ou Google AI Overviews génère une réponse à une requête, le pipeline ressemble à ceci :</p><ol><li><strong>Crawl et indexation</strong> : le contenu HTML (y compris les blocs JSON-LD) est ingéré.</li><li><strong>Scoring de pertinence et de fiabilité</strong> : la page est évaluée sur sa pertinence thématique, son autorité, sa fraîcheur et la clarté de ses entités.</li><li><strong>Extraction de passages</strong> : des fragments de texte (et parfois des données structurées) sont extraits pour construire la réponse.</li><li><strong>Attribution de source</strong> : la page est citée si elle est jugée suffisamment fiable et si son contenu correspond précisément à la requête.</li></ol><p>Les données structurées interviennent aux étapes 2 et 3 : elles renforcent le signal de fiabilité et facilitent l'extraction de passages précis.</p><h3>Lien direct entre structured data et probabilité de citation IA</h3><p>Soyons directs : <strong>le schema markup seul ne garantit pas d'être cité par une IA</strong>. Plusieurs études (dont une relayée par Ahrefs en 2025) montrent qu'il n'y a pas d'effet systématique et isolable du schema sur les citations LLM.</p><p>En revanche, le schema markup fait partie d'un ensemble de signaux qui, combinés, augmentent la probabilité de citation :</p><ul><li>Contenu de qualité + <strong>données structurées cohérentes</strong> = meilleure extractibilité</li><li><strong>Person schema</strong> + profils vérifiables = signal E-E-A-T fort</li><li><strong>FAQPage</strong> + questions/réponses explicites = format idéal pour les réponses IA</li><li><strong>Organization schema</strong> + <code>sameAs</code> = entité identifiable dans le knowledge graph</li></ul><p>La <strong>structured database</strong> que constituent vos pages balisées devient, en quelque sorte, une source de données que les IA peuvent interroger avec confiance.</p><h2>Les types Schema.org prioritaires pour le GSO en 2026</h2><p>Tous les types Schema.org ne se valent pas pour le GSO. Voici les 9 types à prioriser, avec leur cas d'usage et leur impact estimé sur la visibilité IA.</p>
<div class="overflow-x-auto"><table class="min-w-full text-left text-sm font-light"><thead class="border-b font-medium dark:border-neutral-500"><tr><th class="px-6 py-4"><p>Type Schema.org</p></th><th class="px-6 py-4"><p>Cas d'usage GSO principal</p></th><th class="px-6 py-4"><p>Impact IA estimé</p></th></tr></thead><tbody><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>Organization</strong></td><td class="px-6 py-4"><p>Identifier l'entité éditrice, établir la confiance</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐⭐ Fondamental</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>Article / BlogPosting</strong></td><td class="px-6 py-4"><p>Contenu éditorial, articles de blog, guides</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐⭐ Fondamental</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>FAQPage</strong></td><td class="px-6 py-4"><p>Questions/réponses directement extractibles par les IA</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐⭐ Très fort</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>HowTo</strong></td><td class="px-6 py-4"><p>Tutoriels, guides pas à pas, procédures</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐ Fort</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>Person</strong></td><td class="px-6 py-4"><p>Crédibilité auteur, signal E-E-A-T</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐ Fort</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>LocalBusiness</strong></td><td class="px-6 py-4"><p>Visibilité locale, requêtes géolocalisées</p></td><td class="px-6 py-4"><p>⭐⭐⭐⭐ Fort (local)</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>Product / Service</strong></td><td class="px-6 py-4"><p>Pages offre, comparatifs, fiches produit</p></td><td class="px-6 py-4"><p>⭐⭐⭐ Moyen-fort</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>BreadcrumbList</strong></td><td class="px-6 py-4"><p>Contexte de navigation, architecture du site</p></td><td class="px-6 py-4"><p>⭐⭐⭐ Moyen</p></td></tr><tr class="border-b dark:border-neutral-500"><td class="px-6 py-4"><strong>Service</strong></td><td class="px-6 py-4"><p>Description des prestations d'une agence ou entreprise</p></td><td class="px-6 py-4"><p>⭐⭐⭐ Moyen</p></td></tr></tbody></table></div>
<p><strong>Règle d'or</strong> : n'ajoutez un type que si le contenu de la page correspond réellement à ce type. Un <code>FAQPage</code> sur une page qui ne contient pas de vraies questions/réponses est une erreur de markup - pas un avantage.</p><h2>Implémenter Schema.org pour le GSO : guide pas à pas</h2><p>Voici les exemples de code JSON-LD prêts à l'emploi. Adaptez les valeurs à votre situation réelle.</p><h3>JSON-LD : structure de base</h3><p>Tout bloc JSON-LD s'insère dans une balise <code>&lt;script&gt;</code> de type <code>application/ld+json</code>. Il peut être placé dans le <code>&lt;head&gt;</code> ou dans le <code>&lt;body&gt;</code> - Google lit les deux. <strong>Préférez le </strong><code>&lt;head&gt;</code>.</p>
<pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "TypeSchema",
  "propriété": "valeur"
}
&lt;/script&gt;</code></pre>
<p>Pour plusieurs entités liées sur une même page, utilisez <code>@graph</code> plutôt que plusieurs blocs séparés :</p>
<pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "Article", ... }
  ]
}
&lt;/script&gt;</code></pre>
<h3>Placement dans le &lt;head&gt; vs &lt;body&gt;</h3><p>Google lit le JSON-LD qu'il soit dans le <code>&lt;head&gt;</code> ou le <code>&lt;body&gt;</code>. Cela dit :</p><ul><li><code>&lt;head&gt;</code> : recommandé pour les schémas globaux (<code>Organization</code>, <code>WebSite</code>). Chargé en priorité.</li><li><code>&lt;body&gt;</code> : acceptable pour les schémas spécifiques à un contenu (<code>FAQPage</code>, <code>HowTo</code>), placés juste avant <code>&lt;/body&gt;</code>.</li></ul><h2>Les erreurs critiques qui annulent l'effet GSO de vos données structurées</h2><p>Un mauvais schema est pire qu'aucun schema. Voici les 4 erreurs les plus fréquentes - et les plus coûteuses.</p><h3>1. Données incohérentes avec le contenu visible</h3><p>Si votre JSON-LD indique un auteur "Marie Dupont" mais que la page ne mentionne aucun auteur, ou si la <code>datePublished</code> ne correspond pas à la date affichée, Google et les IA génèrent de la méfiance. <strong>Le schema doit refléter exactement ce que l'utilisateur voit.</strong></p><h3>2. Schémas incomplets (propriétés required manquantes)</h3><p>Certaines propriétés sont obligatoires pour que le schema soit valide et éligible aux rich results. Par exemple, <code>FAQPage</code> requiert au minimum <code>mainEntity</code> avec au moins un <code>Question</code> et son <code>acceptedAnswer</code>. Un schema tronqué est ignoré ou génère des erreurs dans la Search Console.</p><h3>3. Sur-markup (trop de types non pertinents)</h3><p>Ajouter <code>Product</code>, <code>HowTo</code>, <code>FAQPage</code> et <code>Event</code> sur une page qui n'est qu'un article de blog, c'est du spam sémantique. Google peut pénaliser les pages qui utilisent des schemas trompeurs. <strong>Un type par réalité de page.</strong></p><h3>4. Absence de @graph pour les entités multiples</h3><p>Multiplier les blocs séparés sur une même page crée des entités orphelines que les moteurs ne peuvent pas relier entre elles. Utilisez <code>@graph</code> pour déclarer toutes les entités d'une page dans un seul bloc, avec des <code>@id</code> cohérents pour les lier.</p><h2>Tester et valider vos données structurées</h2><p>Avant toute mise en production, validez systématiquement. Deux outils officiels suffisent pour couvrir 95 % des cas.</p><h3>Google Rich Results Test</h3><p>Cet outil indique quels <strong>rich results Google</strong> peuvent être générés par votre page. Il signale les erreurs bloquantes et les avertissements. Testez l'URL en production ou collez directement votre code HTML.</p><h3>Schema Markup Validator</h3><p>Valide <strong>tous les types Schema.org</strong>, sans les règles spécifiques à Google. C'est l'outil de référence pour vérifier la conformité technique pure de votre balisage.</p><h3>Méthode de vérification manuelle via les LLMs</h3><p>Une fois votre page en ligne, testez directement dans ChatGPT ou Perplexity :</p><ol><li>Posez une question précise à laquelle votre page répond.</li><li>Vérifiez si votre site apparaît dans les sources citées.</li><li>Si non, analysez : le contenu est-il suffisamment explicite ? Les entités sont-elles bien définies ? La page est-elle indexée ?</li></ol><p>Ce n'est pas un test de validation technique, mais un test de visibilité réelle dans les moteurs génératifs. C'est le test qui compte le plus pour le <strong>GSO</strong>.</p><h2>Données structurées et E-E-A-T : le combo gagnant pour le GSO</h2><p>L'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) est le cadre d'évaluation de la qualité des sources utilisé par Google - et, par extension, par les moteurs génératifs. Les données structurées sont l'un des leviers les plus directs pour signaler l'E-E-A-T de façon machine-readable.</p><h3>Person schema + author entity</h3><p>Chaque article doit être lié à un auteur réel, décrit par un <code>Person</code> schema. Les propriétés clés :</p><ul><li><code>name</code> : nom complet de l'auteur</li><li><code>jobTitle</code> : titre professionnel précis ("Consultante SEO &amp; GSO", pas juste "Expert")</li><li><code>url</code> : page auteur sur le site</li><li><code>sameAs</code> : profil LinkedIn, éventuellement Wikidata si l'auteur est notable</li><li><code>affiliation</code> : lien vers l'<code>Organization</code> via son <code>@id</code></li></ul><p>Un auteur sans page dédiée sur le site, sans profil LinkedIn et sans <code>sameAs</code> est une entité non vérifiable - donc peu crédible pour les IA.</p><h3>sameAs et knowledge graph</h3><p>La propriété <code>sameAs</code> est définie par Schema.org comme "une URL qui identifie sans ambiguïté la même entité". C'est le pont entre votre site et le knowledge graph de Google.</p><p>Pour une agence ou une entreprise, les <code>sameAs</code> les plus efficaces sont :</p><ul><li>Page LinkedIn de l'entreprise</li><li>Fiche Wikidata (si existante)</li><li>Page Wikipedia (si existante)</li><li>Profil Google Business Profile</li></ul><p><strong>Ne mettez pas n'importe quelle URL en </strong><code>sameAs</code><strong>.</strong> La propriété est réservée aux pages qui identifient l'entité de façon canonique - pas à des articles tiers qui la mentionnent.</p><h3>Comment lier votre contenu à des entités vérifiables</h3><p>La technique du <code>@id</code><strong> stable</strong> est fondamentale. Attribuez un identifiant unique et permanent à chaque entité de votre site :</p><ul><li><code>https://www.triaina.fr/#organization</code> pour l'agence</li><li><code>https://www.triaina.fr/blog/schema-org-donnees-structurees-gso/#article</code> pour un article</li></ul><p>Ces <code>@id</code> permettent aux moteurs de relier toutes les pages du site à une même entité cohérente - c'est la base d'une <strong>structured database</strong> sémantique efficace pour le GSO.</p><p>Combinez ensuite <code>Article</code> + <code>Person</code> + <code>Organization</code> dans un <code>@graph</code> unique sur chaque page de contenu. C'est le schéma le plus complet pour signaler simultanément la pertinence, l'autorité et la confiance.</p><h2>FAQ - Données structurées et GSO</h2><h3>Qu'est-ce que le GSO (Generative Search Optimization) ?</h3><p>Le <strong>GSO</strong>, ou <em>generative search optimization</em>, désigne l'ensemble des techniques visant à optimiser la visibilité d'un site dans les réponses générées par les IA (ChatGPT, Perplexity, Google AI Overviews, Gemini). Il complète le SEO classique en ciblant spécifiquement les moteurs génératifs plutôt que les pages de résultats traditionnelles.</p><h3>Les données structurées garantissent-elles d'être cité par une IA ?</h3><p>Non. Les <strong>données structurées</strong> augmentent la lisibilité machine et renforcent les signaux de confiance, mais elles ne garantissent pas les citations IA. La qualité du contenu, l'autorité du domaine, la fraîcheur et la pertinence thématique restent déterminants. Le schema markup est un amplificateur, pas un raccourci.</p><h3>Quelle est la différence entre schema.org et JSON-LD ?</h3><p><strong>Schema.org</strong> est le vocabulaire (les types et propriétés : <code>Article</code>, <code>name</code>, <code>author</code>…). <strong>JSON-LD</strong> est le format d'implémentation technique (la syntaxe dans laquelle on écrit ce vocabulaire). On peut aussi implémenter Schema.org en Microdata ou RDFa, mais JSON-LD est le format recommandé par Google.</p><h3>Faut-il un schema markup sur toutes les pages du site ?</h3><p>Au minimum, <code>Organization</code> (ou <code>LocalBusiness</code>) doit être présent sur toutes les pages. Ensuite, ajoutez les types spécifiques selon le contenu : <code>Article</code> sur les articles, <code>FAQPage</code> sur les pages FAQ, <code>Product</code> sur les fiches produit. N'ajoutez jamais un type qui ne correspond pas au contenu réel de la page.</p><h3>Comment vérifier que mes données structurées sont correctement lues par Google ?</h3><p>Utilisez le Google Rich Results Test pour les types supportés par Google, et le Schema Markup Validator pour tous les types Schema.org. Consultez aussi la section "Améliorations" de la Google Search Console pour détecter les erreurs sur l'ensemble du site.</p>
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
