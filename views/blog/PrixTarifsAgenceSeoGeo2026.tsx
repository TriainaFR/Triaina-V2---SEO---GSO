import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { PAGE_TO_URL, BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const PrixTarifsAgenceSeoGeo2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'prix-tarifs-agence-seo-geo-2026');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Prix & tarifs agence SEO/GEO en 2026 : combien ça coûte ?",
      "description": "Une prestation SEO en France coûte en moyenne entre 500 € et 8 000 € par mois selon la taille du site, les objectifs et le niveau de concurrence.",
      "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
      "datePublished": "2026-07-16",
      "dateModified": "2026-07-16",
      "author": {
        "@type": "Organization",
        "name": "Triaina",
        "url": "https://triaina.fr"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Pourquoi les prix des agences SEO varient-ils autant d'un prestataire à l'autre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parce que le prix dépend de facteurs propres à chaque site : sa taille, son état technique, le niveau de concurrence de son secteur, et les objectifs business fixés. Un devis référencement pour un site vitrine local n'a rien à voir avec celui d'un e-commerce national. C'est pour cette raison que les fourchettes marché vont de 500 € à plus de 10 000 €/mois selon les cas."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le prix moyen d'un audit SEO en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix audit seo varie généralement entre 800 € et 6 000 € selon la taille et la complexité du site. Chez Triaina, l'audit SEO et GEO démarre à 1 700 €, avec un tarif ajusté selon le volume de pages et la profondeur d'analyse nécessaire."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il privilégier un freelance ou une agence pour son référencement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un freelance convient pour des projets simples ou ponctuels, avec un tarif horaire de 75 à 200 €. Une agence apporte davantage de ressources (rédaction, technique, netlinking, GEO) en parallèle, ce qui devient pertinent dès que le site gagne en volume ou en ambition."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps avant de voir des résultats SEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comptez généralement 6 à 12 mois pour observer des résultats significatifs et durables. C'est pourquoi la plupart des prestations SEO se facturent en forfait mensuel plutôt qu'au projet ponctuel : le référencement naturel est un travail de fond, pas un sprint."
          }
        },
        {
          "@type": "Question",
          "name": "Le GEO coûte-t-il plus cher que le SEO classique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ajouter le GEO (optimisation pour les IA génératives) à une stratégie SEO augmente le périmètre de travail, donc le tarif. Chez Triaina, l'accompagnement full SEO + GEO démarre à 1 000 €/mois, contre 500-750 €/mois pour un accompagnement SEO seul sur un petit site."
          }
        }
      ]
    }
  ];

  const htmlBody = `
<p><strong>TL;DR :</strong> une prestation SEO en France coûte en moyenne entre 500 € et 8 000 € par mois selon la taille du site, les objectifs et le niveau de concurrence. Un audit SEO seul se facture généralement entre 800 € et 6 000 €. Chez Triaina, l'accompagnement SEO pour petits sites démarre à 500-750 €/mois, l'audit SEO et GEO à partir de 1700 € (variable selon la taille du site), et l'accompagnement full SEO + GEO à partir de 1000 €/mois. Il n'existe pas de tarif universel : chaque devis référencement dépend du budget et des objectifs du client.</p>

<h2>Pourquoi les prix des prestations SEO varient autant</h2>
<p>C'est la première question que se posent la plupart des dirigeants de TPE et PME : pourquoi un devis référencement peut afficher 500 € chez l'un et 8 000 € chez l'autre pour, en apparence, la même mission ? La réponse tient en quatre mots : il n'y a pas deux sites identiques.</p>
<p>Le prix agence seo dépend concrètement de plusieurs paramètres qui se cumulent :</p>
<ul>
<li><p><strong>La taille et la complexité du site</strong> : un site vitrine de 10 pages ne demande pas le même travail qu'un e-commerce de 5 000 fiches produits.</p></li>
<li><p><strong>Le niveau de concurrence du secteur</strong> : se positionner sur "assurance auto Paris" coûte nettement plus cher en temps expert que "plombier à Vesoul".</p></li>
<li><p><strong>Les objectifs business</strong> : générer 5 leads/mois n'a rien à voir avec doubler le trafic organique national en 12 mois.</p></li>
<li><p><strong>Le périmètre de la mission</strong> : SEO seul, ou SEO couplé au GEO (Generative Engine Optimization, l'optimisation pour ChatGPT, Perplexity et Google AI Mode) ?</p></li>
<li><p><strong>Le niveau d'expertise mobilisé</strong> : un freelance junior, une agence mid-market ou un cabinet spécialisé n'ont pas la même structure de coûts.</p></li>
</ul>
<p>C'est pour cette raison que les fourchettes affichées par les agences du marché sont volontairement larges - et souvent peu transparentes. On vous détaille ces fourchettes plus bas, avec les vrais tarifs pratiqués chez Triaina, sans langue de bois.</p>

<h2>Les modèles de facturation d'une prestation SEO</h2>
<p>Avant de comparer les prix, il faut comprendre comment les prestations SEO sont facturées. Trois modèles coexistent sur le marché français :</p>

<h3>Le forfait mensuel (le plus courant)</h3>
<p>C'est le modèle dominant pour l'accompagnement SEO continu : un abonnement mensuel qui couvre un volume d'heures ou de livrables définis (audit, optimisations techniques, production de contenu, netlinking, reporting). Il permet de lisser le budget et d'inscrire le SEO dans une logique long terme, indispensable pour ce levier qui prend 6 à 12 mois à produire ses effets.</p>

<h3>Le tarif horaire ou au jour (TJM)</h3>
<p>Fréquent chez les consultants freelances, ce modèle facture le temps passé : entre 75 € et 200 €/heure, ou 800 € à 1 500 €/jour pour un consultant senior. Adapté aux missions ponctuelles (audit, formation, coaching interne) mais moins pertinent pour un pilotage sur la durée.</p>

<h3>La facturation à la performance</h3>
<p>Plus rare et souvent controversée : l'agence est payée en fonction de résultats (positions atteintes, trafic généré, leads). En théorie séduisant, en pratique risqué : le SEO dépend de facteurs que l'agence ne maîtrise pas entièrement (algorithme Google, actions de la concurrence), et ce modèle pousse parfois à des pratiques agressives ou à du sur-reporting sur des mots-clés faciles mais peu rentables.</p>

<h2>Tableau comparatif : les fourchettes de prix du marché</h2>
<p>Voici ce que pratiquent réellement les principaux acteurs du marché français, sur la base des grilles tarifaires publiées et des données observées en 2026 :</p>

<div class="overflow-x-auto my-8">
<table class="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700 rounded-lg shadow-sm">
<thead class="bg-slate-50 font-medium">
<tr>
<th class="px-4 py-3 border-b border-slate-200">Type de prestataire</th>
<th class="px-4 py-3 border-b border-slate-200">Fourchette mensuelle</th>
<th class="px-4 py-3 border-b border-slate-200">Prix audit SEO</th>
<th class="px-4 py-3 border-b border-slate-200">Remarques</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 bg-white">
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Freelance / consultant indépendant</td><td class="px-4 py-3">500 € – 2 500 €/mois (ou 75-200 €/h)</td><td class="px-4 py-3">500 € – 2 000 €</td><td class="px-4 py-3 text-slate-500">Souple, mais capacité limitée sur les gros volumes</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Agence mid-market (ex. Deux.io, La Fabrique du Net)</td><td class="px-4 py-3">600 € – 5 000 €/mois</td><td class="px-4 py-3">800 € – 3 000 €</td><td class="px-4 py-3 text-slate-500">Médiane observée sur 683 budgets réels : projet ponctuel à 5 000 €, cœur de marché 2 500-10 500 €</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Agence généraliste (ex. seo.fr)</td><td class="px-4 py-3">500 € – 10 000 €/mois</td><td class="px-4 py-3">Variable, souvent sur devis</td><td class="px-4 py-3 text-slate-500">Fourchette très large, peu de grille publique précise</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold">Grande agence / cabinet spécialisé (ex. NOIISE)</td><td class="px-4 py-3">1 000 € – 8 000 €/mois</td><td class="px-4 py-3">1 500 € – 8 000 €+</td><td class="px-4 py-3 text-slate-500">Contrat recommandé sur 6 à 12 mois, équipe dédiée sur les gros comptes</td></tr>
</tbody>
</table>
</div>
<p>On le voit : entre 500 € et 10 000 €/mois, ces fourchettes ne disent presque rien de ce que vous allez réellement payer pour <em>votre</em> site. C'est le problème numéro un du secteur : une transparence tarif referencement quasi inexistante tant que vous n'avez pas rempli un formulaire et attendu un rendez-vous commercial.</p>

<h2>Les tarifs réels chez Triaina</h2>
<p>Chez Triaina, on a fait le choix inverse : afficher des tarifs de départ concrets, quitte à préciser tout de suite qu'ils varient selon votre projet. Voici nos trois offres principales.</p>

<div class="overflow-x-auto my-8">
<table class="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700 rounded-lg shadow-sm">
<thead class="bg-slate-50 font-medium">
<tr>
<th class="px-4 py-3 border-b border-slate-200">Offre</th>
<th class="px-4 py-3 border-b border-slate-200">Tarif de départ</th>
<th class="px-4 py-3 border-b border-slate-200">Pour qui ?</th>
<th class="px-4 py-3 border-b border-slate-200">Contenu type</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 bg-white">
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold text-violet-600">SEO accompagnement - petits sites</td><td class="px-4 py-3 font-medium">À partir de 500 – 750 €/mois</td><td class="px-4 py-3">TPE, sites vitrines, petits e-commerces</td><td class="px-4 py-3 text-slate-500">Suivi technique, optimisations on-page, recommandations éditoriales, reporting mensuel</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold text-violet-600">Audit SEO et GEO</td><td class="px-4 py-3 font-medium">À partir de 1 700 € (variable selon la taille du site)</td><td class="px-4 py-3">Tout type de site souhaitant un diagnostic complet</td><td class="px-4 py-3 text-slate-500">Audit technique, sémantique, netlinking, plus analyse de la visibilité dans les moteurs génératifs (ChatGPT, Perplexity, Google AI Mode)</td></tr>
<tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-semibold text-violet-600">Accompagnement full SEO + GEO</td><td class="px-4 py-3 font-medium">À partir de 1 000 €/mois</td><td class="px-4 py-3">PME et mid-market visant une croissance organique durable</td><td class="px-4 py-3 text-slate-500">Stratégie SEO complète, production de contenu, optimisation GEO, suivi de positions, reporting</td></tr>
</tbody>
</table>
</div>
<p><strong>Précision importante :</strong> ces tarifs sont des points de départ, pas des prix figés. Le prix final d'une prestations SEO chez Triaina se construit toujours autour de votre budget et de vos objectifs réels - pas d'une grille universelle qui ignorerait la spécificité de votre site.</p>

<h2>Ce qui fait varier le prix chez Triaina</h2>
<p>Trois critères pèsent le plus lourd dans la construction d'un devis référencement chez Triaina :</p>

<h3>1. La taille et l'état technique du site</h3>
<p>Un audit sur un site de 20 pages ne mobilise pas les mêmes ressources qu'un audit sur un catalogue de 3 000 références avec un historique de pénalités. C'est pourquoi l'audit SEO et GEO démarre à 1 700 € mais peut monter significativement selon le volume de pages, la profondeur technique nécessaire (crawl, indexation, Core Web Vitals) et l'ancienneté du site.</p>

<h3>2. SEO seul vs SEO + GEO</h3>
<p>Ajouter le volet GEO - c'est-à-dire optimiser la présence de la marque dans les réponses générées par les IA conversationnelles - change la nature du travail : structuration des contenus pour les LLM, e-e-a-t renforcé, suivi de citations dans les réponses IA. C'est un poste de travail supplémentaire, qui justifie l'écart entre l'offre SEO seule (dès 500-750 €/mois) et l'offre combinée SEO + GEO (dès 1 000 €/mois).</p>

<h3>3. Le budget et les objectifs du client</h3>
<p>Un client qui vise 3 mots-clés locaux n'a pas besoin du même niveau d'investissement qu'un client qui vise une refonte de sa visibilité nationale sur un secteur concurrentiel. Chez Triaina, chaque devis référencement part d'un échange sur les objectifs réels avant de proposer un périmètre et un tarif - jamais l'inverse.</p>

<h2>Quelle offre choisir selon la taille de votre entreprise ?</h2>

<h3>TPE et indépendants</h3>
<p>Pour un site vitrine ou un petit e-commerce local, l'offre SEO accompagnement à partir de 500-750 €/mois est généralement suffisante : optimisations on-page, contenu ciblé, suivi technique de base. Un audit ponctuel peut aussi être une bonne première étape pour cadrer les priorités avant de s'engager sur un forfait mensuel.</p>

<h3>PME en croissance</h3>
<p>Si votre objectif est de gagner en visibilité nationale ou de préparer votre site aux moteurs génératifs, l'accompagnement full SEO + GEO à partir de 1 000 €/mois est le point d'entrée le plus cohérent. Il combine production de contenu, technique et optimisation GEO dans une même stratégie, plutôt que de traiter les deux sujets séparément.</p>

<h3>Mid-market et grands comptes</h3>
<p>Pour les sites à fort volume de pages, forte concurrence sectorielle ou ambitions multi-marchés, le budget grimpe logiquement au-delà des tarifs d'entrée - comme chez toutes les agences du marché (jusqu'à 8 000-10 000 €/mois pour les cas les plus complexes). Un audit SEO et GEO complet est alors la première étape recommandée, pour dimensionner l'accompagnement sur des bases précises plutôt que sur une estimation à l'aveugle.</p>

<h2>Red flags : les signaux d'alerte chez les agences low-cost</h2>
<p>Un prix bas n'est jamais un problème en soi. Ce qui doit alerter, ce sont les pratiques qui se cachent souvent derrière :</p>
<ul>
<li><p><strong>Aucun audit préalable</strong> : une agence qui propose un forfait mensuel sans avoir regardé votre site en détail vend une prestation standardisée, pas une stratégie.</p></li>
<li><p><strong>Promesses de résultats garantis</strong> : "Top 1 en 30 jours" n'existe pas en SEO légitime. C'est un signal classique de pratiques risquées (netlinking artificiel, contenu dupliqué).</p></li>
<li><p><strong>Contrat sans engagement de reporting</strong> : sans points de suivi réguliers et sans accès à vos propres données (Search Console, Analytics), vous perdez le contrôle sur ce qui est réellement fait.</p></li>
<li><p><strong>Prix figé sans discussion sur vos objectifs</strong> : une grille tarifaire universelle appliquée sans échange sur votre budget et vos priorités est rarement un bon signe de personnalisation.</p></li>
<li><p><strong>Aucune mention du GEO ou de l'IA générative</strong> : en 2026, une stratégie SEO qui ignore complètement la visibilité dans ChatGPT ou Google AI Mode est déjà en retard sur les usages de recherche actuels.</p></li>
</ul>

<h2>FAQ</h2>
<h3>Pourquoi les prix des agences SEO varient-ils autant d'un prestataire à l'autre ?</h3>
<p>Parce que le prix dépend de facteurs propres à chaque site : sa taille, son état technique, le niveau de concurrence de son secteur, et les objectifs business fixés. Un devis référencement pour un site vitrine local n'a rien à voir avec celui d'un e-commerce national. C'est pour cette raison que les fourchettes marché vont de 500 € à plus de 10 000 €/mois selon les cas.</p>

<h3>Quel est le prix moyen d'un audit SEO en 2026 ?</h3>
<p>Le prix audit seo varie généralement entre 800 € et 6 000 € selon la taille et la complexité du site. Chez Triaina, l'audit SEO et GEO démarre à 1 700 €, avec un tarif ajusté selon le volume de pages et la profondeur d'analyse nécessaire.</p>

<h3>Faut-il privilégier un freelance ou une agence pour son référencement ?</h3>
<p>Un freelance convient pour des projets simples ou ponctuels, avec un tarif horaire de 75 à 200 €. Une agence apporte davantage de ressources (rédaction, technique, netlinking, GEO) en parallèle, ce qui devient pertinent dès que le site gagne en volume ou en ambition.</p>

<h3>Combien de temps avant de voir des résultats SEO ?</h3>
<p>Comptez généralement 6 à 12 mois pour observer des résultats significatifs et durables. C'est pourquoi la plupart des prestations SEO se facturent en forfait mensuel plutôt qu'au projet ponctuel : le référencement naturel est un travail de fond, pas un sprint.</p>

<h3>Le GEO coûte-t-il plus cher que le SEO classique ?</h3>
<p>Ajouter le GEO (optimisation pour les IA génératives) à une stratégie SEO augmente le périmètre de travail, donc le tarif. Chez Triaina, l'accompagnement full SEO + GEO démarre à 1 000 €/mois, contre 500-750 €/mois pour un accompagnement SEO seul sur un petit site.</p>

<h2>Sources utiles</h2>
<ul>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.lafabriquedunet.fr/agences/pages/agences-seo/tarifs">La Fabrique du Net - Tarifs des agences SEO (données sur 683 budgets réels)</a></p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://deux.io/tarifs-agences-seo/">Deux.io - Tarifs agences SEO 2026</a></p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.seo.fr/informations/combien-coute-prestation-seo">SEO.fr - Combien coûte une prestation SEO</a></p></li>
<li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.noiise.com/seo/devis/">NOIISE - Devis SEO</a></p></li>
</ul>
  `;

  if (!post) return null;

  return (
    <>
      <SEO 
        title={`${post.title} | Triaina`}
        description={post.excerpt}
        canonicalUrl={`https://www.triaina.fr${post.url}`}
        type="article"
        schema={seoSchema}
        image={post.image}
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
              className="inline-flex items-center text-slate-600 hover:text-violet-600 transition-colors font-mono text-sm tracking-wide"
            > 
              <ArrowLeft size={16} className="mr-2" />
              RETOUR AU BLOG
            </a>
            <div className="flex flex-wrap items-center gap-4 text-slate-500 font-mono text-xs tracking-wider">
              <span className="flex items-center"><Calendar size={14} className="mr-2" />{post.date}</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center"><Clock size={14} className="mr-2" />5 min de lecture</span>
              <span className="text-slate-300">|</span>
              <span className="text-violet-600 border border-violet-200 bg-violet-50 px-2 py-1 rounded-full">{post.tag}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8 animate-fade-in-up md:w-4/5" style={{animationDelay: '0.1s'}}>
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12 animate-fade-in-up md:w-3/4" style={{animationDelay: '0.2s'}}>
            {post.excerpt}
          </p>

          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 relative animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-violet-600 hover:prose-a:text-violet-700 prose-a:underline prose-a:font-medium
                prose-li:text-slate-600 prose-li:marker:text-violet-500
                prose-ul:space-y-2 prose-ol:space-y-2
                animate-fade-in-up"
                style={{animationDelay: '0.3s'}}
                dangerouslySetInnerHTML={{ __html: htmlBody }}
            />
            
            <aside className="lg:w-1/3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-violet-600/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 font-sans text-white relative z-10">Besoin d'optimiser pour l'IA ?</h3>
                  <p className="text-slate-300 mb-6 text-sm relative z-10 leading-relaxed">
                    Triaina accompagne les entreprises dans l'optimisation de leur visibilité sur Google et auprès des LLMs (Copilot, ChatGPT, Gemini, Perplexity).
                  </p>
                  <a 
                    href={PAGE_TO_URL['contact']}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', PAGE_TO_URL['contact']);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="inline-flex items-center justify-center w-full bg-white text-black px-6 py-3 rounded-xl text-sm font-bold tracking-wide hover:bg-violet-50 transition-colors relative z-10"
                  >
                    PRENDRE RENDEZ-VOUS
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
