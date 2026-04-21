import React from 'react';
import { SEO } from '../../components/SEO';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Search, Activity, Link, FileText, Users, Award, AlertCircle, Target, BarChart, Zap, EyeOff, Layers, Layout } from 'lucide-react';

export const AuditSeoGuide: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.triaina.fr"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.triaina.fr/blog"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Audit SEO : Guide Complet",
            "item": "https://www.triaina.fr/blog/audit-seo-guide-complet"
        }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit SEO : Guide Complet Étape par Étape",
    "description": "Guide complet audit SEO : définition, processus étape par étape, outils, checklist et FAQ pour optimiser votre site et améliorer votre visibilité Google.",
    "image": "https://www.triaina.fr/images/audit-seo-guide.jpg",
    "author": {
        "@type": "Organization",
        "name": "Triaina"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Triaina",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.triaina.fr/logo.png"
        }
    },
    "datePublished": "2026-04-20",
    "dateModified": "2026-04-20",
    "wordCount": 2200,
    "articleBody": "Un audit SEO est l'analyse complète et approfondie de votre site web pour identifier tous les problèmes qui empêchent votre site de ranker sur Google. C'est la première étape essentielle de toute stratégie SEO efficace..."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Combien de temps prend un audit SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un audit SEO complet prend généralement 2-4 semaines selon la taille de votre site. Un petit site (< 100 pages) prend 1-2 semaines. Un grand site (> 1 000 pages) prend 3-4 semaines."
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le coût d'un audit SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un audit SEO coûte généralement entre 2 000€ et 5 000€ selon la complexité. Un petit site coûte 2 000-3 000€. Un grand site coûte 4 000-5 000€."
            }
        },
        {
            "@type": "Question",
            "name": "À quelle fréquence faire un audit SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous recommandons de faire un audit SEO complet une fois par an. Vous pouvez faire des audits partiels tous les 3-6 mois pour suivre les progrès."
            }
        },
        {
            "@type": "Question",
            "name": "Qui devrait faire un audit SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Toutes les entreprises qui veulent améliorer leur visibilité sur Google. C'est particulièrement important si vous avez un site depuis plus de 6 mois."
            }
        },
        {
            "@type": "Question",
            "name": "Un audit SEO garantit-il des résultats ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non. Un audit SEO identifie les problèmes, mais les résultats dépendent de la mise en œuvre des recommandations. Un bon audit + une bonne exécution = résultats."
            }
        },
        {
            "@type": "Question",
            "name": "Puis-je faire un audit SEO moi-même ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, vous pouvez faire un audit SEO basique avec des outils gratuits. Mais un audit professionnel est plus complet et plus fiable."
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le meilleur outil d'audit SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Il n'y a pas de meilleur outil. Chaque outil a ses forces et faiblesses. Nous recommandons d'utiliser une combinaison d'outils (Google Search Console + SEMrush/Ahrefs + Screaming Frog)."
            }
        },
        {
            "@type": "Question",
            "name": "Combien de temps pour voir les résultats après un audit ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les premiers résultats apparaissent généralement en 4-8 semaines. Les résultats plus significatifs prennent 3-6 mois."
            }
        },
        {
            "@type": "Question",
            "name": "Un audit SEO est-il nécessaire ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui. Sans audit SEO, vous ne savez pas ce qui bloque votre visibilité. C'est la première étape essentielle de toute stratégie SEO."
            }
        }
    ]
  };

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
      <SEO 
        title="Audit SEO : Guide Complet Étape par Étape" 
        description="Guide complet audit SEO : définition, processus étape par étape, outils, checklist et FAQ. Optimisez votre site et améliorez votre visibilité Google."
        keywords="audit SEO, audit technique, audit on-page, audit off-page, guide audit SEO"
        schema={[breadcrumbSchema, articleSchema, faqSchema]}
        ogTitle="Audit SEO : Guide Complet Étape par Étape"
        ogDescription="Guide complet audit SEO : définition, processus, outils, checklist et FAQ pour optimiser votre site."
        image="https://www.triaina.fr/images/audit-seo-guide.jpg"
        type="article"
        twitterCard="summary_large_image"
        canonicalUrl="https://www.triaina.fr/blog/audit-seo-guide-complet"
      />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <a href="/blog" className="inline-flex items-center text-sm font-mono text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          RETOUR AU BLOG
        </a>

        {/* Header */}
        <header className="mb-12 text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-blue-600 mb-6 uppercase tracking-widest">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">Guide SEO</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> 20 AVRIL 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 10 MIN</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Audit SEO : <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Guide Complet Étape par Étape</span>
          </h1>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-video relative group">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Audit SEO" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 space-y-4">
                    <h3 className="font-display font-bold text-slate-900 uppercase tracking-widest text-sm mb-4">Sommaire</h3>
                    <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-500">
                        <a href="#introduction" className="hover:text-blue-600 transition-colors">Introduction</a>
                        <a href="#quest-ce-que" className="hover:text-blue-600 transition-colors">Qu'est-ce qu'un Audit SEO ?</a>
                        <a href="#processus" className="hover:text-blue-600 transition-colors">Processus d'Audit SEO Complet</a>
                        <a href="#checklist" className="hover:text-blue-600 transition-colors">Checklist d'Audit SEO Complète</a>
                        <a href="#outils" className="hover:text-blue-600 transition-colors">Outils d'Audit SEO Essentiels</a>
                        <a href="#cas-clients" className="hover:text-blue-600 transition-colors">Cas Clients</a>
                        <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
                        <a href="#conclusion" className="hover:text-blue-600 transition-colors">Conclusion</a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9 prose prose-lg xl:prose-xl prose-slate max-w-none font-sans prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600">
            
            <section id="introduction" className="mb-16">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl text-lg text-slate-700 leading-relaxed shadow-sm">
                    <p className="mb-4">
                        Un <strong>audit SEO</strong> est l'analyse complète et approfondie de votre site web pour identifier tous les problèmes qui empêchent votre site de ranker sur Google. C'est la première étape essentielle de toute stratégie SEO efficace.
                    </p>
                    <p className="mb-4">
                        Mais qu'est-ce qu'un audit SEO exactement ? Comment le réaliser ? Quels outils utiliser ? Et surtout, comment interpréter les résultats pour améliorer votre visibilité ?
                    </p>
                    <p className="font-medium text-blue-800 m-0">
                        Ce guide complet vous explique tout ce que vous devez savoir sur l'audit SEO en 2026.
                    </p>
                </div>
            </section>

            <section id="quest-ce-que" className="my-16">
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Qu'est-ce qu'un Audit SEO ?</h2>
                
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Search size={24} /></span>
                        Définition Précise
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Un <strong>audit SEO</strong> est une analyse systématique et complète de votre site web qui évalue :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 not-prose">
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Activity size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Optimisation technique</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">Vitesse, structure, mobile-friendly, indexation</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Layout size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Optimisation on-page</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">Mots-clés, titles, meta descriptions, headings</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Link size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Optimisation off-page</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">Backlinks, mentions de marque, autorité</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg"><FileText size={20} /></div>
                                <h4 className="font-bold text-slate-900 m-0">Contenu</h4>
                            </div>
                            <p className="text-sm text-slate-600 m-0">Qualité, longueur, originalité, pertinence</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Target size={24} /></span>
                        Pourquoi faire un audit SEO ?
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">Un audit SEO vous permet de :</p>
                    <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="bg-white text-blue-600 p-1.5 rounded-full shadow-sm mt-0.5"><AlertCircle size={16} /></div>
                            <div>
                                <strong className="block text-slate-900 mb-1">Identifier les problèmes</strong>
                                <span className="text-sm text-slate-600">Découvrir ce qui bloque votre visibilité</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="bg-white text-blue-600 p-1.5 rounded-full shadow-sm mt-0.5"><EyeOff size={16} /></div>
                            <div>
                                <strong className="block text-slate-900 mb-1">Comprendre votre situation</strong>
                                <span className="text-sm text-slate-600">Savoir où vous en êtes actuellement</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="bg-white text-blue-600 p-1.5 rounded-full shadow-sm mt-0.5"><Layers size={16} /></div>
                            <div>
                                <strong className="block text-slate-900 mb-1">Prioriser les actions</strong>
                                <span className="text-sm text-slate-600">Savoir par où commencer</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="bg-white text-blue-600 p-1.5 rounded-full shadow-sm mt-0.5"><BarChart size={16} /></div>
                            <div>
                                <strong className="block text-slate-900 mb-1">Mesurer les résultats</strong>
                                <span className="text-sm text-slate-600">Avoir une baseline pour comparer</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors sm:col-span-2 md:col-span-1">
                            <div className="bg-white text-blue-600 p-1.5 rounded-full shadow-sm mt-0.5"><Zap size={16} /></div>
                            <div>
                                <strong className="block text-slate-900 mb-1">Optimiser votre ROI</strong>
                                <span className="text-sm text-slate-600">Investir dans les bonnes actions</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                        <p className="text-amber-800 m-0 font-medium">
                            Sans audit SEO, vous travaillez à l'aveugle. Vous ne savez pas ce qui fonctionne et ce qui ne fonctionne pas.
                        </p>
                    </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Layers size={24} /></span>
                        Les types d'audits SEO
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">Il existe plusieurs types d'audits selon vos besoins :</p>
                    <div className="grid sm:grid-cols-2 gap-4 not-prose">
                        <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-colors">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Audit technique
                            </h4>
                            <p className="text-sm text-slate-600 m-0">Analyse de la structure, vitesse, indexation, erreurs</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-purple-200 transition-colors">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                Audit on-page
                            </h4>
                            <p className="text-sm text-slate-600 m-0">Analyse des mots-clés, titles, meta descriptions, contenu</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-emerald-200 transition-colors">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Audit off-page
                            </h4>
                            <p className="text-sm text-slate-600 m-0">Analyse des backlinks, mentions, autorité</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-colors bg-gradient-to-br from-white to-orange-50/50">
                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                Audit complet
                            </h4>
                            <p className="text-sm text-slate-600 m-0">Combinaison de tous les audits ci-dessus</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="processus" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">Processus d'Audit SEO Complet</h2>
                <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Voici comment mettre en place un audit SEO efficace.</p>
                
                <div className="relative">
                    {/* Ligne verticale de connexion */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
                    
                    <div className="space-y-12 mt-8 relative z-10">
                        {[
                            { 
                                step: 1, 
                                title: "Audit technique", 
                                desc: "L'audit technique analyse la structure et la santé technique de votre site.",
                                list: ["Vitesse de chargement : Moins de 3 secondes", "Mobile-friendly : Site responsive", "Indexation : Toutes les pages indexées", "Sitemap XML & Robots.txt", "Erreurs 404 & Redirections 301"],
                                color: "blue"
                            },
                            { 
                                step: 2, 
                                title: "Audit on-page", 
                                desc: "L'audit on-page analyse l'optimisation de chaque page pour les mots-clés.",
                                list: ["H1 unique et optimisé", "Titles et Meta descriptions", "Headings (H2, H3) logiques", "Mots-clés pertinents", "Images optimisées (alt text)"],
                                color: "purple"
                            },
                            { 
                                step: 3, 
                                title: "Audit off-page", 
                                desc: "L'audit off-page analyse votre autorité et vos backlinks.",
                                list: ["Backlinks : Nombre, qualité, diversité", "Domaines référents", "Anchor text naturel", "Mentions de marque", "Autorité du domaine (DA)"],
                                color: "emerald"
                            },
                            { 
                                step: 4, 
                                title: "Audit de contenu", 
                                desc: "L'audit de contenu analyse la qualité et la pertinence de votre contenu.",
                                list: ["Longueur (1 500+ mots)", "Originalité (pas de duplicate)", "Pertinence avec l'intent", "Fraîcheur du contenu", "E-E-A-T démontré"],
                                color: "blue"
                            },
                            { 
                                step: 5, 
                                title: "Audit UX/Engagement", 
                                desc: "L'audit UX analyse l'expérience utilisateur et l'engagement.",
                                list: ["Taux de rebond", "Temps sur page", "Pages par session", "Navigation intuitive", "Mobile UX optimale"],
                                color: "purple"
                            }
                        ].map((item, index) => {
                            const isEven = index % 2 === 0;
                            const colorClasses = {
                                blue: "bg-blue-50 border-blue-200 text-blue-700",
                                purple: "bg-purple-50 border-purple-200 text-purple-700",
                                emerald: "bg-emerald-50 border-emerald-200 text-emerald-700"
                            }[item.color as 'blue' | 'purple' | 'emerald'] || "bg-blue-50 border-blue-200 text-blue-700";
                            
                            const iconColorClasses = {
                                blue: "bg-blue-600 shadow-blue-200",
                                purple: "bg-purple-600 shadow-purple-200",
                                emerald: "bg-emerald-600 shadow-emerald-200"
                            }[item.color as 'blue' | 'purple' | 'emerald'] || "bg-blue-600 shadow-blue-200";

                            return (
                                <div key={item.step} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Espace vide pour l'alignement alterné sur desktop */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                    
                                    {/* Cercle central */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-2xl text-white shadow-xl z-10 border-4 border-white ${iconColorClasses}`}>
                                        {item.step}
                                    </div>
                                    
                                    {/* Contenu de la carte */}
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

        {/* ===== SECTION 7: CHECKLIST ===== */}
        <section id="checklist" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Checklist d'Audit SEO Complète</h2>
            
            <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-blue-700 border-b pb-2">Audit Technique</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Vitesse de chargement &lt; 3 secondes</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Site mobile-friendly</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> HTTPS activé</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Sitemap XML présent</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Robots.txt configuré</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Pas d'erreurs 404</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Redirections 301 correctes</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Pas de duplicate content</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Structure URL claire</li>
                        <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">☐</span> Indexation complète</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-purple-700 border-b pb-2">Audit On-page</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> H1 unique et optimisé</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Titles uniques et optimisés</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Meta descriptions uniques</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Headings logiques (H2, H3)</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Mots-clés pertinents</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Contenu &gt; 1 500 mots</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Contenu original</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Images optimisées</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Alt text présent</li>
                        <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">☐</span> Liens internes logiques</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-emerald-700 border-b pb-2">Audit Off-page</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Backlinks de qualité</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Domaines référents diversifiés</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Anchor text naturel</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Pas de backlinks toxiques</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Mentions de marque</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Présence sociale</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Autorité du domaine &gt; 20</li>
                        <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">☐</span> Pas de pénalités passées</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-amber-700 border-b pb-2">Audit Contenu</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Contenu long et approfondi</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Contenu original</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Contenu pertinent</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Contenu à jour</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Données propriétaires</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Cas clients</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> E-E-A-T démontré</li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">☐</span> Lisibilité optimale</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* ===== SECTION 8: OUTILS ===== */}
        <section id="outils" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Outils d'Audit SEO Essentiels</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                        <span className="text-blue-600">Outils Gratuits</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="block text-slate-900">Google Search Console</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Monitoring des rankings</li>
                                <li>Analyse du trafic</li>
                                <li>Identification des erreurs</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Google Analytics</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Analyse du trafic</li>
                                <li>Comportement des utilisateurs</li>
                                <li>Conversions</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Google PageSpeed Insights</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Vitesse de chargement</li>
                                <li>Optimisations recommandées</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                        <span className="text-purple-600">Outils Payants (Essentiels)</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="block text-slate-900">SEMrush ou Ahrefs</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Audit SEO complet</li>
                                <li>Analyse de backlinks</li>
                                <li>Recherche de mots-clés</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Screaming Frog (Payant)</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Audit technique approfondi</li>
                                <li>Crawl complet de site</li>
                                <li>Analyse de structure</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-slate-900">Surfer SEO</strong>
                            <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                <li>Optimisation sémantique de contenu</li>
                                <li>Analyse de concurrence SERP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ===== SECTION 4: CAS CLIENTS ===== */}
        <section id="cas-clients" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">Cas Clients : Résultats d'Audit SEO</h2>
            <p className="text-lg text-slate-600 mb-8">Voici des exemples concrets de résultats après un Audit SEO professionnel.</p>
            
            <div className="grid md:grid-cols-3 gap-6 not-prose">
                <div className="bg-white border text-center border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Activity size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">Site B2B</h3>
                    <p className="text-sm text-slate-500 mb-6">Secteur Service</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position : <span className="font-mono text-red-500">30-40</span></li>
                            <li>Trafic : <span className="font-mono text-slate-900">50 clics/mois</span></li>
                            <li>Problèmes : <span className="font-mono text-red-500">Contenu, Vitesse</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit réalisé :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Technique, On-page, Contenu</p>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-xl p-4 text-left border border-emerald-100">
                        <strong className="block text-xs uppercase tracking-wider text-emerald-700 mb-2">Résultats (4 mois)</strong>
                        <ul className="text-sm text-emerald-900 space-y-2">
                            <li className="flex justify-between items-center">Position <span className="font-bold text-emerald-600">8-12</span></li>
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-emerald-600">300/mois</span></li>
                            <li className="flex justify-between items-center">ROI <span className="font-bold text-emerald-600">+500%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-emerald-200 text-center">
                            <span className="text-xs font-bold text-emerald-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-emerald-600 block">+250 visites/mois</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border text-center border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                        <Layout size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">E-commerce</h3>
                    <p className="text-sm text-slate-500 mb-6">Retail</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position : <span className="font-mono text-orange-500">15-20</span></li>
                            <li>Trafic : <span className="font-mono text-slate-900">100 clics/mois</span></li>
                            <li>Problèmes : <span className="font-mono text-red-500">Duplicate, Structure</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit réalisé :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Technique, On-page, Off-page</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-4 text-left border border-purple-100">
                        <strong className="block text-xs uppercase tracking-wider text-purple-700 mb-2">Résultats (5 mois)</strong>
                        <ul className="text-sm text-purple-900 space-y-2">
                            <li className="flex justify-between items-center">Position <span className="font-bold text-purple-600">5-8</span></li>
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-purple-600">500/mois</span></li>
                            <li className="flex justify-between items-center">ROI <span className="font-bold text-purple-600">+400%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-purple-200 text-center">
                            <span className="text-xs font-bold text-purple-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-purple-600 block">+400 visites/mois</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border text-center border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                        <Target size={32} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-slate-900">Blog / Média</h3>
                    <p className="text-sm text-slate-500 mb-6">Édition en ligne</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left">
                        <strong className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Situation initiale</strong>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>Position : <span className="font-mono text-orange-500">20-30</span></li>
                            <li>Trafic : <span className="font-mono text-slate-900">200 clics/mois</span></li>
                            <li>Problèmes : <span className="font-mono text-red-500">Contenu faible, E-E-A-T</span></li>
                        </ul>
                    </div>
                    
                    <div className="text-left mb-6">
                        <strong className="block text-sm text-slate-900 mb-2">Audit réalisé :</strong>
                        <p className="text-sm text-slate-600 leading-tight">Contenu, Off-page, UX</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-xl p-4 text-left border border-amber-100">
                        <strong className="block text-xs uppercase tracking-wider text-amber-700 mb-2">Résultats (6 mois)</strong>
                        <ul className="text-sm text-amber-900 space-y-2">
                            <li className="flex justify-between items-center">Position <span className="font-bold text-amber-600">3-6</span></li>
                            <li className="flex justify-between items-center">Trafic <span className="font-bold text-amber-600">800/mois</span></li>
                            <li className="flex justify-between items-center">ROI <span className="font-bold text-amber-600">+300%</span></li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-amber-200 text-center">
                            <span className="text-xs font-bold text-amber-800 block">RÉSULTAT TOTAL</span>
                            <span className="text-lg font-display font-bold text-amber-600 block">+600 visites/mois</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ===== SECTION 10: FAQ ===== */}
        <section id="faq" className="my-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold text-slate-900">FAQ : Audit SEO</h2>
            <div className="space-y-4 not-prose">
                {[
                    { q: "Combien de temps prend un audit SEO ?", a: "Un audit SEO complet prend généralement 2-4 semaines selon la taille de votre site. Un petit site (< 100 pages) prend 1-2 semaines. Un grand site (> 1 000 pages) prend 3-4 semaines." },
                    { q: "Quel est le coût d'un audit SEO ?", a: "Un audit SEO coûte généralement entre 2 000€ et 5 000€ selon la complexité. Un petit site coûte 2 000-3 000€. Un grand site coûte 4 000-5 000€." },
                    { q: "À quelle fréquence faire un audit SEO ?", a: "Nous recommandons de faire un audit SEO complet une fois par an. Vous pouvez faire des audits partiels tous les 3-6 mois pour suivre les progrès." },
                    { q: "Qui devrait faire un audit SEO ?", a: "Toutes les entreprises qui veulent améliorer leur visibilité sur Google. C'est particulièrement important si vous avez un site depuis plus de 6 mois." },
                    { q: "Un audit SEO garantit-il des résultats ?", a: "Non. Un audit SEO identifie les problèmes, mais les résultats dépendent de la mise en œuvre des recommandations. Un bon audit + une bonne exécution = résultats." },
                    { q: "Puis-je faire un audit SEO moi-même ?", a: "Oui, vous pouvez faire un audit SEO basique avec des outils gratuits. Mais un audit professionnel est plus complet et plus fiable." },
                    { q: "Quel est le meilleur outil d'audit SEO ?", a: "Il n'y a pas de meilleur outil. Chaque outil a ses forces et faiblesses. Nous recommandons d'utiliser une combinaison d'outils (Google Search Console + SEMrush/Ahrefs + Screaming Frog)." },
                    { q: "Combien de temps pour voir les résultats après un audit ?", a: "Les premiers résultats apparaissent généralement en 4-8 semaines. Les résultats plus significatifs prennent 3-6 mois." },
                    { q: "Un audit SEO est-il nécessaire ?", a: "Oui. Sans audit SEO, vous ne savez pas ce qui bloque votre visibilité. C'est la première étape essentielle de toute stratégie SEO." }
                ].map((item, i) => (
                    <details key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-blue-300">
                        <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
                            <span className="text-lg">{item.q}</span>
                            <span className="bg-slate-50 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-180 border border-slate-200 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-6 text-base leading-relaxed animate-fade-in-up pt-4 border-t border-slate-100">
                            {item.a}
                        </p>
                    </details>
                ))}
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
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Tapez votre mot-clé sur Google. Qui est premier ?</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez Pagespeed Insights sur votre Home.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-4">D'ici 15 Jours</h3>
                        <ul className="space-y-3 text-sm text-emerald-900">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> Prenez vos 5 meilleures pages et ajoutez 500 mots de contenu.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Nettoyez toutes vos erreurs 404.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez un crawl Screaming Frog.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-4">Mois Prochain</h3>
                        <ul className="space-y-3 text-sm text-emerald-900">
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> Planifiez un Audit SEO Complet.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> Déployez les corrections techniques.</li>
                            <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> Lancez une campagne de netlinking.</li>
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
                        Un audit SEO est l'investissement le plus important que vous puissiez faire pour votre visibilité en ligne. Sans audit, vous naviguez à l'aveugle.
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
            </article>
        </div>

        {/* Share / Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-mono text-slate-500">
                Partager ce guide
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

export default AuditSeoGuide;
