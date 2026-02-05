
import React from 'react';
import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const FOUNDERS = [
    {
      name: "Lucas Lecoq",
      role: "Co-Fondateur",
      phone: "+33 6 14 91 62 95",
      email: "lucas@triaina.fr",
    },
    {
      name: "Swann Bertaud",
      role: "Co-Fondateur",
      phone: "+33 6 86 61 63 11",
      email: "swann@triaina.fr",
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 flex flex-col justify-center">
      
      <SEO 
        title="Contact Agence SEO Paris" 
        description="Contactez l'agence Triaina pour vos besoins en SEO, GSO et stratégie Média. Bureaux situés au 50 Quai Louis Blériot, 75016 Paris."
      />

      {/* Header */}
      <div className="mb-24 border-b border-slate-900/10 pb-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            CONTACT
        </h2>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Direction & Bureau Parisien
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Founders Column */}
        <div className="lg:col-span-7 space-y-16">
            {FOUNDERS.map((founder, index) => (
                <div 
                    key={index} 
                    className="group animate-fade-in-up" 
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className="flex items-baseline gap-4 mb-4">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {founder.name}
                        </h3>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
                            {founder.role}
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                        <a 
                            href={`tel:${founder.phone.replace(/\s/g, '')}`} 
                            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors py-2 border-b border-transparent hover:border-slate-900 w-fit"
                        >
                            <Phone size={16} className="text-blue-600" />
                            <span className="font-mono text-sm tracking-wide">{founder.phone}</span>
                        </a>

                        <a 
                            href={`mailto:${founder.email}`} 
                            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors py-2 border-b border-transparent hover:border-slate-900 w-fit"
                        >
                            <Mail size={16} className="text-blue-600" />
                            <span className="font-mono text-sm tracking-wide">{founder.email}</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>

        {/* HQ / Office Column */}
        <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="bg-slate-100 p-8 md:p-12 rounded-lg border border-slate-200 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-6 text-blue-600">
                        <MapPin size={24} />
                        <span className="font-display font-bold text-lg">Siège Social</span>
                    </div>
                    
                    <address className="not-italic text-slate-600 font-sans text-lg leading-relaxed mb-8">
                        50 Quai Louis Blériot<br/>
                        75016 Paris<br/>
                        France
                    </address>

                    <div className="w-12 h-1 bg-blue-600 mb-8"></div>

                    {/* Map Integration */}
                    <div className="w-full h-48 bg-slate-200 rounded-lg overflow-hidden border border-slate-300 mb-8 relative grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0} 
                            src="https://maps.google.com/maps?q=50+Quai+Louis+Blériot+75016+Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Triaina Headquarters"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex justify-between items-center">
                    <span className="text-xs font-mono uppercase text-slate-400">Timezone: CET (Paris)</span>
                    <a 
                        href="https://maps.google.com/?q=50+Quai+Louis+Blériot+75016+Paris" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors"
                    >
                        Itinéraire <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
