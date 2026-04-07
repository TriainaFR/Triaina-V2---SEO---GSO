import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Users, CheckCircle2, TrendingUp, Award, Zap, BarChart3, 
  Globe, MessageSquare, ChevronDown
} from 'lucide-react';
import { PAGE_TO_URL } from '../constants';

interface ExpertiseMediaProps {
  onNavigate: (p: any) => void;
}

export const ExpertiseMedia: React.FC<ExpertiseMediaProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const mediaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.triaina.fr/expertise-media#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.triaina.fr" },
          { "@type": "ListItem", "position": 2, "name": "Expertise", "item": "https://www.triaina.fr/expertise" },
          { "@type": "ListItem", "position": 3, "name": "Expertise Média", "item": "https://www.triaina.fr/expertise-media" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.triaina.fr/expertise-media#article",
        "isPartOf": { "@id": "https://www.triaina.fr/expertise-media" },
        "headline": "Expertise Média : L'Avantage Compétitif de Triaina en SEO & GSO",
        "description": "Expertise média Triaina : propriétaires de médias, nous générons des backlinks naturels, construisons l'E-E-A-T et créons une présence médiatique pour dominer le SEO et le GSO.",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.triaina.fr/images/expertise-media-og.jpg",
          "width": 1200,
          "height": 630
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.triaina.fr/#organization",
          "name": "Triaina",
          "url": "https://www.triaina.fr",
          "logo": { "@type": "ImageObject", "url": "https://www.triaina.fr/logo.png", "width": 250, "height": 60 }
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.triaina.fr/#organization"
        },
        "datePublished": "2026-03-14",
        "dateModified": "2026-03-14",
        "wordCount": 2200,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.triaina.fr/expertise-media"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.triaina.fr/expertise-media#product",
        "name": "Expertise Média : SEO & GSO",
        "description": "Propriétaires de médias, nous générons des backlinks naturels, construisons l'E-E-A-T et créons une présence médiatique pour dominer le SEO et le GSO.",
        "image": "https://www.triaina.fr/images/expertise-media-og.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Triaina"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "3000",
          "highPrice": "36000",
          "offerCount": 3,
          "offers": [
            { "@type": "Offer", "name": "Audit Média", "description": "Audit SEO, GSO et stratégie médiatique complet", "price": "3000", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://www.triaina.fr/expertise-media#audit-media" },
            { "@type": "Offer", "name": "Stratégie Média (3 mois)", "description": "Stratégie + publication d'articles + netlinking", "price": "12000", "priceCurrency": "EUR", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://www.triaina.fr/expertise-media#strategie-media" },
            { "@type": "Offer", "name": "Accompagnement Média (6-12 mois)", "description": "Accompagnement long terme avec netlinking intensif", "price": "36000", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "url": "https://www.triaina.fr/expertise-media#accompagnement-media" }
          ]
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "47", "bestRating": "5", "worstRating": "1" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.triaina.fr/expertise-media#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Combien de backlinks pouvez-vous générer ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous pouvons générer 30-60 backlinks/mois depuis nos médias, selon votre package. Ces backlinks sont naturels et de haute qualité, provenant de vrais articles dans des médias réels avec une autorité établie." } },
          { "@type": "Question", "name": "Combien de temps pour voir les résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Les premiers résultats (améliorations techniques) apparaissent en 2-4 semaines. Les résultats significatifs (trafic, rankings) prennent 3-6 mois selon votre situation initiale et votre secteur." } },
          { "@type": "Question", "name": "Quel est le ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Le ROI est excellent. En moyenne, nos clients voient une augmentation de 200-400% du trafic organique en 6 mois, avec certains clients atteignant +600%." } },
          { "@type": "Question", "name": "Pouvez-vous garantir des résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, nous ne garantissons pas de résultats spécifiques. Mais nous visons des objectifs mesurables basés sur votre situation actuelle et nous avons un track record solide avec plus de 50 clients satisfaits." } },
          { "@type": "Question", "name": "Comment fonctionne le netlinking depuis vos médias ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous publions des articles dans nos médias qui mentionnent vos clients de manière naturelle et pertinente. Ces articles génèrent des backlinks vers vos sites, construisant ainsi votre autorité de domaine." } },
          { "@type": "Question", "name": "Les backlinks sont-ils naturels ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, absolument. Ils viennent de vrais articles dans des médias réels avec une autorité établie. Google et les IA génératives les reconnaissent comme naturels et pertinents." } },
          { "@type": "Question", "name": "Pouvez-vous aider avec la présence médiatique ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est notre spécialité. Nous créons une présence médiatique pour vos clients en les mentionnant dans nos médias et en créant des partenariats avec d'autres médias et éditeurs." } },
          { "@type": "Question", "name": "Combien de temps dure un accompagnement ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous recommandons un accompagnement de 6-12 mois minimum pour voir des résultats significatifs. Après cela, vous pouvez continuer en mode maintenance ou arrêter." } },
          { "@type": "Question", "name": "Pouvez-vous former notre équipe ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, nous offrons une formation complète à votre équipe SEO/GSO. Notre objectif est votre autonomie progressive et votre capacité à gérer le SEO/GSO en interne." } },
          { "@type": "Question", "name": "Quels sont les risques ?", "acceptedAnswer": { "@type": "Answer", "text": "Aucun risque si vous suivez les bonnes pratiques. Nous respectons toujours les guidelines de Google et les bonnes pratiques SEO/GSO. Pas de techniques black hat." } }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.triaina.fr/#organization",
        "name": "Triaina",
        "url": "https://www.triaina.fr",
        "logo": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO et GSO propriétaire de médias. Expertise média unique pour dominer Google et les IA génératives.",
        "foundingDate": "2020",
        "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "telephone": "+33-XXX-XXX-XXX", "email": "contact@triaina.fr" },
        "sameAs": ["https://www.linkedin.com/company/triaina", "https://twitter.com/triaina", "https://www.facebook.com/triaina"],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "47" }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.triaina.fr/#localbusiness",
        "name": "Triaina",
        "image": "https://www.triaina.fr/logo.png",
        "description": "Agence SEO et GSO propriétaire de médias",
        "url": "https://www.triaina.fr",
        "telephone": "+33-XXX-XXX-XXX",
        "email": "contact@triaina.fr",
        "address": { "@type": "PostalAddress", "streetAddress": "XXX rue XXX", "addressLocality": "Paris", "addressRegion": "Île-de-France", "postalCode": "75000", "addressCountry": "FR" },
        "areaServed": { "@type": "Country", "name": "FR" }
      }
    ]
  };

  const faqs = [
    { q: "Combien de backlinks pouvez-vous générer ?", a: "Nous pouvons générer 30-60 backlinks/mois depuis nos médias, selon votre package. Ces backlinks sont naturels et de haute qualité, provenant de vrais articles dans des médias réels avec une autorité établie." },
    { q: "Combien de temps pour voir les résultats ?", a: "Les premiers résultats (améliorations techniques) apparaissent en 2-4 semaines. Les résultats significatifs (trafic, rankings) prennent 3-6 mois selon votre situation initiale et votre secteur." },
    { q: "Quel est le ROI ?", a: "Le ROI est excellent. En moyenne, nos clients voient une augmentation de 200-400% du trafic organique en 6 mois, avec certains clients atteignant +600%." },
    { q: "Pouvez-vous garantir des résultats ?", a: "Non, nous ne garantissons pas de résultats spécifiques. Mais nous visons des objectifs mesurables basés sur votre situation actuelle et nous avons un track record solide avec plus de 50 clients satisfaits." },
    { q: "Comment fonctionne le netlinking depuis vos médias ?", a: "Nous publions des articles dans nos médias qui mentionnent vos clients de manière naturelle et pertinente. Ces articles génèrent des backlinks vers vos sites, construisant ainsi votre autorité de domaine." },
    { q: "Les backlinks sont-ils naturels ?", a: "Oui, absolument. Ils viennent de vrais articles dans des médias réels avec une autorité établie. Google et les IA génératives les reconnaissent comme naturels et pertinents." },
    { q: "Pouvez-vous aider avec la présence médiatique ?", a: "Oui, c'est notre spécialité. Nous créons une présence médiatique pour vos clients en les mentionnant dans nos médias et en créant des partenariats avec d'autres médias et éditeurs." },
    { q: "Combien de temps dure un accompagnement ?", a: "Nous recommandons un accompagnement de 6-12 mois minimum pour voir des résultats significatifs. Après cela, vous pouvez continuer en mode maintenance ou arrêter." },
    { q: "Pouvez-vous former notre équipe ?", a: "Oui, nous offrons une formation complète à votre équipe SEO/GSO. Notre objectif est votre autonomie progressive et votre capacité à gérer le SEO/GSO en interne." },
    { q: "Quels sont les risques ?", a: "Aucun risque si vous suivez les bonnes pratiques. Nous respectons toujours les guidelines de Google et les bonnes pratiques SEO/GSO. Pas de techniques black hat." }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 px-4 md:px-6 min-h-screen max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
      <SEO 
        title="Expertise Média : L'Avantage Compétitif de Triaina en SEO & GSO"
        description="Expertise média Triaina : propriétaires de médias, nous générons des backlinks naturels, construisons l'E-E-A-T et créons une présence médiatique. +200-600% de trafic en 6 mois."
        schema={mediaSchema}
        canonicalUrl="https://www.triaina.fr/expertise-media"
      />

      {/* HERO */}
      <div className="mb-16 md:mb-24 animate-fade-in-up w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-mono tracking-widest uppercase mb-6 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
          <Users size={12} className="flex-shrink-0" />
          <span className="truncate">Digital PR & Influence</span>
        </div>
        
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 mb-6 leading-tight md:leading-[1.1] break-words hyphens-auto w-full">
          EXPERTISE MÉDIA : <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 break-words">
            L'AVANTAGE COMPÉTITIF EN SEO & GSO
          </span>
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed font-light border-l-4 border-blue-600 pl-4 md:pl-6 break-words">
          <strong>Triaina</strong> est propriétaire de plusieurs médias et éditeurs. Cette expertise médiatique nous donne un avantage compétitif unique : nous contrôlons l'autorité de marque (E-E-A-T), le netlinking, la présence médiatique et les signaux de confiance. Nous utilisons cet avantage pour aider nos clients à dominer le SEO et le GSO.
        </p>
        <div className="mt-6 inline-block bg-blue-50 text-blue-800 px-4 py-3 rounded-lg font-medium border border-blue-100">
          Résultat : nos clients voient une augmentation de 200-400% du trafic organique en 6 mois.
        </div>
      </div>

      {/* INTRO */}
      <div className="mb-16 md:mb-24 bg-white p-6 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up w-full" style={{animationDelay: '100ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-6 break-words hyphens-auto">
          Pourquoi l'Expertise Média Change Tout
        </h2>
        <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-6 font-light break-words">
          <p>
            En 2026, le <strong>SEO</strong> et le <strong>GSO</strong> ne sont plus seulement une question de technique et de contenu. C'est une question d'<strong>autorité</strong>, de <strong>confiance</strong> et de <strong>présence médiatique</strong>.
          </p>
          <p>
            Google et les <strong>IA génératives</strong> (ChatGPT, Gemini, Perplexity) favorisent les sites avec une forte autorité de marque. Mais comment construire cette autorité rapidement ?
          </p>
          <p className="font-medium text-blue-700">
            C'est là que notre <strong>expertise média</strong> fait la différence.
          </p>
          <p>
            Chez Triaina, nous ne sommes pas juste une <strong>agence SEO</strong> ou une <strong>agence GSO</strong>. Nous sommes aussi <strong>propriétaires de médias et d'éditeurs</strong>. Cela signifie que nous contrôlons :
          </p>
          <ul className="space-y-3 mt-4">
            {[
              "L'autorité de marque (E-E-A-T) : Nous savons comment construire et démontrer l'expertise",
              "Le netlinking : Nous pouvons générer des backlinks depuis nos propres médias",
              "La présence médiatique : Nous avons des relations avec d'autres médias et éditeurs",
              "Les signaux de confiance : Nous savons comment construire la confiance auprès de Google et des IA"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                <CheckCircle2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="flex-1 min-w-0 break-words"><strong>{item.split(' : ')[0]}</strong> : {item.split(' : ')[1]}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-medium">
            Cette expertise médiatique nous permet d'aider nos clients de manière que les autres agences ne peuvent pas faire.
          </p>
        </div>
      </div>

      {/* WHAT IS IT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '200ms'}}>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 break-words">
            Qu'est-ce que l'Expertise Média chez Triaina ?
          </h2>
          <h3 className="font-bold text-lg text-slate-900 mb-3">Définition</h3>
          <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base break-words">
            L'<strong>expertise média</strong> chez Triaina est notre capacité à utiliser notre contrôle de médias et d'éditeurs pour aider nos clients à dominer le <strong>SEO</strong> et le <strong>GSO</strong>.
          </p>
          <h3 className="font-bold text-lg text-slate-900 mb-3">Concrètement, cela signifie :</h3>
          <ul className="space-y-3 mb-8">
            {[
              "Nous sommes propriétaires de médias : Nous contrôlons plusieurs sites d'actualités et d'éditeurs avec une forte autorité",
              "Nous utilisons cette autorité pour nos clients : Nous générons des backlinks depuis nos médias vers les sites de nos clients",
              "Nous construisons l'E-E-A-T : Nous aidons nos clients à démontrer leur expertise et leur autorité",
              "Nous créons une présence médiatique : Nous mentionnons nos clients dans nos médias, créant ainsi des signaux de confiance",
              "Nous optimisons pour Google et les IA : Nous utilisons notre expertise pour optimiser à la fois pour Google et pour les IA génératives"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="flex-1 min-w-0 break-words"><strong>{item.split(' : ')[0]}</strong> : {item.split(' : ')[1]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
          <h3 className="font-bold text-xl text-slate-900 mb-4">Pourquoi c'est un Avantage Compétitif Unique</h3>
          <p className="text-slate-600 mb-4 text-sm md:text-base">La plupart des <strong>agences SEO</strong> et <strong>agences GSO</strong> ne peuvent pas faire cela. Elles doivent :</p>
          <ul className="space-y-4 mb-6">
            {[
              { title: "Acheter des backlinks", desc: "Coûteux et risqué" },
              { title: "Négocier avec d'autres sites", desc: "Difficile et lent" },
              { title: "Construire l'autorité de zéro", desc: "Très long (6-12 mois minimum)" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <span className="flex-1 min-w-0 break-words"><strong>{item.title}</strong> : {item.desc}</span>
              </li>
            ))}
          </ul>
          <div className="bg-blue-100/50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium text-sm md:text-base">
              Chez Triaina, nous avons déjà l'autorité. Nous pouvons l'utiliser immédiatement pour nos clients.
            </p>
          </div>
        </div>
      </div>

      {/* HOW WE USE IT */}
      <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '300ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-12 break-words">
          Comment Nous Utilisons Notre Expertise Média pour Vos Clients
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "1. Netlinking depuis nos Médias",
              desc: "Nous générons des backlinks de haute qualité depuis nos propres médias vers les sites de nos clients.",
              points: [
                "Backlinks naturels : Ils viennent de vrais articles, pas de répertoires ou de sites de spam",
                "Autorité élevée : Nos médias ont une forte autorité (DA 40+)",
                "Pertinence : Nous créons des articles pertinents qui mentionnent nos clients",
                "Rapidité : Nous pouvons générer des backlinks en quelques jours, pas en quelques mois",
                "Contrôle : Nous contrôlons totalement le processus"
              ],
              result: "Vos clients voient une augmentation rapide de leur autorité de domaine."
            },
            {
              title: "2. Construction de l'E-E-A-T",
              desc: "Nous aidons nos clients à démontrer leur expertise, expérience, autorité et fiabilité (E-E-A-T).",
              points: [
                "Mentions dans nos médias : Nous mentionnons nos clients comme des experts dans nos articles",
                "Interviews et témoignages : Nous interviewons nos clients et partageons leurs témoignages",
                "Données propriétaires : Nous aidons nos clients à créer et partager des données propriétaires",
                "Cas clients : Nous documentons les succès de nos clients"
              ],
              result: "Google et les IA génératives reconnaissent vos clients comme des experts."
            },
            {
              title: "3. Présence Médiatique",
              desc: "Nous créons une présence médiatique pour nos clients.",
              points: [
                "Articles dans nos médias : Nous publions des articles sur nos clients dans nos médias",
                "Mentions de marque : Nous créons des mentions de marque dans nos articles",
                "Couverture médiatique : Nous couvrons les actualités de nos clients",
                "Partenariats médiatiques : Nous créons des partenariats entre nos clients et d'autres médias"
              ],
              result: "Vos clients deviennent visibles dans les médias, ce qui augmente leur autorité et leur confiance."
            },
            {
              title: "4. Optimisation GSO",
              desc: "Nous optimisons le contenu de nos clients pour les IA génératives (ChatGPT, Gemini, Perplexity).",
              points: [
                "Contenu original : Nous créons du contenu original et unique pour nos clients",
                "Données propriétaires : Nous aidons nos clients à intégrer des données propriétaires",
                "Citations IA : Nous optimisons pour les citations dans les IA génératives",
                "Fraîcheur : Nous assurons que le contenu est à jour et frais"
              ],
              result: "Vos clients sont cités par les IA génératives, générant du trafic direct."
            },
            {
              title: "5. Audit SEO Spécialisé",
              desc: "Nous réalisons un audit SEO spécialisé basé sur notre expertise médiatique.",
              points: [
                "Autorité actuelle : Où en êtes-vous maintenant ?",
                "Opportunités de netlinking : Où pouvons-nous générer des backlinks ?",
                "E-E-A-T : Comment pouvons-nous construire votre expertise ?",
                "Présence médiatique : Comment pouvons-nous vous rendre visible dans les médias ?",
                "Optimisation GSO : Comment pouvons-nous optimiser pour les IA ?"
              ],
              result: "Un plan d'action clair basé sur notre expertise médiatique."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-3 break-words">{item.title}</h3>
              <p className="text-slate-600 mb-6">{item.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-3">Comment / Avantages :</h4>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>{point.split(' : ')[0]}</strong> : {point.split(' : ')[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg flex flex-col justify-center border border-slate-100">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-2">Résultat :</h4>
                  <p className="text-blue-700 font-medium">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* METHODOLOGY */}
      <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '400ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-12 break-words">Processus d'Accompagnement</h2>
        <div className="space-y-6">
          {[
            { 
              step: "Phase 1", 
              title: "Audit Média (Semaines 1-4)", 
              details: [
                { title: "Semaine 1-2 : Analyse complète", items: ["Audit SEO complet", "Audit GSO complet", "Analyse de votre autorité actuelle", "Identification des opportunités de netlinking"] },
                { title: "Semaine 3 : Stratégie médiatique", items: ["Sélection des médias partenaires", "Planification des articles de couverture", "Stratégie de mentions de marque", "Plan de construction de l'E-E-A-T"] },
                { title: "Semaine 4 : Recommandations", items: ["Rapport détaillé (50-100 pages)", "Plan d'action sur 6-12 mois", "Stratégie de netlinking médiatique", "Baseline pour mesurer les résultats"] }
              ]
            },
            { 
              step: "Phase 2", 
              title: "Mise en Place (Semaines 5-8)", 
              details: [
                { title: "Semaine 5-6 : Préparation", items: ["Mise en place des outils", "Formation de votre équipe", "Création du calendrier éditorial", "Identification des sujets pour les articles médiatiques"] },
                { title: "Semaine 7-8 : Démarrage", items: ["Publication des premiers articles dans nos médias", "Génération des premiers backlinks", "Création des premières mentions de marque", "Optimisation du contenu pour les IA"] }
              ]
            },
            { 
              step: "Phase 3", 
              title: "Exécution (Mois 3-6)", 
              details: [
                { title: "Mois 3-4 : Netlinking intensif", items: ["Publication d'articles dans nos médias", "Génération de 30-50 backlinks/mois", "Création de mentions de marque", "Optimisation on-page"] },
                { title: "Mois 5-6 : Amplification", items: ["Partenariats avec d'autres médias", "Couverture médiatique accrue", "Construction de l'E-E-A-T", "Optimisation GSO complète"] }
              ]
            },
            { 
              step: "Phase 4", 
              title: "Monitoring (Mois 7-12)", 
              details: [
                { title: "Mois 7-12 : Suivi et optimisation", items: ["Monitoring des rankings", "Suivi des citations IA", "Analyse du trafic", "Rapports mensuels", "Optimisations continues"] }
              ]
            }
          ].map((phase, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">{phase.step}</span>
                <h3 className="font-bold text-xl md:text-2xl text-slate-900">{phase.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.details.map((detail, j) => (
                  <div key={j}>
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">{detail.title}</h4>
                    <ul className="space-y-2">
                      {detail.items.map((item, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDIES */}
      <div className="mb-16 md:mb-24 bg-slate-900 text-white p-6 md:p-12 rounded-3xl relative overflow-hidden animate-fade-in-up w-full" style={{animationDelay: '500ms'}}>
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold mb-12 break-words">Cas Clients : Résultats Concrets</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cas Client #1 : Agence B2B",
                subtitle: "(Situation initiale : 50K visiteurs/mois)",
                initial: ["Trafic organique : 50K visiteurs/mois", "Position moyenne : 20-30", "Autorité faible (DA 15)", "Peu de backlinks"],
                strategy: ["Audit média complet", "Publication d'articles dans nos médias", "Génération de 40 backlinks/mois depuis nos médias", "Optimisation GSO", "Construction de l'E-E-A-T"],
                results: ["Trafic organique : 180K visiteurs/mois (+260%)", "Position moyenne : 5-10 (-60%)", "Autorité : DA 35 (+20 points)", "Citations IA : 60+ mots-clés", "ROI : +400%"],
                learning: "Le netlinking depuis nos médias a eu un impact majeur sur l'autorité et les rankings."
              },
              {
                title: "Cas Client #2 : E-commerce",
                subtitle: "(Situation initiale : 30K visiteurs/mois)",
                initial: ["Trafic organique : 30K visiteurs/mois", "Position moyenne : 25-35", "Autorité très faible (DA 10)", "Pas de présence médiatique"],
                strategy: ["Audit média complet", "Création d'une présence médiatique", "Publication d'articles de couverture dans nos médias", "Génération de 50 backlinks/mois", "Interviews et témoignages", "Optimisation GSO"],
                results: ["Trafic organique : 150K visiteurs/mois (+400%)", "Position moyenne : 3-8 (-70%)", "Autorité : DA 40 (+30 points)", "Citations IA : 100+ mots-clés", "Mentions médiatiques : 20+", "ROI : +500%"],
                learning: "La présence médiatique a transformé la perception de la marque."
              },
              {
                title: "Cas Client #3 : SaaS",
                subtitle: "(Situation initiale : 20K visiteurs/mois)",
                initial: ["Trafic organique : 20K visiteurs/mois", "Position moyenne : 30-40", "Autorité inexistante (DA 5)", "Aucune présence médiatique"],
                strategy: ["Audit média complet", "Création d'une stratégie E-E-A-T", "Publication d'articles dans nos médias", "Génération de 60 backlinks/mois", "Partenariats avec d'autres médias", "Optimisation GSO complète"],
                results: ["Trafic organique : 120K visiteurs/mois (+500%)", "Position moyenne : 2-7 (-80%)", "Autorité : DA 45 (+40 points)", "Citations IA : 150+ mots-clés", "Mentions médiatiques : 30+", "ROI : +600%"],
                learning: "La combinaison netlinking + présence médiatique + GSO a généré une croissance exponentielle."
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col h-full">
                <h3 className="font-bold text-xl text-blue-400 mb-1">{caseStudy.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{caseStudy.subtitle}</p>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold">Situation initiale</h4>
                    <ul className="space-y-1">
                      {caseStudy.initial.map((item, j) => <li key={j} className="text-sm text-slate-300 flex gap-2"><span className="text-slate-500">-</span> {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold">Stratégie mise en place</h4>
                    <ul className="space-y-1">
                      {caseStudy.strategy.map((item, j) => <li key={j} className="text-sm text-slate-300 flex gap-2"><span className="text-blue-500">+</span> {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-semibold">Résultats après 6 mois</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((item, j) => <li key={j} className="text-sm text-white font-medium flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 mt-0.5" /> {item}</li>)}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-sm text-blue-200 italic"><strong>Apprentissage :</strong> {caseStudy.learning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ADVANTAGES */}
      <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '600ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-12 break-words">Avantages Concrets pour Vos Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "1. Autorité Rapide", desc: "Grâce à notre expertise médiatique, vos clients construisent leur autorité rapidement (3-6 mois au lieu de 12-18 mois)." },
            { title: "2. Backlinks Naturels", desc: "Les backlinks viennent de vrais articles dans des médias réels, pas de répertoires ou de sites de spam." },
            { title: "3. Présence Médiatique", desc: "Vos clients deviennent visibles dans les médias, ce qui augmente leur crédibilité et leur confiance." },
            { title: "4. E-E-A-T Démontré", desc: "Nous aidons vos clients à démontrer leur expertise, ce qui plaît à Google et aux IA." },
            { title: "5. Citations IA", desc: "Vos clients sont cités par les IA génératives, générant du trafic direct." },
            { title: "6. ROI Excellent", desc: "Le ROI est excellent : +300-600% de trafic organique en 6 mois." }
          ].map((adv, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{adv.title}</h3>
              <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{__html: adv.desc.replace('rapidement', '<strong>rapidement</strong>').replace('backlinks', '<strong>backlinks</strong>')}}></p>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div className="mb-16 md:mb-24 animate-fade-in-up w-full" style={{animationDelay: '700ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center break-words">Tarifs et Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "audit-media",
              title: "Package Audit Média",
              duration: "4 semaines",
              price: "À partir de 3 000€",
              features: ["Audit SEO complet", "Audit GSO complet", "Analyse de votre autorité", "Stratégie médiatique", "Rapport détaillé (50-100 pages)", "Recommandations prioritaires"]
            },
            {
              id: "strategie-media",
              title: "Package Stratégie Média (3 mois)",
              duration: "3 mois",
              price: "À partir de 4 000€/mois",
              subprice: "(12 000€ total)",
              highlight: true,
              features: ["Audit complet", "Stratégie SEO/GSO/Média", "Publication d'articles dans nos médias (5-10 articles)", "Génération de 30-40 backlinks", "Création de mentions de marque", "Formation de votre équipe", "Rapports mensuels"]
            },
            {
              id: "accompagnement-media",
              title: "Package Accompagnement Média (6-12 mois)",
              duration: "6-12 mois",
              price: "À partir de 3 000€/mois",
              subprice: "(jusqu'à 36 000€ total)",
              features: ["Audit complet", "Stratégie SEO/GSO/Média", "Publication d'articles dans nos médias (10-20 articles)", "Génération de 40-60 backlinks/mois", "Création de mentions de marque", "Partenariats avec d'autres médias", "Optimisation on-page et GSO", "Monitoring et reporting", "Optimisations continues"]
            }
          ].map((pkg, i) => (
            <div key={i} id={pkg.id} className={`bg-white rounded-2xl border ${pkg.highlight ? 'border-blue-500 shadow-xl relative' : 'border-slate-200 shadow-md'} p-8 flex flex-col`}>
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Le plus populaire
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
              <p className="text-slate-500 text-sm mb-6"><strong>Durée :</strong> {pkg.duration}</p>
              <div className="mb-8">
                <p className="text-2xl font-display font-bold text-slate-900"><strong>Tarif :</strong> {pkg.price}</p>
                {pkg.subprice && <p className="text-sm text-slate-500 mt-1">{pkg.subprice}</p>}
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-900 mb-4">Contenu :</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className={`mt-8 w-full py-3 rounded-lg font-bold transition-colors ${pkg.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                Nous contacter
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16 md:mb-24 max-w-3xl mx-auto animate-fade-in-up w-full" style={{animationDelay: '800ms'}}>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-slate-900 mb-8 text-center break-words">FAQ : Expertise Média</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-slate-600 text-sm md:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CONCLUSION / CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl animate-fade-in-up w-full" style={{animationDelay: '900ms'}}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 break-words">Conclusion</h2>
        <div className="text-blue-100 text-base md:text-lg mb-8 max-w-3xl mx-auto font-light break-words space-y-4 text-left">
          <p>L'<strong>expertise média</strong> chez Triaina est un avantage compétitif unique. Nous sommes propriétaires de médias, ce qui nous permet de :</p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-300" /> <strong>Générer des backlinks naturels</strong> depuis nos médias</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-300" /> <strong>Construire l'E-E-A-T</strong> rapidement</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-300" /> <strong>Créer une présence médiatique</strong> pour nos clients</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-300" /> <strong>Optimiser pour Google et les IA</strong> avec expertise</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-300" /> <strong>Générer du trafic massif</strong> en 6 mois</li>
          </ul>
          <p className="font-bold text-white text-center mt-6 text-xl">Nos résultats parlent d'eux-mêmes : <strong>+200-600% de trafic organique en 6 mois</strong>.</p>
          <p className="text-center text-sm mt-4">Découvrez notre <a href="/expertise-seo" onClick={(e) => { e.preventDefault(); onNavigate('expertise-seo'); }} className="underline hover:text-white">expertise SEO</a>, notre <a href="/expertise-gso" onClick={(e) => { e.preventDefault(); onNavigate('expertise-gso'); }} className="underline hover:text-white">expertise GSO</a>, ou notre <a href="/agence-referencement-ia" onClick={(e) => { e.preventDefault(); onNavigate('agence-referencement-ia'); }} className="underline hover:text-white">agence référencement IA</a> pour en savoir plus sur comment nous pouvons aider votre entreprise.</p>
          <p className="text-center font-bold text-white mt-2">Le moment d'agir est maintenant. Vos concurrents ne dorment pas.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href={PAGE_TO_URL['contact']}
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className="px-8 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest rounded hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center text-center"
          >
            → Nous contacter
          </a>
        </div>
      </div>

    </div>
  );
};
