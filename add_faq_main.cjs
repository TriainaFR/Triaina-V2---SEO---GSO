const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf-8');

const newMainQuestions = `  {
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
  },`;

if (!code.includes("Comment être référencé sur ChatGPT ?")) {
    code = code.replace(
        "export const FAQ_DATA: FAQItem[] = [",
        "export const FAQ_DATA: FAQItem[] = [\n" + newMainQuestions
    );
}

fs.writeFileSync('constants.ts', code);
