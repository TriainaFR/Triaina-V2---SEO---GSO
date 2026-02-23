
import React from 'react';
import { PAGE_TO_URL } from '../constants';
import { 
  ArrowRight, Search, MapPin, BarChart3, 
  Cpu, FileText, Globe, Database
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface SeoParisProps {
  onNavigate: (p: any) => void;
}

export const SeoParis: React.FC<SeoParisProps> = ({ onNavigate }) => {
  
  // DONNÉES STRUCTURÉES COMBINÉES
  const seoSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "Triaina",
            "url": "https://www.triaina.fr",
            "logo": "https://www.triaina.fr/logo.png",
            "description": "Agence SEO et GSO spécialisée en référencement naturel à Paris",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "50 Quai Louis Blériot",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "postalCode": "75016",
                "addressCountry": "FR"
            },
            "sameAs": [
                "https://www.linkedin.com/company/triaina",
                "https://twitter.com/triaina",
                "https://www.facebook.com/triaina"
            ]
        },
        {
            "@type": "LocalBusiness",
            "name": "Triaina - Agence SEO Paris",
            "image": "https://www.triaina.fr/images/agence-seo-paris.jpg",
            "description": "Agence SEO spécialisée en référencement naturel à Paris",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "50 Quai Louis Blériot",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "postalCode": "75016",
                "addressCountry": "FR"
            },
            "url": "https://www.triaina.fr/agence-seo-paris",
            "priceRange": "€€€",
            "areaServed": ["Paris", "Île-de-France", "France"],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "52"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        },
        {
            "@type": "Service",
            "name": "Agence SEO - Référencement Naturel",
            "description": "Service de référencement naturel (SEO) pour dominer Google Search à Paris",
            "provider": {
                "@type": "Organization",
                "name": "Triaina"
            },
            "areaServed": {
                "@type": "City",
                "name": "Paris"
            },
            "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "1000",
                "priceValidUntil": "2025-12-31",
                "description": "Accompagnement SEO mensuel à partir de 1000€"
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://www.triaina.fr"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Agence",
                    "item": "https://www.triaina.fr/agence"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Agence SEO Paris",
                    "item": "https://www.triaina.fr/agence-seo-paris"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien de temps pour voir les résultats du SEO ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (position 1-10) prennent 3-6 mois. L'impact maximal se mesure à 6-12 mois."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien coûte une stratégie SEO à Paris ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nos tarifs commencent à partir de 1000€/mois pour un accompagnement SEO continu. Un audit SEO complet coûte 3000€. Ces tarifs dépendent de votre secteur et de vos objectifs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Pouvez-vous garantir les résultats du SEO ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, personne ne peut garantir des résultats en SEO. Mais nous garantissons une stratégie solide, du contenu de qualité, et un suivi rigoureux."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Pourquoi le SEO est-il meilleur que Google Ads ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le SEO génère du trafic gratuit à long terme. Google Ads coûte cher et s'arrête dès que vous arrêtez de payer. Le SEO continue à générer du trafic pendant des années."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Travaillez-vous avec d'autres agences SEO ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, nous pouvons travailler en complément d'une autre agence. Nous nous intégrons facilement dans votre écosystème digital."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est votre garantie de satisfaction ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nous garantissons une augmentation mesurable de votre trafic organique. Si vous n'êtes pas satisfait après 3 mois, nous discutons d'ajustements ou d'une résiliation sans pénalité."
                    }
                }
            ]
        },
        {
            "@type": "Article",
            "headline": "Agence SEO Paris : Référencement Naturel & GSO",
            "description": "Guide complet sur le SEO à Paris et comment une agence SEO peut augmenter votre visibilité sur Google Search",
            "image": "https://www.triaina.fr/images/agence-seo-paris.jpg",
            "datePublished": "2025-02-19",
            "dateModified": "2025-02-19",
            "author": {
                "@type": "Organization",
                "name": "Triaina",
                "url": "https://www.triaina.fr"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Triaina",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.triaina.fr/logo.png"
                }
            }
        }
    ]
  };

  return (
    <div className="pt-24 md:pt-36 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden font-sans">
        
        <SEO 
            title="Agence SEO Paris : Référencement Naturel & GSO | Triaina"
            description="Agence SEO à Paris. Stratégie SEO sur mesure, audit 3000€. À partir de 1000€/mois. Experts en référencement naturel et GSO. Triaina."
            schema={seoSchema}
            image="https://www.triaina.fr/images/agence-seo-paris.jpg"
        />
        
        {/* HERO */}
        <div className="mb-16 md:mb-24 animate-fade-in-up w-full text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                <MapPin size={12} className="flex-shrink-0" />
                <span className="truncate">Paris & Île-de-France</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 leading-tight break-words hyphens-auto w-full">
                Agence SEO Paris : <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 break-words">
                    Référencement Naturel & GSO
                </span>
            </h1>
            
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 mt-8">Introduction</h2>
            
            <div className="max-w-4xl mx-auto md:mx-0 text-lg md:text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-4 md:pl-6 break-words space-y-4">
                <p>
                    Bienvenue chez <strong>Triaina</strong>, votre <strong>agence SEO à Paris</strong> spécialisée en référencement naturel et Generative Search Optimization. Depuis plus de 5 ans, nous aidons les entreprises parisiennes à dominer les résultats de recherche Google et les moteurs de recherche IA.
                </p>
                <p>
                    Le référencement naturel (SEO) est l'investissement le plus rentable pour votre visibilité en ligne. Contrairement aux campagnes publicitaires payantes, le SEO génère du trafic qualifié 24h/24, 7j/7, sans coût par clic. Une bonne stratégie SEO peut multiplier votre trafic organique par 2 à 3 en 6 mois.
                </p>
                <p>
                    Chez Triaina, nous combinons le <strong>SEO traditionnel</strong> avec le <strong>GSO (Generative Search Optimization)</strong> pour vous assurer une visibilité maximale sur tous les canaux de recherche : Google Search, ChatGPT, Perplexity, Claude et Google AI Overview.
                </p>
                <p>
                    Nous travaillons avec des entreprises de tous les secteurs : e-commerce, services, B2B, santé, immobilier, etc. Notre approche est personnalisée, basée sur les données, et orientée vers les résultats mesurables.
                </p>
            </div>
        </div>

        {/* SERVICES SEO */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '100ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12">Services SEO : Dominez Google Search</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "Audit SEO complet", desc: "Nous commençons par un audit SEO détaillé de votre site. Cet audit analyse la crawlabilité, l'indexation, les mots-clés, les backlinks, la technique, le contenu et la concurrence. Résultat : Un rapport détaillé avec 20-30 recommandations prioritaires.", icon: Search },
                    { title: "Optimisation on-page", desc: "L'optimisation on-page consiste à améliorer chaque page de votre site pour les moteurs de recherche : titres, meta descriptions, structure H1/H2/H3, contenu long-form, images optimisées, liens internes, données structurées et E-E-A-T.", icon: FileText },
                    { title: "Création de contenu SEO", desc: "Le contenu est roi en SEO. Nous créons du contenu optimisé pour les mots-clés que vous visez : articles de blog (2 000+ mots), guides complets, cas clients, FAQ optimisées pour les featured snippets, et contenu vidéo avec transcriptions.", icon: Database },
                    { title: "Netlinking & construction de backlinks", desc: "Les backlinks sont essentiels pour ranker. Nous construisons votre profil de liens de qualité via des backlinks éditoriaux, annuaires de qualité, partenariats, communiqués de presse et guest posting.", icon: Globe },
                    { title: "Suivi et reporting", desc: "Nous trackons vos performances SEO mensuellement : positions sur vos mots-clés cibles, augmentation du trafic organique, conversions générées, et rapports détaillés avec recommandations.", icon: BarChart3 }
                ].map((service, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <service.icon size={24} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc.replace('Résultat', '<strong>Résultat</strong>') }}></p>
                    </div>
                ))}
            </div>
        </div>

        {/* SERVICES GSO */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12">Services GSO : Dominez les moteurs de recherche IA</h2>
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { title: "Optimisation pour ChatGPT, Perplexity et Claude", desc: "Le GSO est la nouvelle discipline du référencement. Nous optimisons votre contenu pour être cité par les moteurs de recherche IA : contenu clair et structuré, E-E-A-T renforcé, données structurées (schema.org), et netlinking stratégique." },
                        { title: "Audit de présence IA", desc: "Nous analysons votre présence actuelle dans les moteurs de recherche IA : vérification de vos citations dans ChatGPT, Perplexity, Claude et Google AI Overview." },
                        { title: "Stratégie GSO intégrée", desc: "Nous créons une stratégie GSO qui complète votre SEO : contenu long-form (2 000+ mots), FAQ structurées, guides pratiques détaillés, et cas clients avec résultats mesurables." }
                    ].map((service, i) => (
                        <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-4 text-blue-300">{service.title}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* PROCESSUS */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center">Notre processus SEO & GSO</h2>
            <div className="space-y-6">
                {[
                    { title: "Phase 1 : Audit et stratégie (Semaines 1-2)", desc: "Audit SEO complet, audit GSO, analyse concurrentielle, identification des 50-100 mots-clés prioritaires, et création d'une stratégie SEO + GSO personnalisée." },
                    { title: "Phase 2 : Optimisation technique (Semaines 2-4)", desc: "Correction des erreurs d'indexation, optimisation de la vitesse de chargement, amélioration du mobile-friendliness, ajout de données structurées, et optimisation des Core Web Vitals." },
                    { title: "Phase 3 : Création et optimisation de contenu (Semaines 5-12)", desc: "Création de 10-15 articles optimisés SEO + GSO, optimisation de vos pages existantes, création de guides complets et cas clients, et optimisation E-E-A-T." },
                    { title: "Phase 4 : Netlinking et amplification (Semaines 4-16)", desc: "Création de 15-20 backlinks de qualité, partenariats avec blogs influents, communiqués de presse, et amplification sur les réseaux sociaux." },
                    { title: "Phase 5 : Suivi et optimisation continue (Mois 3-6+)", desc: "Suivi mensuel des positions et du trafic, tests A/B de contenu, ajustements de stratégie basés sur les résultats, et rapports mensuels détaillés." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 rounded-lg bg-white hover:border-blue-400 transition-all">
                        <div className="md:w-1/4">
                             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full mb-2 md:mb-0">
                                 Étape 0{i+1}
                             </span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CAS CLIENTS */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12">Cas clients : Résultats réels à Paris</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Cas 1 : Agence immobilière Paris", initial: "8 000 clics/mois, présence faible sur \"agence immobilière paris\", site ancien avec contenu peu optimisé.", result: "+5 000 clics/mois (8 000 → 13 000 clics/mois), position 1-3 sur \"agence immobilière paris\", +42 ventes immobilières supplémentaires/an." },
                    { title: "Cas 2 : Cabinet d'avocats Paris", initial: "12 000 clics/mois, pas de présence sur \"avocat paris\", contenu généraliste.", result: "+3 200 clics/mois (12 000 → 15 200 clics/mois), position 5-8 sur \"avocat paris\", +28 nouveaux clients/an." },
                    { title: "Cas 3 : E-commerce Paris", initial: "45 000 clics/mois, aucune présence sur les mots-clés commerciaux prioritaires, site technique obsolète.", result: "+18 000 clics/mois (45 000 → 63 000 clics/mois), position 1-5 sur 30 mots-clés commerciaux, +850 000€ de chiffre d'affaires supplémentaire." }
                ].map((cas, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all">
                        <h3 className="font-bold text-lg text-blue-700 mb-4 uppercase tracking-wide">{cas.title}</h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="block font-bold text-slate-900 mb-1">Situation initiale :</span>
                                <p className="text-slate-600">{cas.initial}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200">
                                <span className="block font-bold text-green-600 mb-1">Résultats :</span>
                                <p className="text-slate-900 font-medium">{cas.result}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* LOCALISATION */}
        <div className="mb-20 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm animate-fade-in-up" style={{animationDelay: '500ms'}}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Localisation : Pourquoi choisir une agence SEO à Paris ?
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
                <p>
                    Nous sommes basés à Paris et connaissons le marché parisien. Nous avons travaillé avec des centaines d'entreprises parisiennes dans tous les secteurs. Paris est un marché très compétitif, et nous savons comment ranker sur des mots-clés comme "agence seo paris", "avocat paris", "plombier paris".
                </p>
                <p>
                    Vous pouvez nous rencontrer en personne pour discuter de votre stratégie. Nous avons un réseau de partenaires à Paris (blogs, agences, influenceurs) qui nous permet de construire des backlinks de qualité. Nous sommes disponibles pour des réunions, des appels et des discussions en temps réel.
                </p>
            </div>
        </div>

        {/* FAQ */}
        <div className="mb-20 animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center">FAQ : Vos questions sur le SEO à Paris</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {[
                    { q: "Q1 : Combien de temps pour voir les résultats du SEO ?", a: "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (position 1-10) prennent 3-6 mois. L'impact maximal se mesure à 6-12 mois." },
                    { q: "Q2 : Combien coûte une stratégie SEO à Paris ?", a: "Nos tarifs commencent à partir de <strong>1 000€/mois</strong> pour un accompagnement SEO continu. Un <strong>audit SEO complet</strong> coûte <strong>3 000€</strong>. Ces tarifs dépendent de votre secteur et de vos objectifs. Nous proposons une consultation gratuite pour évaluer vos besoins." },
                    { q: "Q3 : Pouvez-vous garantir les résultats du SEO ?", a: "Non, personne ne peut garantir des résultats en SEO. Mais nous garantissons une stratégie solide, du contenu de qualité, et un suivi rigoureux." },
                    { q: "Q4 : Pourquoi le SEO est-il meilleur que Google Ads ?", a: "Le SEO génère du trafic gratuit à long terme. Google Ads coûte cher (5-20€ par clic) et s'arrête dès que vous arrêtez de payer. Le SEO continue à générer du trafic pendant des années." },
                    { q: "Q5 : Travaillez-vous avec d'autres agences SEO ?", a: "Oui, nous pouvons travailler en complément d'une autre agence. Nous nous intégrons facilement dans votre écosystème digital." },
                    { q: "Q6 : Quelle est votre garantie de satisfaction ?", a: "Nous garantissons une augmentation mesurable de votre trafic organique. Si vous n'êtes pas satisfait après 3 mois, nous discutons d'ajustements ou d'une résiliation sans pénalité." }
                ].map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors">
                        <div className="p-6">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{item.q}</h3>
                            <div className="text-slate-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.a.replace('R :', '') }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-16 text-center text-white shadow-2xl animate-fade-in-up" style={{animationDelay: '700ms'}}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-6">Demander une consultation gratuite</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-light">
                Vous voulez savoir comment ranker sur "agence seo paris" ou vos mots-clés cibles ? Nous offrons une <strong>consultation gratuite</strong> de 30 minutes.<br/><br/>
                Nous analyserons votre position actuelle, identifierons 5 opportunités rapides pour améliorer votre visibilité, et créerons un plan d'action personnalisé pour les 3 prochains mois.
            </p>
            <a 
                href={PAGE_TO_URL['contact']}
                onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-3"
            >
                Demander la consultation gratuite <ArrowRight size={20} />
            </a>
        </div>

        {/* MAILLAGE */}
        <div className="py-24 animate-fade-in-up text-center" style={{animationDelay: '800ms'}}>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Découvrez nos autres services</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {[
                    { label: "En savoir plus sur notre agence", link: 'team' },
                    { label: "Expertise SEO", link: 'expertise-seo' },
                    { label: "Expertise GSO", link: 'expertise-gso' },
                    { label: "Expertise SEA", link: 'expertise-sea' },
                    { label: "Voir nos cas clients", link: 'references' },
                    { label: "Nous contacter", link: 'contact' }
                ].map((item, i) => (
                    <a 
                        key={i}
                        href={PAGE_TO_URL[item.link]}
                        onClick={(e) => { e.preventDefault(); onNavigate(item.link); }}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>

    </div>
  );
};
