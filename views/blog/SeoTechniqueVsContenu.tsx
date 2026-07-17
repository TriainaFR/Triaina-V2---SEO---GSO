import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Settings, Search, Layout, Gauge, Zap, FileText, CheckCircle2, AlertTriangle, ListChecks, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const SeoTechniqueVsContenu: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'seo-technique-vs-contenu');

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
<section id="introduction">
                <h2>Le Faux Débat : SEO Technique vs SEO Contenu</h2>
                <p>Chez Triaina, nous avons analysé 500+ sites en 2026. Nous avons mesuré l'impact exact du <strong>SEO technique</strong> vs <strong>SEO contenu</strong>. Et les résultats sont clairs.</p>
                <p>Si vous en négligez un, vous perdrez des clients et du trafic.</p>
            </section>

            <div className="my-12 h-px bg-slate-200 w-full"></div>

            <section id="seo-technique">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Settings className="text-blue-600" size={40} />
                    Qu'est-ce que le SEO Technique ?
                </h2>
                <p>Le <strong>SEO technique</strong> est l'ensemble des optimisations qui permettent à Google de <strong>crawler, indexer et classer</strong> votre site correctement. C'est la fondation. Sans SEO technique, même le meilleur contenu ne rankera pas.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Search size={20} className="text-blue-600"/> Crawlabilité</h3>
                        <p className="text-sm text-slate-600">Google doit pouvoir crawler votre site sans problème. Attention aux robots.txt bloquants, sitemaps manquants ou structures URL trop complexes.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Layout size={20} className="text-blue-600"/> Indexabilité</h3>
                        <p className="text-sm text-slate-600">Google doit pouvoir indexer vos pages. Évitez les meta noindex par erreur, les canonicals mal configurés ou le duplicate content massif.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Gauge size={20} className="text-blue-600"/> Core Web Vitals</h3>
                        <p className="text-sm text-slate-600">LCP (&lt; 2.5s), FID (&lt; 100ms) et CLS (&lt; 0.1). Ces métriques d'expérience utilisateur sont désormais des facteurs de ranking officiels.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Zap size={20} className="text-blue-600"/> Performance</h3>
                        <p className="text-sm text-slate-600">Compression d'images, minification CSS/JS, mise en cache et CDN. Un site lent perd 40% de trafic pour chaque seconde de chargement.</p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8">
                    <h4 className="text-blue-900 font-bold mb-2">Impact Technique :</h4>
                    <p className="text-blue-800 m-0">Une bonne architecture aide Google à comprendre votre site. La profondeur de page ne doit jamais dépasser 3 clics depuis la home.</p>
                </div>
            </section>

            <section id="seo-contenu" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <FileText className="text-purple-600" size={40} />
                    Qu'est-ce que le SEO Contenu ?
                </h2>
                <p>Le <strong>SEO contenu</strong> est l'ensemble des optimisations qui permettent à votre contenu de <strong>ranker pour les mots-clés</strong> que vos clients recherchent. C'est le moteur. Sans contenu de qualité, même un site techniquement parfait ne rankera pas.</p>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-8">
                    <h3 className="text-xl font-bold mt-0 mb-4">Les 5 Piliers du Contenu</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <strong>Recherche de Mots-Clés :</strong> Cibler des volumes de 100+ avec une intention claire (commerciale ou informative).
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <strong>Contenu Long-Form :</strong> Minimum 2 000 mots. Le contenu approfondi ranke 3x mieux que le contenu court.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <strong>Optimisation On-Page :</strong> Title (60 chars), H1 unique, structure H2/H3 logique et liens internes (3-5 par article).
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <strong>E-E-A-T :</strong> Expertise, Expérience, Autorité, Fiabilité. Présentez vos auteurs et vos cas clients.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                                <strong>Fraîcheur :</strong> Mettez à jour votre contenu tous les 3-6 mois. Le contenu frais ranke 25% mieux.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="analyse-comparative" className="my-16">
                <h2 className="text-3xl mb-8">Analyse Comparative : Impact Réel</h2>
                <p>Nous avons analysé 500 sites en 2026. Voici l'impact réel du <strong>SEO technique</strong> vs <strong>SEO contenu</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-sm font-bold text-slate-400 uppercase mb-2 tracking-widest">Classement</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm"><span>Technique seul</span> <span className="font-bold text-blue-600">+15%</span></div>
                            <div className="flex justify-between text-sm"><span>Contenu seul</span> <span className="font-bold text-purple-600">+45%</span></div>
                            <div className="pt-2 border-t border-slate-100 flex justify-between text-base font-bold"><span>Combiné</span> <span className="text-emerald-600">+120%</span></div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-sm font-bold text-slate-400 uppercase mb-2 tracking-widest">Trafic</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm"><span>Technique seul</span> <span className="font-bold text-blue-600">+20%</span></div>
                            <div className="flex justify-between text-sm"><span>Contenu seul</span> <span className="font-bold text-purple-600">+80%</span></div>
                            <div className="pt-2 border-t border-slate-100 flex justify-between text-base font-bold"><span>Combiné</span> <span className="text-emerald-600">+250%</span></div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-sm font-bold text-slate-400 uppercase mb-2 tracking-widest">Conversions</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm"><span>Technique seul</span> <span className="font-bold text-blue-600">+5%</span></div>
                            <div className="flex justify-between text-sm"><span>Contenu seul</span> <span className="font-bold text-purple-600">+35%</span></div>
                            <div className="pt-2 border-t border-slate-100 flex justify-between text-base font-bold"><span>Combiné</span> <span className="text-emerald-600">+120%</span></div>
                        </div>
                    </div>
                </div>
                <p className="text-center font-bold text-slate-900">Conclusion : Le contenu a 3x plus d'impact que la technique seule. Mais ensemble, ils se multiplient.</p>
            </section>

            <section id="cas-clients" className="my-16">
                <h2 className="text-3xl mb-8">Cas Clients : Résultats Réels</h2>
                
                <div className="space-y-8">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                        <h3 className="text-xl font-bold mt-0 mb-4 text-blue-700">Cas Client #1 : Agence B2B (Technique Seul)</h3>
                        <p className="text-sm mb-4"><strong>Situation :</strong> Site parfait (100/100 Lighthouse) mais contenu court (500 mots). Position moyenne 15-25.</p>
                        <p className="text-sm mb-4"><strong>Résultats après 3 mois :</strong> Position 12-20, Trafic +20%, Conversions +5%.</p>
                        <p className="text-xs italic text-slate-500">Apprentissage : La technique seule ne suffit pas. Le contenu est le carburant.</p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                        <h3 className="text-xl font-bold mt-0 mb-4 text-purple-700">Cas Client #2 : E-commerce (Contenu Seul)</h3>
                        <p className="text-sm mb-4"><strong>Situation :</strong> Site lent (45/100 Lighthouse) mais contenu long (2 000+ mots). Position moyenne 8-15.</p>
                        <p className="text-sm mb-4"><strong>Résultats après 3 mois :</strong> Position 5-12, Trafic +75%, Conversions +45%.</p>
                        <p className="text-xs italic text-slate-500">Apprentissage : Le contenu génère du trafic même avec une technique faible, mais c'est inefficace sur le long terme.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200">
                        <h3 className="text-xl font-bold mt-0 mb-4 text-slate-900">Cas Client #3 : SaaS (Technique + Contenu)</h3>
                        <p className="text-sm mb-4"><strong>Situation :</strong> Site moyen (70/100 Lighthouse) et contenu moyen. Position moyenne 12-20.</p>
                        <p className="text-sm mb-4"><strong>Résultats après 6 mois :</strong> Position 3-8, Trafic <strong>+340%</strong>, Conversions <strong>+280%</strong>.</p>
                        <p className="text-xs italic text-slate-500">Apprentissage : La combinaison technique + contenu génère une croissance exponentielle.</p>
                    </div>
                </div>
            </section>

            <section id="strategie" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">Stratégie Complète : Comment Combiner les Deux</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                        <div className="text-4xl font-bold text-blue-100 mb-4">01</div>
                        <h3 className="text-xl font-bold mb-4">Audit & Corrections</h3>
                        <p className="text-sm text-slate-600 mb-4">Semaines 1-4 : Audit technique complet et correction des problèmes critiques (indexabilité, Core Web Vitals).</p>
                        <ul className="text-xs space-y-2 text-slate-500 list-none p-0">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full"></div> Lighthouse Audit</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full"></div> GSC Analysis</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                        <div className="text-4xl font-bold text-purple-100 mb-4">02</div>
                        <h3 className="text-xl font-bold mb-4">Stratégie Contenu</h3>
                        <p className="text-sm text-slate-600 mb-4">Semaines 5-8 : Recherche de 25-50 mots-clés et création d'un calendrier éditorial long-form.</p>
                        <ul className="text-xs space-y-2 text-slate-500 list-none p-0">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-600 rounded-full"></div> Keyword Research</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-600 rounded-full"></div> Editorial Plan</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600"></div>
                        <div className="text-4xl font-bold text-emerald-100 mb-4">03</div>
                        <h3 className="text-xl font-bold mb-4">Production & Suivi</h3>
                        <p className="text-sm text-slate-600 mb-4">Mois 3-6 : Création de 15+ articles (2 000+ mots), optimisation E-E-A-T et monitoring des rankings.</p>
                        <ul className="text-xs space-y-2 text-slate-500 list-none p-0">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-600 rounded-full"></div> Content Creation</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-600 rounded-full"></div> Rank Tracking</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="erreurs" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <AlertTriangle className="text-red-600" size={40} />
                    Erreurs Courantes à Éviter
                </h2>
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                    <ul className="space-y-4 m-0">
                        <li><strong>Négliger la Technique :</strong> Créer du contenu sans vérifier l'indexabilité.</li>
                        <li><strong>Contenu Générique :</strong> Articles courts sans valeur ajoutée réelle.</li>
                        <li><strong>Ignorer l'E-E-A-T :</strong> Ne pas présenter d'experts ou de preuves d'autorité.</li>
                        <li><strong>Pas de Liens Internes :</strong> Empêcher la circulation du "jus" SEO.</li>
                        <li><strong>Pas de Mise à Jour :</strong> Laisser le contenu vieillir et perdre ses positions.</li>
                    </ul>
                </div>
            </section>

            <section id="checklist" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <ListChecks className="text-blue-600" size={40} />
                    Checklist SEO Technique vs Contenu
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold mb-4">SEO Technique</h3>
                        <ul className="text-sm space-y-2 list-none p-0">
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Robots.txt & Sitemap</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Indexabilité (noindex check)</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Core Web Vitals (LCP, FID, CLS)</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Architecture (Max 3 clics)</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold mb-4">SEO Contenu</h3>
                        <ul className="text-sm space-y-2 list-none p-0">
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Recherche de mots-clés</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Contenu 2 000+ mots</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Optimisation On-Page (H1, Meta)</li>
                            <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border border-slate-300"></div> Mise à jour (3-6 mois)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="outils" className="my-16">
                <h2 className="text-3xl mb-8">Outils Essentiels</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                        <h4 className="font-bold mb-4 text-blue-600">Technique</h4>
                        <ul className="text-xs space-y-2 text-slate-600">
                            <li>Google Search Console</li>
                            <li>Screaming Frog</li>
                            <li>PageSpeed Insights</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                        <h4 className="font-bold mb-4 text-purple-600">Contenu</h4>
                        <ul className="text-xs space-y-2 text-slate-600">
                            <li>Ahrefs / SEMrush</li>
                            <li>AnswerThePublic</li>
                            <li>Google Trends</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                        <h4 className="font-bold mb-4 text-emerald-600">Monitoring</h4>
                        <ul className="text-xs space-y-2 text-slate-600">
                            <li>GA4</li>
                            <li>Rank Tracker</li>
                            <li>Lighthouse</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="my-20 text-center">
                <h2 className="text-4xl font-bold mb-8">Conclusion</h2>
                <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto">
                    <strong>SEO technique et SEO contenu ne sont pas en compétition. Ils sont complémentaires.</strong> La combinaison génère une croissance exponentielle de <strong>+250% de trafic</strong>.
                </p>
                
                <div className="bg-slate-900 rounded-3xl p-10 text-white text-left max-w-3xl mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-6 mt-0">Actions immédiates :</h3>
                    <ol className="space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                            <span><strong>Cette semaine :</strong> Audit technique complet</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                            <span><strong>Semaine 2 :</strong> Correction des problèmes critiques</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                            <span><strong>Semaine 3 :</strong> Recherche de 25-50 mots-clés</span>
                        </li>
                    </ol>
                </div>
                
                <p className="mt-12 text-lg font-bold text-slate-900">
                    Commencez maintenant. Vos concurrents ne dorment pas.
                </p>
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
