
import React, { useEffect, useState } from 'react';
import { EXPERTISE_DATA, PAGE_TO_URL } from '../constants';
import { 
  CheckCircle2, ArrowRight, Zap, Database, Search, Target, Users, BookOpen,
  BarChart3, Globe, Layers, Cpu, Trophy, TrendingUp,
  Smartphone, ShoppingBag, Award, Bot, Brain, Sparkles, MessageSquare, Share2,
  FileText, MousePointerClick, HelpCircle, Plus, Minus, Monitor, Video, PieChart, Layout
} from 'lucide-react';
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
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
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
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center text-center"
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
                "telephone": "+33 6 14 91 62 95",
                "email": "lucas@triaina.fr",
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
                "telephone": "+33 6 14 91 62 95",
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
                    "priceValidUntil": "2025-12-31",
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
                "datePublished": "2025-02-19",
                "dateModified": "2025-02-19",
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
                        { title: "Optimisation des landing pages", icon: Layout, desc: "Une bonne annonce sans une bonne landing page ne convertit pas. Nous optimisons vos landing pages en synergie avec notre <a href='/expertise-contenu' class='text-blue-600 font-bold hover:underline'>Expertise Contenu</a> pour augmenter votre taux de conversion et réduire votre coût par acquisition." }
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
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
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
                            onClick={(e) => { e.preventDefault(); onNavigate(item.link); }}
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
  // SPECIAL LAYOUT: EXPERTISE GSO (NOUVEAU - SANS SEO)
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-gso') {
      const gsoFaqItems = [
          { q: "Combien de temps avant de voir des résultats en GSO ?", a: "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (citations visibles) prennent 2-3 mois. L'impact maximal se mesure à 4-6 mois." },
          { q: "Le GSO remplace-t-il le SEO ?", a: "Non. Le GSO et le SEO sont complémentaires. Une bonne stratégie combine les deux. Le GSO génère du trafic IA, le SEO génère du trafic Google. Ensemble, ils maximisent votre visibilité." },
          { q: "Combien coûte une stratégie GSO ?", a: "Cela dépend de votre secteur et de vos objectifs. À partir de 1 000€ par mois, en fonction de vos objectifs. Nous proposons un pré-audit gratuit pour évaluer vos besoins." },
          { q: "Comment mesurez-vous les résultats du GSO ?", a: "Nous suivons : Nombre de citations dans ChatGPT, Perplexity, Claude, Trafic estimé depuis les IA (via Google Analytics), Classement sur les requêtes GSO prioritaires, Conversions générées par le trafic IA." },
          { q: "Pouvez-vous garantir des résultats ?", a: "Non, personne ne peut garantir des résultats en GSO (les algorithmes IA sont opaques). Mais nous garantissons une stratégie solide, du contenu de qualité, et un suivi rigoureux." },
          { q: "Quel est votre processus de sélection des agences partenaires ?", a: "Nous travaillons uniquement avec des agences et consultants ayant une expertise prouvée en GSO. Chaque partenaire doit démontrer ses résultats avant collaboration." }
      ];

      // Construction des données structurées combinées
      const combinedGsoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr",
                "logo": "https://www.triaina.fr/logo.png",
                "description": "Agence GSO et SEO spécialisée en référencement IA et Generative Search Optimization",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "50 Quai Louis Blériot",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "postalCode": "75016",
                    "addressCountry": "FR"
                },
                "telephone": "06 14 91 62 95",
                "email": "lucas@triaina.fr",
                "sameAs": [
                    "https://www.linkedin.com/company/triaina",
                    "https://twitter.com/triaina",
                    "https://www.facebook.com/triaina"
                ]
            },
            {
                "@type": "LocalBusiness",
                "name": "Triaina - Agence GSO Paris",
                "image": "https://www.triaina.fr/images/gso-expertise.jpg",
                "description": "Agence GSO spécialisée en Generative Search Optimization à Paris",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "50 Quai Louis Blériot",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "postalCode": "75016",
                    "addressCountry": "FR"
                },
                "telephone": "06 14 91 62 95",
                "url": "https://www.triaina.fr/expertise-gso",
                "priceRange": "€€€",
                "areaServed": ["Paris", "Île-de-France", "France"],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "47"
                }
            },
            {
                "@type": "Service",
                "name": "Agence GSO - Generative Search Optimization",
                "description": "Service de Generative Search Optimization pour dominer ChatGPT, Perplexity et les moteurs de recherche IA",
                "provider": {
                    "@type": "Organization",
                    "name": "Triaina"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "FR"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Expertise", "item": "https://www.triaina.fr/expertise" },
                    { "@type": "ListItem", "position": 3, "name": "Expertise GSO", "item": "https://www.triaina.fr/expertise-gso" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Combien de temps avant de voir des résultats en GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (citations visibles) prennent 2-3 mois. L'impact maximal se mesure à 4-6 mois." } },
                    { "@type": "Question", "name": "Le GSO remplace-t-il le SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Le GSO et le SEO sont complémentaires. Une bonne stratégie combine les deux. Le GSO génère du trafic IA, le SEO génère du trafic Google. Ensemble, ils maximisent votre visibilité." } },
                    { "@type": "Question", "name": "Combien coûte une stratégie GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Cela dépend de votre secteur et de vos objectifs. À partir de 1 000€ par mois, en fonction de vos objectifs. Nous proposons un pré-audit gratuit pour évaluer vos besoins." } },
                    { "@type": "Question", "name": "Comment mesurez-vous les résultats du GSO ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous suivons : Nombre de citations dans ChatGPT, Perplexity, Claude; Trafic estimé depuis les IA (via Google Analytics); Classement sur les requêtes GSO prioritaires; Conversions générées par le trafic IA." } },
                    { "@type": "Question", "name": "Pouvez-vous garantir des résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, personne ne peut garantir des résultats en GSO (les algorithmes IA sont opaques). Mais nous garantissons une stratégie solide, du contenu de qualité, et un suivi rigoureux." } },
                    { "@type": "Question", "name": "Quel est votre processus de sélection des agences partenaires ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous travaillons uniquement avec des agences et consultants ayant une expertise prouvée en GSO. Chaque partenaire doit démontrer ses résultats avant collaboration." } }
                ]
            },
            {
                "@type": "Article",
                "headline": "Agence GSO Paris : Optimisez votre visibilité sur ChatGPT & IA",
                "description": "Guide complet sur le Generative Search Optimization et comment une agence GSO peut augmenter votre visibilité dans ChatGPT, Perplexity et Claude",
                "image": "https://www.triaina.fr/images/gso-expertise.jpg",
                "datePublished": "2025-02-19",
                "dateModified": "2026-02-19",
                "author": { "@type": "Organization", "name": "Triaina", "url": "https://www.triaina.fr" },
                "publisher": { "@type": "Organization", "name": "Triaina", "logo": { "@type": "ImageObject", "url": "https://www.triaina.fr/logo.png" } }
            }
        ]
      };

      return (
        <div className="pt-36 md:pt-40 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden font-sans">
            
            <SEO 
                title="Agence GSO Paris : Optimisez votre visibilité sur ChatGPT & IA | Triaina"
                description="Agence GSO spécialisée en Generative Search Optimization. Dominez ChatGPT, Perplexity, Claude. Audit gratuit. Triaina."
                schema={combinedGsoSchema}
                image="https://www.triaina.fr/images/gso-expertise.jpg"
            />
            
            {/* 1. HERO HEADER */}
            <div className="mb-20 md:mb-28 animate-fade-in-up w-full text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-8">
                    <Brain size={14} className="flex-shrink-0" />
                    <span>L'Ère Post-Google</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tight">
                    AGENCE GSO PARIS : <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                        OPTIMISEZ VOTRE VISIBILITÉ SUR CHATGPT & IA
                    </span>
                </h1>
                
                <p className="max-w-4xl mx-auto md:mx-0 text-xl md:text-2xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-6">
                    En 2026, ignorer le GSO, c'est perdre 30-40% de votre trafic potentiel. Dominez les réponses génératives.
                </p>
            </div>

            {/* 2. DEFINITION SECTION */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Qu'est-ce que le GSO ?</h2>
                    <div className="text-lg text-slate-700 space-y-6 leading-relaxed">
                        <p>
                            Le <strong>Generative Search Optimization (GSO)</strong> est la nouvelle frontière du référencement digital. Contrairement au SEO traditionnel qui optimise votre visibilité sur Google Search, le GSO optimise votre présence dans les <strong>réponses générées par l'IA</strong> : ChatGPT, Perplexity, Claude, Google AI Overview, et autres moteurs de recherche génératifs.
                        </p>
                        <p>
                            Avec l'émergence des <strong>Large Language Models (LLM)</strong>, les utilisateurs ne cliquent plus seulement sur les résultats Google. Ils posent des questions à ChatGPT, Perplexity ou Claude et reçoivent des réponses synthétisées directement. <strong>Votre contenu doit être visible dans ces réponses IA</strong>.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                        <Sparkles size={20} className="text-blue-400" />
                        Le GSO consiste à :
                    </h3>
                    <ul className="space-y-4 relative z-10">
                        {[
                            "Créer du contenu que les IA peuvent facilement comprendre et citer",
                            "Structurer vos données pour que les modèles IA les identifient comme fiables",
                            "Optimiser votre E-E-A-T (Expertise, Expérience, Autorité, Fiabilité)",
                            "Adapter votre stratégie de contenu aux requêtes conversationnelles"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 3. WHY AGENCY / COMPARISON */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Pourquoi une agence GSO ?</h2>
                    <p className="text-xl text-slate-500 font-light">Le GSO n'est pas du SEO traditionnel.</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* SEO vs GSO Card */}
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Le GSO n'est pas du SEO traditionnel</h3>
                        <p className="text-slate-600 mb-6">Beaucoup d'agences SEO pensent que le GSO est une simple extension du SEO. <strong>C'est une erreur majeure.</strong> Les algorithmes fonctionnent différemment :</p>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <span className="font-bold text-blue-800 block mb-1">Google Search</span>
                                <span className="text-sm text-blue-700">Classe les pages par pertinence et autorité (Liens bleus).</span>
                            </div>
                            <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                                <span className="font-bold text-slate-800 block mb-1">IA Générative</span>
                                <span className="text-sm text-slate-700">Synthétise les meilleures sources pour répondre directement à la question.</span>
                            </div>
                        </div>
                    </div>

                    {/* Challenges Card */}
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Les Défis du GSO</h3>
                        <ul className="space-y-4">
                            {[
                                { title: "Pas de classement visible", text: "Vous ne savez pas si votre contenu est cité par ChatGPT." },
                                { title: "Algorithmes opaques", text: "Les LLM ne publient pas leurs critères de sélection." },
                                { title: "Compétition accrue", text: "Tous les contenus web sont en compétition pour être cités." },
                                { title: "Besoin de spécialisation", text: "Seules les agences spécialisées maîtrisent cette discipline." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="bg-red-100 p-1 rounded text-red-600 mt-1 flex-shrink-0"><Minus size={12} /></div>
                                    <div>
                                        <strong className="block text-slate-900 text-sm">{item.title}</strong>
                                        <span className="text-slate-500 text-sm">{item.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>

                 {/* Triaina Value */}
                 <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-2xl">
                     <h3 className="text-2xl font-bold mb-6">Pourquoi choisir une agence GSO ?</h3>
                     <p className="text-slate-300 mb-6">Une <strong>agence GSO spécialisée</strong> comme Triaina :</p>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Maîtrise les critères de sélection des IA (E-E-A-T, structure, pertinence)",
                            "Teste continuellement vos contenus sur ChatGPT, Perplexity, Claude",
                            "Crée une stratégie hybride SEO + GSO pour maximiser votre visibilité",
                            "Vous aide à dominer les réponses IA dans votre secteur",
                            "Mesure l'impact réel sur votre trafic et vos conversions"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm font-medium">{item}</span>
                            </div>
                        ))}
                     </div>
                     <div className="mt-8 pt-8 border-t border-white/10 text-center text-blue-200 italic">
                         "Sans une agence GSO, vous laissez 30-40% de votre trafic à vos concurrents."
                     </div>
                 </div>
            </div>

            {/* 4. PROCESS SECTION (Timeline) */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Notre processus GSO en 5 étapes</h2>
                
                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

                    {[
                        { step: "Étape 1", time: "Semaine 1", title: "Audit GSO complet", items: ["Vérification de vos citations dans ChatGPT, Perplexity...", "Analyse de votre E-E-A-T (Expertise, Expérience, Autorité, Fiabilité)", "Identification des gaps de contenu", "Benchmark concurrentiel"], deliverable: "Rapport d'audit détaillé + 10 opportunités rapides" },
                        { step: "Étape 2", time: "Semaine 2", title: "Stratégie GSO personnalisée", items: ["Identification des 50-100 requêtes GSO prioritaires", "Mapping des contenus à créer/optimiser", "Plan de netlinking pour renforcer votre autorité", "Calendrier de publication (3-6 mois)"], deliverable: "Stratégie écrite + Roadmap de contenu" },
                        { step: "Étape 3", time: "Semaines 3-8", title: "Création & optimisation de contenu", items: ["Articles longs (2 000+ mots) avec structure claire", "Cas clients détaillés avec résultats mesurables", "Guides pratiques et tutoriels", "FAQ structurées en schema.org", "Optimisation E-E-A-T"], deliverable: "10-15 articles optimisés GSO" },
                        { step: "Étape 4", time: "Semaines 4-12", title: "Netlinking & amplification", items: ["Création de 15-20 backlinks de qualité (DA > 40)", "Partenariats avec blogs influents", "Communiqués de presse", "Amplification sur les réseaux sociaux"], deliverable: "15-20 backlinks + rapports de suivi" },
                        { step: "Étape 5", time: "Mois 3-6", title: "Suivi & optimisation continue", items: ["Suivi mensuel de vos citations dans les IA", "Tests A/B de contenu", "Ajustements de stratégie basés sur les résultats", "Rapports de performance détaillés"], deliverable: "Rapports mensuels + Recommandations d'optimisation" }
                    ].map((step, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 items-start relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                             {/* Dot */}
                             <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10 hidden md:block mt-6"></div>

                             <div className="w-full md:w-1/2">
                                <div className={`bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 transition-all group ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`flex flex-col mb-4 ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded mb-2">{step.step} • {step.time}</span>
                                        <h3 className="text-2xl font-display font-bold text-slate-900">{step.title}</h3>
                                    </div>
                                    
                                    <ul className={`space-y-2 mb-6 text-sm text-slate-600 ${i % 2 === 0 ? 'md:pl-0' : 'md:pr-0'}`}>
                                        {step.items.map((it, idx) => (
                                            <li key={idx} className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></div>
                                                <span>{it}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={`pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <strong>Livrables :</strong> {step.deliverable}
                                    </div>
                                </div>
                             </div>
                             <div className="w-full md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. CASE STUDIES (Grid) */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Cas clients : Résultats réels</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Cas 1 : Agence SaaS B2B",
                            result: "+250%",
                            metric: "Trafic IA en 3 mois",
                            context: "Aucune citation dans ChatGPT. 500 clics/mois depuis Google Search. Contenu non optimisé pour les IA.",
                            actions: ["Audit GSO complet", "Création de 12 articles optimisés GSO", "Netlinking (15 backlinks)", "Optimisation E-E-A-T"],
                            outcomes: ["✅ Citations dans ChatGPT sur 45 requêtes", "✅ +250% de trafic IA (estimé)", "✅ +120% de trafic Google Search", "✅ +35% de conversions"]
                        },
                        {
                            title: "Cas 2 : Cabinet de conseil",
                            result: "+180%",
                            metric: "Visibilité IA en 2 mois",
                            context: "Présence faible dans Perplexity. 200 clics/mois. Contenu généraliste.",
                            actions: ["Création de 8 articles spécialisés", "Optimisation de l'E-E-A-T (auteurs experts)", "Partenariats de netlinking"],
                            outcomes: ["✅ Citations dans Perplexity sur 32 requêtes", "✅ +180% de visibilité IA", "✅ +90% de trafic organique total", "✅ +25% de demandes de devis"]
                        },
                        {
                            title: "Cas 3 : E-commerce",
                            result: "+300%",
                            metric: "Citations IA en 4 mois",
                            context: "Zéro présence dans Google AI Overview. 1 000 clics/mois (SEO uniquement). Contenu court et peu structuré.",
                            actions: ["Création de 20 guides détaillés", "Optimisation technique (schema.org)", "Netlinking massif (20 backlinks)"],
                            outcomes: ["✅ Citations dans Google AI Overview sur 78 requêtes", "✅ +300% de citations IA", "✅ +150% de trafic organique", "✅ +45% de chiffre d'affaires"]
                        }
                    ].map((cas, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="mb-6">
                                <h3 className="font-mono text-sm text-slate-500 uppercase tracking-widest mb-2">{cas.title}</h3>
                                <div className="text-4xl font-display font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform origin-left">{cas.result}</div>
                                <div className="text-sm font-bold text-slate-900">{cas.metric}</div>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Situation initiale</h4>
                                    <p className="text-sm text-slate-600">{cas.context}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Actions</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        {cas.actions.map((act, idx) => <li key={idx}>• {act}</li>)}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-slate-200">
                                    <h4 className="text-xs font-bold uppercase text-green-600 mb-2">Résultats</h4>
                                    <ul className="text-sm text-slate-900 space-y-1 font-medium">
                                        {cas.outcomes.map((out, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                 {out}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 6. FAQ SECTION */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Vos questions sur le GSO</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {gsoFaqItems.map((item, index) => {
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

            {/* 7. CTA / PRE-AUDIT */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-0"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
                        <Search size={32} className="text-blue-300" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Demander un audit GSO gratuit</h2>
                    <p className="text-lg text-slate-300 mb-8 font-light">
                        Vous voulez savoir si votre contenu est cité par ChatGPT ? Nous offrons un <strong>audit GSO gratuit</strong> de 30 minutes.
                    </p>
                    <ul className="text-slate-300 mb-8 space-y-2 text-left max-w-sm mx-auto">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Votre présence actuelle dans les IA</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> 5 opportunités rapides pour améliorer votre visibilité</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Un plan d'action personnalisé</li>
                    </ul>
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-1"
                    >
                        Demander l'audit gratuit <ArrowRight size={20} />
                    </a>
                </div>
            </div>

             {/* 8. OTHER SERVICES */}
             <div className="py-24 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">Découvrez nos autres services</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { label: "En savoir plus sur notre agence", link: 'team' },
                        { label: "Expertise SEO", link: 'expertise-seo' },
                        { label: "Expertise SEA", link: 'expertise-sea' },
                        { label: "Voir nos cas clients", link: 'references' },
                        { label: "Nous contacter", link: 'contact' }
                    ].map((item, i) => (
                        <a 
                            key={i}
                            href={PAGE_TO_URL[item.link]}
                            onClick={(e) => { e.preventDefault(); onNavigate(item.link); }}
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
  // GENERIC LAYOUT FOR OTHER EXPERTISES
  // ════════════════════════════════════════════════════════════════════════

  return (
    <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
      
      <SEO 
          title={`${content.title}`} 
          description={content.description} 
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
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 w-full md:w-auto"
               >
                   Nous contacter <ArrowRight size={16} />
               </a>
          </div>

      </div>

    </div>
  );
};
