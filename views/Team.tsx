import React, { useState, useEffect } from 'react';
import { HISTORY_DATA, AMBITION_TEXT, PAGE_TO_URL } from '../constants';
import { Briefcase, Clock, CheckCircle2, Zap, Layout, Terminal } from 'lucide-react';
import { SEO } from '../components/SEO';

type Tab = 'history' | 'careers';

export const Team: React.FC<{ onNavigate: (p: any) => void, initialTab?: Tab }> = ({ onNavigate, initialTab = 'history' }) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  
  useEffect(() => {
    if (initialTab) {
        setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // SCHEMA.ORG / JSON-LD SPÉCIFIQUE
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO & GSO spécialisée en référencement naturel et optimisation pour IA génératives",
        "foundingDate": "2025",
        "sameAs": [
            "https://www.linkedin.com/company/triaina",
            "https://twitter.com/triaina"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "url": "https://www.triaina.fr/contact"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Triaina",
        "image": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO & GSO - Référencement naturel et optimisation pour IA génératives",
        "url": "https://www.triaina.fr",
        "telephone": "+33614916295",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Quai Louis Blériot",
            "addressLocality": "Paris",
            "postalCode": "75016",
            "addressCountry": "FR"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "Triaina - Agence SEO & GSO",
        "description": "Services de référencement naturel (SEO) et optimisation pour IA génératives (GSO)",
        "url": "https://www.triaina.fr",
        "areaServed": "FR",
        "serviceType": ["SEO", "GSO", "Audit SEO", "Stratégie de Référencement", "Consultant SEO"],
        "priceRange": "$$"
      }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 overflow-x-hidden">
      
      {/* Balises SEO spécifiques à cette vue */}
      <SEO 
          title="Agence SEO & GSO | Référencement Naturel & IA Générative"
          description="Agence SEO & GSO spécialisée en référencement naturel et optimisation pour IA génératives. 25 ans d'expertise, audit SEO complet, consultant expert. Triaina."
          keywords="agence SEO, GSO, Generative Search Optimization, audit SEO, consultant SEO, référencement naturel, optimisation IA"
          ogTitle="Triaina - Agence SEO & GSO | Référencement Naturel & IA"
          ogDescription="Agence SEO & GSO : 25 ans d'expertise en référencement naturel et optimisation pour IA génératives (ChatGPT, Gemini)."
          schema={teamSchema} 
          canonicalUrl="https://www.triaina.fr/agence"
      />

      {/* Header */}
      <div className="mb-12 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            TRIAINA<span className="sr-only"> - Agence SEO & GSO | Référencement Naturel & IA Générative</span>
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Intelligence Collective & Innovation
        </p>
      </div>

      {/* Sub-Navigation Tabs - NOW LINKS */}
      <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <button
                className="px-6 py-3 rounded-md text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border flex items-center gap-2 bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20 cursor-default"
            >
                <Clock size={14} />
                AGENCE & HISTOIRE
            </button>
            <a
                href={PAGE_TO_URL['recrutement']}
                onClick={(e) => { e.preventDefault(); onNavigate('recrutement'); }}
                className="px-6 py-3 rounded-md text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border flex items-center gap-2 bg-white/50 text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600"
            >
                <Briefcase size={14} />
                NOUS REJOINDRE
            </a>
      </div>

      {/* Dynamic Content Area - ONLY HISTORY NOW */}
      <div className="min-h-[500px] w-full">
         <div className="py-8 w-full animate-fade-in-up">
             
             {/* ════════════ INTRODUCTION ════════════ */}
             <div className="mb-24 max-w-4xl mx-auto">
                <div className="bg-slate-50 border-l-4 border-blue-600 p-8 md:p-10 rounded-r-xl shadow-lg shadow-blue-900/5">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                        À Propos de Triaina : Agence SEO & GSO Spécialisée en Référencement IA
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                        Triaina est une <strong>agence SEO et GSO</strong> (Generative Search Optimization) fondée en 2025. Nous combinons <strong>25 années d'expertise en référencement naturel</strong> avec l'innovation en optimisation pour les IA génératives, pour vous offrir une stratégie de référencement complète et future-proof.
                    </p>
                </div>
             </div>

             {/* ════════════ TIMELINE (Histoire) ════════════ */}
             <div className="relative space-y-20 w-full mb-32">
                <h3 className="text-center text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
                    Notre Histoire : <span className="text-blue-600">De l'Expertise SEO à l'Innovation IA</span>
                </h3>

                {/* Vertical Spine Line - Visible only on LG+ */}
                <div className="absolute left-6 lg:left-[50%] top-32 bottom-20 w-px bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 z-0 hidden lg:block"></div>
                
                {HISTORY_DATA.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            
                            {/* Year - Side A */}
                            <div className={`w-full lg:w-1/2 flex ${isEven ? 'justify-start lg:justify-end' : 'justify-start lg:justify-start'}`}>
                                <div className={`text-4xl lg:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-800 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                    {item.year}
                                </div>
                            </div>

                            {/* Node - Center */}
                            <div className="absolute left-[50%] -translate-x-1/2 hidden lg:flex items-center justify-center w-4 h-4 rounded-full bg-slate-50 border-2 border-blue-500 shadow-lg shadow-blue-500/20 z-10">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                            </div>

                            {/* Content - Side B */}
                            <div className="w-full lg:w-1/2">
                                <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-lg shadow-xl shadow-blue-900/5 hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
                                     <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                     <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                                        {item.title}
                                     </h3>
                                     <p className="text-slate-600 leading-relaxed text-sm font-sans text-justify">
                                        {item.description}
                                     </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
             </div>

             {/* ════════════ VISION 2025+ ════════════ */}
             <div className="mb-32">
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-10 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl">
                     {/* Decoration */}
                     <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                     <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                                    Notre Vision 2025+ : <br/><span className="text-blue-400">Croissance dans l'Ère IA</span>
                                </h2>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm mb-8">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-blue-300 mb-4">Notre Ambition</h3>
                                    <p className="text-lg italic font-light leading-relaxed">
                                        "{AMBITION_TEXT}"
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 rounded-xl p-8 border border-white/10">
                                 <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                    <Terminal size={20} className="text-blue-400" />
                                    Ce que nous Faisons : Services SEO & GSO
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Audit SEO complet (Technique & Stratégique)",
                                        "Stratégie de référencement naturel (Google & IA)",
                                        "Consultant SEO expert dédié",
                                        "Optimisation GSO & IA (ChatGPT, Gemini, Perplexity)",
                                        "Création de contenu optimisé SEO/GSO",
                                        "Netlinking & Autorité Média",
                                        "Optimisation on-page & technique"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-mono text-slate-200">
                                            <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 text-center">
                            <p className="text-slate-300 mb-4">Pourquoi Choisir Triaina ?</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["Pionniers du GSO en France", "25 ans d'expertise en référencement naturel", "Réseau Média Propriétaire Premium", "Approche SEO + GSO Hybride", "Consultant SEO expert dédié"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                     </div>
                </div>
             </div>

             {/* ════════════ NOTRE APPROCHE ════════════ */}
             <div className="mb-20">
                <h2 className="text-center text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
                    Notre Approche : <br/><span className="text-blue-600">SEO + GSO = Visibilité Maximale</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "SEO Traditionnel",
                            desc: "Audit SEO complet, stratégie de référencement naturel, optimisation on-page, netlinking, création de contenu optimisé. Nous maîtrisons tous les aspects du référencement naturel pour vous assurer une visibilité maximale sur Google Search.",
                            icon: Layout
                        },
                        {
                            title: "Innovation GSO (Generative Search Optimization)",
                            desc: "Nous optimisons aussi votre présence pour les IA génératives (ChatGPT, Gemini, Perplexity). Le GSO est l'avenir du référencement et nous en sommes les pionniers.",
                            icon: Zap
                        },
                        {
                            title: "Amplification Média",
                            desc: "Notre réseau de publications premium vous permet de construire une autorité réelle, reconnue par Google et les IA génératives. C'est l'avantage compétitif de Triaina.",
                            icon: CheckCircle2
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
             </div>

             {/* ════════════ POURQUOI TRIAINA (Section 5) ════════════ */}
             <div className="mb-20">
                <div className="bg-slate-900 text-white p-10 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl">
                     {/* Decoration */}
                     <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                     <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
                            Pourquoi Choisir <span className="text-blue-400">Triaina</span> ?
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            {[
                                {
                                    title: "Pionniers du GSO en France",
                                    desc: "Nous sommes parmi les premiers à maîtriser l'optimisation pour les moteurs de réponse IA (ChatGPT, Gemini, Perplexity)."
                                },
                                {
                                    title: "25 Ans d'Expertise SEO",
                                    desc: "Une connaissance profonde des algorithmes de Google, acquise sur le terrain depuis 2000."
                                },
                                {
                                    title: "Réseau Média Propriétaire",
                                    desc: "Accès exclusif à un réseau de sites premium pour booster votre autorité instantanément."
                                },
                                {
                                    title: "Approche Hybride Unique",
                                    desc: "Nous ne choisissons pas entre SEO et IA. Nous fusionnons les deux pour une domination totale."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
             </div>

             {/* ════════════ FINAL CTA ════════════ */}
             <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        Prêt à Transformer votre Visibilité ?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Triaina vous accompagne dans votre <strong>stratégie SEO et GSO</strong>. Audit SEO, consultant expert, 
                        optimisation pour Google et les IA génératives.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href={PAGE_TO_URL['contact']}
                            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                            className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-colors shadow-xl shadow-blue-600/20 inline-flex items-center justify-center"
                        >
                            → Demande de Contact
                        </a>
                        <a 
                            href={PAGE_TO_URL['expertise-seo']}
                            onClick={(e) => { e.preventDefault(); onNavigate('expertise-seo'); }}
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-300 font-bold uppercase tracking-widest rounded hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                        >
                            → Expertise SEO
                        </a>
                    </div>
                </div>
             </div>

          </div>
      </div>
    </div>
  );
};
