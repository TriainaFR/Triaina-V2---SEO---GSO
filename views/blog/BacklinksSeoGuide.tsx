import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Award, Target, Wrench, AlertTriangle, CheckCircle2, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const BacklinksSeoGuide: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'backlinks-seo-guide');

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
<section id="introduction" className="mb-16">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl text-lg text-slate-700 leading-relaxed shadow-sm">
                    <p className="mb-4">
                        En 2026, les backlinks restent l'un des facteurs de classement les plus importants de Google. Mais voici le problème : <strong>la plupart des agences SEO ne savent pas comment générer des backlinks de qualité</strong>. Elles achètent des liens, créent du contenu de mauvaise qualité, ou utilisent des techniques black hat qui risquent de pénaliser votre site.
                    </p>
                    <p className="font-medium text-blue-800 m-0">
                        Chez Triaina, nous avons généré plus de 5 000 backlinks de qualité pour nos clients. Nous savons exactement comment le faire sans risque. Et dans ce guide, nous vous montrons comment.
                    </p>
                </div>
            </section>

            <section id="definition" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Qu'est-ce qu'un Backlink ?</h2>
          
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Définition Précise</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Un <strong>backlink</strong> (ou lien entrant) est un lien depuis un site externe vers votre site. C'est un vote de confiance. Quand un site vous lie, il dit à Google : "Ce site est fiable, je le recommande."
                    </p>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <p className="m-0 text-slate-700"><strong>Exemple :</strong> Si Forbes écrit un article et vous lie, c'est un backlink très puissant. Si un site de spam vous lie, c'est un backlink faible (et potentiellement dangereux).</p>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Pourquoi Google Utilise les Backlinks</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Google utilise les backlinks pour une raison simple : <strong>évaluer la qualité et l'autorité d'un site</strong>.
                    </p>
                    <p className="text-lg text-slate-600 mb-6">
                        Avant, les backlinks étaient le critère principal. Maintenant, c'est un des trois critères majeurs (avec le contenu et l'E-E-A-T). Mais ils restent très importants.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Backlinks vs Liens Internes</h3>
                    <p className="text-lg text-slate-600 mb-4">Ne confondez pas :</p>
                    <ul className="space-y-2 mb-6">
                        <li><strong>Backlinks</strong> : Liens depuis d'autres sites vers le vôtre</li>
                        <li><strong>Liens internes</strong> : Liens depuis une page de votre site vers une autre page du même site</li>
                    </ul>
                    <p className="text-lg text-slate-600">Les deux sont importants, mais les backlinks sont plus puissants pour l'autorité.</p>
                </div>
            </section>

            <section id="types" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Les 3 Types de Backlinks</h2>

                <div className="grid md:grid-cols-3 gap-6 not-prose">
                    {/* Type 1 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">1. Backlinks Naturels</h3>
                        <p className="text-sm text-slate-600 mb-4">Les backlinks naturels sont des liens que vous gagnez sans les demander. Quelqu'un aime votre contenu et vous lie.</p>
                        
                        <div className="mb-4">
                            <strong className="text-sm text-emerald-700 block mb-1">Avantages :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Très puissants pour Google</li>
                                <li>Pas de risque de pénalité</li>
                                <li>Montrent une véritable popularité</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <strong className="text-sm text-red-700 block mb-1">Inconvénients :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Difficiles à obtenir</li>
                                <li>Lents à générer</li>
                                <li>Imprévisibles</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-sm text-slate-900 block mb-1">Comment les obtenir :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Créez du contenu exceptionnel</li>
                                <li>Partagez vos données propriétaires</li>
                                <li>Documentez vos cas clients</li>
                                <li>Soyez actif sur les réseaux sociaux</li>
                            </ul>
                        </div>
                    </div>

                    {/* Type 2 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">2. Backlinks Gagnés (Earned)</h3>
                        <p className="text-sm text-slate-600 mb-4">Les backlinks gagnés sont des liens que vous obtenez en demandant ou en créant des opportunités.</p>
                        
                        <div className="mb-4">
                            <strong className="text-sm text-emerald-700 block mb-1">Avantages :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Puissants pour Google</li>
                                <li>Prévisibles et mesurables</li>
                                <li>Pas de risque si fait correctement</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <strong className="text-sm text-red-700 block mb-1">Inconvénients :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Demandent du travail</li>
                                <li>Nécessitent des relations</li>
                                <li>Prennent du temps</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-sm text-slate-900 block mb-1">Comment les obtenir :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Contactez les sites qui parlent de votre sujet</li>
                                <li>Proposez des interviews</li>
                                <li>Créez des partenariats</li>
                                <li>Publiez dans des médias</li>
                                <li>Participez à des événements</li>
                            </ul>
                        </div>
                    </div>

                    {/* Type 3 */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                            <Wrench size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">3. Backlinks Créés (Created)</h3>
                        <p className="text-sm text-slate-600 mb-4">Les backlinks créés sont des liens que vous créez vous-même (annuaires, commentaires, forums, etc.).</p>
                        
                        <div className="mb-4">
                            <strong className="text-sm text-emerald-700 block mb-1">Avantages :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Faciles à obtenir</li>
                                <li>Rapides</li>
                                <li>Gratuits</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <strong className="text-sm text-red-700 block mb-1">Inconvénients :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Faibles pour Google</li>
                                <li>Risque de pénalité si abusé</li>
                                <li>Peu de valeur réelle</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-sm text-slate-900 block mb-1">À éviter :</strong>
                            <ul className="text-sm text-slate-600 space-y-1 pl-4 list-disc">
                                <li>Annuaires de spam</li>
                                <li>Commentaires de spam</li>
                                <li>Forums de spam</li>
                                <li>Échanges de liens massifs</li>
                                <li>Achat de liens</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="evaluation" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Comment Google Évalue les Backlinks</h2>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Facteurs Importants</h3>
                <p className="text-lg text-slate-600 mb-8">Google utilise plusieurs facteurs pour évaluer la qualité d'un backlink :</p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Autorité du domaine source</h4>
                            <ul className="m-0">
                                <li>Un lien depuis Forbes vaut plus qu'un lien depuis un blog inconnu</li>
                                <li>Vérifiez l'autorité avec Ahrefs, SEMrush, ou Moz</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Pertinence du domaine source</h4>
                            <ul className="m-0">
                                <li>Un lien depuis un site sur le SEO vaut plus qu'un lien depuis un site sur la cuisine</li>
                                <li>La pertinence est plus importante que l'autorité</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Contexte du lien</h4>
                            <ul className="m-0">
                                <li>Un lien dans le contenu principal vaut plus qu'un lien en pied de page</li>
                                <li>Un lien avec du texte d'ancrage pertinent vaut plus qu'un lien générique</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">4</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Texte d'ancrage (Anchor Text)</h4>
                            <ul className="m-0">
                                <li>"SEO" vaut plus que "cliquez ici"</li>
                                <li>Mais trop de texte d'ancrage exact peut être une pénalité</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">5</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Diversité des sources</h4>
                            <ul className="m-0">
                                <li>10 liens depuis 10 sites différents valent plus que 10 liens depuis le même site</li>
                                <li>Google préfère la diversité</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">6</div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mt-0 mb-2">Fraîcheur du lien</h4>
                            <ul className="m-0">
                                <li>Un lien récent vaut plus qu'un lien ancien</li>
                                <li>Mais les vieux liens restent importants</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Signaux de Mauvais Backlinks</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <p className="font-bold text-red-800 mb-4">Attention aux backlinks dangereux :</p>
                    <ul className="text-red-900 m-0">
                        <li>Liens depuis des sites de spam</li>
                        <li>Liens depuis des sites non pertinents</li>
                        <li>Liens avec du texte d'ancrage sur-optimisé</li>
                        <li>Trop de liens depuis le même site</li>
                        <li>Liens depuis des sites pénalisés par Google</li>
                        <li>Liens achetés ou échangés massivement</li>
                    </ul>
                </div>
            </section>

            <section id="strategie" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">Stratégie de Backlinks Complète</h2>
                
                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
                    
                    <div className="space-y-12 mt-8 relative z-10">
                        {[
                            { 
                                step: 1, 
                                title: "Audit des Backlinks Actuels", 
                                desc: "Commencez par analyser vos backlinks actuels.",
                                actions: ["Utilisez Ahrefs, SEMrush, ou Moz pour voir vos backlinks", "Identifiez les backlinks de mauvaise qualité", "Vérifiez l'autorité de chaque domaine source", "Analysez le texte d'ancrage"],
                                result: "Une liste de vos backlinks actuels et leur qualité.",
                                color: "blue"
                            },
                            { 
                                step: 2, 
                                title: "Analyse des Concurrents", 
                                desc: "Analysez les backlinks de vos concurrents.",
                                actions: ["Identifiez vos 3 principaux concurrents", "Analysez leurs backlinks avec Ahrefs ou SEMrush", "Trouvez les sites qui les lient", "Identifiez les opportunités manquées"],
                                result: "Une liste de sites potentiels pour générer des backlinks.",
                                color: "purple"
                            },
                            { 
                                step: 3, 
                                title: "Création de Contenu Linkable", 
                                desc: "Créez du contenu que les gens veulent lier.",
                                actions: ["Créez du contenu long et approfondi (2 000+ mots)", "Intégrez des données propriétaires", "Documentez vos cas clients", "Créez des infographies", "Publiez des études et recherches"],
                                result: "Du contenu que les gens veulent partager et lier.",
                                color: "emerald"
                            },
                            { 
                                step: 4, 
                                title: "Génération de Backlinks", 
                                desc: "Générez des backlinks de qualité.",
                                actions: ["Contactez les sites qui parlent de votre sujet", "Proposez des interviews ou des partenariats", "Publiez dans des médias reconnus", "Créez des partenariats avec d'autres experts", "Participez à des événements et conférences", "Soyez actif sur les réseaux sociaux"],
                                result: "Des backlinks de qualité depuis des sites pertinents.",
                                color: "blue"
                            },
                            { 
                                step: 5, 
                                title: "Monitoring et Maintenance", 
                                desc: "Suivez vos backlinks en continu.",
                                actions: ["Suivez vos nouveaux backlinks chaque mois", "Identifiez et supprimez les mauvais backlinks", "Mettez à jour votre contenu pour générer plus de liens", "Analysez vos concurrents régulièrement"],
                                result: "Une stratégie de backlinks durable et efficace.",
                                color: "purple"
                            }
                        ].map((item, index) => {
                            const isEven = index % 2 === 0;
                            const colorClasses = {
                                blue: "bg-blue-50 border-blue-200 text-blue-700",
                                purple: "bg-purple-50 border-purple-200 text-purple-700",
                                emerald: "bg-emerald-50 border-emerald-200 text-emerald-700"
                            }[item.color as "blue" | "purple" | "emerald"];
                            
                            const iconColorClasses = {
                                blue: "bg-blue-600 shadow-blue-200",
                                purple: "bg-purple-600 shadow-purple-200",
                                emerald: "bg-emerald-600 shadow-emerald-200"
                            }[item.color as "blue" | "purple" | "emerald"];

                            return (
                                <div key={item.step} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="hidden md:block md:w-1/2"></div>
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-2xl text-white shadow-xl z-10 border-4 border-white ${iconColorClasses}`}>
                                        {item.step}
                                    </div>
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                        <div className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow bg-white relative overflow-hidden group`}>
                                            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-2 h-full ${colorClasses.split(' ')[0]}`}></div>
                                            <h3 className="font-display font-bold text-2xl text-slate-900 mt-0 mb-3">{item.title}</h3>
                                            <p className="text-slate-600 text-base mb-4 font-medium">{item.desc}</p>
                                            
                                            <div className={`mb-4 ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                <strong className="text-sm text-slate-900 block mb-2">Actions :</strong>
                                                <ul className={`space-y-2 m-0 p-0 list-none ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                                    {item.actions.map((action, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorClasses.split(' ')[2]}`}></span>
                                                            <span>{action}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className={`p-3 rounded-lg ${colorClasses.split(' ')[0]} border ${colorClasses.split(' ')[1]}`}>
                                                <strong className="text-sm block mb-1">Résultat :</strong>
                                                <p className="text-sm m-0">{item.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="cas-clients" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Cas Clients : Résultats Backlinks</h2>
                
                <div className="grid md:grid-cols-2 gap-8 not-prose">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Cas Client #1 : Agence B2B</h3>
                        
                        <div className="mb-6">
                            <h4 className="font-bold text-slate-700 mb-2">Situation initiale :</h4>
                            <ul className="text-slate-600 space-y-1 list-disc pl-5">
                                <li>10 backlinks total</li>
                                <li>Autorité faible (DA 15)</li>
                                <li>Position moyenne : 20-30</li>
                                <li>Pas de stratégie de backlinks</li>
                            </ul>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="font-bold text-slate-700 mb-2">Stratégie mise en place :</h4>
                            <ul className="text-slate-600 space-y-1 list-disc pl-5">
                                <li>Audit des backlinks actuels</li>
                                <li>Création de 5 articles linkables</li>
                                <li>Génération de 40 backlinks/mois</li>
                                <li>Partenariats avec 5 sites d'autorité</li>
                            </ul>
                        </div>
                        
                        <div className="mb-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">Résultats après 6 mois :</h4>
                            <ul className="text-blue-800 space-y-1 list-disc pl-5 font-medium">
                                <li>250+ backlinks total</li>
                                <li>Autorité : DA 35 (+20 points)</li>
                                <li>Position moyenne : 5-10 (-60%)</li>
                                <li>Trafic : +200%</li>
                                <li>ROI : +400%</li>
                            </ul>
                        </div>
                        
                        <p className="text-sm text-slate-600 italic"><strong>Apprentissage :</strong> La qualité des backlinks est plus importante que la quantité.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Cas Client #2 : E-commerce</h3>
                        
                        <div className="mb-6">
                            <h4 className="font-bold text-slate-700 mb-2">Situation initiale :</h4>
                            <ul className="text-slate-600 space-y-1 list-disc pl-5">
                                <li>5 backlinks total</li>
                                <li>Autorité très faible (DA 8)</li>
                                <li>Position moyenne : 30-40</li>
                                <li>Aucune présence médiatique</li>
                            </ul>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="font-bold text-slate-700 mb-2">Stratégie mise en place :</h4>
                            <ul className="text-slate-600 space-y-1 list-disc pl-5">
                                <li>Création d'une stratégie de contenu linkable</li>
                                <li>Génération de 50 backlinks/mois</li>
                                <li>Partenariats avec 10 sites d'autorité</li>
                                <li>Publication dans 3 médias</li>
                            </ul>
                        </div>
                        
                        <div className="mb-6 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                            <h4 className="font-bold text-emerald-900 mb-2">Résultats après 6 mois :</h4>
                            <ul className="text-emerald-800 space-y-1 list-disc pl-5 font-medium">
                                <li>300+ backlinks total</li>
                                <li>Autorité : DA 40 (+32 points)</li>
                                <li>Position moyenne : 3-8 (-70%)</li>
                                <li>Trafic : +300%</li>
                                <li>Conversions : +250%</li>
                            </ul>
                        </div>
                        
                        <p className="text-sm text-slate-600 italic"><strong>Apprentissage :</strong> Les backlinks depuis des sites pertinents ont le plus d'impact.</p>
                    </div>
                </div>
            </section>

            <section id="erreurs" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Erreurs Courantes à Éviter</h2>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                    {[
                        { title: "1. Acheter des Backlinks", desc: "Acheter des backlinks est risqué et peut entraîner une pénalité Google.", action: "Générez des backlinks naturels et gagnés." },
                        { title: "2. Trop de Texte d'Ancrage Exact", desc: "Trop de liens avec le même texte d'ancrage exact peut être une pénalité.", action: "Variez votre texte d'ancrage (exact, partial, branded, generic)." },
                        { title: "3. Liens depuis des Sites de Spam", desc: "Les liens depuis des sites de spam peuvent pénaliser votre site.", action: "Vérifiez l'autorité et la pertinence avant d'accepter un lien." },
                        { title: "4. Ignorer les Mauvais Backlinks", desc: "Les mauvais backlinks peuvent pénaliser votre site.", action: "Analysez régulièrement vos backlinks et supprimez les mauvais." },
                        { title: "5. Pas de Diversité", desc: "Trop de liens depuis le même site ou le même type de site peut être suspect.", action: "Diversifiez vos sources de backlinks." },
                        { title: "6. Pas de Contenu Linkable", desc: "Sans contenu de qualité, personne ne voudra vous lier.", action: "Créez du contenu exceptionnel que les gens veulent partager." }
                    ].map((erreur, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <AlertTriangle size={18} className="text-amber-500" />
                                {erreur.title}
                            </h3>
                            <p className="text-slate-600 text-sm mb-4">{erreur.desc}</p>
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-emerald-800 m-0"><strong>À faire :</strong> {erreur.action}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="checklist-outils" className="my-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl mb-8 font-bold text-slate-900">Checklist Backlinks</h2>
                        <p className="text-lg text-slate-600 mb-6">Utilisez cette checklist pour votre stratégie de backlinks :</p>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Audit :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Analysé vos backlinks actuels</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Identifié les mauvais backlinks</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Analysé les backlinks de vos concurrents</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Créé une liste de sites potentiels</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Contenu :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Créé du contenu long et approfondi</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Intégré des données propriétaires</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Documenté vos cas clients</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Créé des infographies ou vidéos</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Génération :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Contacté 20+ sites potentiels</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Créé 5+ partenariats</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Publié dans 3+ médias</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Généré 30+ backlinks/mois</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Monitoring :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Suivi vos nouveaux backlinks</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Supprimé les mauvais backlinks</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Analysé vos concurrents</li>
                                    <li className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-slate-300 rounded-sm"></div> Mis à jour votre stratégie</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl mb-8 font-bold text-slate-900">Outils pour les Backlinks</h2>
                        
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 text-blue-700">Analyse :</h3>
                                <ul className="space-y-2">
                                    <li><strong>Ahrefs</strong> (meilleur pour l'analyse complète)</li>
                                    <li><strong>SEMrush</strong> (bon pour l'analyse et la concurrence)</li>
                                    <li><strong>Moz</strong> (bon pour les débutants)</li>
                                    <li><strong>Google Search Console</strong> (gratuit, données officielles)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 text-purple-700">Génération :</h3>
                                <ul className="space-y-2">
                                    <li><strong>Outreach</strong> (pour contacter les sites)</li>
                                    <li><strong>BuzzSumo</strong> (pour trouver du contenu linkable)</li>
                                    <li><strong>HARO</strong> (Help A Reporter Out, pour les mentions)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 text-emerald-700">Monitoring :</h3>
                                <ul className="space-y-2">
                                    <li><strong>Google Search Console</strong> (gratuit)</li>
                                    <li><strong>Ahrefs</strong> (suivi complet)</li>
                                    <li><strong>SEMrush</strong> (suivi complet)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="my-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white not-prose relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h2 className="text-white text-4xl md:text-5xl mb-8 font-display font-bold tracking-tight">Conclusion</h2>
                    <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        <strong>Les backlinks restent essentiels en 2026</strong>. Mais la qualité prime sur la quantité.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-left max-w-3xl mx-auto mb-10">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Voici les actions immédiates :</h3>
                        <ol className="space-y-4 text-lg">
                            <li className="flex gap-3"><span className="font-bold text-emerald-400">1.</span> <span><strong>Cette semaine :</strong> Analysez vos backlinks actuels avec Ahrefs ou SEMrush</span></li>
                            <li className="flex gap-3"><span className="font-bold text-emerald-400">2.</span> <span><strong>Semaine 2 :</strong> Analysez les backlinks de vos 3 principaux concurrents</span></li>
                            <li className="flex gap-3"><span className="font-bold text-emerald-400">3.</span> <span><strong>Semaine 3 :</strong> Créez une liste de 20 sites potentiels pour des backlinks</span></li>
                            <li className="flex gap-3"><span className="font-bold text-emerald-400">4.</span> <span><strong>Semaine 4 :</strong> Contactez 10 sites pour des partenariats ou interviews</span></li>
                            <li className="flex gap-3"><span className="font-bold text-emerald-400">5.</span> <span><strong>Semaine 5 :</strong> Lancez votre première campagne de génération de backlinks</span></li>
                        </ol>
                    </div>

                    <p className="text-white text-xl font-bold mb-10">
                        Commencez maintenant. Vos concurrents ne dorment pas.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="/expertise-seo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Découvrir notre expertise SEO
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg border-2 border-white/50 hover:border-white">
                            Lancer une campagne Backlinks
                        </a>
                    </div>
                </div>
            </section>

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
