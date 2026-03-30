
import React, { useRef, useState } from 'react';
import { Mail, ArrowUpRight, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // CONFIGURATION EMAILJS
    const SERVICE_ID = 'service_dme37kj'; 
    const TEMPLATE_ID = 'template_y87pze2'; 
    const PUBLIC_KEY = 'E7cFvIw50eYZ8er2v'; 

    if (form.current) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
            setStatus('success');
            form.current?.reset();
        }, (error) => {
            console.error('Erreur EmailJS:', error);
            setStatus('error');
        });
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.triaina.fr/contact" }
    ]
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto relative z-10 flex flex-col justify-center">
      
      <SEO 
        title="Contact Agence SEO Paris" 
        description="Contactez l'agence Triaina pour vos besoins en SEO, GSO et stratégie Média. Bureaux situés au 50 Quai Louis Blériot, 75016 Paris."
        schema={breadcrumbSchema}
        canonicalUrl="https://www.triaina.fr/contact"
      />

      {/* Header */}
      <div className="mb-12 border-b border-slate-900/10 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            CONTACT
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Bureau Parisien
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Formulaire de Contact (Colonne Gauche) */}
        <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Mail className="text-blue-600" />
                    Envoyez-nous un message
                </h3>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {/* Nom */}
                    <div className="space-y-2">
                        <label htmlFor="user_name" className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                            Nom & Entreprise
                        </label>
                        <input 
                            type="text" 
                            name="user_name" 
                            id="user_name"
                            required 
                            placeholder="Jean Dupont - Société X"
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400" 
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                                Email Professionnel
                            </label>
                            <input 
                                type="email" 
                                name="user_email"
                                id="user_email" 
                                required 
                                placeholder="contact@entreprise.com"
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400" 
                            />
                        </div>

                        {/* Téléphone (Nouveau champ) */}
                        <div className="space-y-2">
                            <label htmlFor="user_phone" className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                                Téléphone
                            </label>
                            <input 
                                type="tel" 
                                name="user_phone" 
                                id="user_phone"
                                placeholder="06 12 34 56 78"
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400" 
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider">
                            Votre Défi / Projet
                        </label>
                        <textarea 
                            name="message" 
                            id="message"
                            required 
                            rows={4}
                            placeholder="Décrivez votre projet..."
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="w-full py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 className="animate-spin" /> Envoi...
                            </>
                        ) : (
                            <>
                                Envoyer la demande <Send size={18} />
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center gap-2 animate-fade-in-up">
                            <CheckCircle2 size={20} />
                            <span>Message envoyé avec succès ! Nous vous répondrons sous 24h.</span>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center gap-2 animate-fade-in-up">
                            <AlertCircle size={20} />
                            <span>Une erreur est survenue. Vérifiez votre connexion ou appelez-nous.</span>
                        </div>
                    )}
                </form>
            </div>
        </div>

        {/* Informations (Colonne Droite) */}
        <div className="lg:col-span-5 space-y-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            
            {/* Address */}
            <div className="bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                        <MapPin className="text-blue-400" />
                        Bureaux
                    </h3>
                    <address className="not-italic text-slate-300 leading-relaxed font-light">
                        <strong>Triaina</strong><br/>
                        50 Quai Louis Blériot<br/>
                        75016 Paris<br/>
                        France
                    </address>
                    
                    <a 
                        href="https://maps.google.com/?q=50+Quai+Louis+Blériot+75016+Paris" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
                    >
                        Voir sur la carte <ArrowUpRight size={14} />
                    </a>
                </div>
                
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

        </div>

      </div>
    </div>
  );
};
