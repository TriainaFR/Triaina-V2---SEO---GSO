
import React, { useState } from 'react';
import { REFERENCES_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';
import { SEO } from '../components/SEO';

export const References: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Toggle function for mobile tap
  const handleInteraction = (index: number) => {
    if (hoveredIndex === index) {
        setHoveredIndex(null);
    } else {
        setHoveredIndex(index);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Références", "item": "https://www.triaina.fr/references" }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
      
      <SEO 
        title="Références Clients & Cas Pratiques" 
        description="Découvrez comment Triaina accompagne ses clients (Yonder, Best Restaurants, Hôtellerie...) vers la domination SEO et GSO. Études de cas et résultats."
        schema={breadcrumbSchema}
        canonicalUrl="https://www.triaina.fr/references"
      />

      <div className="flex items-end justify-between mb-20 border-b border-slate-400 pb-8 animate-fade-in-up">
        <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
                DOSSIERS <span className="text-blue-700">CLIENTS</span>
            </h1>
            <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
                // Base de Performance
            </p>
        </div>
        <div className="hidden md:block font-mono text-slate-500 text-xs text-right">
            TOTAL DOSSIERS: {REFERENCES_DATA.length}<br/>
            STATUT: PUBLIC
        </div>
      </div>

      <div className="flex flex-col border-t border-slate-400">
        {REFERENCES_DATA.map((item, index) => (
            <div 
                key={item.id}
                className="group relative border-b border-slate-300 py-10 transition-all duration-300 bg-slate-100/60 hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:pl-4 cursor-pointer"
                onClick={() => handleInteraction(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className="grid md:grid-cols-12 gap-8 items-center px-4">
                    {/* ID */}
                    <div className="col-span-1 font-mono text-slate-500 text-xs hidden md:block">
                        #00{index + 1}
                    </div>

                    {/* Client Name */}
                    <div className="col-span-4">
                        <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                            {item.client}
                            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </h3>
                    </div>

                    {/* Summary */}
                    <div className="col-span-4 text-slate-700 font-mono text-sm">
                        {item.title}
                    </div>

                    {/* Tags */}
                    <div className="col-span-3 flex justify-end gap-2">
                        {item.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[10px] font-mono text-blue-700 bg-white px-2 py-1 rounded-sm border border-blue-200 uppercase shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Reveal Details */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div className="grid md:grid-cols-12 gap-8 px-4">
                        <div className="hidden md:block col-span-1"></div>
                        
                        {/* Text Content - Always Visible on Expand */}
                        <div className="col-span-12 md:col-span-7 bg-white/95 p-6 border-l-2 border-blue-600 shadow-md backdrop-blur-sm rounded-r-md">
                             <h4 className="font-mono text-blue-700 text-xs uppercase mb-2">Analyse d'Impact</h4>
                             <ul className="space-y-1">
                                {item.results.map((res, i) => (
                                    <li key={i} className="text-slate-700 text-sm font-mono flex items-center gap-2">
                                        <span className="min-w-[4px] h-1 bg-blue-500"></span>
                                        {res}
                                    </li>
                                ))}
                             </ul>
                             {item.solution && (
                                <p className="mt-4 text-xs text-slate-500 font-light italic border-t border-slate-100 pt-2">
                                    {item.solution}
                                </p>
                             )}
                        </div>

                        {/* Image Content - Hidden on Mobile */}
                        <div className="hidden md:block col-span-4 relative aspect-video border border-slate-300 overflow-hidden rounded shadow-sm">
                             <img 
                                src={item.image} 
                                alt={`Référence client ${item.client} - ${item.title}`} 
                                loading="lazy" 
                                width="600"
                                height="400"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
