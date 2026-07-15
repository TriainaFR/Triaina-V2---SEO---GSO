const fs = require('fs');

const code = fs.readFileSync('views/Expertise.tsx', 'utf-8');

const startIdx = code.indexOf(`  // ════════════════════════════════════════════════════════════════════════\n  // SPECIAL LAYOUT: EXPERTISE GSO`);
const endIdx = code.indexOf(`  // ════════════════════════════════════════════════════════════════════════\n  // SPECIAL LAYOUT: EXPERTISE CONTENT`);

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = `  // ════════════════════════════════════════════════════════════════════════
  // SPECIAL LAYOUT: EXPERTISE GEO
  // ════════════════════════════════════════════════════════════════════════
  if (id === 'expertise-gso') {
      const geoFaqItems = [
          { q: "Qu'est-ce qu'une agence GEO exactement ?", a: "C'est un prestataire spécialisé qui optimise la visibilité d'une marque pour qu'elle soit citée dans les réponses des moteurs d'IA génératifs (ChatGPT, Perplexity, Gemini, Copilot), en combinant optimisation de contenu, données structurées et stratégie d'autorité off-site." },
          { q: "Quelle est la différence entre SEO et GEO ?", a: "Le SEO vise un classement dans une liste de liens. Le GEO vise l'intégration directe de votre contenu dans le texte généré par l'IA en réponse à une question. Les deux se complètent : un bon référencement SEO reste souvent le socle sur lequel s'appuie une bonne visibilité GEO." },
          { q: "Combien de temps faut-il pour voir des résultats en GEO ?", a: "Nos deux cas clients montrent des résultats en 6 à 8 mois, avec des scores de visibilité GEO passant de 0 % à 73-90 %. Le délai dépend surtout de la concurrence sémantique du secteur et de l'état initial du site." },
          { q: "Quels moteurs d'IA sont concernés par le GEO ?", a: "Principalement ChatGPT Search, Perplexity, Gemini, Microsoft Copilot et les AI Overviews de Google. Une stratégie GEO efficace couvre plusieurs moteurs en parallèle, chacun ayant ses propres critères de citation." },
          { q: "Le balisage Schema.org est-il vraiment nécessaire pour le GEO ?", a: "Oui, dans la mesure où il aide les moteurs génératifs à identifier sans ambiguïté vos entités (organisation, produits, auteurs) et à les relier entre elles. Un balisage incohérent avec le contenu visible peut cependant nuire plus qu'il n'aide." },
          { q: "Pourquoi choisir une agence GEO à Paris plutôt qu'à distance ?", a: "Une agence GEO Paris comme Triaina permet un suivi rapproché et des points réguliers en présentiel si besoin, tout en gardant l'agilité nécessaire pour ajuster la stratégie face aux évolutions fréquentes des algorithmes génératifs." }
      ];

      const combinedGeoSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr",
                "logo": "https://www.triaina.fr/logo.svg",
                "description": "Agence GEO spécialisée en Generative Engine Optimization pour dominer les IA génératives.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "50 Quai Louis Blériot",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "postalCode": "75016",
                    "addressCountry": "FR"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/triaina"
                ]
            },
            {
                "@type": "Service",
                "name": "Expertise GEO - Generative Engine Optimization",
                "provider": {
                    "@type": "Organization",
                    "name": "Triaina"
                },
                "url": "https://www.triaina.fr/expertise-gso",
                "description": "Optimisez votre marque pour qu'elle soit citée par ChatGPT, Perplexity, Gemini et l'AI Overview de Google."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
                    { "@type": "ListItem", "position": 2, "name": "Expertise GEO", "item": "https://www.triaina.fr/expertise-gso" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": geoFaqItems.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            }
        ]
      };

      return (
        <div className="pt-32 pb-20 px-4 min-h-screen max-w-6xl mx-auto relative z-10 font-sans">
            <SEO 
              schema={combinedGeoSchema}
              title="Expertise GEO : agence Generative Engine Optimization - Triaina"
              description="Agence GEO experte : dominez les réponses de ChatGPT, Perplexity et Gemini. Méthode testée avec jusqu'à 90% de visibilité IA. Découvrez le Generative Engine Optimization."
              canonicalUrl="https://www.triaina.fr/expertise-gso"
            />
            
            {/* HERO SECTION */}
            <div className="mb-20 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Expertise <span className="text-blue-700">GEO</span> : <br className="hidden md:block"/>
                    dominez les réponses de ChatGPT, Perplexity et Gemini
                </h1>
                <div className="flex justify-center items-center gap-4 text-xs font-mono text-slate-500 uppercase mb-8">
                    <span>// Visibilité IA</span>
                    <span className="w-px h-4 bg-slate-400"></span>
                    <span>// Citation Engine</span>
                </div>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    Le <strong>Generative Engine Optimization (GEO)</strong> consiste à faire citer votre marque directement dans les réponses des moteurs d'IA (ChatGPT, Perplexity, Gemini, Copilot) plutôt que de viser une position dans une liste de liens bleus. C'est le prolongement naturel du SEO, pas son remplacement.
                </p>
                <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed mt-4">
                    Chez Triaina, notre expertise <strong>agence GEO</strong> s'appuie sur une méthode testée sur des secteurs très concurrentiels : 0 à 73 % de visibilité GEO en moins de 6 mois pour un client B2B, 0 à 90 % en moins de 8 mois pour un acteur du Travel.
                </p>
            </div>

            {/* Qu'est-ce que le GEO ? */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="text-blue-600" size={32} />
                    Qu'est-ce que le GEO ?
                </h2>
                <div className="prose prose-lg prose-slate max-w-none">
                    <p>
                        Le GEO désigne l'ensemble des techniques qui visent à faire apparaître un contenu, une marque ou un produit dans les réponses synthétisées par les moteurs génératifs. Le terme vient d'un papier de recherche publié par une équipe de Princeton en novembre 2023 (Aggarwal et al., <em>GEO: Generative Engine Optimization</em>), qui a posé les bases théoriques de la discipline et montré qu'un contenu bien optimisé pouvait gagner jusqu'à 40 % de visibilité dans les réponses des moteurs génératifs.
                    </p>
                    <p className="font-bold mt-6 mb-4">Concrètement, ça change trois choses par rapport au SEO classique :</p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>La cible n'est plus une position dans une liste</strong>, mais une citation dans un texte généré.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>Le facteur clé n'est pas le nombre de backlinks</strong>, mais ce que les chercheurs appellent l'« information gain » : la capacité d'un contenu à apporter une info nouvelle et vérifiable que le modèle n'a pas encore vue ailleurs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                            <span><strong>Les moteurs ciblés changent</strong> : ChatGPT Search, Perplexity, Gemini, Copilot et les AI Overviews de Google, en plus du SEO traditionnel qu'on ne remplace pas, on le complète.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Leviers Techniques */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Les leviers techniques du GEO</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Une stratégie GEO qui tient dans la durée repose sur trois chantiers concrets menés en parallèle.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Structuration sémantique</h3>
                        <p className="text-sm text-slate-600 mb-6">Les LLM ne « lisent » pas une page comme un humain : ils découpent le texte en fragments et cherchent des réponses directes.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Réponse en tête</strong> : au début des H2/H3.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Blocs atomiques</strong> : citables hors contexte.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Fragments identifiables</strong> : ancres HTML.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Fraîcheur</strong> : révision trimestrielle.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Données structurées Schema.org</h3>
                        <p className="text-sm text-slate-600 mb-6">Le balisage sémantique aide à identifier sans ambiguïté qui parle, de quoi, et depuis quand.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>JSON-LD</strong> : privilégié par les crawlers.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Parité stricte</strong> : balisage = contenu.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Types spécifiques</strong> : Article, FAQPage, etc.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Vérification technique</strong> : robots.txt propre.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Autorité off-site</h3>
                        <p className="text-sm text-slate-600 mb-6">Les LLM pondèrent fortement ce que des sources tierces disent de vous. Le levier de la bascule.</p>
                        <ul className="text-sm text-slate-700 space-y-3">
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Citations</strong> : sites de référence, comparatifs.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Relais éditoriaux</strong> : articles invités, presse.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Cohérence</strong> : marque et chiffres homogènes.</li>
                            <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" /> <strong>Suivi</strong> : trajectoire sur plusieurs mois.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pourquoi une agence */}
            <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-16 mb-20 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">Pourquoi passer par une agence GEO ?</h2>
                <div className="prose prose-lg prose-invert max-w-none relative z-10 text-blue-50">
                    <p>
                        Le GEO demande un mélange de compétences qu'on retrouve rarement dans une seule équipe marketing : structuration sémantique poussée, données structurées Schema.org, stratégie de netlinking orientée autorité perçue par les LLM, et un suivi de métriques qui n'existaient pas il y a deux ans.
                    </p>
                    <p className="mt-6 mb-4 font-bold text-white">Une agence GEO Paris comme Triaina apporte :</p>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Un outillage de suivi</h4>
                            <p className="text-sm">Pour mesurer le taux de citation réel dans ChatGPT, Perplexity et Gemini, pas des estimations.</p>
                        </div>
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Une méthode éprouvée</h4>
                            <p className="text-sm">Testée sur plusieurs secteurs, dont des univers très concurrentiels comme le Travel ou le B2B.</p>
                        </div>
                        <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500/50">
                            <h4 className="text-white font-bold mb-2">Accompagnement</h4>
                            <p className="text-sm">Technique et off-site : la partie la plus chronophage et la plus mal maîtrisée en interne.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process en 5 étapes */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">Notre processus GEO en 5 étapes</h2>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {[
                        { step: 1, title: "Audit de visibilité IA", desc: "On mesure votre score de citation actuel sur les principaux moteurs génératifs, on identifie les requêtes où vos concurrents sont cités à votre place, et on cartographie les gaps de contenu." },
                        { step: 2, title: "Optimisation sémantique et technique", desc: "Restructuration des contenus en formats citables : réponses directes en tête de section, données chiffrées, tableaux comparatifs, FAQ structurées, balisage Schema.org complet." },
                        { step: 3, title: "Renforcement de l'autorité off-site", desc: "Les LLM pondèrent fortement les sources tierces. On travaille les citations sur des sites de référence, mentions dans des comparatifs, relais éditoriaux." },
                        { step: 4, title: "Déploiement multi-moteurs", desc: "Chaque moteur a ses propres règles. On adapte le contenu pour ChatGPT Search, Perplexity, Gemini, Copilot et les AI Overviews plutôt que de viser un seul canal." },
                        { step: 5, title: "Mesure et itération continue", desc: "Suivi mensuel du taux de citation par moteur, ajustement des contenus sous-performants, veille sur les évolutions d'algorithmes." }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl font-display">
                                    {s.step}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cas Clients */}
            <div className="mb-20 animate-fade-in-up" style={{animationDelay: '500ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 text-center">Cas clients : résultats mesurés</h2>
                <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                    On ne travaille qu'avec des chiffres vérifiables. Voici deux campagnes GEO qu'on a menées récemment, sur des univers sémantiques particulièrement concurrentiels.
                </p>
                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-12">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-500 font-bold">
                                <th className="p-4">Cas client</th>
                                <th className="p-4">Secteur</th>
                                <th className="p-4">Durée</th>
                                <th className="p-4">Résultat</th>
                                <th className="p-4">Leviers principaux</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Cas 1</td>
                                <td className="p-4 text-slate-600">Éditeur SaaS B2B</td>
                                <td className="p-4 text-slate-600">Moins de 6 mois</td>
                                <td className="p-4 font-bold text-blue-600">0 % → 73 % visibilité GEO</td>
                                <td className="p-4 text-slate-600">Accompagnement technique + off-site</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Cas 2</td>
                                <td className="p-4 text-slate-600">Travel (voyage)</td>
                                <td className="p-4 text-slate-600">Moins de 8 mois</td>
                                <td className="p-4 font-bold text-blue-600">0 % → 90 % visibilité GEO</td>
                                <td className="p-4 text-slate-600">Optimisation sémantique + autorité off-site</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Cas 1 : Éditeur SaaS B2B</h3>
                        <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                            <p><strong>Contexte :</strong> Marché avec une dizaine d'éditeurs concurrents. 0 % de citations IA initialement, malgré un bon SEO.</p>
                            <p><strong>Actions :</strong> Refonte éditoriale des pages piliers, ajout de balisages <code>Product</code> et <code>FAQPage</code>. Campagne de citations ciblée dans des annuaires B2B et relais médias sectoriels.</p>
                            <p><strong>Résultat :</strong> 0 % à 73 % en moins de 6 mois, avec une nette accélération à partir du 4ᵉ mois lors de l'indexation des citations tierces.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Cas 2 : Plateforme Travel</h3>
                        <div className="text-slate-600 space-y-4 text-sm leading-relaxed">
                            <p><strong>Contexte :</strong> Requêtes génériques ultra-disputées par des dizaines d'acteurs, comparateurs et médias.</p>
                            <p><strong>Actions :</strong> Refonte sémantique de +80 pages en blocs atomiques, fragments identifiables, mise à jour trimestrielle. Autorité off-site soutenue : partenariats éditoriaux, cohérence des chiffres.</p>
                            <p><strong>Résultat :</strong> 0 % à 90 % de visibilité GEO, notre meilleur score sur un secteur aussi disputé.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="mb-24 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Expertise GEO</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {geoFaqItems.map((item, index) => {
                        const isOpen = openGsoFaq === index;
                        return (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors">
                                <button 
                                    onClick={() => toggleGsoFaq(index)}
                                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className={\`font-bold text-lg \${isOpen ? 'text-blue-700' : 'text-slate-900'}\`}>{item.q}</span>
                                    {isOpen ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-400" />}
                                </button>
                                <div className={\`transition-[max-height,opacity] duration-300 overflow-hidden \${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}\`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-100 mt-2 pt-4">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: '700ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-0"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à mesurer votre visibilité GEO ?</h2>
                    <p className="text-lg text-slate-300 mb-8 font-light">
                        On démarre toujours par un audit de votre score de citation actuel sur ChatGPT, Perplexity et Gemini. C'est la seule façon de savoir d'où vous partez avant de fixer un objectif réaliste.
                    </p>
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/30 hover:-translate-y-1"
                    >
                        Demander un audit GEO gratuit <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            
            {/* Sources */}
            <div className="mt-20 border-t border-slate-200 pt-12 animate-fade-in-up" style={{animationDelay: '800ms'}}>
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Sources utiles</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Aggarwal et al. « GEO » (arXiv)
                    </a>
                    <a href="https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Princeton University - GEO
                    </a>
                    <a href="https://blog.hubspot.fr/marketing/geo-generative-engine-optimization" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        HubSpot - Comprendre le GEO
                    </a>
                    <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer nofollow" className="px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Google - Données structurées
                    </a>
                </div>
            </div>
        </div>
      );
  }
`;

    const nextContent = code.slice(0, startIdx) + newContent + code.slice(endIdx);
    fs.writeFileSync('views/Expertise.tsx', nextContent);
} else {
    console.log("Not found boundaries");
}
