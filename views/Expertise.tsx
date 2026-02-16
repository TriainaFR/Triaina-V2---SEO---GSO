
import React, { useEffect } from 'react';
import { EXPERTISE_DATA, PAGE_TO_URL } from '../constants';
import { 
  CheckCircle2, ArrowRight, Zap, Database, Search, Target, Users, BookOpen,
  BarChart3, Globe, Layers, Cpu, Trophy, TrendingUp,
  Smartphone, ShoppingBag, Award, Bot, BrainCircuit, Sparkles, MessageSquare, Share2,
  FileText, MousePointerClick
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
                
                {/* H1 Mobile Optimized: Reduced to text-2xl on mobile to fit long words */}
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
