import React from 'react';
import { Brain, Radio, Check, Database, Globe, Building2, Wine, Shield, Landmark, ArrowRight, Zap, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';

// DONNÉES STRUCTURÉES (JSON-LD) - STRICTEMENT CONSERVÉES
const pillarsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Nos 3 Piliers : Architecture SEO, Autorité & Optimisation IA",
      "description": "Découvrez les 3 piliers de Triaina : architecture SEO, autorité média (Yonder, Les Hardis) et optimisation pour les IA génératives. Exemples pour hôtels, banques, assurances, vins.",
      "image": "https://www.triaina.fr/nos-piliers/og-image.jpg",
      "author": {
          "@type": "Organization",
          "name": "Triaina"
      },
      "datePublished": "2026-02-02",
      "dateModified": "2026-02-02"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://www.triaina.fr/"
          },
          {
          "@type": "ListItem",
          "position": 2,
          "name": "Nos Piliers",
          "item": "https://www.triaina.fr/#pillars"
          }
      ]
    }
  ]
};

// CONTENU EXACT (SEO/GSO) AVEC NOUVELLE STRUCTURE VISUELLE
const PILLARS_CONTENT = [
  {
      id: '01',
      number: '01',
      title: "Architecture SEO",
      tagline: "Un Site qui Fonctionne",
      icon: Database,
      description: "Imaginez un magasin physique : s'il est mal organisé, les clients ne trouvent rien. C'est pareil pour votre site web. L'architecture SEO, c'est l'organisation structurelle de votre actif numérique.",
      details: [
          { title: "Vitesse", desc: "Chargement instantané pour UX & Google" },
          { title: "Mobile First", desc: "Expérience native sur tous les devices" },
          { title: "Crawlability", desc: "Portes ouvertes aux robots d'indexation" },
          { title: "Structure", desc: "Siloing sémantique hermétique" }
      ],
      mainText: "Beaucoup pensent que le contenu est tout. Mais c'est comme avoir un excellent produit dans un magasin qu'on ne peut pas trouver. Sans une bonne architecture SEO, votre contenu restera invisible. Avec une bonne architecture, votre contenu a une vraie chance de dominer Google.",
      examples: [
          { icon: Building2, label: "Hôtel", text: "Architecture fluide pour trouver chambres et tarifs sans friction." },
          { icon: Landmark, label: "Banque", text: "Site sécurisé où les services sont accessibles en < 2 clics." },
          { icon: Shield, label: "Assurance", text: "Structure claire pour transformer le visiteur en prospect qualifié." },
          { icon: Wine, label: "Vins", text: "Catalogue élégant optimisé pour la découverte et l'achat rapide." }
      ]
  },
  {
      id: '02',
      number: '02',
      title: "Autorité Média",
      tagline: "Être Reconnu comme Référence",
      icon: Radio,
      description: "Google fait confiance aux marques. L'autorité, c'est la réputation de votre marque. Plus votre marque est citée par des sources fiables, plus Google vous classe haut.",
      details: [
          { title: "Yonder & Les Hardis", desc: "Accès exclusif à notre réseau média" },
          { title: "Digital PR", desc: "Placements presse stratégiques" },
          { title: "Backlinks", desc: "Liens entrants de haute autorité" },
          { title: "Signaux E-E-A-T", desc: "Expertise validée par des tiers" }
      ],
      mainText: "La publicité génère du trafic immédiat mais coûte cher et s'arrête quand vous arrêtez de payer. L'autorité génère du trafic durable et gratuit. C'est un actif que vous construisez une fois et qui continue de générer du trafic pendant des années.",
      examples: [
          { icon: Building2, label: "Hôtel", text: "Citations dans Yonder et guides de voyage de luxe." },
          { icon: Landmark, label: "Banque", text: "Articles experts dans la presse financière spécialisée." },
          { icon: Shield, label: "Assurance", text: "Mentions d'autorité dans les comparatifs et médias généralistes." },
          { icon: Wine, label: "Vins", text: "Reportages dans Les Hardis et la presse gastronomique." }
      ]
  },
  {
      id: '03',
      number: '03',
      title: "Optimisation IA",
      tagline: "Visible sur ChatGPT, Gemini...",
      icon: Brain,
      description: "Vos clients ne cherchent plus seulement sur Google. Ils dialoguent avec ChatGPT, Gemini et Perplexity. Si vous n'êtes pas dans leurs réponses, vous n'existez plus.",
      details: [
          { title: "GSO Strategy", desc: "Generative Search Optimization" },
          { title: "Entity Training", desc: "Nourrir les modèles avec votre marque" },
          { title: "Contextual Data", desc: "Données structurées avancées" },
          { title: "Presence Hybride", desc: "Domination Google + IA" }
      ],
      mainText: "Le SEO traditionnel optimise pour Google Search. L'optimisation IA optimise pour les modèles génératifs. Vous avez besoin des deux. Chez Triaina, nous maîtrisons les deux et les combinons pour une domination totale du marché.",
      examples: [
          { icon: Building2, label: "Hôtel", text: "ChatGPT : \"Où dormir à Paris avec piscine ?\" -> Votre hôtel recommandé." },
          { icon: Landmark, label: "Banque", text: "Gemini : \"Quelle banque pour un crédit ?\" -> Votre banque citée." },
          { icon: Shield, label: "Assurance", text: "Perplexity : \"Meilleure assurance auto ?\" -> Votre offre suggérée." },
          { icon: Wine, label: "Vins", text: "ChatGPT : \"Vin rouge pour repas famille ?\" -> Votre domaine proposé." }
      ]
  }
];

export const Pillars: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative z-10 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Balises SEO & Meta (Invisible) */}
      <SEO schema={pillarsSchema} />
      <div className="hidden">
        <title>Nos 3 Piliers : Architecture SEO, Autorité & Optimisation IA | Triaina</title>
        <meta name="description" content="Découvrez les 3 piliers de Triaina : architecture SEO, autorité média (Yonder, Les Hardis) et optimisation pour les IA génératives. Exemples pour hôtels, banques, assurances, vins." />
        <meta name="keywords" content="architecture seo, autorité domaine, seo ia, gso, référencement naturel, agence seo, yonder, les hardis" />
      </div>

      {/* ════════════ HERO SECTION ════════════ */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
         
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-8 animate-fade-in-up">
                <Layers size={12} />
                Architecture de Performance
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{animationDelay: '100ms'}}>
                LES 3 PILIERS DE<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">VOTRE DOMINATION</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <strong>Triaina</strong> repose sur une triade indissociable : un site techniquement parfait, une autorité médiatique incontestable, et une visibilité forcée dans les réponses des IA.
            </p>
         </div>
      </div>

      {/* ════════════ STICKY SCROLL CONTAINER ════════════ */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        {PILLARS_CONTENT.map((pillar, index) => (
            <div key={pillar.id} id={`pillar-${pillar.id}`} className="relative group">
                
                {/* Visual Connector Line */}
                {index !== PILLARS_CONTENT.length - 1 && (
                    <div className="absolute left-8 md:left-1/2 top-full h-32 w-px bg-gradient-to-b from-blue-200 to-transparent z-0 hidden md:block"></div>
                )}

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* LEFT COLUMN: Sticky Identity */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                        <div className="relative">
                            {/* Giant Number Background */}
                            <span className="absolute -top-20 -left-10 text-[180px] font-display font-black text-slate-100 z-0 select-none">
                                {pillar.number}
                            </span>
                            
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-500/10 flex items-center justify-center text-blue-600 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                    <pillar.icon size={32} strokeWidth={1.5} />
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                                    {pillar.title}
                                </h2>
                                <p className="text-xl text-blue-600 font-mono tracking-wide mb-8">
                                    // {pillar.tagline}
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {pillar.description}
                                </p>

                                {/* Mini Spec Grid */}
                                <div className="grid grid-cols-1 gap-4">
                                    {pillar.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/50 border border-slate-200 hover:border-blue-300 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <span className="block text-sm font-bold text-slate-900">{detail.title}</span>
                                                <span className="block text-xs text-slate-500">{detail.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Content & Interactive Examples */}
                    <div className="lg:col-span-7 pt-10 lg:pt-0">
                        
                        {/* Context Box */}
                        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-2xl mb-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"></div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Zap size={20} className="text-yellow-400 fill-yellow-400" />
                                L'Analyse Triaina
                            </h3>
                            <p className="text-slate-300 leading-relaxed font-light">
                                {pillar.mainText}
                            </p>
                        </div>

                        {/* BENTO GRID EXAMPLES */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px bg-slate-300 flex-grow"></span>
                                <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Applications Concrètes</span>
                                <span className="h-px bg-slate-300 flex-grow"></span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {pillar.examples.map((ex, i) => (
                                    <div 
                                        key={i} 
                                        className="group/card bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300"></div>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors duration-300">
                                                <ex.icon size={18} />
                                            </div>
                                            <span className="font-display font-bold text-slate-900 text-sm uppercase tracking-wide">
                                                {ex.label}
                                            </span>
                                        </div>
                                        
                                        <p className="text-sm text-slate-600 leading-relaxed group-hover/card:text-slate-900 transition-colors">
                                            {ex.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* ════════════ SYNERGY FOOTER ════════════ */}
      <section className="bg-white border-t border-slate-200 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                  La Synergie Parfaite
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>

                  {[
                      { step: "01", text: "Architecture Solide" },
                      { step: "02", text: "Autorité Maximale" },
                      { step: "03", text: "Visibilité IA" }
                  ].map((item, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center">
                          <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6">
                              <span className="text-3xl font-display font-bold text-blue-600">{item.step}</span>
                          </div>
                          <span className="font-bold text-slate-900">{item.text}</span>
                      </div>
                  ))}
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl">
                  <h3 className="font-display font-bold text-xl mb-4">Résultat : Domination Complète</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-slate-600">
                      <span className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm"><Globe size={14} className="text-blue-600"/> Google Search</span>
                      <span className="text-slate-300">+</span>
                      <span className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm"><Brain size={14} className="text-purple-600"/> IA Génératives</span>
                      <span className="text-slate-300">=</span>
                      <span className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded shadow-sm font-bold">100% VISIBILITÉ</span>
                  </div>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
                  <a href="#contact" className="group px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3">
                      Lancer l'audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#team" className="px-8 py-4 bg-white text-slate-900 border border-slate-300 font-bold uppercase tracking-widest rounded hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center">
                      Parler à un expert
                  </a>
              </div>
          </div>
      </section>

    </div>
  );
};