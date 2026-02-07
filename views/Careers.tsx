
import React, { useState } from 'react';
import { CAREERS_DATA } from '../constants';
import { Briefcase, MapPin, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrambleText } from '../components/ScrambleText';

export const Careers: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="mb-20 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            REJOINDRE <span className="text-blue-700">L'UNITÉ</span>
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Missions Ouvertes
        </p>
      </div>

      {/* Intro Text */}
      <div className="grid md:grid-cols-12 gap-12 mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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

      {/* Jobs Grid */}
      <div className="space-y-6">
        {CAREERS_DATA.map((job, index) => {
            const isHovered = hoveredId === job.id;
            
            return (
                <div 
                    key={job.id}
                    className="group relative bg-white/60 border border-slate-300 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150 + 400}ms` }}
                    onMouseEnter={() => setHoveredId(job.id)}
                    onMouseLeave={() => setHoveredId(null)}
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
                            <button className="relative overflow-hidden px-6 py-3 bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-xs border border-slate-300 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group-hover:shadow-md">
                                <span className="relative z-10 flex items-center gap-2">
                                    POSTULER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Requirements Drawer */}
                    <div className={`bg-slate-50 border-t border-slate-200 overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 flex gap-8 items-center justify-center">
                            <span className="font-mono text-xs text-slate-400 uppercase">Pré-requis:</span>
                            <div className="flex gap-4">
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
        })}
      </div>
      
      {/* Footer Banner */}
      <div className="mt-20 p-12 bg-gradient-to-r from-blue-900 to-slate-900 rounded-lg text-white text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl font-display font-bold mb-4">Candidature Spontanée</h3>
            <p className="text-blue-200 font-mono text-sm mb-8 max-w-2xl mx-auto">
                Votre profil ne correspond à aucune offre ? Nous sommes toujours à la recherche de talents singuliers.
            </p>
            <button className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors rounded shadow-lg">
                Envoyer mon profil
            </button>
      </div>

    </div>
  );
};
