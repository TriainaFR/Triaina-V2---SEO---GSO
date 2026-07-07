const fs = require('fs');
const filePath = 'views/blog/GoogleAiOverviewFrance.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove from html content
content = content.replace(/<h2>Qui a écrit cet article \?<\/h2><p>Par <strong>\[Prénom Nom\]<\/strong>, consultant\(e\) SEO\/GEO chez Triaina \(Paris\) - accompagne des sites éditoriaux et e-commerce sur leur visibilité dans les résultats Google classiques et les fonctionnalités IA.<br><a target="_blank" rel="noopener noreferrer nofollow" href="https:\/\/www\.linkedin\.com\/company\/triaina\/">Profil LinkedIn de l'auteur \(à compléter\)<\/a><\/p>/, "");

// Remove from sidebar
content = content.replace(/<div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">\s*<h4 className="font-bold text-slate-900 mb-4">Auteur<\/h4>\s*<div className="flex items-center gap-4 mb-4">\s*<div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">\s*<img src="https:\/\/images.unsplash.com\/photo-1560250097-0b93528c311a\?auto=format&fit=crop&q=80&w=150&h=150" alt="Consultant Triaina" className="w-full h-full object-cover" \/>\s*<\/div>\s*<div>\s*<p className="font-bold text-slate-900 text-sm">\[Prénom Nom\]<\/p>\s*<p className="text-xs text-slate-500">Consultant\(e\) SEO\/GEO<\/p>\s*<\/div>\s*<\/div>\s*<p className="text-sm text-slate-700 leading-relaxed">\s*Spécialiste de la visibilité sur les moteurs de recherche génératifs \(SGE, AI Overview\) chez Triaina.\s*<\/p>\s*<\/div>/, "");

fs.writeFileSync(filePath, content);
console.log("Removed author sections.");
