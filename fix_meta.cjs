const fs = require('fs');

let content = fs.readFileSync('views/blog/AgenceSeoMontpellier2026.tsx', 'utf8');

const target = `<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </span>
              <span className="inline-flex items-center">
                <User className="w-4 h-4 mr-2" />
                Camille Rousseau
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                {article.tag}
              </span>
            </div>`;

const replacement = `<header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
              <span className="flex items-center">
                <Calendar size={14} className="mr-2 text-blue-500" />
                {article.date}
              </span>
              <span className="text-slate-300">|</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">{article.tag}</span>
            </div>`;

content = content.replace(target, replacement);

// And we need to add the closing </header> after the h1.
const h1Target = `<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {article.title}
            </h1>`;
            
const h1Replacement = `<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {article.title}
            </h1>
          </header>`;

content = content.replace(h1Target, h1Replacement);

fs.writeFileSync('views/blog/AgenceSeoMontpellier2026.tsx', content);
