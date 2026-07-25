import React, { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { PAGE_TO_URL } from '../constants';
import { 
  Bot, CheckCircle2, TrendingUp, Search, Zap, BarChart3, 
  Target, ChevronDown, ArrowRight, Share2 
} from 'lucide-react';

interface ExpertiseAIOverviewProps {
  onNavigate?: (p: any) => void;
}

export const ExpertiseAIOverview: React.FC<ExpertiseAIOverviewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiOverviewSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://triaina.fr/expertise-ai-overview#service",
        "name": "Expertise Google AI Overview - Triaina",
        "description": "Agence spécialisée en visibilité Google AI Overview en France : audit GEO, optimisation technique E-E-A-T/schema, activation réseau médias propriétaires cités par AI Overview, mesure des citations IA.",
        "serviceType": "Generative Engine Optimization",
        "provider": {
          "@type": "Organization",
          "@id": "https://triaina.fr/#organization",
          "name": "Triaina",
          "url": "https://triaina.fr"
        },
        "areaServed": {
          "@type": "Country",
          "name": "France"
        },
        "url": "https://triaina.fr/expertise-ai-overview"
      },
      {
        "@type": "FAQPage",
        "@id": "https://triaina.fr/expertise-ai-overview#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que Google AI Overview et comment fonctionne-t-il en France ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google AI Overview est une synthèse générée par le modèle Gemini qui s'affiche en haut des résultats Google Search, au-dessus des liens organiques classiques. Il analyse des sources web jugées fiables, les synthétise et cite ses références. Déployé officiellement en France le 22 juillet 2026, il concerne d'abord les requêtes informationnelles et comparatives, avec une extension progressive vers les requêtes transactionnelles."
            }
          },
          {
            "@type": "Question",
            "name": "Comment être visible dans Google AI Overview en France ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour apparaître dans Google AI Overview, il faut combiner un bon positionnement SEO organique (les sources citées en position 1 ont 33 % de chances d'être reprises selon Writesonic), des signaux E-E-A-T renforcés, des données structurées Schema.org, un contenu structuré en réponses directes, et des citations sur des médias tiers à forte autorité. Triaina ajoute un levier unique : l'activation de son réseau de médias propriétaires, eux-mêmes déjà cités par AI Overview dans leurs secteurs."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps faut-il pour apparaître dans Google AI Overview ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les premiers résultats se manifestent en général entre 3 et 6 mois. Pour les sites déjà bien positionnés en SEO, les premières citations dans AI Overview peuvent intervenir dès 1 à 3 mois après les optimisations. Grâce à l'activation du réseau médias propriétaires de Triaina - sources déjà reconnues par Google - le délai est significativement réduit par rapport à une approche d'optimisation technique seule."
            }
          },
          {
            "@type": "Question",
            "name": "Google AI Overview réduit-il vraiment le trafic organique ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, l'impact est réel et documenté. Ahrefs mesure une baisse de 34,5 % du CTR en position 1 quand un AI Overview est présent. BrightEdge indique que le CTR moyen chute de 7,3 % à 2,6 % sur les requêtes concernées. En revanche, les pages citées comme sources dans l'AI Overview captent jusqu'à +35 % de clics supplémentaires par rapport aux pages non citées (Seer Interactive). L'enjeu est donc d'être cité, pas seulement présent dans la SERP."
            }
          },
          {
            "@type": "Question",
            "name": "AI Overview e-commerce : quels secteurs sont les plus touchés en France ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les secteurs les plus exposés sont la santé (~50 % des requêtes déclenchent un AI Overview), les services financiers (29,2 %), la technologie B2B (15,8 %), le retail et l'e-commerce. Pour l'e-commerce, l'impact est fort sur les requêtes comparatives et informationnelles (\"meilleur produit X\", \"comment choisir Y\"). Les requêtes transactionnelles pures sont moins touchées, mais la tendance est à l'extension. Triaina a développé une méthodologie spécifique pour l'AI Overview e-commerce."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://triaina.fr/expertise-ai-overview#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://triaina.fr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Expertise",
            "item": "https://triaina.fr/expertise-geo"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Google AI Overview",
            "item": "https://triaina.fr/expertise-ai-overview"
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      q: "Qu'est-ce que Google AI Overview et comment fonctionne-t-il en France ?",
      a: "Google AI Overview est une synthèse générée par le modèle Gemini qui s'affiche en haut des résultats Google Search, au-dessus des liens organiques classiques. Il analyse des sources web jugées fiables, les synthétise et cite ses références. Déployé officiellement en France le 22 juillet 2026, il concerne d'abord les requêtes informationnelles et comparatives, avec une extension progressive vers les requêtes transactionnelles."
    },
    {
      q: "Comment être visible dans Google AI Overview en France ?",
      a: "Pour apparaître dans Google AI Overview, il faut combiner un bon positionnement SEO organique (les sources citées en position 1 ont 33 % de chances d'être reprises selon Writesonic), des signaux E-E-A-T renforcés, des données structurées Schema.org, un contenu structuré en réponses directes, et des citations sur des médias tiers à forte autorité. Triaina ajoute un levier unique : l'activation de son réseau de médias propriétaires, eux-mêmes déjà cités par AI Overview dans leurs secteurs."
    },
    {
      q: "Combien de temps faut-il pour apparaître dans Google AI Overview ?",
      a: "Les premiers résultats se manifestent en général entre 3 et 6 mois. Pour les sites déjà bien positionnés en SEO, les premières citations dans AI Overview peuvent intervenir dès 1 à 3 mois après les optimisations. Grâce à l'activation du réseau médias propriétaires de Triaina - sources déjà reconnues par Google - le délai est significativement réduit par rapport à une approche d'optimisation technique seule."
    },
    {
      q: "Google AI Overview réduit-il vraiment le trafic organique ?",
      a: "Oui, l'impact est réel et documenté. Ahrefs mesure une baisse de 34,5 % du CTR en position 1 quand un AI Overview est présent. BrightEdge indique que le CTR moyen chute de 7,3 % à 2,6 % sur les requêtes concernées. En revanche, les pages citées comme sources dans l'AI Overview captent jusqu'à +35 % de clics supplémentaires par rapport aux pages non citées (Seer Interactive). L'enjeu est donc d'être cité, pas seulement présent dans la SERP."
    },
    {
      q: "AI Overview e-commerce : quels secteurs sont les plus touchés en France ?",
      a: "Les secteurs les plus exposés sont la santé (~50 % des requêtes déclenchent un AI Overview), les services financiers (29,2 %), la technologie B2B (15,8 %), le retail et l'e-commerce. Pour l'e-commerce, l'impact est fort sur les requêtes comparatives et informationnelles (\"meilleur produit X\", \"comment choisir Y\"). Les requêtes transactionnelles pures sont moins touchées, mais la tendance est à l'extension. Triaina a développé une méthodologie spécifique pour l'AI Overview e-commerce."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
      <SEO 
        title="Expertise Google AI Overview France - Agence Triaina | 2026"
        description="Triaina, agence spécialisée Google AI Overview en France : expertise SEO/GEO + réseau médias sources citées par l'IA. Audit, optimisation, résultats mesurables."
        schema={aiOverviewSchema}
        canonicalUrl="https://triaina.fr/expertise-ai-overview"
      />
      
      {/* Breadcrumb - visually hidden for design but good practice to keep structure or stylized */}
      <nav aria-label="Fil d'Ariane" className="hidden">
        <ol>
          <li><a href="https://triaina.fr/">Accueil</a></li>
          <li><a href="/expertise-geo">Expertise</a></li>
          <li aria-current="page">Google AI Overview</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        <div className="lg:col-span-8 animate-fade-in-up">
          {/* Header */}
          <header className="mb-12 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wider uppercase mb-6 border border-blue-100 relative z-10">
              <Bot size={16} />
              GSO & AI Overview
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-8 relative z-10">
              Google AI Overview en France : <span className="text-blue-600">l'agence qui contrôle les sources</span> - pas seulement l'optimisation
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              <strong>Lancé officiellement en France le 22 juillet 2026</strong>, Google AI Overview redistribue les cartes de la visibilité en ligne. Triaina est la seule agence française combinant expertise technique SEO/GEO, réseau de médias propriétaires déjà cités par AI Overview dans leurs secteurs, et régie publicitaire intégrée.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Ce double levier - optimisation technique + contrôle des sources consommées par l'IA - produit des résultats que l'optimisation seule ne peut pas atteindre. Nos clients passent de 0 à 73 % de visibilité dans Google AI Overview en 6 mois.
            </p>

            <button
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                Démarrer votre audit AI Overview gratuit
                <ArrowRight size={20} />
            </button>
          </header>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:text-slate-900 prose-h3:text-2xl prose-h3:text-slate-800 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-800">
            {/* Section 1 */}
            <section className="mb-16">
              <h2>Qu'est-ce que Google AI Overview ?</h2>
              <p>Google AI Overview (anciennement Search Generative Experience, SGE) est une synthèse générée par l'intelligence artificielle qui s'affiche <strong>en haut des résultats Google Search</strong>, avant les dix liens bleus classiques. Ce n'est pas un simple encadré informatif : c'est une réponse construite, sourcée, qui répond directement à la question de l'utilisateur sans qu'il ait à cliquer.</p>
              
              <p>Le moteur derrière cette fonctionnalité, c'est <strong>Gemini</strong>, le modèle LLM multimodal de Google. Son fonctionnement repose sur une architecture transformeur : les requêtes sont converties en représentations numériques, un mécanisme d'auto-attention identifie les éléments les plus pertinents, et le modèle synthétise une réponse en s'appuyant sur des sources web sélectionnées en temps réel - un processus dit de <em>retrieval-augmented generation</em>.</p>
              
              <p>Concrètement, quand un internaute tape « meilleure assurance habitation pour locataire », AI Overview génère une synthèse en citant 3 à 5 sources. Ces sources captent de la visibilité et du trafic. Les autres disparaissent du radar.</p>

              <h3>Déploiement en France : le 22 juillet 2026</h3>
              <p>La France a connu un calendrier décalé par rapport aux États-Unis (déploiement en 2024) et à d'autres marchés européens, en raison des discussions autour des droits voisins et de la rémunération des éditeurs de presse. <strong>Le déploiement officiel a eu lieu le 22 juillet 2026</strong>, simultanément avec le lancement du Google AI Mode en France.</p>
              <p>Nous publions cette page le jour même du lancement. La fenêtre first-mover est ouverte. Elle ne le restera pas longtemps.</p>

              <h3>Impact sur le CTR : les chiffres qui comptent</h3>
              <p>Les données mesurées sur les marchés où AI Overview est déjà actif sont sans ambiguïté :</p>
              <ul className="space-y-2 mt-4 list-none pl-0">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} /> <span><strong>−34,5 % de CTR</strong> en position 1 quand un AI Overview est présent (Ahrefs, base de 300 000 mots-clés informationnels)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} /> <span><strong>CTR moyen de 2,6 %</strong> contre 7,3 % en 2024 sur les requêtes avec AI Overview (BrightEdge)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} /> <span><strong>58 % des recherches</strong> ne génèrent aucun clic sur les résultats organiques classiques (WordStream)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} /> <span><strong>+35 % de clics</strong> pour les pages citées comme sources dans l'AI Overview vs. les pages non citées (Seer Interactive)</span></li>
              </ul>
              <p className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg text-slate-700 font-medium">La conclusion est simple : si vous n'êtes pas cité, vous perdez. Si vous êtes cité, vous gagnez même quand le trafic global baisse. Tout se joue sur la sélection des sources.</p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2>Pourquoi Google AI Overview change tout pour votre visibilité en France</h2>
              <p>Être en première page Google ne suffit plus. AI Overview capte l'attention avant même que l'utilisateur voie vos liens. Pour les marques absentes des synthèses IA, c'est une érosion silencieuse mais rapide du trafic organique.</p>
              
              <h3>Les secteurs les plus exposés</h3>
              <p>L'impact varie selon les verticales, mais aucun secteur n'est épargné :</p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="p-4 font-bold border-b border-slate-200">Secteur</th>
                      <th className="p-4 font-bold border-b border-slate-200">Fréquence d'apparition des AI Overviews</th>
                      <th className="p-4 font-bold border-b border-slate-200">Type de requêtes concernées</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors"><td className="p-4 font-medium text-slate-900">Santé</td><td className="p-4">~50 %</td><td className="p-4">Symptômes, traitements, comparatifs</td></tr>
                    <tr className="hover:bg-slate-50 transition-colors"><td className="p-4 font-medium text-slate-900">Services financiers</td><td className="p-4">29,2 %</td><td className="p-4">Comparatifs, conseils, définitions</td></tr>
                    <tr className="hover:bg-slate-50 transition-colors"><td className="p-4 font-medium text-slate-900">Technologie B2B</td><td className="p-4">15,8 %</td><td className="p-4">Définitions techniques, tutoriels</td></tr>
                    <tr className="hover:bg-slate-50 transition-colors"><td className="p-4 font-medium text-slate-900">E-commerce / Retail</td><td className="p-4"><span className="text-orange-600 font-medium">Croissant</span></td><td className="p-4">Comparatifs produits, guides d'achat</td></tr>
                    <tr className="hover:bg-slate-50 transition-colors"><td className="p-4 font-medium text-slate-900">Immobilier / Habitat</td><td className="p-4"><span className="text-red-600 font-medium">Élevé</span></td><td className="p-4">Requêtes comparatives, réglementaires</td></tr>
                  </tbody>
                </table>
              </div>

              <p>Pour l'<a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('ai-overview-ecommerce-2026'); }}>AI Overview pour l'e-commerce</a>, l'enjeu est particulièrement critique : les requêtes « meilleur produit X » et « comment choisir Y » déclenchent systématiquement des synthèses IA qui court-circuitent les fiches produits et les comparateurs.</p>

              <h3>La fenêtre d'opportunité first-mover</h3>
              <p>En mai 2024, aux États-Unis, les marques qui ont investi en GEO dès le lancement d'AI Overview ont pris une avance structurelle sur leurs concurrents. Certaines ont consolidé leur position de source citée en moins de 4 mois - une position qu'il est ensuite très difficile de déloger.</p>
              <p>En France, cette fenêtre vient de s'ouvrir. Le 22 juillet 2026 est le jour zéro. Les marques qui agissent maintenant construisent une autorité que leurs concurrents mettront 12 à 18 mois à rattraper, si tant est qu'ils y parviennent.</p>
              <p>La corrélation entre classement organique et citations dans AI Overview est documentée : une page en position 1 a 33 % de chances d'être citée, contre moins de 1 % au-delà de la position 10 (Writesonic, août 2025). Le SEO reste la fondation. Mais il faut l'amplifier avec des leviers GEO spécifiques - et, chez Triaina, avec le contrôle direct des sources.</p>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2>Comment Triaina vous rend visible dans Google AI Overview</h2>
              <p>Notre méthodologie repose sur 4 étapes séquentielles. Ce qui la distingue radicalement des autres <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('agence-google-ai-overview-2026'); }}>agences AI Overview</a> : l'étape 3. Nous n'attendons pas que Google découvre vos contenus optimisés. Nous activons des sources que Google cite déjà.</p>

              <div className="space-y-8 mt-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mt-0 mb-4"><Search className="text-blue-600" /> Étape 1 - Audit de visibilité AI Overview</h3>
                  <p>Avant toute optimisation, on mesure. L'audit couvre :</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                    <li><strong>Détection des requêtes stratégiques</strong> déclenchant un AI Overview dans votre secteur (100 à 300 requêtes analysées)</li>
                    <li><strong>Identification des sources actuellement citées</strong> - vous et vos concurrents</li>
                    <li><strong>Scoring de votre visibilité IA</strong> actuelle : taux de citation, position dans les synthèses, fréquence d'apparition</li>
                    <li><strong>Analyse des signaux E-E-A-T</strong> de votre domaine vs. les sources citées</li>
                    <li><strong>Cartographie des opportunités</strong> : requêtes où vous pouvez prendre une position de source dans les 3 mois</li>
                  </ul>
                  <p className="mb-0 mt-4 text-sm">Cet audit est le point de départ de toute mission. Il produit un rapport actionnable, pas un état des lieux théorique. Pour aller plus loin sur la méthodologie d'audit, consultez notre <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('google-ai-overview-france'); }}>guide pratique pour apparaître dans AI Overview</a>.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mt-0 mb-4"><Zap className="text-blue-600" /> Étape 2 - Optimisation technique GEO</h3>
                  <p>L'optimisation technique pour AI Overview va plus loin que le SEO classique. Gemini sélectionne les sources selon des critères précis que nous optimisons systématiquement :</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                    <li><strong>E-E-A-T renforcé</strong> : signatures auteur avec credentials vérifiables, dates de mise à jour explicites, sources primaires citées dans le contenu, mentions externes sur des sites d'autorité</li>
                    <li><strong>Schema.org avancé</strong> : FAQPage, HowTo, Article, Organization, Product - chaque type de contenu reçoit le balisage adapté pour faciliter l'extraction par Gemini</li>
                    <li><strong>Structuration IA-native</strong> : réponses directes en début de section (format pyramide inversée), listes à puces, tableaux comparatifs, définitions concises - les formats que Gemini extrait préférentiellement</li>
                    <li><strong>Optimisation des featured snippets</strong> : 54,5 % des citations dans AI Overview proviennent de pages déjà en featured snippet (BrightEdge) - on commence par là</li>
                    <li><strong>Accessibilité aux crawlers IA</strong> : vérification du passage de Google-Extended et GoogleOther, configuration du robots.txt, optimisation de la vitesse d'indexation</li>
                  </ul>
                  <p className="mb-0 mt-4 text-sm">Cette étape relève de notre <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('expertise-gso'); }}>expertise GEO complète</a> et de notre approche du <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('agence-referencement-ia'); }}>référencement IA</a>. Elle est nécessaire. Mais seule, elle ne suffit pas.</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-sm relative overflow-hidden">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mt-0 mb-4"><Target className="text-blue-600" /> Étape 3 - Activation du réseau médias propriétaires</h3>
                  <p className="text-slate-700"><strong>C'est ici que Triaina se différencie de toutes les autres agences AI Overview en France.</strong></p>
                  <p className="text-slate-700">Nous possédons un réseau de médias thématiques qui sont <strong>déjà des sources citées par Google AI Overview</strong> dans leurs secteurs respectifs. Ce ne sont pas des annuaires ou des sites de liens génériques : ce sont des médias éditoriaux à forte autorité, reconnus par Gemini comme sources fiables sur leurs thématiques.</p>
                  <p className="text-slate-700">Quand nous publions un contenu mentionnant votre marque, votre expertise ou votre offre sur ces médias, nous ne faisons pas du netlinking classique. Nous injectons votre marque directement dans l'écosystème de sources que Google AI Overview consulte déjà.</p>
                  
                  <div className="mt-6 bg-white rounded-xl p-4 overflow-x-auto border border-blue-100 shadow-sm">
                    <table className="w-full text-left border-collapse text-sm text-slate-700">
                      <thead>
                        <tr><th className="p-2 border-b border-slate-200 font-bold">Approche</th><th className="p-2 border-b border-slate-200 font-bold">Mécanisme</th><th className="p-2 border-b border-slate-200 font-bold">Délai d'effet</th></tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2 border-b border-slate-100">Optimisation technique seule</td><td className="p-2 border-b border-slate-100">Attendre que Google découvre</td><td className="p-2 border-b border-slate-100 text-slate-500">6 à 12 mois</td></tr>
                        <tr><td className="p-2 font-bold text-slate-900">Technique + Médias Triaina</td><td className="p-2 font-bold text-slate-900">Vos contenus + sources reconnues</td><td className="p-2 font-bold text-blue-700">1 à 4 mois</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mt-0 mb-4"><BarChart3 className="text-blue-600" /> Étape 4 - Mesure et reporting citations IA</h3>
                  <p>Ce qui ne se mesure pas ne s'améliore pas. Notre reporting AI Overview couvre :</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-700">
                    <li><strong>Taux de citation</strong> : sur combien de requêtes stratégiques votre marque apparaît dans les synthèses AI Overview</li>
                    <li><strong>Position dans la synthèse</strong> : source principale, source secondaire, mention dans le corps du texte</li>
                    <li><strong>Évolution vs. concurrents</strong> : benchmark mensuel sur les requêtes prioritaires</li>
                    <li><strong>Trafic issu des AI Overviews</strong> : suivi dans Google Search Console (segment spécifique)</li>
                    <li><strong>Score de visibilité IA global</strong> : indicateur composite qui agrège toutes les métriques en un seul chiffre pilotable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2>Nos résultats clients</h2>
              <p>Les chiffres ci-dessous sont réels. Les clients sont anonymisés à leur demande.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Client 1 - Services B2B, France</h3>
                  <p className="text-sm mb-2"><strong className="text-slate-900">Situation initiale :</strong> 0 % de visibilité dans Google AI Overview sur 150 requêtes stratégiques auditées. Bon positionnement SEO, mais aucune citation dans les synthèses IA.</p>
                  <p className="text-sm mb-4"><strong className="text-slate-900">Mission Triaina :</strong> Audit GEO complet, refonte de l'architecture de contenu en format IA-native, déploiement Schema.org FAQPage + HowTo sur 40 pages, activation réseau médias (8 publications).</p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="font-bold text-blue-700 mb-0"><span className="text-3xl tracking-tighter">73%</span> de visibilité AI Overview</p>
                    <p className="text-xs text-slate-500 mt-1">Cité comme source principale sur ses 3 requêtes à plus fort volume à 6 mois.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Client 2 - E-commerce, France</h3>
                  <p className="text-sm mb-2"><strong className="text-slate-900">Situation initiale :</strong> 0 citation dans AI Overview sur les requêtes comparatives sectorielles clés. Concurrents déjà présents sur 40% des requêtes.</p>
                  <p className="text-sm mb-4"><strong className="text-slate-900">Mission Triaina :</strong> Optimisation E-E-A-T des pages catégories, structuration des contenus en réponses directes, activation du réseau médias sur verticales retail.</p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="font-bold text-blue-700 mb-0"><span className="text-3xl tracking-tighter">90%</span> de citations</p>
                    <p className="text-xs text-slate-500 mt-1">Sur les requêtes sectorielles clés. <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('ai-overview-ecommerce-2026'); }}>En savoir plus sur l'e-commerce</a>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2>Pourquoi choisir Triaina plutôt qu'une autre agence AI Overview ?</h2>
              <p>Le marché des agences spécialisées Google AI Overviews se structure rapidement en France depuis le lancement. Voici ce qui distingue concrètement Triaina - au-delà des formules marketing.</p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="p-4 font-bold border-b border-slate-200">Critère</th>
                      <th className="p-4 font-bold border-b border-slate-200 text-blue-700">Triaina</th>
                      <th className="p-4 font-bold border-b border-slate-200">Agence SEO/GEO classique</th>
                      <th className="p-4 font-bold border-b border-slate-200">Agence média only</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr><td className="p-4 font-medium text-slate-900">Expertise technique SEO/GEO</td><td className="p-4 text-green-700 bg-green-50/30">✅ Complète</td><td className="p-4">✅ Variable</td><td className="p-4">❌ Absente ou sous-traitée</td></tr>
                    <tr><td className="p-4 font-medium text-slate-900">Réseau médias propriétaires</td><td className="p-4 text-green-700 bg-green-50/30 font-bold">✅ Médias déjà sources AI</td><td className="p-4 text-red-700">❌ Pas de médias propres</td><td className="p-4 text-orange-600">⚠️ Médias non spécialisés IA</td></tr>
                    <tr><td className="p-4 font-medium text-slate-900">Régie publicitaire intégrée</td><td className="p-4 text-green-700 bg-green-50/30">✅ SEA/Paid coordonné</td><td className="p-4 text-red-700">❌ Souvent externalisé</td><td className="p-4 text-orange-600">⚠️ Display uniquement</td></tr>
                    <tr><td className="p-4 font-medium text-slate-900">SEA / Paid Search</td><td className="p-4 text-green-700 bg-green-50/30">✅ Intégré et en synergie</td><td className="p-4 text-orange-600">⚠️ Proposé mais non coordonné</td><td className="p-4 text-red-700">❌ Hors périmètre</td></tr>
                    <tr><td className="p-4 font-medium text-slate-900">Délai pour premiers résultats</td><td className="p-4 text-blue-700 bg-blue-50/50 font-bold">1 à 4 mois</td><td className="p-4">6 à 12 mois</td><td className="p-4">Variable, non garanti</td></tr>
                  </tbody>
                </table>
              </div>
              <p>La différence fondamentale : une <strong>agence spécialisée Google AI Overviews</strong> qui ne fait que de l'optimisation technique attend que Google valide ses recommandations. Triaina contrôle une partie des sources que Google AI Overview consulte déjà. Ce n'est pas la même chose.</p>
              <p>Pour comprendre comment choisir votre partenaire, lisez notre analyse détaillée : <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('agence-google-ai-overview-2026'); }}>comment choisir votre agence AI Overview</a>.</p>
            </section>

            {/* Section 6 - FAQ */}
            <section className="mb-16">
              <h2>FAQ Google AI Overview</h2>
              <div className="space-y-4 mt-8">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                      aria-expanded={openFaq === idx}
                    >
                      <span className="font-bold text-slate-900 pr-8">{faq.q}</span>
                      <ChevronDown 
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} 
                        size={20}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 prose-sm">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* CTA */}
            <section className="mb-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden not-prose">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold text-white mt-0 mb-6">Démarrer votre audit AI Overview</h2>
                    <p className="text-white text-lg mb-6 leading-relaxed">Le lancement de Google AI Overview en France le 22 juillet 2026 ouvre une fenêtre d'opportunité que les marques les plus réactives exploiteront en premier. Dans 6 mois, les positions de sources citées seront consolidées. Dans 12 mois, les rattraper coûtera deux fois plus cher.</p>
                    
                    <p className="text-white font-semibold mb-4 text-lg">L'audit AI Overview Triaina couvre :</p>
                    <ul className="text-white list-disc pl-5 space-y-2 mb-8 text-lg">
                        <li>Analyse de 100 à 300 requêtes stratégiques de votre secteur</li>
                        <li>Mesure de votre visibilité IA actuelle vs. concurrents</li>
                        <li>Identification des opportunités de citation à court terme</li>
                        <li>Plan d'action priorisé : optimisation technique + activation médias</li>
                        <li>Estimation du délai pour atteindre vos objectifs de visibilité AI Overview</li>
                    </ul>

                    <p className="text-white font-bold text-lg mb-8 leading-relaxed">Triaina est la seule agence en France à combiner expertise technique GEO, réseau de médias propriétaires cités par AI Overview et régie publicitaire intégrée. Ce n'est pas un positionnement marketing. C'est une architecture de service que nos résultats clients confirment.</p>

                    <button
                        onClick={() => onNavigate?.('contact')}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                    >
                        Demander votre audit AI Overview gratuit
                        <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Sources */}
            <section className="pt-8 border-t border-slate-200">
                <h2 className="text-xl">Sources</h2>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li><a href="https://ahrefs.com/blog/fr/baisse-clics-ai-overviews/" rel="nofollow noopener" target="_blank" className="text-slate-500 hover:text-blue-600">Ahrefs - Baisse des clics avec AI Overviews (−34,5 % CTR position 1)</a></li>
                    <li><a href="https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update" rel="nofollow noopener" target="_blank" className="text-slate-500 hover:text-blue-600">Seer Interactive - Impact AI Overview sur le CTR organique (mise à jour 2026)</a></li>
                    <li><a href="https://www.lemonde.fr/pixels/article/2026/07/22/google-lance-les-resumes-par-ia-sur-son-moteur-de-recherche-en-france-une-fonctionnalite-attendue-et-redoutee_6729851_4408996.html" rel="nofollow noopener" target="_blank" className="text-slate-500 hover:text-blue-600">Le Monde - Google lance les résumés par IA en France (22 juillet 2026)</a></li>
                    <li><a href="https://developers.google.com/search/docs/appearance/ai-overviews" rel="nofollow noopener" target="_blank" className="text-slate-500 hover:text-blue-600">Google Search Central - Documentation officielle AI Overviews</a></li>
                </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-display font-bold text-slate-900 mb-4">Notre Expertise</h3>
                <ul className="space-y-3">
                    <li>
                        <button onClick={() => onNavigate?.('expertise-seo')} className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm w-full text-left">
                            <ArrowRight size={14} className="shrink-0" /> Expertise SEO
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onNavigate?.('expertise-gso')} className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm w-full text-left">
                            <ArrowRight size={14} className="shrink-0" /> Expertise GEO (GSO)
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onNavigate?.('expertise-sea')} className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm w-full text-left">
                            <ArrowRight size={14} className="shrink-0" /> Expertise SEA
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onNavigate?.('expertise-media')} className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm w-full text-left">
                            <ArrowRight size={14} className="shrink-0" /> Expertise Média
                        </button>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-3xl text-white shadow-xl animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '300ms' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h3 className="font-display font-bold text-2xl mb-4">Prêt à dominer AI Overview ?</h3>
                    <p className="text-blue-100 mb-8 text-sm">
                        La fenêtre d'opportunité s'ouvre le 22 juillet 2026. Prenez position avant vos concurrents avec l'agence qui maîtrise les sources.
                    </p>
                    <button 
                        onClick={() => onNavigate?.('contact')}
                        className="w-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                    >
                        Prendre contact
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
