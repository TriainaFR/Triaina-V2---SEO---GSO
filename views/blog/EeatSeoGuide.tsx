import React, { useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Search, Activity, Layout, Link, Award, Target } from 'lucide-react';

export const EeatSeoGuide: React.FC = () => {
  useEffect(() => {
    const addMeta = (name: string, content: string, isProperty = false) => {
      let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
      return meta;
    };

    const addLink = (rel: string, href: string, hreflang?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
      return link;
    };

    const tags = [
      addMeta('author', 'Triaina'),
      addMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'),
      addMeta('language', 'French'),
      addMeta('revisit-after', '7 days'),
      addMeta('og:image:width', '1200', true),
      addMeta('og:image:height', '630', true),
      addMeta('og:site_name', 'Triaina', true),
      addMeta('og:locale', 'fr_FR', true),
      addMeta('twitter:creator', '@triaina')
    ];

    const links = [
      addLink('alternate', 'https://www.triaina.fr/blog/eeat-seo-guide-complet', 'fr'),
      addLink('alternate', 'https://www.triaina.fr/blog/eeat-seo-guide-complet', 'x-default')
    ];

    return () => {
      tags.forEach(tag => tag?.remove());
      links.forEach(link => link?.remove());
    };
  }, []);

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
              "name": "E-E-A-T SEO : Guide Complet",
              "item": "https://www.triaina.fr/blog/eeat-seo-guide-complet"
          }
      ]
  };

  const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "E-E-A-T SEO : Guide Complet pour Dominer Google en 2025",
      "description": "Guide complet E-E-A-T SEO 2025 : définition, 4 piliers (expertise, expérience, autorité, fiabilité), stratégie complète, cas clients, checklist et résultats mesurables.",
      "image": {
          "@type": "ImageObject",
          "url": "https://www.triaina.fr/images/e-e-a-t-seo-og.jpg",
          "width": 1200,
          "height": 630
      },
      "author": {
          "@type": "Organization",
          "name": "Triaina",
          "url": "https://www.triaina.fr",
          "logo": {
              "@type": "ImageObject",
              "url": "https://www.triaina.fr/logo.png",
              "width": 250,
              "height": 60
          }
      },
      "publisher": {
          "@type": "Organization",
          "name": "Triaina",
          "logo": {
              "@type": "ImageObject",
              "url": "https://www.triaina.fr/logo.png",
              "width": 250,
              "height": 60
          }
      },
      "datePublished": "2025-03-16",
      "dateModified": "2025-03-16",
      "wordCount": 2200,
      "articleBody": "En 2025, Google ne se contente plus de classer les pages web. Il classe les marques, les experts, les autorités. C'est le concept d'E-E-A-T qui domine tout. E-E-A-T signifie Expertise, Experience, Authority, Trustworthiness. C'est le critère le plus important de Google pour classer les sites."
  };

  const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
          {
              "@type": "Question",
              "name": "Qu'est-ce que E-E-A-T en SEO ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "E-E-A-T signifie Expertise, Experience, Authority, Trustworthiness. C'est un critère créé par Google pour évaluer la qualité d'un site web. Expertise = compétences, Experience = pratique réelle, Authority = reconnaissance externe, Trustworthiness = fiabilité."
              }
          },
          {
              "@type": "Question",
              "name": "Pourquoi E-E-A-T est important pour le SEO ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google utilise E-E-A-T pour éviter les contenus de mauvaise qualité. Un fort E-E-A-T signifie que Google vous reconnaît comme un expert, ce qui améliore vos rankings et votre trafic."
              }
          },
          {
              "@type": "Question",
              "name": "Comment construire l'E-E-A-T ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Construisez l'E-E-A-T en : 1) Créant du contenu long et approfondi (expertise), 2) Documentant vos cas clients et résultats (expérience), 3) Générant des backlinks et mentions médiatiques (autorité), 4) Étant transparent et sécurisé (fiabilité)."
              }
          },
          {
              "@type": "Question",
              "name": "Combien de temps pour voir les résultats E-E-A-T ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les premiers résultats apparaissent en 4-8 semaines. Les résultats significatifs (rankings, trafic) prennent 3-6 mois selon votre situation initiale."
              }
          },
          {
              "@type": "Question",
              "name": "E-E-A-T affecte-t-il le GSO ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, absolument. Les IA génératives comme ChatGPT et Gemini cherchent des sources fiables et d'autorité. Un fort E-E-A-T signifie que vous serez cité plus souvent par les IA."
              }
          },
          {
              "@type": "Question",
              "name": "Quelle est la différence entre E-E-A-T et EAT ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EAT est l'ancienne version (Expertise, Authority, Trustworthiness). Google a ajouté le premier E (Experience) en 2023 pour montrer que l'expérience pratique est aussi importante que l'expertise théorique."
              }
          },
          {
              "@type": "Question",
              "name": "Comment montrer mon expertise ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Montrez votre expertise en : 1) Créant du contenu long et approfondi, 2) Intégrant des données propriétaires, 3) Documentant vos cas clients, 4) Partageant vos recherches et études, 5) Citant vos sources."
              }
          },
          {
              "@type": "Question",
              "name": "Comment construire l'autorité ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Construisez l'autorité en : 1) Générant des backlinks depuis des sites d'autorité, 2) Publiant dans des médias reconnus, 3) Étant interviewé par des experts, 4) Créant des partenariats, 5) Construisant une présence sociale forte."
              }
          },
          {
              "@type": "Question",
              "name": "Comment inspirer la confiance (Trustworthiness) ?",
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Inspirez la confiance en : 1) Étant transparent sur vos méthodes et prix, 2) Assurant la sécurité de votre site (HTTPS), 3) Collectant et affichant les avis clients, 4) Ayant une politique de confidentialité claire, 5) Étant facile à contacter."
              }
          }
      ]
  };

  const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Triaina",
      "url": "https://www.triaina.fr",
      "logo": "https://www.triaina.fr/logo.png",
      "description": "Agence SEO et GSO spécialisée en E-E-A-T et référencement IA",
      "foundingDate": "2020",
      "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+33-XXX-XXX-XXX",
          "email": "contact@triaina.fr"
      },
      "sameAs": [
          "https://www.linkedin.com/company/triaina",
          "https://twitter.com/triaina"
      ],
      "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "47"
      }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
      <SEO 
        title="E-E-A-T SEO : Guide Complet pour Dominer Google en 2025" 
        description="Guide complet E-E-A-T SEO 2025 : définition, 4 piliers (expertise, expérience, autorité, fiabilité), stratégie, cas clients, checklist. Dominez Google et les IA génératives."
        keywords="E-E-A-T, E-E-A-T SEO, expertise, expérience, autorité, fiabilité, Google E-E-A-T, E-E-A-T 2025, guide E-E-A-T"
        schema={[breadcrumbSchema, articleSchema, faqSchema, organizationSchema]}
        ogTitle="E-E-A-T SEO : Guide Complet pour Dominer Google en 2025"
        ogDescription="Guide complet E-E-A-T : définition, 4 piliers, stratégie, cas clients, checklist. Dominez Google et les IA génératives."
        image="https://www.triaina.fr/images/e-e-a-t-seo-og.jpg"
        type="article"
        twitterCard="summary_large_image"
        canonicalUrl="https://www.triaina.fr/blog/eeat-seo-guide-complet"
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
            <span className="flex items-center gap-1"><Calendar size={12} /> 16 MARS 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 5 MIN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            E-E-A-T SEO : <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Guide Complet pour Dominer Google en 2025</span>
          </h1>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-video relative group">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
            alt="E-E-A-T SEO" 
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
                        <a href="#definition" className="hover:text-blue-600 transition-colors">Qu'est-ce que E-E-A-T ?</a>
                        <a href="#guide-pratique" className="hover:text-blue-600 transition-colors">Le Guide Pratique</a>
                        <a href="#erreur-fatale" className="hover:text-blue-600 transition-colors">L'IA Sans E-E-A-T</a>
                        <a href="#conclusion" className="hover:text-blue-600 transition-colors">Conclusion</a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9 prose prose-lg xl:prose-xl prose-slate max-w-none font-sans prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600">
            
            <section id="introduction" className="mb-16">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-2xl text-lg text-slate-700 leading-relaxed shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-0 mb-4">Introduction : Pourquoi E-E-A-T Change Tout en 2025</h2>
                    <p className="mb-4">
                        En 2025, Google ne se contente plus de classer les pages web. Il classe les <strong className="text-blue-900">marques</strong>, les <strong className="text-blue-900">experts</strong>, les <strong className="text-blue-900">autorités</strong>. C'est le concept d'<strong className="text-blue-900">E-E-A-T</strong> qui domine tout.
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
