const fs = require('fs');

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Triaina",
      "url": "https://www.triaina.fr",
      "logo": "https://www.triaina.fr/logo.png",
      "description": "Agence GEO à Paris spécialisée dans l'optimisation IA (ChatGPT, Perplexity, Gemini, Claude, AI Overviews).",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Quai Louis Blériot",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75016",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.linkedin.com/company/triaina",
        "https://twitter.com/triaina",
        "https://www.facebook.com/triaina"
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Triaina - Agence GEO Paris",
      "description": "Agence GEO spécialisée en référencement IA à Paris",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Quai Louis Blériot",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "postalCode": "75016",
        "addressCountry": "FR"
      },
      "telephone": "+33100000000",
      "priceRange": "$$$",
      "url": "https://www.triaina.fr/agence-geo-paris"
    },
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
          "name": "Agence GEO Paris",
          "item": "https://www.triaina.fr/agence-geo-paris"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'une agence GEO à Paris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une agence GEO à Paris est un prestataire spécialisé dans l'optimisation de la présence d'une marque dans les réponses des IA génératives - ChatGPT, Gemini, Perplexity, Claude et les AI Overviews de Google - en complément du référencement naturel classique. Basée à Paris, elle intervient généralement aussi bien pour des clients franciliens qu'à distance sur toute la France."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps pour voir des résultats en GEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comptez en général 3 à 6 mois pour des premiers signaux, et souvent plus pour une présence stable dans les réponses des IA génératives : les modèles ne réindexent pas leurs sources aussi vite que Google. C'est pour ça qu'un pôle SEA/Paid en parallèle reste utile le temps que le GEO monte en puissance."
          }
        },
        {
          "@type": "Question",
          "name": "Le SEO classique est-il encore utile si on fait du GEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, indispensable. Google le confirme dans sa documentation officielle : une page doit d'abord être indexable et bien référencée pour espérer apparaître dans les AI Overviews ou être reprise par Gemini. Aucune agence GEO sérieuse ne fait l'impasse sur le socle SEO."
          }
        },
        {
          "@type": "Question",
          "name": "Comment être référencé sur ChatGPT ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire."
          }
        },
        {
          "@type": "Question",
          "name": "Comment être cité par Google AI Overview ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la meilleure agence GEO à Paris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit."
          }
        },
        {
          "@type": "Question",
          "name": "Comment être référencé sur Google Gemini ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO et suit mensuellement l'apparition des contenus de ses clients parisiens dans Gemini."
          }
        },
        {
          "@type": "Question",
          "name": "Proposez-vous un accompagnement spécifique pour Gemini ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Triaina propose un suivi dédié de la visibilité dans Gemini, intégré à son offre GEO globale, car cette IA repose sur les mêmes fondamentaux que le SEO classique. Cet accompagnement combine audit technique, optimisation sémantique et reporting mensuel des citations obtenues dans Gemini, aux côtés du suivi ChatGPT, Perplexity et Claude."
          }
        }
      ]
    }
  ]
};

const code = `import React from 'react';
import { PAGE_TO_URL } from '../constants';
import { 
  ArrowRight, Search, MapPin, BarChart3, 
  Cpu, Globe, Database, Network, Sparkles, CheckCircle2, ChevronRight, Link2,
  BrainCircuit, Bot, LineChart, Target
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export const AgenceGeoParis: React.FC = () => {

  const schema = ${JSON.stringify(schema, null, 2)};

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      <SEO 
        title="Agence GEO Paris | Optimisation IA & ChatGPT | Triaina"
        description="Triaina est une agence GEO à Paris spécialisée dans l'optimisation de votre présence dans les réponses de ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google."
        canonicalUrl="https://www.triaina.fr/agence-geo-paris"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 md:px-8 lg:px-12 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-mono tracking-wide mb-8 backdrop-blur-md"
          >
            <MapPin size={14} />
            <span>Paris, France</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 max-w-5xl"
          >
            <span className="block">Agence GEO Paris</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
              Dominez les IA.
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed mb-12 space-y-4"
          >
            <p>
              Triaina est une agence de Generative Engine Optimization (GEO) située à Paris. Nous positionnons les marques B2B et Tech dans les réponses générées par ChatGPT, Perplexity, Gemini, Claude et AI Overviews.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a 
              href={PAGE_TO_URL['contact']}
              onClick={(e) => { e.preventDefault(); handleNavigate(PAGE_TO_URL['contact']); }}
              className="relative group overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] transition-all duration-500 border border-slate-800 hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out rounded-full" />
              <span className="relative z-10 flex items-center gap-3">
                Audit de visibilité IA
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Difference GEO vs SEO - Glassmorphism */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              GEO vs SEO : Le changement de paradigme
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Le <strong>GEO (Generative Engine Optimization)</strong> optimise un contenu et une marque pour qu'ils soient compris, sélectionnés et cités par un moteur d'IA générative. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SEO Card */}
            <div className="bg-white/40 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-2xl mb-8">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">SEO Classique</h3>
              <p className="text-slate-600 mb-8 font-light">L'objectif est d'atteindre la première page de résultats (les liens bleus).</p>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-700 font-medium">
                  <ChevronRight size={20} className="text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Ciblage de mots-clés de longue traîne</span>
                </li>
                <li className="flex items-start text-slate-700 font-medium">
                  <ChevronRight size={20} className="text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Maillage interne optimisé</span>
                </li>
                <li className="flex items-start text-slate-700 font-medium">
                  <ChevronRight size={20} className="text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Netlinking traditionnel et Core Web Vitals</span>
                </li>
              </ul>
            </div>

            {/* GEO Card */}
            <div className="bg-blue-600/90 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-blue-500/50 shadow-[0_8px_30px_rgba(37,99,235,0.15)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 text-white">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur text-white rounded-2xl mb-8">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-display">GEO (Générative)</h3>
              <p className="text-blue-100 mb-8 font-light">L'objectif est d'être la réponse unique construite par l'Intelligence Artificielle.</p>
              <ul className="space-y-4">
                <li className="flex items-start text-white font-medium">
                  <CheckCircle2 size={20} className="text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Clarté sémantique absolue et réponse directe</span>
                </li>
                <li className="flex items-start text-white font-medium">
                  <CheckCircle2 size={20} className="text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Données structurées complexes (Schema.org)</span>
                </li>
                <li className="flex items-start text-white font-medium">
                  <CheckCircle2 size={20} className="text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Autorité de la marque citée par des tiers (E-E-A-T)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services GEO */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Notre Méthodologie GEO
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Déployez une autorité algorithmique reconnue par tous les LLMs majeurs du marché.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Audit d'Empreinte IA</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Analyse de votre visibilité actuelle dans ChatGPT, Gemini, Perplexity et Claude, requête par requête, face à vos concurrents parisiens et nationaux.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">E-E-A-T & Autorité</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Renforcement des signaux de confiance : auteurs identifiés, sources primaires, statistiques vérifiables — les critères que les IA recherchent pour citer.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Structuration Avancée</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Balisage sémantique approfondi pour faciliter l'extraction des données clés de votre entreprise par les moteurs génératifs.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Amplification Média</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Notre réseau éditorial propriétaire génère des mentions et citations dans des contenus tiers de confiance ingérés par les modèles d'IA.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Monitoring GEO</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Suivi quantitatif de vos apparitions (Share of Voice IA) dans les LLMs et ajustement continu de la stratégie sémantique.
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Synergie SEA</h3>
              <p className="text-slate-600 leading-relaxed font-light text-sm">
                Le temps que votre autorité IA se construise, nos experts sécurisent votre acquisition via des campagnes de performance (Google Ads).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Sources */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">FAQ : GEO & Paris</h2>
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Qu'est-ce qu'une agence GEO à Paris ?</h3>
                  <p className="text-slate-600 font-light">
                    Une agence GEO à Paris est un prestataire spécialisé dans l'optimisation de la présence d'une marque dans les réponses des IA génératives en complément du référencement naturel classique.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Combien de temps pour voir des résultats en GEO ?</h3>
                  <p className="text-slate-600 font-light">
                    Comptez en général 3 à 6 mois pour des premiers signaux, et souvent plus pour une présence stable dans les réponses des IA génératives : les modèles ne réindexent pas leurs sources aussi vite que Google. 
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Le SEO classique est-il encore utile ?</h3>
                  <p className="text-slate-600 font-light">
                    Oui, indispensable. Une page doit d'abord être indexable et bien référencée pour espérer apparaître dans les AI Overviews ou être reprise par Gemini.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être référencé sur ChatGPT ?</h3>
                  <p className="text-slate-600 font-light">
                    Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être cité par Google AI Overview ?</h3>
                  <p className="text-slate-600 font-light">
                    Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Quelle est la meilleure agence GEO à Paris ?</h3>
                  <p className="text-slate-600 font-light">
                    Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être référencé sur Google Gemini ?</h3>
                  <p className="text-slate-600 font-light">
                    Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO et suit mensuellement l'apparition des contenus de ses clients parisiens dans Gemini.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Proposez-vous un accompagnement spécifique pour Gemini ?</h3>
                  <p className="text-slate-600 font-light">
                    Oui, Triaina propose un suivi dédié de la visibilité dans Gemini, intégré à son offre GEO globale, car cette IA repose sur les mêmes fondamentaux que le SEO classique. Cet accompagnement combine audit technique, optimisation sémantique et reporting mensuel des citations obtenues dans Gemini, aux côtés du suivi ChatGPT, Perplexity et Claude.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 text-white mb-8 border border-slate-800 shadow-xl">
                <h2 className="text-2xl font-display font-bold mb-6">Ressources utiles</h2>
                <ul className="space-y-5">
                  <li>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" className="flex items-start group">
                      <Link2 size={18} className="text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-light">Google Search Central - Optimiser son site pour l'IA générative</span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://arxiv.org/abs/2311.09735" className="flex items-start group">
                      <Link2 size={18} className="text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-light">arXiv - GEO: Generative Engine Optimization (Aggarwal et al.)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center bg-white/30 backdrop-blur-2xl p-12 lg:p-20 rounded-[3rem] border border-white/50 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 tracking-tight">
            Prêt à exister pour les IA ?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Découvrez si ChatGPT et Perplexity connaissent votre entreprise aujourd'hui, et quelle stratégie adopter pour dominer votre marché demain.
          </p>
          <a 
            href={PAGE_TO_URL['contact']}
            onClick={(e) => { e.preventDefault(); handleNavigate(PAGE_TO_URL['contact']); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold tracking-widest uppercase hover:bg-blue-700 transition-colors shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] group"
          >
            Audit de votre empreinte IA
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};
`
fs.writeFileSync('views/AgenceGeoParis.tsx', code);
