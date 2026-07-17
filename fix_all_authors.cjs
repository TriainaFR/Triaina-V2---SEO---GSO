const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const authorBlock = `
          {/* Author Block */}
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 max-w-4xl mx-auto">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">À propos de l'auteure</h3>
              <div className="font-bold text-slate-900 text-xl mb-1">Camille Rousseau</div>
              <div className="text-sm text-blue-600 font-mono mb-4">Consultante Senior GEO/SEO chez Triaina</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Experte en stratégies d'acquisition hybrides. Camille accompagne les marques dans l'optimisation de leur visibilité sur les moteurs de recherche traditionnels (SEO) et les interfaces d'IA génératives (GSO).
              </p>
              <a href="https://www.linkedin.com/in/camille-rousseau-a44488413/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">
                  Voir son profil LinkedIn
              </a>
          </div>`;

for (let file of files) {
  let p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // 1. Replace Schema author
  const schemaRegex = /"author":\s*\{\s*"@type":\s*"Person",\s*"name":\s*"Alexandre",\s*"jobTitle":\s*"[^"]+",\s*"url":\s*"[^"]+",\s*"sameAs":\s*"[^"]+"\s*\}/;
  if (schemaRegex.test(content)) {
    content = content.replace(schemaRegex, `"author": {
      "@type": "Person",
      "name": "Camille Rousseau",
      "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
      "url": "https://www.triaina.fr",
      "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
    }`);
    changed = true;
  }
  // Alternate schema structure sometimes found:
  const schemaOrgRegex = /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"Triaina",\s*"url":\s*"https:\/\/triaina\.fr"\s*\}/;
  if (schemaOrgRegex.test(content)) {
    content = content.replace(schemaOrgRegex, `"author": {
        "@type": "Person",
        "name": "Camille Rousseau",
        "jobTitle": "Consultante Senior GEO/SEO chez Triaina",
        "url": "https://www.triaina.fr",
        "sameAs": "https://www.linkedin.com/in/camille-rousseau-a44488413/"
      }`);
    changed = true;
  }

  // 2. Remove old visual author blocks if they exist (like in GrokSeo2026.tsx or others)
  // Let's remove anything that looks like "À propos de l'auteur" inside <aside> or <div>.
  // We'll just be safe and inject the new author block before `</article>`.
  
  // Actually, let's just make sure it's injected exactly once before `</article>`
  if (content.includes("</article>") && !content.includes("À propos de l'auteure")) {
    content = content.replace("</article>", authorBlock + "\n        </article>");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(p, content);
  }
}
console.log("Authors updated.");
