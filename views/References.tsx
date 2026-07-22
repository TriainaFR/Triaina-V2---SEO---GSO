
import React from 'react';
import { REFERENCES_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export const References: React.FC = () => {
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

      <div className="flex items-end justify-between mb-8 border-b border-slate-400 pb-8 animate-fade-in-up">
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

      <div className="bg-slate-100/50 border border-slate-200 p-4 rounded mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <p className="font-mono text-sm text-slate-600">
            <span className="text-blue-700 font-bold mr-2">NOTE DE CONFIDENTIALITÉ :</span>
            Seules nos références sans accord de confidentialité sont affichées publiquement. Nos use cases détaillés et nos données de suivi de performance sont présentés de vive voix lors de nos premiers rendez-vous.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REFERENCES_DATA.map((item, index) => (
            <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={`Référence client ${item.client} - ${item.title}`} 
                        loading="lazy"
                        className="w-full h-full object-contain p-8 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2">
                        {item.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-mono text-blue-700 border border-white/20 rounded shadow-sm uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4 gap-4">
                        <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {item.client}
                        </h3>
                        <ArrowUpRight size={24} className="text-slate-400 group-hover:text-blue-700 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm font-mono text-slate-600 mb-6 font-medium">
                        {item.title}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100">
                        <h4 className="font-mono text-blue-700 text-[10px] tracking-wider uppercase mb-3 opacity-80">
                            Impact & Résultats
                        </h4>
                        <ul className="space-y-3">
                            {item.results.slice(0, 2).map((res, i) => (
                                <li key={i} className="text-xs text-slate-700 font-mono flex items-start gap-2.5 leading-relaxed">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 shadow-sm"></span>
                                    <span className="line-clamp-2">{res}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};
