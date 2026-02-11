
import React from 'react';
import TechnicalSection from '../components/TechnicalSection';
import { Sparkles, Check, Search, LineChart, Plus, Minus, Cpu, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PAGE_TO_URL } from '../constants';

export const Home: React.FC<{ onNavigate: (p: any) => void }> = ({ onNavigate }) => {
  
  const MARQUEE_ITEMS = [
    "AGENCE SEO", "CONSULTANT SEO", "AUDIT SEO", "RÉFÉRENCEMENT NATUREL", 
    "STRATÉGIE SEO", "VISIBILITÉ IA", "OPTIMISATION GOOGLE", "CROISSANCE ORGANIQUE"
  ];

  const FAQ_HOME_DATA = [
    {
      question: "Qu'est ce qu'un audit SEO ?",
      answer: "Un audit SEO est un diagnostic complet de votre site web. Il analyse les problèmes techniques, on-page et de netlinking qui bloquent votre visibilité sur Google. C'est la première étape d'une stratégie SEO efficace."
    },
    {
      question: "Quel est le rôle d'un consultant SEO ?",
      answer: "Un consultant SEO analyse votre site, définit une stratégie de référencement naturel et vous accompagne dans l'amélioration de votre visibilité sur Google."
    },
    {
      question: "Pourquoi faire appel à une agence SEO ?",
      answer: "Une agence SEO possède l'expertise, les outils et l'expérience pour optimiser votre présence sur Google. Résultat : trafic organique durable et croissance."
    },
    {
      question: "Quelle est la différence entre SEO et SEO IA ?",
      answer: "Le SEO traditionnel optimise pour Google Search. Le SEO IA optimise aussi pour les IA génératives. Triaina maîtrise les deux approches."
    },
    {
      question: "Combien de temps pour voir les résultats d'une stratégie SEO ?",
      answer: "Le SEO est un investissement long terme. Généralement, les premiers résultats apparaissent après 3-6 mois. Une stratégie SEO bien exécutée génère du trafic durable pendant des années."
    }
  ];

  // Schema FAQ spécifique pour la Home (Rich Snippets)
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_HOME_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      
      <SEO 
        title="Agence SEO & GSO Paris"
        description="Agence SEO & GSO à Paris spécialisée en référencement naturel et optimisation pour les IA (Generative Search Optimization). Consultant SEO expert."
        schema={homeFaqSchema}
      />

      {/* ════════════════════ HERO HEADER ════════════════════ */}
      <header className="min-h-screen flex flex-col justify-center relative z-10 pt-20 px-4">
          <div className="max-w-7xl mx-auto w-full">
            {/* Top Tag */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                <div className="px-3 py-1 border border-blue-600/20 rounded-full bg-blue-50/50 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest">Agence SEO Paris</span>
                </div>
            </div>

            {/* Massive Typography - H1 Plain Text for SEO */}
            <h1 className="font-display font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 animate-fade-in-up w-full max-w-5xl" style={{ animationDelay: '100ms' }}>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                    AGENCE SEO
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 mt-2 sm:mt-0">
                    & GSO
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <strong>Triaina</strong> est une <strong>agence SEO</strong> spécialisée en <strong>référencement naturel</strong> et GSO (Generative Search Optimization). Nous optimisons votre visibilité sur Google et les IA.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                    className="group relative px-8 py-5 bg-blue-600 text-white font-sans font-bold tracking-wider rounded-full overflow-hidden w-full md:w-auto shadow-xl shadow-blue-600/20 hover:bg-slate-900 hover:shadow-slate-900/30 transition-all duration-300 inline-flex items-center justify-center"
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        → NOUS CONTACTER
                    </span>
                </a>
            </div>
          </div>
      </header>

      {/* --- MARQUEE SECTION --- */}
      <div className="bg-slate-900 py-4 transform -rotate-1 relative z-20 border-y-4 border-white overflow-hidden shadow-2xl shadow-slate-900/10" aria-hidden="true">
         <div className="flex whitespace-nowrap animate-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                    <span className="text-2xl font-display font-bold text-white">{item}</span>
                    <Sparkles size={16} className="text-blue-400" />
                </div>
            ))}
         </div>
      </div>

      <main>
        {/* ════════════════════ PROPOSITION DE VALEUR ════════════════════ */}
        <section className="py-24 bg-white/80 backdrop-blur-sm relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
               <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                   <div className="max-w-3xl">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                          Pourquoi choisir Triaina : <br/><span className="text-blue-600">Agence SEO, GSO, Média</span>
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed">
                          <strong>Triaina</strong> est une <strong>agence SEO</strong> basée à Paris, spécialisée en référencement naturel et IA. Nous combinons l'excellence du SEO traditionnel avec l'expertise en référencement IA (GSO).
                      </p>
                   </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8 items-center">
                  
                  {/* Liste des points forts */}
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl h-full">
                      <ul className="space-y-6">
                          {[
                              { title: "Audit SEO complet", desc: "Diagnostic technique et on-page" },
                              { title: "Stratégie de référencement naturel", desc: "Croissance organique durable" },
                              { title: "Consultant SEO expert", desc: "Accompagnement stratégique" },
                              { title: "Optimisation GSO (IA)", desc: "Visibilité sur Google ET les IA génératives" }
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                                      <Check size={16} strokeWidth={3} />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                                      <p className="text-slate-500 text-sm font-mono">→ {item.desc}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* --- BLOC OBJECTIF --- */}
                  <div className="relative overflow-hidden rounded-2xl bg-white p-10 text-center shadow-xl group border border-slate-100 h-full flex flex-col justify-center items-center">
                      
                      {/* Subtle Dynamic Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white opacity-100 transition-all duration-500 group-hover:from-blue-100/50"></div>
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>

                      <div className="relative z-10 flex flex-col items-center w-full">
                          <div className="mb-8"></div>

                          {/* REMOVED SCRAMBLE TEXT FOR SEO - Plain Text H3 */}
                          <h3 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-8 tracking-tight text-blue-600">
                              OBJECTIF
                          </h3>

                          {/* Core Message */}
                          <div className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed w-full">
                              Visibilité sur
                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                  
                                  {/* Google Box */}
                                  <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 group/google hover:border-blue-300 transition-all">
                                      <div className="bg-blue-50 p-2 rounded-full group-hover/google:scale-110 transition-transform">
                                          <Globe size={20} className="text-blue-600" />
                                      </div>
                                      <span className="font-bold text-slate-900 tracking-wide">Google</span>
                                  </div>
                                  
                                  <span className="text-slate-400 font-mono text-xl">+</span>

                                  {/* AI Box */}
                                  <div className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 group/ia hover:border-purple-300 transition-all">
                                      <div className="bg-purple-50 p-2 rounded-full group-hover/ia:scale-110 transition-transform">
                                          <Cpu size={20} className="text-purple-600" />
                                      </div>
                                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 tracking-wide">
                                          IA Génératives
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

               </div>
            </div>
        </section>

        {/* ════════════════════ SERVICES GRID ════════════════════ */}
        <section className="py-24 bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">
                  Services d'Agence SEO : <span className="text-blue-600">Audit, Stratégie, Optimisation</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Service 1 */}
                  <a 
                      href={PAGE_TO_URL['contact']}
                      onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                      className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer block"
                  >
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Search size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Audit SEO Complet</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          Diagnostic technique, on-page et netlinking. Identifiez les blocages qui empêchent votre visibilité sur <strong>Google</strong>.
                      </p>
                      <span className="text-blue-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                          → En savoir plus sur l'audit SEO
                      </span>
                  </a>

                  {/* Service 3 (Re-indexed) */}
                  <a 
                      href={PAGE_TO_URL['contact']}
                      onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                      className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer block"
                  >
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <LineChart size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Consultant SEO Spécialisé</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          Expert en <strong>référencement naturel</strong>. Accompagnement stratégique pour votre croissance organique et visibilité.
                      </p>
                      <span className="text-blue-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                          → Nous contacter
                      </span>
                  </a>
              </div>
           </div>
        </section>

        {/* ════════════════════ METHODOLOGIE (Protocole) ════════════════════ */}
        <section>
          <TechnicalSection />
        </section>

        {/* ════════════════════ EXPERTISE SECTION ════════════════════ */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                      Pourquoi Triaina est votre agence SEO de référence
                    </h2>
                    <div className="w-24 h-1 bg-blue-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <article>
                            <h3 className="text-xl font-bold text-white mb-2">SEO Technique Ultra-Performant</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                L'<strong>Agence Triaina</strong> ne se contente pas des normes. Nous rendons votre site ultra-rapide, parfaitement structuré et indexable par Google. Résultat : une <strong>indexation SEO optimale</strong> et une expérience utilisateur fluide.
                            </p>
                        </article>
                        <article>
                            <h3 className="text-xl font-bold text-white mb-2">Consultant SEO & GSO</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Notre équipe maîtrise le <strong>SEO traditionnel ET l'optimisation pour les IA (GSO)</strong>. Nous vous accompagnons dans une stratégie hybride pour dominer Google et être visible sur les IA génératives.
                            </p>
                        </article>
                    </div>
                    <div className="space-y-8">
                        <article>
                            <h3 className="text-xl font-bold text-white mb-2">Stratégie Média & Autorité</h3>
                            <p className="text-slate-400 text-sm leading-relaxed text-justify">
                                Triaina dispose d'une puissance de frappe unique. Propriétaire de médias influents (dont <strong>Yonder</strong> et <strong>Les Hardis</strong>) et dotée de sa propre régie interne, nous vous offrons un accès direct et des tarifs privilégiés sur quasiment l'ensemble de la presse premium pour bâtir votre autorité et crédibilité aux yeux de <strong>Google</strong>.
                            </p>
                        </article>
                        <article>
                            <h3 className="text-xl font-bold text-white mb-2">Agence SEO Pérenne & Sécurisée</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Nous bâtissons pour le long terme. Nos protocoles respectent scrupuleusement les règles de Google pour assurer une croissance stable et durable.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        {/* ════════════════════ FAQ SECTION (Home Specific) ════════════════════ */}
        <section className="py-24 bg-white/90 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">
                    Questions fréquentes : <span className="text-blue-600">SEO, Audit et GSO</span>
                </h2>
                
                <div className="space-y-4">
                    {FAQ_HOME_DATA.map((item, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-300">
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full p-6 text-left flex justify-between items-center bg-slate-50 hover:bg-white transition-colors ${isOpen ? 'bg-white' : ''}`}
                                >
                                    <h3 className="text-lg font-bold text-slate-900 pr-8">{item.question}</h3>
                                    <div className="text-blue-600">
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 text-sm">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* ════════════════════ CTA FINAL ════════════════════ */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                    Prêt à dominer <span className="text-blue-600">Google & les IA</span> ?
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                    <strong>Triaina</strong> est votre <strong>agence SEO</strong> de référence. Nous combinons expertise en <strong>référencement naturel</strong> et optimisation pour les IA génératives (GSO).
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={PAGE_TO_URL['contact']}
                        onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                        className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 inline-flex items-center justify-center"
                    >
                        → Nous contacter
                    </a>
                </div>
            </div>
        </section>
      </main>

      {/* Footer Strip */}
      <footer className="bg-slate-900 text-white py-4 text-center border-t border-slate-800 relative z-20">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-slate-400">
            50 Quai Louis Blériot, 75016 Paris — Agence SEO & GSO
        </p>
      </footer>

    </div>
  );
};
