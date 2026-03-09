import React from 'react';
import { SEO } from '../../components/SEO';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, CheckCircle2, Bot, Search, Zap, BarChart3, Globe, Cpu, Target, Trophy, TrendingUp } from 'lucide-react';

export const ReferencementIAGuide: React.FC = () => {
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
            "name": "Référencement IA : Guide Complet 2025",
            "item": "https://www.triaina.fr/blog/referencement-ia-guide-complet"
        }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Référencement IA : Guide Complet 2025 (ChatGPT, Gemini, Perplexity)",
    "description": "Guide complet du référencement IA 2025 : optimisation ChatGPT, Gemini, Perplexity, stratégie 5 étapes, outils, cas clients.",
    "image": "https://www.triaina.fr/images/referencement-ia-guide-complet.jpg",
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
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Quai Louis Blériot",
            "addressLocality": "Paris",
            "postalCode": "75016",
            "addressCountry": "FR"
        }
    },
    "datePublished": "2026-03-02",
    "dateModified": "2026-03-02",
    "wordCount": 2400,
    "articleBody": "Le référencement IA est devenu incontournable en 2025..."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Combien de temps pour voir les résultats en référencement IA ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les premiers résultats (citations dans les IA génératives) peuvent apparaître en 6-8 semaines. Les résultats plus significatifs (trafic, conversions) prennent généralement 3-6 mois."
            }
        },
        {
            "@type": "Question",
            "name": "Le référencement IA remplace-t-il le SEO ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain."
            }
        },
        {
            "@type": "Question",
            "name": "Faut-il choisir entre SEO et Référencement IA ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolument pas. Une approche SEO + GSO hybride est plus efficace et plus rentable qu'une approche cloisonnée."
            }
        },
        {
            "@type": "Question",
            "name": "Quels sont les critères de ranking des IA génératives ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les critères varient selon l'IA, mais incluent généralement : autorité du domaine, fraîcheur du contenu, E-E-A-T, contenu structuré, et pertinence thématique."
            }
        },
        {
            "@type": "Question",
            "name": "Comment tester si mon contenu est cité par les IA ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Allez sur ChatGPT, Gemini ou Perplexity et posez une question liée à votre secteur. Vérifiez si votre site est cité dans la réponse."
            }
        },
        {
            "@type": "Question",
            "name": "Quel est le coût du référencement IA ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un audit référencement IA coûte à partir de 3 500€. Un accompagnement démarre à partir de 1 000€/mois selon votre stratégie."
            }
        },
        {
            "@type": "Question",
            "name": "Pouvez-vous garantir des résultats ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous ne garantissons pas de résultats spécifiques, mais nous visons des objectifs mesurables. Nos clients obtiennent généralement une augmentation de 30-50% du trafic organique en 6 mois."
            }
        },
        {
            "@type": "Question",
            "name": "Quelle est la meilleure IA générative à optimiser ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cela dépend de votre audience. ChatGPT est la plus populaire, Gemini est intégrée à Google, Perplexity privilégie les sources originales. Une stratégie complète optimise pour les trois."
            }
        }
    ]
  };

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
      <SEO 
        title="Référencement IA : Guide Complet 2025 (ChatGPT, Gemini, Perplexity)" 
        description="Guide complet du référencement IA 2025 : optimisation ChatGPT, Gemini, Perplexity. Stratégie 5 étapes, outils, cas clients, FAQ. Tout ce que vous devez savoir."
        keywords="référencement IA, GSO, optimisation ChatGPT, optimisation Gemini, optimisation Perplexity, guide référencement IA 2025"
        schema={[breadcrumbSchema, articleSchema, faqSchema]}
        ogTitle="Référencement IA : Guide Complet 2025 (ChatGPT, Gemini, Perplexity)"
        ogDescription="Guide complet du référencement IA : stratégie, outils, cas clients. Optimisez votre présence auprès des IA génératives."
        image="https://www.triaina.fr/images/referencement-ia-guide-complet.jpg"
        type="article"
        twitterCard="summary_large_image"
        canonicalUrl="https://www.triaina.fr/blog/referencement-ia-guide-complet"
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
            <span className="bg-blue-50 px-3 py-1 rounded-full font-bold">Guide Expert</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> 02 MARS 2026</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 20 MIN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
            Référencement IA : <br/><span className="text-blue-700">Guide Complet 2025</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            (ChatGPT, Gemini, Perplexity)
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-video relative">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
            alt="Référencement IA et GSO" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 space-y-4">
                    <h3 className="font-display font-bold text-slate-900 uppercase tracking-widest text-sm mb-4">Sommaire</h3>
                    <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-500">
                        <a href="#introduction" className="hover:text-blue-600 transition-colors">Introduction</a>
                        <a href="#definition" className="hover:text-blue-600 transition-colors">Qu'est-ce que le GSO ?</a>
                        <a href="#pourquoi" className="hover:text-blue-600 transition-colors">Pourquoi c'est crucial</a>
                        <a href="#chatgpt" className="hover:text-blue-600 transition-colors">Optimisation ChatGPT</a>
                        <a href="#gemini" className="hover:text-blue-600 transition-colors">Optimisation Gemini</a>
                        <a href="#perplexity" className="hover:text-blue-600 transition-colors">Optimisation Perplexity</a>
                        <a href="#strategie" className="hover:text-blue-600 transition-colors">Stratégie en 5 Étapes</a>
                        <a href="#outils" className="hover:text-blue-600 transition-colors">Outils</a>
                        <a href="#cas-clients" className="hover:text-blue-600 transition-colors">Cas Clients</a>
                        <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9 prose prose-lg xl:prose-xl prose-slate max-w-none font-sans prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600">
            
            <section id="introduction">
                <p>Le <strong>référencement IA</strong> est devenu incontournable en 2025. Alors que les IA génératives comme ChatGPT, Gemini et Perplexity transforment la façon dont les utilisateurs cherchent de l'information, les entreprises doivent adapter leur stratégie de visibilité. Le SEO traditionnel ne suffit plus : il faut optimiser pour les IA génératives.</p>
                <p>Ce guide complet vous explique tout ce que vous devez savoir sur le <strong>référencement IA</strong> en 2025. Vous découvrirez comment fonctionnent les IA génératives, pourquoi le référencement IA est crucial, comment optimiser pour ChatGPT, Gemini et Perplexity, et comment mettre en place une stratégie efficace.</p>
                <p>Que vous soyez entrepreneur, responsable marketing ou spécialiste SEO, ce guide vous donnera les outils pour dominer le paysage du référencement IA.</p>
            </section>

            <div className="my-12 h-px bg-slate-200 w-full"></div>

            <section id="definition">
                <h2 className="flex items-center gap-3 text-3xl mb-8">
                    <Bot className="text-blue-600" size={32} />
                    Qu'est-ce que le Référencement IA ?
                </h2>
                
                <p>Le <strong>référencement IA</strong> (ou GSO - Generative Search Optimization) est l'ensemble des techniques permettant à votre contenu d'être recommandé, cité ou utilisé par les IA génératives comme source fiable.</p>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-8">
                    <h3 className="text-blue-900 mt-0 text-xl font-bold">Différence entre SEO et Référencement IA</h3>
                    <p>Le <strong>SEO traditionnel</strong> optimise votre site pour apparaître dans les résultats de recherche Google. Le <strong>référencement IA</strong> optimise votre contenu pour être sélectionné par les IA génératives comme source fiable.</p>
                    <p className="mb-2"><strong>Exemple concret :</strong></p>
                    <ul className="mb-0">
                        <li><strong>SEO</strong> : Ranker #1 sur "meilleure agence SEO Paris"</li>
                        <li><strong>Référencement IA</strong> : Être cité par ChatGPT quand un utilisateur demande "Quelle agence SEO recommandes-tu à Paris ?"</li>
                    </ul>
                </div>

                <h3>Les IA génératives qui dominent en 2025</h3>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                    <div className="p-6 rounded-2xl border bg-green-50 border-green-200">
                        <h4 className="font-display font-bold text-xl mb-2 text-green-800">ChatGPT (OpenAI)</h4>
                        <ul className="space-y-2 text-sm text-green-900">
                            <li>• 200+ millions d'utilisateurs actifs</li>
                            <li>• Critères : autorité du domaine, fraîcheur du contenu, pertinence thématique</li>
                            <li>• Données d'entraînement : jusqu'à avril 2024 + accès internet via plugins</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl border bg-blue-50 border-blue-200">
                        <h4 className="font-display font-bold text-xl mb-2 text-blue-800">Gemini (Google)</h4>
                        <ul className="space-y-2 text-sm text-blue-900">
                            <li>• Intégré à l'écosystème Google</li>
                            <li>• Critères : indexation Google, E-E-A-T, contenu structuré</li>
                            <li>• Accès : Gmail, Google Search, Google Workspace</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200">
                        <h4 className="font-display font-bold text-xl mb-2 text-slate-800">Perplexity</h4>
                        <ul className="space-y-2 text-sm text-slate-900">
                            <li>• Moteur de recherche IA en croissance rapide</li>
                            <li>• Critères : contenu original, citations claires, sources vérifiables</li>
                            <li>• Audience : Utilisateurs cherchant réponses précises et sourcées</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl border bg-orange-50 border-orange-200">
                        <h4 className="font-display font-bold text-xl mb-2 text-orange-800">Claude (Anthropic)</h4>
                        <ul className="space-y-2 text-sm text-orange-900">
                            <li>• Utilisé par les professionnels et entreprises</li>
                            <li>• Critères : profondeur, nuance, contenu technique de qualité</li>
                            <li>• Audience : Utilisateurs B2B et professionnels</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pourquoi" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 text-center font-display font-bold">Pourquoi le Référencement IA est Crucial en 2025</h2>
                
                <div className="grid md:grid-cols-12 gap-6 not-prose">
                    {/* Card 1 - Main Stat */}
                    <div className="md:col-span-12 lg:col-span-8 bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
                         <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-blue-400">
                                <TrendingUp size={24} />
                                <h3 className="text-xl font-bold m-0">1. Les IA génératives gagnent du terrain</h3>
                            </div>
                            <p className="text-slate-300 mb-8 text-lg leading-relaxed">Les IA génératives ne remplacent pas Google, mais elles capturent une part croissante du trafic de recherche. Les utilisateurs commencent par ChatGPT ou Gemini au lieu de Google.</p>
                            
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <p className="font-bold mb-4 text-white uppercase tracking-widest text-xs flex items-center gap-2">
                                    <BarChart3 size={14} /> Statistiques clés
                                </p>
                                <ul className="grid md:grid-cols-3 gap-6">
                                    <li className="space-y-1">
                                        <div className="text-2xl font-bold text-blue-400">40%</div>
                                        <div className="text-xs text-slate-400 leading-snug">des -25 ans utilisent ChatGPT/TikTok au lieu de Google</div>
                                    </li>
                                    <li className="space-y-1">
                                        <div className="text-2xl font-bold text-blue-400">1 Md</div>
                                        <div className="text-xs text-slate-400 leading-snug">d'appareils Android intègrent Gemini</div>
                                    </li>
                                    <li className="space-y-1">
                                        <div className="text-2xl font-bold text-blue-400">10 M</div>
                                        <div className="text-xs text-slate-400 leading-snug">d'utilisateurs actifs sur Perplexity</div>
                                    </li>
                                </ul>
                            </div>
                         </div>
                    </div>

                    {/* Card 2 - Traffic */}
                    <div className="md:col-span-6 lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">2. Nouvelle source de trafic qualifié</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Être cité par une IA générative génère du trafic qualifié. Les utilisateurs qui voient votre site recommandé par ChatGPT sont plus enclins à cliquer et convertir.</p>
                    </div>

                    {/* Card 3 - Competitive Advantage */}
                    <div className="md:col-span-6 lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">3. Avantage compétitif durable</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">La plupart des entreprises ne font pas encore de référencement IA. Agir maintenant vous donne un avantage compétitif durable.</p>
                    </div>

                    {/* Card 4 - Complementarity */}
                    <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                                <Zap size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">4. Complémentarité avec le SEO</h3>
                                <p className="text-blue-800 leading-relaxed">Le référencement IA ne remplace pas le SEO, il le complète. Une stratégie hybride SEO + IA maximise votre visibilité.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="chatgpt" className="my-16">
                <div className="border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
                    <h2 className="text-3xl mb-6 flex items-center gap-3 mt-0">
                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-lg">AI</span>
                        Optimisation ChatGPT : Guide Détaillé
                    </h2>
                    <p>ChatGPT est l'IA générative la plus populaire. Voici comment optimiser votre contenu pour ChatGPT.</p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Critères de ranking</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong>1. Autorité du domaine</strong>
                                    <br/><span className="text-sm text-slate-600">Backlinks de qualité, Mentions de marque, Historique du domaine</span>
                                </li>
                                <li>
                                    <strong>2. Fraîcheur du contenu</strong>
                                    <br/><span className="text-sm text-slate-600">Contenu récent et à jour, Mises à jour régulières, Dates de publication claires</span>
                                </li>
                                <li>
                                    <strong>3. Pertinence thématique</strong>
                                    <br/><span className="text-sm text-slate-600">Contenu aligné avec la requête, Couverture complète du sujet, Mots-clés pertinents</span>
                                </li>
                                <li>
                                    <strong>4. E-E-A-T</strong>
                                    <br/><span className="text-sm text-slate-600">Expertise, Expérience, Autorité, Fiabilité</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Stratégie d'optimisation</h3>
                            <ul className="space-y-2">
                                <li><strong>Créer du contenu long et approfondi :</strong> Minimum 2 000 mots, couvrir le sujet complètement, ajouter des données.</li>
                                <li><strong>Structurer le contenu clairement :</strong> H1 unique, H2/H3 logiques, listes à puces, paragraphes courts.</li>
                                <li><strong>Optimiser l'E-E-A-T :</strong> Montrer votre expertise et construire votre autorité.</li>
                                <li><strong>Générer des backlinks :</strong> Domaines d'autorité (DA &gt; 30), diversité des sources.</li>
                                <li><strong>Mettre à jour régulièrement :</strong> Ajouter du contenu nouveau, corriger les informations obsolètes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gemini" className="my-16">
                <div className="border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
                    <h2 className="text-3xl mb-6 flex items-center gap-3 mt-0">
                        <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-lg">G</span>
                        Optimisation Gemini : Guide Détaillé
                    </h2>
                    <p>Gemini s'appuie sur l'index Google. L'optimisation Gemini est donc très proche du SEO traditionnel.</p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Critères de ranking</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong>1. Indexation Google</strong>
                                    <br/><span className="text-sm text-slate-600">Être indexé par Google, Pas de noindex, Robots.txt correct</span>
                                </li>
                                <li>
                                    <strong>2. E-E-A-T</strong>
                                    <br/><span className="text-sm text-slate-600">Expertise reconnue, Expérience démontrée, Autorité établie, Fiabilité prouvée</span>
                                </li>
                                <li>
                                    <strong>3. Contenu structuré</strong>
                                    <br/><span className="text-sm text-slate-600">Schema markup, Données structurées, Contenu bien organisé</span>
                                </li>
                                <li>
                                    <strong>4. Signaux d'autorité</strong>
                                    <br/><span className="text-sm text-slate-600">Backlinks de qualité, Mentions de marque, Signaux sociaux</span>
                                </li>
                                <li>
                                    <strong>5. Fraîcheur du contenu</strong>
                                    <br/><span className="text-sm text-slate-600">Mises à jour régulières, Contenu récent, Dates de publication claires</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Stratégie d'optimisation</h3>
                            <ul className="space-y-2">
                                <li><strong>Optimisation SEO classique :</strong> Mots-clés pertinents, Structure logique, Vitesse de chargement, Mobile-friendly.</li>
                                <li><strong>Focus sur la pertinence thématique :</strong> Couvrir le sujet complètement, Créer des clusters de contenu, Liens internes logiques.</li>
                                <li><strong>Contenu structuré :</strong> Schema markup (Article, FAQPage, LocalBusiness), Données structurées, FAQ structurées.</li>
                                <li><strong>Signaux d'autorité :</strong> Backlinks de qualité, Mentions de marque, Signaux sociaux.</li>
                                <li><strong>Fraîcheur du contenu :</strong> Mises à jour régulières, Contenu récent, Dates de publication claires.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="perplexity" className="my-16">
                <div className="border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
                    <h2 className="text-3xl mb-6 flex items-center gap-3 mt-0">
                        <span className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center text-lg">P</span>
                        Optimisation Perplexity : Guide Détaillé
                    </h2>
                    <p>Perplexity privilégie les sources originales et vérifiables. Voici comment optimiser pour Perplexity.</p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Critères de ranking</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong>1. Contenu original</strong>
                                    <br/><span className="text-sm text-slate-600">Contenu unique et original, Pas de duplication, Perspective unique</span>
                                </li>
                                <li>
                                    <strong>2. Citations claires</strong>
                                    <br/><span className="text-sm text-slate-600">Sources vérifiables, Liens vers sources, Transparence</span>
                                </li>
                                <li>
                                    <strong>3. Données à jour</strong>
                                    <br/><span className="text-sm text-slate-600">Statistiques récentes, Informations actualisées, Dates de publication claires</span>
                                </li>
                                <li>
                                    <strong>4. Contenu technique</strong>
                                    <br/><span className="text-sm text-slate-600">Profondeur technique, Nuance et détail, Expertise démontrée</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-slate-900 mt-0">Stratégie d'optimisation</h3>
                            <ul className="space-y-2">
                                <li><strong>Créer du contenu original :</strong> Contenu unique et original, Perspective unique, Données propriétaires.</li>
                                <li><strong>Citer vos sources :</strong> Liens vers sources, Citations claires, Transparence.</li>
                                <li><strong>Mettre à jour régulièrement :</strong> Statistiques récentes, Informations actualisées, Dates de publication claires.</li>
                                <li><strong>Contenu technique approfondi :</strong> Profondeur technique, Nuance et détail, Expertise démontrée.</li>
                                <li><strong>Présence sur Perplexity Pro :</strong> Créer un compte Perplexity Pro, Soumettre votre contenu, Participer à la communauté.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="strategie" className="my-16">
                <h2 className="text-3xl mb-8">Stratégie Référencement IA en 5 Étapes</h2>
                <p>Voici comment mettre en place une stratégie référencement IA efficace.</p>
                
                <div className="space-y-6 mt-8">
                    {[
                        { step: 1, title: "Audit Référencement IA (2-3 semaines)", desc: "Analyser votre situation actuelle : Indexation par les IA génératives, Citations actuelles dans les réponses IA, Évaluation de votre E-E-A-T, Audit SEO complet, Benchmark concurrentiel.", deliverable: "Rapport d'audit avec recommandations" },
                        { step: 2, title: "Définir votre stratégie (2-3 semaines)", desc: "Créer votre stratégie personnalisée : Sélectionner les mots-clés prioritaires, Identifier les opportunités de contenu, Créer une roadmap de contenu, Planifier le netlinking, Définir les KPIs.", deliverable: "Stratégie documentée avec timeline" },
                        { step: 3, title: "Créer et optimiser le contenu (4-12 semaines)", desc: "Créer du contenu optimisé IA : Articles longs (2 000+ mots), Optimisation on-page, Amélioration technique, Intégration de données et cas clients, Structuration du contenu.", deliverable: "Contenu optimisé et publié" },
                        { step: 4, title: "Amplifier votre visibilité (4-12 semaines)", desc: "Amplifier votre contenu : Netlinking via réseau média, Mentions de marque, Partage sur réseaux sociaux, Partenariats avec influenceurs, Communiqués de presse.", deliverable: "Backlinks, mentions, amplification" },
                        { step: 5, title: "Monitoring et optimisation (Continu)", desc: "Suivre les résultats : Suivi des rankings IA, Analyse des citations, Monitoring du trafic, Ajustements de stratégie, Rapports mensuels.", deliverable: "Rapports mensuels, optimisations continues" }
                    ].map((item) => (
                        <div key={item.step} className="flex gap-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                {item.step}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mt-0 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm mb-3">{item.desc}</p>
                                <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Livrable : {item.deliverable}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="outils" className="my-16">
                <h2 className="text-3xl mb-8">Outils Référencement IA</h2>
                <p>Voici les meilleurs outils pour optimiser votre référencement IA.</p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <BarChart3 size={20} className="text-blue-600" /> Outils d'audit
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">SEMrush</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Audit SEO complet</li>
                                    <li>Analyse de backlinks</li>
                                    <li>Recherche de mots-clés</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : À partir de 99€/mois</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Ahrefs</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Analyse de backlinks</li>
                                    <li>Recherche de mots-clés</li>
                                    <li>Audit technique</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : À partir de 99€/mois</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Screaming Frog</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Audit technique</li>
                                    <li>Crawl de site</li>
                                    <li>Analyse de structure</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : Gratuit (version limitée)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <Bot size={20} className="text-green-600" /> Outils de monitoring IA
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">ChatGPT</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Tester vos citations</li>
                                    <li>Analyser les réponses</li>
                                    <li>Identifier les opportunités</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : Gratuit (version basique)</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Perplexity</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Tester vos citations</li>
                                    <li>Analyser les réponses</li>
                                    <li>Identifier les opportunités</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : Gratuit</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Google Search Console</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Monitoring des rankings</li>
                                    <li>Analyse du trafic</li>
                                    <li>Identification des erreurs</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : Gratuit</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <Target size={20} className="text-orange-600" /> Outils de contenu
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">Semrush Content Marketing Platform</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Création de contenu</li>
                                    <li>Optimisation SEO</li>
                                    <li>Planification éditoriale</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : À partir de 120€/mois</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Jasper</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Génération de contenu IA</li>
                                    <li>Optimisation SEO</li>
                                    <li>Planification éditoriale</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : À partir de 39€/mois</span>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Surfer SEO</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Optimisation on-page</li>
                                    <li>Analyse de contenu</li>
                                    <li>Recommandations SEO</li>
                                </ul>
                                <span className="text-xs text-slate-400">Tarif : À partir de 99€/mois</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cas-clients" className="my-16">
                <h2 className="text-3xl mb-8">Cas Clients</h2>
                <p>Voici des exemples de résultats obtenus avec le référencement IA.</p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8 not-prose">
                    <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-blue-700">Cas Client #1 : Agence B2B</h4>
                        <p className="text-xs font-bold uppercase text-slate-400 mb-4">Objectif : Augmenter la visibilité auprès de ChatGPT et Gemini</p>
                        <p className="font-bold text-sm mb-2">Résultats après 4 mois :</p>
                        <ul className="text-sm space-y-2 text-slate-600">
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Présence dans les réponses ChatGPT sur 8 mots-clés</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Augmentation du trafic organique de 45%</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Amélioration de l'E-E-A-T mesurée</li>
                        </ul>
                    </div>
                    <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-blue-700">Cas Client #2 : E-commerce</h4>
                        <p className="text-xs font-bold uppercase text-slate-400 mb-4">Objectif : Être recommandé par Perplexity</p>
                        <p className="font-bold text-sm mb-2">Résultats après 5 mois :</p>
                        <ul className="text-sm space-y-2 text-slate-600">
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Citations dans les réponses Perplexity sur 6 mots-clés</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Trafic organique en hausse de 35%</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Meilleure visibilité auprès des IA</li>
                        </ul>
                    </div>
                    <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-blue-700">Cas Client #3 : Média/Blog</h4>
                        <p className="text-xs font-bold uppercase text-slate-400 mb-4">Objectif : Augmenter le trafic via les IA génératives</p>
                        <p className="font-bold text-sm mb-2">Résultats après 6 mois :</p>
                        <ul className="text-sm space-y-2 text-slate-600">
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Présence dans les réponses IA sur 12+ mots-clés</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Trafic organique en hausse de 50%</li>
                            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Meilleure autorité reconnue par les IA</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="faq" className="my-16">
                <h2 className="text-3xl mb-8">FAQ : Référencement IA</h2>
                <div className="space-y-4 not-prose">
                    {[
                        { q: "Combien de temps pour voir les résultats en référencement IA ?", a: "Les premiers résultats (citations dans les IA génératives) peuvent apparaître en 6-8 semaines. Les résultats plus significatifs (trafic, conversions) prennent généralement 3-6 mois." },
                        { q: "Le référencement IA remplace-t-il le SEO ?", a: "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain." },
                        { q: "Faut-il choisir entre SEO et Référencement IA ?", a: "Absolument pas. Une approche SEO + GSO hybride est plus efficace et plus rentable qu'une approche cloisonnée." },
                        { q: "Quels sont les critères de ranking des IA génératives ?", a: "Les critères varient selon l'IA, mais incluent généralement : autorité du domaine, fraîcheur du contenu, E-E-A-T, contenu structuré, et pertinence thématique." },
                        { q: "Comment tester si mon contenu est cité par les IA ?", a: "Allez sur ChatGPT, Gemini ou Perplexity et posez une question liée à votre secteur. Vérifiez si votre site est cité dans la réponse." },
                        { q: "Quel est le coût du référencement IA ?", a: "Un audit référencement IA coûte à partir de 3 500€. Un accompagnement démarre à partir de 1 000€/mois selon votre stratégie." },
                        { q: "Pouvez-vous garantir des résultats ?", a: "Nous ne garantissons pas de résultats spécifiques, mais nous visons des objectifs mesurables. Nos clients obtiennent généralement une augmentation de 30-50% du trafic organique en 6 mois." },
                        { q: "Quelle est la meilleure IA générative à optimiser ?", a: "Cela dépend de votre audience. ChatGPT est la plus populaire, Gemini est intégrée à Google, Perplexity privilégie les sources originales. Une stratégie complète optimise pour les trois." }
                    ].map((item, i) => (
                        <details key={i} className="group bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
                                {item.q}
                                <span className="transition-transform duration-300 group-open:rotate-180 text-blue-600">▼</span>
                            </summary>
                            <p className="text-slate-600 mt-4 text-sm leading-relaxed animate-fade-in-up">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            <section id="conclusion" className="my-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white not-prose">
                <h2 className="text-white text-3xl md:text-4xl mb-6 font-display font-bold">Conclusion</h2>
                <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
                    Le <strong>référencement IA</strong> est l'opportunité de 2025. Les entreprises qui agissent maintenant obtiendront un avantage compétitif durable face à celles qui attendront.
                </p>
                <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                    Ce guide vous a montré comment fonctionne le référencement IA, pourquoi c'est crucial, comment optimiser pour ChatGPT, Gemini et Perplexity, et comment mettre en place une stratégie efficace.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="/agence-referencement-ia" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                        Découvrir nos services
                    </a>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-colors shadow-lg border border-blue-500">
                        Audit Gratuit
                    </a>
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
