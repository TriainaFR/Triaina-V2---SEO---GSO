
import { FAQItem, ReferenceItem, ChatStep, PartnerItem, BlogItem, JobOffer, TeamMember, HistoryItem, NavLink, ExpertiseContent, Page } from './types';

export const PAGE_TO_URL: Record<string, string> = {
  'home': '/',
  'team': '/agence',
  'references': '/references',
  'blog': '/blog',
  'contact': '/contact',
  'faq': '/faq',
  'legal': '/mentions-legales',
  'expertise-seo': '/expertise-seo',
  'expertise-sea': '/expertise-sea',
  'expertise-gso': '/expertise-gso',
  'expertise-gsa': '/expertise-gsa',
  'expertise-media': '/expertise-media',
  'expertise-content': '/expertise-contenu',
  'seo-paris': '/agence-seo-paris',
  'recrutement': '/recrutement',
  'agence-referencement-ia': '/agence-referencement-ia',
  'agence-referencement-ia-paris': '/agence-referencement-ia-paris',
  'referencement-ia-guide': '/blog/referencement-ia-guide-complet',
  'comment-ranker-chatgpt': '/blog/ranker-chatgpt-2025',
  'seo-vs-referencement-ia': '/blog/seo-vs-referencement-ia',
  'gso-2025-guide-complet': '/blog/gso-2025-guide-complet',
  'audit-seo-guide': '/blog/audit-seo-guide-complet',
  'eeat-seo-guide': '/blog/eeat-seo-guide-complet',
  'backlinks-seo-guide': '/blog/backlinks-seo-guide',
  'referencement-ia-paris-guide-local': '/blog/referencement-ia-paris-guide-local'
};

export const ROUTES: Record<string, Page> = {
  '/': 'home',
  '/agence': 'team',
  '/references': 'references',
  '/blog': 'blog',
  '/contact': 'contact',
  '/faq': 'faq',
  '/mentions-legales': 'legal',
  '/expertise-seo': 'expertise-seo',
  '/expertise-sea': 'expertise-sea',
  '/expertise-gso': 'expertise-gso',
  '/expertise-gsa': 'expertise-gsa',
  '/expertise-media': 'expertise-media',
  '/expertise-content': 'expertise-content',
  '/expertise-contenu': 'expertise-content',
  '/automatisation-contenu': 'expertise-content',
  '/services': 'team',
  '/agence-seo-paris': 'seo-paris',
  '/recrutement': 'recrutement',
  '/agence-referencement-ia': 'agence-referencement-ia',
  '/agence-referencement-ia-paris': 'agence-referencement-ia-paris',
  '/blog/referencement-ia-guide-complet': 'referencement-ia-guide',
  '/blog/ranker-chatgpt-2025': 'comment-ranker-chatgpt',
  '/blog/seo-vs-referencement-ia': 'seo-vs-referencement-ia',
  '/blog/gso-2025-guide-complet': 'gso-2025-guide-complet',
  '/blog/audit-seo-guide-complet': 'audit-seo-guide',
  '/blog/eeat-seo-guide-complet': 'eeat-seo-guide',
  '/blog/e-e-a-t-seo-guide': 'eeat-seo-guide',
  '/blog/backlinks-seo-guide': 'backlinks-seo-guide',
  '/blog/referencement-ia-paris-guide-local': 'referencement-ia-paris-guide-local'
};

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'ACCUEIL' },
  { id: 'team', label: 'TRIAINA' },
  { 
    id: 'expertise', 
    label: 'EXPERTISE',
    children: [
        { id: 'expertise-seo', label: 'Expertise SEO' },
        { id: 'expertise-sea', label: 'Expertise SEA' },
        { id: 'expertise-gso', label: 'Expertise GSO' },
        { id: 'expertise-gsa', label: 'Expertise GSA' },
        { id: 'expertise-media', label: 'Expertise Média' },
        { id: 'expertise-content', label: 'Expertise Automatisation de Contenu' }
    ]
  },
  {
    id: 'seo-landing',
    label: 'POUR LE SEO',
    children: [
        { id: 'seo-paris', label: 'Agence SEO Paris' },
        { id: 'agence-referencement-ia', label: 'Agence Référencement IA' },
        { id: 'agence-referencement-ia-paris', label: 'Agence Référencement IA Paris' }
    ]
  },
  { id: 'references', label: 'RÉFÉRENCES' },
  { id: 'blog', label: 'BLOG' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'faq', label: 'FAQ' },
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/triaina' }
];

export const EXPERTISE_DATA: Record<string, ExpertiseContent> = {
  'expertise-seo': {
    id: 'expertise-seo',
    title: 'Expertise SEO',
    subtitle: 'Search Engine Optimization',
    description: "Le SEO n'est plus une simple question de mots-clés. C'est une architecture technique, sémantique et d'autorité. Nous construisons des écosystèmes digitaux capables de résister aux mises à jour algorithmiques et de dominer les SERPs durablement.",
    details: [
        { title: "Audit Technique", desc: "Analyse profonde : Crawlability, Indexabilité, Core Web Vitals." },
        { title: "Sémantique & Entités", desc: "Structuration du contenu pour le Knowledge Graph." },
        { title: "Netlinking Haute Autorité", desc: "Campagnes de liens via nos médias propriétaires." },
        { title: "SEO Local & International", desc: "Déploiement géolocalisé et multilingue." }
    ],
    tags: ["Google", "Technique", "Sémantique", "Audit"]
  },
  'expertise-sea': {
    id: 'expertise-sea',
    title: 'Expertise SEA',
    subtitle: 'Search Engine Advertising',
    description: "L'acquisition payante pilotée par la donnée. Nous optimisons vos campagnes Google Ads et Social Ads pour maximiser le ROAS tout en alimentant vos signaux de trafic pour le référencement organique.",
    details: [
        { title: "Google Ads", desc: "Search, Shopping, Display, Performance Max." },
        { title: "Social Ads", desc: "Stratégies d'acquisition sur LinkedIn, Meta, TikTok." },
        { title: "Tracking Avancé", desc: "Server-side tagging et attribution." },
        { title: "Retargeting IA", desc: "Ciblage prédictif des audiences." }
    ],
    tags: ["Ads", "Acquisition", "ROAS", "Google"]
  },
  'expertise-gso': {
    id: 'expertise-gso',
    title: 'Expertise GSO',
    subtitle: 'Generative Search Optimization',
    description: "La nouvelle frontière. Nous optimisons votre marque pour qu'elle soit citée, recommandée et référencée par les IA génératives (ChatGPT, Gemini, Claude, Perplexity). Ne disparaissez pas du web conversationnel.",
    details: [
        { title: "LLM Training", desc: "Optimisation des sources d'entraînement des modèles." },
        { title: "Entity Optimization", desc: "Renforcement de l'identité de marque dans les vecteurs." },
        { title: "Citations IA", desc: "Maximisation des mentions dans les réponses générées." },
        { title: "GSO Audit", desc: "Analyse de votre visibilité actuelle dans les IA." }
    ],
    tags: ["IA", "ChatGPT", "Gemini", "LLM"]
  },
  'expertise-gsa': {
    id: 'expertise-gsa',
    title: 'Expertise GSA',
    subtitle: 'Generative Search Advertising',
    description: "La publicité dans les réponses génératives. Alors que Google intègre la SGE et que les chatbots introduisent des formats publicitaires, nous positionnons vos annonces au cœur des conversations IA.",
    details: [
        { title: "Ads in SGE", desc: "Placement publicitaire dans Google Search Generative Experience." },
        { title: "Sponsored Chat", desc: "Formats émergents dans les interfaces conversationnelles." },
        { title: "Contextual IA Ads", desc: "Publicité ultra-ciblée basée sur l'intention sémantique." },
        { title: "Innovation", desc: "Veille et test des nouveaux formats publicitaires IA." }
    ],
    tags: ["Publicité IA", "SGE", "Futur", "Ads"]
  },
  'expertise-media': {
    id: 'expertise-media',
    title: 'Expertise Média',
    subtitle: 'Influence & Digital PR',
    description: "L'autorité ne se décrète pas, elle se construit. Grâce à notre réseau média propriétaire (Yonder, Les Hardis) et nos relations presse, nous transformons votre marque en référence incontournable pour les utilisateurs et les algorithmes.",
    details: [
        { title: "Relations Presse", desc: "Diffusion stratégique de vos narratifs." },
        { title: "Brand Content", desc: "Production de contenus premium sur nos médias." },
        { title: "E-E-A-T Building", desc: "Construction des signaux d'Expertise et d'Autorité." },
        { title: "Influence B2B/B2C", desc: "Partenariats avec les leaders d'opinion." }
    ],
    tags: ["Presse", "Branding", "Autorité", "PR"]
  },
  'expertise-content': {
    id: 'expertise-content',
    title: 'Expertise Automatisation de Contenu',
    subtitle: 'Stratégie Éditoriale Hybride',
    description: "Le contenu est le carburant des moteurs de recherche et des IA. Nous produisons une stratégie éditoriale dense, experte et structurée pour satisfaire l'intention de recherche humaine et la compréhension machine.",
    details: [
        { title: "Stratégie Éditoriale", desc: "Planning, ton, et lignes directrices." },
        { title: "Rédaction Expert", desc: "Contenus deep-dive rédigés par des spécialistes." },
        { title: "Optimisation Sémantique", desc: "Enrichissement pour le NLP (Natural Language Processing)." },
        { title: "Formats Hybrides", desc: "Articles, Livres Blancs, Études de cas." }
    ],
    tags: ["Copywriting", "Stratégie", "Content", "NLP"]
  }
};

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: 'ref_yonder',
    client: 'Yonder',
    title: 'Leadership Média SEO & GSO',
    summary: 'Transformation structurelle pour dominer le marché des LLM et du SEO Travel.',
    challenge: 'S\'imposer comme la référence absolue du voyage de luxe face aux nouveaux comportements de recherche assistée par IA.',
    solution: '',
    results: [
        'Leader thématique sur les moteurs IA', 
        'Hausse significative du trafic SEO qualifié',
        'Source privilégiée pour les réponses génératives'
    ],
    tags: ['Média', 'GSO Leadership', 'Travel'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ref_leshardis',
    client: 'Les Hardis',
    title: 'Audit & Stratégie SEO',
    summary: 'Audit technique approfondi et roadmap de performance.',
    challenge: 'Identifier les freins techniques limitant la visibilité organique et préparer le site aux standards Core Web Vitals.',
    solution: '',
    results: [
        'Audit Technique & Sémantique Complet', 
        'Correction de la dette technique',
        'Optimisation de l\'indexabilité'
    ],
    tags: ['Lifestyle', 'Audit SEO', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ref_bestrestaurants',
    client: 'Best Restaurants Paris',
    title: 'Référencement Gastronomique Hybride',
    summary: 'Double optimisation SEO & GSO pour le guide leader.',
    challenge: 'Maintenir et accroître les parts de marché face à la concurrence des agrégateurs et des recommandations directes par IA.',
    solution: '',
    results: [
        'Positionnement Top 3 Google', 
        'Intégration dans les recommandations IA',
        'Hausse du trafic transactionnel'
    ],
    tags: ['Gastronomie', 'SEO Local', 'GSO'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ref_skilink',
    client: 'Skilink',
    title: 'SaaS B2B - Automatisation ESN',
    summary: 'Optimisation GSO pour une solution SaaS d\'automatisation commerciale dédiée aux ESN & Cabinets de Conseil.',
    challenge: 'Faire émerger ce SaaS de niche comme l\'outil incontournable auprès des IA pour les requêtes B2B complexes des dirigeants d\'ESN (ex: "Meilleurs outils automatisation ESN").',
    solution: '',
    results: [
        'Captation de trafic décisionnel B2B',
        'Accélération du volume de démos qualifiées'
    ],
    tags: ['SaaS B2B', 'Tech', 'GSO'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
    {
    id: 'ref_groupe_hotelier',
    client: 'Groupe Hôtelier',
    title: 'Architecture SEO Internationale',
    summary: 'Optimisation technique pour une clientèle mondiale exigente.',
    challenge: 'Assurer une visibilité parfaite sur les marchés US et Asiatiques pour des hôtels parisiens iconiques.',
    solution: '',
    results: [
        '0% à 70% de citation IA en 3 mois', 
        'Top 3 Google et cité parmi 8 sites sur la 1ère page via nos médias partenaires',
        'Travaux en cours (→ Août 2026) : Maximisation continue des positions & citations'
    ],
    tags: ['Hotels', 'Technical SEO', 'International'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: 'best-restaurants',
    name: 'Best Restaurants Paris',
    url: 'https://bestrestaurantsparis.com/fr/',
    logo: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://bestrestaurantsparis.com&size=128',
    category: 'GASTRONOMIE & LIFESTYLE',
    description: 'Partenaire stratégique pour l\'autorité sémantique culinaire. Ce partenariat permet à nos clients du secteur Horeca de bénéficier d\'une intégration privilégiée dans le Knowledge Graph des meilleures tables, signalant aux IA une pertinence et un prestige de premier plan.',
  },
  {
    id: 'yonder',
    name: 'Yonder',
    url: 'https://www.yonder.fr/',
    logo: 'https://logo.clearbit.com/yonder.fr',
    category: 'VOYAGE & LUXE',
    description: 'Alliance éditoriale exclusive. En collaborant avec Yonder, référence du voyage d\'exception, nous construisons des backlinks de très haute autorité et des co-citations contextuelles qui renforcent drastiquement les signaux E-E-A-T pour nos clients hôteliers et travel.',
  },
  {
    id: 'les-hardis',
    name: 'Les Hardis',
    url: 'https://www.leshardis.com/',
    logo: 'https://logo.clearbit.com/leshardis.com',
    category: 'CULTURE & ART DE VIVRE',
    description: 'Curateurs de l\'art de vivre. Une synergie média qui place nos marques au cœur des conversations culturelles. L\'association avec Les Hardis génère des entités nommées (Named Entities) puissantes, essentielles pour dominer les résultats de recherche générative sur les segments lifestyle.',
  }
];

export const BLOG_DATA: BlogItem[] = [
  {
    id: 'seo-vs-referencement-ia',
    source: 'Guide Comparatif',
    logo: '',
    date: '02 MARS 2026',
    title: 'SEO vs Référencement IA : Quelles différences en 2025 ?',
    excerpt: 'Guide complet sur les différences entre SEO et Référencement IA en 2025. Comprenez les avantages et comment combiner les deux.',
    url: '/blog/seo-vs-referencement-ia',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'comment-ranker-chatgpt',
    source: 'Guide Stratégique',
    logo: '',
    date: '02 MARS 2026',
    title: 'Comment ranker sur ChatGPT en 2025 ? Guide complet',
    excerpt: 'Guide complet pour ranker sur ChatGPT en 2025 : critères de ranking, stratégie de contenu, netlinking et outils.',
    url: '/blog/ranker-chatgpt-2025',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'referencement-ia-guide',
    source: 'Guide Triaina',
    logo: '',
    date: '02 MARS 2026',
    title: 'Référencement IA : Guide Complet 2025 (ChatGPT, Gemini, Perplexity)',
    excerpt: 'Le référencement IA est devenu incontournable en 2025. Découvrez comment optimiser votre visibilité sur ChatGPT, Gemini et Perplexity dans ce guide complet.',
    url: '/blog/referencement-ia-guide-complet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'gso-2025-guide-complet',
    source: 'Guide GSO',
    logo: '',
    date: '09 MARS 2026',
    title: 'GSO 2025 : Guide Complet de Generative Search Optimization',
    excerpt: 'Découvrez ce qu\'est le GSO (Generative Search Optimization) et comment l\'implémenter pour dominer à la fois Google et les IA génératives en 2025.',
    url: '/blog/gso-2025-guide-complet',
    image: 'https://picsum.photos/seed/generative-ai-search/1200/675',
    tag: 'GUIDE'
  },
  {
    id: 'audit-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '09 MARS 2026',
    title: 'Audit SEO : Guide Complet Étape par Étape',
    excerpt: 'Un audit SEO est l\'analyse complète et approfondie de votre site web. Découvrez comment réaliser un audit SEO en 2025.',
    url: '/blog/audit-seo-guide-complet',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'eeat-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '16 MARS 2026',
    title: 'E-E-A-T SEO : Guide Complet pour Dominer Google en 2025',
    excerpt: 'En 2025, Google classe les marques, les experts, les autorités. Découvrez comment construire et optimiser votre E-E-A-T pour dominer les résultats de recherche.',
    url: '/blog/eeat-seo-guide-complet',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'backlinks-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '16 MARS 2026',
    title: 'Backlinks SEO : Guide Complet pour Dominer Google en 2025',
    excerpt: 'En 2025, les backlinks restent l\'un des facteurs de classement les plus importants de Google. Découvrez comment générer des liens de qualité sans risque.',
    url: '/blog/backlinks-seo-guide',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'referencement-ia-paris-guide-local',
    source: 'Guide Local',
    logo: '',
    date: '16 MARS 2026',
    title: 'Référencement IA Paris : Guide Local pour Dominer ChatGPT & Gemini en 2025',
    excerpt: 'Guide référencement IA Paris 2025 : GSO pour ChatGPT, Gemini, Perplexity. Stratégie locale, cas clients, données propriétaires. +200-300% de citations IA.',
    url: '/blog/referencement-ia-paris-guide-local',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  }
];

export const CAREERS_DATA: JobOffer[] = [];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 't1',
    name: 'Alexandre',
    role: 'CEO & Fondateur',
    bio: 'Fondateur de Triaina. Visionnaire de la transition GSO, il pilote la stratégie globale et l\'innovation algorithmique de l\'agence pour définir les nouveaux standards de la visibilité.',
    expertise: ['GSO Strategy', 'Business Intelligence', 'Leadership'],
    image: './alexandre-ceo.jpg'
  },
  {
    id: 't2',
    name: 'Sarah L.',
    role: 'Head of AI Engineering',
    bio: 'Docteure en TAL (Traitement Automatique du Langage). Elle conçoit les architectures de données qui permettent aux marques de dialoguer avec les LLMs.',
    expertise: ['Python', 'NLP', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't3',
    name: 'Julien M.',
    role: 'Directeur Média & Contenu',
    bio: 'Ancien rédacteur en chef Tech. Il assure que chaque contenu produit par Triaina possède la densité informationnelle et le style requis pour l\'autorité.',
    expertise: ['Brand Voice', 'Media Relations', 'Content Strategy'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];

export const HISTORY_DATA: HistoryItem[] = [
  {
    year: '2000 - 2023',
    title: 'L\'Ère des Pionniers en Référencement Naturel',
    description: "L'aventure Triaina trouve ses racines en 2000, lorsque nos associés fondent leur première agence SEO. En quatre ans, ils développent l'entreprise jusqu'à 40 collaborateurs, avant de la céder à un acteur majeur du secteur. Ce succès marque le début d'un parcours entrepreneurial intense : au fil des années, ils créent puis revendent plusieurs agences SEO à de grands groupes, jusqu'à la cession de leur dernière structure en 2023. Résultat : 23 années d'expertise en référencement naturel, audit SEO complet, stratégie de référencement et conseil SEO expert."
  },
  {
    year: '2014',
    title: 'La Puissance Média - Autorité & Contenu Premium',
    description: "En 2014, nos associés lancent un groupe média dédié aux univers du voyage, du lifestyle, de la gastronomie et du luxe. Année après année, ce média gagne en audience, en influence et en crédibilité. Aujourd'hui, c'est un atout majeur pour construire l'autorité de nos clients et leur visibilité auprès des IA génératives."
  },
  {
    year: '2022 - 2024',
    title: 'Le Tournant de l\'IA - Naissance du GSO',
    description: "En novembre 2022, OpenAI dévoile ChatGPT, rapidement suivi par d'autres modèles de langage (Gemini, Perplexity, Claude). Les usages évoluent, les recherches se déplacent, et Google commence à perdre du terrain en termes de volume de requêtes quotidiennes. Face à cette transformation du référencement naturel, nos associés choisissent, dès 2024, de prendre le virage de l'IA appliquée au SEO, en s'appuyant sur la puissance éditoriale et technologique de leur média. C'est la naissance du GSO (Generative Search Optimization) : l'évolution naturelle du SEO traditionnel."
  },
  {
    year: '2025',
    title: 'La Genèse de Triaina - Agence SEO & GSO',
    description: "En début 2025, notre association voit le jour et nous créons Triaina, la première agence spécialisée en SEO & GSO, intégrant une division média. Triaina est née de la conviction que le référencement naturel et l'optimisation pour les IA génératives doivent aller de pair."
  }
];

export const AMBITION_TEXT = "Accompagner nos clients dans la nouvelle ère des recherches guidées par les LLM, leur offrir une longueur d'avance et les aider à capter les opportunités d'un web en pleine mutation.";

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'q1',
    question: "Qu'est-ce que Triaina ?",
    answer: "Triaina est une agence spécialisée en SEO, GSO (référencement IA) et développement média. Nous aidons les entreprises à être visibles sur Google et dans les réponses générées par les IA comme ChatGPT, Gemini, Claude ou Perplexity."
  },
  {
    id: 'q2',
    question: "Qu'est-ce que le GSO (Generative Search Optimization) ?",
    answer: "Le GSO est l'optimisation de la visibilité dans les IA génératives. Il vise à faire apparaître votre marque dans les réponses produites par les modèles de langage et les moteurs de recherche IA."
  },
  {
    id: 'q3',
    question: "Quelle est la différence entre le SEO et le GSO ?",
    answer: "Le SEO optimise la visibilité sur Google tandis que le GSO optimise la visibilité dans les réponses générées par les IA. Les deux stratégies sont complémentaires."
  },
  {
    id: 'q4',
    question: "Pourquoi les entreprises doivent-elles optimiser leur présence auprès des IA ?",
    answer: "Parce que les utilisateurs posent de plus en plus leurs questions directement aux IA. Être visible uniquement sur Google n'est plus suffisant : la présence dans les réponses IA devient essentielle."
  },
  {
    id: 'q5',
    question: "Comment Triaina optimise-t-elle la visibilité dans les IA ?",
    answer: "Triaina structure le contenu pour les modèles de langage, renforce l'autorité via son pôle média, optimise les entités, le contexte sémantique et les signaux E-E-A-T afin d'être intégré dans les réponses IA."
  },
  {
    id: 'q6',
    question: "Comment votre pôle média améliore-t-il le SEO et le GSO ?",
    answer: "Nos médias lifestyle, voyage et luxe renforcent l'autorité éditoriale, génèrent des backlinks naturels et créent des sources fiables, souvent utilisées par les IA comme références."
  },
  {
    id: 'q7',
    question: "Proposez-vous des audits SEO et GSO ?",
    answer: "Oui, nous réalisons des audits SEO complets, des audits GSO, des analyses techniques, sémantiques, E-E-A-T, et des diagnostics de visibilité dans les réponses IA."
  },
  {
    id: 'q8',
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer: "PME, ETI, groupes, e-commerces, marques travel, luxe, tech, SaaS."
  },
  {
    id: 'q9',
    question: "Comment savoir si mon site est prêt pour le référencement IA ?",
    answer: "Nous analysons : vos données structurées, votre profondeur sémantique, votre autorité éditoriale, la clarté de vos entités, et votre présence dans les moteurs IA."
  },
  {
    id: 'q10',
    question: "Triaina est-elle vraiment une agence pionnière dans le GSO ?",
    answer: "Oui : nos associés créent des agences SEO depuis 2000, ont monté un groupe média en 2014, et ont pris le virage IA dès 2024. Triaina fait partie des premières agences SEO IA hybrides en France."
  }
];

export const SEO_HOME_CONTENT = {
    title: "Agence SEO & GSO à Paris : Dominez la Recherche de Demain",
    intro: "Triaina redéfinit les standards du référencement en fusionnant l'expertise SEO technique traditionnelle avec la puissance émergente du GSO (Generative Search Optimization). Basée à Paris, notre agence accompagne les marques qui refusent l'invisibilité dans l'ère des assistants IA.",
    sections: [
        {
            subtitle: "Pourquoi une stratégie hybride SEO + GSO ?",
            text: "Le paysage numérique mute. Google intègre la SGE (Search Generative Experience), et des millions d'utilisateurs se tournent vers ChatGPT ou Gemini pour leurs recommandations. Une simple stratégie de mots-clés ne suffit plus. Triaina déploie une architecture sémantique qui parle à la fois aux algorithmes d'indexation (crawlers) et aux modèles de langage (LLMs). Nous transformons votre marque en une entité d'autorité incontournable."
        },
        {
            subtitle: "Notre Expertise : Au-delà du mot-clé",
            text: "Notre approche ne se limite pas à placer des balises. Nous construisons un écosystème. Grâce à notre pôle média intégré, nous générons des signaux d'autorité réels (backlinks de haute qualité, mentions presse) que les IA utilisent pour valider la fiabilité de l'information. C'est le cœur du E-E-A-T (Expérience, Expertise, Autorité, Fiabilité) exigé par Google aujourd'hui."
        },
        {
            subtitle: "Audit et Accompagnement sur-mesure",
            text: "Chaque marque possède un ADN numérique unique. Nos audits SEO & GSO plongent au cœur de votre structure technique (Core Web Vitals, Schema.org) et de votre empreinte sémantique. Nous identifions les opportunités manquées où vos concurrents sont invisibles et nous déployons une roadmap précise pour capturer ce trafic qualifié, que ce soit via une recherche vocale, une requête Google ou une conversation avec une IA."
        }
    ]
};

export const CHAT_STEPS: ChatStep[] = [
  {
    id: 1,
    botMessage: "Bienvenue sur le portail Triaina.\nJe suis votre agent de liaison.\nPour commencer, quel est le nom de votre entreprise ?",
    fieldName: "company",
    placeholder: "Nom de l'entreprise...",
    type: "text"
  },
  {
    id: 2,
    botMessage: "Entendu. Pour que je puisse analyser votre empreinte numérique actuelle, quelle est l'URL de votre site web ?",
    fieldName: "website",
    placeholder: "https://www.votre-site.com",
    type: "url"
  },
  {
    id: 3,
    botMessage: "J'initialise le contexte.\nÀ quelle adresse email souhaitez-vous recevoir le rapport de pré-qualification ?",
    fieldName: "email",
    placeholder: "votre@email.com",
    type: "email"
  },
  {
    id: 4,
    botMessage: "Dernière étape.\nDécrivez brièvement votre défi actuel (Baisse de trafic, Lancement produit, Concurrence IA...).",
    fieldName: "project",
    placeholder: "Décrivez votre défi...",
    type: "textarea"
  }
];
