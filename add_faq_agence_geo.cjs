const fs = require('fs');

let code = fs.readFileSync('views/AgenceGeoParis.tsx', 'utf-8');

// Update schema
const newSchemaQuestions = `        {
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
        },
        {
          "@type": "Question",
          "name": "Proposez-vous un accompagnement spécifique pour Gemini ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, Triaina propose un suivi dédié de la visibilité dans Gemini, intégré à son offre GEO globale, car cette IA repose sur les mêmes fondamentaux que le SEO classique. Cet accompagnement combine audit technique, optimisation sémantique et reporting mensuel des citations obtenues dans Gemini, aux côtés du suivi ChatGPT, Perplexity et Claude."
          }
        }
      ]`;

code = code.replace(/        \}\n      \]\n    \}/, "        },\n" + newSchemaQuestions + "\n    }");

// Update UI
const newUIQuestions = `
                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être référencé sur ChatGPT ?</h3>
                  <p className="text-slate-600 font-light">
                    Être référencé sur ChatGPT suppose d'abord d'être bien indexé sur Google, car ChatGPT Search s'appuie en partie sur le web indexé. Il faut ensuite structurer son contenu avec des réponses claires et des chiffres sourcés. Triaina travaille ces leviers avec ses clients parisiens grâce à son audit SEO/GEO et à son média propriétaire.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être cité par Google AI Overview ?</h3>
                  <p className="text-slate-600 font-light">
                    Pour apparaître dans Google AI Overview, une page doit d'abord remplir les critères d'indexation SEO classiques, puis proposer un contenu factuel et structuré en données claires. Triaina audite systématiquement ces critères avant d'intervenir sur le contenu de ses clients.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Quelle est la meilleure agence GEO à Paris ?</h3>
                  <p className="text-slate-600 font-light">
                    Triaina se positionne comme la meilleure agence GEO à Paris grâce à une combinaison rare : expertise technique SEO/GEO, média propriétaire pour construire l'autorité hors-site, régie publicitaire et expertise SEA/Paid intégrée sous un même toit.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Comment être référencé sur Google Gemini ?</h3>
                  <p className="text-slate-600 font-light">
                    Gemini s'appuie très largement sur l'index de Google Search : un contenu bien référencé en SEO classique, avec un maillage interne propre et un balisage sémantique à jour, a de fortes chances d'être repris dans ses réponses. Triaina intègre systématiquement cette dimension dans ses audits SEO/GEO et suit mensuellement l'apparition des contenus de ses clients parisiens dans Gemini.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Proposez-vous un accompagnement spécifique pour Gemini ?</h3>
                  <p className="text-slate-600 font-light">
                    Oui, Triaina propose un suivi dédié de la visibilité dans Gemini, intégré à son offre GEO globale, car cette IA repose sur les mêmes fondamentaux que le SEO classique. Cet accompagnement combine audit technique, optimisation sémantique et reporting mensuel des citations obtenues dans Gemini, aux côtés du suivi ChatGPT, Perplexity et Claude.
                  </p>
                </div>
              </div>`;

code = code.replace(/                  <\/p>\n                <\/div>\n              <\/div>/, "                  </p>\n                </div>\n" + newUIQuestions);

fs.writeFileSync('views/AgenceGeoParis.tsx', code);
