
import React from 'react';
import { PRESS_DATA } from '../constants';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';
import { SEO } from '../components/SEO';

export const Press: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Espace Presse", "item": "https://www.triaina.fr/presse" }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
      
      <SEO 
        title="Espace Presse & Médias" 
        description="Les actualités de l'agence Triaina. Revues de presse, tribunes expertes et communiqués sur le futur du référencement (SEO & IA)."
        schema={breadcrumbSchema}
      />

      {/* Header */}
      <div className="mb-20 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            ESPACE <span className="text-blue-700">PRESSE</span>
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Couverture Média & Publications
        </p>
      </div>

      {PRESS_DATA.length > 0 ? (
          /* Press Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRESS_DATA.map((article, index) => (
                <a 
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        
                        {/* Tag */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-blue-700 uppercase tracking-widest border border-blue-100 rounded-sm shadow-sm">
                            {article.tag}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                {article.logo ? (
                                    <img src={article.logo} alt={article.source} className="h-6 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
                                ) : (
                                    <span className="font-display font-bold text-slate-700">{article.source}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                                <Calendar size={12} />
                                {article.date}
                            </div>
                        </div>

                        <h3 className="text-xl font-display font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors">
                            <ScrambleText text={article.title} delay={300} hover={true} />
                        </h3>

                        <div className="mt-auto flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider group-hover:gap-4 transition-all">
                            Lire l'article <ArrowUpRight size={14} />
                        </div>
                    </div>
                </a>
            ))}
          </div>
      ) : (
          /* Empty State / Coming Soon */
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up bg-slate-100/50 rounded-lg border border-slate-200 border-dashed">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-lg shadow-blue-500/5">
                <Clock size={32} className="text-blue-600 animate-pulse" />
             </div>
             <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Publications à venir</h3>
             <p className="font-mono text-sm text-slate-500 text-center max-w-md">
                 Notre équipe prépare actuellement les prochaines revues de presse et communiqués officiels.
             </p>
             <div className="mt-6 flex gap-2">
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '100ms'}}></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></span>
             </div>
          </div>
      )}
    </div>
  );
};
