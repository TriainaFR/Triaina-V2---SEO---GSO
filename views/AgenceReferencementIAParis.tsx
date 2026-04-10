import React, { useEffect } from 'react';
import { CheckCircle2, Zap, Brain, Target, BarChart3, Globe, ArrowRight, Terminal } from 'lucide-react';
import { PAGE_TO_URL } from '../constants';
import { SEO } from '../components/SEO';

export const AgenceReferencementIAParis: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
                "name": "Agence Référencement IA",
                "item": "https://www.triaina.fr/agence-referencement-ia"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Agence Référencement IA Paris",
                "item": "https://www.triaina.fr/agence-referencement-ia-paris"
            }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Triaina - Agence Référencement IA Paris",
        "image": "https://www.triaina.fr/logo.png",
        "description": "Agence référencement IA à Paris spécialisée en optimisation ChatGPT et Gemini",
        "url": "https://www.triaina.fr/agence-referencement-ia-paris",
        "telephone": "+33614916295",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Quai Louis Blériot",
            "addressLocality": "Paris",
            "postalCode": "75016",
            "addressCountry": "FR"
        },
        "areaServed": {
            "@type": "City",
            "name": "Paris"
        },
        "sameAs": [
            "https://www.linkedin.com/company/triaina",
            "https://twitter.com/triaina"
        ]
      },
      {
        "@type": "Service",
        "name": "Agence Référencement IA Paris",
        "description": "Service de référencement IA et optimisation pour IA génératives à Paris (ChatGPT, Gemini, Perplexity)",
        "provider": {
            "@type": "Organization",
            "name": "Triaina",
            "url": "https://www.triaina.fr"
        },
        "areaServed": {
            "@type": "City",
            "name": "Paris"
        },
        "serviceType": ["Référencement IA", "GSO", "Optimisation ChatGPT", "Optimisation Gemini", "Optimisation Perplexity"],
        "priceRange": "$$$"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Combien coûte un audit référencement IA à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un audit référencement IA complet coûte à partir de 3500€. Cet audit inclut l'analyse de votre indexation par les IA génératives, l'évaluation de votre E-E-A-T, l'audit SEO complet et le benchmark concurrentiel parisien."
                }
            },
            {
                "@type": "Question",
                "name": "Quel est le coût d'un accompagnement en référencement IA à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un accompagnement en référencement IA démarre à partir de 1000€/mois selon votre stratégie et vos objectifs. Le coût dépend du volume de contenu à créer, du nombre de mots-clés à cibler, et de l'ampleur du netlinking."
                }
            },
            {
                "@type": "Question",
                "name": "Combien de temps pour voir les résultats en référencement IA à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les premiers résultats peuvent apparaître en 6-8 semaines. Les résultats plus significatifs prennent généralement 3-6 mois. Le référencement IA est un investissement long terme."
                }
            },
            {
                "@type": "Question",
                "name": "Le référencement IA remplace-t-il le SEO à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain."
                }
            },
            {
                "@type": "Question",
                "name": "Faut-il choisir entre SEO et Référencement IA à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument pas. Chez Triaina, nous proposons une approche SEO + GSO hybride : optimiser pour Google ET pour les IA génératives avec une seule stratégie cohérente."
                }
            },
            {
                "@type": "Question",
                "name": "Pourquoi une agence spécialisée en référencement IA à Paris ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le référencement IA requiert une expertise spécifique différente du SEO traditionnel. Une agence spécialisée comprend les critères de ranking des IA génératives et comment construire une autorité reconnue par les IA."
                }
            }
        ]
      },
      {
        "@type": "Article",
        "headline": "Agence Référencement IA Paris : Optimisation ChatGPT & Gemini",
        "description": "Guide complet sur le référencement IA à Paris et comment optimiser votre présence auprès des IA génératives.",
        "image": "https://www.triaina.fr/images/agence-referencement-ia-paris.jpg",
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
        "datePublished": "2026-02-28",
        "dateModified": "2026-02-28"
      }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 overflow-x-hidden">
      <SEO 
        title="Agence Référencement IA Paris : Optimisation ChatGPT & Gemini"
        description="Agence référencement IA à Paris spécialisée en optimisation ChatGPT et Gemini. 25 ans d'expertise, audit IA complet, stratégie GSO. Triaina Paris."
        keywords="agence référencement IA Paris, référencement IA Paris, agence IA Paris, optimisation ChatGPT Paris, optimisation Gemini Paris, GSO Paris"
        ogTitle="Agence Référencement IA Paris : Optimisation ChatGPT & Gemini"
        ogDescription="Agence référencement IA à Paris : optimisez votre présence auprès des IA génératives. 25 ans d'expertise, pionniers du GSO."
        image="https://www.triaina.fr/images/agence-referencement-ia-paris.jpg"
        canonicalUrl="https://www.triaina.fr/agence-referencement-ia-paris"
        twitterCard="summary_large_image"
        schema={schema}
      />
      
      {/* Hero Section */}
      <div className="mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 text-blue-600 text-xs font-mono font-bold uppercase tracking-widest mb-6 border border-blue-200">
          <Brain size={12} />
          <span>Generative Search Optimization Paris</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
          Agence Référencement IA Paris : <br/>
          <span className="text-blue-600">Optimisation ChatGPT & Gemini</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
          Le référencement IA transforme la façon dont les entreprises parisiennes se font découvrir en ligne. Alors que les IA génératives comme ChatGPT et Gemini gagnent rapidement du terrain, les entreprises à Paris doivent adapter leur stratégie de visibilité pour rester compétitives. Une agence référencement IA à Paris spécialisée vous aide à optimiser votre présence auprès de ces nouveaux moteurs de recherche alimentés par l'intelligence artificielle.
        </p>
      </div>

      {/* Introduction & Context */}
      <div className="grid md:grid-cols-12 gap-12 mb-24 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="md:col-span-7">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Le contexte du Référencement IA à Paris en 2025</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Chez Triaina, nous comprenons les enjeux spécifiques du marché parisien. Avec 25 ans d'expertise en référencement naturel et une spécialisation pionnière en optimisation pour IA génératives, nous accompagnons les entreprises parisiennes à capter les opportunités de ce nouvel écosystème. Le référencement IA n'est pas une tendance passagère : c'est la prochaine frontière du marketing digital à Paris.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Qu'est-ce que le Référencement IA ?</h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Le référencement IA (ou GSO - Generative Search Optimization) est l'ensemble des techniques permettant à votre contenu d'être recommandé, cité ou utilisé par les IA génératives comme source fiable. Contrairement au SEO traditionnel qui optimise pour Google Search, le référencement IA optimise pour les modèles de langage.
          </p>
        </div>
        <div className="md:col-span-5 bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-blue-700">
            <Target size={20} /> Différence SEO vs Référencement IA
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Le <a href="/agence-seo-paris" className="text-blue-600 hover:underline font-medium">SEO traditionnel</a> se concentre sur le ranking dans les résultats de recherche Google : mots-clés, backlinks, structure technique. Le référencement IA, lui, vise à faire en sorte que votre contenu soit sélectionné comme source par les IA génératives lorsqu'elles répondent à une question.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-slate-200">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-1">SEO Traditionnel</span>
              <p className="text-sm font-medium text-slate-900">Ranker #1 sur "meilleure agence SEO Paris"</p>
            </div>
            <div className="bg-blue-50 p-4 rounded border border-blue-100">
              <span className="text-xs font-bold uppercase text-blue-400 block mb-1">Référencement IA</span>
              <p className="text-sm font-medium text-blue-900">Être cité par ChatGPT quand un utilisateur demande "Quelle agence SEO recommandes-tu à Paris ?"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Les IA qui comptent */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Les IA génératives qui dominent à Paris</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">En 2025, quatre acteurs dominent le marché des IA génératives :</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "ChatGPT (OpenAI)",
              desc: "Plus de 200 millions d'utilisateurs actifs. Critères : autorité du domaine, fraîcheur du contenu, pertinence thématique.",
              icon: Zap
            },
            {
              name: "Gemini (Google)",
              desc: "Intégré à l'écosystème Google. Critères : indexation Google, E-E-A-T (Expertise, Expérience, Autorité, Fiabilité), contenu structuré.",
              icon: Globe
            },
            {
              name: "Perplexity",
              desc: "Moteur de recherche IA en croissance rapide. Critères : contenu original, citations claires, sources vérifiables.",
              icon: Brain
            },
            {
              name: "Claude (Anthropic)",
              desc: "Utilisé par les professionnels. Critères : profondeur, nuance, contenu technique de qualité.",
              icon: Terminal
            }
          ].map((ia, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <ia.icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{ia.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ia.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-8 italic">
          Optimiser pour ces quatre plateformes requiert une stratégie différente du SEO traditionnel, mais complémentaire.
        </p>
      </div>

      {/* Services */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Services d'une Agence Référencement IA à Paris</h2>
        <p className="text-slate-700 mb-8">Une agence référencement IA à Paris propose des services spécifiques pour améliorer votre visibilité auprès des IA génératives. Voici les principaux :</p>
        <div className="space-y-12">
          
          {/* Audit */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Audit Référencement IA</h3>
            <p className="text-slate-700 mb-6">Avant toute optimisation, un audit complet analyse votre positionnement actuel :</p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Vérification de votre indexation par les IA génératives",
                "Analyse de vos citations dans les réponses ChatGPT, Gemini, Perplexity",
                "Évaluation de votre E-E-A-T (Expertise, Expérience, Autorité, Fiabilité)",
                "Identification des opportunités de contenu",
                "Benchmark concurrentiel parisien"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 italic border-l-2 border-blue-300 pl-4">
              Cet audit révèle souvent que vous êtes indexé par Google mais absent des réponses IA.
            </p>
          </div>

          {/* Optimisations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-xl text-slate-900 mb-4">Optimisation ChatGPT</h3>
              <p className="text-xs text-slate-500 mb-4">ChatGPT utilise des données d'entraînement jusqu'à avril 2024 et accède à internet via des plugins. Pour optimiser votre présence sur ChatGPT :</p>
              <ul className="space-y-2">
                {[
                  "Créer du contenu original et approfondi (2 000+ mots)",
                  "Structurer le contenu avec des headings clairs",
                  "Intégrer des données, statistiques et cas clients",
                  "Optimiser l'E-E-A-T (montrer votre expertise)",
                  "Générer des backlinks de qualité (signal d'autorité)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-xl text-slate-900 mb-4">Optimisation Gemini</h3>
              <p className="text-xs text-slate-500 mb-4">Gemini s'appuie sur l'index Google et les critères de ranking Google. L'optimisation Gemini est donc très proche du SEO, avec des nuances :</p>
              <ul className="space-y-2">
                {[
                  "Optimisation SEO classique (mots-clés, structure, vitesse)",
                  "Focus sur la pertinence thématique (topical authority)",
                  "Contenu structuré (schema markup, FAQ, tableaux)",
                  "Signaux d'autorité (backlinks, mentions de marque)",
                  "Fraîcheur du contenu (mises à jour régulières)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-xl text-slate-900 mb-4">Optimisation Perplexity</h3>
              <p className="text-xs text-slate-500 mb-4">Perplexity privilégie les sources originales et vérifiables :</p>
              <ul className="space-y-2">
                {[
                  "Contenu unique et original (éviter la duplication)",
                  "Citations claires et sources vérifiables",
                  "Données et statistiques à jour",
                  "Contenu technique et approfondi",
                  "Présence sur Perplexity Pro (pour les professionnels)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pourquoi Triaina */}
      <div className="mb-24 bg-slate-900 text-white rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">Pourquoi choisir Triaina comme Agence Référencement IA à Paris ?</h2>
          <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
            Triaina n'est pas une agence SEO classique qui a ajouté "IA" à ses services. Nous sommes pionniers du référencement IA en France, avec une approche unique combinant expertise historique et innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-blue-400 mb-4">25 ans d'expertise en référencement naturel</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Depuis 2000, nos associés fondateurs ont créé, développé et revendu plusieurs agences SEO à de grands groupes. Cette expérience nous a donné une compréhension profonde des moteurs de recherche, des algorithmes et des stratégies de visibilité. Nous ne découvrons pas le SEO : nous le maîtrisons.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Pionniers du GSO (Generative Search Optimization)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                En 2024, alors que la plupart des agences SEO découvraient ChatGPT, nous avons anticipé la transformation du paysage de la recherche. Nous avons développé une méthodologie propriétaire de Generative Search Optimization (GSO) qui combine SEO traditionnel et optimisation IA. Nous ne suivons pas les tendances : nous les créons.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Réseau média propriétaire</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contrairement aux agences SEO classiques, Triaina dispose d'un <a href="/expertise-media" className="text-blue-600 hover:underline font-medium">réseau média propriétaire</a> (voyage, lifestyle, gastronomie, luxe) avec une audience établie et une autorité reconnue. Cet avantage compétitif nous permet de :
              </p>
              <ul className="text-sm text-slate-300 leading-relaxed list-disc list-inside mt-2">
                <li>Générer des backlinks de qualité pour nos clients</li>
                <li>Amplifier votre contenu auprès d'audiences qualifiées</li>
                <li>Construire une autorité réelle, reconnue par Google et les IA</li>
              </ul>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">Cet atout est unique sur le marché parisien.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <h3 className="text-xl font-bold text-blue-400 mb-4">Expertise locale à Paris</h3>
             <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Nous comprenons les spécificités du marché parisien et les enjeux des entreprises basées en Île-de-France. Notre approche combine expertise globale et connaissance locale.
             </p>
          </div>
        </div>
      </div>

      {/* Processus 5 étapes */}
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 text-center">Processus en 5 étapes</h2>
        <p className="text-center text-slate-600 mb-12">Notre approche du référencement IA à Paris suit un processus éprouvé, adapté à chaque client.</p>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {[
            {
              step: "Étape 1",
              title: "Audit Référencement IA",
              duration: "2-3 semaines",
              desc: "Nous analysons votre situation actuelle : Indexation par ChatGPT, Gemini, Perplexity, Citations actuelles dans les réponses IA, Analyse E-E-A-T, Audit SEO complet, Benchmark concurrentiel parisien.",
              deliverable: "Rapport d'audit détaillé avec recommandations."
            },
            {
              step: "Étape 2",
              title: "Stratégie Référencement IA",
              duration: "2-3 semaines",
              desc: "Sur la base de l'audit, nous définissons votre stratégie : Sélection des mots-clés prioritaires, Identification des opportunités de contenu, Roadmap de création/optimisation de contenu, Plan de netlinking et d'amplification média, KPIs et objectifs mesurables.",
              deliverable: "Stratégie documentée avec timeline et budget."
            },
            {
              step: "Étape 3",
              title: "Optimisation du Contenu",
              duration: "4-12 semaines",
              desc: "Nous créons ou optimisons votre contenu : Création d'articles longs (2 000+ mots) optimisés IA, Optimisation on-page, Amélioration de la vitesse et de la technique, Intégration de données, cas clients, statistiques, Structuration du contenu.",
              deliverable: "Contenu optimisé, publié et indexé."
            },
            {
              step: "Étape 4",
              title: "Amplification Média",
              duration: "Continu (4-12 semaines)",
              desc: "Nous amplifions votre visibilité : Netlinking via notre réseau média propriétaire, Mentions de marque et citations, Partage sur réseaux sociaux et communautés, Partenariats avec influenceurs et experts, Communiqués de presse si pertinent.",
              deliverable: "Backlinks de qualité, mentions, amplification."
            },
            {
              step: "Étape 5",
              title: "Monitoring et Optimisation",
              duration: "Continu",
              desc: "Nous suivons les résultats et optimisons : Suivi des rankings ChatGPT, Gemini, Perplexity, Analyse des citations dans les réponses IA, Monitoring du trafic organique et des conversions, Ajustements de stratégie basés sur les données, Rapports mensuels de performance.",
              deliverable: "Rapports mensuels, optimisations continues."
            }
          ].map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">{i + 1}</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
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
      <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 text-center">Cas Clients</h2>
        <p className="text-center text-slate-600 mb-12">Nos clients parisiens obtiennent des résultats mesurables en référencement IA.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cas Client #1 : Agence B2B Paris (Secteur Conseil)",
              goal: "Augmenter la visibilité auprès de ChatGPT et Gemini pour les requêtes métier.",
              results: ["Présence dans les réponses ChatGPT sur 8 mots-clés cibles", "Augmentation du trafic organique de 45%", "Amélioration de l'E-E-A-T mesurée"],
              approach: "Audit complet, création de 5 articles optimisés IA, netlinking via notre réseau média."
            },
            {
              title: "Cas Client #2 : E-commerce Paris (Secteur Niche)",
              goal: "Être recommandé par Perplexity pour les requêtes produit.",
              results: ["Citations dans les réponses Perplexity sur 6 mots-clés", "Trafic organique en hausse de 35%", "Meilleure visibilité auprès des IA génératives"],
              approach: "Optimisation du contenu existant, création de 3 articles longs, amélioration de la structure technique."
            },
            {
              title: "Cas Client #3 : Média/Blog Paris",
              goal: "Augmenter le trafic via les IA génératives.",
              results: ["Présence dans les réponses IA sur 12+ mots-clés", "Trafic organique en hausse de 50%", "Meilleure autorité reconnue par les IA"],
              approach: "Optimisation complète du contenu existant, création de 8 nouveaux articles, amplification média."
            }
          ].map((cas, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-4 border-b border-slate-100 pb-4">{cas.title}</h3>
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Objectif</span>
                <p className="text-sm text-slate-700">{cas.goal}</p>
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold text-blue-500 uppercase block mb-1">Résultats</span>
                <ul className="text-sm text-slate-700 space-y-1">
                  {cas.results.map((res, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <BarChart3 size={14} className="mt-0.5 text-blue-500" />
                      {res}
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

      {/* FAQ */}
      <div className="mb-24 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Référencement IA à Paris</h2>
        <div className="space-y-6">
          {[
            { q: "Combien coûte un audit référencement IA à Paris ?", a: "Un audit référencement IA complet coûte à partir de 3 500€. Cet audit inclut l'analyse de votre indexation par les IA génératives, l'évaluation de votre E-E-A-T, l'audit SEO complet et le benchmark concurrentiel parisien. Le prix peut varier selon la complexité de votre site et la profondeur d'analyse souhaitée." },
            { q: "Quel est le coût d'un accompagnement en référencement IA à Paris ?", a: "Un accompagnement en référencement IA démarre à partir de 1 000€/mois selon votre stratégie et vos objectifs. Le coût dépend du volume de contenu à créer, du nombre de mots-clés à cibler, et de l'ampleur du netlinking. Nous proposons des forfaits adaptés à tous les budgets et tous les niveaux de maturité." },
            { q: "Combien de temps pour voir les résultats en référencement IA à Paris ?", a: "Les premiers résultats (citations dans les IA génératives) peuvent apparaître en 6-8 semaines. Les résultats plus significatifs (trafic, conversions) prennent généralement 3-6 mois. Le référencement IA, comme le SEO, est un investissement long terme qui demande de la patience et de la constance." },
            { q: "Le référencement IA remplace-t-il le SEO à Paris ?", a: "Non. Le SEO et le référencement IA sont complémentaires. Google reste la source principale de trafic organique, mais les IA génératives gagnent rapidement du terrain. Une stratégie moderne combine SEO + Référencement IA pour maximiser votre visibilité globale." },
            { q: "Faut-il choisir entre SEO et Référencement IA à Paris ?", a: "Absolument pas. Chez Triaina, nous proposons une approche SEO + GSO hybride : optimiser pour Google ET pour les IA génératives avec une seule stratégie cohérente. C'est plus efficace et plus rentable qu'une approche cloisonnée." },
            { q: "Pourquoi une agence spécialisée en référencement IA à Paris ?", a: "Le référencement IA requiert une expertise spécifique différente du SEO traditionnel. Une agence spécialisée comprend les critères de ranking des IA génératives, les meilleures pratiques d'optimisation, et comment construire une autorité reconnue par les IA. Triaina est la première agence spécialisée en référencement IA à Paris." }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-900 text-white rounded-xl p-12 text-center relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold mb-4">Prêt à Transformer votre Visibilité à Paris ?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Le référencement IA est l'opportunité de 2025 pour les entreprises parisiennes. Les entreprises qui agissent maintenant obtiendront un avantage compétitif durable face à celles qui attendront.
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Triaina vous accompagne dans votre stratégie de référencement IA à Paris. Audit complet, stratégie personnalisée, optimisation du contenu, amplification média.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={PAGE_TO_URL['contact']}
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-xl inline-flex items-center justify-center gap-2"
            >
              Demander un pré-audit référencement IA gratuit <ArrowRight size={16} />
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
              Contacter notre équipe à Paris
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
