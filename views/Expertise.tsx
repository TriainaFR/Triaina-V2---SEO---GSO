
import React, { useEffect } from 'react';
import { EXPERTISE_DATA, PAGE_TO_URL } from '../constants';
import { 
  CheckCircle2, ArrowRight, Zap, Database, Search, Target, Users, BookOpen,
  BarChart3, Globe, Layers, Cpu, Trophy, TrendingUp,
  Smartphone, ShoppingBag, Award, Bot, BrainCircuit, Sparkles, MessageSquare, Share2,
  FileText, MousePointerClick
} from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';
import { SEO } from '../components/SEO';

interface ExpertiseProps {
  id: string;
  onNavigate: (p: any) => void;
}

const ICONS: Record<string, React.ElementType> = {
  'expertise-seo': Database,
  'expertise-sea': Target,
  'expertise-gso': Zap,
  'expertise-gsa': Search,
  'expertise-media': Users,
  'expertise-content': BookOpen
};

export const Expertise: React.FC<ExpertiseProps> = ({ id, onNavigate }) => {
  const content = EXPERTISE_DATA[id];
  const Icon = ICONS[id] || Zap;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!content) return null;

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE SEO
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-seo') {
      const seoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise SEO : Agence Spécialisée en Référencement Naturel",
            "description": "Découvrez l'expertise SEO de Triaina : agence de référencement naturel avec audit SEO, stratégie et consultant expert.",
            "image": "https://www.triaina.fr/nos-expertises/seo/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-seo" },
                { "@type": "ListItem", "position": 3, "name": "Expertise SEO", "item": "https://www.triaina.fr/expertise-seo" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce qu'une agence SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence SEO est spécialisée en référencement naturel. Elle optimise votre site pour améliorer votre visibilité sur Google et les moteurs de recherche." } },
                { "@type": "Question", "name": "Pourquoi choisir une agence SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence SEO vous offre expertise, outils puissants et équipe complète pour une stratégie de référencement naturel efficace et mesurable." } },
                { "@type": "Question", "name": "Quels sont les 4 piliers du SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Les 4 piliers du SEO sont : SEO technique, contenu et mots-clés, netlinking et autorité, UX et engagement." } },
                { "@type": "Question", "name": "Combien de temps pour voir les résultats du SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SEO est un investissement long terme. Les premiers résultats apparaissent généralement après 3-6 mois." } },
                { "@type": "Question", "name": "Quel est le ROI du SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SEO génère un trafic organique durable avec un ROI particulièrement intéressant comparé à la publicité." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise SEO : Agence Référencement Naturel"
                description="Agence SEO experte en référencement naturel. Audit SEO, stratégie de mots-clés et optimisation technique pour dominer Google."
                schema={seoSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <Database size={12} />
                    Expertise & Performance
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE SEO : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        AGENCE RÉFÉRENCEMENT
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence SEO</strong> engagée à vos côtés. 
                    Nous optimisons votre visibilité sur Google avec une <strong>stratégie de référencement naturel</strong> complète et mesurable.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    L'Expertise SEO qui Fait Décoller votre Trafic
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Confiez votre <strong>stratégie de référencement naturel</strong> à une <strong>agence SEO</strong> expérimentée. Notre équipe vous accompagne pour positionner votre site en tête des premiers résultats sur Google.
                    </p>
                    <p>
                        Depuis plus de 25 ans, nous aidons les entreprises à dominer leur marché grâce à une <strong>expertise SEO</strong> éprouvée et des résultats mesurables.
                    </p>
                </div>
            </div>

            {/* WHAT IS SEO */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce qu'une Agence SEO ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Une <strong>agence SEO</strong> (Search Engine Optimization) est spécialisée en <strong>référencement naturel</strong>. Son objectif : améliorer votre visibilité sur les moteurs de recherche comme Google.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Un <strong>consultant SEO</strong> indépendant offre une expertise spécialisée mais des ressources limitées. Une <strong>agence SEO</strong> comme Triaina combine expertise, équipe complète et outils puissants.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous optimisons</h3>
                    <ul className="space-y-3">
                        {[
                            "Vos mots-clés → Pour attirer le bon trafic",
                            "Votre contenu → Pour répondre aux questions",
                            "La structure de votre site → Pour Google",
                            "La vitesse de chargement → Pour l'UX",
                            "Vos backlinks → Pour l'autorité",
                            "Vos balises HTML → Pour le classement"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi Choisir une Agence SEO ?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Un ROI Imbattable", icon: TrendingUp, desc: "Le SEO génère un trafic organique durable. C'est un levier d'acquisition puissant avec un retour sur investissement supérieur à la publicité payante sur le long terme." },
                        { title: "Maximiser votre Visibilité", icon: Target, desc: "Plus de 60 % des clics se font sur les 3 premiers résultats. Dominez votre marché et capturez le trafic de vos concurrents en étant visible." },
                        { title: "Augmenter vos Conversions", icon: MousePointerClick, desc: "En optimisant l'UX et la pertinence, le SEO transforme vos visiteurs en clients. Un site rapide et clair convertit mieux." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4 PILLARS */}
            <div className="mb-24 bg-slate-900 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Les 4 Piliers du SEO</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "Pilier 1 : SEO Technique", icon: Cpu, desc: "Vitesse, Mobile, SSL, Structure URL. Nous rendons votre site lisible et rapide pour Google." },
                            { title: "Pilier 2 : Contenu & Mots-clés", icon: BookOpen, desc: "Réponse aux intentions de recherche. Création de contenus experts qui attirent du trafic qualifié." },
                            { title: "Pilier 3 : Netlinking & Autorité", icon: Globe, desc: "Stratégie de backlinks haute qualité. Nous construisons votre crédibilité aux yeux des moteurs." },
                            { title: "Pilier 4 : UX & Engagement", icon: Layers, desc: "Navigation fluide, temps de session. L'expérience utilisateur est un facteur clé de classement." }
                        ].map((pillar, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="mt-1">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/30">
                                        <pillar.icon size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* METHODOLOGY - 5 STEPS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Méthodologie : 5 Étapes</h2>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Analyse des Besoins", desc: "Objectifs business, analyse marché et concurrence." },
                        { step: "02", title: "Audit SEO Complet", desc: "Technique, Sémantique, Off-page. Identification des freins." },
                        { step: "03", title: "Stratégie Sur Mesure", desc: "Plan d'action, roadmap mots-clés, calendrier éditorial." },
                        { step: "04", title: "Mise en Place", desc: "Optimisations techniques, rédaction, déploiement netlinking." },
                        { step: "05", title: "Reporting & Itération", desc: "Suivi des KPI, ajustements continus face aux algos." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all bg-white group">
                            <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-blue-600 transition-colors">{item.step}</span>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EXPERTISE & TOOLS */}
            <div className="mb-24 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Outils & IA</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Nous combinons les meilleurs outils du marché (Semrush, Ahrefs, Screaming Frog) avec nos solutions propriétaires de prédiction et d'analyse IA.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["Semrush", "Ahrefs", "Screaming Frog", "GSC", "GA4", "Majestic", "LLMs"].map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono uppercase tracking-wide text-slate-500">
                                {tool}
                            </span>
                        ))}
                     </div>
                </div>
                <div>
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Une Équipe Experte</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Nos consultants ne sont pas de simples exécutants. Ils sont stratèges, data-analysts et experts en sémantique. Ils anticipent les mises à jour (Core Updates) et intègrent le GSO (Generative Search Optimization) pour vous garder en tête.
                     </p>
                     <div className="flex items-center gap-4 text-blue-700 font-bold text-sm">
                        <Trophy size={18} />
                        <span>25 ans d'expérience cumulée</span>
                     </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services SEO</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Audit SEO", desc: "Le diagnostic complet pour fixer le cap." },
                        { title: "Refonte de Site", desc: "Migration sécurisée sans perte de trafic." },
                        { title: "Netlinking", desc: "Campagnes de liens pour booster l'autorité." },
                        { title: "SEO International", desc: "Déploiement Hreflang et stratégie multilingue." },
                        { title: "E-réputation", desc: "Maîtrise de votre image de marque dans les SERP." },
                        { title: "Consulting SEO", desc: "Accompagnement ponctuel ou annuel." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Dominer Google ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne. Audit SEO, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE SEA
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-sea') {
      const seaSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise SEA : Agence Spécialisée en Publicité Google et Réseaux Sociaux",
            "description": "Découvrez l'expertise SEA de Triaina : agence de publicité Google Ads, Meta Ads et réseaux sociaux avec consultant expert.",
            "image": "https://www.triaina.fr/nos-expertises/sea/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-sea" },
                { "@type": "ListItem", "position": 3, "name": "Expertise SEA", "item": "https://www.triaina.fr/expertise-sea" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce qu'une agence SEA ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence SEA est spécialisée en publicité payante sur les moteurs de recherche et les réseaux sociaux. Elle gère Google Ads, Meta Ads, Social Ads et autres canaux publicitaires." } },
                { "@type": "Question", "name": "Pourquoi choisir une agence SEA ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence SEA vous offre expertise, outils puissants et équipe complète pour une stratégie publicitaire efficace et mesurable qui génère des leads et des ventes." } },
                { "@type": "Question", "name": "Quels sont les canaux SEA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les canaux SEA incluent Google Ads, Meta Ads (Facebook/Instagram), Social Ads (TikTok, LinkedIn, Snapchat), Amazon Ads, Programmatique et App Store Ads." } },
                { "@type": "Question", "name": "Combien de temps pour voir les résultats du SEA ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SEA génère des résultats immédiatement. Vos annonces apparaissent en première position dès le jour du lancement." } },
                { "@type": "Question", "name": "Quel est le ROI du SEA ?", "acceptedAnswer": { "@type": "Answer", "text": "Le ROI du SEA dépend de votre secteur et de votre stratégie. Avec une bonne optimisation, vous pouvez obtenir un ROAS (Return on Ad Spend) de 3:1 ou plus." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise SEA : Agence Publicité & Acquisition"
                description="Agence SEA experte en publicité. Gestion Google Ads, Social Ads et optimisation ROAS pour maximiser vos conversions."
                schema={seaSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <Target size={12} />
                    Acquisition & Performance
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE SEA : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        AGENCE PUBLICITÉ
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence SEA</strong> engagée à vos côtés. 
                    Nous optimisons vos campagnes publicitaires pour générer des leads qualifiés et augmenter vos ventes rapidement.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    L'Expertise SEA qui Fait Décoller vos Ventes
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Faites confiance à une <strong>agence SEA</strong> cross-canal comme <strong>Triaina</strong> pour gérer votre stratégie publicitaire et optimiser votre ROAS (Return on Ad Spend).
                    </p>
                    <p>
                        Notre équipe vous accompagne pour générer du trafic qualifié et convertir vos visiteurs en clients. Depuis plus de 25 ans, nous aidons les entreprises à maximiser leur retour sur investissement publicitaire.
                    </p>
                </div>
            </div>

            {/* WHAT IS SEA */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce qu'une Agence SEA ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Une <strong>agence SEA</strong> (Search Engine Advertising) est spécialisée en <strong>publicité payante</strong> sur les moteurs de recherche et les réseaux sociaux. Son objectif : générer du trafic qualifié et augmenter vos conversions.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Un <strong>consultant SEA</strong> indépendant offre une expertise spécialisée mais des ressources limitées. Une <strong>agence SEA</strong> comme Triaina combine expertise, équipe complète et outils puissants.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous gérons</h3>
                    <ul className="space-y-3">
                        {[
                            "Google Ads → Publicités sur Google Search",
                            "Meta Ads → Facebook & Instagram",
                            "Social Ads → TikTok, Snapchat, LinkedIn",
                            "Amazon Ads → Marketplace Leader",
                            "Programmatique → Diffusion massive ciblée",
                            "App Store Ads → Promotion Mobile"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi Choisir une Agence SEA ?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Générer des Leads", icon: Users, desc: "Maximisez votre taux de conversion. Attirez des visiteurs qui recherchent activement vos produits ou services." },
                        { title: "Ventes Rapides", icon: Zap, desc: "Le SEA génère des résultats immédiatement. Vos annonces apparaissent en première position dès le jour du lancement." },
                        { title: "Développer Notoriété", icon: Globe, desc: "Positionnez-vous comme référent. Avec une stratégie SEA cohérente, vous dominez votre marché et augmentez votre notoriété." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CHANNELS GRID */}
            <div className="mb-24 bg-slate-900 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Les Canaux SEA : Approche Multi-Canal</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Google Ads", icon: Search, desc: "Apparaissez en 1ère position quand vos clients cherchent." },
                            { title: "Meta Ads", icon: Users, desc: "Ciblage précis sur Facebook et Instagram avec des visuels forts." },
                            { title: "Social Ads", icon: Smartphone, desc: "TikTok, Snapchat, LinkedIn. Formats créatifs pour audiences ciblées." },
                            { title: "Amazon Ads", icon: ShoppingBag, desc: "Promouvez vos produits directement sur la marketplace leader." },
                            { title: "Programmatique", icon: Globe, desc: "Diffusez vos annonces sur des milliers de sites automatiquement." },
                            { title: "App Store Ads", icon: Smartphone, desc: "Boostez les installations sur Apple App Store et Google Play." }
                        ].map((channel, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                                        <channel.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg">{channel.title}</h3>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">{channel.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* METHODOLOGY - 4 STEPS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Méthodologie SEA : 4 Étapes</h2>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Analyse des Besoins", desc: "Objectifs business, budget, audience cible et concurrents." },
                        { step: "02", title: "Structuration des Campagnes", desc: "Architecture, mots-clés, groupes d'annonces et audiences." },
                        { step: "03", title: "Pilotage & Optimisation", desc: "A/B testing, ajustement des enchères et amélioration Quality Score." },
                        { step: "04", title: "Analyse & Ajustement", desc: "Suivi du ROAS, analyse des conversions et reporting continu." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all bg-white group">
                            <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-blue-600 transition-colors">{item.step}</span>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EXPERTISE & CERTIFICATIONS */}
            <div className="mb-24 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                         <Award size={24} className="text-blue-600" />
                         Certifications Officielles
                     </h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Notre agence a établi des liens forts avec les plus grandes régies publicitaires pour vous offrir le meilleur accompagnement.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["Google Partner Premier", "Meta Business Partner", "TikTok Marketing Partner", "Amazon Ads Accredited", "Microsoft Advertising"].map((cert, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono uppercase tracking-wide text-blue-800 font-bold">
                                {cert}
                            </span>
                        ))}
                     </div>
                </div>
                <div>
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Approche Data Driven</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Notre équipe dispose de web analysts et data scientists. Analyser vos données nous permet d'identifier des leviers d'amélioration précis. Nous créons des dashboards personnalisés pour suivre votre rentabilité en temps réel.
                     </p>
                     <div className="flex items-center gap-4 text-blue-700 font-bold text-sm">
                        <BarChart3 size={18} />
                        <span>Optimisation ROAS Continue</span>
                     </div>
                </div>
            </div>

            {/* SERVICES LINKS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services SEA</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Google Ads", desc: "Search, Display, Shopping." },
                        { title: "Social Ads", desc: "Campagnes Meta, TikTok, LinkedIn." },
                        { title: "Programmatique", desc: "Diffusion sur inventaires premium." },
                        { title: "Amazon Ads", desc: "Ventes marketplace." },
                        { title: "App Store Ads", desc: "Acquisition mobile." },
                        { title: "Audit SEA", desc: "Analyse de compte gratuite." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* TECH & TOOLS */}
            <div className="mb-24 p-8 border-l-4 border-blue-600 bg-slate-50 animate-fade-in-up" style={{animationDelay: '750ms'}}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technologie & Innovation</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Le SEA fonctionne mieux quand il est combiné avec le SEO et le GSO. Chez Triaina, nous créons une stratégie intégrée. Nous combinons nos outils propriétaires d'optimisation avec les meilleures solutions du marché pour maximiser votre visibilité globale.
                </p>
                <div className="flex gap-4 text-sm font-mono text-blue-700">
                    <span>// SYNERGIE SEO-SEA</span>
                    <span>// GSO INTEGRATION</span>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Augmenter vos Ventes ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne. Audit SEA, consultant expert, résultats immédiats.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE GSO
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-gso') {
      const gsoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise GSO : Agence Spécialisée en Generative Search Optimization",
            "description": "Découvrez l'expertise GSO de Triaina : agence de Generative Search Optimization avec consultant expert pour optimiser votre visibilité sur les IA.",
            "image": "https://www.triaina.fr/nos-expertises/gso/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-gso" },
                { "@type": "ListItem", "position": 3, "name": "Expertise GSO", "item": "https://www.triaina.fr/expertise-gso" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce que le GSO (Generative Search Optimization) ?", "acceptedAnswer": { "@type": "Answer", "text": "Le GSO est l'optimisation sur les moteurs de recherche IA comme ChatGPT, Gemini et Perplexity. C'est l'évolution du SEO traditionnel pour être cité et recommandé par les IA." } },
                { "@type": "Question", "name": "Pourquoi faire appel à une agence GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence GSO vous offre expertise, outils puissants et équipe complète pour une stratégie GSO efficace et mesurable qui augmente votre visibilité sur les IA." } },
                { "@type": "Question", "name": "Quels sont les moteurs de recherche IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les moteurs de recherche IA incluent ChatGPT, SearchGPT, Google AI Overview, Perplexity, Claude, Bing Chat et d'autres IA génératives." } },
                { "@type": "Question", "name": "Combien de temps pour voir les résultats du GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Le GSO peut générer des résultats rapidement, mais c'est un investissement long terme. Les premiers résultats peuvent apparaître en quelques semaines." } },
                { "@type": "Question", "name": "Le GSO est-il pertinent pour mon entreprise ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, le GSO est pertinent pour toute entreprise qui veut être visible sur les moteurs de recherche IA. C'est un nouveau canal d'acquisition puissant." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise GSO : Agence Référencement IA & ChatGPT"
                description="Agence GSO leader en Generative Search Optimization. Optimisez votre visibilité sur ChatGPT, Gemini et Perplexity."
                schema={gsoSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <Zap size={12} />
                    Intelligence Artificielle & Visibilité
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE GSO : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        GENERATIVE SEARCH OPTIMIZATION
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence GSO</strong> engagée à vos côtés. 
                    Nous optimisons votre visibilité sur les moteurs de recherche IA comme ChatGPT, Gemini et Perplexity pour être cité et recommandé.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    L'Expertise GSO qui Booste votre Visibilité sur les IA
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Boostez dès aujourd'hui votre visibilité sur les moteurs de recherche IA comme ChatGPT et Perplexity. <strong>Triaina</strong> vous accompagne dans une <strong>stratégie GSO</strong> complète pour être visible partout où vos clients vous cherchent.
                    </p>
                    <p>
                        Les IA génératives changent la manière dont les utilisateurs cherchent l'information. Si vous n'êtes pas optimisé pour ces moteurs, vous perdez une grosse partie de votre marché.
                    </p>
                </div>
            </div>

            {/* WHAT IS GSO */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce que le GSO ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Le <strong>GSO (Generative Search Optimization)</strong> désigne l'optimisation sur les moteurs de recherche IA. C'est l'évolution naturelle du <strong>SEO traditionnel</strong>.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Les moteurs de recherche IA ne se contentent plus de classer les pages web. Ils génèrent des réponses complètes en synthétisant l'information. Quand quelqu'un demande à ChatGPT "quel est le meilleur hôtel", l'IA cite ses sources. Si votre site n'y est pas, vous êtes invisible.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous faisons pour vous</h3>
                    <ul className="space-y-3">
                        {[
                            "Optimisation de Contenu → Pour être cité par les IA",
                            "Stratégie de Marque → Pour être reconnu comme référence",
                            "Optimisation des Données → Pour être compris par les IA",
                            "Construction d'Autorité → Pour être recommandé",
                            "Suivi de Visibilité → Mesure précise de la présence IA"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* AI ENGINES GRID (Replaces Channels) */}
            <div className="mb-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Les Moteurs de Recherche IA</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "ChatGPT & SearchGPT", icon: MessageSquare, desc: "Le leader incontesté. Être cité ici signifie toucher des millions d'utilisateurs cherchant des réponses immédiates." },
                            { title: "Google AI Overview", icon: Sparkles, desc: "La réponse de Google. Dominez les résultats de recherche classiques avec une réponse générée par l'IA en position zéro absolue." },
                            { title: "Perplexity", icon: BrainCircuit, desc: "Le moteur de recherche conversationnel de précision. Idéal pour capter une audience cherchant des réponses sourcées." },
                            { title: "Claude", icon: Bot, desc: "L'IA d'Anthropic, privilégiée pour les analyses complexes et les résumés de recherche approfondis." },
                            { title: "Bing Chat", icon: MessageSquare, desc: "Intégré à l'écosystème Microsoft, essentiel pour le B2B et les recherches professionnelles." },
                            { title: "Gemini", icon: Zap, desc: "L'IA multimodale de Google, cruciale pour les recherches visuelles et complexes." }
                        ].map((engine, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-purple-600 rounded-lg text-white">
                                        <engine.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg">{engine.title}</h3>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">{engine.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE GSO */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi Choisir une Agence GSO ?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Meilleure Visibilité", icon: Target, desc: "Optimiser votre référencement dans les moteurs génératifs permet à votre entreprise d'être présente sur des formats conversationnels nouveaux." },
                        { title: "Audience Qualifiée", icon: Users, desc: "Les contenus reconnus comme sources fiables par les IA renforcent votre image d'expert et la confiance client." },
                        { title: "Hausse des Conversions", icon: TrendingUp, desc: "Capturez des leads plus qualifiés directement depuis les interfaces conversationnelles en répondant précisément aux intentions." },
                        { title: "Avantage Compétitif", icon: Trophy, desc: "Le GSO est nouveau. Vos concurrents ne l'optimisent pas encore. C'est votre chance de prendre une avance décisive." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* METHODOLOGY - 4 PILLARS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Méthodologie GSO : 4 Piliers</h2>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Contenu de Haute Qualité", desc: "Contenus précis, structurés et sourcés pour être digérés par les LLMs." },
                        { step: "02", title: "Autorité & Crédibilité", desc: "Backlinks et mentions dans des sources fiables pour valider votre expertise aux yeux des IA." },
                        { step: "03", title: "Expertise & Mise à Jour", desc: "Fraîcheur du contenu et signaux d'expertise (auteurs, certifications)." },
                        { step: "04", title: "Technique & Structure", desc: "Données structurées, balisage sémantique clair et formats digestes (FAQ, listes)." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 border border-slate-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all bg-white group">
                            <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-purple-600 transition-colors">{item.step}</span>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TRACKING / SUIVI & MESURE */}
            <div className="mb-24 bg-slate-50 p-10 md:p-16 rounded-3xl border border-slate-200 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                 <div className="max-w-4xl mx-auto text-center">
                     <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center text-purple-600 mx-auto mb-8">
                        <Share2 size={32} />
                     </div>
                     <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Suivi & Mesure</h3>
                     <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                        Mettre en place des outils de suivi vous permet d'évaluer le rôle de l'IA dans vos conversions. Notre agence Data élabore des dashboards personnalisés pour suivre votre trafic provenant des moteurs IA, le trafic généré, les conversions et le ROI de votre stratégie GSO.
                     </p>
                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/50 text-purple-700 font-bold text-sm rounded-full border border-purple-200/50">
                        <span>Reporting IA Nouvelle Génération</span>
                     </div>
                 </div>
            </div>

            {/* SERVICES LINKS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services GSO</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Audit GSO", desc: "Analyse visibilité actuelle IA." },
                        { title: "Stratégie GSO", desc: "Plan d'action personnalisé." },
                        { title: "Optimisation Contenu", desc: "Pour citation et recommandation." },
                        { title: "Netlinking GSO", desc: "Autorité auprès des IA." },
                        { title: "Suivi & Reporting", desc: "Mesure via LLM Ranking." },
                        { title: "Formation GSO", desc: "Montée en compétence équipes." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-purple-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Dominer les IA ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne. Audit GSO, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-purple-900 font-bold uppercase tracking-widest rounded hover:bg-purple-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE GSA
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-gsa') {
      const gsaSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise GSA : Agence Spécialisée en Generative Engine Advertising",
            "description": "Découvrez l'expertise GSA de Triaina : agence de Generative Engine Advertising avec consultant expert pour optimiser vos campagnes publicitaires sur les IA.",
            "image": "https://www.triaina.fr/nos-expertises/gsa/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-gsa" },
                { "@type": "ListItem", "position": 3, "name": "Expertise GSA", "item": "https://www.triaina.fr/expertise-gsa" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce que le GSA (Generative Engine Advertising) ?", "acceptedAnswer": { "@type": "Answer", "text": "Le GSA est un nouveau modèle publicitaire intégré aux moteurs de recherche IA comme Perplexity et SearchGPT. Il insère des annonces pertinentes directement dans les réponses générées par l'IA." } },
                { "@type": "Question", "name": "Pourquoi intégrer le GSA dans votre stratégie marketing ?", "acceptedAnswer": { "@type": "Answer", "text": "Le GSA offre une visibilité naturelle et contextuelle auprès d'utilisateurs engagés, avec un meilleur rapport coût-performance et des taux de conversion plus élevés." } },
                { "@type": "Question", "name": "Qu'est-ce qu'une agence GSA ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence GSA aide les entreprises à concevoir et optimiser des campagnes publicitaires intégrées aux moteurs de recherche IA pour un retour sur investissement optimal." } },
                { "@type": "Question", "name": "Comment fonctionne une campagne GSA ?", "acceptedAnswer": { "@type": "Answer", "text": "Une campagne GSA crée des annonces contextuelles qui s'intègrent naturellement dans les réponses générées par l'IA, s'adaptant aux requêtes spécifiques et aux intentions des utilisateurs." } },
                { "@type": "Question", "name": "Quels sont les moteurs de recherche IA pour le GSA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les principaux moteurs de recherche IA pour le GSA sont Perplexity, SearchGPT, Google AI Overview et d'autres moteurs de recherche IA émergents." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise GSA : Publicité IA & Generative Engine"
                description="Agence GSA spécialisée en Generative Engine Advertising. Campagnes publicitaires sur Perplexity, SearchGPT et moteurs IA."
                schema={gsaSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <Search size={12} />
                    Publicité IA & Performance
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE GSA : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        GENERATIVE ENGINE ADVERTISING
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence GSA</strong> engagée à vos côtés. 
                    Nous optimisons vos campagnes publicitaires sur les moteurs de recherche IA pour générer des leads qualifiés et augmenter vos ventes.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    Réinventez vos Campagnes Publicitaires avec le GSA
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Réinventez vos campagnes publicitaires avec notre <strong>agence GSA</strong>, experte en IA générative pour une performance maximale.
                    </p>
                    <p>
                        Les moteurs de recherche IA offrent une nouvelle opportunité publicitaire. Si vous n'optimisez pas vos campagnes pour ces moteurs, vous perdez une grosse partie de votre marché publicitaire.
                    </p>
                </div>
            </div>

            {/* WHAT IS GSA */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce que le GSA ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Le <strong>GSA (Generative Engine Advertising)</strong> désigne un nouveau modèle publicitaire intégré aux moteurs de recherche propulsés par l'intelligence artificielle, comme Perplexity ou SearchGPT.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Contrairement aux formats publicitaires traditionnels, le GSA s'appuie sur des réponses génératives fournies directement par l'IA pour insérer des annonces pertinentes et contextuelles dans les résultats de recherche.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-2">GSA vs Publicité Traditionnelle</h4>
                        <p className="text-sm text-blue-700">
                            La publicité traditionnelle (Google Ads) affiche des annonces dans des zones dédiées. Le GSA intègre les annonces directement dans le contenu généré par l'IA, offrant une expérience plus naturelle.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous faisons pour vous</h3>
                    <ul className="space-y-3">
                        {[
                            "Création d'annonces contextuelles → Intégration naturelle",
                            "Optimisation de campagnes → ROI maximal",
                            "Ciblage d'audience → Pertinence & Personnalisation",
                            "Mesure des performances → Dashboards détaillés",
                            "Ajustement en temps réel → Amélioration continue"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* AI ENGINES GRID */}
            <div className="mb-24 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Les Moteurs de Recherche IA</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Perplexity", desc: "Plus de 250M requêtes mensuelles. Audience cherchant des réponses précises." },
                            { title: "SearchGPT", desc: "Le moteur d'OpenAI. Atteignez une audience massive via ChatGPT." },
                            { title: "Google AI Overview", desc: "Dominez les résultats de recherche Google avec une visibilité premium." },
                            { title: "Autres Moteurs", desc: "Bing Chat, Claude, etc. Visibilité maximale sur tous les canaux." }
                        ].map((engine, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                                        <Sparkles size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg">{engine.title}</h3>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">{engine.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE GSA */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi Choisir une Agence GSA ?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Meilleure Visibilité", icon: Target, desc: "Visibilité naturelle et contextuelle auprès d'utilisateurs engagés." },
                        { title: "Performance Accrue", icon: TrendingUp, desc: "Meilleur rapport coût-performance grâce aux formats immersifs." },
                        { title: "Hausse Conversions", icon: MousePointerClick, desc: "Annonces adaptées aux intentions pour attirer des clients prêts à acheter." },
                        { title: "Avantage Compétitif", icon: Trophy, desc: "Prenez de l'avance sur vos concurrents qui n'y sont pas encore." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* METHODOLOGY - 3 PILLARS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Approche GSA : 3 Piliers</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Pilier 1 : Data-Driven", desc: "Analyse des performances (CPC, ROI, CPA) pour ajuster en temps réel." },
                        { title: "Pilier 2 : Personnalisation", desc: "Stratégies ciblées, audiences personnalisées et annonces contextuelles." },
                        { title: "Pilier 3 : Expertise", desc: "Maîtrise des algorithmes publicitaires des moteurs IA pour maximiser la visibilité." }
                    ].map((pillar, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TRACKING */}
            <div className="mb-24 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-white relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-500/10"></div>
                     <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
                         <BarChart3 size={24} className="text-blue-400" />
                         Suivi & Mesure
                     </h3>
                     <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                        Notre agence Data conçoit des dashboards personnalisés pour monitorer précisément le trafic issu des moteurs d'intelligence artificielle.
                     </p>
                     <ul className="space-y-2 relative z-10 mb-6">
                        {["Suivi dépenses temps réel", "Mesure du ROI", "Analyse performance par moteur", "Comparatif d'efficacité"].map((feat, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-blue-200">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                {feat}
                            </li>
                        ))}
                     </ul>
                </div>
                <div>
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Rapports Détaillés</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed">
                        Nous vous fournissons des rapports détaillés sur vos performances GSA incluant l'analyse par moteur IA, des recommandations d'optimisation et l'identification des opportunités d'amélioration.
                     </p>
                </div>
            </div>

             {/* SERVICES LINKS */}
             <div className="mb-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services GSA</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Audit GSA", desc: "Analyse présence et opportunités." },
                        { title: "Stratégie GSA", desc: "Plan pour maximiser visibilité & ROI." },
                        { title: "Création Annonces", desc: "Annonces contextuelles et pertinentes." },
                        { title: "Optimisation", desc: "Ajustement temps réel pour conversion." },
                        { title: "Suivi & Reporting", desc: "Mesure ROI publicitaire." },
                        { title: "Consulting Expert", desc: "Accompagnement dédié." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

             {/* ENGAGEMENT SECTION */}
             <div className="mb-24 animate-fade-in-up" style={{animationDelay: '750ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Engagement</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Expertise", desc: "Plus de 25 ans d'expérience pour répondre avec précision à vos enjeux." },
                        { title: "Passion", desc: "Une équipe passionnée en veille constante sur les évolutions du secteur." },
                        { title: "Performance", desc: "Stratégie ROIste pour impacter votre business et offrir des relais de croissance." }
                    ].map((item, i) => (
                        <div key={i} className="border-l-4 border-blue-600 pl-6 py-2">
                             <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                             <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Optimiser vos Campagnes ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne. Audit GSA, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE MEDIA
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-media') {
      const mediaSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise Média : Agence Spécialisée en Stratégie Médias et Autorité",
            "description": "Découvrez l'expertise Média de Triaina : agence de stratégie médias avec médias propriétaires et réseau premium pour votre autorité.",
            "image": "https://www.triaina.fr/nos-expertises/media/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-media" },
                { "@type": "ListItem", "position": 3, "name": "Expertise Média", "item": "https://www.triaina.fr/expertise-media" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce qu'une agence média ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence média aide les entreprises à construire leur autorité et leur visibilité via des placements presse, du netlinking et une stratégie médias complète." } },
                { "@type": "Question", "name": "Pourquoi faire appel à une agence média ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence média vous offre accès à un réseau de médias premium, expertise en stratégie médias et outils pour construire votre autorité rapidement." } },
                { "@type": "Question", "name": "Qu'est-ce que les médias propriétaires ?", "acceptedAnswer": { "@type": "Answer", "text": "Les médias propriétaires sont des publications que l'agence possède ou contrôle directement, offrant un accès direct et des tarifs préférentiels." } },
                { "@type": "Question", "name": "Comment la stratégie média aide le SEO et le GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Les backlinks de qualité et les mentions de marque dans des médias reconnus renforcent votre autorité auprès de Google et des IA génératives." } },
                { "@type": "Question", "name": "Quel est le ROI d'une stratégie média ?", "acceptedAnswer": { "@type": "Answer", "text": "Une stratégie média bien exécutée génère des backlinks de qualité, renforce votre autorité et améliore votre classement sur Google et les IA." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise Média : Stratégie Netlinking & Digital PR"
                description="Agence Média experte en autorité et netlinking. Boostez votre SEO et GSO grâce à notre réseau de médias propriétaires et premium."
                schema={mediaSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <Users size={12} />
                    Influence & Autorité
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE MÉDIA : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        STRATÉGIE MÉDIAS & AUTORITÉ
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence média</strong> engagée à vos côtés. 
                    Nous construisons votre autorité via nos <strong>médias propriétaires</strong> et notre <strong>réseau de médias premium</strong> pour renforcer votre visibilité sur Google et les IA.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    Construisez votre Autorité avec une Stratégie Média Complète
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        L'<strong>autorité</strong> est le secret des sites qui dominent Google et les IA génératives. 
                        <strong>Triaina</strong> vous accompagne dans une <strong>stratégie média</strong> complète pour construire votre crédibilité et votre visibilité.
                    </p>
                    <p>
                        Grâce à nos <strong>médias propriétaires</strong> et notre <strong>réseau de médias premium</strong>, nous vous offrons un accès direct aux meilleures publications pour amplifier votre marque.
                    </p>
                </div>
            </div>

            {/* WHAT IS MEDIA AGENCY */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce qu'une Agence Média ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Une <strong>agence média</strong> aide les entreprises à construire leur <strong>autorité</strong> et leur visibilité via des placements presse, du netlinking et une <strong>stratégie médias</strong> complète.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Un <strong>consultant média</strong> indépendant offre une expertise spécialisée mais des ressources limitées et peu d'accès aux médias. Une <strong>agence média</strong> comme Triaina combine expertise, <strong>médias propriétaires</strong>, <strong>réseau de médias premium</strong> et outils puissants pour une stratégie complète et mesurable.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous faisons pour vous</h3>
                    <ul className="space-y-3">
                        {[
                            "Construction d'autorité → Via des backlinks de qualité",
                            "Amplification de marque → Via des placements presse premium",
                            "Renforcement crédibilité → Via des mentions dans des médias reconnus",
                            "Amélioration SEO → Via une stratégie de netlinking efficace",
                            "Optimisation GSO → Via des signaux d'autorité pour les IA"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* UNIQUE ADVANTAGES */}
            <div className="mb-24 bg-slate-900 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Nos Avantages Uniques : Médias Propriétaires & Réseau Premium</h2>
                    <p className="text-slate-300 mb-12 text-lg font-light max-w-3xl">
                        Ce qui différencie Triaina des autres agences média, c'est notre accès direct aux médias et notre réseau exclusif de publications premium.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Médias Propriétaires", desc: "Accès direct, tarifs préférentiels, placements garantis et contrôle qualité total." },
                            { title: "Réseau Premium", desc: "Partenariats avec des publications généralistes et spécialisées de haut standing." },
                            { title: "Tarifs Négociés", desc: "Réductions importantes grâce à nos volumes et relations établies." }
                        ].map((adv, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                <h3 className="font-bold text-xl mb-4 text-blue-400">{adv.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE MEDIA AGENCY */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi Choisir une Agence Média ?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Autorité Durable", icon: Trophy, desc: "Les backlinks et mentions construisent une autorité qui dure des années." },
                        { title: "Classement SEO", icon: TrendingUp, desc: "Améliorez directement votre classement Google grâce à des backlinks de qualité." },
                        { title: "Visibilité GSO", icon: Zap, desc: "Renforcez votre présence dans les réponses des IA génératives." },
                        { title: "Crédibilité Marque", icon: Award, desc: "Devenez une référence incontournable dans votre secteur." },
                        { title: "Trafic Qualifié", icon: Users, desc: "Attirez des visiteurs engagés depuis des médias premium." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SYNERGY SEO/GSO */}
            <div className="mb-24 grid md:grid-cols-2 gap-12 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Synergie avec SEO & GSO</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        La stratégie média n'est pas isolée. Elle fonctionne en synergie avec votre stratégie SEO et GSO pour une visibilité maximale.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Backlinks de Qualité → Pour le SEO (Google)",
                            "Mentions de Marque → Pour le GSO (IA)",
                            "Signaux d'Autorité → Pour E-E-A-T",
                            "Contenu Frais → Pour l'indexation"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Méthodologie en 4 Étapes</h3>
                    <div className="space-y-4">
                        {[
                            { step: "01", title: "Audit et Analyse", desc: "Analyse backlinks, présence média et opportunités." },
                            { step: "02", title: "Stratégie et Planification", desc: "Plan média personnalisé et calendrier éditorial." },
                            { step: "03", title: "Création et Placement", desc: "Production contenu et publication sur réseau premium." },
                            { step: "04", title: "Suivi et Optimisation", desc: "Mesure impact backlinks et amélioration continue." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                                <span className="text-2xl font-bold text-blue-200">{item.step}</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SERVICES LINKS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services Média</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Audit Média", desc: "Analyse profil backlinks." },
                        { title: "Stratégie Média", desc: "Plan personnalisé autorité." },
                        { title: "Placements Presse", desc: "Médias propriétaires & premium." },
                        { title: "Digital PR", desc: "Amplification de marque." },
                        { title: "Suivi & Reporting", desc: "Mesure impact autorité." },
                        { title: "Consulting Expert", desc: "Accompagnement dédié." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* NETWORK & INTEGRATION */}
            <div className="mb-24 p-8 bg-slate-50 border border-slate-200 rounded-2xl animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Notre Réseau Média</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Triaina possède et contrôle directement plusieurs médias propriétaires (Voyage, Lifestyle, Gastronomie) et a établi des partenariats avec des publications généralistes de référence.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {["Voyage", "Lifestyle", "Luxe", "Gastronomie", "Presse Généraliste"].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-slate-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Intégration Totale</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            La stratégie média fonctionne mieux quand elle est intégrée. Média + SEO = Autorité. Média + GSO = Visibilité IA. Média + SEA = Crédibilité. Média + GSA = Annonces Contextuelles.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Construire votre Autorité ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne dans votre stratégie média. Audit gratuit, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE CONTENT
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-content') {
      const contentSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Article",
            "headline": "Expertise Contenu : Agence Spécialisée en Rédaction Web SEO et GSO",
            "description": "Découvrez l'expertise Contenu de Triaina : agence de rédaction web SEO et GSO avec consultant expert pour articles, blog et pages web.",
            "image": "https://www.triaina.fr/nos-expertises/contenu/og-image.jpg",
            "author": { "@type": "Organization", "name": "Triaina" },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02"
            },
            {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "Nos Expertises", "item": "https://www.triaina.fr/expertise-contenu" },
                { "@type": "ListItem", "position": 3, "name": "Expertise Contenu", "item": "https://www.triaina.fr/expertise-contenu" }
            ]
            },
            {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "Qu'est-ce qu'une agence contenu ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence contenu aide les entreprises à créer du contenu web optimisé pour le SEO et le GSO, incluant articles, blog, pages web et contenu structuré." } },
                { "@type": "Question", "name": "Pourquoi faire appel à une agence contenu ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence contenu vous offre expertise en rédaction SEO, connaissance des algorithmes Google et IA, et outils pour créer du contenu performant." } },
                { "@type": "Question", "name": "Qu'est-ce que le contenu optimisé SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Le contenu optimisé SEO est du contenu écrit spécifiquement pour classer sur Google, avec mots-clés ciblés, structure claire et balises HTML optimisées." } },
                { "@type": "Question", "name": "Comment optimiser le contenu pour les IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Pour optimiser le contenu pour les IA, il faut créer du contenu détaillé, bien sourcé, avec balises claires, FAQ, résumés et données structurées." } },
                { "@type": "Question", "name": "Quel est le ROI du contenu SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Le contenu SEO génère du trafic organique durable avec un excellent ROI. Chaque article continue à générer du trafic pendant des années." } }
            ]
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
            <SEO 
                title="Expertise Contenu : Rédaction Web SEO & IA"
                description="Agence de rédaction web et contenu SEO/GSO. Articles de blog, pages web et contenu structuré pour plaire à Google et aux IA."
                schema={contentSchema} 
            />
            
            {/* HERO */}
            <div className="mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6">
                    <BookOpen size={12} />
                    Rédaction & Stratégie
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-[1.1]">
                    EXPERTISE CONTENU : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        RÉDACTION WEB SEO & GSO
                    </span>
                </h1>
                <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    <strong>Triaina</strong> est une <strong>agence contenu</strong> engagée à vos côtés. 
                    Nous créons du contenu web optimisé pour le SEO et le GSO qui génère du trafic qualifié et améliore votre visibilité sur Google et les IA.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-24 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    Le Contenu de Qualité qui Génère du Trafic
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Le contenu est le cœur de toute stratégie digitale. Mais pas n'importe quel contenu : du contenu optimisé pour le SEO et le GSO qui génère du trafic qualifié.
                    </p>
                    <p>
                        <strong>Triaina</strong> crée du contenu web performant : articles, blog, pages web et contenu structuré qui classe sur Google et est recommandé par les IA génératives.
                    </p>
                </div>
            </div>

            {/* WHAT IS CONTENT AGENCY */}
            <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                        Qu'est-ce qu'une Agence Contenu ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Une <strong>agence contenu</strong> aide les entreprises à créer du contenu web optimisé pour le SEO et le GSO, incluant articles, blog, pages web et contenu structuré.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Un <strong>rédacteur freelance</strong> offre une expertise en rédaction mais peu de connaissance en SEO et GSO. Une <strong>agence contenu</strong> comme Triaina combine expertise en rédaction, connaissance approfondie du SEO et du GSO, et outils puissants pour créer du contenu performant et mesurable.
                    </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Ce que nous faisons pour vous</h3>
                    <ul className="space-y-3">
                        {[
                            "Création de contenu optimisé SEO → Pour Google",
                            "Optimisation pour les IA → Balises et structure",
                            "Rédaction d'articles de qualité → Détaillés et sourcés",
                            "Gestion de blog → Calendrier éditorial",
                            "Optimisation pages web → Conversion & SEO",
                            "Contenu structuré → FAQ, résumés, listes"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                                <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* WHY CONTENT IS CRUCIAL */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi le Contenu est Crucial</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { title: "Trafic Durable", icon: TrendingUp, desc: "Investissement long terme avec excellent ROI." },
                        { title: "Classement SEO", icon: Search, desc: "Google privilégie le contenu de qualité." },
                        { title: "Recommandation IA", icon: Bot, desc: "Être cité par ChatGPT et Perplexity." },
                        { title: "Expertise", icon: Award, desc: "Devenir une référence dans votre secteur." },
                        { title: "Conversions", icon: MousePointerClick, desc: "Transformer les visiteurs en clients." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group text-center">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={20} />
                            </div>
                            <h3 className="font-bold text-sm text-slate-900 mb-2">{card.title}</h3>
                            <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTENT TYPES */}
            <div className="mb-24 bg-slate-900 text-white p-10 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Types de Contenu que nous Créons</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Articles de Blog", icon: FileText, desc: "Contenu détaillé répondant aux intentions de recherche." },
                            { title: "Pages Web", icon: Globe, desc: "Optimisées pour la conversion et le SEO on-page." },
                            { title: "Guides & Ressources", icon: BookOpen, desc: "Contenu expert générant des backlinks naturels." },
                            { title: "Contenu Structuré", icon: Layers, desc: "FAQ, tableaux et listes pour les Featured Snippets." },
                            { title: "Contenu de Marque", icon: Award, desc: "Storytelling et valeurs pour engager votre audience." }
                        ].map((type, i) => (
                            <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                                        <type.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg">{type.title}</h3>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed font-light">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PROCESS - 5 STEPS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Notre Processus de Création : 5 Étapes</h2>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Recherche & Stratégie", desc: "Mots-clés, audience, concurrence et intentions de recherche." },
                        { step: "02", title: "Planification & Outline", desc: "Structure Hn, points clés et placement des mots-clés." },
                        { step: "03", title: "Rédaction Optimisée", desc: "Contenu de qualité, détaillé, sourcé et engageant." },
                        { step: "04", title: "Optimisation Technique", desc: "Balises HTML, données structurées JSON-LD, FAQ." },
                        { step: "05", title: "Révision & Publication", desc: "Contrôle qualité, exactitude et validation SEO." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all bg-white group">
                            <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-blue-600 transition-colors">{item.step}</span>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* OPTIMIZATION SEO & GSO */}
            <div className="mb-24 grid md:grid-cols-2 gap-12 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Optimisation SEO & GSO</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Notre contenu est optimisé pour le SEO (Google) et le GSO (IA génératives). Voici comment nous le faisons :
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Recherche Mots-clés → Ciblage pertinent",
                            "Contenu Détaillé → Couverture en profondeur",
                            "Structure Claire → Balises, listes, tableaux",
                            "Données Structurées → Schema.org & JSON-LD"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Synergie Totale</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Contenu + SEO", desc: "Trafic Organique Durable" },
                            { title: "Contenu + GSO", desc: "Visibilité & Citation IA" },
                            { title: "Contenu + Média", desc: "Autorité & Backlinks" },
                            { title: "Contenu + SEA", desc: "Conversion & Performance Ads" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                                <div className="p-2 bg-blue-50 rounded text-blue-600">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SERVICES LINKS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Nos Services Contenu</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Stratégie Contenu", desc: "Alignement objectifs & audience." },
                        { title: "Rédaction Articles", desc: "Optimisés SEO pour trafic organique." },
                        { title: "Optimisation Pages", desc: "Pour conversion et SEO." },
                        { title: "Gestion Blog", desc: "Calendrier et publication régulière." },
                        { title: "Contenu Structuré", desc: "FAQ, résumés pour les IA." },
                        { title: "Audit Contenu", desc: "Analyse et opportunités." }
                    ].map((svc, i) => (
                        <a 
                            key={i} 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {svc.title}
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* TEAM SECTION */}
            <div className="mb-24 p-8 bg-slate-50 border border-slate-200 rounded-2xl animate-fade-in-up" style={{animationDelay: '750ms'}}>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 text-center">Notre Équipe Contenu</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { role: "Rédacteurs Experts", desc: "Plume de qualité et structure engageante." },
                        { role: "Spécialistes SEO", desc: "Optimisation technique et sémantique." },
                        { role: "Consultants Stratégie", desc: "Vision business et calendrier éditorial." }
                    ].map((member, i) => (
                        <div key={i} className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-sm">
                                <Users size={20} />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">{member.role}</h4>
                            <p className="text-sm text-slate-500">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à Créer du Contenu Performant ?</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-light">
                    Triaina vous accompagne dans votre stratégie contenu. Audit gratuit, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                        className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                        FAQ
                    </a>
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // GENERIC LAYOUT FOR OTHER EXPERTISES
  // ════════════════════════════════════════════════════════════════════════

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
      
      <SEO 
          title={`${content.title}`} 
          description={content.description} 
      />

      {/* Header Section */}
      <div className="mb-20 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                <Icon size={24} />
            </div>
            <div className="h-px flex-grow bg-slate-200"></div>
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest border border-blue-200 px-3 py-1 rounded bg-blue-50">
                Pôle Expert
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-4 leading-tight">
            <ScrambleText text={content.title.replace('Expertise ', '')} delay={100} />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-3xl md:text-5xl mt-2">
                {content.subtitle}
            </span>
        </h1>
        
        <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light mt-8 border-l-4 border-blue-600 pl-6">
            {content.description}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
         {content.details.map((detail, index) => (
             <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-start gap-4">
                     <div className="mt-1 bg-blue-100 p-1.5 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <CheckCircle2 size={18} />
                     </div>
                     <div>
                         <h3 className="text-xl font-bold text-slate-900 mb-2">{detail.title}</h3>
                         <p className="text-slate-600 leading-relaxed text-sm">
                             {detail.desc}
                         </p>
                     </div>
                 </div>
             </div>
         ))}
      </div>

      {/* Bottom Actions & Tags */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-300 pt-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          
          <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-mono uppercase tracking-wide">
                      #{tag}
                  </span>
              ))}
          </div>

          <div className="flex gap-4">
               <a 
                  href={PAGE_TO_URL['contact']}
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
               >
                   Nous contacter <ArrowRight size={16} />
               </a>
          </div>

      </div>

    </div>
  );
};
