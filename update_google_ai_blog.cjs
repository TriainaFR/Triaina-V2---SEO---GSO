const fs = require('fs');

const newHtml = `<h1>Comment apparaître sur Google AI Overview ? Guide pratique</h1><p><em>Publié le 7 juillet 2026.</em></p><h2>Qui a écrit cet article ?</h2><p>Par <strong>[Prénom Nom]</strong>, consultant(e) SEO/GEO chez Triaina (Paris) - accompagne des sites éditoriaux et e-commerce sur leur visibilité dans les résultats Google classiques et les fonctionnalités IA.<br><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/company/triaina/">Profil LinkedIn de l'auteur (à compléter)</a></p><h2>TL;DR</h2><p><strong>Il n'existe pas de bouton "apparaître dans Google AI Overview".</strong> Google le dit noir sur blanc dans sa documentation officielle : aucune balise spéciale, aucun fichier dédié, aucun schema.org magique n'ouvre la porte des résumés IA. Pour apparaître, une page doit d'abord être <strong>indexée et éligible à un extrait classique</strong> dans Google Search - c'est la seule condition technique obligatoire. Ensuite, tout se joue sur des critères qualitatifs qu'on maîtrise déjà en SEO : contenu utile et non générique, expertise identifiable (E-E-A-T), structure claire en questions-réponses, et présence effective dans les résultats organiques ou les featured snippets. Ce guide détaille le mécanisme, les critères qui comptent vraiment, et 7 actions concrètes à mettre en place - sans dates de lancement ni actualité, juste la méthode.</p><h2>Comment fonctionne Google AI Overview ?</h2><p>Google AI Overview n'est pas un moteur de recherche parallèle. C'est une couche générative posée sur l'infrastructure de Google Search existante : même index, mêmes systèmes de classement et de qualité, avec un modèle Gemini personnalisé qui rédige une synthèse à partir des pages jugées pertinentes.</p><h3>Le principe du RAG (retrieval-augmented generation)</h3><p>Le mécanisme technique s'appelle la <strong>génération augmentée de récupération</strong>, ou RAG - Google parle aussi d'« ancrage » (grounding). Concrètement : le modèle ne génère pas une réponse depuis sa seule mémoire d'entraînement. Il interroge d'abord l'index de Search pour récupérer des pages web récentes et fiables, puis rédige sa synthèse en s'appuyant sur le contenu réel de ces pages, avec des liens cliquables vers les sources utilisées. C'est ce qui distingue AI Overview d'un simple chatbot : la réponse est censée être vérifiable, traçable jusqu'à une page qui existe vraiment.</p><h3>Le « query fan-out » : une requête qui en cache plusieurs</h3><p>Autre mécanisme clé documenté par Google : le <strong>désdobramento de requête</strong> (query fan-out). Pour une question complexe, le système ne lance pas une seule recherche mais plusieurs, sur des sous-thèmes liés. Exemple donné par Google : pour « comment se débarrasser des mauvaises herbes dans une pelouse », le système peut lancer en parallèle des recherches sur les « meilleurs herbicides », le « désherbage sans produits chimiques » ou la « prévention des mauvaises herbes ». Résultat : l'AI Overview peut citer un éventail de sites plus large et plus diversifié qu'une page de résultats classique - une opportunité pour des pages de niche qui ne rankent pas forcément en position 1.</p><h3>Le lien avec l'indexation Google classique</h3><p>C'est le point le plus mal compris et pourtant le plus important : <strong>une page ne peut apparaître dans AI Overview que si elle remplit déjà les conditions techniques pour apparaître dans les résultats organiques avec un extrait</strong>. Pas d'exception, pas de raccourci. Si une page est bloquée par robots.txt, en noindex, ou tout simplement pas assez pertinente pour ranker sur la requête, elle n'a aucune chance d'être citée dans le résumé IA. AI Overview ne remplace pas l'indexation classique, il se nourrit dessus.</p><h2>Les critères qui déterminent l'apparition dans l'AI Overview</h2><p>Google est explicite sur ce point dans son guide d'optimisation pour la recherche générative : il n'y a <strong>pas de nouvelles règles techniques</strong> à suivre spécifiquement pour AI Overview. Les fondamentaux du SEO restent le socle. Voici ce qui pèse réellement.</p><h3>Le SEO classique comme prérequis absolu</h3><ul><li><p><strong>Indexation propre</strong> : crawl autorisé, pas de blocage par le robots.txt ou par un CDN, page accessible à Googlebot.</p></li><li><p><strong>Maillage interne</strong> : une page isolée, sans liens internes qui pointent vers elle, a moins de chances d'être découverte et jugée importante.</p></li><li><p><strong>Expérience de page correcte</strong> : temps de chargement, affichage mobile, distinction claire entre contenu principal et éléments annexes.</p></li><li><p><strong>Contenu textuel réel</strong> : une information cachée uniquement dans une image ou une vidéo sans transcription ne peut pas être extraite pour la synthèse.</p></li></ul><h3>L'E-E-A-T, un filtre qualitatif de plus en plus déterminant</h3><p>Google insiste beaucoup sur un point dans sa documentation : le contenu doit avoir un <strong>point de vue exclusif</strong>. Un article qui recopie ce qui existe déjà ailleurs - ou qui pourrait être produit par n'importe quel modèle d'IA générative - a peu de valeur ajoutée aux yeux du système. À l'inverse, un retour d'expérience de première main, une expertise signée par un auteur identifiable, une donnée que vous êtes seul à détenir : c'est exactement ce type de contenu que Google cite en exemple comme candidat naturel à la citation. Expertise, autorité et fiabilité (E-E-A-T) ne sont pas des cases à cocher, ce sont des signaux que les systèmes de qualité cherchent à repérer.</p><h3>Le contenu structuré : oui, mais pas au sens où on le croit</h3><p>Ici, il faut corriger une idée reçue qui circule beaucoup en GEO : Google affirme explicitement qu'il n'est <strong>pas nécessaire de découper son contenu en petits fragments</strong> pour qu'une IA le comprenne mieux. Ses systèmes savent lire la nuance d'une page entière. Ce qui compte, c'est une organisation lisible pour un humain : des titres qui structurent la navigation, des paragraphes qui traitent chacun une idée, une hiérarchie H2/H3 cohérente. Le « chunking » agressif pensé uniquement pour les machines n'apporte rien de plus.</p><h3>Les données factuelles et chiffrées</h3><p>Un modèle génératif ancré sur le web privilégie les pages qui apportent une information vérifiable et datée : un chiffre sourcé, une méthodologie expliquée, une date précise. C'est ce qui permet à la synthèse de citer votre page plutôt qu'une formulation vague et interchangeable.</p><h3>Les featured snippets, un signal corrélé mais pas une condition</h3><p>Il n'existe pas de lien de cause à effet officiel entre « être en position zéro » et « être cité dans AI Overview ». Mais dans les faits, une page déjà optimisée pour le featured snippet - réponse directe, structure question/réponse, contenu concis en tête de section - coche déjà une bonne partie des cases qui comptent pour une extraction par un système génératif. Travailler ses featured snippets reste donc un excellent point de départ, même si ce n'est pas une garantie.</p><h2>7 actions concrètes pour apparaître dans Google AI Overview</h2><h3>1. Structurer vos pages en questions-réponses</h3><p>Reformulez vos titres H2/H3 sous forme de questions que se pose réellement votre audience, puis répondez immédiatement en dessous. Cette structure facilite la lecture pour un humain pressé et pour un système qui cherche à extraire une réponse claire.</p><h3>2. Baliser en Schema.org (FAQPage, HowTo, Article)</h3><p>Google le rappelle : les données structurées ne sont pas une condition d'apparition dans AI Overview. En revanche, elles restent utiles pour votre stratégie SEO globale - elles aident à l'éligibilité aux résultats enrichis classiques, à condition que le balisage corresponde exactement au texte visible sur la page. Un balisage FAQPage sur une vraie FAQ, HowTo sur un vrai tutoriel étape par étape, Article avec auteur et date sur vos contenus éditoriaux : ce sont de bonnes pratiques SEO qui ne nuisent jamais.</p><h3>3. Répondre dès la première phrase (pyramide inversée)</h3><p>Donnez la réponse à la question posée par le titre dans la ou les deux premières phrases du paragraphe, puis développez le contexte et les nuances ensuite. C'est le principe journalistique de la pyramide inversée, déjà central pour les featured snippets, et qui reste pertinent pour tout système qui doit extraire une réponse synthétique d'une page.</p><h3>4. Renforcer l'E-E-A-T avec un auteur vérifié</h3><p>Signez vos contenus avec un nom réel, une bio qui prouve une expertise sur le sujet traité, et un lien vers un profil professionnel vérifiable (LinkedIn, page auteur du site). Un contenu anonyme ou signé « la rédaction » envoie un signal de confiance plus faible qu'un contenu signé par une personne identifiable et compétente sur le sujet.</p><h3>5. Obtenir des citations tierces</h3><p>Un système de récupération d'information pondère la fiabilité perçue d'une source. Être cité, mentionné ou repris par d'autres sites reconnus dans votre secteur - presse spécialisée, organismes professionnels, études indépendantes - reste un signal d'autorité qui dépasse le seul cadre du netlinking classique.</p><h3>6. Viser les featured snippets existants comme base de travail</h3><p>Identifiez les requêtes où vous êtes déjà en top 3 mais sans capter le featured snippet. Ce sont vos meilleures candidates : retravaillez la réponse directe, la longueur du paragraphe cible et la structure de la section pour tenter de décrocher la position zéro. C'est le terrain le plus proche, aujourd'hui, de ce qu'une IA générative cherche à extraire.</p><h3>7. Mesurer sa présence dans Search Console</h3><p>Depuis juin 2026, Google déploie progressivement dans Search Console un rapport dédié aux <strong>performances IA générative</strong>, avec des données d'impressions distinctes pour AI Overviews, AI Mode et les fonctionnalités génératives de Discover. En attendant que ce rapport soit disponible sur toutes les propriétés, la donnée reste de toute façon comptabilisée dans le rapport de performance global, sous le type de recherche « Web ». Vérifiez régulièrement si le rapport dédié est apparu sur votre compte.</p><h2>Comment mesurer sa présence dans l'AI Overview</h2><h3>La méthode manuelle</h3><p>Pas de raccourci miracle ici : testez vos requêtes cibles directement sur Google, en navigation privée et depuis plusieurs localisations si votre audience est géographiquement large. Notez quelles requêtes déclenchent un AI Overview, si votre site est cité, et à quelle position dans la liste de sources. Tenez un tableau de suivi mensuel : les résumés IA évoluent vite, une requête qui n'en affichait pas hier peut en afficher un dans trois semaines.</p><h3>Le rapport « Generative AI » dans Search Console</h3><p>C'est aujourd'hui l'outil officiel le plus fiable. Le nouveau rapport, quand il est disponible sur votre propriété, affiche :</p><ul><li><p><strong>Les impressions</strong> : combien de fois vos URL sont apparues dans une fonctionnalité IA générative.</p></li><li><p><strong>Les pages concernées</strong> : quelles URL précises ont été citées.</p></li><li><p><strong>La répartition géographique</strong> : par pays.</p></li><li><p><strong>Les appareils</strong> : desktop ou mobile, pour la partie Search.</p></li><li><p><strong>La granularité temporelle</strong> : de l'heure au mois.</p></li></ul><p>Attention à une limite importante : ce rapport donne des impressions, pas de clics, pas de position, pas de taux de clic. Il faut le croiser avec Google Analytics pour évaluer si les visites issues de ces citations se comportent différemment - Google indique d'ailleurs avoir observé que les clics provenant de pages avec AI Overview tendent à générer un temps passé sur site plus élevé.</p><h3>Ce qu'on ne peut pas encore isoler</h3><p>Tant que le nouveau rapport n'est pas généralisé à toutes les propriétés, il est impossible de filtrer précisément, dans le rapport de performance classique, la part de trafic ou d'impressions liée spécifiquement à AI Overview par rapport au reste de la recherche « Web ». La vigilance manuelle reste donc, pour l'instant, indispensable en complément de l'outil Google.</p><h2>Notre lecture</h2><p>Chez Triaina, on constate sur le terrain qu'aucune de ces actions ne fonctionne isolément : c'est la combinaison - indexation propre, contenu à valeur ajoutée réelle, signaux d'expertise et suivi régulier - qui fait la différence sur la durée. Miser uniquement sur des tactiques « GEO » censées manipuler l'IA (fragmentation artificielle du texte, fichiers spéciaux, citations forcées) va à l'encontre des recommandations officielles de Google et n'apporte aucun résultat durable. La bonne approche reste de consolider un SEO organique solide, en le complétant par une veille active sur les résumés IA et, pour amortir la volatilité des clics informationnels, par d'autres canaux d'acquisition comme le SEA.</p><h2>Questions fréquentes</h2><h3>Comment apparaître sur Google AI Overview ?</h3><p>En remplissant d'abord les conditions techniques classiques d'indexation et d'éligibilité à un extrait dans Google Search, puis en produisant un contenu à forte valeur ajoutée, structuré en questions-réponses, signé par un auteur identifiable et déjà bien positionné sur les résultats organiques ou les featured snippets. Il n'existe aucune balise ou fichier spécial qui garantit l'apparition.</p><h3>Faut-il créer un fichier llms.txt pour apparaître dans AI Overview ?</h3><p>Non. Google indique explicitement que les fichiers de type llms.txt, ou tout autre fichier ou balisage « spécial pour l'IA », ne sont pas utilisés par ses systèmes de recherche. Le crawl et l'indexation classiques suffisent.</p><h3>Les données structurées Schema.org sont-elles obligatoires pour AI Overview ?</h3><p>Non plus. Elles ne sont pas une condition d'apparition, mais elles restent une bonne pratique SEO générale - notamment pour l'éligibilité aux résultats enrichis classiques - à condition qu'elles reflètent fidèlement le contenu visible de la page.</p><h3>Peut-on suivre sa présence dans AI Overview via Search Console ?</h3><p>Oui, de deux façons : via le rapport de performance classique (les impressions AI Overview y sont incluses sous le type de recherche « Web »), et, pour les propriétés qui y ont déjà accès, via le nouveau rapport dédié aux performances IA générative, lancé par Google en juin 2026, qui isole les impressions par page, pays, appareil et date.</p><h3>Un contenu déjà en featured snippet a-t-il plus de chances d'apparaître dans AI Overview ?</h3><p>Rien ne le garantit officiellement, mais c'est un bon indicateur. Une page qui capte déjà la position zéro répond de manière directe et structurée à une question précise - exactement le type de contenu qu'un système de génération augmentée cherche à extraire pour construire sa synthèse.</p><h2>Sources utiles</h2><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/appearance/ai-features">Google Search Central - AI features and your website</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide">Google Search Central - Guide d'optimisation pour la recherche IA générative</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports">Google Search Central Blog - Lancement des rapports de performance IA générative dans Search Console</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://support.google.com/websearch/answer/14901683">Google - À propos des Aperçus IA (AI Overviews)</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://search.google/ways-to-search/ai-overviews/">Google - Comment fonctionnent les AI Overviews</a></p></li></ul>`;

const newSchema = {
    "@context": "https://schema.org",
    "@graph": [
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
            "name": "Blog",
            "item": "https://www.triaina.fr/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Comment apparaître sur Google AI Overview ? Guide pratique",
            "item": "https://www.triaina.fr/blog/google-ai-overview-france"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Comment apparaître sur Google AI Overview ? Guide pratique",
        "description": "Découvrez le guide complet et 7 actions pratiques pour optimiser votre site web pour Google AI Overview. Un tutoriel SEO et GEO de Triaina.",
        "datePublished": "2026-07-07",
        "dateModified": "2026-07-07",
        "image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
        "author": {
          "@type": "Person",
          "name": "[Prénom Nom]",
          "url": "https://www.linkedin.com/company/triaina/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Triaina",
          "url": "https://www.triaina.fr",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.triaina.fr/logo.png"
          }
        },
        "inLanguage": "fr",
        "mainEntityOfPage": "https://www.triaina.fr/blog/google-ai-overview-france"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment apparaître sur Google AI Overview ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En remplissant d'abord les conditions techniques classiques d'indexation et d'éligibilité à un extrait dans Google Search, puis en produisant un contenu à forte valeur ajoutée, structuré en questions-réponses, signé par un auteur identifiable et déjà bien positionné sur les résultats organiques ou les featured snippets."
            }
          },
          {
            "@type": "Question",
            "name": "Faut-il créer un fichier llms.txt pour apparaître dans AI Overview ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. Google indique explicitement que les fichiers de type llms.txt, ou tout autre fichier ou balisage « spécial pour l'IA », ne sont pas utilisés par ses systèmes de recherche."
            }
          },
          {
            "@type": "Question",
            "name": "Les données structurées Schema.org sont-elles obligatoires pour AI Overview ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non plus. Elles ne sont pas une condition d'apparition, mais elles restent une bonne pratique SEO générale."
            }
          },
          {
            "@type": "Question",
            "name": "Peut-on suivre sa présence dans AI Overview via Search Console ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, de deux façons : via le rapport de performance classique (les impressions AI Overview y sont incluses sous le type de recherche « Web »), et via le nouveau rapport dédié aux performances IA générative."
            }
          },
          {
            "@type": "Question",
            "name": "Un contenu déjà en featured snippet a-t-il plus de chances d'apparaître dans AI Overview ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rien ne le garantit officiellement, mais c'est un bon indicateur. Une page qui capte déjà la position zéro répond de manière directe et structurée à une question précise."
            }
          }
        ]
      }
    ]
  };

const componentCode = `import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const GoogleAiOverviewFrance: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'google-ai-overview-france');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = ${JSON.stringify(newSchema, null, 2)};

  const htmlBody = \`${newHtml}\`;

  if (!post) return null;

  return (
    <>
      <SEO 
        title="Comment apparaître sur Google AI Overview ? Guide pratique | Triaina"
        description="Découvrez le guide complet et 7 actions pratiques pour optimiser votre site web pour Google AI Overview. Un tutoriel SEO et GEO de Triaina."
        canonicalUrl="https://www.triaina.fr/blog/google-ai-overview-france"
        type="article"
        schema={schema}
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
      />
      <div className="pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 animate-fade-in-up">
            <a 
              href={PAGE_TO_URL['blog']}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', PAGE_TO_URL['blog']);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors font-mono text-sm tracking-wide"
            >
              <ArrowLeft size={16} className="mr-2" />
              RETOUR AU BLOG
            </a>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-500 font-mono text-xs tracking-wider">
              <span className="flex items-center"><Calendar size={14} className="mr-2" />7 JUILLET 2026</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center"><Clock size={14} className="mr-2" />6 min de lecture</span>
              <span className="text-slate-300">|</span>
              <span className="text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded-full">GUIDE PRATIQUE</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-8 animate-fade-in-up md:w-4/5" style={{animationDelay: '0.1s'}}>
            Comment apparaître sur Google AI Overview ? Guide pratique
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-12 animate-fade-in-up md:w-3/4" style={{animationDelay: '0.2s'}}>
            Google le dit : aucune balise magique n'ouvre la porte des résumés IA. Ce guide détaille les 7 actions concrètes pour s'y faire une place sans bidouille technique.
          </p>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 relative animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
              alt="Google AI Overview France"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 
                prose-h1:text-4xl prose-h1:mb-8
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:underline prose-a:font-medium
                prose-li:text-slate-600 prose-li:marker:text-blue-500
                prose-ul:space-y-2 prose-ol:space-y-2
                animate-fade-in-up"
                style={{animationDelay: '0.3s'}}
                dangerouslySetInnerHTML={{ __html: htmlBody }}
            />

            <aside className="lg:w-1/3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-blue-600/20 blur-2xl"></div>
                  
                  <h3 className="text-xl font-display font-bold mb-4 text-white relative z-10">Besoin d'optimiser votre site pour AI Overview ?</h3>
                  <p className="text-slate-300 mb-6 text-sm relative z-10 leading-relaxed">
                    Les experts Triaina vous accompagnent pour structurer vos contenus, renforcer votre E-E-A-T et gagner en visibilité dans les réponses générées de Google.
                  </p>
                  
                  <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', PAGE_TO_URL['contact']);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="inline-flex items-center justify-center w-full bg-white text-black px-6 py-3 rounded-xl text-sm font-bold tracking-wide hover:bg-blue-50 transition-colors relative z-10"
                  >
                    PRENDRE RENDEZ-VOUS
                  </a>
                </div>
                
                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                   <h4 className="font-bold text-slate-900 mb-4">Auteur</h4>
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">
                       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" alt="Consultant Triaina" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-900 text-sm">[Prénom Nom]</p>
                       <p className="text-xs text-slate-500">Consultant(e) SEO/GEO</p>
                     </div>
                   </div>
                   <p className="text-sm text-slate-700 leading-relaxed">
                     Spécialiste de la visibilité sur les moteurs de recherche génératifs (SGE, AI Overview) chez Triaina.
                   </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
`;

fs.writeFileSync('views/blog/GoogleAiOverviewFrance.tsx', componentCode);
