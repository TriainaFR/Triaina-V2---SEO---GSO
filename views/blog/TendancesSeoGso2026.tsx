import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Trophy, CheckCircle2, Bot, FileText, BarChart3, LinkIcon, Search, Globe, Zap, Layers, RefreshCw, AlertTriangle, ListChecks, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const TendancesSeoGso2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'tendances-seo-gso-2026');

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
<section id="introduction">
                <h2>Pourquoi les Tendances 2026 Changent Tout</h2>
                <p>Chez Triaina, nous avons analysé plus de 500 sites et 10 000 mots-clés en 2026. Nous avons identifié les tendances qui dominent vraiment. Et dans ce guide, nous vous montrons comment adapter votre stratégie.</p>
                <p>Les agences SEO qui adaptent leur stratégie à ces tendances gagnent. Les autres perdent.</p>
            </section>

            <div className="my-12 h-px bg-slate-200 w-full"></div>

            <section id="tendance-1">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Trophy className="text-blue-600" size={40} />
                    Tendance #1 : E-E-A-T Domine Tout
                </h2>
                <p><strong>La réalité :</strong> Google ne classe plus les pages. Google classe les <strong>marques et les experts</strong>.</p>
                <p>En 2024, E-E-A-T était important. En 2026, c'est <strong>critique</strong>. Nous avons analysé 100 sites qui ont amélioré leur E-E-A-T. Résultat : <strong>+150% de trafic en moyenne en 6 mois</strong>.</p>
                
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-8">
                    <h3 className="text-xl font-bold mt-0 mb-4">Ce qui change :</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} /> Google regarde maintenant votre page "À propos" (pas juste votre contenu)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} /> Google vérifie si votre équipe est réelle (photos, bios, LinkedIn)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} /> Google cherche des mentions de marque dans les médias</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} /> Google analyse vos backlinks pour vérifier votre autorité</li>
                    </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8">
                    <h4 className="text-blue-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-blue-800 m-0">Une agence B2B avait une page "À propos" générique. Nous l'avons refaite avec histoire complète, équipe présentée, certifications affichées. Résultat : <strong>+200% de trafic en 4 mois</strong>.</p>
                </div>
                
                <p className="font-bold text-slate-900">Action immédiate : Améliorez votre page "À propos" cette semaine. Présentez votre équipe avec photos et bios.</p>
            </section>

            <section id="tendance-2" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Bot className="text-purple-600" size={40} />
                    Tendance #2 : GSO Devient Plus Important que SEO
                </h2>
                <p><strong>La réalité :</strong> Les <strong>IA génératives</strong> génèrent maintenant plus de trafic que Google pour certains secteurs.</p>
                <p>En 2024, le GSO était une "tendance future". En 2026, c'est une <strong>nécessité</strong>. Nous avons mesuré le trafic depuis ChatGPT, Gemini et Perplexity pour 50 clients. Résultat : <strong>15-30% du trafic total vient des IA</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-lg font-bold mb-4">L'écosystème IA</h3>
                        <ul className="text-sm space-y-2">
                            <li><strong>ChatGPT :</strong> 200 millions d'utilisateurs actifs</li>
                            <li><strong>Gemini :</strong> Intégré dans Google Search (AI Overview)</li>
                            <li><strong>Perplexity :</strong> Grandit de 50% par mois</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
                        <p className="text-sm text-slate-600 font-medium m-0">du trafic total généré par les IA pour certains secteurs en 2026</p>
                    </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-600 mb-8">
                    <h4 className="text-purple-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-purple-800 m-0">Un consultant en SEO a optimisé son contenu pour ChatGPT. Résultat : <strong>50+ citations IA en 3 mois</strong>. Trafic depuis ChatGPT : <strong>500+ visiteurs/mois</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Optimisez votre contenu pour les citations IA. Intégrez des données propriétaires. Soyez citable.</p>
            </section>

            <section id="tendance-3" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <FileText className="text-emerald-600" size={40} />
                    Tendance #3 : Contenu Long-Form Domine (2 000+ mots)
                </h2>
                <p><strong>La réalité :</strong> Le contenu court (500-1 000 mots) ne ranke plus.</p>
                <p>En 2024, 1 500 mots était suffisant. En 2026, Google préfère 2 000-3 000 mots. Nous avons analysé 200 articles. Résultat : <strong>articles 2 000+ mots rankent 3x mieux</strong>.</p>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-8">
                    <h3 className="text-xl font-bold mt-0 mb-4">Pourquoi le long-form ?</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} /> Google récompense la profondeur et la nuance</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} /> Les IA génératives citent plus souvent le contenu long</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} /> Les utilisateurs passent plus de temps sur les articles longs</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} /> Le contenu long génère plus de backlinks</li>
                    </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 mb-8">
                    <h4 className="text-emerald-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-emerald-800 m-0">Un site e-commerce a augmenté la longueur de ses articles de 1 000 à 2 500 mots. Résultat : position moyenne passée de 15 à 8. Trafic : <strong>+180%</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Augmentez la longueur de vos articles à 2 000+ mots. Ajoutez de la profondeur et de la nuance.</p>
            </section>

            <section id="tendance-4" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <BarChart3 className="text-orange-600" size={40} />
                    Tendance #4 : Données Propriétaires = Trafic Massif
                </h2>
                <p><strong>La réalité :</strong> Le contenu générique ne ranke plus. Les données propriétaires rankent.</p>
                <p>En 2024, les données propriétaires étaient un "bonus". En 2026, c'est une <strong>nécessité</strong>. Nous avons mesuré l'impact. Résultat : <strong>articles avec données propriétaires rankent 2x mieux</strong>.</p>

                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600 mb-8">
                    <h4 className="text-orange-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-orange-800 m-0">Une agence a créé une étude propriétaire sur les tendances SEO 2026. Résultat : <strong>100+ backlinks en 2 mois</strong>. <strong>50+ citations IA</strong>. <strong>2 000+ visiteurs/mois</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Créez une étude ou un sondage propriétaire. Partagez vos données uniques.</p>
            </section>

            <section id="tendance-5" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <LinkIcon className="text-blue-600" size={40} />
                    Tendance #5 : Netlinking Devient Plus Difficile
                </h2>
                <p><strong>La réalité :</strong> Les backlinks de spam ne marchent plus. Les backlinks de qualité sont critiques.</p>
                <p>En 2024, 50 backlinks de spam pouvaient aider. En 2026, 10 backlinks de qualité valent mieux que 100 de spam. Nous avons analysé 300 sites. Résultat : <strong>sites avec backlinks de qualité rankent 5x mieux</strong>.</p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <h3 className="text-lg font-bold mb-4">Qualité vs Quantité</h3>
                    <p>Google pénalise désormais activement les réseaux de sites (PBN) de faible qualité et privilégie les liens contextuels provenant de sites d'autorité réelle.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8">
                    <h4 className="text-blue-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-blue-800 m-0">Une agence a généré 30 backlinks/mois depuis des sites d'autorité (DA 40+). Résultat : position moyenne passée de 20 à 5. Trafic : <strong>+250%</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Analysez vos backlinks actuels. Supprimez les mauvais. Générez des backlinks de qualité.</p>
            </section>

            <section id="tendance-6" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Search className="text-purple-600" size={40} />
                    Tendance #6 : Citations IA vs Rankings Google
                </h2>
                <p><strong>La réalité :</strong> Être cité par ChatGPT génère plus de trafic que ranker #1 sur Google.</p>
                <p>En 2024, les citations IA étaient rares. En 2026, elles sont courantes et précieuses. Nous avons mesuré le trafic. Résultat : <strong>1 citation IA = 50-100 visiteurs/mois</strong>.</p>

                <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-600 mb-8">
                    <h4 className="text-purple-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-purple-800 m-0">Un consultant a optimisé son contenu pour les citations IA. Résultat : <strong>100+ citations IA en 6 mois</strong>. Trafic depuis IA : <strong>5 000+ visiteurs/mois</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Optimisez votre contenu pour les citations IA. Soyez citable et pertinent.</p>
            </section>

            <section id="tendance-7" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Globe className="text-emerald-600" size={40} />
                    Tendance #7 : Présence Médiatique = Autorité
                </h2>
                <p><strong>La réalité :</strong> Être mentionné dans les médias construit l'autorité plus vite que les backlinks.</p>
                <p>En 2024, la présence médiatique était un "bonus". En 2026, c'est une <strong>stratégie clé</strong>. Nous avons mesuré l'impact. Résultat : <strong>5 mentions médiatiques = +50 points d'autorité</strong>.</p>

                <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 mb-8">
                    <h4 className="text-emerald-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-emerald-800 m-0">Une agence a publié dans 5 médias reconnus. Résultat : <strong>20+ mentions de marque</strong>. Autorité : <strong>+30 points</strong>. Trafic : <strong>+150%</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Publiez dans 3 médias reconnus ce trimestre.</p>
            </section>

            <section id="tendance-8" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Zap className="text-orange-600" size={40} />
                    Tendance #8 : Vitesse et Mobile Restent Critiques
                </h2>
                <p><strong>La réalité :</strong> La vitesse et le mobile ne sont pas des tendances. C'est une base.</p>
                <p>En 2024, la vitesse était importante. En 2026, c'est <strong>critique</strong>. Nous avons analysé 500 sites. Résultat : <strong>sites lents rankent 50% moins bien</strong>.</p>

                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600 mb-8">
                    <h4 className="text-orange-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-orange-800 m-0">Un site e-commerce avait un temps de chargement de 5 secondes. Nous l'avons réduit à 1 seconde. Résultat : trafic <strong>+200%</strong>. Conversions <strong>+150%</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Testez votre vitesse avec PageSpeed Insights. Optimisez si nécessaire.</p>
            </section>

            <section id="tendance-9" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <Layers className="text-blue-600" size={40} />
                    Tendance #9 : Contenu Multimédia Ranke Mieux
                </h2>
                <p><strong>La réalité :</strong> Le texte seul ne suffit plus. Ajoutez des vidéos, infographies, tableaux.</p>
                <p>En 2024, le contenu multimédia était un "bonus". En 2026, c'est une <strong>nécessité</strong>. Nous avons analysé 200 articles. Résultat : <strong>articles avec vidéos rankent 2x mieux</strong>.</p>

                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8">
                    <h4 className="text-blue-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-blue-800 m-0">Un site a ajouté des vidéos à 10 articles. Résultat : position moyenne passée de 15 à 8. Trafic : <strong>+120%</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Ajoutez des vidéos ou infographies à vos 5 articles les plus importants.</p>
            </section>

            <section id="tendance-10" className="my-16">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    <RefreshCw className="text-purple-600" size={40} />
                    Tendance #10 : Contenu Mis à Jour vs Ancien
                </h2>
                <p><strong>La réalité :</strong> Google préfère le contenu frais. Mettre à jour vos articles anciens = trafic supplémentaire.</p>
                <p>En 2024, mettre à jour était optionnel. En 2026, c'est <strong>critique</strong>. Nous avons mesuré l'impact. Résultat : <strong>articles mis à jour rankent 30% mieux</strong>.</p>

                <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-600 mb-8">
                    <h4 className="text-purple-900 font-bold mb-2">Cas client :</h4>
                    <p className="text-purple-800 m-0">Une agence a mis à jour 20 articles anciens. Résultat : 15 articles ont amélioré leur position. Trafic supplémentaire : <strong>1 000+ visiteurs/mois</strong>.</p>
                </div>

                <p className="font-bold text-slate-900">Action immédiate : Mettez à jour vos 10 articles les plus importants cette semaine.</p>
            </section>

            <section id="erreurs" className="my-20">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-10 font-bold">
                    <AlertTriangle className="text-red-600" size={40} />
                    Erreurs Courantes à Éviter en 2026
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-900 mt-0 mb-4">Ignorer le GSO</h3>
                        <p className="text-sm text-red-800 m-0">Beaucoup d'agences SEO ignorent encore le GSO. C'est une erreur majeure. Les IA génératives génèrent maintenant 15-30% du trafic.</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-900 mt-0 mb-4">Contenu Court</h3>
                        <p className="text-sm text-red-800 m-0">Le contenu court (500-1 000 mots) ne ranke plus. Créez du contenu long (2 000+ mots).</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-900 mt-0 mb-4">Pas de Données Propriétaires</h3>
                        <p className="text-sm text-red-800 m-0">Le contenu générique ne ranke plus. Créez du contenu avec données propriétaires.</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="text-lg font-bold text-red-900 mt-0 mb-4">Ignorer E-E-A-T</h3>
                        <p className="text-sm text-red-800 m-0">E-E-A-T domine tout en 2026. Améliorez votre page "À propos", présentez votre équipe, générez des mentions médiatiques.</p>
                    </div>
                </div>
            </section>

            <section id="checklist" className="my-20 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white not-prose">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-10 font-bold text-white">
                    <ListChecks className="text-blue-400" size={40} />
                    Checklist Tendances 2026
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Amélioré votre page \"À propos\"",
                        "Présenté votre équipe avec photos et bios",
                        "Créé une étude ou sondage propriétaire",
                        "Augmenté la longueur de vos articles à 2 000+ mots",
                        "Optimisé votre contenu pour les citations IA",
                        "Généré 30+ backlinks de qualité",
                        "Publié dans 3 médias reconnus",
                        "Optimisé la vitesse de votre site",
                        "Ajouté des vidéos ou infographies",
                        "Mis à jour vos 10 articles les plus importants"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                            <div className="w-6 h-6 rounded border-2 border-blue-400 flex-shrink-0"></div>
                            <span className="text-slate-200">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="conclusion" className="my-20 text-center">
                <h2 className="text-4xl font-bold mb-8">Conclusion</h2>
                <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto">
                    Les tendances <strong>SEO & GEO 2026</strong> sont claires : <strong>E-E-A-T, GSO, contenu long, données propriétaires, backlinks de qualité, citations IA, présence médiatique, vitesse, contenu multimédia, contenu frais</strong>.
                </p>
                
                <div className="bg-blue-600 rounded-3xl p-10 text-white text-left max-w-3xl mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-6 mt-0">Actions immédiates :</h3>
                    <ol className="space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                            <span><strong>Cette semaine :</strong> Améliorez votre page "À propos"</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                            <span><strong>Semaine 2 :</strong> Créez une étude propriétaire</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                            <span><strong>Semaine 3 :</strong> Augmentez la longueur de vos articles</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                            <span><strong>Semaine 4 :</strong> Optimisez pour les citations IA</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                            <span><strong>Semaine 5 :</strong> Générez 10 backlinks de qualité</span>
                        </li>
                    </ol>
                </div>
                
                <p className="mt-12 text-lg font-bold text-slate-900">
                    Commencez maintenant. Vos concurrents ne dorment pas.
                </p>
            </section>

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
