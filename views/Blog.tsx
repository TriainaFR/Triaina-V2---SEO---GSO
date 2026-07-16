
import React, { useState, useMemo } from 'react';
import { BLOG_DATA, ROUTES } from '../constants';
import { Page } from '../types';
import { ArrowUpRight, Calendar, BookOpen, Search, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';

interface BlogProps {
  onNavigate?: (page: Page) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('TOUS');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.triaina.fr/blog" }
    ]
  };

  const handleArticleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (onNavigate) {
      const pageId = ROUTES[url];
      if (pageId) {
        onNavigate(pageId);
      } else {
        window.location.href = url;
      }
    } else {
      window.location.href = url;
    }
  };

  // Get unique tags from the blog data
  const tags = useMemo(() => {
    const allTags = BLOG_DATA.map(article => article.tag);
    return ['TOUS', ...Array.from(new Set(allTags))];
  }, []);

  // Filter articles based on search and selected tag
  const filteredArticles = useMemo(() => {
    return BLOG_DATA.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'TOUS' || article.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="pt-32 pb-20 min-h-screen mx-auto relative z-10 w-[95%] md:w-[90%] lg:max-w-7xl">
      <SEO 
        title="Blog SEO & GEO | Actualités Triaina" 
        description="Le blog de l'agence Triaina. Découvrez nos derniers articles, guides et analyses sur le référencement naturel (SEO) et l'optimisation pour les IA (GSO)."
        schema={breadcrumbSchema}
        canonicalUrl="https://www.triaina.fr/blog"
      />
      
      {/* Header */}
      <div className="mb-12 border-b border-slate-400 pb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
            LE <span className="text-blue-700">BLOG</span>
        </h1>
        <p className="font-mono text-blue-700 text-xs tracking-widest uppercase">
            // Actualités & Insights SEO/IA
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          <Filter size={16} className="text-slate-400 mr-2 hidden md:block" />
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-300 ${
                selectedTag === tag 
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 lg:w-96">
          <input 
            type="text" 
            placeholder="Rechercher un article..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
          /* Blog Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {[...filteredArticles].reverse().map((article, index) => (
                <a 
                    key={article.id}
                    href={article.url}
                    onClick={(e) => handleArticleClick(e, article.url)}
                    className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                >
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${article.id}/1200/675`;
                            }}
                        />
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        
                        {/* Tag */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-blue-700 uppercase tracking-widest border border-blue-100 rounded-sm shadow-sm">
                            {article.tag}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <span className="font-display font-bold text-slate-700">{article.source}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                                <Calendar size={12} />
                                {article.date}
                            </div>
                        </div>

                        <h3 className="text-xl font-display font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                            {article.title}
                        </h3>
                        
                        <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                            {article.excerpt}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider group-hover:gap-4 transition-all">
                            Lire l'article <ArrowUpRight size={14} />
                        </div>
                    </div>
                </a>
            ))}
          </div>
      ) : (
          /* Empty State / No Results */
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up bg-slate-50/50 rounded-2xl border border-slate-200 border-dashed">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-lg shadow-blue-500/5">
                <Search size={32} className="text-slate-400" />
             </div>
             <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Aucun article trouvé</h3>
             <p className="font-mono text-sm text-slate-500 text-center max-w-md">
                 Aucun article ne correspond à vos critères de recherche. Essayez de modifier vos filtres ou vos mots-clés.
             </p>
             <button 
                onClick={() => { setSearchTerm(''); setSelectedTag('TOUS'); }}
                className="mt-8 px-6 py-3 bg-blue-700 text-white text-sm font-mono tracking-wider uppercase rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-blue-700/20"
             >
                Réinitialiser les filtres
             </button>
          </div>
      )}
    </div>
  );
};
