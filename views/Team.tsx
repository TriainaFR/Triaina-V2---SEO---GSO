
import React, { useState, useEffect } from 'react';
import { HISTORY_DATA, AMBITION_TEXT, PAGE_TO_URL, CAREERS_DATA } from '../constants';
import { Briefcase, Clock, CheckCircle2, Zap, Layout, Terminal, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrambleText } from '../components/ScrambleText';

type Tab = 'history' | 'careers';

export const Team: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<Tab>('history');
  const [hoveredJobId, setHoveredJobId] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // SCHEMA.ORG / JSON-LD SPÉCIFIQUE
  const teamSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
            { "@type": "ListItem", "position": 2, "name": "Agence", "item": "https://www.triaina.fr/agence" }
        ]
      },
      {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO et consultant en référencement naturel spécialisée en GSO (Generative Search Optimization)",
        "foundingDate": "2025",
        "sameAs": [
            "https://www.linkedin.com/company/triaina",
            "https://twitter.com/triaina"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+33-1-XX-XX-XX-XX",
            "email": "contact@triaina.fr"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Quai Louis Blériot",
            "addressLocality": "Paris",
            "postalCode": "75016",
            "addressCountry": "FR"
        }
      },
      {
        "@type": "Article",
        "headline": "Triaina : Agence SEO & GSO Spécialisée en Référencement IA",
        "description": "Découvrez l'histoire de Triaina, agence pionnière en SEO et Generative Search Optimization. Expertise depuis 2000, innovation en référencement naturel et optimisation pour les IA génératives.",
        "image": "https://www.triaina.fr/triaina/og-image.jpg",
        "author": {
            "@type": "Organization",
            "name": "Triaina"
        },
        "datePublished": "2025-02-02",
        "dateModified": "2025-02-02"
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      
      case 'history':
        return (
          <div className="py-8 w-full animate-fade-in-up">
             
             {/* ════════════ INTRODUCTION ════════════ */}
             <div className="mb-24 max-w-4xl mx-auto">
                <div className="bg-slate-50 border-l-4 border-blue-600 p-8 md:p-10 rounded-r-xl shadow-lg shadow-blue-900/5">
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                        À Propos de Triaina : Intelligence Collective & Innovation
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                        <strong>Triaina</strong> est une <strong>agence SEO, GSO, Média</strong> fondée en 2025. Nous combinons 25 années d'expertise en <strong>SEO</strong> avec l'innovation en <strong>Generative Search Optimization (GSO)</strong> pour vous offrir une stratégie de <strong>référencement</strong> complète et future-proof.
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
                                    Ce que nous Faisons
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Expertise SEO depuis 2000 (25 ans)",
                                        "Audit SEO complet (Technique & Stratégique)",
                                        "Stratégie de référencement (Google & IA)",
                                        "Consultant SEO expert dédié",
                                        "GSO & Optimisation IA (ChatGPT, Gemini...)",
                                        "Autorité média (Réseau premium)"
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
                            <p className="text-slate-300 mb-4">Pourquoi Triaina ?</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["Pionniers du GSO", "25 ans d'expertise", "Réseau Média Propriétaire", "SEO IA Hybride"].map((tag, i) => (
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
                            desc: "Audit SEO complet, stratégie de référencement naturel, optimisation on-page, netlinking, création de contenu... Nous dominons tous les aspects du référencement naturel pour vous assurer une visibilité maximale sur Google Search.",
                            icon: Layout
                        },
                        {
                            title: "Innovation GSO",
                            desc: "Mais nous ne nous arrêtons pas là. Nous optimisons aussi votre présence pour les IA génératives (ChatGPT, Gemini, Perplexity). C'est le GSO (Generative Search Optimization), l'avenir du référencement.",
                            icon: Zap
                        },
                        {
                            title: "Amplification Média",
                            desc: "Notre réseau de publications premium vous permet de construire une autorité réelle, reconnue par Google et les IA. C'est l'avantage compétitif de Triaina.",
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

             {/* ════════════ FINAL CTA ════════════ */}
             <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        Prêt à Transformer votre Visibilité ?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        <strong>Triaina</strong> vous accompagne dans votre stratégie <strong>SEO</strong> et <strong>GSO</strong>. 
                        Audit SEO, consultant expert, optimisation pour Google et les IA.
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
        );

      case 'careers':
        // MERGED CONTENT FROM Careers.tsx
        return (
          <div className="space-y-6 animate-fade-in-up w-full">
             
             {/* Header Section */}
             <div className="mb-12 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-2">
                    REJOINDRE <span className="text-blue-700">L'UNITÉ</span>
                </h3>
                <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
                    // Missions Ouvertes
                </p>
             </div>

             {/* Intro Text & Profil */}
             <div className="grid md:grid-cols-12 gap-12 mb-20">
                <div className="md:col-span-8">
                    <p className="text-xl text-slate-700 leading-relaxed font-light">
                        Triaina recherche des esprits analytiques et créatifs pour façonner le futur de la recherche générative. 
                        Si vous comprenez que le SEO est mort et que le GSO est l'avenir, vous êtes au bon endroit.
                    </p>
                </div>
                <div className="md:col-span-4 border-l-2 border-blue-600 pl-6">
                    <div className="text-sm font-mono text-slate-500 mb-2">PROFIL RECHERCHÉ</div>
                    <ul className="space-y-2">
                        {['Audace Technique', 'Vision Systémique', 'Rigueur Éditoriale'].map((trait, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                <CheckCircle2 size={16} className="text-blue-600" /> {trait}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>

             {/* Jobs Grid (Using CAREERS_DATA if available, or static if needed) */}
             <div className="space-y-6">
                {CAREERS_DATA.length > 0 ? CAREERS_DATA.map((job, index) => {
                    const isHovered = hoveredJobId === job.id;
                    return (
                        <div 
                            key={job.id}
                            className="group relative bg-white/60 border border-slate-300 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-500"
                            style={{ animationDelay: `${index * 150}ms` }}
                            onMouseEnter={() => setHoveredJobId(job.id)}
                            onMouseLeave={() => setHoveredJobId(null)}
                        >
                            <div className="p-8 grid md:grid-cols-12 gap-6 items-center">
                                {/* Title & Dept */}
                                <div className="md:col-span-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest">
                                            {job.department}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                        <ScrambleText text={job.title} delay={300} hover={true} />
                                    </h3>
                                </div>

                                {/* Meta Info */}
                                <div className="md:col-span-3 flex flex-col gap-2 font-mono text-xs text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-blue-500" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={14} className="text-blue-500" />
                                        {job.type}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign size={14} className="text-blue-500" />
                                        {job.salary}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-3 text-sm text-slate-600 leading-relaxed border-l border-slate-200 pl-4">
                                    {job.description}
                                </div>

                                {/* CTA */}
                                <div className="md:col-span-2 flex justify-end">
                                    <a href={`mailto:lucas@triaina.fr?subject=Candidature - ${job.title}`} className="relative overflow-hidden px-6 py-3 bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-xs border border-slate-300 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group-hover:shadow-md inline-flex items-center gap-2">
                                        <span className="relative z-10 flex items-center gap-2">
                                            POSTULER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Requirements Drawer */}
                            <div className={`bg-slate-50 border-t border-slate-200 overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 flex flex-wrap gap-8 items-center justify-center">
                                    <span className="font-mono text-xs text-slate-400 uppercase">Pré-requis:</span>
                                    <div className="flex flex-wrap gap-4">
                                        {job.requirements.map((req, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono text-blue-700 shadow-sm">
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : (
                    <div className="text-center py-12 bg-slate-50 border border-slate-200 border-dashed rounded-lg">
                        <p className="text-slate-500">Aucune offre spécifique pour le moment, mais...</p>
                    </div>
                )}
             </div>

            {/* Footer Banner - Spontaneous Application */}
            <div className="mt-12 p-8 md:p-12 bg-gradient-to-r from-blue-900 to-slate-900 rounded-lg text-white text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4">Candidature Spontanée</h3>
                  <p className="text-blue-200 font-mono text-sm mb-8 max-w-2xl mx-auto">
                      Votre profil ne correspond à aucune offre ? Nous sommes toujours à la recherche de talents singuliers pour enrichir notre laboratoire.
                  </p>
                  <a 
                    href="mailto:lucas@triaina.fr?subject=Candidature%20Spontanée%20-%20Triaina"
                    className="inline-block px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors rounded shadow-lg w-full md:w-auto"
                  >
                      Envoyer mon profil
                  </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 overflow-x-hidden">
      
      {/* Balises SEO spécifiques à cette vue */}
      <SEO 
          title="Agence Triaina : L'Histoire d'une Agence SEO & GSO Pionnière"
          description="Découvrez Triaina, agence née de 25 ans d'expertise SEO et d'innovation IA. Notre mission : définir les standards du GSO et de l'autorité média."
          schema={teamSchema} 
      />

      {/* Header */}
      <div className="mb-12 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            TRIAINA
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Intelligence Collective & Innovation
        </p>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        {[
            { id: 'history', label: 'AGENCE & HISTOIRE', icon: Clock },
            { id: 'careers', label: 'NOUS REJOINDRE', icon: Briefcase }
        ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`px-6 py-3 rounded-md text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === tab.id 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' 
                    : 'bg-white/50 text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`}
            >
                {tab.icon && <tab.icon size={14} />}
                {tab.label}
            </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[500px] w-full">
        {renderContent()}
      </div>

    </div>
  );
};
