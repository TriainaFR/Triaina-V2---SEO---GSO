const fs = require('fs');
let code = fs.readFileSync('views/ExpertiseAIOverview.tsx', 'utf8');

const oldStep3 = `<div className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <h3 className="flex items-center gap-3 text-xl font-bold text-white mt-0 mb-4"><Target className="text-blue-200" /> Étape 3 - Activation du réseau médias propriétaires</h3>
                  <p className="text-blue-50"><strong>C'est ici que Triaina se différencie de toutes les autres agences AI Overview en France.</strong></p>
                  <p className="text-blue-50">Nous possédons un réseau de médias thématiques qui sont <strong>déjà des sources citées par Google AI Overview</strong> dans leurs secteurs respectifs. Ce ne sont pas des annuaires ou des sites de liens génériques : ce sont des médias éditoriaux à forte autorité, reconnus par Gemini comme sources fiables sur leurs thématiques.</p>
                  <p className="text-blue-50">Quand nous publions un contenu mentionnant votre marque, votre expertise ou votre offre sur ces médias, nous ne faisons pas du netlinking classique. Nous injectons votre marque directement dans l'écosystème de sources que Google AI Overview consulte déjà.</p>
                  
                  <div className="mt-6 bg-white/10 rounded-xl p-4 overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm text-white">
                      <thead>
                        <tr><th className="p-2 border-b border-white/20">Approche</th><th className="p-2 border-b border-white/20">Mécanisme</th><th className="p-2 border-b border-white/20">Délai d'effet</th></tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2 border-b border-white/10">Optimisation technique seule</td><td className="p-2 border-b border-white/10">Attendre que Google découvre</td><td className="p-2 border-b border-white/10 text-blue-200">6 à 12 mois</td></tr>
                        <tr><td className="p-2 font-bold">Technique + Médias Triaina</td><td className="p-2 font-bold">Vos contenus + sources reconnues</td><td className="p-2 font-bold text-green-300">1 à 4 mois</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>`;

const newStep3 = `<div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-sm relative overflow-hidden">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mt-0 mb-4"><Target className="text-blue-600" /> Étape 3 - Activation du réseau médias propriétaires</h3>
                  <p className="text-slate-700"><strong>C'est ici que Triaina se différencie de toutes les autres agences AI Overview en France.</strong></p>
                  <p className="text-slate-700">Nous possédons un réseau de médias thématiques qui sont <strong>déjà des sources citées par Google AI Overview</strong> dans leurs secteurs respectifs. Ce ne sont pas des annuaires ou des sites de liens génériques : ce sont des médias éditoriaux à forte autorité, reconnus par Gemini comme sources fiables sur leurs thématiques.</p>
                  <p className="text-slate-700">Quand nous publions un contenu mentionnant votre marque, votre expertise ou votre offre sur ces médias, nous ne faisons pas du netlinking classique. Nous injectons votre marque directement dans l'écosystème de sources que Google AI Overview consulte déjà.</p>
                  
                  <div className="mt-6 bg-white rounded-xl p-4 overflow-x-auto border border-blue-100 shadow-sm">
                    <table className="w-full text-left border-collapse text-sm text-slate-700">
                      <thead>
                        <tr><th className="p-2 border-b border-slate-200 font-bold">Approche</th><th className="p-2 border-b border-slate-200 font-bold">Mécanisme</th><th className="p-2 border-b border-slate-200 font-bold">Délai d'effet</th></tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2 border-b border-slate-100">Optimisation technique seule</td><td className="p-2 border-b border-slate-100">Attendre que Google découvre</td><td className="p-2 border-b border-slate-100 text-slate-500">6 à 12 mois</td></tr>
                        <tr><td className="p-2 font-bold text-slate-900">Technique + Médias Triaina</td><td className="p-2 font-bold text-slate-900">Vos contenus + sources reconnues</td><td className="p-2 font-bold text-blue-700">1 à 4 mois</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>`;

code = code.replace(oldStep3, newStep3);

const oldCtaText = `<p className="text-slate-300">Le lancement de Google AI Overview en France le 22 juillet 2026 ouvre une fenêtre d'opportunité que les marques les plus réactives exploiteront en premier. Dans 6 mois, les positions de sources citées seront consolidées. Dans 12 mois, les rattraper coûtera deux fois plus cher.</p>
                    
                    <p className="text-slate-300 mb-2">L'audit AI Overview Triaina couvre :</p>
                    <ul className="text-slate-300 list-disc pl-5 space-y-1 mt-0">`;

const newCtaText = `<p className="text-white">Le lancement de Google AI Overview en France le 22 juillet 2026 ouvre une fenêtre d'opportunité que les marques les plus réactives exploiteront en premier. Dans 6 mois, les positions de sources citées seront consolidées. Dans 12 mois, les rattraper coûtera deux fois plus cher.</p>
                    
                    <p className="text-white mb-2">L'audit AI Overview Triaina couvre :</p>
                    <ul className="text-white list-disc pl-5 space-y-1 mt-0">`;

code = code.replace(oldCtaText, newCtaText);

fs.writeFileSync('views/ExpertiseAIOverview.tsx', code);
console.log("Updated ExpertisesAIOverview.tsx");
