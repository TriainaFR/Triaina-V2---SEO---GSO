import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { CheckCircle2, Zap, Brain, Target, BarChart3, Globe, ArrowRight, Terminal, Search, TrendingUp, Shield, Users, Layout, MessageSquare } from 'lucide-react';
import { PAGE_TO_URL } from '../constants';

export const AgenceReferencementIA: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
            { "@type": "ListItem", "position": 2, "name": "Agence Référencement IA", "item": "https://www.triaina.fr/agence-referencement-ia" }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Triaina - Agence Référencement IA",
        "image": "https://www.triaina.fr/logo.png",
        "description": "Agence référencement IA spécialisée en audit, accompagnement et optimisation pour ChatGPT, Gemini et Perplexity",
        "url": "https://www.triaina.fr/agence-referencement-ia",
        "telephone": "+33614916295",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Quai Louis Blériot",
            "addressLocality": "Paris",
            "postalCode": "75016",
            "addressCountry": "FR"
        },
        "areaServed": "FR",
        "sameAs": [
            "https://www.linkedin.com/company/triaina",
            "https://twitter.com/triaina"
        ]
      },
      {
        "@type": "Service",
        "name": "Agence Référencement IA",
        "description": "Services complets de référencement IA : audit, accompagnement, optimisation ChatGPT, Gemini, Perplexity",
        "provider": { "@type": "Organization", "name": "Triaina", "url": "https://www.triaina.fr" },
        "areaServed": "FR",
        "serviceType": ["Audit Référencement IA", "Accompagnement Référencement IA", "Optimisation ChatGPT", "Optimisation Gemini", "Optimisation Perplexity"],
        "priceRange": "$$$",
        "offers": [
            { "@type": "Offer", "name": "Audit Référencement IA", "price": "3500", "priceCurrency": "EUR", "description": "Audit complet de votre positionnement auprès des IA génératives" },
            { "@type": "Offer", "name": "Accompagnement Référencement IA", "price": "1000", "priceCurrency": "EUR", "priceValidUntil": "2026-12-31", "description": "Accompagnement mensuel à partir de 1000€" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "Combien coûte un audit référencement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un audit référencement IA complet coûte 3500€. Cet audit inclut l'analyse de votre indexation par les IA génératives, l'évaluation de votre E-E-A-T, l'audit SEO complet et le benchmark concurrentiel." } },
            { "@type": "Question", "name": "Quel est le coût d'un accompagnement en référencement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un accompagnement en référencement IA démarre à partir de 1000€/mois selon votre stratégie et vos objectifs. Le coût dépend du volume de contenu à créer, du nombre de mots-clés à cibler, et de l'ampleur du netlinking." } },
            { "@type": "Question", "name": "Combien de temps pour voir les résultats en référencement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les premiers résultats (citations dans les IA génératives) peuvent apparaître en 6-8 semaines. Les résultats plus significatifs (trafic, conversions) prennent généralement 3-6 mois." } },
            { "@type": "Question", "name": "Le référencement IA remplace-t-il le SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain." } },
            { "@type": "Question", "name": "Faut-il choisir entre SEO et Référencement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument pas. Chez Triaina, nous proposons une approche SEO + GSO hybride : optimiser pour Google ET pour les IA génératives avec une seule stratégie cohérente." } },
            { "@type": "Question", "name": "Quels sont les résultats garantis ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous ne garantissons pas de résultats spécifiques, mais nous visons des objectifs mesurables. Nos clients obtiennent généralement une augmentation de 30-50% du trafic organique en 6 mois." } }
        ]
      },
      {
        "@type": "Article",
        "headline": "Agence Référencement IA : Services, Audit & Accompagnement",
        "description": "Guide complet sur les services d'agence référencement IA : audit, accompagnement, tarifs, processus et cas clients.",
        "image": "https://www.triaina.fr/images/agence-referencement-ia.jpg",
        "author": { "@type": "Organization", "name": "Triaina" },
        "publisher": { "@type": "Organization", "name": "Triaina", "logo": { "@type": "ImageObject", "url": "https://www.triaina.fr/logo.png" } },
        "datePublished": "2025-02-26",
        "dateModified": "2025-02-26"
      }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 overflow-x-hidden font-sans">
      <SEO 
        title="Agence Référencement IA : Services, Audit & Accompagnement"
        description="Agence référencement IA : audit complet, accompagnement, optimisation ChatGPT & Gemini. Services à partir de 3500€ (audit) et 1000€/mois (accompagnement). Triaina."
        keywords="agence référencement IA, audit référencement IA, accompagnement référencement IA, services référencement IA, optimisation IA"
        ogTitle="Agence Référencement IA : Services, Audit & Accompagnement"
        ogDescription="Agence référencement IA spécialisée : audit, accompagnement, optimisation ChatGPT & Gemini. Tarifs transparents, résultats mesurables."
        image="https://www.triaina.fr/images/agence-referencement-ia.jpg"
        canonicalUrl="https://www.triaina.fr/agence-referencement-ia"
        twitterCard="summary_large_image"
        schema={schema}
      />

      {/* Hero Section */}
      <div className="mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 text-blue-600 text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-blue-200">
          <Brain size={12} />
          <span>Agence Référencement IA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
          Agence Référencement IA : <br/>
          <span className="text-blue-600">Services, Audit & Accompagnement</span>
        </h1>
        <div className="text-xl text-slate-600 max-w-3xl leading-relaxed font-light space-y-4">
            <p>
                Le <strong>référencement IA</strong> transforme la visibilité en ligne des entreprises. Contrairement au SEO traditionnel, l'optimisation pour les IA génératives comme ChatGPT et Gemini requiert une expertise spécifique et une approche différente. Une <strong>agence référencement IA</strong> professionnelle vous aide à naviguer ce nouvel écosystème et à capter les opportunités que les IA génératives offrent.
            </p>
            <p>
                Chez Triaina, nous proposons des services complets de <strong>référencement IA</strong> adaptés à votre budget et vos objectifs. Que vous cherchiez un audit complet, un accompagnement long terme, ou une stratégie hybride SEO + IA, nous avons la solution. Nos services sont conçus pour maximiser votre visibilité auprès de ChatGPT, Gemini, Perplexity et Claude.
            </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Services d'Agence Référencement IA</h2>
        <div className="space-y-12">
            
            {/* Audit */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Audit Référencement IA Complet</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-2 md:mt-0">Point de départ</span>
                </div>
                <p className="text-slate-700 mb-6">L'<strong>audit référencement IA</strong> est la première étape pour comprendre votre positionnement actuel auprès des IA génératives.</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Qu'inclut l'audit ?</h4>
                        <ul className="space-y-2">
                            {[
                                "Analyse de votre indexation par ChatGPT, Gemini, Perplexity et Claude",
                                "Vérification de vos citations dans les réponses IA",
                                "Évaluation de votre E-E-A-T (Expertise, Expérience, Autorité, Fiabilité)",
                                "Audit SEO complet (technique, on-page, netlinking)",
                                "Benchmark concurrentiel détaillé",
                                "Identification des opportunités de contenu",
                                "Rapport d'audit avec recommandations prioritaires"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500 text-sm">Durée</span>
                                <span className="font-bold text-slate-900">2-3 semaines</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500 text-sm">Tarif</span>
                                <span className="font-bold text-blue-600">À partir de 3 500€</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500 text-sm">Livrable</span>
                                <span className="font-bold text-slate-900 text-right">Rapport PDF complet + présentation</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic mt-4 bg-slate-50 p-3 rounded">
                            Cet audit révèle souvent que vous êtes bien classé sur Google mais absent des réponses IA. C'est l'insight clé pour construire votre stratégie.
                        </p>
                    </div>
                </div>
            </div>

            {/* Accompagnement */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Accompagnement Référencement IA</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-2 md:mt-0">Service Continu</span>
                </div>
                <p className="text-slate-700 mb-6">L'<strong>accompagnement référencement IA</strong> est un service continu qui transforme votre visibilité auprès des IA génératives.</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Qu'inclut l'accompagnement ?</h4>
                        <ul className="space-y-2">
                            {[
                                "Stratégie référencement IA personnalisée",
                                "Création et optimisation de contenu (articles, guides, cas clients)",
                                "Optimisation on-page pour ChatGPT, Gemini, Perplexity",
                                "Amélioration de l'E-E-A-T (signaux d'autorité)",
                                "Netlinking et amplification média",
                                "Monitoring des citations IA",
                                "Rapports mensuels de performance",
                                "Ajustements de stratégie basés sur les résultats"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-500 text-sm">Durée</span>
                                <span className="font-bold text-slate-900">Minimum 3 mois</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-500 text-sm">Tarif</span>
                                <span className="font-bold text-green-600">À partir de 1 000€/mois</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500 text-sm">Livrable</span>
                                <span className="font-bold text-slate-900 text-right">Contenu optimisé, backlinks, rapports</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic mt-4 bg-white p-3 rounded border border-slate-200">
                            L'accompagnement est idéal pour les entreprises qui veulent une présence durable et croissante auprès des IA génératives.
                        </p>
                    </div>
                </div>
            </div>

            {/* Specific Optimizations Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* ChatGPT */}
                <div className="border border-slate-200 p-6 rounded-xl hover:border-blue-300 transition-all hover:shadow-md bg-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20} /></div>
                        <h3 className="font-bold text-lg text-slate-900">Optimisation ChatGPT</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">ChatGPT est utilisé par plus de 200 millions de personnes. Être recommandé par ChatGPT peut générer un trafic significatif.</p>
                    <ul className="space-y-2 mb-4">
                        {["Création de contenu optimisé (2000+ mots)", "Structuration headings clairs", "Intégration données & stats", "Optimisation E-E-A-T", "Backlinks de qualité"].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-900">
                        Résultats : Citations en 6-8 semaines
                    </div>
                </div>

                {/* Gemini */}
                <div className="border border-slate-200 p-6 rounded-xl hover:border-blue-300 transition-all hover:shadow-md bg-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Globe size={20} /></div>
                        <h3 className="font-bold text-lg text-slate-900">Optimisation Gemini</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">Gemini s'appuie sur l'index Google. L'optimisation Gemini combine SEO traditionnel et critères IA.</p>
                    <ul className="space-y-2 mb-4">
                        {["Optimisation SEO classique", "Pertinence thématique", "Contenu structuré (Schema)", "Signaux d'autorité", "Fraîcheur du contenu"].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-900">
                        Résultats : Top 10 en 8-12 semaines
                    </div>
                </div>

                {/* Perplexity */}
                <div className="border border-slate-200 p-6 rounded-xl hover:border-blue-300 transition-all hover:shadow-md bg-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Brain size={20} /></div>
                        <h3 className="font-bold text-lg text-slate-900">Optimisation Perplexity</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">Perplexity privilégie les sources originales et vérifiables. C'est une opportunité pour les contenus uniques.</p>
                    <ul className="space-y-2 mb-4">
                        {["Contenu original & approfondi", "Citations claires & sources", "Données à jour", "Contenu technique", "Présence Perplexity Pro"].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-900">
                        Résultats : Citations en 4-6 semaines
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 text-center">Processus en 5 Étapes</h2>
        <p className="text-center text-slate-600 mb-12">Notre approche du <strong>référencement IA</strong> suit un processus éprouvé et transparent.</p>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {[
            {
              step: "Étape 1",
              title: "Audit Référencement IA",
              duration: "2-3 semaines",
              desc: "Nous analysons votre situation actuelle : Indexation par les IA, Citations actuelles, Analyse E-E-A-T, Audit SEO complet, Benchmark concurrentiel.",
              deliverable: "Rapport d'audit détaillé avec recommandations prioritaires"
            },
            {
              step: "Étape 2",
              title: "Stratégie Personnalisée",
              duration: "2-3 semaines",
              desc: "Sur la base de l'audit, nous définissons votre stratégie : Sélection mots-clés, Opportunités contenu, Roadmap, Plan netlinking, KPIs, Budget.",
              deliverable: "Stratégie documentée avec timeline et budget détaillé"
            },
            {
              step: "Étape 3",
              title: "Optimisation du Contenu",
              duration: "4-12 semaines",
              desc: "Nous créons ou optimisons votre contenu : Articles longs (2000+ mots), Optimisation on-page, Amélioration technique, Intégration données, Structuration.",
              deliverable: "Contenu optimisé, publié et indexé"
            },
            {
              step: "Étape 4",
              title: "Amplification Média",
              duration: "4-12 semaines",
              desc: "Nous amplifions votre visibilité : Netlinking réseau média propriétaire, Mentions de marque, Partage réseaux sociaux, Partenariats influenceurs.",
              deliverable: "Backlinks de qualité, mentions, amplification"
            },
            {
              step: "Étape 5",
              title: "Monitoring et Optimisation",
              duration: "Continu",
              desc: "Nous suivons les résultats et optimisons : Suivi rankings IA, Analyse citations, Monitoring trafic/conversions, Ajustements stratégie, Rapports mensuels.",
              deliverable: "Rapports mensuels, optimisations continues"
            }
          ].map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">{i + 1}</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{step.step}</span>
                  <span className="text-xs font-mono text-slate-400">{step.duration}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{step.desc}</p>
                <div className="text-xs font-medium text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                  Livrable : {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cas Clients */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Cas Clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cas Client #1 : Agence B2B (Secteur Conseil)",
              goal: "Augmenter la visibilité auprès de ChatGPT et Gemini pour les requêtes métier.",
              results: ["Présence dans les réponses ChatGPT sur 8 mots-clés cibles", "Augmentation du trafic organique de 45%", "Amélioration de l'E-E-A-T mesurée"],
              approach: "Audit complet, création de 5 articles optimisés IA, netlinking via notre réseau média.",
              duration: "4 mois"
            },
            {
              title: "Cas Client #2 : E-commerce (Secteur Niche)",
              goal: "Être recommandé par Perplexity pour les requêtes produit.",
              results: ["Citations dans les réponses Perplexity sur 6 mots-clés", "Trafic organique en hausse de 35%", "Meilleure visibilité auprès des IA génératives"],
              approach: "Optimisation du contenu existant, création de 3 articles longs, amélioration de la structure technique.",
              duration: "5 mois"
            },
            {
              title: "Cas Client #3 : Média/Blog",
              goal: "Augmenter le trafic via les IA génératives.",
              results: ["Présence dans les réponses IA sur 12+ mots-clés", "Trafic organique en hausse de 50%", "Meilleure autorité reconnue par les IA"],
              approach: "Optimisation complète du contenu existant, création de 8 nouveaux articles, amplification média.",
              duration: "6 mois"
            }
          ].map((cas, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
                  <h3 className="font-bold text-lg text-slate-900">{cas.title}</h3>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">{cas.duration}</span>
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Objectif</span>
                <p className="text-sm text-slate-700">{cas.goal}</p>
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold text-blue-500 uppercase block mb-1">Résultats</span>
                <ul className="text-sm text-slate-700 space-y-1">
                  {cas.results.map((res, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <BarChart3 size={14} className="mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Approche</span>
                <p className="text-xs text-slate-600 italic">{cas.approach}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs & Packages */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Tarifs & Packages</h2>
        
        {/* Audit Package */}
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex-1">
                        <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">Recommandé</div>
                        <h3 className="text-2xl font-bold mb-2">Package Audit</h3>
                        <p className="text-blue-200 mb-6">Audit Référencement IA Complet pour comprendre votre positionnement.</p>
                        <ul className="space-y-2 mb-6">
                            {["Analyse indexation IA génératives", "Évaluation E-E-A-T", "Audit SEO complet", "Benchmark concurrentiel", "Rapport PDF + présentation"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle2 size={16} className="text-blue-400" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 min-w-[200px]">
                        <div className="text-sm text-slate-300 mb-1">Tarif unique</div>
                        <div className="text-4xl font-bold text-white mb-2">3 500€</div>
                        <div className="text-xs text-slate-400 mb-4">TTC</div>
                        <div className="text-xs text-blue-200">Durée : 2-3 semaines</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Monthly Packages */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Package Starter</h3>
                <p className="text-sm text-slate-500 mb-6">Idéal pour PME avec budget limité</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">3 000€<span className="text-sm font-normal text-slate-500">/mois</span></div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                    {[
                        "Accompagnement 3 mois",
                        "Stratégie référencement IA",
                        "Création de 3 articles (6000 mots)",
                        "Optimisation on-page",
                        "Netlinking basique (5-10 links)",
                        "Rapports mensuels"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a href={PAGE_TO_URL['contact']} onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="block w-full py-3 text-center border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors">Choisir Starter</a>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded-xl border-2 border-blue-600 shadow-xl flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Populaire</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Package Growth</h3>
                <p className="text-sm text-slate-500 mb-6">Pour croissance rapide</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">2 500€<span className="text-sm font-normal text-slate-500">/mois</span></div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                    {[
                        "Accompagnement 6 mois",
                        "Stratégie référencement IA",
                        "Création de 6 articles (12000 mots)",
                        "Optimisation on-page complète",
                        "Netlinking avancé (15-20 links)",
                        "Monitoring citations IA",
                        "Rapports mensuels"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a href={PAGE_TO_URL['contact']} onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="block w-full py-3 text-center bg-blue-600 rounded-lg font-bold text-white hover:bg-blue-700 transition-colors">Choisir Growth</a>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Package Premium</h3>
                <p className="text-sm text-slate-500 mb-6">Domination long terme</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">2 000€<span className="text-sm font-normal text-slate-500">/mois</span></div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                    {[
                        "Accompagnement 12 mois",
                        "Stratégie IA + SEO hybride",
                        "Création de 12 articles (24000 mots)",
                        "Optimisation technique complète",
                        "Netlinking massif (30-40 links)",
                        "Monitoring citations + rankings",
                        "Rapports + appels trimestriels"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a href={PAGE_TO_URL['contact']} onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="block w-full py-3 text-center border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors">Choisir Premium</a>
            </div>
        </div>

        {/* Options */}
        <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4 text-center">Options Supplémentaires</h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {[
                    { label: "Création d'article supplémentaire", price: "500€" },
                    { label: "Backlink supplémentaire", price: "200-500€" },
                    { label: "Appel stratégique mensuel", price: "300€" },
                    { label: "Audit technique approfondi", price: "1 500€" }
                ].map((opt, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                        <span className="font-medium">{opt.label} :</span>
                        <span className="font-bold text-blue-600">{opt.price}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-24 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Agence Référencement IA</h2>
        <div className="space-y-6">
          {[
            { q: "Combien coûte un audit référencement IA ?", a: "Un audit référencement IA complet coûte 3 500€. Cet audit inclut l'analyse de votre indexation par les IA génératives, l'évaluation de votre E-E-A-T, l'audit SEO complet et le benchmark concurrentiel. Le prix peut varier selon la complexité de votre site et la profondeur d'analyse souhaitée." },
            { q: "Quel est le coût d'un accompagnement en référencement IA ?", a: "Un accompagnement en référencement IA démarre à partir de 1 000€/mois selon votre stratégie et vos objectifs. Le coût dépend du volume de contenu à créer, du nombre de mots-clés à cibler, et de l'ampleur du netlinking. Nous proposons des forfaits adaptés à tous les budgets." },
            { q: "Combien de temps pour voir les résultats ?", a: "Les premiers résultats (citations dans les IA génératives) peuvent apparaître en 6-8 semaines. Les résultats plus significatifs (trafic, conversions) prennent généralement 3-6 mois. Le référencement IA est un investissement long terme." },
            { q: "Le référencement IA remplace-t-il le SEO ?", a: "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain. Une stratégie moderne combine SEO + Référencement IA." },
            { q: "Faut-il choisir entre SEO et Référencement IA ?", a: "Absolument pas. Chez Triaina, nous proposons une approche SEO + GSO hybride : optimiser pour Google ET pour les IA génératives avec une seule stratégie cohérente. C'est plus efficace et plus rentable." },
            { q: "Quels sont les résultats garantis ?", a: "Nous ne garantissons pas de résultats spécifiques, mais nous visons des objectifs mesurables basés sur votre situation actuelle. Nos clients obtiennent généralement une augmentation de 30-50% du trafic organique en 6 mois." },
            { q: "Pouvez-vous m'aider si j'ai déjà une agence SEO ?", a: "Oui ! Nous pouvons compléter votre stratégie SEO existante avec une approche référencement IA. Beaucoup de nos clients travaillent en parallèle avec d'autres agences." },
            { q: "Quel est votre processus de travail ?", a: "Notre processus suit 5 étapes : Audit → Stratégie → Optimisation du contenu → Amplification média → Monitoring. Chaque étape est documentée et transparente." }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-900 text-white rounded-xl p-12 text-center relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold mb-4">Prêt à Transformer votre Visibilité ?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Le référencement IA est l'opportunité de 2025. Les entreprises qui agissent maintenant obtiendront un avantage compétitif durable.
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Triaina vous accompagne dans votre stratégie de référencement IA. Audit complet, stratégie personnalisée, optimisation du contenu, amplification média.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={PAGE_TO_URL['contact']}
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              Demander un audit référencement IA gratuit <ArrowRight size={16} />
            </a>
            <a 
              href={PAGE_TO_URL['expertise-gso']}
              onClick={(e) => { e.preventDefault(); onNavigate('expertise-gso'); }}
              className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Découvrir notre expertise GSO
            </a>
            <a 
              href={PAGE_TO_URL['contact']}
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Contacter notre équipe
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
