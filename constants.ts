
import { FAQItem, ReferenceItem, ChatStep, PartnerItem, BlogItem, JobOffer, TeamMember, HistoryItem, NavLink, ExpertiseContent, Page } from './types';

export const PAGE_TO_URL: Record<string, string> = {
  'referencement-ia-ecommerce-2026': '/blog/referencement-ia-ecommerce-2026',
  'maillage-interne-seo-2026': '/blog/maillage-interne-seo-2026',
  'agence-seo-strasbourg-2026': '/blog/agence-seo-strasbourg-2026',
  'agence-seo-nantes-2026': '/blog/agence-seo-nantes-2026',
  'strategie-contenu-seo-2026': '/blog/strategie-contenu-seo-2026',

  'seo-local-france-2026': '/blog/seo-local-france',
  'agence-seo-ecommerce-2026': '/blog/agence-seo-ecommerce',
  'agence-seo-france': '/blog/agence-seo-france',
  'ia-analyse-donnees-optimisation-seo-2026': '/blog/ia-analyse-donnees-optimisation-seo-2026',
  'core-web-vitals-seo-2026': '/blog/core-web-vitals-seo-2026',
  'google-business-profile-2026': '/blog/google-business-profile-2026',
  'agence-seo-toulouse-2026': '/blog/agence-seo-geo-toulouse-2026',
  'llms-txt-2026': '/blog/llms-txt-faut-il-l-implementer-en-2026',

  'home': '/',
  'team': '/agence',
  'references': '/references',
  'blog': '/blog',
  'contact': '/contact',
  'faq': '/faq',
  'legal': '/mentions-legales',
  'expertise-seo': '/expertise-seo',
  'expertise-sea': '/expertise-sea',
  'expertise-gso': '/expertise-geo',
  'expertise-geo': '/expertise-geo',
  'expertise-gsa': '/expertise-gsa',
  'expertise-media': '/expertise-media',
  'expertise-content': '/expertise-contenu',
  'expertise-ai-overview': '/expertise-ai-overview',
  'seo-paris': '/agence-seo-paris',
  'recrutement': '/recrutement',
  'agence-referencement-ia': '/agence-referencement-ia',
  'agence-referencement-ia-paris': '/agence-referencement-ia-paris',
  'referencement-ia-guide': '/blog/referencement-ia-guide-complet',
  'comment-ranker-chatgpt': '/blog/ranker-chatgpt-2026',
  'seo-vs-referencement-ia': '/blog/seo-vs-referencement-ia',
  'gso-2026-guide-complet': '/blog/gso-2026-guide-complet',
  'audit-seo-guide': '/blog/audit-seo-guide-complet',
  'eeat-seo-guide': '/blog/eeat-seo-guide-complet',
  'backlinks-seo-guide': '/blog/backlinks-seo-guide',
  'referencement-ia-paris-guide-local': '/blog/referencement-ia-paris-guide-local',
  'tendances-seo-gso-2026': '/blog/tendances-seo-gso-2026',
  'seo-technique-vs-contenu': '/blog/seo-technique-vs-seo-contenu',
  'gso-definition-2026': '/blog/gso-definition-2026',
  'geo-definition-2026': '/blog/geo-definition-2026',
  'citations-ia-generatives': '/blog/citations-ia-generatives',
  'audit-seo-paris-2026': '/blog/audit-seo-paris-2026',
  'seo-gso-geo-aeo-differences-2026': '/blog/seo-gso-geo-aeo-differences-2026',
  'optimiser-site-llm-guide-seo-complet-2026': '/blog/optimiser-site-llm-guide-seo-complet-2026',
  'etre-cite-par-chatgpt': '/blog/etre-cite-par-chatgpt',
  'google-ai-overview-france': '/blog/google-ai-overview-france',
  'strategie-contenu-ia-first': '/blog/strategie-contenu-ia-first',
  'schema-org-donnees-structurees-gso-2026': '/blog/schema-org-donnees-structurees-gso',
  'agence-seo-vs-agence-gso': '/blog/agence-seo-vs-agence-gso',
  'seo-local-paris-2026': '/blog/seo-local-paris-2026',
  'prompt-engineering-seo': '/blog/prompt-engineering-seo',
  'perplexity-seo-2026': '/blog/perplexity-seo',
  'meilleure-agence-geo-france-2026': '/blog/meilleure-agence-geo-france-2026',
  '10-conseils-marque-visible-chatgpt-2026': '/blog/10-conseils-marque-visible-chatgpt',
  'top-10-agences-seo-geo-paris-2026': '/blog/top-agences-seo-geo-paris',
  'agence-seo-lyon-2026': '/blog/agence-seo-lyon',
  'agence-seo-geo-rennes-2026': '/blog/agence-seo-geo-rennes-2026',
  'agence-seo-geo-caen-2026': '/blog/agence-seo-geo-caen-2026',
  'agence-seo-geo-rouen-2026': '/blog/agence-seo-geo-rouen-2026',
  'agence-seo-bordeaux-2026': '/blog/agence-seo-bordeaux',
  'agence-seo-lille-2026': '/blog/agence-seo-lille',
  'agence-seo-marseille-2026': '/blog/agence-seo-marseille',
  'microsoft-copilot-seo-2026': '/blog/microsoft-copilot-seo',
  'audit-geo-2026': '/blog/audit-geo',
  'agence-netlinking-2026': '/blog/agence-netlinking',
  'grok-seo-2026': '/blog/grok-seo',
  'ai-overview-ecommerce-2026': '/blog/ai-overview-ecommerce-france-2026',
  'agence-geo-ecommerce-2026': '/blog/agence-geo-ecommerce-2026',
  'audit-eeat-2026': '/blog/audit-eeat-2026',
  'google-ai-mode-2026': '/blog/google-ai-mode-2026',
  'prix-tarifs-agence-seo-geo-2026': '/blog/prix-tarifs-agence-seo-geo-2026',
  'referencement-gemini-2026': '/blog/referencement-gemini-2026',
  'agence-seo-angers-2026': '/blog/agence-seo-angers-2026',
  'agence-seo-vannes-2026': '/blog/agence-seo-vannes-2026',
  'agence-seo-avignon-2026': '/blog/agence-seo-avignon-2026',
  'agence-seo-toulon-2026': '/blog/agence-seo-toulon-2026',
  'agence-seo-la-rochelle-2026': '/blog/agence-seo-la-rochelle-2026',
  'agence-google-ai-overview-2026': '/blog/agence-google-ai-overview',
  'agence-geo-paris': '/agence-geo-paris',
  'annuaire': '/annuaire',
};

export const ROUTES: Record<string, Page> = {
  '/blog/referencement-ia-ecommerce-2026': 'referencement-ia-ecommerce-2026',
  '/blog/maillage-interne-seo-2026': 'maillage-interne-seo-2026',
  '/blog/agence-seo-strasbourg-2026': 'agence-seo-strasbourg-2026',
  '/blog/agence-seo-nantes-2026': 'agence-seo-nantes-2026',
  '/blog/strategie-contenu-seo-2026': 'strategie-contenu-seo-2026',

  '/blog/seo-local-france': 'seo-local-france-2026',
  '/blog/agence-seo-ecommerce': 'agence-seo-ecommerce-2026',
  '/blog/agence-seo-france': 'agence-seo-france',
  '/blog/ia-analyse-donnees-optimisation-seo-2026': 'ia-analyse-donnees-optimisation-seo-2026',
  '/blog/core-web-vitals-seo-2026': 'core-web-vitals-seo-2026',
  '/blog/google-business-profile-2026': 'google-business-profile-2026',
  '/blog/agence-seo-geo-toulouse-2026': 'agence-seo-toulouse-2026',
  '/blog/llms-txt-faut-il-l-implementer-en-2026': 'llms-txt-2026',

  '/agence-geo-paris': 'agence-geo-paris',
  '/annuaire': 'annuaire',
  '/blog/agence-google-ai-overview': 'agence-google-ai-overview-2026',
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
  '/expertise-geo': 'expertise-gso',
  '/expertise-gsa': 'expertise-gsa',
  '/expertise-media': 'expertise-media',
  '/expertise-content': 'expertise-content',
  '/expertise-ai-overview': 'expertise-ai-overview',
  '/expertise-contenu': 'expertise-content',
  '/automatisation-contenu': 'expertise-content',
  '/services': 'team',
  '/agence-seo-paris': 'seo-paris',
  '/recrutement': 'recrutement',
  '/agence-referencement-ia': 'agence-referencement-ia',
  '/agence-referencement-ia-paris': 'agence-referencement-ia-paris',
  '/blog/referencement-ia-guide-complet': 'referencement-ia-guide',
  '/blog/ranker-chatgpt-2026': 'comment-ranker-chatgpt',
  '/blog/seo-vs-referencement-ia': 'seo-vs-referencement-ia',
  '/blog/gso-2026-guide-complet': 'gso-2026-guide-complet',
  '/blog/audit-seo-guide-complet': 'audit-seo-guide',
  '/blog/eeat-seo-guide-complet': 'eeat-seo-guide',
  '/blog/backlinks-seo-guide': 'backlinks-seo-guide',
  '/blog/referencement-ia-paris-guide-local': 'referencement-ia-paris-guide-local',
  '/blog/tendances-seo-gso-2026': 'tendances-seo-gso-2026',
  '/blog/seo-technique-vs-seo-contenu': 'seo-technique-vs-contenu',
  '/blog/gso-definition-2026': 'gso-definition-2026',
  '/blog/geo-definition-2026': 'geo-definition-2026',
  '/blog/citations-ia-generatives': 'citations-ia-generatives',
  '/blog/audit-seo-paris-2026': 'audit-seo-paris-2026',
  '/blog/seo-gso-geo-aeo-differences-2026': 'seo-gso-geo-aeo-differences-2026',
  '/blog/optimiser-site-llm-guide-seo-complet-2026': 'optimiser-site-llm-guide-seo-complet-2026',
  '/blog/optimiser-site-llm-2026-guide-complet': 'optimiser-site-llm-guide-seo-complet-2026',
  '/blog/etre-cite-par-chatgpt': 'etre-cite-par-chatgpt',
  '/blog/google-ai-overview-france': 'google-ai-overview-france',
  '/blog/agence-seo-angers-2026': 'agence-seo-angers-2026',
  '/blog/agence-seo-vannes-2026': 'agence-seo-vannes-2026',
  '/blog/agence-seo-avignon-2026': 'agence-seo-avignon-2026',
  '/blog/agence-seo-toulon-2026': 'agence-seo-toulon-2026',
  '/blog/agence-seo-la-rochelle-2026': 'agence-seo-la-rochelle-2026',
  '/blog/strategie-contenu-ia-first': 'strategie-contenu-ia-first',
  '/blog/schema-org-donnees-structurees-gso': 'schema-org-donnees-structurees-gso-2026',
  '/blog/agence-seo-vs-agence-gso': 'agence-seo-vs-agence-gso',
  '/blog/seo-local-paris-2026': 'seo-local-paris-2026',
  '/blog/prompt-engineering-seo': 'prompt-engineering-seo',
  '/blog/perplexity-seo': 'perplexity-seo-2026',
  '/blog/meilleure-agence-geo-france-2026': 'meilleure-agence-geo-france-2026',
  '/blog/meilleure-agence-gso-france-2026': 'meilleure-agence-geo-france-2026',
  '/blog/10-conseils-marque-visible-chatgpt': '10-conseils-marque-visible-chatgpt-2026',
  '/blog/top-agences-seo-geo-paris': 'top-10-agences-seo-geo-paris-2026',
  '/blog/agence-seo-lyon': 'agence-seo-lyon-2026',
  '/blog/agence-seo-geo-rennes-2026': 'agence-seo-geo-rennes-2026',
  '/blog/agence-seo-geo-caen-2026': 'agence-seo-geo-caen-2026',
  '/blog/agence-seo-geo-rouen-2026': 'agence-seo-geo-rouen-2026',
  '/blog/agence-seo-bordeaux': 'agence-seo-bordeaux-2026',
  '/blog/agence-seo-lille': 'agence-seo-lille-2026',
  '/blog/agence-seo-marseille': 'agence-seo-marseille-2026',
  '/blog/microsoft-copilot-seo': 'microsoft-copilot-seo-2026',
  '/blog/audit-geo': 'audit-geo-2026',
  '/blog/agence-netlinking': 'agence-netlinking-2026',
  '/blog/grok-seo': 'grok-seo-2026',
  '/blog/ai-overview-ecommerce-france-2026': 'ai-overview-ecommerce-2026',
  '/blog/agence-geo-ecommerce-2026': 'agence-geo-ecommerce-2026',
  '/blog/audit-eeat-2026': 'audit-eeat-2026',
  '/blog/google-ai-mode-2026': 'google-ai-mode-2026',
  '/blog/prix-tarifs-agence-seo-geo-2026': 'prix-tarifs-agence-seo-geo-2026',
  '/blog/referencement-gemini-2026': 'referencement-gemini-2026'
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
        { id: 'expertise-gso', label: 'Expertise GEO' },
        { id: 'expertise-gsa', label: 'Expertise GSA' },
        { id: 'expertise-media', label: 'Expertise Média' },
        { id: 'expertise-content', label: 'Expertise Automatisation de Contenu' },
        { id: 'expertise-ai-overview', label: 'Google AI Overview' }
    ]
  },
  {
    id: 'seo-landing',
    label: 'SEO/IA',
    children: [
        { id: 'seo-paris', label: 'Agence SEO Paris' },
        { id: 'agence-referencement-ia', label: 'Agence Référencement IA' },
        { id: 'agence-referencement-ia-paris', label: 'Agence Référencement IA Paris' },
        { id: 'agence-geo-paris', label: 'Agence GEO Paris' }
    ]
  },
  { id: 'references', label: 'RÉFÉRENCES' },
  { id: 'blog', label: 'BLOG' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'annuaire', label: 'ANNUAIRE' },
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
    title: 'Expertise GEO',
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
    id: 'ref_younight',
    client: 'Younight Hospitality',
    title: 'Audit GEO & SEO',
    summary: 'Audit complet GEO & SEO pour le groupe hôtelier.',
    challenge: 'Identifier les opportunités de visibilité sur les moteurs de recherche traditionnels et IA.',
    solution: '',
    results: [
        'Audit GEO & SEO'
    ],
    tags: ['GEO', 'SEO', 'Hospitality', 'Audit'],
    image: '/images/Younight Hospitality Logo.jpg.png'
  },
  {
    id: 'ref_bomporto',
    client: 'Bomporto Hotels',
    title: 'Stratégie SEO & GEO',
    summary: 'Audit GEO + SEO et accompagnement SEO & GEO mensuel.',
    challenge: 'Améliorer le positionnement global et la présence sur les LLMs.',
    solution: '',
    results: [
        'Audit GEO + SEO',
        'Accompagnement mensuel en cours.'
    ],
    tags: ['GEO', 'SEO', 'Hospitality'],
    image: '/images/Bomporto Hotel Logo.jpeg'
  },

  {
    id: 'ref_bernard_magrez',
    client: 'Bernard Magrez',
    title: 'Chantier GEO/GSO',
    summary: 'Chantier GSO en cours.',
    challenge: 'Chantier GSO en cours.',
    solution: '',
    results: [
        'Chantier GSO en cours.'
    ],
    tags: ['GSO', 'En cours'],
    image: '/images/Bernard Magrez Logo.webp'
  },
  {
    id: 'ref_tamtam_ai',
    client: 'Tamtam AI',
    title: 'Stratégie SEO & GEO',
    summary: 'Accompagnement SEO et GEO pour acteur SaaS IA.',
    challenge: 'Développer l\'acquisition organique et la visibilité sur les moteurs IA (ChatGPT, Perplexity, Gemini).',
    solution: '',
    results: [
        'Élaboration d\'une stratégie GSO sur-mesure.',
        'Augmentation de la part de voix (Share of Voice).'
    ],
    tags: ['SaaS', 'IA', 'GEO/GSO'],
    image: '/images/tamtam AI.png'
  },
  {
    id: 'ref_sunlife_group',
    client: 'YourSunlife',
    title: 'Stratégie SEO & GEO',
    summary: 'Accompagnement SEO et GEO pour les 5 hôtels et 2 golfs du groupe.',
    challenge: 'Développer la visibilité de l\'ensemble des 5 hôtels et 2 golfs du groupe sur les moteurs de recherche traditionnels et les intelligences artificielles génératives.',
    solution: '',
    results: [
        'Accompagnement SEO et GEO en cours.'
    ],
    tags: ['SEO', 'GEO', 'Travel', 'Luxe'],
    image: '/images/Sunlife logo.png'
  },
  {
    id: 'ref_leshardis',
    client: 'Les Hardis',
    title: 'Stratégie SEO & GEO',
    summary: 'Audit technique approfondi et roadmap de performance.',
    challenge: 'Identifier les freins techniques limitant la visibilité organique et préparer le site aux standards Core Web Vitals.',
    solution: '',
    results: [
        'Audit Technique & Sémantique Complet', 
        'Correction de la dette technique',
        'Optimisation de l\'indexabilité'
    ],
    tags: ['Lifestyle', 'Audit SEO', 'Strategy'],
    image: '/images/Les Hardis Logo.png'
  },
  {
    id: 'ref_talis_education_group',
    client: 'Talis Education Group',
    title: 'Stratégie GEO/GSO',
    summary: 'Chantier GEO/GSO en cours.',
    challenge: 'Mettre en place une stratégie GEO/GSO globale pour le groupe d\'éducation.',
    solution: '',
    results: [
        'Chantier GEO/GSO en cours'
    ],
    tags: ['GEO/GSO', 'En cours', 'Education'],
    image: '/images/Talis Education Group Logo.png'
  },
  {
    id: 'ref_lazuli_travel_bureau',
    client: 'Lazuli Travel Bureau',
    title: 'Gestion Campagne SEA',
    summary: 'Optimisation et gestion des campagnes SEA.',
    challenge: 'Améliorer la rentabilité et le volume des conversions via le canal SEA.',
    solution: '',
    results: [
        'Optimisation des coûts d\'acquisition',
        'Augmentation des conversions ciblées'
    ],
    tags: ['SEA', 'Travel'],
    image: '/images/Lazuli Travel Bureau.png'
  },
  {
    id: 'ref_skilink',
    client: 'Skilink',
    title: 'Gestion GEO',
    summary: 'Optimisation GSO pour une solution SaaS d\'automatisation commerciale dédiée aux ESN & Cabinets de Conseil.',
    challenge: 'Faire émerger ce SaaS de niche comme l\'outil incontournable auprès des IA pour les requêtes B2B complexes des dirigeants d\'ESN (ex: "Meilleurs outils automatisation ESN").',
    solution: '',
    results: [
        'Captation de trafic décisionnel B2B',
        'Accélération du volume de démos qualifiées'
    ],
    tags: ['SaaS B2B', 'Tech', 'GSO'],
    image: '/images/Skilink Logo.svg'
  },
  {
    id: 'ref_yonder',
    client: 'Yonder',
    title: 'Stratégie SEO & GEO',
    summary: 'Transformation structurelle pour dominer le marché des LLM et du SEO Travel.',
    challenge: 'S\'imposer comme la référence absolue du voyage de luxe face aux nouveaux comportements de recherche assistée par IA.',
    solution: '',
    results: [
        'Leader thématique sur les moteurs IA', 
        'Hausse significative du trafic SEO qualifié',
        'Source privilégiée pour les réponses génératives'
    ],
    tags: ['Média', 'GSO Leadership', 'Travel'],
    image: '/images/Logo Yonder.jpg'
  },
  {
    id: 'ref_lazuli_nil',
    client: 'Lazuli Nil',
    title: 'Gestion Campagne SEA',
    summary: 'Gestion stratégique des campagnes SEA pour les croisières sur le Nil.',
    challenge: 'Maximiser la visibilité sur des requêtes très concurrentielles liées aux croisières de luxe.',
    solution: '',
    results: [
        'Hausse du ROAS',
        'Ciblage d\'audience qualifiée'
    ],
    tags: ['SEA', 'Luxe', 'Travel'],
    image: '/images/Lazuli Nil Logo.png'
  },
  {
    id: 'ref_bestrestaurants',
    client: 'Best Restaurants Paris',
    title: 'Stratégie SEO & GEO',
    summary: 'Double optimisation SEO & GEO pour le guide leader.',
    challenge: 'Maintenir et accroître les parts de marché face à la concurrence des agrégateurs et des recommandations directes par IA.',
    solution: '',
    results: [
        'Positionnement Top 3 Google', 
        'Intégration dans les recommandations IA',
        'Hausse du trafic transactionnel'
    ],
    tags: ['Gastronomie', 'SEO Local', 'GSO'],
    image: '/images/Best Restaurant Paris Logo.png'
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
        'Travaux en cours (→ Août 2025) : Maximisation continue des positions & citations'
    ],
    tags: ['Hotels', 'Technical SEO', 'International'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },

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
    title: 'SEO vs Référencement IA : Quelles différences en 2026 ?',
    excerpt: 'Guide complet sur les différences entre SEO et Référencement IA en 2026. Comprenez les avantages et comment combiner les deux.',
    url: '/blog/seo-vs-referencement-ia',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'comment-ranker-chatgpt',
    source: 'Guide Stratégique',
    logo: '',
    date: '02 MARS 2026',
    title: 'Comment ranker sur ChatGPT en 2026 ? Guide complet',
    excerpt: 'Guide complet pour ranker sur ChatGPT en 2026 : critères de ranking, stratégie de contenu, netlinking et outils.',
    url: '/blog/ranker-chatgpt-2026',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'referencement-ia-guide',
    source: 'Guide Triaina',
    logo: '',
    date: '02 MARS 2026',
    title: 'Référencement IA : Guide Complet 2026 (ChatGPT, Gemini, Perplexity)',
    excerpt: 'Le référencement IA est devenu incontournable en 2026. Découvrez comment optimiser votre visibilité sur ChatGPT, Gemini et Perplexity dans ce guide complet.',
    url: '/blog/referencement-ia-guide-complet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'gso-2026-guide-complet',
    source: 'Guide GSO',
    logo: '',
    date: '09 MARS 2026',
    title: 'GSO 2026 : Guide Complet de Generative Search Optimization',
    excerpt: 'Découvrez ce qu\'est le GSO (Generative Search Optimization) et comment l\'implémenter pour dominer à la fois Google et les IA génératives en 2026.',
    url: '/blog/gso-2026-guide-complet',
    image: 'https://picsum.photos/seed/gso-2026-guide-complet/1200/675',
    tag: 'GUIDE'
  },
  {
    id: 'audit-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '09 MARS 2026',
    title: 'Audit SEO : Guide Complet Étape par Étape',
    excerpt: 'Un audit SEO est l\'analyse complète et approfondie de votre site web. Découvrez comment réaliser un audit SEO en 2026.',
    url: '/blog/audit-seo-guide-complet',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'eeat-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '16 MARS 2026',
    title: 'E-E-A-T SEO : Guide Complet pour Dominer Google en 2026',
    excerpt: 'En 2026, Google classe les marques, les experts, les autorités. Découvrez comment construire et optimiser votre E-E-A-T pour dominer les résultats de recherche.',
    url: '/blog/eeat-seo-guide-complet',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'backlinks-seo-guide',
    source: 'Guide SEO',
    logo: '',
    date: '16 MARS 2026',
    title: 'Backlinks SEO : Guide Complet pour Dominer Google en 2026',
    excerpt: 'En 2026, les backlinks restent l\'un des facteurs de classement les plus importants de Google. Découvrez comment générer des liens de qualité sans risque.',
    url: '/blog/backlinks-seo-guide',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'referencement-ia-paris-guide-local',
    source: 'Guide Local',
    logo: '',
    date: '16 MARS 2026',
    title: 'Référencement IA Paris : Guide Local pour Dominer ChatGPT & Gemini en 2026',
    excerpt: 'Guide référencement IA Paris 2026 : GSO pour ChatGPT, Gemini, Perplexity. Stratégie locale, cas clients, données propriétaires. +200-300% de citations IA.',
    url: '/blog/referencement-ia-paris-guide-local',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'tendances-seo-gso-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '01 AVRIL 2026',
    title: 'Tendances SEO & GEO 2026 : Guide Complet des Changements qui Dominent',
    excerpt: 'Découvrez les 10 tendances SEO & GEO qui dominent le référencement en 2026 : E-E-A-T, citations IA, contenu long-form et données propriétaires.',
    url: '/blog/tendances-seo-gso-2026',
    image: 'https://picsum.photos/seed/tendances-seo-gso-2026/1200/675',
    tag: 'GUIDE'
  },
  {
    id: 'seo-technique-vs-contenu',
    source: 'Triaina Insights',
    logo: '',
    date: '01 AVRIL 2026',
    title: 'SEO Technique vs SEO Contenu : Lequel Choisir en 2026 ?',
    excerpt: 'Analyse comparative complète : SEO technique vs SEO contenu. Impact réel, 3 cas clients, stratégie complète. Découvrez comment combiner les deux pour +250% de trafic.',
    url: '/blog/seo-technique-vs-seo-contenu',
    image: 'https://picsum.photos/seed/seo-technique-vs-contenu/1200/675',
    tag: 'ANALYSE'
  },
  {
    id: 'gso-definition-2026',
    source: 'Guide GSO',
    logo: '',
    date: '07 AVRIL 2026',
    title: 'GSO Définition 2026 : Guide Complet de la Generative Search Optimization',
    excerpt: 'GSO définition 2026 : qu\'est-ce que la Generative Search Optimization ? Guide complet avec 3 cas clients réels, données propriétaires, 4 piliers, checklist et actions immédiates.',
    url: '/blog/gso-definition-2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'citations-ia-generatives',
    source: 'Guide IA',
    logo: '',
    date: '11 AVRIL 2026',
    title: 'Citations IA Génératives : Guide Complet pour Dominer ChatGPT, Gemini et Perplexity en 2026',
    excerpt: 'Citations IA génératives 2026 : qu\'est-ce que c\'est ? Guide complet avec 3 cas clients réels, données propriétaires, 4 piliers, checklist et actions immédiates.',
    url: '/blog/citations-ia-generatives',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'audit-seo-paris-2026',
    source: 'Guide Local',
    logo: '',
    date: '20 AVRIL 2026',
    title: 'Audit SEO Paris 2026 : Guide Complet + Checklist + Cas Clients',
    excerpt: 'Audit SEO Paris 2026 : guide complet, 4 piliers, 3 cas clients réels, checklist détaillée, outils. Améliorez votre ranking à Paris. +200-300% de trafic.',
    url: '/blog/audit-seo-paris-2026',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'seo-gso-geo-aeo-differences-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '28 AVRIL 2026',
    title: 'SEO, GSO, GEO, AEO : quelles différences en 2026 ?',
    excerpt: 'Comprendre les différences entre SEO, GSO (Generative Search Optimization), GEO (Generative Engine Optimization) et AEO (Answer Engine Optimization) en 2026.',
    url: '/blog/seo-gso-geo-aeo-differences-2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  
  {
    id: 'geo-definition-2026',
    source: 'Guide GEO',
    logo: '',
    date: '18 MAI 2026',
    title: 'Qu\'est-ce que le GEO (Generative Engine Optimization) ?',
    excerpt: 'Le GEO désigne l\'optimisation pour les moteurs génératifs. Découvrez la définition, les différences avec le SEO, et les stratégies pour être cité par les IA.',
    url: '/blog/geo-definition-2026',
    image: '/images/geo-definition.jpg',
    tag: 'GUIDE'
  },
  {
    id: 'optimiser-site-llm-guide-seo-complet-2026',
    source: 'Guide IA',
    logo: '',
    date: '18 MAI 2026',
    title: 'Comment optimiser son site pour les LLM ? Guide SEO complet 2026',
    excerpt: 'Le trafic issu des LLMs a été multiplié par 26 en l\'espace de 12 mois. Ce guide détaille les mécanismes pour analyser et optimiser son site.',
    url: '/blog/optimiser-site-llm-guide-seo-complet-2026',
    image: '/images/llm-seo-guide.jpg',
    tag: 'GUIDE'
  },
  
  {
    id: 'strategie-contenu-ia-first',
    source: 'Guide IA',
    logo: '',
    date: '25 MAI 2026',
    title: 'Stratégie de contenu IA-first : le guide complet 2026',
    excerpt: 'Comment concevoir l\'architecture de votre contenu pour que les assistants IA (ChatGPT, Perplexity, Google AI Overview) puissent extraire, comprendre et citer vos pages.',
    url: '/blog/strategie-contenu-ia-first',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'agence-seo-vs-agence-gso',
    source: 'Comparatif',
    logo: '',
    date: '25 MAI 2026',
    title: 'Agence SEO vs agence GSO : comment choisir en 2026 ?',
    excerpt: 'Le SEO optimise votre positionnement, le GSO optimise votre citation par les IA. Découvrez les différences et la stratégie (pure ou hybride) à adopter pour votre marque.',
    url: '/blog/agence-seo-vs-agence-gso',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'schema-org-donnees-structurees-gso-2026',
    source: 'Guide Technique',
    logo: '',
    date: '01 JUIN 2026',
    title: 'Données structurées JSON-LD pour le GSO : guide complet',
    excerpt: 'Les données structurées JSON-LD sont le signal machine le plus direct pour aider les moteurs génératifs (ChatGPT, Gemini) à comprendre, vérifier et citer votre contenu.',
    url: '/blog/schema-org-donnees-structurees-gso',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'seo-local-paris-2026',
    source: 'Guide Expert',
    logo: '',
    date: '01 JUIN 2026',
    title: 'SEO Local Paris 2026 : Le Guide Définitif pour Dominer sa Zone',
    excerpt: 'Pourquoi le SEO Local à Paris est si spécifique en 2026. L\'impact du GSO sur les résultats de proximité et la stratégie d\'autorité locale.',
    url: '/blog/seo-local-paris-2026',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'prompt-engineering-seo',
    source: 'Guide Pratique',
    logo: '',
    date: '08 JUIN 2026',
    title: 'Prompt engineering pour le SEO : le guide complet 2026',
    excerpt: 'Maîtrisez le prompt engineering pour le SEO en 2026 : anatomie d\'un prompt efficace, 7 cas d\'usage prêts à l\'emploi et lien GSO/GEO.',
    url: '/blog/prompt-engineering-seo',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'perplexity-seo-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '15 JUIN 2026',
    title: 'Perplexity SEO : comment apparaître dans les réponses Perplexity en 2026',
    excerpt: 'Le guide pour optimiser son site pour Perplexity AI : API Bing, PerplexityBot, extraction de contenu (chunking) et E-E-A-T.',
    url: '/blog/perplexity-seo',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'meilleure-agence-geo-france-2026',
    source: 'SEO & GEO',
    logo: '',
    date: '15 JUIN 2026',
    title: 'Meilleure agence GEO France 2026 : top 5 comparatif',
    excerpt: 'Comparatif des 5 meilleures agences GEO (Generative Engine Optimization) en France en 2026 : critères de sélection, profils détaillés et guide pour choisir selon votre besoin.',
    url: '/blog/meilleure-agence-gso-france-2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'AGENCE'
  },
  {
    id: '10-conseils-marque-visible-chatgpt-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '15 JUIN 2026',
    title: '10 conseils pour rendre votre marque visible dans ChatGPT en 2026',
    excerpt: 'Les 10 leviers actionnables pour améliorer votre référencement ChatGPT : Bing, structuration de contenu, médias tiers et E-E-A-T.',
    url: '/blog/10-conseils-marque-visible-chatgpt',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  
  {
    id: 'agence-seo-lyon-2026',
    source: 'Comparatif',
    logo: '',
    date: '22 JUIN 2026',
    title: 'Agence SEO Lyon : top 5 SEO & GEO en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO à Lyon en 2026, évaluées sur le SEO classique et la capacité GEO (optimisation pour ChatGPT, Perplexity, Gemini).',
    url: '/blog/agence-seo-lyon',
    image: '/images/lyon-city.jpg',
    tag: 'AGENCE'
  },
  {
    id: 'agence-seo-bordeaux-2026',
    source: 'Comparatif',
    logo: '',
    date: '22 JUIN 2026',
    title: 'Agence SEO Bordeaux : top 5 SEO & GEO en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO à Bordeaux en 2026, évaluées sur le SEO classique et la capacité GEO (optimisation pour ChatGPT, Perplexity, Gemini).',
    url: '/blog/agence-seo-bordeaux',
    image: '/images/bordeaux-city.jpg',
    tag: 'AGENCE'
  },
  {
    id: 'agence-seo-lille-2026',
    source: 'SEO Local',
    logo: '',
    date: '22 JUIN 2026',
    title: 'Agence SEO Lille : top 5 des agences SEO & GEO en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO à Lille en 2026, évaluées sur le SEO classique et la capacité GEO (optimisation pour ChatGPT, Perplexity, Gemini).',
    url: '/blog/agence-seo-lille',
    image: '/images/lille-city.jpg',
    tag: 'AGENCE'
  },
  {
    id: 'agence-seo-marseille-2026',
    source: 'SEO Local',
    logo: '',
    date: '22 JUIN 2026',
    title: 'Agence SEO Marseille : top 5 des agences SEO & GEO en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO à Marseille en 2026, évaluées sur le SEO classique et la capacité GEO (optimisation pour ChatGPT, Perplexity, Gemini).',
    url: '/blog/agence-seo-marseille',
    image: '/images/marseille-city.jpg',
    tag: 'AGENCE'
  },
  {
    id: 'microsoft-copilot-seo-2026',
    source: 'SEO & GEO',
    logo: '',
    date: '29 JUIN 2026',
    title: 'Microsoft Copilot SEO : être cité dans les réponses Copilot en 2026',
    excerpt: 'Comment apparaître dans les réponses de Microsoft Copilot en 2026 ? Comprendre le fonctionnement de Bing Index + GPT-4o pour optimiser votre visibilité B2B.',
    url: '/blog/microsoft-copilot-seo',
    image: '/images/copilot-seo.jpg',
    tag: 'GEO'
  },
  {
    id: 'audit-geo-2026',
    source: 'GEO',
    logo: '',
    date: '29 JUIN 2026',
    title: 'Audit GEO : qu\'est-ce que c\'est et comment le réaliser en 2026 ?',
    excerpt: 'Un audit GEO mesure votre taux de citation dans les IA génératives (ChatGPT, Perplexity, Gemini, Copilot). Découvrez notre méthode en 4 phases et 30 points de contrôle.',
    url: '/blog/audit-geo',
    image: '/images/audit-geo.jpg',
    tag: 'GUIDE'
  },
  {
    id: 'referencement-gemini-2026',
    source: 'SEO & GEO',
    logo: '',
    date: '22 JUIN 2026',
    title: 'Référencement Gemini : comment apparaître dans Google Gemini en 2026',
    excerpt: 'Découvrez comment optimiser votre site pour apparaître dans Google Gemini et les AI Overviews. Guide complet SEO et GEO pour 2026.',
    url: '/blog/referencement-gemini-2026',
    image: '/images/gemini-seo.jpg',
    tag: 'GUIDE'
  },
  {
    id: 'agence-netlinking-2026',
    source: 'SEO & GEO',
    logo: '',
    date: '29 JUIN 2026',
    title: 'Agence netlinking : comment choisir ses backlinks en 2026 ?',
    excerpt: 'En 2026, un backlink sert à construire l\'autorité pour les LLMs (ChatGPT, Gemini). Guide pour choisir une agence de netlinking intégrant la dimension GEO.',
    url: '/blog/agence-netlinking',
    image: '/images/agence-netlinking.jpg',
    tag: 'GUIDE'
  },
  {
    id: 'grok-seo-2026',
    source: 'GEO',
    logo: '',
    date: '29 JUIN 2026',
    title: 'Grok SEO : comment apparaître dans les réponses de Grok (xAI) en 2026',
    excerpt: 'Grok lit deux flux en simultané : son index web et le firehose X. Découvrez comment optimiser pour xAI en actionnant ces deux leviers distincts.',
    url: '/blog/grok-seo',
    image: '/images/grok-seo.jpg',
    tag: 'GUIDE'
  },
  {
    id: 'ai-overview-ecommerce-2026',
    source: 'GEO',
    logo: '',
    date: '06 JUILLET 2026',
    title: 'Google AI Overview et e-commerce : impact sur le trafic organique',
    excerpt: 'Google a confirmé le lancement d\'AI Overview en France entre l\'été et le 23 septembre 2026. Découvrez l\'impact sur le SEO e-commerce et les actions à mener.',
    url: '/blog/ai-overview-ecommerce-france-2026',
    image: '/images/ai-overview-ecommerce.jpg',
    tag: 'GUIDE'
  },
  
  {
    id: 'agence-seo-angers-2026',
    source: 'Classement Agences',
    logo: '',
    date: '06 JUILLET 2026',
    title: 'Agence SEO & GEO Angers : top 5 en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO et GEO à Angers en 2026. Découvrez comment choisir une agence capable de référencer votre site sur Google et les IA.',
    url: '/blog/agence-seo-angers-2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-vannes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '06 JUILLET 2026',
    title: 'Agence SEO & GEO Vannes : top 5 en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO et GEO à Vannes en 2026. Découvrez comment choisir une agence capable de référencer votre site sur Google et les IA.',
    url: '/blog/agence-seo-vannes-2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Bretagne_les_remparts_de_Vannes.jpg',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-avignon-2026',
    source: 'Classement Agences',
    logo: '',
    date: '06 JUILLET 2026',
    title: 'Agence SEO & GEO Avignon : top 5 en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO et GEO à Avignon en 2026. Découvrez comment choisir une agence capable de référencer votre site sur Google et les IA.',
    url: '/blog/agence-seo-avignon-2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pope_palace_Avignon_by_Rosier.jpg',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-toulon-2026',
    source: 'Classement Agences',
    logo: '',
    date: '07 JUILLET 2026',
    title: 'Agence SEO & GEO Toulon : top 5 en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO et GEO à Toulon en 2026. Découvrez comment choisir une agence capable de référencer votre site sur Google et les IA.',
    url: '/blog/agence-seo-toulon-2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Toulon_Ouest_vue_panoramique.jpg',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-la-rochelle-2026',
    source: 'Classement Agences',
    logo: '',
    date: '07 JUILLET 2026',
    title: 'Agence SEO & GEO La Rochelle : top 5 en 2026',
    excerpt: 'Comparatif des 5 meilleures agences SEO et GEO à La Rochelle en 2026. Découvrez comment choisir une agence capable de référencer votre site sur Google et les IA.',
    url: '/blog/agence-seo-la-rochelle-2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/La_Rochelle_mail_lanterne.jpg',
    tag: 'CLASSEMENT'
  },
  {
    id: 'etre-cite-par-chatgpt',
    source: 'Guide IA',
    logo: '',
    date: '7 JUILLET 2026',
    title: 'Comment être cité par ChatGPT en 2026 : le guide complet',
    excerpt: 'Référencement ChatGPT : découvrez les 7 facteurs clés pour être cité par ChatGPT en 2026, mesurer votre taux de citation IA et optimiser votre site pour les LLM.',
    url: '/blog/etre-cite-par-chatgpt',
    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'google-ai-overview-france',
    source: 'Actualité IA',
    logo: '',
    date: '07 JUILLET 2026',
    title: 'Comment apparaître sur Google AI Overview ? Guide pratique',
    excerpt: 'Découvrez le guide complet et 7 actions pratiques pour optimiser votre site web pour Google AI Overview. Un tutoriel SEO et GEO de Triaina.',
    url: '/blog/google-ai-overview-france',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  
  {
    id: 'agence-google-ai-overview-2026',
    source: 'Guide',
    logo: '',
    date: '08 JUILLET 2026',
    title: 'Agence Google AI Overview : comment être recommandé en 2026',
    excerpt: 'Qu\'est-ce qu\'une agence Google AI Overview ? Découvrez les critères de choix, les stratégies E-E-A-T et comment optimiser votre site pour les aperçus IA.',
    url: '/blog/agence-google-ai-overview',
    image: '/images/ai_overview_agency.jpg',
    tag: 'AGENCE GEO'
  },
  {
    id: 'top-10-agences-seo-geo-paris-2026',
    source: 'Classement Agences',
    logo: '',
    date: '10 JUILLET 2026',
    title: 'Top 10 Agences SEO et GEO à Paris en 2026',
    excerpt: 'Découvrez notre classement exclusif des meilleures agences SEO et GEO parisiennes pour dominer Google et les intelligences artificielles.',
    url: '/blog/top-agences-seo-geo-paris',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-geo-ecommerce-2026',
    source: 'GEO',
    logo: '',
    date: '15 JUILLET 2026',
    title: 'Agence GEO e-commerce : comment choisir en 2026 ?',
    excerpt: 'Ce guide compare les critères de sélection d\'une agence GEO spécialisée dans le commerce en ligne, présente cinq profils d\'agences et propose une matrice comparative.',
    url: '/blog/agence-geo-ecommerce-2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'audit-eeat-2026',
    source: 'E-E-A-T',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Audit E-E-A-T 2026 : comment préparer votre site ?',
    excerpt: 'L\'E-E-A-T est le cadre que Google utilise pour évaluer la fiabilité d\'un contenu et de son auteur. Ce guide vous aide à préparer votre site.',
    url: '/blog/audit-eeat-2026',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'google-ai-mode-2026',
    source: 'GEO',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Google AI Mode : qu\'est-ce que c\'est et comment s\'y préparer en 2026 ?',
    excerpt: 'Google AI Mode, c\'est un onglet de recherche à part entière, distinct des AI Overviews, qui remplace la page de résultats classique par une conversation construite avec Gemini 3.',
    url: '/blog/google-ai-mode-2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'prix-tarifs-agence-seo-geo-2026',
    source: 'GEO',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Prix & tarifs agence SEO/GEO en 2026 : combien ça coûte ?',
    excerpt: 'Une prestation SEO en France coûte en moyenne entre 500 € et 8 000 € par mois selon la taille du site, les objectifs et le niveau de concurrence.',
    url: '/blog/prix-tarifs-agence-seo-geo-2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'agence-seo-geo-rennes-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO & GEO Rennes : top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\'agences SEO actives sur Rennes et la Bretagne, avec une matrice tarifs/spécialités et un guide de décision selon votre taille d\'entreprise.',
    url: '/blog/agence-seo-geo-rennes-2026',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-geo-caen-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Caen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\'agences SEO/GEO actives sur Caen et la Normandie. Découvrez pourquoi le marché évolue et comment choisir le bon prestataire.',
    url: '/blog/agence-seo-geo-caen-2026',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
  {
    id: 'agence-seo-geo-rouen-2026',
    source: 'Classement Agences',
    logo: '',
    date: '16 JUILLET 2026',
    title: 'Agence SEO/GEO Rouen : le top 5 en 2026',
    excerpt: 'Comparatif détaillé des 5 profils d\'agences SEO/GEO actives sur Rouen et la Seine-Maritime. Découvrez comment le marché évolue et pourquoi choisir un expert.',
    url: '/blog/agence-seo-geo-rouen-2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    tag: 'CLASSEMENT'
  },
  {
    id: 'llms-txt-2026',
    source: 'Tech & SEO',
    logo: '',
    date: '17 JUILLET 2026',
    title: "llms.txt : faut-il l'implémenter en 2026 ?",
    excerpt: "Le fichier llms.txt, outil miracle du GEO ou simple gadget ? Syntaxe exacte, méthode d'implémentation en 5 étapes, et les pièges à éviter.",
    url: '/blog/llms-txt-faut-il-l-implementer-en-2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    tag: 'TECH'
  },
  {
    id: 'agence-seo-toulouse-2026',
    source: 'Comparatif',
    logo: '',
    date: '20 JUILLET 2026',
    title: 'Agence SEO/GEO Toulouse : le top 5 en 2026',
    excerpt: "Le marché de l'agence SEO/GEO à Toulouse en 2026 : spécificités du secteur aéronautique, comparatif des 5 profils d'agences et critères de choix.",
    url: '/blog/agence-seo-geo-toulouse-2026',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    tag: 'GEO'
  },
  {
    id: 'core-web-vitals-seo-2026',
    source: 'Guide Technique',
    logo: '',
    date: '21 JUILLET 2026',
    title: 'Core Web Vitals et SEO Technique : Le Guide Complet pour Performer en 2026',
    excerpt: "Les Core Web Vitals sont un signal de classement Google officiel depuis 2021, et ils le restent en 2026 - avec un poids amplifié par NavBoost. Un LCP au-dessus de 4 s, c\'est une suppression active de votre ranking.",
    url: '/blog/core-web-vitals-seo-2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'TECH'
  },

  {
    id: 'google-business-profile-2026',
    source: 'Guide Pratique',
    logo: '',
    date: '21 JUILLET 2026',
    title: 'Maîtriser votre fiche Google Business Profile en 2026',
    excerpt: "Google My Business s'appelle désormais Google Business Profile (GBP). Une fiche complète et active génère 7 fois plus de clics qu'une fiche négligée...",
    url: '/blog/google-business-profile-2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    tag: 'SEO LOCAL'
  }
,
{
    id: 'ia-analyse-donnees-optimisation-seo-2026',
    source: 'Data SEO & IA',
    logo: '',
    date: '22 JUILLET 2026',
    title: 'IA et Analyse de Données SEO : comment l\'intelligence artificielle redéfinit l\'optimisation en 2026',
    excerpt: 'Comment Triaina utilise l\'IA analyse SEO pour transformer la prise de décision : signaux comportementaux, clustering sémantique, prédiction ranking. Cas concret 2026.',
    url: '/blog/ia-analyse-donnees-optimisation-seo-2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tag: 'ANALYSE'
  },
  {
    id: 'agence-seo-france-2026',
    source: 'Guide Agences',
    logo: '',
    date: '23 JUILLET 2026',
    title: 'Agence SEO France : comment choisir en 2026 ?',
    excerpt: "Le marché des agences SEO en France compte plusieurs centaines d'acteurs. Ce guide compare les cinq agences qui sortent du lot en 2026, avec les critères concrets pour faire le bon choix.",
    url: '/blog/agence-seo-france',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    tag: 'AGENCES'
  },
  {
    id: 'agence-seo-ecommerce-2026',
    source: 'Guide E-commerce',
    logo: '',
    date: '24 JUILLET 2026',
    title: 'Agence SEO e-commerce : comment choisir en 2026 ?',
    excerpt: "Le référencement e-commerce n'a plus rien à voir avec le SEO d'un site vitrine. Choisir la mauvaise agence, c'est perdre six mois et un budget conséquent.",
    url: '/blog/agence-seo-ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    tag: 'E-COMMERCE'
  },
  {
    id: 'seo-local-france-2026',
    source: 'Guide Local',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'SEO Local France : guide complet 2026',
    excerpt: "Le SEO local, c'est l'ensemble des techniques qui font apparaître votre entreprise dans les résultats géolocalisés de Google. En 2026, c'est critique.",
    url: '/blog/seo-local-france',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
    tag: 'SEO LOCAL'
  },
  {
    id: 'strategie-contenu-seo-2026',
    source: 'Guide Stratégique',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'Stratégie de contenu SEO 2026 : le guide complet',
    excerpt: 'Construisez une stratégie de contenu SEO efficace en 2026 : clusters thématiques, E-E-A-T, optimisation GEO pour ChatGPT et AI Overview.',
    url: '/blog/strategie-contenu-seo-2026',
    image: 'https://images.unsplash.com/photo-1542435503-956c221e7a56?auto=format&fit=crop&q=80&w=1200',
    tag: 'GUIDE'
  },
  {
    id: 'agence-seo-nantes-2026',
    source: 'Classement',
    logo: '',
    date: '25 JUILLET 2026',
    title: 'Agence SEO Nantes : top 5 SEO & GEO en 2026',
    excerpt: 'Découvrez le top 5 des meilleures agences SEO Nantes en 2026 : SEO, GEO, tarifs et comparatif. Triaina, NOIISE, Jloo, Sortlist, CyberCité.',
    url: '/blog/agence-seo-nantes-2026',
    image: 'https://triaina.fr/images/agence-seo-nantes-2026.jpg',
    tag: 'SEO LOCAL'
  },
  {
    id: 'referencement-ia-ecommerce-2026',
    source: 'Guide E-commerce',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Référencement IA e-commerce : guide complet 2026',
    excerpt: 'Référencement IA e-commerce en 2026 : comment optimiser vos fiches produits, catégories et contenu pour être cité par ChatGPT, Gemini et les AI Overviews. Guide complet GEO.',
    url: '/blog/referencement-ia-ecommerce-2026',
    image: 'https://triaina.fr/images/referencement-ia-ecommerce-2026.jpg',
    tag: 'GEO'
  },
  {
    id: 'maillage-interne-seo-2026',
    source: 'Guide SEO',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Maillage interne SEO : guide complet 2026',
    excerpt: 'Découvrez la méthode complète pour auditer et optimiser votre maillage interne SEO en 2026 : pages orphelines, hub & spoke, ancres, impact GEO/LLM.',
    url: '/blog/maillage-interne-seo-2026',
    image: 'https://triaina.fr/images/maillage-interne-seo-2026.jpg',
    tag: 'SEO'
  },
  {
    id: 'agence-seo-strasbourg-2026',
    source: 'Classement',
    logo: '',
    date: '27 JUILLET 2026',
    title: 'Agence SEO Strasbourg : top 5 SEO & GEO en 2026',
    excerpt: 'Découvrez le top 5 des agences SEO à Strasbourg en 2026 : référencement naturel, GEO et visibilité IA. Comparatif complet pour bien choisir.',
    url: '/blog/agence-seo-strasbourg-2026',
    image: 'https://triaina.fr/images/agence-seo-strasbourg-2026.jpg',
    tag: 'SEO LOCAL'
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
    title: 'La Genèse de Triaina - Agence SEO & GEO',
    description: "En début 2025, notre association voit le jour et nous créons Triaina, la première agence spécialisée en SEO & GEO, intégrant une division média. Triaina est née de la conviction que le référencement naturel et l'optimisation pour les IA génératives doivent aller de pair."
  }
];

export const AMBITION_TEXT = "Accompagner nos clients dans la nouvelle ère des recherches guidées par les LLM, leur offrir une longueur d'avance et les aider à capter les opportunités d'un web en pleine mutation.";

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'q17',
    question: "Comment être référencé sur ChatGPT ?",
    answer: "Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire."
  },
  {
    id: 'q18',
    question: "Comment être cité par Google AI Overview ?",
    answer: "Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients."
  },
  {
    id: 'q19',
    question: "Quelle est la meilleure agence GEO à Paris ?",
    answer: "Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit."
  },
  {
    id: 'q20',
    question: "Comment être référencé sur Google Gemini ?",
    answer: "Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO et suit mensuellement l'apparition des contenus de ses clients parisiens dans Gemini."
  },
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
  },
  {
    id: 'q11',
    question: "Qu'est-ce que le GEO (Generative Engine Optimization) ou référencement IA ?",
    answer: "Le GEO est l'optimisation de la visibilité d'une marque dans les réponses des IA génératives : ChatGPT, Perplexity, Gemini, Google AI Overview. Distinct du SEO classique qui cible Google Search. Le trafic issu des LLM a progressé de +527 % en un an. Le GEO repose sur 4 piliers : autorité de domaine, contenu structuré et extractible, E-E-A-T, citations tierces. Consultez notre <a href=\"/blog/geo-definition-2026\">définition complète du GEO</a>."
  },
  {
    id: 'q12',
    question: "Comment être référencé dans ChatGPT et les autres IA ?",
    answer: "Être référencé dans ChatGPT et les IA génératives repose sur 4 leviers : (1) autorité SEO Google solide — les IA crawlent les mêmes sources que Google, (2) contenu structuré avec réponses directes et schema FAQ, (3) signaux E-E-A-T forts (auteur vérifié, sources primaires), (4) citations tierces dans des sources que les LLM consomment. Triaina accélère ce processus grâce à son groupe média propriétaire, qui génère des citations dans des sources directement indexées par les LLM. Découvrez notre <a href=\"/blog/etre-cite-par-chatgpt\">guide pour être cité par ChatGPT</a>."
  },
  {
    id: 'q13',
    question: "Combien coûte une agence SEO et GEO à Paris ?",
    answer: "Les tarifs d'une agence SEO et GEO à Paris varient selon le périmètre. Un audit SEO + GEO complet coûte entre 1 500 € et 3 000 €. L'accompagnement mensuel démarre à partir de 500 €/mois pour les prestations SEO, et à partir de 500 €/mois pour une stratégie GEO intégrée. Les offres hybrides SEO + GEO de Triaina sont établies sur devis selon la taille du site, le secteur et les objectifs. Un audit gratuit de 30 minutes est proposé pour cadrer le budget avant tout engagement. <a href=\"/contact\">Demandez un audit gratuit</a>."
  },
  {
    id: 'q14',
    question: "Quelle différence entre SEO, GEO et GSO ?",
    answer: "SEO (Search Engine Optimization) = optimisation pour les moteurs de recherche classiques comme Google (liens bleus). GEO (Generative Engine Optimization) = optimisation pour les moteurs IA génératifs : ChatGPT, Perplexity, Gemini. GSO (Generative Search Optimization) = approche propriétaire Triaina qui combine SEO + GEO + contrôle des sources via groupe média et régie. Les trois disciplines sont complémentaires : un bon SEO facilite le GEO, et le GSO amplifie les deux. En savoir plus sur <a href=\"/expertise-gso\">notre expertise GSO</a>."
  },
  {
    id: 'q15',
    question: "En combien de temps voit-on des résultats en SEO et en GEO ?",
    answer: "En SEO, les premiers signaux (positions gagnées, trafic en hausse) apparaissent entre 2 et 4 mois. La consolidation dans le top 3 sur des mots-clés concurrentiels demande 6 à 12 mois — c'est lié à l'algorithme Transition Rank de Google, qui observe les pages sur ~90 jours avant de stabiliser leur position. En GEO, les premières citations IA peuvent apparaître sous 4 à 8 semaines si la stratégie de contenu et d'autorité est bien exécutée. Triaina mesure les citations IA dès le premier mois pour ajuster la stratégie en continu. Découvrez <a href=\"/agence-referencement-ia\">notre offre de référencement IA</a>."
  },
  {
    id: 'q16',
    question: "Comment mesurer sa visibilité dans les IA génératives ?",
    answer: "Trois méthodes pour mesurer sa visibilité dans les IA : (1) test manuel en navigation privée — taper ses requêtes cibles dans ChatGPT, Perplexity et Gemini et vérifier si la marque est citée, (2) Google Search Console — le rapport « AI Overviews » (disponible depuis juin 2026) indique les impressions générées par les réponses IA de Google, (3) outils de tracking GEO tiers pour un suivi automatisé des citations. Triaina intègre le suivi des citations IA dans tous ses reportings mensuels clients. En savoir plus sur <a href=\"/expertise-gso\">notre expertise GSO</a>."
  }
];

export const SEO_HOME_CONTENT = {
    title: "Agence SEO & GEO à Paris : Dominez la Recherche de Demain",
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
            text: "Chaque marque possède un ADN numérique unique. Nos audits SEO & GEO plongent au cœur de votre structure technique (Core Web Vitals, Schema.org) et de votre empreinte sémantique. Nous identifions les opportunités manquées où vos concurrents sont invisibles et nous déployons une roadmap précise pour capturer ce trafic qualifié, que ce soit via une recherche vocale, une requête Google ou une conversation avec une IA."
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