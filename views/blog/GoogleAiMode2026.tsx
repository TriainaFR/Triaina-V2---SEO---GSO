import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const GoogleAiMode2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'google-ai-mode-2026');

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
<p><strong>Google AI Mode, c'est un onglet de recherche à part entière, distinct des AI Overviews, qui remplace la page de résultats classique par une conversation construite avec Gemini 3.</strong> Annoncé en mars 2025 puis généralisé progressivement, il arrive en France à l'été 2026, après l'accord trouvé fin juin entre Google et les éditeurs de presse sur les droits voisins. Concrètement : moins de clics vers les sites, des réponses plus longues, et un mécanisme de sélection des sources totalement différent du classement traditionnel. Dans cet article, on vous explique comment ça fonctionne techniquement, en quoi ça diffère d'AI Overview, et surtout ce que vous pouvez faire, dès maintenant, pour rester visible dedans.</p>

<h2>Qu'est-ce que Google AI Mode exactement ?</h2>
<p>AI Mode Google est un mode de recherche conversationnel accessible via un onglet dédié à côté de la barre de recherche classique (sur google.com/ai ou via l'app Google). Contrairement à une requête normale, vous pouvez y poser une question complète, avec plusieurs critères à la fois, puis relancer avec des questions de suivi comme dans une discussion avec un assistant.</p>
<p>Il repose sur une version custom de <strong>Gemini 3</strong> (Gemini 2.0 au lancement), avec des capacités de raisonnement avancé et de compréhension multimodale : texte, image, et bientôt vidéo en temps réel via "Search Live". Google le décrit lui-même comme "expérimental" - les réponses peuvent contenir des erreurs, et le format continue d'évoluer chaque mois.</p>

<h3>Disponibilité géographique et accès</h3>
<ul>
<li><p><strong>Lancement initial</strong> : mars 2025, réservé aux abonnés Google One AI Premium aux États-Unis, via Google Labs.</p></li>
<li><p><strong>Extension</strong> : plus de 180 pays et de nombreuses langues courant 2025-2026, en priorité en anglais.</p></li>
<li><p><strong>France</strong> : déploiement confirmé pour l'été 2026, en même temps que les AI Overviews, après le blocage lié aux négociations avec les éditeurs de presse français sur les droits voisins.</p></li>
<li><p><strong>Prérequis</strong> : être connecté à un compte Google personnel, mode navigation privée désactivé. Certaines fonctions "agentiques" (réserver, acheter, comparer des prix en direct) nécessitent un abonnement Google AI Ultra.</p></li>
</ul>
<p>Autrement dit : si votre site touche une audience française, vous avez encore quelques mois pour vous préparer avant que ce mode ne devienne un point d'entrée massif - mais la fenêtre se referme vite.</p>

<h2>AI Mode vs AI Overview vs recherche classique : ce qui change concrètement</h2>
<p>C'est la confusion la plus fréquente : AI Mode n'est pas une version "plus grosse" d'AI Overview. Ce sont deux produits distincts, avec des logiques d'affichage et de sourcing différentes.</p>
<ul>
<li><p><strong>AI Overview</strong> : un encart généré au-dessus des résultats classiques, sur une recherche standard. Vous restez sur la page de résultats normale, l'IA ne fait qu'ajouter un résumé.</p></li>
<li><p><strong>AI Mode</strong> : un espace de recherche à part entière, sans les 10 liens bleus habituels. La réponse occupe tout l'écran et s'appuie sur plusieurs recherches lancées en parallèle (le "query fan-out").</p></li>
<li><p><strong>Recherche traditionnelle</strong> : la page de résultats organiques classique, basée sur le classement algorithmique par pertinence et autorité.</p></li>
</ul>

<div class="overflow-x-auto my-8">
<table class="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700 rounded-lg shadow-sm">
<thead class="bg-slate-50 font-medium">
<tr>
<th class="px-4 py-3 border-b border-slate-200">Critère</th>
<th class="px-4 py-3 border-b border-slate-200">Recherche classique</th>
<th class="px-4 py-3 border-b border-slate-200">AI Overview</th>
<th class="px-4 py-3 border-b border-slate-200">AI Mode</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 bg-white">
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Format de réponse</td><td class="px-4 py-3">10 liens organiques + extraits</td><td class="px-4 py-3">Encart résumé + liens en dessous</td><td class="px-4 py-3 text-blue-600 font-medium">Réponse conversationnelle longue, multi-tours</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Nombre de requêtes déclenchées</td><td class="px-4 py-3">1</td><td class="px-4 py-3">1 à quelques-unes</td><td class="px-4 py-3 text-blue-600 font-medium">Plusieurs dizaines (query fan-out)</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Modèle sous-jacent</td><td class="px-4 py-3">Algorithme de classement classique</td><td class="px-4 py-3">Gemini (résumé synthétique)</td><td class="px-4 py-3 text-blue-600 font-medium">Gemini 3 avec raisonnement multi-étapes</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Interaction</td><td class="px-4 py-3">Une requête, une page</td><td class="px-4 py-3">Limitée</td><td class="px-4 py-3 text-blue-600 font-medium">Questions de suivi, conversation continue</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Clics vers les sites</td><td class="px-4 py-3">Élevés</td><td class="px-4 py-3">Réduits</td><td class="px-4 py-3 text-blue-600 font-medium">Très réduits, mais qualifiés</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Disponibilité en France (été 2026)</td><td class="px-4 py-3">Oui</td><td class="px-4 py-3">Oui</td><td class="px-4 py-3 text-blue-600 font-medium">Oui</td></tr>
</tbody>
</table>
</div>

<p>En clair : AI Overview grignote une partie du clic sur des requêtes informationnelles simples. AI Mode, lui, capte des recherches entières, souvent plus complexes et comparatives - le genre de requêtes où l'utilisateur veut une synthèse plutôt qu'une liste de liens à explorer un par un.</p>

<h2>Comment fonctionne AI Mode techniquement : RAG, indexation, sélection des sources</h2>
<p>Techniquement, AI Mode combine trois briques : un modèle de langage (Gemini 3), une architecture de type <strong>RAG (retrieval-augmented generation)</strong>, et les systèmes de classement et de qualité déjà utilisés par Google Search - Google le précise noir sur blanc dans sa documentation : "AI Mode est ancré dans nos systèmes de qualité et de classement".</p>

<h3>Le "query fan-out"</h3>
<p>Face à une question complexe, AI Mode ne se contente pas d'une seule recherche. Il découpe la demande en sous-questions, lance plusieurs recherches en parallèle sur ces sous-thèmes, puis synthétise les résultats dans une réponse unique. Exemple donné par Google : pour "quelle est la différence entre un tracker de sommeil en anneau, montre connectée et tapis de suivi", le système va chercher séparément les infos sur chaque produit avant de comparer.</p>

<h3>Indexation et sources mobilisées</h3>
<p>AI Mode ne se limite pas à l'index web classique. Il pioche aussi dans le Knowledge Graph, des données shopping en temps réel, et des informations locales fraîches. Cela veut dire qu'un contenu bien structuré (données produit, avis, informations d'entreprise à jour) a plus de chances d'être mobilisé qu'un texte purement rédactionnel non structuré.</p>

<h3>Critères de sélection des sources citées</h3>
<p>Les sources qui remontent dans les réponses d'AI Mode partagent des points communs observables :</p>
<ul>
<li><p><strong>Autorité thématique claire</strong> : des pages qui répondent frontalement à une sous-question précise, pas un article générique qui couvre tout vaguement.</p></li>
<li><p><strong>Fraîcheur des données</strong> : pages mises à jour récemment, avec des dates et chiffres vérifiables.</p></li>
<li><p><strong>Structure exploitable</strong> : titres hiérarchisés, listes, tableaux, données structurées (schema.org) qui facilitent l'extraction automatique.</p></li>
<li><p><strong>Cohérence E-E-A-T</strong> : expérience concrète, expertise identifiable, signaux de confiance (auteur nommé, sources citées, avis vérifiés).</p></li>
<li><p><strong>Format "résistant à l'IA"</strong> : du contenu qui apporte une réponse humaine - retour d'expérience, avis tranché, donnée propriétaire - que le modèle ne peut pas reformuler à l'identique ailleurs.</p></li>
</ul>

<h2>6 actions concrètes pour être visible dans Google AI Mode</h2>
<p>La bonne nouvelle : optimiser pour AI Mode recoupe largement ce qui fonctionne déjà pour le SEO classique et pour les autres moteurs génératifs. Voici les six leviers à activer en priorité.</p>
<h3>1. Structurer le contenu pour l'extraction</h3>
<p>Privilégiez des titres H2/H3 qui reformulent des questions concrètes, des listes à puces, des tableaux comparatifs. Un modèle qui fait du query fan-out cherche des réponses précises et modulaires, pas un pavé de texte continu.</p>
<h3>2. Déployer les données structurées (schema.org)</h3>
<p>Balisez vos pages avec Article, FAQPage, Product, Organization ou LocalBusiness selon le contexte. Ces balises aident le système à comprendre et à citer votre contenu avec confiance, plutôt qu'un concurrent moins bien structuré.</p>
<h3>3. Répondre aux questions de suivi, pas juste à la requête initiale</h3>
<p>Pensez votre contenu comme une conversation : anticipez les questions qu'un lecteur poserait après avoir lu votre premier paragraphe, et traitez-les dans la même page ou dans un maillage clair.</p>
<h3>4. Miser sur l'expérience et les données propriétaires</h3>
<p>Chiffres internes, retours d'expérience terrain, études de cas datées : c'est ce type de contenu, difficile à synthétiser sans perte d'information, qui a le plus de chances d'être cité comme source plutôt qu'absorbé silencieusement dans une réponse générique.</p>
<h3>5. Garder une autorité de marque forte hors site</h3>
<p>Le Knowledge Graph et les signaux de notoriété (mentions, avis, presse spécialisée) pèsent dans la sélection des sources. Une présence cohérente sur plusieurs canaux renforce la confiance que le modèle accorde à votre domaine.</p>
<h3>6. Surveiller et adapter en continu</h3>
<p>AI Mode évolue chaque mois - nouvelles fonctionnalités, nouveaux marchés, nouveaux critères. Ce qui fonctionne en juillet 2026 peut évoluer d'ici la fin de l'année. Une veille mensuelle sur les annonces du blog officiel de Google est indispensable.</p>

<h2>Comment mesurer l'impact d'AI Mode via Google Search Console</h2>
<p>Google Search Console reste, à ce jour, l'outil le plus fiable pour suivre votre visibilité dans les surfaces IA de Google, même si la remontée des données spécifiques à AI Mode reste partielle.</p>
<ul>
<li><p><strong>Rapport Performances</strong> : filtrez par type de recherche et surveillez les variations de clics/impressions sur les requêtes longues et conversationnelles, typiques d'AI Mode.</p></li>
<li><p><strong>Requêtes en hausse d'impressions sans clics</strong> : un signal classique de citation dans une réponse IA sans clic généré - comparez avant/après le déploiement français.</p></li>
<li><p><strong>Comparaison de périodes</strong> : comparez les données avant et après l'été 2026 (date de lancement en France) pour isoler l'effet AI Mode des autres facteurs.</p></li>
<li><p><strong>Pages d'atterrissage</strong> : identifiez quelles pages captent le plus les clics résiduels issus des réponses IA - ce sont vos meilleurs modèles à répliquer.</p></li>
<li><p><strong>Position moyenne</strong> : une baisse du volume de clics à position stable peut indiquer un report de trafic vers AI Mode plutôt qu'une perte de classement.</p></li>
</ul>
<p>Il n'existe pas encore, à l'été 2026, de segmentation officielle "AI Mode" dans Search Console. Le suivi reste donc indirect : croiser les tendances de requêtes conversationnelles avec l'actualité des déploiements de Google est la méthode la plus fiable en attendant.</p>

<h2>FAQ : les questions les plus posées sur Google AI Mode</h2>
<h3>AI Mode va-t-il remplacer la recherche Google classique ?</h3>
<p>Non, pas dans l'immédiat. AI Mode reste un onglet à part, optionnel, à côté de la recherche traditionnelle. Google continue de proposer les deux formats en parallèle, et la recherche classique demeure le mode par défaut pour la majorité des requêtes.</p>
<h3>Quelle est la différence entre AI Mode et AI Overview ?</h3>
<p>AI Overview est un résumé IA affiché au-dessus des résultats classiques sur une recherche standard. AI Mode est un espace de recherche entièrement conversationnel, sans liste de liens organiques, basé sur plusieurs recherches lancées en parallèle (query fan-out).</p>
<h3>Google AI Mode est-il disponible en France en 2026 ?</h3>
<p>Oui, le déploiement en France est confirmé pour l'été 2026, en même temps que les AI Overviews, après l'accord trouvé fin juin 2026 entre Google et les éditeurs de presse français sur les droits voisins.</p>
<h3>Faut-il un abonnement pour utiliser AI Mode ?</h3>
<p>L'accès de base à AI Mode est gratuit pour les utilisateurs connectés à un compte Google. Certaines fonctionnalités avancées, dites "agentiques" (réservation, achats automatisés, comparaisons en temps réel), nécessitent un abonnement Google AI Ultra.</p>
<h3>Comment savoir si mon site est cité dans AI Mode ?</h3>
<p>Il n'existe pas encore de rapport dédié dans Search Console. La méthode la plus fiable consiste à tester manuellement vos requêtes stratégiques dans l'onglet AI Mode, et à surveiller les variations d'impressions sur les requêtes longues dans le rapport Performances.</p>

<h2>Sources utiles</h2>
<ul>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google/ways-to-search/ai-mode/">search.google/ways-to-search/ai-mode</a> - page officielle de présentation d'AI Mode</p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://blog.google/products-and-platforms/products/search/ai-mode-search/">blog.google - Expanding AI Overviews and introducing AI Mode</a></p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://support.google.com/websearch/answer/16011537">support.google.com - Comment utiliser AI Mode</a></p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://labs.google.com/search/experiment/22">labs.google.com - Expérimentation AI Mode dans Google Labs</a></p></li>
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
