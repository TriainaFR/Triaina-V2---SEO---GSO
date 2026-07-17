const fs = require('fs');

const content = `import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const LlmsTxt2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'llms-txt-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "llms.txt : faut-il l'implémenter en 2026 ?",
      "description": "Le fichier llms.txt, outil miracle du GEO ou simple gadget ? Syntaxe exacte, méthode d'implémentation en 5 étapes, et les pièges à éviter.",
      "datePublished": "2026-07-17",
      "dateModified": "2026-07-17",
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
        "@id": "https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://triaina.fr/"
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
          "name": "llms.txt : faut-il l'implémenter en 2026 ?",
          "item": "https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
        }
      ]
    }
  ];

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-white">
      <SEO 
        title="llms.txt : faut-il l'implémenter en 2026 ? - Triaina"
        description="Le fichier llms.txt, outil miracle du GEO ou simple gadget ? Syntaxe exacte, méthode d'implémentation en 5 étapes, et les pièges à éviter."
        canonicalUrl="https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      
      <div className="max-w-4xl mx-auto">
        <a 
          href="/blog" 
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/blog');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-flex items-center text-slate-500 hover:text-violet-600 transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Retour aux articles
        </a>

        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-500 mb-8 animate-fade-in-up">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-violet-500" />
              {post.date}
            </div>
            <div className="flex items-center">
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
            <div className="lg:w-2/3 prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-a:underline prose-a:font-medium
                prose-li:text-slate-600 prose-li:marker:text-violet-500
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-violet-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-700
                prose-table:w-full prose-table:my-8 prose-th:bg-slate-50 prose-th:p-4 prose-th:text-left prose-td:p-4 prose-td:border-t prose-td:border-slate-100
                prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                prose-code:bg-slate-100 prose-code:text-violet-700 prose-code:px-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                "
            >
              <p><strong>Aujourd'hui, non : aucun grand modèle de langage n'utilise confirmé llms.txt pour comprendre ou citer un site.</strong> Google l'a même dit noir sur blanc en 2026 : le fichier est ignoré par la recherche et par les AI Overviews. Une étude Ahrefs sur 137 000 domaines a montré que 97 % des fichiers llms.txt ne reçoivent aucune visite de bot. Et pourtant, on continue de recommander de le poser - pas parce qu'il change quoi que ce soit aujourd'hui, mais parce que le coût est proche de zéro et que la situation peut évoluer.</p>
              
              <p>Ce guide s'adresse aux développeurs et responsables techniques qui veulent trancher sans se faire vendre du rêve. On y traite honnêtement le débat qui agite le SEO français - <strong>llms.txt</strong>, outil miracle du GEO ou simple gadget - avec la syntaxe exacte, une méthode d'implémentation en 5 étapes, et les pièges à éviter.</p>
              
              <h2>Qu'est-ce que le fichier llms.txt ?</h2>
              
              <p><code>llms.txt</code> est un fichier texte au format Markdown, déposé à la racine d'un site (<code>https://votresite.fr/llms.txt</code>), qui liste les pages jugées les plus importantes pour qu'un modèle de langage comprenne rapidement le contenu et la structure du site. L'idée de départ est simple : les LLM ont une fenêtre de contexte limitée et parsent mal du HTML chargé de menus, de bannières cookies et de scripts. llms.txt propose à la place un index épuré, hiérarchisé, directement lisible.</p>
              
              <p>Le standard a été proposé en <strong>septembre 2024</strong> par <strong>Jeremy Howard</strong>, cofondateur de fast.ai et d'Answer.AI, sur le site <a target="_blank" rel="noopener noreferrer nofollow" href="https://llmstxt.org">llmstxt.org</a>. Il faut être clair sur son statut : ce n'est ni une RFC, ni une norme validée par un organisme comme l'IETF ou le W3C. C'est une proposition communautaire - un peu comme <code>sitemap.xml</code> à ses débuts en 2005, avant que Google, Yahoo et Microsoft ne l'adoptent officiellement quelques mois plus tard. La comparaison s'arrête là : sitemap.xml a fini par être confirmé par les moteurs. llms.txt n'a, à ce jour, reçu aucune confirmation équivalente.</p>
              
              <p>Deux variantes coexistent :</p>
              
              <ul>
                <li><strong>llms.txt</strong> : une vue courte, avec des liens vers les pages clés et une brève description de chacune.</li>
                <li><strong>llms-full.txt</strong> : une version qui embarque directement le contenu intégral des pages, pensée pour la documentation technique volumineuse (API, SDK, changelogs).</li>
              </ul>
              
              <h2>llms.txt vs robots.txt : le tableau comparatif</h2>
              
              <p>La confusion entre les deux fichiers est fréquente, alors que la logique est inversée. <code>robots.txt</code> est un standard reconnu depuis 1994 et formalisé par la <strong>RFC 9309</strong> en 2022 : il dit aux robots ce qu'ils <strong>ne doivent pas</strong> explorer. <code>llms.txt</code> fait l'inverse : il suggère aux agents IA ce qu'ils <strong>devraient</strong> lire en priorité - sans aucune obligation de leur part.</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-6 py-3 border-b">Critère</th>
                      <th className="px-6 py-3 border-b">robots.txt</th>
                      <th className="px-6 py-3 border-b">llms.txt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Objectif</td>
                      <td className="px-6 py-4">Restreindre ou autoriser l'accès des robots à certaines URLs</td>
                      <td className="px-6 py-4">Recommander une liste de pages à lire en priorité</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Mécanisme</td>
                      <td className="px-6 py-4">Directives <code>User-agent</code>, <code>Disallow</code>, <code>Allow</code>, <code>Sitemap</code></td>
                      <td className="px-6 py-4">Markdown structuré : un H1, une citation, des listes de liens</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Statut</td>
                      <td className="px-6 py-4">Standard officiel, RFC 9309 (IETF, 2022)</td>
                      <td className="px-6 py-4">Proposition communautaire, non normalisée</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Adoption réelle par les LLM</td>
                      <td className="px-6 py-4">Universelle : respecté par Googlebot, Bingbot, GPTBot, ClaudeBot</td>
                      <td className="px-6 py-4">Non confirmée par Google, OpenAI ou Anthropic à ce jour</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Vérifiable</td>
                      <td className="px-6 py-4">Oui, via Search Console et les logs serveur</td>
                      <td className="px-6 py-4">Non, aucun outil officiel de suivi d'exploitation</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                      <td className="px-6 py-4 font-medium text-slate-900">Conséquence en cas d'absence</td>
                      <td className="px-6 py-4">Crawl incontrôlé, gaspillage possible du budget crawl</td>
                      <td className="px-6 py-4">Aucune sanction : le fichier est simplement ignoré</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p>Retenez une chose : ne remplacez jamais robots.txt par llms.txt. Ce sont deux fichiers complémentaires, avec des rôles distincts et des niveaux de maturité très différents. Le premier est une règle du jeu que tout le web respecte depuis trente ans. Le second reste une proposition en quête de validation.</p>
              
              <h2>Le débat actuel : pourquoi certains experts jugent llms.txt inutile</h2>
              
              <p>Le SERP français sur ce sujet est franchement partagé, et il faut le dire sans détour. <strong>SEOmix</strong> qualifie llms.txt de fichier <strong>« inutile pour le GEO »</strong>, allant jusqu'à pointer un risque : exposer sa stratégie de contenu à ses concurrents pour un bénéfice non démontré. D'autres, comme Adimeo, parlent d'une « fausse bonne idée ». Ces avis reposent sur des faits vérifiables, pas sur une simple posture de scepticisme.</p>
              
              <p>Trois éléments factuels alimentent ce scepticisme :</p>
              
              <ul>
                <li><strong>Aucune confirmation d'usage par les grands acteurs.</strong> Ni OpenAI, ni Anthropic, ni Google n'ont documenté publiquement une exploitation systématique de llms.txt dans leurs pipelines de récupération ou d'entraînement.</li>
                <li><strong>Google l'a confirmé explicitement.</strong> Le site Abondance a rapporté en 2026 que Google a indiqué ignorer llms.txt pour sa recherche comme pour les AI Overviews : le fichier ne sert ni à indexer, ni à classer, ni à générer les résumés IA.</li>
                <li><strong>Une étude à grande échelle contredit l'idée d'une adoption massive.</strong> Ahrefs a analysé environ 137 000 domaines disposant d'un llms.txt et a constaté que <strong>97 % de ces fichiers ne recevaient aucune visite de bot</strong> sur la période observée. Autrement dit, même quand le fichier existe, il n'est très majoritairement pas consulté.</li>
              </ul>
              
              <p>Ce constat rejoint une tendance plus large : les standards émergents autour de l'IA générative évoluent vite, et tous ne sont pas adoptés au même rythme. On le voit bien avec le déploiement du <a href="/blog/google-ai-mode-2026">Google AI Mode</a>, qui repose avant tout sur la compréhension sémantique classique du contenu et sur des signaux d'autorité existants - pas sur un fichier déclaratif que l'éditeur remplirait lui-même. Miser uniquement sur llms.txt pour espérer une meilleure visibilité dans ces interfaces reviendrait à ignorer ce que les moteurs eux-mêmes indiquent publiquement.</p>
              
              <p>Faut-il pour autant jeter le fichier à la poubelle ? Pas si vite. La suite nuance ce constat, sans revenir dessus.</p>
              
              <h2>Les avantages potentiels malgré tout</h2>
              
              <p>Dire « inutile » est un raccourci qu'il faut nuancer selon les contextes. Le fichier garde un intérêt réel dans certains cas précis, même en l'absence de preuve d'impact sur le classement ou les citations IA généralistes :</p>
              
              <ul>
                <li><strong>Documentation technique et SaaS.</strong> Des outils comme Mintlify, GitBook ou Fern génèrent llms.txt nativement pour leurs docs. Certains agents de développement (assistants de code, IDE avec IA intégrée) s'en servent effectivement pour ingérer une documentation API de façon plus propre qu'en scrapant du HTML.</li>
                <li><strong>Coût de mise en œuvre quasi nul.</strong> Contrairement à une refonte technique ou à une campagne de netlinking, un llms.txt basique se rédige en moins d'une heure. Le rapport effort/risque reste favorable, même si le gain demeure incertain.</li>
                <li><strong>Effet indirect de clarté structurelle.</strong> Rédiger ce fichier oblige souvent à hiérarchiser l'architecture du site : quelles pages comptent vraiment, quelles descriptions les résument bien. Cet exercice profite indirectement au SEO classique et à la lisibilité pour les crawlers IA en général.</li>
                <li><strong>Position d'assurance plutôt que de canal.</strong> Le fichier ne fera pas décoller votre visibilité dans les réponses IA aujourd'hui. Mais si l'adoption progresse dans les 12 à 24 prochains mois, l'avoir déjà en place évite de repartir de zéro.</li>
              </ul>
              
              <p>Chez Triaina, notre lecture après avoir testé ce fichier sur plusieurs sites clients dans le cadre de missions d'<a href="/expertise-geo">expertise GEO</a> : llms.txt n'est ni un levier de visibilité à lui seul, ni une perte de temps totale. C'est une case à cocher technique parmi d'autres - jamais une priorité budgétaire. Si votre besoin dépasse ce simple fichier et touche à la structure globale de votre visibilité dans les moteurs génératifs, une <a href="/agence-referencement-ia">agence spécialisée en référencement IA</a> pourra objectiver ce qui mérite réellement un budget et ce qui relève du geste gratuit.</p>
              
              <h2>Syntaxe et exemple de code commenté</h2>
              
              <p>Voici la structure recommandée par llmstxt.org :</p>
              
              <pre><code># Nom du site ou du projet
&gt; Résumé en une à trois phrases : ce que fait le site, pour qui, et pourquoi c'est pertinent.

Cette section peut contenir des paragraphes ou des listes courtes
pour donner du contexte supplémentaire (sans titre H2 ici).

## Documentation
- [Guide d'installation](https://exemple.fr/docs/installation) - étapes pour démarrer en 5 minutes
- [Référence API](https://exemple.fr/docs/api) - endpoints, paramètres et exemples de requêtes

## Ressources
- [Blog technique](https://exemple.fr/blog) - articles sur nos choix d'architecture

## Optionnel
- [Changelog](https://exemple.fr/changelog) - historique des versions
</code></pre>
              
              <p>Points de vigilance sur la syntaxe :</p>
              
              <ul>
                <li>Le titre <code>H1</code> et le résumé en citation (<code>&gt;</code>) sont les <strong>deux seuls blocs obligatoires</strong> selon la spécification.</li>
                <li>Les sections <code>H2</code> regroupent des listes de liens Markdown, chacun suivi d'une courte description après un tiret.</li>
                <li>Le fichier doit rester en <strong>UTF-8</strong>, avec une taille idéale sous 10 Ko (50 Ko en borne pragmatique haute).</li>
                <li>Pour une documentation volumineuse, dupliquez la logique dans un <code>llms-full.txt</code> qui embarque le contenu intégral au lieu de simples liens.</li>
              </ul>
              
              <h2>5 étapes concrètes pour implémenter llms.txt</h2>
              
              <h3>1. Lister les pages réellement stratégiques</h3>
              <p>Ne mettez pas tout le sitemap. Sélectionnez 10 à 30 URLs maximum : pages piliers, documentation, pages produit à forte valeur. Un fichier qui liste 400 URLs sans hiérarchie n'apporte rien de plus qu'un sitemap classique - il perd même l'intérêt du format.</p>
              
              <h3>2. Rédiger un résumé clair et factuel</h3>
              <p>Une à trois phrases, sans jargon marketing. Un LLM traite mieux une phrase du type « Cette entreprise édite un logiciel de gestion de stock pour les PME du BTP » qu'un slogan vague du type « leader de l'innovation ».</p>
              
              <h3>3. Structurer les liens par catégorie</h3>
              <p>Regroupez par thématique (Documentation, Produits, Blog, Ressources) sous des H2 dédiés, avec une description courte par lien. C'est ce que les LLM et les agents de développement parsent en priorité lorsqu'ils consultent le fichier.</p>
              
              <h3>4. Déployer le fichier à la racine et le signaler dans robots.txt</h3>
              <p>Placez le fichier sur <code>/llms.txt</code> et ajoutez, en commentaire dans robots.txt, une ligne indicative pointant vers lui. Ce n'est imposé par aucun standard, mais ça reste une bonne pratique de découvrabilité qui ne coûte rien.</p>
              
              <h3>5. Documenter et automatiser la mise à jour</h3>
              <p>Un llms.txt vieux de huit mois, truffé de liens morts, fait plus de mal que de bien. Intégrez sa génération dans votre pipeline CI/CD, ou passez par un llms txt generator pour l'automatiser à chaque déploiement plutôt que de le maintenir à la main.</p>
              
              <h2>Erreurs à éviter</h2>
              
              <ul>
                <li><strong>Remplacer robots.txt par llms.txt.</strong> Ce sont deux fichiers aux fonctions opposées ; l'un ne se substitue jamais à l'autre.</li>
                <li><strong>Lister toutes les pages du site.</strong> Un fichier surchargé perd son utilité de tri prioritaire et devient un sitemap bis, mal formaté.</li>
                <li><strong>Laisser le fichier obsolète.</strong> Des liens 404 dans un llms.txt donnent une image de négligence technique - un signal proche de ce qu'on surveille dans un <a href="/blog/audit-eeat-2026">audit E-E-A-T</a>, où la fraîcheur et la fiabilité des contenus comptent autant que leur présence.</li>
                <li><strong>Exposer des informations sensibles.</strong> N'y mettez jamais de pages non publiques, de documentation interne ou de roadmap concurrentielle - le fichier est public et lisible par n'importe qui, humain ou machine.</li>
                <li><strong>Sur-promettre en interne.</strong> Présenter llms.txt comme un levier de trafic à un comité de direction, sans mentionner l'absence de preuve d'impact, expose l'équipe technique si les résultats attendus ne viennent jamais.</li>
                <li><strong>Y consacrer un budget disproportionné.</strong> Un développeur senior en fait le tour en une heure. Si un prestataire facture un audit dédié de plusieurs jours rien que pour ce fichier, posez-vous des questions.</li>
              </ul>
              
              <h2>Comment mesurer un impact éventuel ?</h2>
              
              <p>C'est le point le plus délicat : il n'existe pas d'équivalent de Google Search Console pour llms.txt. Voici les méthodes disponibles, de la plus fiable à la plus spéculative :</p>
              
              <ul>
                <li><strong>Analyse des logs serveur.</strong> Cherchez les hits sur <code>/llms.txt</code> par user-agent (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Un accès régulier ne prouve pas une exploitation réelle du contenu, mais confirme au moins la récupération du fichier.</li>
                <li><strong>Outils de suivi de citations IA.</strong> Des trackers de visibilité GEO permettent de suivre si votre marque est citée dans ChatGPT, Perplexity ou Gemini, avant et après le déploiement du fichier.</li>
                <li><strong>Comparaison temporelle.</strong> Notez la date de mise en ligne, puis suivez sur 8 à 12 semaines l'évolution des citations et du trafic « referral IA » dans vos outils d'analytics.</li>
                <li><strong>Isoler la variable dans un audit global.</strong> llms.txt n'est qu'un paramètre parmi d'autres (structuration, maillage, autorité de la marque). Un audit technique complet permet d'isoler sa contribution réelle plutôt que de lui attribuer, à tort, tout gain ou toute stagnation observée.</li>
              </ul>
              
              <p>Il faut être honnête jusqu'au bout : à ce jour, aucune étude indépendante et reproductible ne démontre de corrélation statistiquement solide entre la présence d'un llms.txt et une hausse mesurable des citations IA. L'étude Ahrefs va même dans le sens inverse, avec ce chiffre de 97 % de fichiers sans aucune visite de bot. Les retours d'expérience positifs qui circulent restent, pour l'instant, anecdotiques.</p>
              
              <h2>FAQ</h2>
              
              <h3>Qu'est-ce que le fichier llms.txt exactement ?</h3>
              <p>C'est un fichier Markdown placé à la racine d'un site, qui liste les pages jugées les plus importantes pour qu'un modèle de langage comprenne rapidement le contenu et la structure du site. Il a été proposé par Jeremy Howard en septembre 2024.</p>
              
              <h3>Faut-il implémenter llms.txt en 2026 ?</h3>
              <p>Oui, mais sans en attendre de résultat garanti. Le coût est faible - moins d'une heure de travail - le risque est nul, et le gain potentiel reste incertain tant qu'aucun grand LLM n'en confirme officiellement l'usage à grande échelle.</p>
              
              <h3>Google utilise-t-il llms.txt pour le SEO ou les AI Overviews ?</h3>
              <p>Non. Google a confirmé publiquement en 2026 qu'il n'exploite pas ce fichier pour indexer, classer ou générer des réponses IA, que ce soit en recherche classique ou dans les AI Overviews.</p>
              
              <h3>Quelle est la différence entre llms.txt et llms-full.txt ?</h3>
              <p>llms.txt propose une liste de liens courts avec descriptions ; llms-full.txt embarque le contenu intégral des pages directement dans le fichier, ce qui convient mieux à une documentation technique dense (API, SDK).</p>
              
              <h3>Existe-t-il un générateur llms.txt fiable ?</h3>
              <p>Oui, plusieurs outils permettent d'automatiser la création d'un llms txt generator à partir d'un sitemap ou d'un CMS (WordPress, Docusaurus, Mintlify). Ils sont surtout utiles pour maintenir le fichier à jour sans effort manuel récurrent, plutôt que pour en garantir l'efficacité.</p>
              
              <h2>Sources utiles</h2>
              
              <ul>
                <li><a target="_blank" rel="noopener noreferrer nofollow" href="https://llmstxt.org">llmstxt.org</a> - spécification officielle du standard, par Jeremy Howard</li>
                <li><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.seomix.fr/llms-txt-fichier-geo/">SEOmix - llms.txt, un fichier inutile pour le GEO ?</a></li>
                <li><a target="_blank" rel="noopener noreferrer nofollow" href="https://ahrefs.com/blog/llmstxt-study/">Ahrefs - étude sur 137 000 domaines et l'adoption réelle de llms.txt</a></li>
                <li><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.abondance.com/20260617-2455080-google-confirmation-ignore-fichier-llms-txt.html">Abondance - confirmation de Google : llms.txt ignoré</a></li>
                <li><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.abondance.com/20250331-1013297-llms-txt.html">Abondance - décryptage du fichier llms.txt</a></li>
              </ul>
            </div>

            <aside className="lg:w-1/3">
              <div className="sticky top-24 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">À propos de l'auteur</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                    <img src="./alexandre-ceo.jpg" alt="Alexandre" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Alexandre</div>
                    <div className="text-sm text-slate-500">CEO & Fondateur Triaina</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Expert en stratégies SEO et GSO. Alexandre accompagne les entreprises dans l'optimisation de leur visibilité sur les moteurs de recherche traditionnels et les intelligences artificielles génératives.
                </p>
                <a 
                  href="/agence-referencement-ia" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/agence-referencement-ia');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="inline-block w-full text-center bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Découvrir notre expertise
                </a>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
};
`
fs.writeFileSync('views/blog/LlmsTxt2026.tsx', content);
