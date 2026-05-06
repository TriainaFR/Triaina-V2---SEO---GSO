
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative flex flex-col flex-1 font-sans text-slate-900 min-h-[calc(100vh-80px)]">

      {/* INDICATEUR DE PROGRESSION */}
      <div className="fixed top-0 right-0 w-1.5 h-full bg-slate-200/20 z-50 mix-blend-difference">
        <motion.div 
          className="w-full h-full bg-white origin-top"
          style={{ scaleY }}
        />
      </div>

      {/* ════════════ HERO HEADER ════════════ */}
      <header className="flex-1 flex flex-col justify-center items-start relative z-10 px-4 md:px-8 lg:px-12 py-12 md:py-20 mt-16">
          <div className="w-full flex flex-col items-start text-left">
            <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div>
                    <h1 className="font-display font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 w-full max-w-5xl">
                        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                            AGENCE SEO
                        </span>
                        <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 mt-2 sm:mt-0">
                            & GSO
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
                        Référencement Naturel & Optimisation IA
                    </p>
                </div>

                <div className="pb-2 xl:pb-8">
                    <motion.button
                        onClick={() => onNavigate('team')}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group overflow-hidden bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] transition-all duration-500 border border-slate-800 hover:border-blue-500"
                    >
                        <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out rounded-full" />
                        <span className="relative z-10 flex items-center gap-2">
                            Découvrir
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* CLIENTS MARQUEE */}
            <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-left">Ils nous font confiance</p>
                <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,black_0%,black_90%,transparent)]">
                    <motion.div 
                        className="flex whitespace-nowrap gap-16 items-center pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {["YONDER", "LES HARDIS", "TALIS EDUCATION GROUP", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI", "YONDER", "LES HARDIS", "TALIS EDUCATION GROUP", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI", "YONDER", "LES HARDIS", "TALIS EDUCATION GROUP", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI"].map((client, i) => (
                            <span key={i} className="text-2xl md:text-4xl font-display font-black text-slate-900/10 tracking-widest uppercase">
                                {client}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
          </div>
      </header>

    </div>
  );
};
