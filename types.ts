
export type Page = 
  | 'home' 
  | 'references' 
  | 'faq' 
  | 'contact' 
  | 'blog' 
  | 'team' 
  | 'legal'
  | 'expertise-seo' 
  | 'expertise-sea' 
  | 'expertise-gso' 
  | 'expertise-gsa' 
  | 'expertise-media' 
  | 'expertise-content'
  | 'seo-paris'
  | 'recrutement'
  | 'agence-referencement-ia'
  | 'agence-referencement-ia-paris'
  | 'referencement-ia-guide'
  | 'comment-ranker-chatgpt'
  | 'seo-vs-referencement-ia'
  | 'gso-2026-guide-complet'
  | 'audit-seo-guide'
  | 'eeat-seo-guide'
  | 'backlinks-seo-guide'
  | 'referencement-ia-paris-guide-local'
  | 'tendances-seo-gso-2026'
  | 'seo-technique-vs-contenu'
  | 'gso-definition-2026'
  | 'citations-ia-generatives'
  | 'audit-seo-paris-2026'
  | 'seo-gso-geo-aeo-differences-2026'
  | 'optimiser-site-llm-2026-guide'
  | 'etre-cite-par-chatgpt'
  | '404';

export interface NavLink {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

export interface ReferenceItem {
  id: string;
  client: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string; // Placeholder URL
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChatStep {
  id: number;
  botMessage: string;
  fieldName: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea' | 'url';
}

export interface PartnerItem {
  id: string;
  name: string;
  url: string;
  logo: string;
  category: string;
  description: string;
}

export interface BlogItem {
  id: string;
  source: string;
  logo: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  tag: string;
}

export interface JobOffer {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  longDescription: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  applicationUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

export interface ExpertiseContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: { title: string; desc: string }[];
  tags: string[];
}
