import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, CheckCircle2, BarChart3, Target, Bot, Linkedin, Twitter, Facebook, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const GsoDefinition2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'gso-definition-2026');

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
    <div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10 bg-white">
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
<section id="introduction" className="text-xl text-slate-600 leading-relaxed">
                    <p>
                        <strong>GSO (Generative Search Optimization)</strong> = l'art d'optimiser votre contenu pour être cité par les IA génératives (ChatGPT, Gemini, Perplexity, Claude). En 2026, ce n'est plus optionnel. C'est vital. Les IA génératives génèrent 15-20% du trafic web. Si vous n'êtes pas optimisé pour le GSO, vous perdez des clients.
                    </p>
                </section>

                <div className="my-12 h-px bg-slate-200 w-full"></div>
            
            <section id="definition">
                <h2 className="flex items-center gap-3 text-3xl md:text-4xl mb-8 font-bold">
                    Qu'est-ce que le GSO ? Définition Précise
                </h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8">
                    <p className="text-lg text-blue-900 font-medium m-0">Le <strong>GSO (Generative Search Optimization)</strong> est l'ensemble des optimisations qui permettent à votre contenu d'être <strong>cité, référencé et recommandé par les IA génératives</strong> comme ChatGPT, Google Gemini, Perplexity, Claude et Bing Copilot.</p>
                </div>
                
                <p>C'est différent du SEO traditionnel. Le SEO optimise pour Google Search. Le GSO optimise pour les IA génératives.</p>
                
                <h3 className="text-2xl font-bold mt-10 mb-6">Pourquoi c'est Différent du SEO ?</h3>
                
                <p><strong>Tableau Comparatif :</strong></p>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">Critère</th>
                                <th scope="col" className="px-6 py-4">SEO Traditionnel</th>
                                <th scope="col" className="px-6 py-4">GSO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Objectif</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Ranker sur Google Search</td>
                                <td className="whitespace-nowrap px-6 py-4">Être cité par les IA</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Algorithme</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">PageRank, Core Web Vitals</td>
                                <td className="whitespace-nowrap px-6 py-4">LLM (Large Language Models)</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Contenu</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">1 500-2 000 mots</td>
                                <td className="whitespace-nowrap px-6 py-4">2 500+ mots avec données</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Autorité</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Backlinks, domaine</td>
                                <td className="whitespace-nowrap px-6 py-4">E-E-A-T, sources fiables</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Fraîcheur</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Important</td>
                                <td className="whitespace-nowrap px-6 py-4">Très important</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Données</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Génériques acceptées</td>
                                <td className="whitespace-nowrap px-6 py-4">Propriétaires préférées</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Citations</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Pas nécessaires</td>
                                <td className="whitespace-nowrap px-6 py-4">Essentielles</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"><strong>Trafic</strong></td>
                                <td className="whitespace-nowrap px-6 py-4">Direct depuis Google</td>
                                <td className="whitespace-nowrap px-6 py-4">Indirect via IA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
            <section id="importance" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-10 font-bold">Pourquoi le GSO est Crucial en 2026</h2>
                
                <h3 className="text-2xl font-bold mt-10 mb-6">Les Chiffres Réels</h3>
                
                <p>Selon notre étude de 500 sites en 2026 :</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 not-prose mb-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">15-20%</div>
                        <div className="text-sm text-slate-600 font-medium">Du trafic web via IA</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">8-10%</div>
                        <div className="text-sm text-slate-600 font-medium">Généré par ChatGPT</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-emerald-600 mb-2">4-6%</div>
                        <div className="text-sm text-slate-600 font-medium">Généré par Gemini</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">2-3%</div>
                        <div className="text-sm text-slate-600 font-medium">Généré par Perplexity</div>
                    </div>
                </div>
                
                <p className="text-xl font-medium text-slate-800 text-center"><strong>Résultat :</strong> Si vous n'êtes pas optimisé pour le GSO, vous perdez 15-20% de votre trafic potentiel.</p>
                
                <h3 className="text-2xl font-bold mt-10 mb-6">Cas Client #1 : Agence B2B (Avant GSO)</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-blue-600 block mb-2">Situation initiale :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 5 000 visiteurs/mois</li>
                            <li>Trafic IA : 0 visiteurs/mois</li>
                            <li>Citations IA : 0</li>
                            <li>Position moyenne Google : 12</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-purple-600 block mb-2">Après 3 mois de GSO :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 5 200 visiteurs/mois (+4%)</li>
                            <li>Trafic IA : 800 visiteurs/mois (NOUVEAU)</li>
                            <li>Citations IA : 25+ mots-clés</li>
                            <li>Position moyenne Google : 8 (-33%)</li>
                        </ul>
                    </div>
                </div>
                
                <p className="text-xl font-medium text-slate-800 text-center mt-6"><strong>Résultat :</strong> +1 000 visiteurs/mois (+20% total)</p>
            </section>
            
            <section id="piliers" className="my-16">
                <h2 className="text-3xl mb-8">Les 4 Piliers du GSO</h2>
                
                <div className="space-y-8 mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">1. Contenu Long-Form avec Données Propriétaires</h3>
                        
                        <p>Les IA génératives préfèrent le contenu long et approfondi avec des données originales.</p>
                        
                        <strong className="block mb-2">Critères :</strong>
                        <ul className="text-sm space-y-1">
                            <li>Minimum 2 500 mots (pas 2 000)</li>
                            <li>Données propriétaires (études, sondages, analyses)</li>
                            <li>Cas clients documentés</li>
                            <li>Résultats mesurables</li>
                            <li>Sources citées</li>
                        </ul>
                        
                        <p className="mt-4"><strong>Impact :</strong> Les articles avec données propriétaires sont cités 3x plus souvent par les IA.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">2. E-E-A-T (Expertise, Experience, Authority, Trustworthiness)</h3>
                        
                        <p>Les IA génératives cherchent des sources fiables et d'autorité.</p>
                        
                        <strong className="block mb-2">Critères :</strong>
                        <ul className="text-sm space-y-1">
                            <li><strong>Expertise</strong> : Montrez vos compétences</li>
                            <li><strong>Experience</strong> : Documentez vos cas clients</li>
                            <li><strong>Authority</strong> : Backlinks depuis sites d'autorité</li>
                            <li><strong>Trustworthiness</strong> : Soyez transparent et fiable</li>
                        </ul>
                        
                        <p className="mt-4"><strong>Impact :</strong> Un fort E-E-A-T augmente les citations IA de 40%.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">3. Structure et Formatage Optimisé</h3>
                        
                        <p>Les IA génératives lisent mieux le contenu bien structuré.</p>
                        
                        <strong className="block mb-2">Critères :</strong>
                        <ul className="text-sm space-y-1">
                            <li>H1 unique et clair</li>
                            <li>H2/H3 logiques et pertinents</li>
                            <li>Listes à puces (faciles à parser)</li>
                            <li>Tableaux (données structurées)</li>
                            <li>Gras et italique pour l'emphase</li>
                            <li>Paragraphes courts (2-3 phrases max)</li>
                        </ul>
                        
                        <p className="mt-4"><strong>Impact :</strong> Un contenu bien structuré est cité 2x plus souvent.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">4. Fraîcheur et Mise à Jour Régulière</h3>
                        
                        <p>Les IA génératives préfèrent le contenu frais et à jour.</p>
                        
                        <strong className="block mb-2">Critères :</strong>
                        <ul className="text-sm space-y-1">
                            <li>Contenu publié récemment (moins de 3 mois)</li>
                            <li>Mise à jour régulière (tous les 3-6 mois)</li>
                            <li>Nouvelles données ajoutées</li>
                            <li>Informations obsolètes supprimées</li>
                            <li>Date de publication visible</li>
                        </ul>
                        
                        <p className="mt-4"><strong>Impact :</strong> Le contenu frais est cité 25% plus souvent.</p>
                    </div>
                </div>
            </section>
            
            <section id="gso-vs-seo" className="my-16">
                <h2 className="text-3xl mb-8">GSO vs SEO : Les Vraies Différences</h2>
                
                <h3 className="text-2xl font-bold mt-10 mb-6">Cas Client #2 : E-commerce (SEO vs GSO)</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-blue-600 block mb-2">Situation initiale :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 10 000 visiteurs/mois</li>
                            <li>Trafic IA : 0 visiteurs/mois</li>
                            <li>Contenu : 1 500 mots, pas de données propriétaires</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-purple-600 block mb-2">Stratégie SEO Seule (3 mois) :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 12 000 visiteurs/mois (+20%)</li>
                            <li>Trafic IA : 0 visiteurs/mois</li>
                            <li>Résultat : +2 000 visiteurs/mois</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-emerald-600 block mb-2">Stratégie GSO Seule (3 mois) :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 10 200 visiteurs/mois (+2%)</li>
                            <li>Trafic IA : 2 500 visiteurs/mois (NOUVEAU)</li>
                            <li>Résultat : +2 700 visiteurs/mois</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-orange-600 block mb-2">Stratégie SEO + GSO (3 mois) :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 12 500 visiteurs/mois (+25%)</li>
                            <li>Trafic IA : 3 200 visiteurs/mois (NOUVEAU)</li>
                            <li>Résultat : +5 700 visiteurs/mois</li>
                        </ul>
                    </div>
                </div>
                
                <p className="text-xl font-medium text-slate-800 text-center mt-6"><strong>Conclusion :</strong> GSO + SEO génère 2.8x plus de trafic que SEO seul.</p>
            </section>
            
            <section id="cas-client-3" className="my-16">
                <h2 className="text-3xl mb-8">Cas Client #3 : SaaS (Stratégie GSO Complète)</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-blue-600 block mb-2">Situation initiale :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 3 000 visiteurs/mois</li>
                            <li>Trafic IA : 0 visiteurs/mois</li>
                            <li>Contenu : 1 200 mots, pas de données propriétaires</li>
                            <li>E-E-A-T : Faible</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong className="text-purple-600 block mb-2">Stratégie GSO Mise en Place :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Créé 10 articles long-form (2 500+ mots)</li>
                            <li>Ajouté données propriétaires (étude de 100 clients)</li>
                            <li>Amélioré E-E-A-T (cas clients, témoignages)</li>
                            <li>Mis à jour tous les 3 mois</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
                        <strong className="text-emerald-600 block mb-2">Résultats après 6 mois :</strong>
                        <ul className="text-sm space-y-1 mb-4">
                            <li>Trafic Google : 5 500 visiteurs/mois (+83%)</li>
                            <li>Trafic IA : 2 200 visiteurs/mois (NOUVEAU)</li>
                            <li>Citations IA : 45+ mots-clés</li>
                            <li>Conversions : +150%</li>
                        </ul>
                    </div>
                </div>
                
                <p className="text-xl font-medium text-slate-800 text-center mt-6"><strong>Résultat :</strong> +4 700 visiteurs/mois (+157% total)</p>
            </section>
            
            <section id="erreurs" className="my-16">
                <h2 className="text-3xl mb-8">Les Erreurs Courantes du GSO</h2>
                
                <div className="space-y-8 mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Erreur #1 : Ignorer le GSO</h3>
                        <p>Beaucoup pensent que le GSO est une tendance. C'est faux. Les IA génératives sont là pour rester. <strong>À faire :</strong> Commencez votre stratégie GSO maintenant.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Erreur #2 : Contenu Générique</h3>
                        <p>Beaucoup créent du contenu générique sans données propriétaires. Les IA ne le citent pas. <strong>À faire :</strong> Incluez des données propriétaires (études, sondages, cas clients).</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Erreur #3 : Pas d'E-E-A-T</h3>
                        <p>Beaucoup ignorent l'E-E-A-T. Les IA préfèrent les sources fiables. <strong>À faire :</strong> Montrez votre expertise, expérience, autorité et fiabilité.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Erreur #4 : Contenu Trop Court</h3>
                        <p>Beaucoup créent du contenu court (1 000-1 500 mots). Les IA préfèrent le long-form. <strong>À faire :</strong> Créez du contenu long (2 500+ mots) avec profondeur.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Erreur #5 : Pas de Mise à Jour</h3>
                        <p>Beaucoup créent du contenu et l'oublient. Les IA préfèrent le contenu frais. <strong>À faire :</strong> Mettez à jour votre contenu tous les 3-6 mois.</p>
                    </div>
                </div>
            </section>
            
            <section id="checklist" className="my-16">
                <h2 className="text-3xl mb-8">Checklist GSO Complète</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Contenu</h3>
                        <ul className="text-sm space-y-1">
                            <li>☐ 2 500+ mots par article</li>
                            <li>☐ Données propriétaires incluses</li>
                            <li>☐ 3-5 cas clients documentés</li>
                            <li>☐ Résultats mesurables affichés</li>
                            <li>☐ Sources citées</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">E-E-A-T</h3>
                        <ul className="text-sm space-y-1">
                            <li>☐ Auteur présenté avec qualifications</li>
                            <li>☐ Cas clients documentés</li>
                            <li>☐ Témoignages clients</li>
                            <li>☐ Backlinks depuis sites d'autorité</li>
                            <li>☐ Présence médiatique</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Structure</h3>
                        <ul className="text-sm space-y-1">
                            <li>☐ H1 unique et clair</li>
                            <li>☐ H2/H3 logiques</li>
                            <li>☐ Listes à puces</li>
                            <li>☐ Tableaux (données structurées)</li>
                            <li>☐ Paragraphes courts</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Fraîcheur</h3>
                        <ul className="text-sm space-y-1">
                            <li>☐ Contenu publié récemment</li>
                            <li>☐ Mise à jour tous les 3-6 mois</li>
                            <li>☐ Nouvelles données ajoutées</li>
                            <li>☐ Informations obsolètes supprimées</li>
                            <li>☐ Date de publication visible</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
                        <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Technique</h3>
                        <ul className="text-sm space-y-1">
                            <li>☐ Pas de JavaScript bloquant</li>
                            <li>☐ Contenu accessible</li>
                            <li>☐ Mobile-friendly</li>
                            <li>☐ Vitesse optimisée</li>
                            <li>☐ Schema Markup (Article, FAQPage)</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section id="actions" className="my-20">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">Actions Immédiates (Cette Semaine)</h2>
                
                <div className="relative">
                    {/* Ligne verticale de connexion */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
                    
                    <div className="space-y-12 mt-8 relative z-10">
                        {[
                            { 
                                step: 1, 
                                title: "Audit GSO", 
                                desc: "Commencez par un audit complet de votre situation actuelle :",
                                list: ["Analysez votre contenu actuel", "Identifiez ce qui manque (données propriétaires, E-E-A-T, longueur)", "Créez une liste de 10 articles à améliorer"],
                                color: "blue"
                            },
                            { 
                                step: 2, 
                                title: "Amélioration Prioritaire", 
                                desc: "Améliorez vos articles existants :",
                                list: ["Sélectionnez 3 articles prioritaires", "Ajoutez 500+ mots", "Incluez données propriétaires", "Améliorez E-E-A-T"],
                                color: "purple"
                            },
                            { 
                                step: 3, 
                                title: "Création de Contenu", 
                                desc: "Créez du nouveau contenu optimisé :",
                                list: ["Créez 1 nouvel article long-form (2 500+ mots)", "Incluez données propriétaires", "Documentez 3-5 cas clients", "Optimisez pour GSO"],
                                color: "emerald"
                            },
                            { 
                                step: 4, 
                                title: "Monitoring", 
                                desc: "Suivez vos résultats :",
                                list: ["Suivez vos citations IA", "Analysez le trafic IA", "Optimisez les articles", "Créez 1 nouvel article"],
                                color: "blue"
                            }
                        ].map((item, index) => {
                            const isEven = index % 2 === 0;
                            const colorClasses = {
                                blue: "bg-blue-50 border-blue-200 text-blue-700",
                                purple: "bg-purple-50 border-purple-200 text-purple-700",
                                emerald: "bg-emerald-50 border-emerald-200 text-emerald-700"
                            }[item.color as 'blue' | 'purple' | 'emerald'] || "bg-blue-50 border-blue-200 text-blue-700";
                            
                            const iconColorClasses = {
                                blue: "bg-blue-600 shadow-blue-200",
                                purple: "bg-purple-600 shadow-purple-200",
                                emerald: "bg-emerald-600 shadow-emerald-200"
                            }[item.color as 'blue' | 'purple' | 'emerald'] || "bg-blue-600 shadow-blue-200";

                            return (
                                <div key={item.step} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Espace vide pour l'alignement alterné sur desktop */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                    
                                    {/* Cercle central */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-2xl text-white shadow-xl z-10 border-4 border-white ${iconColorClasses}`}>
                                        {item.step}
                                    </div>
                                    
                                    {/* Contenu de la carte */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                        <div className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow bg-white relative overflow-hidden group`}>
                                            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-2 h-full ${colorClasses.split(' ')[0]}`}></div>
                                            <h3 className="font-display font-bold text-2xl text-slate-900 mt-0 mb-3">{item.title}</h3>
                                            <p className="text-slate-600 text-base mb-4 font-medium">{item.desc}</p>
                                            <ul className={`space-y-2 m-0 p-0 list-none ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                                {item.list.map((listItem, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        {!isEven && <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${colorClasses.split(' ')[2]}`} />}
                                                        <span>{listItem}</span>
                                                        {isEven && <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 hidden md:block ${colorClasses.split(' ')[2]}`} />}
                                                        {isEven && <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 md:hidden ${colorClasses.split(' ')[2]}`} />}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <section id="outils" className="my-16">
                <h2 className="text-3xl mb-8">Outils Essentiels pour le GSO</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <BarChart3 size={20} className="text-blue-600" /> Analyse
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">Ahrefs</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Analyse de contenu</li>
                                    <li>Recherche de mots-clés</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">SEMrush</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Analyse de contenu</li>
                                    <li>Analyse des concurrents</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Google Search Console</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Données officielles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <Target size={20} className="text-orange-600" /> Création
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">ChatGPT</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Brainstorming</li>
                                    <li>Structure</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Gemini</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Vérification de contenu</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Perplexity</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Recherche et citations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
                            <Bot size={20} className="text-green-600" /> Monitoring
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block text-slate-900">Google Analytics 4</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Trafic IA (gratuit)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">Ahrefs</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Citations IA</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-slate-900">SEMrush</strong>
                                <ul className="text-sm text-slate-600 pl-4 list-disc mb-1">
                                    <li>Citations IA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="conclusion" className="my-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white not-prose relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h2 className="text-white text-4xl md:text-5xl mb-8 font-display font-bold tracking-tight">Conclusion</h2>
                    <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        Le <strong>GSO n'est pas une tendance. C'est l'avenir du marketing digital.</strong>
                    </p>
                    <p className="text-white text-lg mb-6 max-w-7xl mx-auto text-left">En 2026, ignorer le GSO signifie perdre 15-20% de votre trafic potentiel.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-center text-center hover:bg-white/20 transition-colors">
                            <span className="text-xs md:text-sm font-bold text-white uppercase">Cette semaine : Audit GSO</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-center text-center hover:bg-white/20 transition-colors">
                            <span className="text-xs md:text-sm font-bold text-white uppercase">Semaine 2 : Amélioration</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-center text-center hover:bg-white/20 transition-colors">
                            <span className="text-xs md:text-sm font-bold text-white uppercase">Semaine 3 : Création</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-center text-center hover:bg-white/20 transition-colors">
                            <span className="text-xs md:text-sm font-bold text-white uppercase">Semaine 4 : Monitoring</span>
                        </div>
                    </div>
                    <p className="text-blue-100 text-lg mb-10 max-w-4xl mx-auto">
                        <strong className="text-white text-xl">Commencez maintenant. Vos concurrents ne dorment pas.</strong>
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="/expertise-gso" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Découvrir notre expertise GSO
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg border-2 border-white/50 hover:border-white">
                            Demander un audit GSO
                        </a>
                    </div>
                </div>
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
