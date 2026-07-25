
import React, { useEffect, useState } from 'react';
import { EXPERTISE_DATA, PAGE_TO_URL } from '../constants';
import { 
  CheckCircle2, ArrowRight, Zap, Database, Search, Target, Users, BookOpen,
  BarChart3, Globe, Layers, Cpu, Trophy, TrendingUp,
  Smartphone, ShoppingBag, Award, Bot, Brain, Sparkles, MessageSquare, Share2,
  FileText, MousePointerClick, HelpCircle, Plus, Minus, Monitor, Video, PieChart, Layout, AlertCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface ExpertiseProps {
  id: string;
  onNavigate?: (p: any) => void;
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

  // État pour la FAQ GSO
  const [openGsoFaq, setOpenGsoFaq] = useState<number | null>(null);
  const toggleGsoFaq = (index: number) => {
    setOpenGsoFaq(openGsoFaq === index ? null : index);
  };

  // État pour la FAQ SEA
  const [openSeaFaq, setOpenSeaFaq] = useState<number | null>(null);
  const toggleSeaFaq = (index: number) => {
    setOpenSeaFaq(openSeaFaq === index ? null : index);
  };

  // État pour la FAQ Content
  const [openContentFaq, setOpenContentFaq] = useState<number | null>(null);
  const toggleContentFaq = (index: number) => {
    setOpenContentFaq(openContentFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!content) return null;

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE SEO (Conservé tel quel)
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
        <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
            <SEO 
                title="Expertise SEO : Agence Référencement Naturel"
                description="Agence SEO experte en référencement naturel. Audit SEO, stratégie de mots-clés et optimisation technique pour dominer Google."
                schema={seoSchema} 
                canonicalUrl={"https://www.triaina.fr" + PAGE_TO_URL[id]}
            />
            
            {/* HERO */}
            <div className="mb-16 md:mb-24 animate-fade-in-up w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    <Database size={12} className="flex-shrink-0" />
                    <span className="truncate">Expertise & Performance</span>
                </div>
                
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 leading-tight md:leading-[1.1] break-words hyphens-auto w-full">
                    EXPERTISE SEO : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 break-words">
                        AGENCE RÉFÉRENCEMENT
                    </span>
                </h1>
                
                <p className="max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-4 md:pl-6 break-words">
                    <strong>Triaina</strong> est une <strong>agence SEO</strong> engagée à vos côtés. 
                    Nous optimisons votre visibilité sur Google avec une <strong>stratégie de référencement naturel</strong> complète et mesurable.
                </p>
            </div>

            {/* INTRO */}
            <div className="mb-16 md:mb-24 bg-white p-6 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up w-full" style={{animationDelay: '100ms'}}>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6 break-words hyphens-auto">
                    L'Expertise SEO qui Fait Décoller votre Trafic
                </h2>
                <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-6 font-light break-words">
                    <p>
                        Confiez votre <strong>stratégie de référencement naturel</strong> à une <strong>agence SEO</strong> expérimentée. Notre équipe vous accompagne pour positionner votre site en tête des premiers résultats sur Google.
                    </p>
                    <p>
                        Depuis plus de 25 ans, nous aidons les entreprises à dominer leur marché grâce à une <strong>expertise SEO</strong> éprouvée et des résultats mesurables.
                    </p>
                </div>
            </div>

            {/* WHAT IS SEO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '200ms'}}>
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 break-words">
                        Qu'est-ce qu'une Agence SEO ?
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base break-words">
                        Une <strong>agence SEO</strong> (Search Engine Optimization) est spécialisée en <strong>référencement naturel</strong>. Son objectif : améliorer votre visibilité sur les moteurs de recherche comme Google.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base break-words">
                        Un <strong>consultant SEO</strong> indépendant offre une expertise spécialisée mais des ressources limitées. Une <strong>agence SEO</strong> comme Triaina combine expertise, équipe complète et outils puissants.
                    </p>
                </div>
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
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
                                <span className="flex-1 min-w-0 break-words">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '300ms'}}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-12 text-center break-words">Pourquoi Choisir une Agence SEO ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Un ROI Imbattable", icon: TrendingUp, desc: "Le SEO génère un trafic organique durable. C'est un levier d'acquisition puissant avec un retour sur investissement supérieur à la publicité payante sur le long terme." },
                        { title: "Maximiser votre Visibilité", icon: Target, desc: "Plus de 60 % des clics se font sur les 3 premiers résultats. Dominez votre marché et capturez le trafic de vos concurrents en étant visible." },
                        { title: "Augmenter vos Conversions", icon: MousePointerClick, desc: "En optimisant l'UX et la pertinence, le SEO transforme vos visiteurs en clients. Un site rapide et clair convertit mieux." }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-3 break-words">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed break-words">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4 PILLARS */}
            <div className="mb-16 md:mb-24 bg-slate-900 text-white p-6 md:p-16 rounded-3xl relative overflow-hidden animate-fade-in-up w-full" style={{animationDelay: '400ms'}}>
                <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-5xl font-display font-bold mb-8 md:mb-12 break-words">Les 4 Piliers du SEO</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {[
                            { title: "Pilier 1 : SEO Technique", icon: Cpu, desc: "Vitesse, Mobile, SSL, Structure URL. Nous rendons votre site lisible et rapide pour Google." },
                            { title: "Pilier 2 : Contenu & Mots-clés", icon: BookOpen, desc: "Réponse aux intentions de recherche. Création de contenus experts qui attirent du trafic qualifié." },
                            { title: "Pilier 3 : Netlinking & Autorité", icon: Globe, desc: "Stratégie de backlinks haute qualité. Nous construisons votre crédibilité aux yeux des moteurs." },
                            { title: "Pilier 4 : UX & Engagement", icon: Layers, desc: "Navigation fluide, temps de session. L'expérience utilisateur est un facteur clé de classement." }
                        ].map((pillar, i) => (
                            <div key={i} className="flex gap-4 md:gap-6">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/30">
                                        <pillar.icon size={20} />
                                    </div>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg md:text-xl font-bold mb-2 break-words">{pillar.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light break-words">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* METHODOLOGY */}
            <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '500ms'}}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-12 break-words">Notre Méthodologie : 5 Étapes</h2>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Analyse des Besoins", desc: "Objectifs business, analyse marché et concurrence." },
                        { step: "02", title: "Audit SEO Complet", desc: "Technique, Sémantique, Off-page. Identification des freins." },
                        { step: "03", title: "Stratégie Sur Mesure", desc: "Plan d'action, roadmap mots-clés, calendrier éditorial." },
                        { step: "04", title: "Mise en Place", desc: "Optimisations techniques, rédaction, déploiement netlinking." },
                        { step: "05", title: "Reporting & Itération", desc: "Suivi des KPI, ajustements continus face aux algos." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all bg-white group w-full">
                            <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-blue-600 transition-colors flex-shrink-0">{item.step}</span>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-bold text-lg text-slate-900 break-words">{item.title}</h3>
                                <p className="text-slate-600 text-sm break-words">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EXPERTISE & TOOLS */}
            <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up w-full" style={{animationDelay: '600ms'}}>
                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                     <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 mb-6 break-words">Outils & IA</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base break-words">
                        Nous combinons les meilleurs outils du marché (Semrush, Ahrefs, Screaming Frog) avec nos solutions propriétaires de prédiction et d'analyse IA.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {["Semrush", "Ahrefs", "Screaming Frog", "GSC", "GA4", "Majestic", "LLMs"].map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono uppercase tracking-wide text-slate-500 break-all">
                                {tool}
                            </span>
                        ))}
                     </div>
                </div>
                <div>
                     <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 break-words">Une Équipe Experte</h3>
                     <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base break-words">
                        Nos consultants ne sont pas de simples exécutants. Ils sont stratèges, data-analysts et experts en sémantique. Ils anticipent les mises à jour (Core Updates) et intègrent le GSO (Generative Search Optimization) pour vous garder en tête.
                     </p>
                     <div className="flex items-center gap-4 text-blue-700 font-bold text-sm">
                        <Trophy size={18} className="flex-shrink-0" />
                        <span className="break-words">25 ans d'expérience cumulée</span>
                     </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '700ms'}}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-12 break-words">Nos Services SEO</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                            onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                            className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group block"
                        >
                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                <span className="break-words pr-2 min-w-0">{svc.title}</span>
                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed break-words">{svc.desc}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl animate-fade-in-up w-full" style={{animationDelay: '800ms'}}>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-6 break-words">Prêt à Dominer Google ?</h2>
                <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light break-words">
                    Triaina vous accompagne. Audit SEO, consultant expert, résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center text-center"
                    >
                        → Nous contacter
                    </a>
                    <a 
                        href={PAGE_TO_URL['faq']}
                        onClick={(e) => { e.preventDefault(); onNavigate?.('faq'); }}
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
  // SPECIAL LAYOUT: EXPERTISE SEA (NOUVEAU - AVEC SEO)
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-sea') {
      const seaFaqItems = [
          { q: "Q1 : Combien coûte une campagne Google Ads ?", a: "R : Le coût dépend de votre secteur et de votre budget. Vous pouvez commencer avec 500€/mois. Nous recommandons un minimum de 1 000€/mois pour avoir des résultats significatifs." },
          { q: "Q2 : Combien de temps avant de voir les résultats ?", a: "R : Les résultats apparaissent immédiatement. Vous pouvez avoir vos premières conversions le premier jour. Les résultats significatifs se mesurent après 2-4 semaines d'optimisation." },
          { q: "Q3 : Quel est le ROI moyen du SEA ?", a: "R : Le ROI dépend de votre secteur et de votre landing page. En moyenne, nos clients voient un ROI de 3:1 à 5:1. Certains secteurs (e-commerce) peuvent atteindre 10:1 ou plus." },
          { q: "Q4 : Pouvez-vous garantir les résultats ?", a: "R : Non, personne ne peut garantir des résultats en SEA. Mais nous garantissons une stratégie solide, des annonces optimisées, et un suivi rigoureux pour maximiser votre ROI." },
          { q: "Q5 : Combien coûte la gestion d'une campagne Google Ads ?", a: "R : Nos tarifs commencent à partir de 500€/mois pour la gestion d'une campagne. Cela inclut la création, l'optimisation et le suivi mensuel." },
          { q: "Q6 : Pouvez-vous gérer plusieurs plateformes (Google Ads, Bing, Facebook) ?", a: "R : Oui, nous gérons Google Ads, Bing Ads, Facebook Ads et LinkedIn Ads. Nous créons une stratégie multi-canal pour maximiser votre visibilité." }
      ];

      // Schema complet pour l'Expertise SEA
      const seaSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr",
                "logo": "https://www.triaina.fr/logo.png",
                "description": "Agence SEA et SEO spécialisée en gestion Google Ads et Bing Ads à Paris",
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
                "name": "Triaina - Agence SEA Paris",
                "image": "https://www.triaina.fr/images/expertise-sea.jpg",
                "description": "Agence SEA spécialisée en gestion Google Ads et Bing Ads à Paris",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "50 Quai Louis Blériot",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "postalCode": "75016",
                    "addressCountry": "FR"
                },
                "url": "https://www.triaina.fr/expertise-sea",
                "priceRange": "€€€",
                "areaServed": ["Paris", "Île-de-France", "France"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "48"
                }
            },
            {
                "@type": "Service",
                "name": "Expertise SEA - Gestion Google Ads",
                "description": "Service de gestion Google Ads et Bing Ads pour augmenter votre ROI à Paris",
                "provider": {
                    "@type": "Organization",
                    "name": "Triaina"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Paris"
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": "500",
                    "priceValidUntil": "2026-12-31",
                    "description": "Gestion campagne Google Ads à partir de 500€/mois"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Expertise", "item": "https://www.triaina.fr/expertise" },
                    { "@type": "ListItem", "position": 3, "name": "Expertise SEA", "item": "https://www.triaina.fr/expertise-sea" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Combien coûte une campagne Google Ads ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Le coût dépend de votre secteur et de votre budget. Vous pouvez commencer avec 500€/mois. Nous recommandons un minimum de 1 000€/mois pour avoir des résultats significatifs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Combien de temps avant de voir les résultats ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Les résultats apparaissent immédiatement. Vous pouvez avoir vos premières conversions le premier jour. Les résultats significatifs se mesurent après 2-4 semaines d'optimisation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quel est le ROI moyen du SEA ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Le ROI dépend de votre secteur et de votre landing page. En moyenne, nos clients voient un ROI de 3:1 à 5:1. Certains secteurs (e-commerce) peuvent atteindre 10:1 ou plus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Pouvez-vous garantir les résultats ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Non, personne ne peut garantir des résultats en SEA. Mais nous garantissons une stratégie solide, des annonces optimisées, et un suivi rigoureux pour maximiser votre ROI."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Combien coûte la gestion d'une campagne Google Ads ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nos tarifs commencent à partir de 500€/mois pour la gestion d'une campagne. Cela inclut la création, l'optimisation et le suivi mensuel."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Pouvez-vous gérer plusieurs plateformes (Google Ads, Bing, Facebook) ?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Oui, nous gérons Google Ads, Bing Ads, Facebook Ads et LinkedIn Ads. Nous créons une stratégie multi-canal pour maximiser votre visibilité."
                        }
                    }
                ]
            },
            {
                "@type": "Article",
                "headline": "Expertise SEA Paris : Campagnes Google Ads & Bing",
                "description": "Guide complet sur la gestion Google Ads et comment une agence SEA peut augmenter votre ROI",
                "image": "https://www.triaina.fr/images/expertise-sea.jpg",
                "datePublished": "2026-02-19",
                "dateModified": "2026-02-19",
                "author": { "@type": "Organization", "name": "Triaina", "url": "https://www.triaina.fr" },
                "publisher": { "@type": "Organization", "name": "Triaina", "logo": { "@type": "ImageObject", "url": "https://www.triaina.fr/logo.png" } }
            }
        ]
      };

      return (
        <div className="pt-36 md:pt-40 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden font-sans">
            
            <SEO 
                title="Expertise SEA Paris : Campagnes Google Ads & Bing | Triaina"
                description="Agence SEA à Paris. Gestion Google Ads, Bing Ads, Facebook Ads. Augmentez votre ROI. Consultation gratuite. Triaina."
                schema={seaSchema}
                image="https://www.triaina.fr/images/expertise-sea.jpg"
                canonicalUrl={"https://www.triaina.fr" + PAGE_TO_URL[id]}
            />

            {/* 1. HERO */}
            <div className="mb-20 md:mb-28 animate-fade-in-up w-full text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-8">
                    <Target size={14} className="flex-shrink-0" />
                    <span>Acquisition Payante & ROI</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    EXPERTISE SEA PARIS : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                        CAMPAGNES GOOGLE ADS & BING
                    </span>
                </h1>
                
                <div className="max-w-4xl mx-auto md:mx-0 text-lg md:text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6 space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 block">Introduction</h2>
                    <p>
                        Bienvenue chez Triaina, votre agence SEA à Paris spécialisée en gestion de campagnes Google Ads et Bing Ads. Depuis plus de 5 ans, nous aidons les entreprises parisiennes à générer des leads et des ventes qualifiés grâce à la publicité en ligne.
                    </p>
                    <p>
                        Le SEA (Search Engine Advertising) est le canal le plus rapide pour générer du trafic immédiat. Contrairement au SEO qui prend 3-6 mois, le SEA vous permet de ranker en première position dès le premier jour. Avec une bonne stratégie, vous pouvez multiplier votre ROI par 3 à 5 en quelques semaines.
                    </p>
                    <p>
                        Chez Triaina, nous gérons vos campagnes Google Ads et Bing Ads avec une approche data-driven. Nous optimisons chaque euro dépensé pour maximiser vos conversions et minimiser votre coût par acquisition. Notre objectif : vous générer plus de leads et de ventes au meilleur coût possible.
                    </p>
                    <p>
                        Nous travaillons avec des entreprises de tous les secteurs : e-commerce, services, B2B, immobilier, santé, etc. Notre expertise couvre Google Search Ads, Google Display, Google Shopping, YouTube Ads et Bing Ads.
                    </p>
                </div>
            </div>

            {/* 2. SERVICES SEA */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Services SEA : Dominez les résultats payants</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Gestion Google Ads Search", icon: Search, desc: "Nous gérons vos campagnes Google Search Ads pour dominer les résultats payants sur les mots-clés que vous visez. Nous créons des annonces optimisées, testons les landing pages, et optimisons continuellement vos enchères pour maximiser votre ROI." },
                        { title: "Gestion Google Ads Display", icon: Monitor, desc: "Nous créons des campagnes Display pour augmenter votre visibilité auprès de votre audience cible. Nous utilisons le remarketing, les audiences similaires et les placements ciblés pour générer des leads qualifiés à bas coût." },
                        { title: "Gestion Google Shopping", icon: ShoppingBag, desc: "Pour les e-commerce, nous gérons vos campagnes Google Shopping pour augmenter vos ventes en ligne. Nous optimisons vos flux de produits, vos enchères et vos annonces pour maximiser votre chiffre d'affaires." },
                        { title: "Gestion Bing Ads", icon: Globe, desc: "Bing Ads est souvent oublié, mais représente 20-30% du trafic payant. Nous gérons vos campagnes Bing pour capturer cette audience supplémentaire à bas coût." },
                        { title: "Gestion YouTube Ads", icon: Video, desc: "Nous créons et gérons vos campagnes YouTube Ads pour augmenter votre visibilité vidéo. Nous testons différents formats (skippable, non-skippable, bumper ads) pour trouver ce qui fonctionne le mieux." },
                        { title: "Optimisation des landing pages", icon: Layout, desc: "Une bonne annonce sans une bonne landing page ne convertit pas. Nous optimisons vos landing pages en synergie avec notre <a href='/expertise-contenu' class='text-blue-600 font-bold hover:underline'>Expertise Automatisation de Contenu</a> pour augmenter votre taux de conversion et réduire votre coût par acquisition." }
                    ].map((service, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <service.icon size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: service.desc }}></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. PROCESS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Notre processus SEA</h2>
                <div className="space-y-6">
                    {[
                        { step: "Phase 1 : Audit et stratégie (Semaine 1)", desc: "Nous analysons votre situation actuelle : campagnes existantes, budget, objectifs, concurrence. Nous créons une stratégie SEA personnalisée avec les mots-clés à cibler, le budget à allouer, et les KPIs à suivre." },
                        { step: "Phase 2 : Création des campagnes (Semaine 2)", desc: "Nous créons vos campagnes Google Ads et Bing Ads avec des annonces optimisées, des groupes d'annonces bien structurés, et des landing pages convertissantes." },
                        { step: "Phase 3 : Optimisation et tests (Semaines 3-4)", desc: "Nous testons différentes annonces, enchères et landing pages pour trouver ce qui fonctionne le mieux. Nous optimisons continuellement pour réduire votre coût par acquisition." },
                        { step: "Phase 4 : Suivi et reporting (Continu)", desc: "Nous trackons vos performances mensuellement : clics, impressions, conversions, ROI. Nous vous fournissons des rapports détaillés avec recommandations d'optimisation." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 rounded-lg bg-white hover:border-blue-400 transition-all">
                            <div className="md:w-1/4">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full mb-2 md:mb-0">
                                    Étape 0{i+1}
                                </span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.step}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. CAS CLIENTS */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Cas clients : Résultats réels à Paris</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Cas 1 : E-commerce Paris", initial: "Situation initiale : 2 000€/mois de budget Google Ads, 50 conversions/mois, ROI de 2:1.", result: "Résultats après 4 mois : 150 conversions/mois, ROI de 5:1, chiffre d'affaires multiplié par 3." },
                        { title: "Cas 2 : Cabinet de conseil Paris", initial: "Situation initiale : 1 500€/mois de budget, 5 leads/mois, coût par lead de 300€.", result: "Résultats après 3 mois : 25 leads/mois, coût par lead réduit à 60€, 5x plus de leads au même budget." },
                        { title: "Cas 3 : Agence de services Paris", initial: "Situation initiale : 3 000€/mois de budget, 30 appels/mois, ROI faible.", result: "Résultats après 2 mois : 120 appels/mois, ROI multiplié par 4, coût par appel réduit de 100€ à 25€." }
                    ].map((cas, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all">
                            <h3 className="font-bold text-lg text-blue-700 mb-4 uppercase tracking-wide">{cas.title}</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-slate-600 font-medium mb-2">{cas.initial}</p>
                                </div>
                                <div className="pt-4 border-t border-slate-200">
                                    <p className="text-slate-900 font-bold">{cas.result}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. WHY CHOOSE US */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Pourquoi choisir une agence SEA ?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Expertise Google Ads", desc: "Gérer Google Ads seul est complexe. Les algorithmes changent constamment, les enchères sont compétitives, et une mauvaise configuration peut vous coûter cher. Une agence SEA spécialisée maîtrise ces nuances. Nous utilisons <strong>Semrush</strong>, <strong>Looker Studio</strong> et les scripts <strong>Google Ads</strong> pour optimiser votre budget et maximiser votre ROI." },
                        { title: "Optimisation continue", desc: "Nous testons continuellement vos annonces, landing pages et enchères pour trouver ce qui fonctionne le mieux. Nous ajustons votre stratégie en temps réel basée sur les données." },
                        { title: "Réduction du coût par acquisition", desc: "Grâce à notre expertise, nous réduisons votre coût par acquisition en moyenne de 40-60%. Cela signifie plus de leads et de ventes au même budget." },
                        { title: "Suivi transparent", desc: "Nous vous fournissons des rapports mensuels détaillés avec tous vos KPIs : clics, impressions, conversions, ROI, coût par acquisition. Vous savez exactement où va votre budget." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 6. FAQ */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Vos questions sur le SEA</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {seaFaqItems.map((item, index) => {
                        const isOpen = openSeaFaq === index;
                        return (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors">
                                <button 
                                    onClick={() => toggleSeaFaq(index)}
                                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className={`font-bold text-lg ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>{item.q}</span>
                                    {isOpen ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-400" />}
                                </button>
                                <div className={`transition-[max-height,opacity] duration-300 overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-100 mt-2 pt-4">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 7. CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-0"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Demander une consultation gratuite</h2>
                    <p className="text-lg text-slate-300 mb-8 font-light">
                        Vous voulez savoir comment optimiser vos campagnes Google Ads ou lancer une nouvelle campagne ? Nous offrons une consultation gratuite de 30 minutes.
                    </p>
                    <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                        Nous analyserons vos campagnes actuelles, identifierons les opportunités d'optimisation, et créerons un plan d'action personnalisé pour augmenter votre ROI.
                    </p>
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                        className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-1"
                    >
                        Demander la consultation gratuite <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            {/* 8. MAILLAGE */}
            <div className="py-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">Découvrez nos autres services</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { label: "En savoir plus sur notre agence", link: 'team' },
                        { label: "Expertise SEO", link: 'expertise-seo' },
                        { label: "Expertise GSO", link: 'expertise-gso' },
                        { label: "Voir nos cas clients", link: 'references' },
                        { label: "Nous contacter", link: 'contact' }
                    ].map((item, i) => (
                        <a 
                            key={i}
                            href={PAGE_TO_URL[item.link]}
                            onClick={(e) => { e.preventDefault(); onNavigate?.(item.link); }}
                            className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

        </div>
      );
  }

  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE GEO
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-gso') {
      const geoFaqItems = [
          { q: "Qu'est-ce qu'une agence GEO exactement ?", a: "C'est un prestataire spécialisé qui optimise la visibilité d'une marque pour qu'elle soit citée dans les réponses des moteurs d'IA génératifs (ChatGPT, Perplexity, Gemini, Copilot), en combinant optimisation de contenu, données structurées et stratégie d'autorité off-site." },
          { q: "Quelle est la différence entre SEO et GEO ?", a: "Le SEO vise un classement dans une liste de liens. Le GEO vise l'intégration directe de votre contenu dans le texte généré par l'IA en réponse à une question. Les deux se complètent : un bon référencement SEO reste souvent le socle sur lequel s'appuie une bonne visibilité GEO." },
          { q: "Combien de temps faut-il pour voir des résultats en GEO ?", a: "Nos deux cas clients montrent des résultats en 6 à 8 mois, avec des scores de visibilité GEO passant de 0 % à 73-90 %. Le délai dépend surtout de la concurrence sémantique du secteur et de l'état initial du site." },
          { q: "Quels moteurs d'IA sont concernés par le GEO ?", a: "Principalement ChatGPT Search, Perplexity, Gemini, Microsoft Copilot et les AI Overviews de Google. Une stratégie GEO efficace couvre plusieurs moteurs en parallèle, chacun ayant ses propres critères de citation." },
          { q: "Le balisage Schema.org est-il vraiment nécessaire pour le GEO ?", a: "Oui, dans la mesure où il aide les moteurs génératifs à identifier sans ambiguïté vos entités (organisation, produits, auteurs) et à les relier entre elles. Un balisage incohérent avec le contenu visible peut cependant nuire plus qu'il n'aide." },
          { q: "Pourquoi choisir une agence GEO à Paris plutôt qu'à distance ?", a: "Une agence GEO Paris comme Triaina permet un suivi rapproché et des points réguliers en présentiel si besoin, tout en gardant l'agilité nécessaire pour ajuster la stratégie face aux évolutions fréquentes des algorithmes génératifs." }
      ];

      const combinedGeoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr",
                "logo": "https://www.triaina.fr/logo.svg",
                "description": "Agence GEO spécialisée en Generative Engine Optimization pour dominer les IA génératives.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "50 Quai Louis Blériot",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "postalCode": "75016",
                    "addressCountry": "FR"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/triaina"
                ]
            },
            {
                "@type": "Service",
                "name": "Expertise GEO - Generative Engine Optimization",
                "provider": {
                    "@type": "Organization",
                    "name": "Triaina"
                },
                "url": "https://www.triaina.fr/expertise-gso",
                "description": "Optimisez votre marque pour qu'elle soit citée par ChatGPT, Perplexity, Gemini et l'AI Overview de Google."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Expertise GEO", "item": "https://www.triaina.fr/expertise-gso" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": geoFaqItems.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-6xl mx-auto relative z-10 font-sans">
            <SEO 
              schema={combinedGeoSchema}
              title="Expertise GEO : agence Generative Engine Optimization - Triaina"
              description="Agence GEO experte : dominez les réponses de ChatGPT, Perplexity et Gemini. Méthode testée avec jusqu'à 90% de visibilité IA. Découvrez le Generative Engine Optimization."
              canonicalUrl="https://www.triaina.fr/expertise-gso"
            />
            
            {/* HERO SECTION */}
            <div className="mb-20 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Expertise <span className="text-blue-700">GEO</span> : <br className="hidden md:block"/>
                    dominez les réponses de ChatGPT, Perplexity et Gemini
                </h1>
                <div className="flex justify-center items-center gap-4 text-xs font-mono text-slate-500 uppercase mb-8">
                    <span>// Visibilité IA</span>
                    <span className="w-px h-4 bg-slate-400"></span>
                    <span>// Citation Engine</span>
                </div>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    Le <strong>Generative Engine Optimization (GEO)</strong> consiste à faire citer votre marque directement dans les réponses des moteurs d'IA (ChatGPT, Perplexity, Gemini, Copilot) plutôt que de viser une position dans une liste de liens bleus. C'est le prolongement naturel du SEO, pas son remplacement.
                </p>
                <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed mt-4">
                    Chez Triaina, notre expertise <strong>agence GEO</strong> s'appuie sur une méthode testée sur des secteurs très concurrentiels : 0 à 73 % de visibilité GEO en moins de 6 mois pour un client B2B, 0 à 90 % en moins de 8 mois pour un acteur du Travel.
                </p>
            </div>

            {/* Qu'est-ce que le GEO ? */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="text-blue-600" size={32} />
                    Qu'est-ce que le GEO ?
                </h2>
                <div className="prose prose-lg prose-slate max-w-none">
                    <p>
                        Le GEO désigne l'ensemble des techniques qui visent à faire apparaître un contenu, une marque ou un produit dans les réponses synthétisées par les moteurs génératifs. Le terme vient d'un papier de recherche publié par une équipe de Princeton en novembre 2023 (Aggarwal et al., <em>GEO: Generative Engine Optimization</em>), qui a posé les bases théoriques de la discipline et montré qu'un contenu bien optimisé pouvait gagner jusqu'à 40 % de visibilité dans les réponses des moteurs génératifs.
                    </p>
                    <p className="font-bold mt-6 mb-4">Concrètement, ça change trois choses par rapport au SEO classique :</p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>La cible n'est plus une position dans une liste</strong>, mais une citation dans un texte généré.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>Le facteur clé n'est pas le nombre de backlinks</strong>, mais ce que les chercheurs appellent l'« information gain » : la capacité d'un contenu à apporter une info nouvelle et vérifiable que le modèle n'a pas encore vue ailleurs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>Les moteurs ciblés changent</strong> : ChatGPT Search, Perplexity, Gemini, Copilot et les AI Overviews de Google, en plus du SEO traditionnel qu'on ne remplace pas, on le complète.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Leviers Techniques */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Les leviers techniques du GEO</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Une stratégie GEO qui tient dans la durée repose sur trois chantiers concrets menés en parallèle.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Structuration sémantique</h3>
                        <p className="text-sm text-slate-600 mb-6">Les LLM ne « lisent » pas une page comme un humain : ils découpent le texte en fragments et cherchent des réponses directes.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Réponse en tête</strong> : au début des H2/H3.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Blocs atomiques</strong> : citables hors contexte.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Fragments identifiables</strong> : ancres HTML.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Fraîcheur</strong> : révision trimestrielle.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Données structurées Schema.org</h3>
                        <p className="text-sm text-slate-600 mb-6">Le balisage sémantique aide à identifier sans ambiguïté qui parle, de quoi, et depuis quand.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>JSON-LD</strong> : privilégié par les crawlers.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Parité stricte</strong> : balisage = contenu.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Types spécifiques</strong> : Article, FAQPage, etc.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Vérification technique</strong> : robots.txt propre.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Autorité off-site</h3>
                        <p className="text-sm text-slate-600 mb-6">Les LLM pondèrent fortement ce que des sources tierces disent de vous. Le levier de la bascule.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Citations</strong> : sites de référence, comparatifs.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Relais éditoriaux</strong> : articles invités, presse.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Cohérence</strong> : marque et chiffres homogènes.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Suivi</strong> : trajectoire sur plusieurs mois.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pourquoi une agence */}
            <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">Pourquoi passer par une agence GEO ?</h2>
                <div className="prose prose-lg prose-invert max-w-none relative z-10 text-blue-50">
                    <p>
                        Le GEO demande un mélange de compétences qu'on retrouve rarement dans une seule équipe marketing : structuration sémantique poussée, données structurées Schema.org, stratégie de netlinking orientée autorité perçue par les LLM, et un suivi de métriques qui n'existaient pas il y a deux ans.
                    </p>
                    <p className="mt-6 mb-4 font-bold text-white">Une agence GEO Paris comme Triaina apporte :</p>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Un outillage de suivi</h4>
                            <p className="text-sm">Pour mesurer le taux de citation réel dans ChatGPT, Perplexity et Gemini, pas des estimations.</p>
                        </div>
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Une méthode éprouvée</h4>
                            <p className="text-sm">Testée sur plusieurs secteurs, dont des univers très concurrentiels comme le Travel ou le B2B.</p>
                        </div>
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Accompagnement</h4>
                            <p className="text-sm">Technique et off-site : la partie la plus chronophage et la plus mal maîtrisée en interne.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process en 5 étapes */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Notre processus GEO en 5 étapes</h2>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {[
                        { step: 1, title: "Audit de visibilité IA", desc: "On mesure votre score de citation actuel sur les principaux moteurs génératifs, on identifie les requêtes où vos concurrents sont cités à votre place, et on cartographie les gaps de contenu." },
                        { step: 2, title: "Optimisation sémantique et technique", desc: "Restructuration des contenus en formats citables : réponses directes en tête de section, données chiffrées, tableaux comparatifs, FAQ structurées, balisage Schema.org complet." },
                        { step: 3, title: "Renforcement de l'autorité off-site", desc: "Les LLM pondèrent fortement les sources tierces. On travaille les citations sur des sites de référence, mentions dans des comparatifs, relais éditoriaux." },
                        { step: 4, title: "Déploiement multi-moteurs", desc: "Chaque moteur a ses propres règles. On adapte le contenu pour ChatGPT Search, Perplexity, Gemini, Copilot et les AI Overviews plutôt que de viser un seul canal." },
                        { step: 5, title: "Mesure et itération continue", desc: "Suivi mensuel du taux de citation par moteur, ajustement des contenus sous-performants, veille sur les évolutions d'algorithmes." }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl font-display">
                                    {s.step}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cas Clients */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 text-center">Cas clients : résultats mesurés</h2>
                <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                    On ne travaille qu'avec des chiffres vérifiables. Voici deux campagnes GEO qu'on a menées récemment, sur des univers sémantiques particulièrement concurrentiels.
                </p>
                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-12">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-500 font-bold">
                                <th className="p-4">Cas client</th>
                                <th className="p-4">Secteur</th>
                                <th className="p-4">Durée</th>
                                <th className="p-4">Résultat</th>
                                <th className="p-4">Leviers principaux</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Cas 1</td>
                                <td className="p-4 text-slate-600">Éditeur SaaS B2B</td>
                                <td className="p-4 text-slate-600">Moins de 6 mois</td>
                                <td className="p-4 font-bold text-blue-600">0 % → 73 % visibilité GEO</td>
                                <td className="p-4 text-slate-600">Accompagnement technique + off-site</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Cas 2</td>
                                <td className="p-4 text-slate-600">Travel (voyage)</td>
                                <td className="p-4 text-slate-600">Moins de 8 mois</td>
                                <td className="p-4 font-bold text-blue-600">0 % → 90 % visibilité GEO</td>
                                <td className="p-4 text-slate-600">Optimisation sémantique + autorité off-site</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Cas 1 : Éditeur SaaS B2B</h3>
                        <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                            <p><strong>Contexte :</strong> Marché avec une dizaine d'éditeurs concurrents. 0 % de citations IA initialement, malgré un bon SEO.</p>
                            <p><strong>Actions :</strong> Refonte éditoriale des pages piliers, ajout de balisages <code>Product</code> et <code>FAQPage</code>. Campagne de citations ciblée dans des annuaires B2B et relais médias sectoriels.</p>
                            <p><strong>Résultat :</strong> 0 % à 73 % en moins de 6 mois, avec une nette accélération à partir du 4ᵉ mois lors de l'indexation des citations tierces.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Cas 2 : Plateforme Travel</h3>
                        <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                            <p><strong>Contexte :</strong> Requêtes génériques ultra-disputées par des dizaines d'acteurs, comparateurs et médias.</p>
                            <p><strong>Actions :</strong> Refonte sémantique de +80 pages en blocs atomiques, fragments identifiables, mise à jour trimestrielle. Autorité off-site soutenue : partenariats éditoriaux, cohérence des chiffres.</p>
                            <p><strong>Résultat :</strong> 0 % à 90 % de visibilité GEO, notre meilleur score sur un secteur aussi disputé.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Expertise GEO</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {geoFaqItems.map((item, index) => {
                        const isOpen = openGsoFaq === index;
                        return (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors">
                                <button 
                                    onClick={() => toggleGsoFaq(index)}
                                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className={`font-bold text-lg ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>{item.q}</span>
                                    {isOpen ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-400" />}
                                </button>
                                <div className={`transition-[max-height,opacity] duration-300 overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-100 mt-2 pt-4">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-0"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à mesurer votre visibilité GEO ?</h2>
                    <p className="text-lg text-slate-300 mb-8 font-light">
                        On démarre toujours par un audit de votre score de citation actuel sur ChatGPT, Perplexity et Gemini. C'est la seule façon de savoir d'où vous partez avant de fixer un objectif réaliste.
                    </p>
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                        className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-1"
                    >
                        Demander un audit GEO gratuit <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            
            {/* Sources */}
            <div className="mt-20 border-t border-slate-200 pt-12 animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Sources utiles</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Aggarwal et al. « GEO » (arXiv)
                    </a>
                    <a href="https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Princeton University - GEO
                    </a>
                    <a href="https://blog.hubspot.fr/marketing/geo-generative-engine-optimization" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        HubSpot - Comprendre le GEO
                    </a>
                    <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Google - Données structurées
                    </a>
                </div>
            </div>
        </div>
      );
  }
  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE CONTENT (NOUVEAU)
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-content') {
      const contentFaqItems = [
          { q: "Q1 : Le contenu généré est-il de qualité ?", a: "R : Oui, notre logiciel génère du contenu de qualité professionnelle. Chaque article est optimisé selon les meilleures pratiques SEO et GSO. Vous pouvez publier directement sans relecture." },
          { q: "Q2 : Le contenu est-il unique ?", a: "R : Oui, chaque article généré est unique. Notre logiciel crée du contenu original basé sur les sujets identifiés et votre secteur d'activité." },
          { q: "Q3 : Comment fonctionne l'optimisation GSO ?", a: "R : Notre logiciel analyse les critères de sélection des moteurs IA (ChatGPT, Perplexity, Claude) et génère du contenu qui répond à ces critères. Résultat : votre contenu est cité par les IA." },
          { q: "Q4 : Puis-je personnaliser le contenu généré ?", a: "R : Oui, vous pouvez personnaliser le tone, la longueur, la structure et les éléments inclus. Le logiciel s'adapte à vos préférences." },
          { q: "Q5 : Le contenu généré est-il SEO-friendly ?", a: "R : Oui, 100% du contenu généré est optimisé SEO. Chaque article inclut : mots-clés intégrés, structure H1/H2/H3, balises HTML, données structurées, E-E-A-T renforcé." },
          { q: "Q6 : Combien de temps pour voir les résultats ?", a: "R : Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (trafic multiplié par 3-5x) se mesurent à 3-6 mois." },
          { q: "Q7 : Puis-je utiliser le logiciel pour tous les secteurs ?", a: "R : Oui, le logiciel fonctionne pour tous les secteurs : e-commerce, services, B2B, SaaS, immobilier, santé, etc." }
      ];

      const contentSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr",
                "logo": "https://www.triaina.fr/logo.png",
                "description": "Agence SEO spécialisée en référencement naturel, GSO et automatisation de contenu",
                "sameAs": [
                    "https://www.linkedin.com/company/triaina",
                    "https://twitter.com/triaina",
                    "https://www.facebook.com/triaina"
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Triaina - Logiciel d'Automatisation de Contenu SEO",
                "description": "Logiciel propriétaire d'automatisation de contenu qui scanne automatiquement l'actualité et génère du contenu optimisé SEO et GSO",
                "url": "https://www.triaina.fr/expertise-contenu",
                "image": "https://www.triaina.fr/images/automatisation-contenu.jpg",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web-based",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "48"
                }
            },
            {
                "@type": "Service",
                "name": "Automatisation de Contenu - Logiciel de Rédaction SEO",
                "description": "Service d'automatisation de contenu qui scanne automatiquement l'actualité et génère du contenu optimisé SEO et GSO",
                "url": "https://www.triaina.fr/expertise-contenu",
                "provider": {
                    "@type": "Organization",
                    "name": "Triaina"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "France"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.triaina.fr/agence" },
                    { "@type": "ListItem", "position": 3, "name": "Automatisation de Contenu", "item": "https://www.triaina.fr/expertise-contenu" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": contentFaqItems.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": { "@type": "Answer", "text": item.a }
                }))
            },
            {
                "@type": "WebPage",
                "name": "Automatisation de Contenu | Logiciel Rédaction SEO & GEO",
                "description": "Logiciel d'automatisation de contenu SEO. Scanne automatiquement l'actualité. Génère du contenu optimisé pour Google et ChatGPT.",
                "url": "https://www.triaina.fr/expertise-contenu",
                "image": "https://www.triaina.fr/images/automatisation-contenu.jpg",
                "datePublished": "2026-02-23",
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
            },
            {
                "@type": "HowTo",
                "name": "Comment utiliser le logiciel d'automatisation de contenu",
                "description": "Guide étape par étape pour utiliser notre logiciel d'automatisation de contenu SEO",
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Le logiciel scanne automatiquement",
                        "text": "Notre logiciel scanne automatiquement l'actualité, les tendances et les opportunités de contenu dans votre secteur"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Le logiciel génère le contenu",
                        "text": "Notre logiciel génère automatiquement du contenu optimisé SEO et GSO basé sur les sujets identifiés"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Vous publiez directement",
                        "text": "Récupez le texte, le code HTML et les balises IA, puis publiez directement sur votre site"
                    }
                ]
            }
        ]
      };

      return (
        <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden font-sans">
            <SEO 
                title="Automatisation de Contenu | Logiciel Rédaction SEO & GEO | Triaina"
                description="Logiciel d'automatisation de contenu SEO. Générateur de contenu optimisé pour Google et ChatGPT. Scanne automatiquement l'actualité. Créez 100+ articles en quelques minutes. 5-7€ par article."
                keywords="automatisation contenu, logiciel rédaction seo, générateur contenu seo, content automation, seo automation, rédaction automatisée, contenu optimisé seo, balises html seo, schema.org, ia contenu, chatgpt content, perplexity optimization, generateur article seo, scanner actualite"
                schema={contentSchema}
                image="https://www.triaina.fr/images/automatisation-contenu.jpg"
                canonicalUrl={"https://www.triaina.fr" + PAGE_TO_URL[id]}
            />

            {/* Header Section */}
            <div className="mb-16 md:mb-20 animate-fade-in-up w-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm flex-shrink-0">
                        <Icon size={24} />
                    </div>
                    <div className="h-px flex-grow bg-slate-200"></div>
                    <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest border border-blue-200 px-3 py-1 rounded bg-blue-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]">
                        Pôle Expert
                    </div>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-4 leading-tight break-words hyphens-auto w-full">
                    Automatisation de Contenu
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-xl sm:text-2xl md:text-5xl mt-2 break-words hyphens-auto">
                        Logiciel de Rédaction SEO & GEO
                    </span>
                </h1>
                
                <div className="max-w-4xl text-lg md:text-xl text-slate-600 leading-relaxed font-light mt-8 border-l-4 border-blue-600 pl-4 md:pl-6 break-words space-y-4">
                    <p>Bienvenue sur la page <strong>Expertise Automatisation de Contenu</strong> de Triaina. Nous avons développé un <strong>logiciel propriétaire de rédaction automatisée</strong> qui révolutionne la création de contenu optimisé SEO et GSO.</p>
                    <p>L'<strong>automatisation de contenu</strong> est la clé pour créer du contenu à grande échelle sans sacrifier la qualité. Avec notre <strong>logiciel d'automatisation</strong>, vous pouvez générer des articles optimisés pour Google et les moteurs IA (ChatGPT, Perplexity, Claude) en quelques minutes.</p>
                    <p>Notre logiciel <strong>scanne automatiquement l'actualité et les tendances</strong> de votre secteur, identifie les opportunités de contenu, et génère des articles prêts à publier. Pas besoin de rechercher les mots-clés ou de trouver les sujets : le logiciel s'en occupe.</p>
                    <p><strong>Résultat : vous créez 10x plus de contenu en moins de temps, avec une qualité constante et une optimisation SEO/GSO garantie.</strong></p>
                </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span className="text-red-500">⚠</span> Le Problème
                    </h2>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Créer du Contenu SEO Prend du Temps</h3>
                    <ul className="space-y-3 text-slate-600 mb-6">
                        <li className="flex items-start gap-2"><span className="text-red-500 mt-1">❌</span> <span><strong>Recherche :</strong> Identifier les bons sujets, analyser la concurrence</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 mt-1">❌</span> <span><strong>Rédaction :</strong> Écrire 1 500-2 000 mots pertinents</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 mt-1">❌</span> <span><strong>Optimisation :</strong> Intégrer mots-clés, balises Hn, HTML sémantique</span></li>
                        <li className="flex items-start gap-2"><span className="text-red-500 mt-1">❌</span> <span><strong>Technique :</strong> Schema.org, JSON-LD, balises IA</span></li>
                    </ul>
                    <p className="font-bold text-slate-900 border-t border-slate-200 pt-4">Temps total : 4-6 heures par article.</p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                        <span className="text-blue-600">✓</span> La Solution
                    </h2>
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Logiciel d'Automatisation de Contenu</h3>
                    <ul className="space-y-3 text-blue-800 mb-6">
                        <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✅</span> <span><strong>Scan Automatique :</strong> Actualités, tendances, concurrents</span></li>
                        <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✅</span> <span><strong>Génération Complète :</strong> Texte, HTML, Balises IA</span></li>
                        <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✅</span> <span><strong>Optimisation Totale :</strong> SEO & GEO (ChatGPT, Claude...)</span></li>
                        <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✅</span> <span><strong>Prêt à Publier :</strong> Copier-coller en 1 clic</span></li>
                    </ul>
                    <p className="font-bold text-blue-900 border-t border-blue-200 pt-4">Temps total : 5-10 minutes.</p>
                </div>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-slate-900 mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>Fonctionnalités Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 animate-fade-in-up w-full" style={{ animationDelay: '200ms' }}>
                 {[
                    { title: "Scanner d'Actualité", desc: "Scanne automatiquement l'actualité de votre secteur, les tendances Google Trends et les réseaux sociaux pour identifier les meilleurs sujets." },
                    { title: "Générateur SEO", desc: "Crée des articles long-form (1500+ mots) optimisés avec structure Hn, mots-clés et paragraphes engageants." },
                    { title: "Code HTML Propre", desc: "Génère un code HTML sémantique valide (article, section, aside) avec attributs alt et liens internes." },
                    { title: "Données Structurées", desc: "Intègre automatiquement Schema.org (Article, FAQPage), JSON-LD et Open Graph pour une visibilité maximale." },
                    { title: "Optimisation GSO", desc: "Adapte le contenu pour les IA : réponses directes pour Perplexity, structure claire pour ChatGPT, nuance pour Claude." },
                    { title: "Balises IA", desc: "Ajoute les balises spécifiques pour maximiser les citations dans les réponses générées par les LLMs." }
                 ].map((detail, index) => (
                     <div key={index} className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                         <div className="flex items-start gap-4">
                             <div className="mt-1 bg-blue-100 p-1.5 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                                 <CheckCircle2 size={18} />
                             </div>
                             <div className="min-w-0 flex-1">
                                 <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words">{detail.title}</h3>
                                 <p className="text-slate-600 leading-relaxed text-sm break-words">
                                     {detail.desc}
                                 </p>
                             </div>
                         </div>
                     </div>
                 ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Comparaison : Manuel vs Automatisé</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-slate-200 text-slate-500 font-mono text-xs uppercase tracking-wider bg-slate-50">Aspect</th>
                                <th className="p-4 border-b-2 border-slate-200 text-slate-900 font-bold text-lg bg-slate-50">Manuel</th>
                                <th className="p-4 border-b-2 border-blue-600 text-blue-600 font-bold text-lg bg-blue-50">Automatisé</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { aspect: "Temps par article", manual: "4-6 heures", auto: "5-10 minutes" },
                                { aspect: "Articles par semaine", manual: "1-2", auto: "50-100" },
                                { aspect: "Coût par article", manual: "100-180€", auto: "5-7€" },
                                { aspect: "Qualité", manual: "Variable", auto: "Constante" },
                                { aspect: "Optimisation SEO", manual: "Manuelle", auto: "Automatique" },
                                { aspect: "Optimisation GSO", manual: "Rare", auto: "Systématique" },
                                { aspect: "Code HTML", manual: "Parfois incorrect", auto: "Toujours correct" },
                                { aspect: "Balises IA", manual: "Manquantes", auto: "Complètes" },
                                { aspect: "Scalabilité", manual: "Limitée", auto: "Illimitée" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-slate-700"><strong>{row.aspect}</strong></td>
                                    <td className="p-4 text-slate-500">{row.manual}</td>
                                    <td className="p-4 text-blue-700 font-bold bg-blue-50/30">{row.auto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Results Section */}
            <div className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Résultats Attendus</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={100} /></div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">Trafic Organique</h3>
                        <div className="text-4xl font-black text-blue-400 mb-2 relative z-10">x4 à x8</div>
                        <p className="text-slate-400 text-sm relative z-10">Augmentation en 12 mois</p>
                        <div className="mt-6 pt-6 border-t border-slate-800 relative z-10">
                            <p className="text-sm text-slate-300">Passage de 5k à 40k clics/mois grâce à la publication massive (500-1000 articles/an).</p>
                        </div>
                    </div>
                    <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Trophy size={100} /></div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">Rankings</h3>
                        <div className="text-4xl font-black text-blue-400 mb-2 relative z-10">Top 10</div>
                        <p className="text-slate-400 text-sm relative z-10">Position moyenne cible</p>
                        <div className="mt-6 pt-6 border-t border-slate-800 relative z-10">
                            <p className="text-sm text-slate-300">Multiplication par 10-20 du nombre de mots-clés positionnés en première page.</p>
                        </div>
                    </div>
                    <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Bot size={100} /></div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">Citations IA</h3>
                        <div className="text-4xl font-black text-blue-400 mb-2 relative z-10">+200</div>
                        <p className="text-slate-400 text-sm relative z-10">Mentions mensuelles</p>
                        <div className="mt-6 pt-6 border-t border-slate-800 relative z-10">
                            <p className="text-sm text-slate-300">Visibilité croissante sur ChatGPT, Perplexity et Claude grâce aux balises IA.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions Fréquentes</h2>
                <div className="space-y-4">
                    {contentFaqItems.map((item, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-300 transition-colors">
                            <button 
                                onClick={() => toggleContentFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-slate-900 pr-8">{item.q}</span>
                                {openContentFaq === index ? <Minus size={20} className="text-blue-600 flex-shrink-0" /> : <Plus size={20} className="text-slate-400 flex-shrink-0" />}
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openContentFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 bg-slate-50/50">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Actions & Tags */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-slate-300 pt-12 animate-fade-in-up w-full" style={{ animationDelay: '400ms' }}>
                <div className="flex flex-wrap gap-2">
                    {["Copywriting", "Stratégie", "Content", "NLP", "Automatisation", "IA"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-mono uppercase tracking-wide break-all">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                     <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                        className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 w-full md:w-auto"
                     >
                         Prendre Rendez-Vous <ArrowRight size={16} />
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
    <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
      
      <SEO 
          title={`${content.title}`} 
          description={content.description} 
          canonicalUrl={"https://www.triaina.fr" + PAGE_TO_URL[id]}
      />

      {/* Header Section */}
      <div className="mb-16 md:mb-20 animate-fade-in-up w-full">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm flex-shrink-0">
                <Icon size={24} />
            </div>
            <div className="h-px flex-grow bg-slate-200"></div>
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest border border-blue-200 px-3 py-1 rounded bg-blue-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]">
                Pôle Expert
            </div>
        </div>

        {/* Font size adjustment for Mobile + word break */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-4 leading-tight break-words hyphens-auto w-full">
            {content.title.replace('Expertise ', '')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-xl sm:text-2xl md:text-5xl mt-2 break-words hyphens-auto">
                {content.subtitle}
            </span>
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed font-light mt-8 border-l-4 border-blue-600 pl-4 md:pl-6 break-words">
            {content.description}
        </p>
      </div>

      {/* Details Grid - Explicit 1 column mobile + overflow fix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20 animate-fade-in-up w-full" style={{ animationDelay: '200ms' }}>
         {content.details.map((detail, index) => (
             <div key={index} className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-start gap-4">
                     <div className="mt-1 bg-blue-100 p-1.5 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                         <CheckCircle2 size={18} />
                     </div>
                     <div className="min-w-0 flex-1">
                         <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 break-words">{detail.title}</h3>
                         <p className="text-slate-600 leading-relaxed text-sm break-words">
                             {detail.desc}
                         </p>
                     </div>
                 </div>
             </div>
         ))}
      </div>

      {/* Bottom Actions & Tags */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-slate-300 pt-12 animate-fade-in-up w-full" style={{ animationDelay: '300ms' }}>
          
          <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-mono uppercase tracking-wide break-all">
                      #{tag}
                  </span>
              ))}
          </div>

          <div className="flex gap-4 w-full md:w-auto">
               <a 
                  href={PAGE_TO_URL['contact']}
                  onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
                  className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 w-full md:w-auto"
               >
                   Nous contacter <ArrowRight size={16} />
               </a>
          </div>

      </div>

    </div>
  );
};
