
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus, MapPin, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Structured Data using @graph to combine Breadcrumb and FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
                { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.triaina.fr/faq" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": FAQ_DATA.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-4xl mx-auto relative z-10">
      
      <SEO schema={faqSchema} />

      <div className="mb-20 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4">
            FAQ <span className="text-blue-700">SYSTÈME</span>
        </h1>
        <div className="flex justify-center items-center gap-4 text-xs font-mono text-slate-500 uppercase">
            <span>// Base de Connaissance</span>
            <span className="w-px h-4 bg-slate-400"></span>
            <span>// Résolution</span>
        </div>
      </div>

      <div className="space-y-4 mb-20">
        {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            return (
                <div 
                    key={item.id} 
                    className={`border transition-all duration-300 animate-fade-in-up rounded-lg overflow-hidden ${isOpen ? 'border-blue-400 shadow-lg shadow-blue-500/10' : 'border-slate-300 bg-slate-100 hover:border-blue-300 hover:shadow-sm'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <button
                        onClick={() => toggle(item.id)}
                        className={`w-full p-6 text-left flex items-center justify-between focus:outline-none transition-colors ${isOpen ? 'bg-white' : 'bg-transparent'}`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`font-mono text-xs ${isOpen ? 'text-blue-700' : 'text-slate-500'}`}>0{index + 1}</span>
                            <span className={`text-lg font-display font-bold uppercase transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                                {item.question}
                            </span>
                        </div>
                        <div className={`text-blue-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                    </button>
                    
                    <div 
                        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden bg-white ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 pl-16 pr-12 text-slate-600 font-mono text-sm leading-relaxed border-t border-blue-100 mt-2 pt-4 bg-gradient-to-b from-blue-50/20 to-white whitespace-pre-line">
                            <span className="text-blue-600 mr-2">{`>`}</span>
                            {item.answer}
                        </div>
                    </div>
                </div>
            );
        })}
      </div>

      {/* Practical Info Section */}
      <div className="border-t border-slate-300 pt-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <h3 className="font-display font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm text-center">Informations Pratiques</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="bg-white/80 p-8 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                      <MapPin size={24} />
                  </div>
                  <div>
                      <h4 className="font-display font-bold text-slate-900 mb-2">Siège Social</h4>
                      <address className="not-italic font-mono text-sm text-slate-600 leading-relaxed">
                          50 Quai Louis Blériot<br/>
                          75016 Paris<br/>
                          France
                      </address>
                  </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white/80 p-8 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                      <Clock size={24} />
                  </div>
                  <div>
                      <h4 className="font-display font-bold text-slate-900 mb-2">Horaires d'Ouverture</h4>
                      <div className="font-mono text-sm text-slate-600 leading-relaxed">
                          <p>Lundi - Vendredi</p>
                          <p className="text-blue-700 font-bold mt-1">08:00 - 19:00</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};
