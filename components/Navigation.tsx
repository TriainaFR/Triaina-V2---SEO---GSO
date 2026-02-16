
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { NAV_LINKS, PAGE_TO_URL } from '../constants';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
        setDropdownOpen(null);
    }, 150);
  };

  // Mobile Accordion Toggle
  const toggleDropdownMobile = (id: string) => {
      setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      
      {/* ICE BAR CONTAINER */}
      <div className={`
        relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        flex items-center justify-between
        ${scrolled 
            ? 'w-[90%] md:w-[80%] lg:max-w-6xl px-6 py-2' 
            : 'w-[95%] md:w-[90%] lg:max-w-7xl px-8 py-4'
        }
        rounded-full
        /* Glass / Ice Effect */
        bg-gradient-to-b from-white/80 to-white/40
        backdrop-blur-2xl
        border border-white/60
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        ring-1 ring-white/40 inset
        ${isMobileOpen ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'opacity-100'}
      `}>
            
            <a 
                href="/" 
                className="cursor-pointer block" 
                onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                aria-label="Accueil Triaina"
            >
              <Logo />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.id || (link.children?.some(child => child.id === currentPage));
                const isContact = link.id === 'contact';
                const hasChildren = link.children && link.children.length > 0;

                if (isContact) {
                     return (
                        <a
                          key={link.id}
                          href={PAGE_TO_URL[link.id]}
                          onClick={(e) => { e.preventDefault(); onNavigate(link.id as Page); }}
                          className="ml-6 px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                          aria-label={link.label}
                        >
                          {link.label}
                        </a>
                    );
                }

                // If it has children (Expertise), keep it as a wrapper/trigger (or link to first child if desired, but here trigger)
                // If it's a simple link, make it an <a> tag
                if (hasChildren) {
                    return (
                        <div 
                            key={link.id} 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(link.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                aria-expanded={dropdownOpen === link.id}
                                aria-haspopup="true"
                                className={`
                                    relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full flex items-center gap-1 cursor-default
                                    ${isActive ? 'text-blue-600 bg-white/80 shadow-sm' : 'text-slate-600 hover:text-slate-900'}
                                `}
                            >
                                {link.label}
                                <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen === link.id ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`
                                absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 py-2
                                bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-xl
                                transition-all duration-300 origin-top
                                ${dropdownOpen === link.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                            `}>
                                {link.children?.map(child => (
                                    <a
                                        key={child.id}
                                        href={PAGE_TO_URL[child.id]}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigate(child.id as Page);
                                            setDropdownOpen(null);
                                        }}
                                        className={`
                                            block w-full text-left px-4 py-3 text-xs font-bold tracking-wider uppercase hover:bg-blue-50 hover:text-blue-600 transition-colors
                                            ${currentPage === child.id ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600'}
                                        `}
                                    >
                                        {child.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                }

                // Simple Links (Home, Team, References...)
                return (
                    <div key={link.id} className="relative">
                        <a
                            href={PAGE_TO_URL[link.id]}
                            onClick={(e) => { e.preventDefault(); onNavigate(link.id as Page); }}
                            className={`
                                relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full flex items-center gap-1 cursor-pointer hover:bg-white/50
                                ${isActive ? 'text-blue-600 bg-white/80 shadow-sm' : 'text-slate-600 hover:text-slate-900'}
                            `}
                        >
                            {link.label}
                        </a>
                    </div>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)} 
                className="p-2 text-slate-900 hover:bg-white/50 rounded-full transition-colors"
                aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-50 pt-20 px-6 lg:hidden animate-fade-in-up overflow-y-auto">
            
            {/* BOUTON FERMER EXPLICITE DANS LE MENU */}
            <button 
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-8 right-8 p-3 bg-white border border-slate-200 rounded-full text-slate-900 hover:bg-slate-100 transition-colors shadow-sm z-50"
                aria-label="Fermer le menu"
            >
                <X size={24} />
            </button>

            <div className="flex flex-col space-y-6 pb-20 mt-12">
            {NAV_LINKS.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const isOpen = dropdownOpen === link.id;

                if (hasChildren) {
                    return (
                        <div key={link.id} className="border-b border-slate-100 pb-4 last:border-0">
                            <button
                                onClick={() => toggleDropdownMobile(link.id)}
                                aria-expanded={isOpen}
                                className={`w-full flex justify-between items-center text-2xl font-display font-bold text-left ${
                                    currentPage === link.id ? 'text-blue-600' : 'text-slate-900'
                                }`}
                            >
                                {link.label}
                                <span className="text-slate-400">
                                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </span>
                            </button>

                            {/* Mobile Submenu */}
                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col space-y-3 pl-4 border-l-2 border-blue-100">
                                    {link.children?.map(child => (
                                        <a
                                            key={child.id}
                                            href={PAGE_TO_URL[child.id]}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onNavigate(child.id as Page);
                                                setIsMobileOpen(false);
                                            }}
                                            className={`text-lg font-mono text-left uppercase tracking-wide block ${
                                                currentPage === child.id ? 'text-blue-600 font-bold' : 'text-slate-500'
                                            }`}
                                        >
                                            {child.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }

                return (
                    <div key={link.id} className="border-b border-slate-100 pb-4 last:border-0">
                        <a
                            href={PAGE_TO_URL[link.id]}
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate(link.id as Page);
                                setIsMobileOpen(false);
                            }}
                            className={`w-full block text-2xl font-display font-bold text-left ${
                                currentPage === link.id ? 'text-blue-600' : 'text-slate-900'
                            }`}
                        >
                            {link.label}
                        </a>
                    </div>
                );
            })}
            </div>
        </div>
      )}
    </nav>
  );
};
