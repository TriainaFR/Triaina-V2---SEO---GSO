const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
const mapping = JSON.parse(fs.readFileSync('blog_mapping.json', 'utf8'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let componentName = file.replace('.tsx', '');
  
  // 1. Post ID
  let postId = null;
  const postMatch = content.match(/BLOG_DATA\.find\(p => p\.id === ['"]([^'"]+)['"]\)/);
  if (postMatch) {
    postId = postMatch[1];
  } else {
    // Try to find URL in schema
    const slugMatch = content.match(/https?:\/\/(?:www\.)?triaina\.fr\/blog\/([^/"']+)/);
    if (slugMatch) {
      const slug = slugMatch[1];
      postId = mapping[slug];
    }
  }
  
  if (!postId) {
    console.log("Skipping (could not determine postId):", file);
    continue;
  }

  // 2. SEO Schema
  let schema = "[]";
  const schemaMatch = content.match(/const (?:seoSchema|articleSchema|breadcrumbSchema|faqSchema).*?(?:=\s*\[[\s\S]*?\]|= \{[\s\S]*?\})/g);
  // Actually, some old files have multiple schemas like breadcrumbSchema, articleSchema, faqSchema
  // Let's try to find how they are passed to <SEO schema={[...]} />
  let finalSchema = "[]";
  const seoTagMatch = content.match(/<SEO[\s\S]*?schema=\{([\[\]\w\s,]+)\}[\s\S]*?\/>/);
  if (seoTagMatch) {
    // it could be schema={seoSchema} or schema={[breadcrumbSchema, articleSchema]}
    let schemaStr = seoTagMatch[1];
    
    // if it's an array of variables, we need to extract their declarations!
    // To be safe, let's just extract all JSON-like objects in the file that look like Schema.org
    const allSchemas = [];
    const schemaObjs = [...content.matchAll(/\{[\s\S]*?"@context":\s*"https?:\/\/schema\.org"[\s\S]*?\}(?=\s*[,\];])/g)];
    // Actually, sometimes the @context is only at the top level
    const topLevelSchemas = [...content.matchAll(/\{\s*"@context":\s*"https?:\/\/schema\.org"[\s\S]*?\n\s*\}/g)];
    
    if (topLevelSchemas.length > 0) {
      finalSchema = "[\n" + topLevelSchemas.map(m => m[0]).join(",\n") + "\n]";
    } else {
      console.log("Could not parse top-level schemas for", file);
    }
  }

  // 3. Content
  let articleHtml = "";
  let isHtmlString = false;
  
  const htmlBodyMatch = content.match(/const htmlBody = `([\s\S]*?)`;/);
  if (htmlBodyMatch) {
    articleHtml = htmlBodyMatch[1];
    isHtmlString = true;
  } else {
    const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    if (articleMatch) {
      articleHtml = articleMatch[1];
      articleHtml = articleHtml.replace(/\{\/\* Author Block \*\/\}(.|\n)*$/i, '');
      articleHtml = articleHtml.replace(/<div[^>]*>[\s\S]*?À propos de l'auteur[\s\S]*?<\/div>/ig, '');
      articleHtml = articleHtml.replace(/<div[^>]*>[\s\S]*?À propos de l'auteure[\s\S]*?<\/div>/ig, '');
      articleHtml = articleHtml.replace(/<aside[\s\S]*?<\/aside>/gi, '');
      articleHtml = articleHtml.replace(/\{\/\* Share \/ Footer \*\/\}(.|\n)*$/i, '');
      
      // Some files have a <header> inside the article we should also remove if it contains the title/date
      // Let's strip <section id="introduction"> if it's just the intro? No, keep it.
      // Wait, in old files, the header was BEFORE the <article>. So the <article> ONLY contains content.
    } else {
       console.log("No article content found for", file);
       continue;
    }
  }

  articleHtml = articleHtml.replace(/violet/g, 'blue');
  
  // Also replace Camille's schema everywhere
  finalSchema = finalSchema.replace(/"author":\s*\{[^}]+\}/g, (match) => {
    if (match.includes('"@type"')) {
      return `"author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      }`;
    }
    return match;
  });

  const reactContent = isHtmlString 
    ? `<div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(articleHtml)} }} />`
    : articleHtml;

  const newLayout = `import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const ${componentName}: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === '${postId}');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = ${finalSchema};

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
            ${reactContent}

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

  fs.writeFileSync(path.join(dir, file), newLayout);
}

console.log("All layouts updated using V3 script.");
