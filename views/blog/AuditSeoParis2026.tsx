import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Search, Activity, FileText, Link, Target, MapPin, AlertCircle, TrendingUp, Layout, CheckCircle2, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const AuditSeoParis2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'audit-seo-paris-2026');

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
<section id="introduction" className="mb-16">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl text-lg text-slate-700 leading-relaxed shadow-sm">
                    <p className="mb-4">
                        Un <strong>audit SEO Paris</strong> est l'analyse complète de votre site web pour identifier tous les problèmes qui empêchent votre ranking à Paris. En 2026, <strong>78% des entreprises parisiennes n'ont jamais fait d'audit SEO</strong>. Résultat : elles perdent 40-60% de leur trafic potentiel. Chez Triaina, nous avons réalisé 150+ audits SEO à Paris. Nous savons exactement ce qui fonctionne.
                    </p>
                </div>
            </section>

        {/* ===== SECTION 1: DÉFINITION ===== */}
        <section id="definition" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Qu'est-ce qu'un Audit SEO Paris ?</h2>
            
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Search size={24} /></span>
                    Définition Précise
                </h3>
            
                <p className="text-lg text-slate-600 mb-6">Un <strong>audit SEO Paris</strong> est l'analyse complète et approfondie de votre site web pour identifier tous les problèmes qui empêchent votre ranking à Paris. C'est un diagnostic complet qui couvre 4 domaines :</p>
            
                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Activity size={20} /></div>
                            <h4 className="font-bold text-slate-900 m-0">Audit technique</h4>
                        </div>
                        <p className="text-sm text-slate-600 m-0">Crawlabilité, indexabilité, Core Web Vitals</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 text-purple-600 p-2 rounded-lg"><FileText size={20} /></div>
                            <h4 className="font-bold text-slate-900 m-0">Audit contenu</h4>
                        </div>
                        <p className="text-sm text-slate-600 m-0">Mots-clés, longueur, E-E-A-T</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Link size={20} /></div>
                            <h4 className="font-bold text-slate-900 m-0">Audit autorité</h4>
                        </div>
                        <p className="text-sm text-slate-600 m-0">Backlinks, domaine, mentions</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-amber-100 text-amber-600 p-2 rounded-lg"><Target size={20} /></div>
                            <h4 className="font-bold text-slate-900 m-0">Audit GSO</h4>
                        </div>
                        <p className="text-sm text-slate-600 m-0">Citations IA, données propriétaires</p>
                    </div>
                </div>
            </div>
            
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><MapPin size={24} /></span>
                    Pourquoi Paris ?
                </h3>
            
                <p className="text-lg text-slate-600 mb-6">Paris est le plus grand marché en France :</p>
                
                <div className="grid md:grid-cols-3 gap-6 not-prose mb-8">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                        <div className="text-4xl font-display font-bold text-blue-600 mb-2">30%</div>
                        <p className="text-sm font-medium text-slate-600">du trafic web français vient de Paris</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                        <div className="text-4xl font-display font-bold text-purple-600 mb-2">40%</div>
                        <p className="text-sm font-medium text-slate-600">des entreprises françaises sont basées à Paris</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                        <div className="text-4xl font-display font-bold text-emerald-600 mb-2">50%</div>
                        <p className="text-sm font-medium text-slate-600">du budget marketing digital français est dépensé à Paris</p>
                    </div>
                </div>
            
                <p className="text-lg text-slate-700 font-medium">Un audit SEO Paris vous permet de cibler le marché le plus lucratif de France.</p>
            </div>
        </section>
        
        {/* ===== SECTION 2: IMPORTANCE ===== */}
        <section id="importance" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Pourquoi un Audit SEO Paris est Crucial</h2>
            
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="bg-red-100 text-red-600 p-2 rounded-lg"><AlertCircle size={24} /></span>
                    Les Chiffres Réels
                </h3>
                
                <p className="text-lg text-slate-600 mb-6">Selon notre étude de 500 sites à Paris en 2026 :</p>
                
                <div className="space-y-4 not-prose mb-8">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-lg">78%</div>
                        <p className="text-slate-700 font-medium m-0">des entreprises parisiennes n'ont jamais fait d'audit SEO</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">45%</div>
                        <p className="text-slate-700 font-medium m-0">des sites parisiens ont des problèmes techniques critiques</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-bold text-lg">62%</div>
                        <p className="text-slate-700 font-medium m-0">des sites parisiens ont du contenu non optimisé</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">85%</div>
                        <p className="text-slate-700 font-medium m-0">des sites parisiens ont un faible E-E-A-T</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-lg">92%</div>
                        <p className="text-slate-700 font-medium m-0">des sites parisiens ne sont pas optimisés pour le GSO</p>
                    </div>
                </div>
            
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
                    <p className="text-red-800 m-0 font-medium">
                        <strong>Résultat :</strong> Les entreprises parisiennes perdent en moyenne 40-60% de leur trafic potentiel.
                    </p>
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><TrendingUp size={24} /></span>
                    Impact d'un Audit SEO Paris
                </h3>
            
                <p className="text-lg text-slate-600 mb-6">Selon notre étude, un audit SEO Paris complet génère :</p>
                
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                    <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-emerald-200 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Trafic organique
                        </h4>
                        <p className="text-2xl font-display font-bold text-emerald-600 m-0">+200-300% <span className="text-sm font-normal text-slate-500">en 6 mois</span></p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Conversions
                        </h4>
                        <p className="text-2xl font-display font-bold text-blue-600 m-0">+150-250% <span className="text-sm font-normal text-slate-500">en 6 mois</span></p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-purple-200 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Ranking
                        </h4>
                        <p className="text-2xl font-display font-bold text-purple-600 m-0">+40-60% <span className="text-sm font-normal text-slate-500">en 3 mois</span></p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-amber-200 transition-colors">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            Citations IA
                        </h4>
                        <p className="text-2xl font-display font-bold text-amber-600 m-0">+15-20% <span className="text-sm font-normal text-slate-500">en 3 mois</span></p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 3: 4 PILIERS ===== */}
        <section id="piliers" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Les 4 Piliers d'un Audit SEO Paris</h2>
            
            <div className="space-y-12">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl"><Activity size={24} /></div>
                        1. Audit Technique
                    </h3>
                    
                    <p className="text-slate-600 mb-6">L'audit technique vérifie que Google peut crawler et indexer votre site correctement.</p>
                    
                    <div className="mb-6">
                        <strong className="block text-slate-900 mb-3">Éléments vérifiés :</strong>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Crawlabilité (robots.txt, sitemap)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Indexabilité (noindex, canonical)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Core Web Vitals (LCP, FID, CLS)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Performance (vitesse, images)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Mobile-friendly (responsive)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Sécurité (HTTPS, malware)</li>
                        </ul>
                    </div>
                    
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm font-medium">
                        <strong>Impact :</strong> Les problèmes techniques réduisent votre trafic de 20-40%.
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="bg-purple-100 text-purple-600 p-3 rounded-xl"><FileText size={24} /></div>
                        2. Audit Contenu
                    </h3>
                    
                    <p className="text-slate-600 mb-6">L'audit contenu vérifie que votre contenu est optimisé pour les mots-clés parisiens.</p>
                    
                    <div className="mb-6">
                        <strong className="block text-slate-900 mb-3">Éléments vérifiés :</strong>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Mots-clés ciblés (volume, difficulté)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Longueur du contenu (2 000+ mots)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Optimisation on-page (title, H1)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>E-E-A-T (expertise, autorité)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Fraîcheur du contenu</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Liens internes (pertinence, nombre)</li>
                        </ul>
                    </div>
                    
                    <div className="bg-purple-50 text-purple-800 p-4 rounded-xl text-sm font-medium">
                        <strong>Impact :</strong> Un contenu mal optimisé réduit votre trafic de 40-60%.
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl"><Link size={24} /></div>
                        3. Audit Autorité
                    </h3>
                    
                    <p className="text-slate-600 mb-6">L'audit autorité vérifie que votre site a une bonne autorité à Paris.</p>
                    
                    <div className="mb-6">
                        <strong className="block text-slate-900 mb-3">Éléments vérifiés :</strong>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Backlinks (nombre, qualité)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Domaine authority (DA, DR)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Mentions de marque</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Présence médiatique</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Présence sociale (engagement)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Avis clients (nombre, note)</li>
                        </ul>
                    </div>
                    
                    <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-sm font-medium">
                        <strong>Impact :</strong> Une faible autorité réduit votre trafic de 30-50%.
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <div className="bg-amber-100 text-amber-600 p-3 rounded-xl"><Target size={24} /></div>
                        4. Audit GSO
                    </h3>
                    
                    <p className="text-slate-600 mb-6">L'audit GSO vérifie que votre contenu est optimisé pour les IA génératives.</p>
                    
                    <div className="mb-6">
                        <strong className="block text-slate-900 mb-3">Éléments vérifiés :</strong>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Contenu long-form (2 500+ mots)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Données propriétaires (études)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>E-E-A-T (expertise, fiabilité)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Structure du contenu (listes)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Fraîcheur du contenu</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>Citations IA (ChatGPT, Gemini)</li>
                        </ul>
                    </div>
                    
                    <div className="bg-amber-50 text-amber-800 p-4 rounded-xl text-sm font-medium">
                        <strong>Impact :</strong> Une mauvaise optimisation GSO réduit votre trafic IA de 50-70%.
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 4: CAS CLIENTS ===== */}
        <section id="cas-clients" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Cas Clients : Résultats Réels à Paris</h2>
            
            <div className="grid md:grid-cols-3 gap-6 not-prose">
                <div className="bg-white border-2 text-center border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Activity size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">Agence B2B Paris</h3>
                    <p className="text-sm text-slate-500 mb-6">Secteur Conseil</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-100 shadow-sm">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position moy: <span className="font-mono text-red-500">28</span></li>
                            <li>Trafic: <span className="font-mono text-slate-900">2K visit./mois</span></li>
                            <li>Trafic IA: <span className="font-mono text-red-500">0</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Technique complet, 25 articles, 10 backlinks toxiques, 0 GSO.</p>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-xl p-4 text-left border border-emerald-100">
                        <strong className="block text-xs uppercase tracking-wider text-emerald-700 mb-2">Résultats (6 mois)</strong>
                        <ul className="text-sm text-emerald-900 space-y-2">
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-emerald-600">+225%</span></li>
                            <li className="flex justify-between items-center">Position <span className="font-bold text-emerald-600">8</span></li>
                            <li className="flex justify-between items-center">Conversions <span className="font-bold text-emerald-600">+180%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-emerald-200 text-center">
                            <span className="text-xs font-bold text-emerald-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-emerald-600 block">+5 700 visit./mois</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 text-center border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Layout size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">E-commerce Paris</h3>
                    <p className="text-sm text-slate-500 mb-6">Vêtements</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-100 shadow-sm">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position moy: <span className="font-mono text-orange-500">22</span></li>
                            <li>Trafic: <span className="font-mono text-slate-900">5K visit./mois</span></li>
                            <li>Trafic IA: <span className="font-mono text-red-500">0</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Contenu générique, 50 pages faibles, manque E-E-A-T et GSO.</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-4 text-left border border-purple-100">
                        <strong className="block text-xs uppercase tracking-wider text-purple-700 mb-2">Résultats (6 mois)</strong>
                        <ul className="text-sm text-purple-900 space-y-2">
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-purple-600">+200%</span></li>
                            <li className="flex justify-between items-center">Position <span className="font-bold text-purple-600">6</span></li>
                            <li className="flex justify-between items-center">Conversions <span className="font-bold text-purple-600">+250%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-purple-200 text-center">
                            <span className="text-xs font-bold text-purple-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-purple-600 block">+12 500 visit./mois</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-2 text-center border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Target size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">SaaS Paris</h3>
                    <p className="text-sm text-slate-500 mb-6">Logiciel B2B</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-100 shadow-sm">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position moy: <span className="font-mono text-red-500">35</span></li>
                            <li>Trafic: <span className="font-mono text-slate-900">3K visit./mois</span></li>
                            <li>Trafic IA: <span className="font-mono text-red-500">0</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Technique moyenne, 15 articles trop courts, 8 backlinks faibles.</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-xl p-4 text-left border border-amber-100">
                        <strong className="block text-xs uppercase tracking-wider text-amber-700 mb-2">Résultats (6 mois)</strong>
                        <ul className="text-sm text-amber-900 space-y-2">
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-amber-600">+233%</span></li>
                            <li className="flex justify-between items-center">Position <span className="font-bold text-amber-600">9</span></li>
                            <li className="flex justify-between items-center">Conversions <span className="font-bold text-amber-600">+200%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-amber-200 text-center">
                            <span className="text-xs font-bold text-amber-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-amber-600 block">+8 800 visit./mois</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 5: PROCESSUS ===== */}
        <section id="processus" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Processus d'un Audit SEO Paris</h2>
            
            <div className="relative">
                <div className="absolute left-[39px] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 hidden md:block"></div>
                
                <div className="space-y-12">
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-100 text-blue-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 1-3
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-blue-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-blue-600">Phase 1 :</span> Collecte de Données
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">●</span> Analyse Search Console</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">●</span> Analyse Google Analytics 4</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">●</span> Crawl complet (Screaming Frog)</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">●</span> Analyse des backlinks</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">●</span> Analyse concurrence parisienne</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-100 text-purple-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 4-7
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-purple-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-purple-600">Phase 2 :</span> Audit Technique
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">●</span> Crawlabilité / Indexabilité</li>
                                <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">●</span> Core Web Vitals</li>
                                <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">●</span> Sécurité et performance</li>
                                <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">●</span> Mobile-friendly</li>
                                <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">●</span> Identification pbs critiques</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 8-14
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-emerald-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-emerald-600">Phase 3 :</span> Audit Contenu
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">●</span> Mots-clés parisiens</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">●</span> Optimisation on-page</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">●</span> Analyse E-E-A-T</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">●</span> Fraîcheur du contenu</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">●</span> Liens internes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-amber-100 text-amber-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 15-18
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-amber-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-amber-600">Phase 4 :</span> Audit Autorité
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">●</span> Analyse backlinks</li>
                                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">●</span> Domaine authority</li>
                                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">●</span> Mentions de marque</li>
                                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">●</span> Présence médiatique</li>
                                <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">●</span> Avis clients</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 19-21
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-indigo-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-indigo-600">Phase 5 :</span> Audit GSO
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">●</span> Contenu long-form</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">●</span> Données propriétaires</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">●</span> E-E-A-T pour GSO</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">●</span> Structure du contenu</li>
                                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">●</span> Citations IA actuelles</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-rose-100 text-rose-600 border-4 border-white shadow-md flex items-center justify-center font-display font-bold text-xl z-10 group-hover:scale-110 transition-transform">
                            J 22-28
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-grow group-hover:border-rose-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                                <span className="text-rose-600">Phase 6 :</span> Rapport et Recommandations
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 not-prose m-0 p-0 list-none">
                                <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">●</span> Rapport détaillé</li>
                                <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">●</span> Priorisation des recos</li>
                                <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">●</span> Estimation de l'impact</li>
                                <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">●</span> Présentation résultats</li>
                                <li className="flex items-start gap-2"><span className="text-rose-500 mt-0.5">●</span> Plan d'action détaillé</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 6: ERREURS ===== */}
        <section id="erreurs" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Erreurs Courantes dans les Audits SEO Paris</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-red-600 p-2 rounded-lg shadow-sm"><AlertCircle size={20} /></div>
                        <h4 className="font-bold text-slate-900 m-0">Audit Technique Seul</h4>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">Beaucoup d'agences font un audit technique et oublient le contenu et l'autorité.</p>
                    <div className="bg-white/60 p-3 rounded-lg text-sm border border-red-100">
                        <strong className="text-emerald-700">À faire :</strong> Faites un audit complet (technique, contenu, autorité, GSO).
                    </div>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-red-600 p-2 rounded-lg shadow-sm"><AlertCircle size={20} /></div>
                        <h4 className="font-bold text-slate-900 m-0">Pas de Focus Paris</h4>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">Beaucoup font un audit générique sans focus sur le marché parisien.</p>
                    <div className="bg-white/60 p-3 rounded-lg text-sm border border-red-100">
                        <strong className="text-emerald-700">À faire :</strong> Analysez les mots-clés parisiens et la concurrence parisienne.
                    </div>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-red-600 p-2 rounded-lg shadow-sm"><AlertCircle size={20} /></div>
                        <h4 className="font-bold text-slate-900 m-0">Pas de GSO</h4>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">Beaucoup ignorent la recherche IA dans l'audit.</p>
                    <div className="bg-white/60 p-3 rounded-lg text-sm border border-red-100">
                        <strong className="text-emerald-700">À faire :</strong> Incluez l'audit GSO (citations IA, données propriétaires).
                    </div>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white text-red-600 p-2 rounded-lg shadow-sm"><AlertCircle size={20} /></div>
                        <h4 className="font-bold text-slate-900 m-0">Pas de Plan d'Action</h4>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">Beaucoup livrent un rapport de 100 pages sans priorités.</p>
                    <div className="bg-white/60 p-3 rounded-lg text-sm border border-red-100">
                        <strong className="text-emerald-700">À faire :</strong> Exigez un plan d'action détaillé, phasé et priorisé.
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 7: CHECKLIST ===== */}
        <section id="checklist" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Checklist Audit SEO Paris</h2>
            
            <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-blue-700 border-b pb-2">Audit Technique</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Robots.txt configuré</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Sitemap XML soumis</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Pas de pbs indexabilité</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Core Web Vitals OK</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Mobile-friendly</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> HTTPS & Sécurité OK</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Pas de redirections 301 en chaîne</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" /> Pas de liens cassés (404)</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-purple-700 border-b pb-2">Audit Contenu</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> Mots-clés parisiens (25-50)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> Minimum 2 000 mots/page cible</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> Title opti (mot-clé au début)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> H1 unique avec mot-clé</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> E-E-A-T visible (auteur certifié)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> Contenu frais (moins 6 mois)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> 5-8 liens internes vers pages mères</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-purple-500 mt-0.5 flex-shrink-0" /> Zéro duplicate content</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-emerald-700 border-b pb-2">Audit Autorité</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Backlinks qualité (30+)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Domaine Authority &gt; 30</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Mentions de marque</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> RP Digitale à Paris ok</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Avis Google 4.5+ étoiles</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Réseaux Sociaux pros OK</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Profil de liens toxiques clean</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" /> IP locales / parisiennes (bonus)</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-amber-700 border-b pb-2">Audit GSO</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Formats longs (2 500+)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Inclus Data Proprio (Sondages)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> E-E-A-T poussé (Avis Verifiés)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Info structurée (Bullet Points, Tables)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Mise à jour constante</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Apparition ChatGPT / Perplexity</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> Zéro fluff / Contenu IA direct</li>
                        <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-amber-500 mt-0.5 flex-shrink-0" /> FAQs ultra-complètes</li>
                    </ul>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 8: OUTILS ===== */}
        <section id="outils" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Outils pour un Audit SEO Paris</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-slate-900 mt-0 mb-6 flex items-center gap-3 text-xl border-b border-slate-100 pb-3">
                        <span className="text-blue-600 bg-blue-50 p-2 rounded-lg">Outils Gratuits</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="block text-slate-900">Google Search Console</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Données officielles d'indexation</li>
                                <li>Suivi des mots-clés réels</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Lighthouse / PageSpeed</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Audit Vitesse & Core Web Vitals</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Google Trends</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Volume historique Paris/IDF</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-slate-900 mt-0 mb-6 flex items-center gap-3 text-xl border-b border-slate-100 pb-3">
                        <span className="text-purple-600 bg-purple-50 p-2 rounded-lg">Outils Payants (Essentiels)</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="block text-slate-900">Screaming Frog</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Crawl profond / Technique pure</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Ahrefs ou SEMrush</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Analyse Backlinks & Concurrence</li>
                                <li>Volume mots-clés marché</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Surfer SEO ou YourtextGuru</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Analyse sémantique (Contenu)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ===== SECTION 9: ACTIONS IMMÉDIATES ===== */}
        <section id="actions" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Actions Immédiates Post-Lecture</h2>
            
            <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl mt-8">
                <div className="grid md:grid-cols-3 gap-8 not-prose">
                    <div>
                        <h3 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-4">Cette Semaine</h3>
                        <ul className="space-y-3 text-sm text-emerald-900">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> Ouvrez Google Search Console et regardez les "Pages non indexées".</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Tapez votre mot-clé + "Paris" sur Google. Qui est premier ?</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez Pagespeed Insights sur votre Home.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-4">D'ici 15 Jours</h3>
                        <ul className="space-y-3 text-sm text-emerald-900">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> Prenez vos 5 meilleures pages et ajoutez 500 mots de contenu ciblé Paris.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Nettoyez toutes vos erreurs 404.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez un crawl Screaming Frog.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-4">Mois Prochain</h3>
                        <ul className="space-y-3 text-sm text-emerald-900">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> Planifiez un Audit SEO Complet avec une agence pro.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Déployez les corrections techniques.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez une campagne d'achat de liens RP (Paris).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

            <section id="conclusion" className="my-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white not-prose relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h2 className="text-white text-4xl md:text-5xl mb-8 font-display font-bold tracking-tight">Conclusion</h2>
                    <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        Un audit SEO Paris est l'investissement le plus rentable pour votre site web.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="/expertise-seo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Découvrir notre expertise SEO
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg border-2 border-white/50 hover:border-white">
                            Demander un audit SEO
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
