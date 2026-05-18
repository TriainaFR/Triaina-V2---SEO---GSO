
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import ParticleBackground from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Home } from './views/Home';
import { References } from './views/References';
import { FAQ } from './views/FAQ';
import { Contact } from './views/Contact';
import { Blog } from './views/Blog';
import { Team } from './views/Team';
import { Careers } from './views/Careers'; // Import Careers
import { Expertise } from './views/Expertise';
import { ExpertiseMedia } from './views/ExpertiseMedia';
import { Legal } from './views/Legal';
import { NotFound } from './views/NotFound'; // Import 404
import { SeoParis } from './views/SeoParis'; // Import SeoParis
import { AgenceReferencementIA } from './views/AgenceReferencementIA'; // Import AgenceReferencementIA
import { AgenceReferencementIAParis } from './views/AgenceReferencementIAParis'; // Import AgenceReferencementIAParis
import { ReferencementIAGuide } from './views/blog/ReferencementIAGuide'; // Import ReferencementIAGuide
import { CommentRankerChatGPT } from './views/blog/CommentRankerChatGPT'; // Import CommentRankerChatGPT
import { SeoVsReferencementIA } from './views/blog/SeoVsReferencementIA'; // Import SeoVsReferencementIA
import { Gso2026GuideComplet } from './views/blog/Gso2026GuideComplet'; // Import Gso2026GuideComplet
import { AuditSeoGuide } from './views/blog/AuditSeoGuide'; // Import AuditSeoGuide
import { EeatSeoGuide } from './views/blog/EeatSeoGuide'; // Import EeatSeoGuide
import { BacklinksSeoGuide } from './views/blog/BacklinksSeoGuide'; // Import BacklinksSeoGuide
import { ReferencementIAParisGuide } from './views/blog/ReferencementIAParisGuide'; // Import ReferencementIAParisGuide
import { TendancesSeoGso2026 } from './views/blog/TendancesSeoGso2026'; // Import TendancesSeoGso2026
import { SeoTechniqueVsContenu } from './views/blog/SeoTechniqueVsContenu'; // Import SeoTechniqueVsContenu
import { GsoDefinition2026 } from './views/blog/GsoDefinition2026'; // Import GsoDefinition2026
import { GeoDefinition2026 } from './views/blog/GeoDefinition2026';
import { CitationsIAGeneratives } from './views/blog/CitationsIAGeneratives'; // Import CitationsIAGeneratives
import { AuditSeoParis2026 } from './views/blog/AuditSeoParis2026';
import { SeoGsoGeoAeo2026 } from './views/blog/SeoGsoGeoAeo2026';
import { OptimiserSiteLlm2026Guide } from './views/blog/OptimiserSiteLlm2026Guide';
import { EtreCiteParChatGpt } from './views/blog/EtreCiteParChatGpt';
import { SEO } from './components/SEO';
import { CustomCursor } from './components/CustomCursor';
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

  // Support WebMCP for Agent Discovery
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'modelContext' in navigator) {
      try {
        (navigator as any).modelContext.provideContext({
          tools: [
            {
              name: "getAgencyCapabilities",
              description: "Get the list of SEO, GSO, and Media strategies offered by Triaina.",
              inputSchema: {
                type: "object",
                properties: {}
              },
              execute: async () => {
                return {
                  text: "Triaina specializes in GSO (Generative Search Optimization), Technical SEO, AI Content Automation, and Premium Media Authority building."
                };
              }
            }
          ]
        });
        console.log("WebMCP fully initialized.");
      } catch (e) {
        console.warn("Could not register WebMCP tools", e);
      }
    }
  }, []);

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
      case 'blog':
        return <Blog onNavigate={handleNavigation} />;
      case 'team':
        return <Team onNavigate={handleNavigation} initialTab="history" />;
      case 'recrutement':
        return <Careers onNavigate={handleNavigation} />;
      case 'legal':
        return <Legal />;
      case 'expertise-seo':
      case 'expertise-sea':
      case 'expertise-gso':
      case 'expertise-gsa':
      case 'expertise-content':
        return <Expertise id={currentPage} onNavigate={handleNavigation} />;
      case 'expertise-media':
        return <ExpertiseMedia onNavigate={handleNavigation} />;
      case 'seo-paris':
        return <SeoParis onNavigate={handleNavigation} />;
      case 'agence-referencement-ia':
        return <AgenceReferencementIA onNavigate={handleNavigation} />;
      case 'agence-referencement-ia-paris':
        return <AgenceReferencementIAParis onNavigate={handleNavigation} />;
      case 'referencement-ia-guide':
        return <ReferencementIAGuide />;
      case 'comment-ranker-chatgpt':
        return <CommentRankerChatGPT />;
      case 'seo-vs-referencement-ia':
        return <SeoVsReferencementIA />;
      case 'gso-2026-guide-complet':
        return <Gso2026GuideComplet />;
      case 'audit-seo-guide':
        return <AuditSeoGuide />;
      case 'eeat-seo-guide':
        return <EeatSeoGuide />;
      case 'backlinks-seo-guide':
        return <BacklinksSeoGuide />;
      case 'referencement-ia-paris-guide-local':
        return <ReferencementIAParisGuide />;
      case 'tendances-seo-gso-2026':
        return <TendancesSeoGso2026 />;
      case 'seo-technique-vs-contenu':
        return <SeoTechniqueVsContenu />;
      case 'gso-definition-2026':
        return <GsoDefinition2026 />;
      case 'geo-definition-2026':
        return <GeoDefinition2026 />;
      case 'citations-ia-generatives':
        return <CitationsIAGeneratives />;
      case 'audit-seo-paris-2026':
        return <AuditSeoParis2026 />;
      case 'seo-gso-geo-aeo-differences-2026':
        return <SeoGsoGeoAeo2026 />;
      case 'optimiser-site-llm-2026-guide':
        return <OptimiserSiteLlm2026Guide />;
      case 'etre-cite-par-chatgpt':
        return <EtreCiteParChatGpt />;
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
      <CustomCursor />

      <div className="fixed inset-0 z-0">
         <ParticleBackground />
      </div>

      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {renderPage()}
      </main>

      {/* Footer is visible on all pages except maybe explicit landing pages, keeping it everywhere for SEO */}
      <footer className="relative z-10 border-t border-slate-300 bg-slate-100/95 pt-16 pb-8 mt-auto">
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
