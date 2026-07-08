import React from 'react';
import { PAGE_TO_URL } from '../constants';
import { 
  ArrowRight, Search, MapPin, BarChart3, 
  Cpu, FileText, Globe, Database, Network, Sparkles, CheckCircle2, ChevronRight, Link2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const AgenceGeoParis: React.FC = () => {

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
      "image": "https://www.triaina.fr/images/agence_geo_paris.jpg",
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
        }
      ]
    }
  ]
};

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <>
      <SEO 
        title="Agence GEO Paris | Optimisation IA & ChatGPT | Triaina"
        description="Triaina est une agence GEO à Paris spécialisée dans l'optimisation de votre présence dans les réponses de ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google."
        canonicalUrl="https://www.triaina.fr/agence-geo-paris"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono tracking-wide mb-6">
                <MapPin size={14} />
                <span>Paris, France</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Agence GEO Paris
              </h1>
              
              <div className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 space-y-4">
                <p>
                  <strong>Triaina est une agence GEO à Paris</strong> spécialisée dans l'optimisation de votre présence dans les réponses de ChatGPT, Perplexity, Gemini, Claude et les AI Overviews de Google.
                </p>
                <p>
                  Paris concentre la plus forte densité de décideurs B2B, tech et luxe de France : c'est là que la bascule vers la recherche conversationnelle se joue en premier, et c'est là qu'il faut être cité avant vos concurrents.
                </p>
                <p>
                  Une <strong>agence GEO Paris</strong> ne vend pas la même prestation qu'une agence SEO classique : elle travaille votre marque pour qu'elle soit comprise, retenue et citée par les moteurs d'IA générative, pas seulement classée dans une liste de résultats bleus.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={PAGE_TO_URL['contact']}
                  onClick={(e) => { e.preventDefault(); handleNavigate(PAGE_TO_URL['contact']); }}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white rounded-lg font-bold tracking-wide hover:bg-blue-500 transition-colors group"
                >
                  Demander un Audit IA
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
              <img 
                src="/images/agence_geo_paris.jpg" 
                alt="Agence GEO Paris Triaina" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Sparkles className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Positionnement IA</div>
                    <div className="text-slate-300 text-sm">Citations validées par les LLMs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Différence GEO vs SEO */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Ce qu'est le GEO et en quoi ça diffère du SEO
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Le <strong>GEO (Generative Engine Optimization)</strong> optimise un contenu et une marque pour qu'ils soient compris, sélectionnés et cités par un moteur d'IA générative.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
              Le concept a été formalisé académiquement en 2023 par des chercheurs de Princeton et Georgia Tech, qui ont montré qu'ajouter des sources vérifiables, des chiffres exacts et des citations pouvait faire gagner jusqu'à 40 % de visibilité dans les réponses générées (<a target="_blank" rel="noopener noreferrer nofollow" href="https://arxiv.org/abs/2311.09735" className="text-blue-600 hover:underline">arXiv, Aggarwal et al., 2023</a>).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Search size={64} className="text-slate-900" />
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-slate-900 rounded-xl shadow-sm mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">L'approche SEO classique</h3>
              <p className="text-slate-600 mb-6">Le SEO et le GEO ne travaillent pas les mêmes leviers :</p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-600">
                  <ChevronRight size={20} className="text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mots-clés et requêtes cibles</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <ChevronRight size={20} className="text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maillage interne optimisé</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <ChevronRight size={20} className="text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Netlinking traditionnel</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <ChevronRight size={20} className="text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Core Web Vitals et technique pure</span>
                </li>
                <li className="flex items-start text-slate-600">
                  <ChevronRight size={20} className="text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Position dans la SERP de Google (liens bleus)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl relative overflow-hidden group text-white">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Network size={64} className="text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur text-white rounded-xl mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">L'approche GEO (Générative)</h3>
              <p className="text-blue-100 mb-6">Le GEO s'attaque directement à la compréhension algorithmique :</p>
              <ul className="space-y-3">
                <li className="flex items-start text-white">
                  <CheckCircle2 size={20} className="text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clarté sémantique absolue</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle2 size={20} className="text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Données structurées complexes (Schema.org)</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle2 size={20} className="text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Autorité de la marque hors-site (E-E-A-T)</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle2 size={20} className="text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Présence dans les contenus tiers consultés par l'IA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
            <p className="text-slate-700 leading-relaxed">
              Google le rappelle dans sa documentation officielle : une page doit d'abord être indexable et bien référencée pour espérer apparaître dans un AI Overview (<a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" className="text-blue-600 hover:underline">Google Search Central</a>). Le GEO ne remplace donc pas le SEO, il s'y ajoute - c'est pour ça qu'une agence GEO à Paris sérieuse part toujours d'un audit technique classique avant de toucher au reste. Sans indexation propre, sans maillage cohérent, aucun travail sur les citations IA ne portera ses fruits durablement.
            </p>
          </div>
        </div>
      </section>

      {/* Services GEO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Nos services GEO à Paris
            </h2>
            <p className="text-lg text-slate-600">
              Chez Triaina, un accompagnement GEO à Paris s'articule autour de cinq leviers, activés ensemble et suivis dans un même reporting mensuel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Audit de présence IA</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                État des lieux de votre visibilité actuelle dans ChatGPT, Gemini, Perplexity, Claude et les AI Overviews de Google, requête par requête, sur votre périmètre concurrentiel parisien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Optimisation E-E-A-T</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Renforcement des signaux d'expérience, d'expertise, d'autorité et de fiabilité - auteurs identifiés, sources vérifiables, données chiffrées - qui pèsent directement dans le choix des sources citées.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Structuration Schema.org</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Balisage sémantique (Article, FAQPage, Organization, Product) pour faciliter l'extraction et la compréhension de votre contenu par les moteurs génératifs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Netlinking & Amplification</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Activation de notre média propriétaire et réseau éditorial pour que des sources tierces de confiance parlent de vous - le vrai carburant du GEO.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Monitoring des citations</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Suivi mensuel de vos apparitions dans ChatGPT, Perplexity, Gemini et Claude, avec ajustement continu de la stratégie de contenu et de sources.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-500 font-medium bg-white p-6 rounded-xl border border-slate-100 inline-block mx-auto">
            Chaque prestation est livrée avec un reporting chiffré : positions Google d'un côté, citations relevées dans les IA génératives de l'autre. Pas de promesse GEO sans mesure.
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Triaina */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                Pourquoi choisir Triaina comme agence GEO à Paris
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  La plupart des agences GEO parisiennes s'arrêtent à l'optimisation technique du site du client : audit, structuration, balisage. Elles n'ont aucune prise sur les sources tierces que les IA génératives consultent réellement pour construire leurs réponses.
                </p>
                <p>
                  Triaina est structurée différemment : nous combinons une <strong>puissance média propriétaire</strong> et une <strong>régie publicitaire</strong> en interne. Concrètement, on agit sur deux fronts en parallèle - la technique GEO de votre site (structuration, balisage, contenu), et le travail direct des sources externes que les IA génératives vont chercher pour vous citer. C'est cette double capacité qui distingue une promesse GEO commerciale d'une méthode qui produit des citations mesurables dans Perplexity ou ChatGPT.
                </p>
                <p>
                  À ça s'ajoute une <strong>expertise SEA/Paid dédiée</strong> : Google Ads, social ads, campagnes de performance. Le GEO prend plusieurs mois à porter ses fruits - pendant ce temps, notre pôle Paid sécurise votre trafic et vos conversions sur les requêtes à forte intention d'achat, sans que les deux stratégies se contredisent, puisqu'elles sont pilotées par la même équipe. Pour une entreprise parisienne qui ne peut pas se permettre un trou d'air dans son acquisition pendant que le GEO monte en puissance, cette approche full-funnel change concrètement le calcul de risque.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-8 rounded-2xl text-white transform sm:translate-y-12">
                <Globe size={32} className="text-blue-400 mb-6" />
                <h4 className="text-xl font-bold mb-4">Puissance Média</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Notre réseau éditorial interne pousse votre marque dans les sources consultées par les IAs.
                </p>
              </div>
              <div className="bg-blue-600 p-8 rounded-2xl text-white">
                <BarChart3 size={32} className="text-white mb-6" />
                <h4 className="text-xl font-bold mb-4">Synergie SEA/GEO</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Sécurisez vos conversions à court terme pendant que votre autorité IA se construit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Sources */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">FAQ : agence GEO Paris</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Qu'est-ce qu'une agence GEO à Paris ?</h3>
                  <p className="text-slate-600">
                    Une agence GEO à Paris est un prestataire spécialisé dans l'optimisation de la présence d'une marque dans les réponses des IA génératives - ChatGPT, Gemini, Perplexity, Claude et les AI Overviews de Google - en complément du référencement naturel classique. Basée à Paris, elle intervient généralement aussi bien pour des clients franciliens qu'à distance sur toute la France.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Combien de temps pour voir des résultats en GEO ?</h3>
                  <p className="text-slate-600">
                    Comptez en général 3 à 6 mois pour des premiers signaux, et souvent plus pour une présence stable dans les réponses des IA génératives : les modèles ne réindexent pas leurs sources aussi vite que Google. C'est pour ça qu'un pôle SEA/Paid en parallèle reste utile le temps que le GEO monte en puissance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Le SEO classique est-il encore utile si on fait du GEO ?</h3>
                  <p className="text-slate-600">
                    Oui, indispensable. Google le confirme dans sa documentation officielle : une page doit d'abord être indexable et bien référencée pour espérer apparaître dans les AI Overviews ou être reprise par Gemini. Aucune agence GEO sérieuse ne fait l'impasse sur le socle SEO.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8">
                <h2 className="text-2xl font-display font-bold mb-4">Sources utiles</h2>
                <ul className="space-y-4">
                  <li>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" className="flex items-start group">
                      <Link2 size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">Google Search Central - Optimiser son site pour les fonctionnalités d'IA générative</span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://arxiv.org/abs/2311.09735" className="flex items-start group">
                      <Link2 size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">arXiv - GEO: Generative Engine Optimization (Aggarwal et al., 2023)</span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://schema.org/" className="flex items-start group">
                      <Link2 size={16} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-white transition-colors text-sm">Schema.org - vocabulaire de données structurées</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Passez à l'action avec Triaina
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Vous voulez savoir où vous en êtes aujourd'hui dans ChatGPT, Perplexity, Gemini et les AI Overviews de Google ? Demandez un audit de présence IA à notre équipe GEO Paris : on vous montre en clair vos requêtes citées, vos requêtes absentes, et le plan d'action pour combler l'écart - sur la technique de votre site comme sur vos sources externes.
          </p>
          <a 
            href={PAGE_TO_URL['contact']}
            onClick={(e) => { e.preventDefault(); handleNavigate(PAGE_TO_URL['contact']); }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold tracking-wide hover:bg-slate-50 transition-colors shadow-xl group"
          >
            Demander un audit GEO Paris
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
};
