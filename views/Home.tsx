
import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { PAGE_TO_URL } from '../constants';
import { ArrowRight, Check, Globe, Cpu, Zap, Search } from 'lucide-react';

export const Home: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden font-sans text-slate-900">
      
      {/* EXACT SEO/GSO HTML INJECTION */}
      {useEffect(() => {
        const exactHtml = `
    <title>Agence SEO & GSO | Référencement Naturel & Optimisation IA | Triaina</title>
    <meta name="description" content="Agence SEO spécialisée en référencement naturel et GSO. Consultant SEO expert. Audit SEO, optimisation IA (ChatGPT, Perplexity), expertise média. Pré-audit gratuit.">
    <meta name="keywords" content="agence seo, référencement naturel, gso, generative search optimization, consultant seo, audit seo, expertise media, relations presse, seo automation, content automation, ia seo, chatgpt optimization">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Agence SEO & GSO | Référencement Naturel & Optimisation IA | Triaina">
    <meta property="og:description" content="Agence SEO spécialisée en référencement naturel et GSO. Consultant SEO expert. Audit SEO, optimisation IA, expertise média. Pré-audit gratuit.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.triaina.fr/">
    <meta property="og:image" content="https://www.triaina.fr/og-image.jpg">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:site_name" content="Triaina">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Agence SEO & GSO | Référencement Naturel & Optimisation IA">
    <meta name="twitter:description" content="Agence SEO spécialisée en référencement naturel et GSO. Consultant SEO expert. Audit SEO, optimisation IA, expertise média.">
    <meta name="twitter:image" content="https://www.triaina.fr/twitter-image.jpg">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://www.triaina.fr/">
    
    <!-- Geo Tags (optionnel, peut être retiré si trop généraliste) -->
    <meta name="geo.region" content="FR">
    <meta name="geo.placename" content="France">
    
    <!-- Additional Meta -->
    <meta name="language" content="French">
    <meta name="author" content="Triaina">
    <meta name="robots" content="index, follow">
    
    <!-- Structured Data - Organization -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO spécialisée en référencement naturel et Generative Search Optimization (GSO)",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
        },
        "telephone": "[Votre téléphone]",
        "email": "[Votre email]",
        "sameAs": [
            "https://www.linkedin.com/company/triaina",
            "https://twitter.com/triaina",
            "https://www.facebook.com/triaina"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "France"
        }
    }
    </script>
    
    <!-- Structured Data - LocalBusiness -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Triaina - Agence SEO & GSO",
        "image": "https://www.triaina.fr/og-image.jpg",
        "description": "Agence SEO spécialisée en référencement naturel et Generative Search Optimization",
        "telephone": "[Votre téléphone]",
        "url": "https://www.triaina.fr/",
        "priceRange": "€€€",
        "areaServed": {
            "@type": "Country",
            "name": "France"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "52"
        }
    }
    </script>
    
    <!-- Structured Data - BreadcrumbList -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.triaina.fr/"
            }
        ]
    }
    </script>
    
    <!-- Structured Data - WebSite (Search Action) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.triaina.fr",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.triaina.fr/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }
    </script>
    
    <!-- Structured Data - Services -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Triaina - Agence SEO & GSO",
        "description": "Agence SEO spécialisée en référencement naturel et Generative Search Optimization",
        "provider": {
            "@type": "Organization",
            "name": "Triaina"
        },
        "areaServed": {
            "@type": "Country",
            "name": "France"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services SEO, GSO & Média",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Expertise SEO - Référencement Naturel"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Expertise GSO - Generative Search Optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Expertise Média - Amplification et Relations Presse"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automatisation de Contenu SEO"
                    }
                }
            ]
        }
    }
    </script>
    
    <!-- Structured Data - Article (Homepage) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Agence SEO & GSO | Référencement Naturel & Optimisation IA",
        "description": "Agence SEO spécialisée en référencement naturel et GSO. Consultant SEO expert. Audit SEO, optimisation IA, expertise média.",
        "url": "https://www.triaina.fr/",
        "image": "https://www.triaina.fr/og-image.jpg",
        "datePublished": "2019-01-01",
        "dateModified": "2026-02-23",
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
        }
    }
    </script>
        `;
        const fragment = document.createRange().createContextualFragment(exactHtml);
        const elements: Node[] = [];
        fragment.childNodes.forEach(node => {
            elements.push(node.cloneNode(true));
        });
        
        elements.forEach(node => {
            document.head.appendChild(node);
        });

        return () => {
            elements.forEach(node => {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            });
        };
      }, [])}

      {/* ════════════ HERO HEADER ════════════ */}
      <header className="min-h-screen flex flex-col justify-center relative z-10 pt-32 pb-12 px-4 md:pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="font-display font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 animate-fade-in-up w-full max-w-5xl" style={{ animationDelay: '100ms' }}>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                    AGENCE SEO
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 mt-2 sm:mt-0">
                    & GSO
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Référencement Naturel & Optimisation IA
            </p>

            <div className="animate-pulse absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <span className="text-slate-400 text-sm tracking-widest uppercase">Scrollez pour découvrir</span>
            </div>
          </div>
      </header>

      <main className="relative z-20 bg-white">
        
        {/* INTRODUCTION */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Introduction</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p className="mb-6">
                    Bienvenue chez Triaina, votre agence SEO spécialisée en référencement naturel et Generative Search Optimization. Nous aidons les entreprises à dominer les résultats de recherche Google et les moteurs de recherche IA (ChatGPT, Perplexity, Claude).
                </p>
                <p className="mb-6">
                    Le référencement naturel (SEO) est l'investissement le plus rentable pour votre visibilité en ligne. Contrairement aux campagnes publicitaires payantes, le SEO génère du trafic qualifié 24h/24, 7j/7, sans coût par clic. Une bonne stratégie SEO peut multiplier votre trafic organique par 2 à 3 en 6 mois.
                </p>
                <p className="mb-6">
                    Chez Triaina, nous combinons le SEO traditionnel avec le GSO (Generative Search Optimization) pour vous assurer une visibilité maximale sur tous les canaux de recherche : Google Search, ChatGPT, Perplexity, Claude et Google AI Overview.
                </p>
                <p>
                    Nous travaillons avec des entreprises de tous les secteurs : e-commerce, services, B2B, immobilier, santé, etc. Notre approche est personnalisée, basée sur les données, et orientée vers les résultats mesurables.
                </p>
            </div>
        </section>

        {/* NOS SERVICES - BENTO GRID */}
        <section className="py-24 bg-slate-50 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-slate-900">Nos Services</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Une approche hybride pour dominer tous les canaux de recherche : Google, IA et Médias.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Expertise SEO - Large card */}
                    <div className="md:col-span-8 bg-slate-900 p-8 md:p-12 rounded-3xl text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                                    <Search size={28} />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4">Expertise SEO : Dominez Google Search</h3>
                                <p className="text-slate-300 mb-6 leading-relaxed text-lg max-w-2xl">
                                    Le SEO (Search Engine Optimization) est la discipline qui vous permet de ranker naturellement sur Google. Nous créons une stratégie SEO complète pour votre entreprise : audit SEO détaillé, optimisation on-page, création de contenu optimisé, netlinking stratégique et suivi mensuel.
                                </p>
                                <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                                    Nos clients voient en moyenne une augmentation de 200-400% de leur trafic organique. Découvrez comment notre consultant SEO peut transformer votre visibilité en ligne.
                                </p>
                            </div>
                            <a href={PAGE_TO_URL['expertise-seo']} onClick={(e) => {e.preventDefault(); onNavigate('expertise-seo')}} className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors w-fit group/link">
                                Explorez notre Expertise SEO <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Expertise GSO - Tall card */}
                    <div className="md:col-span-4 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 md:p-10 rounded-3xl text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500">
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-8 backdrop-blur-sm border border-white/20 group-hover:rotate-12 transition-transform duration-500">
                                <Cpu size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">Expertise GSO : Dominez les Moteurs IA</h3>
                            <p className="text-purple-100 mb-6 leading-relaxed flex-grow">
                                Le GSO (Generative Search Optimization) est la nouvelle frontière du référencement. Avec l'émergence des moteurs de recherche IA, votre contenu doit être visible dans les réponses générées par ChatGPT, Perplexity, Claude et Google AI Overview.
                            </p>
                            <a href={PAGE_TO_URL['expertise-gso']} onClick={(e) => {e.preventDefault(); onNavigate('expertise-gso')}} className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-200 transition-colors w-fit group/link mt-auto">
                                Explorez l'Expertise GSO <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Expertise Média - Normal card */}
                    <div className="md:col-span-5 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-500 group">
                        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-8 border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Expertise Média : Amplifiez Votre Visibilité</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            L'expertise média complète votre stratégie SEO en amplifiant votre présence sur les canaux numériques. Nous créons une stratégie média intégrée qui combine contenu, relations presse, partenariats et amplification pour maximiser votre visibilité.
                        </p>
                        <a href={PAGE_TO_URL['expertise-media']} onClick={(e) => {e.preventDefault(); onNavigate('expertise-media')}} className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors w-fit group/link">
                            Explorez l'Expertise Média <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Automatisation - Large card */}
                    <div className="md:col-span-7 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-10 rounded-3xl border border-emerald-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl group-hover:bg-emerald-300/40 transition-colors duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-8 border border-emerald-200 group-hover:scale-110 transition-transform duration-500">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">Automatisation de Contenu : Créez à l'Échelle</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Nous avons développé un logiciel propriétaire d'automatisation de contenu qui révolutionne la façon de créer du contenu optimisé SEO et GSO. Notre outil génère automatiquement du contenu de qualité, structuré et prêt à publier.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                                    <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500" /> Contenu long-form (1500+ mots)</li>
                                    <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500" /> Code HTML sémantique</li>
                                    <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500" /> Données structurées (schema.org)</li>
                                </ul>
                                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                                    <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500" /> Optimisation GSO (ChatGPT)</li>
                                    <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500" /> Balises IA pour citations</li>
                                </ul>
                            </div>

                            <a href={PAGE_TO_URL['expertise-content']} onClick={(e) => {e.preventDefault(); onNavigate('expertise-content')}} className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors w-fit group/link">
                                Découvrez notre Logiciel <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* POURQUOI CHOISIR TRIAINA */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-16 text-center text-slate-900">Pourquoi Choisir Triaina ?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
                    <h3 className="font-bold text-xl mb-3 text-slate-900">Expertise en Référencement Naturel</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Nous sommes spécialisés en SEO et GSO. Notre consultant SEO maîtrise les derniers algorithmes Google et les stratégies d'optimisation pour les moteurs IA. Nous créons des stratégies personnalisées basées sur vos objectifs.
                    </p>
                </div>

                <div className="p-6 border-l-4 border-purple-600 bg-slate-50">
                    <h3 className="font-bold text-xl mb-3 text-slate-900">Approche Hybride SEO + GSO + Média</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Nous ne nous contentons pas du SEO traditionnel. Nous combinons SEO, GSO et expertise média pour maximiser votre visibilité sur tous les canaux : Google Search, ChatGPT, Perplexity, Claude, médias et réseaux sociaux.
                    </p>
                </div>

                <div className="p-6 border-l-4 border-green-600 bg-slate-50">
                    <h3 className="font-bold text-xl mb-3 text-slate-900">Résultats Mesurables</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Nous trackons chaque métrique importante : positions sur vos mots-clés cibles, trafic organique, conversions, ROI. Vous recevez des rapports mensuels détaillés avec recommandations d'optimisation.
                    </p>
                </div>

                <div className="p-6 border-l-4 border-orange-600 bg-slate-50">
                    <h3 className="font-bold text-xl mb-3 text-slate-900">Transparence & Communication</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Nous préférons une communication directe et transparente avec nos clients. Pas de jargon compliqué, juste des résultats concrets et mesurables.
                    </p>
                </div>
            </div>
        </section>

        {/* DEMANDER UNE PRE-AUDIT */}
        <section className="py-24 bg-slate-900 text-white px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-display font-bold mb-6">Demander un Pré-Audit Gratuit</h2>
                <p className="text-xl text-slate-300 mb-10 font-light">
                    Vous voulez savoir comment améliorer votre visibilité en ligne ? Nous offrons un pré-audit gratuit pour évaluer votre situation actuelle.
                </p>
                <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-600/30"
                >
                    Demander le pré-audit gratuit
                </a>
            </div>
        </section>

        {/* EXPLOREZ NOS SERVICES (LINKS) */}
        <section className="py-16 bg-white border-t border-slate-200 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">Explorez Nos Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a 
                        href={PAGE_TO_URL['expertise-seo']} 
                        onClick={(e) => {e.preventDefault(); onNavigate('expertise-seo')}} 
                        className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Expertise SEO</span>
                        <span className="text-xs text-slate-500">Stratégie SEO complète et audit SEO</span>
                    </a>

                    <a 
                        href={PAGE_TO_URL['expertise-gso']} 
                        onClick={(e) => {e.preventDefault(); onNavigate('expertise-gso')}} 
                        className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">Expertise GSO</span>
                        <span className="text-xs text-slate-500">Optimisation pour ChatGPT, Perplexity et Claude</span>
                    </a>

                    <a 
                        href={PAGE_TO_URL['expertise-media']} 
                        onClick={(e) => {e.preventDefault(); onNavigate('expertise-media')}} 
                        className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">Expertise Média</span>
                        <span className="text-xs text-slate-500">Amplification et relations médias</span>
                    </a>

                    <a 
                        href={PAGE_TO_URL['expertise-content']} 
                        onClick={(e) => {e.preventDefault(); onNavigate('expertise-content')}} 
                        className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-xl hover:border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 lg:col-span-2"
                    >
                        <span className="font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-2">Automatisation de Contenu</span>
                        <span className="text-xs text-slate-500">Logiciel de création de contenu SEO</span>
                    </a>

                    <a 
                        href={PAGE_TO_URL['contact']} 
                        onClick={(e) => {e.preventDefault(); onNavigate('contact')}} 
                        className="group flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-900 rounded-xl hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="font-bold text-white mb-2">Nous Contacter</span>
                        <span className="text-xs text-slate-400">Demander un pré-audit</span>
                    </a>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};
