const fs = require('fs');
let content = fs.readFileSync('views/blog/LlmsTxt2026.tsx', 'utf8');

const startIndex = content.indexOf("<p><strong>Aujourd'hui");
const endIndex = content.indexOf("</div>\n\n            <aside");

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find content", startIndex, endIndex);
  process.exit(1);
}

let articleHtml = content.substring(startIndex, endIndex).trim();
articleHtml = articleHtml.replace(/violet/g, 'blue'); // Match theme

const newLayout = `import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const LlmsTxt2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'llms-txt-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "llms.txt : faut-il l'implémenter en 2026 ?",
      "description": "Le fichier llms.txt, outil miracle du GEO ou simple gadget ? Syntaxe exacte, méthode d'implémentation en 5 étapes, et les pièges à éviter.",
      "datePublished": "2026-07-17",
      "dateModified": "2026-07-17",
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.triaina.fr/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://triaina.fr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://triaina.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "llms.txt : faut-il l'implémenter en 2026 ?",
          "item": "https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
        }
      ]
    }
  ];

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
      <SEO 
        title="llms.txt : faut-il l'implémenter en 2026 ? - Triaina"
        description="Le fichier llms.txt, outil miracle du GEO ou simple gadget ? Syntaxe exacte, méthode d'implémentation en 5 étapes, et les pièges à éviter."
        canonicalUrl="https://triaina.fr/blog/llms-txt-faut-il-l-implementer-en-2026"
        schema={seoSchema}
      />
      
      <div className="max-w-7xl mx-auto">
        <a 
          href="/blog" 
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/blog');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="inline-flex items-center text-sm font-mono text-slate-500 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </a>

        <article className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-50"></div>
          
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
              <span className="flex items-center">
                <Calendar size={14} className="mr-2 text-blue-500" />
                {post.date}
              </span>
              <span className="text-slate-300">|</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">{post.tag}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </header>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 relative group">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-2xl prose-strong:text-slate-900 prose-li:marker:text-blue-500">
            ${articleHtml}
          </div>
        </article>

        {/* Share / Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-mono text-slate-500">
                Partager cet article
            </div>
            <div className="flex gap-4">
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                </button>
                <button className="p-3 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                    <Share2 size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync('views/blog/LlmsTxt2026.tsx', newLayout);
console.log("LlmsTxt2026.tsx updated.");
