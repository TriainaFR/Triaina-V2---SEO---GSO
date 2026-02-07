
import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrambleText } from '../components/ScrambleText';
import { PAGE_TO_URL } from '../constants';

export const NotFound: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
      
      {/* NOINDEX pour éviter les problèmes SEO (Soft 404) */}
      <SEO 
        title="Page Introuvable (404)" 
        description="La page que vous recherchez n'existe pas."
        noIndex={true} 
      />

      <div className="mb-8 p-6 bg-slate-50 rounded-full border border-slate-200 animate-pulse">
        <AlertTriangle size={64} className="text-blue-600" strokeWidth={1} />
      </div>

      <h1 className="text-6xl md:text-9xl font-display font-black text-slate-900 mb-4 tracking-tighter opacity-20 select-none">
        404
      </h1>

      <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6">
        <ScrambleText text="SIGNAL PERDU" delay={100} />
      </h2>

      <p className="text-slate-600 font-mono text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
        L'URL demandée ne correspond à aucune donnée indexée dans notre matrice. 
        Cette page a peut-être été déplacée ou supprimée.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
            href={PAGE_TO_URL['home']}
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="group px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center gap-3 justify-center"
        >
            <Home size={18} />
            Retour Accueil
        </a>
      </div>

    </div>
  );
};
