import React, { useState, useEffect } from 'react';
import { Page } from './types';
import ParticleBackground from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Home } from './views/Home';
import { References } from './views/References';
import { FAQ } from './views/FAQ';
import { Contact } from './views/Contact';
import { Press } from './views/Press';
import { Team } from './views/Team';
import { Expertise } from './views/Expertise';
import { SEO } from './components/SEO';
import { NAV_LINKS, SOCIAL_LINKS } from './constants';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // SEO Routing Logic: Sync URL Hash with Current Page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages: Page[] = [
          'home', 'team', 'references', 'press', 'contact', 'faq',
          'expertise-seo', 'expertise-sea', 'expertise-gso', 'expertise-gsa', 'expertise-media', 'expertise-content'
      ];
      
      if (validPages.includes(hash as Page)) {
        setCurrentPage(hash as Page);
      } else {
        if (hash === '') setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'references':
        return <References />;
      case 'press':
        return <Press />;
      case 'team':
        return <Team onNavigate={handleNavigation} />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'expertise-seo':
      case 'expertise-sea':
      case 'expertise-gso':
      case 'expertise-gsa':
      case 'expertise-media':
      case 'expertise-content':
        return <Expertise id={currentPage} onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  // Ultra-Rich Schema for GSO & Local SEO
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": "https://www.triaina.fr/#organization",
        "name": "Triaina - Agence SEO & GSO Paris",
        "alternateName": ["Triaina", "Triaina Agency", "Agence GSO Paris", "Agence Référencement IA"],
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.png",
        "image": "https://www.triaina.fr/logo.png",
        "description": "Agence marketing française experte en référencement SEO Google, optimisation pour les IA (GSO) et autorité Média.",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "50 quai Louis Bleriot",
          "addressLocality": "Paris",
          "postalCode": "75016",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.8464,
          "longitude": 2.2758
        },
        "areaServed": {
            "@type": "Country",
            "name": "France"
        },
        "telephone": "+33614916295",
        "email": "lucas@triaina.fr",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.linkedin.com/company/triaina"
        ],
        "knowsAbout": [
          "SEO",
          "GSO",
          "Generative Search Optimization",
          "Référencement IA",
          "Stratégie Média",
          "Agence SEO Paris",
          "Search Engine Optimization (SEO)",
          "Large Language Models (LLM)",
          "Agence GSO",
          "Google SGE Optimization",
          "Knowledge Graph Construction",
          "Entity SEO",
          "Optimisation ChatGPT",
          "Digital PR"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.triaina.fr/#website",
        "url": "https://www.triaina.fr/",
        "name": "Triaina | Agence SEO & GSO Paris",
        "description": "Domination IA et Visibilité Totale",
        "publisher": {
          "@id": "https://www.triaina.fr/#organization"
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.triaina.fr/"
          },
           {
            "@type": "ListItem",
            "position": 2,
            "name": "Offres Référencement IA",
            "item": "https://www.triaina.fr/#team"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden font-sans">
      <SEO schema={globalSchema} />

      <div className="fixed inset-0 z-0">
         <ParticleBackground />
      </div>

      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {renderPage()}
      </main>

      <footer className="relative z-10 border-t border-slate-300 bg-slate-100/90 backdrop-blur-md pt-16 pb-8 mt-auto">
         <div className="max-w-7xl mx-auto px-4">
            
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="mb-6 cursor-pointer" onClick={() => handleNavigation('home')}>
                        <Logo />
                    </div>
                    <p className="text-slate-500 text-sm font-mono leading-relaxed max-w-sm mb-6">
                        Agence spécialisée en architecture SEO, domination GSO et autorité Média. 
                        Nous construisons les protocoles de visibilité pour l'ère de l'Intelligence Artificielle.
                    </p>
                    {/* Social Links for SEO Score */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((social) => (
                            <a 
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-blue-600 transition-colors"
                                aria-label={`Suivre Triaina sur ${social.name}`}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-span-1">
                    <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Navigation</h4>
                    <ul className="space-y-4">
                        {NAV_LINKS.slice(0, 2).map(link => (
                            <li key={link.id}>
                                <button 
                                    onClick={() => handleNavigation(link.id as Page)}
                                    className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                        {/* Ajout manuel pour Expertise dans le footer */}
                         <li>
                            <button 
                                onClick={() => handleNavigation('expertise-seo')}
                                className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors"
                            >
                                EXPERTISE
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Ressources</h4>
                    <ul className="space-y-4">
                        {NAV_LINKS.slice(3).map(link => (
                            <li key={link.id}>
                                <button 
                                    onClick={() => handleNavigation(link.id as Page)}
                                    className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <p className="text-slate-500 font-mono text-[10px]">© {new Date().getFullYear()} Triaina Global Systems. All rights reserved.</p>
                </div>
                
                <div className="flex gap-6">
                    <a href="#" className="text-[10px] text-slate-400 hover:text-blue-600 uppercase tracking-wider font-mono">Mentions Légales</a>
                    <a href="#" className="text-[10px] text-slate-400 hover:text-blue-600 uppercase tracking-wider font-mono">Plan du Site</a>
                    <a href="#" className="text-[10px] text-slate-400 hover:text-blue-600 uppercase tracking-wider font-mono">Politique de Confidentialité</a>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;