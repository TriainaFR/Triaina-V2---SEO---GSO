const fs = require('fs');

const source = fs.readFileSync('views/blog/TopAgencesSeoGeoParis2026.tsx', 'utf8');
let target = fs.readFileSync('views/blog/AgenceSeoFrance2026.tsx', 'utf8');

// Replace the layout inside target
// We need to keep the content of target, but wrap it in the structure of source.

// The content of AgenceSeoFrance2026 is inside <div className="prose prose-lg... dangerouslySetInnerHTML={{ __html: ` ... ` }} />
// We can just extract the __html string from target and inject it into a modified version of source.

const htmlMatch = target.match(/__html: `([\s\S]*?)` \}\}/);
if (!htmlMatch) {
    console.error("HTML not found");
    process.exit(1);
}
const htmlContent = htmlMatch[1];

// Also get the id, title, etc. Wait, we can just take AgenceSeoFrance2026's imports, post fetching, schema, and use source's render logic.

let newTarget = `
import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const AgenceSeoFrance2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'agence-seo-france-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post?.title || '',
      "description": post?.excerpt || '',
      "image": post?.image || '',
      "author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.triaina.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": post?.title || '', "item": \`https://www.triaina.fr\${post?.url || ''}\` }
      ]
    }
  ];

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
      <SEO 
        title={\`\${post.title} - Triaina\`}
        description={post.excerpt}
        canonicalUrl={\`https://triaina.fr\${post.url}\`}
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
          </header>

          <div className="prose prose-lg max-w-none text-slate-600 prose-headings:font-display prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-lg prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-4 prose-th:border prose-th:border-slate-200 prose-td:p-4 prose-td:border prose-td:border-slate-200" dangerouslySetInnerHTML={{ __html: \`${htmlContent.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} />

          {/* Author Block */}
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 max-w-4xl mx-auto not-prose">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">À propos de l'auteure</h3>
              <div className="font-bold text-slate-900 text-xl mb-1">Camille Rousseau</div>
              <div className="text-sm text-blue-600 font-mono mb-4">Consultante Senior GEO/SEO chez Triaina</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Experte en stratégies d'acquisition hybrides. Camille accompagne les marques dans l'optimisation de leur visibilité sur les moteurs de recherche traditionnels (SEO) et les interfaces d'IA génératives (GSO).
              </p>
              <a href="https://www.linkedin.com/in/camille-rousseau-a44488413/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">
                  Voir son profil LinkedIn
              </a>
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
`
fs.writeFileSync('views/blog/AgenceSeoFrance2026.tsx', newTarget);

// Fix constants.ts
let consts = fs.readFileSync('constants.ts', 'utf8');

const postMatch = consts.match(/\{\s*id:\s*'agence-seo-france-2026'[\s\S]*?\},/);
if (postMatch) {
  const post = postMatch[0];
  consts = consts.replace(post, '');
  consts = consts.replace(/];[\s\n]*$/, '');
  consts = consts + post + '\n];';
  fs.writeFileSync('constants.ts', consts);
}

