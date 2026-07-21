import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Linkedin, Share2 } from 'lucide-react';
import { BLOG_DATA } from '../../constants';
import { SEO } from '../../components/SEO';

export const GoogleBusinessProfile2026: React.FC = () => {
  const post = BLOG_DATA.find(p => p.id === 'google-business-profile-2026');

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
          "name": post?.title || '',
          "item": `https://www.triaina.fr${post?.url || ''}`
        }
      ]
    }
  ];

  if (!post) {
    return <div className="min-h-screen pt-32 text-center">Article introuvable</div>;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erreur de partage', error);
      }
    }
  };

  return (
    <>
      <SEO 
        title={`${post.title} | Triaina`}
        description={post.excerpt}
        canonicalUrl={`https://www.triaina.fr${post.url}`}
        schema={seoSchema}
      />
      
      <div className="pt-32 pb-20 px-4 min-h-screen">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center animate-fade-in-up">
            <a 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Retour au blog
            </a>
            
            <div className="flex items-center justify-center gap-4 text-slate-500 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {post.tag}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
            <p><strong>Camille Rousseau</strong> - Consultante Senior GEO/SEO chez Triaina. <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/camille-rousseau-a44488413/">Voir le profil LinkedIn</a></p>
            <p><strong>En bref :</strong> Google My Business s'appelle désormais <strong>Google Business Profile</strong> (GBP). Une fiche complète et active génère 7 fois plus de clics qu'une fiche négligée, et 76 % des recherches locales mobiles débouchent sur une visite physique dans les 24 heures. Ce guide vous donne tout : création pas à pas, checklist d'optimisation, gestion des avis, et connexion avec le référencement IA (GEO).</p>
            <hr />
            <h2>Qu'est-ce que Google My Business (Google Business Profile) ?</h2>
            <p><strong>Google My Business</strong>, rebaptisé <strong>Google Business Profile</strong> en 2021, est la plateforme gratuite de Google qui permet à toute entreprise d'apparaître dans les résultats de recherche locale et sur Google Maps. Concrètement, c'est la fiche qui s'affiche à droite de l'écran - ou en haut sur mobile - quand quelqu'un cherche « plombier Paris 15 » ou « restaurant végétarien Lyon ».</p>
            <p>La fiche centralise les informations essentielles :</p>
            <ul>
              <li><p><strong>Nom, adresse, téléphone</strong> (le fameux NAP)</p></li>
              <li><p><strong>Horaires d'ouverture</strong> (y compris jours fériés)</p></li>
              <li><p><strong>Lien vers le site web</strong></p></li>
              <li><p><strong>Photos et vidéos</strong></p></li>
              <li><p><strong>Services et attributs</strong></p></li>
              <li><p><strong>Avis clients</strong></p></li>
              <li><p><strong>Posts d'actualité</strong></p></li>
            </ul>
            <p>Depuis novembre 2021, la gestion se fait directement depuis la recherche Google ou Maps - plus besoin de passer par une interface dédiée. Le <strong>compte Google My Business</strong> (aujourd'hui compte Google Business Profile) reste le point d'entrée pour administrer plusieurs établissements.</p>
            <blockquote><p><strong>À noter :</strong> Seule <strong>1 entreprise française sur 2</strong> utilise ce service, selon le Baromètre France Num 2025. C'est une opportunité directe pour celles qui jouent le jeu.</p></blockquote>
            <hr />
            <h2>Pourquoi c'est stratégique pour votre SEO local en 2026</h2>
            <h3>L'impact chiffré sur le trafic et les conversions</h3>
            <p>Google Business Profile représente <strong>32 % des facteurs de classement</strong> dans le Local Pack (les 3 résultats Maps qui dominent la SERP locale). C'est le levier individuel le plus puissant en SEO local, devant les backlinks et l'optimisation on-page.</p>
            <p>Les chiffres parlent d'eux-mêmes :</p>
            <table style={{ minWidth: "50px" }}>
              <colgroup>
                <col style={{ minWidth: "25px" }} />
                <col style={{ minWidth: "25px" }} />
              </colgroup>
              <tbody>
                <tr><th colSpan={1} rowSpan={1}><p>Métrique</p></th><th colSpan={1} rowSpan={1}><p>Impact mesuré</p></th></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Clics supplémentaires (fiche complète vs incomplète)</p></td><td colSpan={1} rowSpan={1}><p><strong>×7</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Visites en magasin supplémentaires</p></td><td colSpan={1} rowSpan={1}><p><strong>+70 %</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Trafic via recherches de découverte</p></td><td colSpan={1} rowSpan={1}><p><strong>84 %</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Vues/mois (profil moyen)</p></td><td colSpan={1} rowSpan={1}><p><strong>1 260</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Appels générés/mois (profil vérifié)</p></td><td colSpan={1} rowSpan={1}><p><strong>~50</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Conversion : passage de 3,5 à 3,7 étoiles</p></td><td colSpan={1} rowSpan={1}><p><strong>+120 %</strong></p></td></tr>
                <tr><td colSpan={1} rowSpan={1}><p>Demandes d'itinéraire avec photos</p></td><td colSpan={1} rowSpan={1}><p><strong>+42 %</strong></p></td></tr>
              </tbody>
            </table>
            <h3>Cas client : un cabinet de kinésithérapie à Bordeaux</h3>
            <p>Un cabinet de kinésithérapie suivi par notre équipe affichait une fiche incomplète : pas de photos, horaires jamais mis à jour, zéro réponse aux avis. En 90 jours d'optimisation active - ajout de 18 photos, réponse systématique aux avis, publication de 3 posts/mois, catégorie affinée - les appels ont augmenté de <strong>+34 %</strong> et les demandes d'itinéraire de <strong>+58 %</strong>. Le cabinet est passé de la 7e à la 2e position dans le Local Pack sur sa zone.</p>
            <h3>Le rôle de l'IA en 2026</h3>
            <p>L'environnement change vite. Les <strong>AI Overviews</strong> de Google et les résultats Maps générés par Gemini affichent <strong>68 % moins d'entreprises</strong> que les résultats traditionnels. Être présent dans ce nouveau format n'est plus optionnel : c'est la nouvelle frontière du <strong>comment référencer son entreprise sur Google</strong>.</p>
            <hr />
            <h2>Comment créer une fiche Google My Business : guide étape par étape</h2>
            <h3>Étape 1 - Préparer son compte Google</h3>
            <p>Rendez-vous sur <a target="_blank" rel="noopener noreferrer" href="https://business.google.com">business.google.com</a>. Connectez-vous avec un <strong>compte Google professionnel</strong> dédié - idéalement lié au domaine de votre entreprise. Évitez d'utiliser un Gmail personnel partagé.</p>
            <h3>Étape 2 - Rechercher votre établissement</h3>
            <p>Tapez le nom de votre entreprise dans la barre de recherche. Trois scénarios possibles :</p>
            <ul>
              <li><p><strong>Aucune fiche n'existe</strong> → cliquez sur « Ajouter votre entreprise sur Google »</p></li>
              <li><p><strong>Une fiche existe mais n'est pas revendiquée</strong> → cliquez sur « Revendiquer cet établissement »</p></li>
              <li><p><strong>Une fiche existe et est déjà gérée</strong> → cliquez sur « Demander l'accès » (transfert de propriété)</p></li>
            </ul>
            <h3>Étape 3 - Renseigner les informations de base</h3>
            <p>C'est ici que beaucoup se plantent. Quelques règles fermes :</p>
            <ul>
              <li><p><strong>Nom exact</strong> : celui de votre enseigne ou de votre Kbis. N'ajoutez jamais de mots-clés dans le nom (ex. : « Plombier Express Paris » si ce n'est pas votre nom légal) - c'est une cause de suspension immédiate.</p></li>
              <li><p><strong>Catégorie principale</strong> : choisissez la plus précise possible. « Kinésithérapeute » plutôt que « Professionnel de santé ». Vous pourrez ajouter jusqu'à 9 catégories secondaires ensuite.</p></li>
              <li><p><strong>Adresse ou zone de service</strong> : si vous intervenez chez vos clients (artisan, consultant), cochez « Je livre des biens et services » et masquez l'adresse personnelle.</p></li>
              <li><p><strong>Téléphone et site web</strong> : renseignez-les dès cette étape.</p></li>
            </ul>
            <h3>Étape 4 - Vérifier la fiche</h3>
            <p>La vérification est obligatoire pour que la fiche soit visible. En 2026, la méthode dominante est la <strong>vidéo en direct</strong> : vous montrez vos locaux ou votre activité à un agent Google via votre smartphone. D'autres méthodes existent selon votre situation : courrier postal (code à 5 chiffres), SMS, ou e-mail.</p>
            <blockquote><p><strong>Conseil :</strong> Préparez votre smartphone chargé et soyez dans vos locaux. La vidéo dure environ 5 minutes.</p></blockquote>
            <h3>Étape 5 - Compléter la fiche immédiatement après vérification</h3>
            <p>Ne laissez pas la fiche vide. Dès la validation, ajoutez :</p>
            <ul>
              <li><p><strong>15 à 20 photos</strong> (extérieur, intérieur, équipe, produits)</p></li>
              <li><p><strong>Description</strong> de 750 caractères maximum</p></li>
              <li><p><strong>Horaires complets</strong>, y compris jours fériés</p></li>
              <li><p><strong>Services</strong> détaillés avec descriptions</p></li>
              <li><p><strong>Attributs</strong> (accessibilité, Wi-Fi, parking…)</p></li>
            </ul>
            <hr />
            <h2>Checklist d'optimisation complète de votre Google Business Profile</h2>
            <p>Voici la checklist que nous utilisons chez Triaina pour auditer les fiches de nos clients. Cochez chaque point.</p>
            <h3>Informations de base (NAP)</h3>
            <ul>
              <li><p>Nom identique à 100 % sur le site web, la fiche GBP, les annuaires</p></li>
              <li><p>Adresse complète et correcte (ou zone de service définie)</p></li>
              <li><p>Numéro de téléphone local (pas un numéro surtaxé)</p></li>
              <li><p>URL du site web renseignée avec paramètres UTM si possible</p></li>
              <li><p>Fiche vérifiée et statut « Établissement vérifié » confirmé</p></li>
            </ul>
            <h3>Catégorie et description</h3>
            <ul>
              <li><p>Catégorie principale la plus précise possible</p></li>
              <li><p>Jusqu'à 9 catégories secondaires pertinentes ajoutées</p></li>
              <li><p>Description de 750 caractères rédigée (sans copier-coller du site, mots-clés naturels)</p></li>
              <li><p>Aucun lien ni numéro de téléphone dans la description (interdit par Google)</p></li>
            </ul>
            <h3>Horaires</h3>
            <ul>
              <li><p>Horaires d'ouverture hebdomadaires complets</p></li>
              <li><p>Horaires spéciaux pour les jours fériés (Noël, 1er mai, etc.)</p></li>
              <li><p>Horaires mis à jour en cas de fermeture exceptionnelle</p></li>
            </ul>
            <h3>Photos et vidéos</h3>
            <ul>
              <li><p>Logo et photo de couverture de qualité</p></li>
              <li><p>Minimum 10 photos (idéalement 20+) : extérieur, intérieur, équipe, produits/services</p></li>
              <li><p>Photos récentes (moins de 6 mois pour les plus récentes)</p></li>
              <li><p>Vidéo courte (30 secondes max) si possible</p></li>
            </ul>
            <h3>Services et attributs</h3>
            <ul>
              <li><p>Tous les services listés avec descriptions détaillées</p></li>
              <li><p>Attributs remplis (accessibilité PMR, Wi-Fi, parking, paiement CB…)</p></li>
              <li><p>Menu ou catalogue de produits si applicable</p></li>
            </ul>
            <h3>Posts Google</h3>
            <ul>
              <li><p>Au moins 1 post publié par semaine (offre, actualité, événement)</p></li>
              <li><p>Posts avec photo et appel à l'action (bouton « En savoir plus », « Réserver »…)</p></li>
              <li><p>Posts d'offre avec dates de début et fin</p></li>
            </ul>
            <h3>Avis clients</h3>
            <ul>
              <li><p>Processus de collecte d'avis en place (lien direct, QR code)</p></li>
              <li><p>Réponse à 100 % des avis (positifs et négatifs)</p></li>
              <li><p>Note moyenne ≥ 4,2 étoiles (4,5 est l'optimum conversion)</p></li>
              <li><p>Avis récents (au moins 1 par mois)</p></li>
            </ul>
            <h3>Q&A - Ce qui a changé fin 2025</h3>
            <p><strong>Important :</strong> Google a <strong>supprimé la fonctionnalité Q&A publique</strong> le 3 décembre 2025, après l'arrêt de l'API le 3 novembre 2025. Les anciennes questions/réponses ne sont plus visibles. Cette section a été remplacée par <strong>Ask Maps</strong>, une expérience pilotée par Gemini qui génère des réponses dynamiques à partir de votre fiche, de vos avis et de votre site web.</p>
            <p>Ce que ça change concrètement :</p>
            <ul>
              <li><p>La tactique de « seeding » (se poser soi-même des questions) est <strong>obsolète</strong></p></li>
              <li><p>Vous ne contrôlez plus les réponses affichées dans Ask Maps</p></li>
              <li><p><strong>La qualité de votre description, de vos services et de vos avis devient encore plus critique</strong> : c'est là que l'IA puise ses réponses</p></li>
            </ul>
            <h3>Messagerie et interactions</h3>
            <ul>
              <li><p>Messagerie Google activée (si pertinent pour votre activité)</p></li>
              <li><p>Délai de réponse aux messages &lt; 24h</p></li>
              <li><p>Lien WhatsApp Business ajouté si disponible dans votre région</p></li>
            </ul>
            <hr />
            <h2>Gestion des avis clients : ce qui fait vraiment la différence</h2>
            <p>Les avis représentent <strong>16 % du classement local</strong> et influencent <strong>93 % des décisions d'achat</strong> en France. C'est le levier qui progresse le plus vite - et le plus souvent négligé.</p>
            <h3>Collecter des avis sans enfreindre les règles</h3>
            <p>Google interdit d'acheter des avis ou d'en solliciter en échange d'une contrepartie. En revanche, demander directement à vos clients satisfaits est parfaitement légitime.</p>
            <p><strong>Méthodes efficaces :</strong></p>
            <ul>
              <li><p><strong>Lien direct</strong> : générez votre lien d'avis depuis votre tableau de bord GBP et partagez-le par SMS, e-mail ou WhatsApp</p></li>
              <li><p><strong>QR code</strong> : imprimez-le sur vos factures, cartes de visite, ou affichez-le en caisse</p></li>
              <li><p><strong>Formulation simple</strong> : « Votre retour nous aide à progresser - 2 minutes sur Google ? » suffit</p></li>
            </ul>
            <h3>Répondre aux avis : la méthode</h3>
            <p><strong>Avis positif :</strong> Remerciez, mentionnez un détail spécifique de l'avis, et glissez naturellement un mot-clé local (ex. : « Merci pour votre confiance, ravi de vous avoir accompagné dans votre projet de rénovation à Lyon »).</p>
            <p><strong>Avis négatif :</strong> Ne vous défendez pas publiquement. Reconnaissez le problème, proposez de résoudre en privé, restez factuel. Une réponse calme à un avis négatif rassure les futurs clients autant qu'un avis 5 étoiles.</p>
            <p><strong>Chiffre clé :</strong> Les entreprises qui répondent à plus de 90 % de leurs avis enregistrent <strong>+23 % de vues</strong> et <strong>+18 % de demandes d'itinéraire</strong>.</p>
            <hr />
            <h2>Les erreurs fréquentes à éviter absolument</h2>
            <h3>1. Bourrer le nom d'établissement de mots-clés</h3>
            <p>« Plombier Paris Urgence 24h/24 » au lieu de « Plomberie Dupont » : c'est une violation directe des règles Google. Résultat : suspension de la fiche, parfois définitive.</p>
            <h3>2. Créer des fiches en doublon</h3>
            <p>Google détecte et fusionne (ou supprime) les doublons. Si vous avez plusieurs fiches pour le même établissement, signalez-les vous-même avant que Google ne le fasse à votre place.</p>
            <h3>3. Laisser des horaires erronés</h3>
            <p>Un client qui se déplace pour trouver porte close ne revient pas - et laisse souvent un avis négatif. Mettez à jour vos horaires avant chaque jour férié.</p>
            <h3>4. Ignorer les avis négatifs</h3>
            <p>Le silence est interprété comme de l'indifférence. Répondez toujours, même brièvement.</p>
            <h3>5. Publier des photos de mauvaise qualité</h3>
            <p>Les photos floues ou en basse résolution nuisent à la crédibilité. Minimum 720 × 720 px, format JPG ou PNG.</p>
            <h3>6. Ne jamais publier de posts</h3>
            <p>Une fiche sans activité récente envoie un signal négatif à l'algorithme. Un post par semaine suffit pour maintenir le signal d'activité.</p>
            <h3>7. Négliger la cohérence NAP</h3>
            <p>Si votre adresse est « 12 rue de la Paix » sur votre site et « 12, Rue de la Paix » sur votre fiche GBP, l'IA considère ça comme deux entités différentes. Soyez identique à 100 % partout.</p>
            <hr />
            <h2>GBP, SEO local et GEO : comment votre fiche nourrit les citations IA</h2>
            <p>En 2026, <strong>comment mettre son entreprise sur Google</strong> ne se limite plus à apparaître dans Maps. Votre fiche GBP est devenue la <strong>source de données primaire</strong> que les systèmes IA de Google - Gemini, AI Overviews, Ask Maps - utilisent pour répondre aux requêtes locales.</p>
            <h3>Le mécanisme de citation IA</h3>
            <p>Quand un utilisateur pose une question à Google AI Overviews ou à Ask Maps (« Quel est le meilleur cabinet de kiné spécialisé en sport à Bordeaux ? »), l'IA agrège :</p>
            <ol>
              <li><p><strong>Les données structurées de votre fiche GBP</strong> (catégorie, services, attributs)</p></li>
              <li><p><strong>Le contenu de vos avis</strong> (mots-clés sémantiques, mentions de spécialités)</p></li>
              <li><p><strong>Le contenu de votre site web</strong> (pages de services, données schema.org)</p></li>
              <li><p><strong>Les citations tierces</strong> (annuaires, presse locale, chambres de commerce)</p></li>
            </ol>
            <p>Une fiche incomplète ou incohérente est tout simplement ignorée par l'IA. Une fiche optimisée devient une <strong>source citée</strong> dans les réponses générées.</p>
            <h3>Actions concrètes pour le GEO local</h3>
            <ul>
              <li><p><strong>Déployez le schéma</strong> <code>LocalBusiness</code> sur votre site avec les propriétés <code>areaServed</code>, <code>hasOfferCatalog</code>, <code>aggregateRating</code></p></li>
              <li><p><strong>Cohérence NAP absolue</strong> sur tous les points de contact (GBP, site, Bing Places, Apple Maps, Pages Jaunes, annuaires sectoriels)</p></li>
              <li><p><strong>Inscriptions dans les annuaires locaux</strong> : chambre de commerce, fédérations professionnelles, presse locale - ce sont des signaux de confiance que l'IA valorise</p></li>
              <li><p><strong>Testez votre visibilité IA</strong> : cherchez votre activité + ville dans ChatGPT (avec web activé), Perplexity et Google AI Overviews. Si vous n'apparaissez pas, votre fiche et vos citations sont insuffisantes</p></li>
            </ul>
            <blockquote><p>Pour aller plus loin sur le référencement dans les systèmes IA, consultez notre expertise GEO et notre guide sur l'<a target="_blank" rel="noopener noreferrer" href="/agence-referencement-ia">agence de référencement IA</a>.</p></blockquote>
            <hr />
            <h2>Suivre les performances de votre fiche</h2>
            <p>Le tableau de bord GBP Insights donne accès aux métriques essentielles :</p>
            <ul>
              <li><p><strong>Vues</strong> (recherche directe vs découverte)</p></li>
              <li><p><strong>Actions</strong> : clics vers le site, appels, demandes d'itinéraire</p></li>
              <li><p><strong>Performances des photos</strong> (vues vs concurrents)</p></li>
              <li><p><strong>Performances des posts</strong></p></li>
            </ul>
            <p><strong>Objectif à viser :</strong> un <strong>taux d'action ≥ 5 %</strong> (somme des clics, appels, itinéraires divisée par les vues). En dessous, l'optimisation des photos et de la description est prioritaire.</p>
            <p>Depuis juin 2025, Google a simplifié son reporting : les mots-clés à faible volume (&lt; 100 impressions) disparaissent des rapports. Complétez avec des <strong>paramètres UTM</strong> sur votre lien de site web pour attribuer précisément les conversions issues de GBP dans Google Analytics.</p>
            <hr />
            <h2>FAQ - Google My Business et Google Business Profile</h2>
            <h3>Quelle est la différence entre Google My Business et Google Business Profile ?</h3>
            <p>C'est le même outil. Google a renommé « Google My Business » en « Google Business Profile » en novembre 2021. Le nom « Google My Business » reste très utilisé dans le langage courant, mais la plateforme officielle s'appelle désormais Google Business Profile. La gestion se fait directement depuis la recherche Google ou Maps.</p>
            <h3>Comment créer une fiche Google My Business gratuitement ?</h3>
            <p>Rendez-vous sur <a target="_blank" rel="noopener noreferrer" href="https://business.google.com">business.google.com</a>, connectez-vous avec un compte Google, saisissez le nom de votre entreprise et suivez les étapes de création. La vérification (vidéo en direct, courrier ou SMS) est obligatoire. Le service est entièrement gratuit.</p>
            <h3>Comment créer une page Google pour mon entreprise si elle existe déjà ?</h3>
            <p>Si une fiche existe déjà (créée automatiquement par Google ou par un tiers), vous devez la <strong>revendiquer</strong> plutôt que d'en créer une nouvelle. Cherchez votre entreprise sur Google Maps, cliquez sur « Revendiquer cet établissement » et suivez la procédure de vérification.</p>
            <h3>Le Q&A Google Business Profile existe-t-il encore en 2026 ?</h3>
            <p>Non. Google a supprimé la fonctionnalité Q&A publique le 3 décembre 2025. Elle a été remplacée par <strong>Ask Maps</strong>, une expérience IA pilotée par Gemini qui génère des réponses dynamiques à partir de votre fiche, de vos avis et de votre site. Vous ne pouvez plus gérer manuellement les questions/réponses.</p>
            <h3>Combien de temps faut-il pour qu'une fiche optimisée améliore le classement local ?</h3>
            <p>Les premiers effets sont visibles en <strong>4 à 8 semaines</strong> pour les actions rapides (photos, horaires, réponses aux avis). Une optimisation complète avec acquisition régulière d'avis et posts hebdomadaires produit des résultats significatifs en <strong>3 mois</strong>. Le cas client présenté dans cet article (cabinet de kiné à Bordeaux) a atteint la 2e position du Local Pack en 90 jours.</p>
            <hr />
            <h2>Sources</h2>
            <ul>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://support.google.com/business/">Google Business Profile - Support officiel Google</a></p></li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de">France Num - Google Business Profile : le service de référencement indispensable à la visibilité locale</a> <em>(mis à jour mars 2026)</em></p></li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://www.brightlocal.com/resources/local-seo-statistics/">BrightLocal - Local SEO Statistics 2026</a></p></li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="https://feedcast.ai/fr/blog/google-arrete-business-profile-q-a-api">Feedcast.ai - Google arrête l'API Q&A Business Profile</a></p></li>
            </ul>
            <hr />
            <p><em>Vous souhaitez un audit de votre fiche Google Business Profile ou un accompagnement SEO local complet ?</em> <a target="_blank" rel="noopener noreferrer" href="/contact"><em>Contactez notre équipe</em></a> <em>ou découvrez nos articles complémentaires :</em></p>
            <ul>
              <li><p><a target="_blank" rel="noopener noreferrer" href="/blog/seo-local-paris-2026"><em>SEO Local Paris 2026 : stratégie et bonnes pratiques</em></a></p></li>
              <li><p><a target="_blank" rel="noopener noreferrer" href="/blog/audit-seo-paris-2026"><em>Audit SEO Paris 2026 : méthodologie complète</em></a></p></li>
              <li><p><a href="/blog/eeat-seo-guide-complet"><em>E-E-A-T SEO : Guide Complet</em></a></p></li>
              <li><p><a href="/blog/audit-eeat-2026"><em>Audit E-E-A-T 2026 : comment évaluer votre autorité</em></a></p></li>
            </ul>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-200 max-w-4xl mx-auto flex justify-between items-center">
            <p className="text-slate-500 text-sm">Publié le {post.date}</p>
            <div className="flex gap-4">
              <button onClick={handleShare} className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Partager cet article">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
