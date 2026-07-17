import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Search, Activity, Layout, Link, Award, Target, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const EeatSeoGuide: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'eeat-seo-guide');

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
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-0 mb-4">Introduction : Pourquoi E-E-A-T Change Tout en 2026</h2>
                    <p className="mb-4">
                        En 2026, Google ne se contente plus de classer les pages web. Il classe les <strong className="text-blue-900">marques</strong>, les <strong className="text-blue-900">experts</strong>, les <strong className="text-blue-900">autorités</strong>. C'est le concept d'<strong className="text-blue-900">E-E-A-T</strong> qui domine tout.
                    </p>
                    <p className="mb-4">
                        E-E-A-T signifie <strong>Expertise, Experience, Authority, Trustworthiness</strong> (Expertise, Expérience, Autorité, Fiabilité). C'est le critère le plus important de Google pour classer les sites.
                    </p>
                    <p className="mb-4">
                        Mais voici le problème : <strong>la plupart des agences SEO ne savent pas comment construire l'E-E-A-T</strong>. Elles se concentrent sur les mots-clés, les backlinks, la vitesse. Elles oublient l'essentiel : <strong>montrer à Google que vous êtes un expert</strong>.
                    </p>
                    <p className="font-medium text-blue-800 m-0">
                        Chez Triaina, nous avons construit l'E-E-A-T pour plus de 50 clients. Nous savons exactement comment le faire. Et dans ce guide, nous vous montrons comment.
                    </p>
                </div>
            </section>

            <section id="definition" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Qu'est-ce que E-E-A-T ?</h2>
          
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Search size={24} /></span>
                        Définition Précise
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                        <strong>E-E-A-T</strong> est un acronyme utilisé par Google dans ses <em>Search Quality Rater Guidelines</em>. Il signifie :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 not-prose">
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Activity size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Experience (Expérience)</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">L'auteur a-t-il une expérience de première main avec le sujet ? A-t-il testé le produit ? A-t-il vécu la situation ?</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Layout size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Expertise (Expertise)</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">L'auteur a-t-il les connaissances, les qualifications et les compétences nécessaires pour parler du sujet ?</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Link size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Authority (Autorité)</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">L'auteur et le site web sont-ils reconnus comme des sources incontournables dans leur domaine ?</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-amber-100 text-amber-600 p-2 rounded-lg"><Award size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Trustworthiness (Fiabilité)</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">Le site, l'auteur et le contenu sont-ils dignes de confiance ? C'est le pilier central de l'E-E-A-T.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Target size={24} /></span>
                        Pourquoi E-E-A-T est-il si important ?
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Google veut fournir les meilleurs résultats à ses utilisateurs. Dans un monde où l'IA génère des millions d'articles par jour, Google a besoin d'un moyen de distinguer le contenu de qualité du contenu généré automatiquement.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                        <p className="text-amber-800 m-0 font-medium">
                            L'E-E-A-T est la réponse de Google. C'est le filtre qui permet de séparer les experts des amateurs. Si vous n'avez pas d'E-E-A-T, vous ne rankerez pas. C'est aussi simple que ça.
                        </p>
                    </div>
                </div>
            </section>

            <section id="guide-pratique" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">Comment Construire l'E-E-A-T : Le Guide Pratique</h2>
                <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Voici comment nous construisons l'E-E-A-T pour nos clients chez Triaina.</p>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
                    
                    <div className="space-y-12 mt-8 relative z-10">
                        {[
                            { 
                                step: 1, 
                                title: "Prouvez Votre Expertise", 
                                desc: "L'expertise ne se déclare pas, elle se prouve. Voici comment :",
                                list: ["Créez des pages Auteur détaillées (biographie, qualifications, LinkedIn)", "Publiez du contenu approfondi (guides complets, études de cas)", "Citez vos sources (études scientifiques, statistiques officielles)"],
                                color: "blue"
                            },
                            { 
                                step: 2, 
                                title: "Démontrez Votre Expérience", 
                                desc: "L'expérience est la preuve que vous avez \"mis les mains dans le cambouis\".",
                                list: ["Partagez des études de cas avec des résultats réels", "Utilisez des photos et vidéos originales de votre équipe", "Racontez des histoires personnelles (échecs, réussites)"],
                                color: "purple"
                            },
                            { 
                                step: 3, 
                                title: "Bâtissez Votre Autorité", 
                                desc: "L'autorité est la reconnaissance par vos pairs.",
                                list: ["Obtenez des backlinks de qualité depuis des sites reconnus", "Soyez mentionné dans la presse (Relations Presse)", "Participez à des conférences et podcasts"],
                                color: "emerald"
                            },
                            { 
                                step: 4, 
                                title: "Renforcez Votre Fiabilité", 
                                desc: "La fiabilité est le socle de l'E-E-A-T. Sans fiabilité, le reste ne compte pas.",
                                list: ["Sécurisez votre site (HTTPS)", "Affichez clairement vos informations de contact", "Ayez des pages \"À propos\" et \"Mentions légales\" impeccables", "Gérez votre e-réputation (avis clients)"],
                                color: "blue"
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
                                            <ul className={`space-y-2 m-0 p-0 list-none ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                                {item.list.map((listItem, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorClasses.split(' ')[2]}`}></span>
                                                        <span>{listItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="erreur-fatale" className="my-16">
                <h2 className="text-3xl mb-8">L'Erreur Fatale : L'IA Sans E-E-A-T</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                    <p className="mb-4">
                        Beaucoup d'entreprises pensent pouvoir dominer Google en générant des milliers d'articles avec ChatGPT. C'est une erreur fatale.
                    </p>
                    <p className="mb-4">
                        L'IA peut générer du texte, mais <strong>l'IA n'a pas d'E-E-A-T</strong>. L'IA n'a pas d'expérience, pas d'expertise réelle, pas d'autorité, et sa fiabilité est discutable.
                    </p>
                    <p className="font-medium text-red-800 m-0">
                        Si vous utilisez l'IA, vous devez y injecter votre E-E-A-T. C'est ce que nous appelons le <strong>GSO (Generative Search Optimization)</strong>.
                    </p>
                </div>
            </section>

            <section id="conclusion" className="my-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white not-prose relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h2 className="text-white text-4xl md:text-5xl mb-8 font-display font-bold tracking-tight">Conclusion : L'E-E-A-T est un Marathon, Pas un Sprint</h2>
                    <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        Construire l'E-E-A-T prend du temps. Ce n'est pas un hack SEO. C'est une stratégie d'entreprise.
                    </p>
                    <p className="text-white text-lg mb-10 max-w-4xl mx-auto">
                        Mais c'est la seule stratégie qui fonctionne sur le long terme. Les sites qui investissent dans l'E-E-A-T aujourd'hui seront les leaders de demain. Les autres disparaîtront.
                        <br/><br/>
                        <strong className="text-white text-xl">Chez Triaina, nous ne faisons pas que du SEO technique. Nous construisons des marques d'autorité. Nous construisons votre E-E-A-T.</strong>
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="/expertise-seo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Découvrir notre expertise SEO
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg border-2 border-white/50 hover:border-white">
                            Améliorer votre E-E-A-T
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
