import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const SeoLocalParis2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'seo-local-paris-2026');

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
        { "@type": "ListItem", "position": 3, "name": post?.title || '', "item": `https://www.triaina.fr${post?.url || ''}` }
      ]
    }
  ];



  if (!post) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10">
      <SEO 
        title={`${post.title} - Triaina`}
        description={post.excerpt}
        canonicalUrl={`https://triaina.fr${post.url}`}
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

        <article className="max-w-4xl mx-auto relative">
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
<div dangerouslySetInnerHTML={{ __html: `
<blockquote><p><strong>TL;DR</strong></p><ul><li>Le <strong>SEO local à Paris</strong> en 2026 est devenu ultra-compétitif. Il ne suffit plus d'avoir une fiche Google Business Profile optimisée.</li><li>L'intégration du <strong>GSO (Generative Search Optimization)</strong> est indispensable : les IA comme ChatGPT ou Google AI Overviews tiennent désormais compte de la réputation locale et des avis vérifiés pour recommander des services parisiens.</li><li>Le maillage interne local, les citations (NAP), et l'autorité hyper-locale seront les 3 piliers différenciateurs majeurs.</li></ul></blockquote>

<h2>Pourquoi le SEO Local à Paris est si spécifique en 2026</h2>
<p>Paris n'est pas seulement une ville tentaculaire, c'est une mosaïque d'intentions de recherche par arrondissement, voire par quartier (ex: "agence seo paris 16", "consultant seo marais"). En 2026, Google comprend le contexte hyper-local de l'utilisateur avec une précision redoutable.</p>
<p>Dans ce guide, nous allons voir comment développer une autorité incontestable sur votre zone de chalandise parisienne, et comment ces signaux locaux profitent également à votre stratégie <strong>GSO globale</strong>.</p>

<h3>1. L'évolution de Google Business Profile (GBP)</h3>
<p>La fiche GBP est le visage de votre entreprise dans la recherche locale Google. En 2026, l'algorithme privilégie les profils avec :</p>
<ul>
    <li>Une récurrence hebdomadaire de vrais avis clients géolocalisés (si un client laisse un avis depuis Paris, son poids est doublé par rapport à un avis de province).</li>
    <li>Des Google Posts actifs avec des mots-clés transactionnels locaux.</li>
    <li>L'intégration de vos services ou produits détaillés directement dans la fiche, connectée à l'inventaire ou au catalogue.</li>
</ul>

<h3>2. Architecture locale du site internet</h3>
<p>Pour soutenir la page d'accueil ou votre page de service (par exemple <a href="/agence-seo-paris">notre page Agence SEO Paris</a>), vous avez besoin d'une architecture dite "en silos locaux".</p>
<p>Cela passe par la création de pages par quartier ou par spécificité parisienne, qui maillent ensuite vers la page pilier "Paris".</p>

<h3>3. IA et Recherche Locale : L'impact du GSO</h3>
<p>Lorsqu'un prospect demande à ChatGPT <em>"Recommande-moi une agence SEO à Paris 16ème"</em>, l'IA ne cherche pas votre page web : elle cherche un consensus d'informations (votre nom + adresse + téléphone + mentions de votre spécialité) dispersé sur des sites d'autorité.</p>
<p>Il est donc vital de :</p>
<ol>
    <li>Être listé dans les annuaires qualitatifs parisiens.</li>
    <li>Obtenir des backlinks depuis des entreprises partenaires locales.</li>
    <li>Avoir un balisage Schema.org <code>LocalBusiness</code> parfait (avec les coordonnées GPS exactes).</li>
</ol>

<h2>Stratégie d'action pour votre entreprise</h2>
<p>Si vous ciblez le marché parisien, voici le plan d'action immédiat :</p>
<ul>
    <li><strong>Semaine 1 :</strong> Audit de vos fiches existantes (Nettoyage des doublons, harmonisation du NAP : Nom, Adresse, Téléphone).</li>
    <li><strong>Semaine 2 :</strong> Restructuration de vos pages de services (Intégrer les mentions géographiques de manière naturelle et non sur-optimisée).</li>
    <li><strong>Semaine 3-4 :</strong> Campagne d'acquisition de liens locaux (partenaires de confiance, presse locale, blogs parisiens).</li>
    <li><strong>Mois 2+ :</strong> Collecte de reviews denses et constantes.</li>
</ul>
<p>En couplant ces efforts locaux avec une approche technique solide, vous dominerez non seulement les packs locaux de Google, mais vous deviendrez également l'entité de référence citée par les IA.</p>
  ` }} />

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
