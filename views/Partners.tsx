
import React from 'react';
import { PARTNERS_DATA } from '../constants';
import { ExternalLink, Globe } from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';

export const Partners: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="mb-20 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            RÉSEAU <span className="text-blue-700">STRATÉGIQUE</span>
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Écosystème Média & Influence
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PARTNERS_DATA.map((partner, index) => (
            <a 
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-slate-100 border border-slate-300 rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
            >
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {/* Logo Section */}
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                    {partner.logo ? (
                        <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                     {/* Fallback Icon */}
                    <div className={`${partner.logo ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                        <Globe size={24} className="text-blue-600" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest">
                            {partner.category}
                        </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors">
                        <ScrambleText text={partner.name} delay={200} hover={true} />
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-mono">
                        {partner.description}
                    </p>
                </div>

                {/* Bottom Line */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>ACCÈS DIRECT</span>
                    <span>HTTPS://SECURE</span>
                </div>
            </a>
        ))}
      </div>
    </div>
  );
};
