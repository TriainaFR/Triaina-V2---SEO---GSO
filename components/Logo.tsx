
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric Trident Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
        <svg viewBox="0 0 40 40" className="w-full h-full text-slate-900 relative z-10">
            {/* Pillars */}
            <rect x="18" y="5" width="4" height="25" fill="#2563eb" className="animate-pulse" /> {/* Center - Blue */}
            <rect x="10" y="12" width="3" height="15" fill="currentColor" />
            <rect x="27" y="12" width="3" height="15" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xl font-display font-bold tracking-[0.2em] text-slate-900 leading-none">
          TRIAINA
        </span>
        <div className="mt-1">
            <span className="text-[10px] font-mono text-blue-600 tracking-widest uppercase">
            SEO - GSO - Média
            </span>
        </div>
      </div>
    </div>
  );
};
