
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const Home: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div className="relative flex flex-col flex-1 font-sans text-slate-900 cursor-none md:cursor-auto min-h-[calc(100vh-80px)]">
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* INDICATEUR DE PROGRESSION */}
      <div className="fixed top-0 right-0 w-1.5 h-full bg-slate-200/20 z-50 mix-blend-difference">
        <motion.div 
          className="w-full h-full bg-white origin-top"
          style={{ scaleY }}
        />
      </div>

      {/* ════════════ HERO HEADER ════════════ */}
      <header className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
            <h1 className="font-display font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 animate-fade-in-up w-full max-w-5xl" style={{ animationDelay: '100ms' }}>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                    AGENCE SEO
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 mt-2 sm:mt-0">
                    & GSO
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Référencement Naturel & Optimisation IA
            </p>

            {/* CLIENTS MARQUEE */}
            <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Ils nous font confiance</p>
                <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        className="flex whitespace-nowrap gap-16 items-center pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {["YONDER", "LES HARDIS", "BEST RESTAURANTS PARIS", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI", "YONDER", "LES HARDIS", "BEST RESTAURANTS PARIS", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI", "YONDER", "LES HARDIS", "BEST RESTAURANTS PARIS", "SKILINK", "BERNARD MAGREZ", "HÔTEL NOLINSKI"].map((client, i) => (
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
