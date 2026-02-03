import React from 'react';
import { Database, Network, Zap, ArrowRight } from 'lucide-react';

const TechnicalSection: React.FC = () => {
  return (
    <div className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-fade-in-up">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-blue-600"></span>
                        <span className="text-blue-600 font-mono text-xs tracking-widest uppercase">Méthodologie SEO Propriétaire</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                        Protocole Triaina : Architecture SEO + Optimisation IA
                    </h2>
                </div>
                <div className="hidden md:block text-slate-400 font-mono text-xs text-right leading-relaxed max-w-xs">
                    // FONDATIONS<br/>
                    // STRATÉGIE<br/>
                    // VISIBILITÉ GÉNÉRATIVE
                </div>
            </div>

            {/* Protocol Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-slate-200 bg-slate-50">
                {[
                    { 
                        title: "Audit & Fondations SEO", 
                        desc: "Une base saine pour une visibilité durable. Nous analysons votre site, identifions les problèmes techniques et on-page, et structurons votre architecture SEO pour que Google vous comprenne parfaitement.", 
                        icon: Database,
                        step: "01"
                    },
                    { 
                        title: "Stratégie de Référencement Naturel", 
                        desc: "Nous définissons une stratégie SEO adaptée à votre secteur. Optimisation des mots-clés, création de contenu et netlinking pour dominer Google et assurer une croissance organique.", 
                        icon: Network,
                        step: "02"
                    },
                    { 
                        title: "Optimisation SEO IA & Visibilité Générative", 
                        desc: "Au-delà de Google : nous optimisons votre présence pour les IA génératives (ChatGPT, Gemini, Perplexity). Soyez visible partout où vos clients vous cherchent via notre expertise hybride.", 
                        icon: Zap,
                        step: "03"
                    },
                ].map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative p-10 lg:p-12 border-b border-r border-slate-200 transition-all duration-500 hover:bg-white hover:z-10 flex flex-col justify-between min-h-[400px]"
                    >
                        {/* Hover Overlay Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div>
                            {/* Header */}
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-display font-bold text-5xl text-slate-200 group-hover:text-blue-100 transition-colors">
                                    {item.step}
                                </span>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
                                    <item.icon size={20} />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                            </h3>
                            
                            <p className="text-slate-600 leading-loose font-light text-sm md:text-base">
                                {item.desc}
                            </p>
                        </div>

                        {/* Bottom Indicator */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-blue-600">Phase Active</span>
                            <ArrowRight size={12} className="text-blue-600" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TechnicalSection;