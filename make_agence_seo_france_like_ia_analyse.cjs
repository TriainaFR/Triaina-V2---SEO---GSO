const fs = require('fs');

const templatePath = 'views/blog/IAAnalyseDonnees2026.tsx';
const targetPath = 'views/blog/AgenceSeoFrance2026.tsx';

let template = fs.readFileSync(templatePath, 'utf8');
let target = fs.readFileSync(targetPath, 'utf8');

// Extract the html content from target
const htmlMatch = target.match(/__html: `([\s\S]*?)` \}\}/);
if (!htmlMatch) {
    console.error("HTML not found");
    process.exit(1);
}
let htmlContent = htmlMatch[1];
htmlContent = htmlContent.replace(/`/g, "\\`").replace(/\$/g, "\\$");

// We need to write a new component for AgenceSeoFrance2026
// We will manually build it based on the template.

const newTarget = `import React, { useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { ArrowLeft, ArrowRight, Share2, CheckCircle2, Search, BarChart3 } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';

interface AgenceSeoFrance2026Props {
  onNavigate?: (p: any) => void;
}

export const AgenceSeoFrance2026: React.FC<AgenceSeoFrance2026Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = BLOG_DATA.find(p => p.id === 'agence-seo-france-2026');

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://triaina.fr/blog/agence-seo-france#article",
        "headline": post?.title || '',
        "description": post?.excerpt || '',
        "datePublished": "2026-07-23",
        "dateModified": "2026-07-23",
        "author": {
          "@type": "Person",
          "name": "Camille Rousseau",
          "jobTitle": "Consultante Senior GEO/SEO",
          "url": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Triaina",
          "url": "https://triaina.fr"
        },
        "about": "Agence SEO France",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://triaina.fr/blog/agence-seo-france"
        },
        "image": post?.image || ''
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://triaina.fr/blog/agence-seo-france#breadcrumb",
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
            "name": post?.title || '',
            "item": "https://triaina.fr/blog/agence-seo-france"
          }
        ]
      }
    ]
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post?.title,
        url: \`https://triaina.fr\${post?.url}\`
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const nav = onNavigate || (() => { window.location.href = '/blog'; });

  return (
    <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen">
      <SEO 
        title={\`\${post?.title} - Triaina\`}
        description={post?.excerpt}
        schema={articleSchema}
        canonicalUrl={\`https://triaina.fr\${post?.url}\`}
      />

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <button 
          onClick={() => nav('blog')}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={16} />
          Retour aux articles
        </button>

        {/* Header */}
        <header className="mb-12 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wider uppercase mb-6 border border-blue-100 relative z-10">
            <Search size={16} />
            {post?.tag || 'AGENCES'}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-8 relative z-10">
            {post?.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 border-b border-slate-200 pb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                CR
              </div>
              <div>
                <div className="font-bold text-slate-900">Camille Rousseau</div>
                <div>Consultante Senior GEO/SEO chez Triaina</div>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <span>{post?.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>12 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {post?.image && (
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-2xl" dangerouslySetInnerHTML={{ __html: \`${htmlContent}\` }} />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="font-mono text-sm text-slate-500 uppercase tracking-wider">
            Partager cet article
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => window.open(\`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(\`https://www.triaina.fr\${post?.url}\`)}\`, '_blank')}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </button>
            <button 
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(targetPath, newTarget);
