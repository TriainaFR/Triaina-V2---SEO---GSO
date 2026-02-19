
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
import { Legal } from './views/Legal';
import { NotFound } from './views/NotFound'; // Import 404
import { SeoParis } from './views/SeoParis'; // Import SeoParis
import { SEO } from './components/SEO';
import { NAV_LINKS, SOCIAL_LINKS, PAGE_TO_URL, ROUTES } from './constants';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // SEO Routing Logic: Clean URLs (No Hash)
  useEffect(() => {
    const handleLocationChange = () => {
      try {
        const path = window.location.pathname;
        // Handle potential trailing slash or mismatches strictly
        const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
        
        // New Logic: If route not found, go to 404 Page instead of Home
        const page = ROUTES[cleanPath] || '404';
        setCurrentPage(page);
      } catch (e) {
        console.warn('Location access error (sandbox):', e);
        setCurrentPage('home');
      }
    };

    // Initial Load
    handleLocationChange();

    // Listen to Back/Forward buttons
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigation = (page: Page) => {
    const url = PAGE_TO_URL[page];
    if (url) {
      try {
        window.history.pushState({}, '', url);
      } catch (e) {
        // Prevent SecurityError in sandboxed environments (e.g. AI Studio preview)
        console.warn('Navigation state update failed:', e);
      }
      setCurrentPage(page);
      window.scrollTo(0, 0);
    } else if (page === 'home') {
        // Fallback for home explicitly
        try { window.history.pushState({}, '', '/'); } catch(e) {}
        setCurrentPage('home');
    }
  };

  // Ultra-Rich Schema for GSO & Local SEO
  // Note: BreadcrumbList removed to allow specific pages to define their own path context without conflict.
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": "https://www.triaina.fr/#organization",
        "name": "Triaina - Agence SEO & GSO Paris",
        "alternateName": ["Triaina", "Triaina Agency", "Agence GSO Paris", "Agence Référencement IA"],
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.svg",
        "image": "https://www.triaina.fr/logo.svg",
        "description": "Agence marketing française experte en référencement SEO Google, optimisation pour les IA (GSO) et autorité Média.",
        "priceRange": "$$",
        "hasMap": "https://maps.google.com/?q=50+Quai+Louis+Blériot+75016+Paris",
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
          "https://www.linkedin.com/company/triaina",
          "https://www.instagram.com/triaina_agency"
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
      }
    ]
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'references':
        return <References />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'press':
        return <Press />;
      case 'team':
        return <Team onNavigate={handleNavigation} />;
      case 'legal':
        return <Legal />;
      case 'expertise-seo':
      case 'expertise-sea':
      case 'expertise-gso':
      case 'expertise-gsa':
      case 'expertise-media':
      case 'expertise-content':
        return <Expertise id={currentPage} onNavigate={handleNavigation} />;
      case 'seo-paris':
        return <SeoParis onNavigate={handleNavigation} />;
      case '404':
        return <NotFound onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  // Find the Expertise group to expand it in the footer
  const expertiseGroup = NAV_LINKS.find(link => link.id === 'expertise');
  // Find the SEO Landing group
  const seoGroup = NAV_LINKS.find(link => link.id === 'seo-landing');

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

      {/* Footer is visible on all pages except maybe explicit landing pages, keeping it everywhere for SEO */}
      <footer className="relative z-10 border-t border-slate-300 bg-slate-100/90 backdrop-blur-md pt-16 pb-8 mt-auto">
         <div className="max-w-7xl mx-auto px-4">
            
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                
                {/* 1. Brand & Social */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className="mb-6 cursor-pointer" onClick={() => handleNavigation('home')}>
                        <Logo />
                    </div>
                    <p className="text-slate-500 text-xs font-mono leading-relaxed max-w-sm mb-6">
                        Agence spécialisée en architecture SEO, domination GSO et autorité Média. 
                    </p>
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
                                <span className="text-[10px] font-bold uppercase tracking-widest">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Agence Links */}
                <div className="col-span-1">
                    <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Agence</h4>
                    <ul className="space-y-3">
                        {NAV_LINKS.filter(link => link.id !== 'expertise' && link.id !== 'contact' && link.id !== 'seo-landing').map(link => (
                            <li key={link.id}>
                                <a 
                                    href={PAGE_TO_URL[link.id]}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(link.id as Page);
                                    }}
                                    className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors inline-block"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        {/* Static links if needed */}
                         <li>
                            <a 
                                href={PAGE_TO_URL['contact']}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('contact');
                                }}
                                className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors inline-block font-bold"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 3. Expertises & Localisation (Expanded) - CRITICAL FOR SEO LINKING */}
                <div className="col-span-1">
                    <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm text-blue-700">Expertises</h4>
                    <ul className="space-y-3 mb-6">
                        {expertiseGroup?.children?.map(subLink => (
                             <li key={subLink.id}>
                                <a 
                                    href={PAGE_TO_URL[subLink.id]}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(subLink.id as Page);
                                    }}
                                    className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors inline-block"
                                >
                                    {subLink.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* SEO LOCALE / LANDING PAGES */}
                    <h4 className="font-display font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm">Localisation</h4>
                    <ul className="space-y-3">
                        {seoGroup?.children?.map(subLink => (
                             <li key={subLink.id}>
                                <a 
                                    href={PAGE_TO_URL[subLink.id]}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(subLink.id as Page);
                                    }}
                                    className="text-slate-600 hover:text-blue-600 font-mono text-xs uppercase tracking-wider transition-colors inline-block font-bold"
                                >
                                    {subLink.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Contact/Infos */}
                <div className="col-span-1">
                    <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Infos</h4>
                    <address className="not-italic text-slate-600 text-xs font-mono leading-relaxed mb-4">
                        50 Quai Louis Blériot<br/>
                        75016 Paris<br/>
                        France
                    </address>
                    <a href="mailto:lucas@triaina.fr" className="text-slate-600 hover:text-blue-600 text-xs font-mono block mb-2">
                        lucas@triaina.fr
                    </a>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <p className="text-slate-500 font-mono text-[10px]">© {new Date().getFullYear()} Triaina Global Systems.</p>
                </div>
                
                <div className="flex gap-6">
                    <a 
                        href="/mentions-legales"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation('legal');
                        }}
                        className="text-[10px] text-slate-400 hover:text-blue-600 uppercase tracking-wider font-mono cursor-pointer"
                    >
                        Mentions Légales
                    </a>
                    <a 
                        href="/sitemap.xml"
                        target="_blank"
                        className="text-[10px] text-slate-400 hover:text-blue-600 uppercase tracking-wider font-mono cursor-pointer"
                    >
                        Sitemap
                    </a>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
