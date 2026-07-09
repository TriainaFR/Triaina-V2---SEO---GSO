const fs = require('fs');
let code = fs.readFileSync('views/SeoParis.tsx', 'utf-8');

// Update schema with the new questions
const newQuestionsSchema = `                {
                    "@type": "Question",
                    "name": "Comment être référencé sur ChatGPT ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment être cité par Google AI Overview ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelle est la meilleure agence GEO à Paris ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment être référencé sur Google Gemini ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO et suit mensuellement l'apparition des contenus de ses clients parisiens dans Gemini."
                    }
                }`;

if (!code.includes("Comment être référencé sur ChatGPT ?")) {
    code = code.replace(
        /"name": "Combien de temps pour voir les résultats du SEO \?",\s*"acceptedAnswer": {\s*"@type": "Answer",\s*"text": "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs \(position 1-10\) prennent 3-6 mois. L'impact maximal se mesure à 6-12 mois."\s*}\s*},/g,
        `"name": "Combien de temps pour voir les résultats du SEO ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Les premiers résultats apparaissent en 4-6 semaines. Les résultats significatifs (position 1-10) prennent 3-6 mois. L'impact maximal se mesure à 6-12 mois."
                    }
                },
${newQuestionsSchema},`
    );
    
    // Add to the visual FAQ array
    const newVisualQuestions = `                    { q: "Q7 : Comment être référencé sur ChatGPT ?", a: "Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire." },
                    { q: "Q8 : Comment être cité par Google AI Overview ?", a: "Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients." },
                    { q: "Q9 : Quelle est la meilleure agence GEO à Paris ?", a: "Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit." },
                    { q: "Q10 : Comment être référencé sur Google Gemini ?", a: "Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO." },`;
                    
    code = code.replace(
        /{ q: "Q6 : Quelle est votre garantie de satisfaction \?", a: "Nous garantissons une augmentation mesurable de votre trafic organique. Si vous n'êtes pas satisfait après 3 mois, nous discutons d'ajustements ou d'une résiliation sans pénalité." }/g,
        `{ q: "Q6 : Quelle est votre garantie de satisfaction ?", a: "Nous garantissons une augmentation mesurable de votre trafic organique. Si vous n'êtes pas satisfait après 3 mois, nous discutons d'ajustements ou d'une résiliation sans pénalité." },\n${newVisualQuestions}`
    );
}

fs.writeFileSync('views/SeoParis.tsx', code);
