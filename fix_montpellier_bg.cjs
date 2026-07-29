const fs = require('fs');

let content = fs.readFileSync('views/blog/AgenceSeoMontpellier2026.tsx', 'utf8');

// Replace the main wrapper
content = content.replace(
    '<div className="pt-24 min-h-screen bg-slate-50">',
    '<div className="pt-32 pb-20 min-h-screen w-full px-4 md:px-8 lg:px-12 relative z-10">'
);

// Replace the inner wrapper and article
content = content.replace(
    '<div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">',
    '<div className="max-w-4xl mx-auto relative mt-8 md:mt-12">'
);

content = content.replace(
    /<a\s+href="\/blog"\s+className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-8 transition-colors"/,
    '<a href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 font-mono text-sm uppercase tracking-wider group"'
);

content = content.replace(
    /<ArrowLeft className="w-4 h-4 mr-2" \/>/,
    '<ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />'
);

content = content.replace(
    /Retour au blog/,
    'Retour aux articles'
);

content = content.replace(
    /<article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">\s*<div className="p-8 lg:p-12">/,
    '<article className="max-w-4xl mx-auto relative">\n          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 opacity-50"></div>'
);

// Remove the closing </div> for p-8 lg:p-12, which is just before </article>
content = content.replace(
    /<\/div>\s*<\/article>/,
    '</article>'
);

// Update header classes
content = content.replace(
    /<h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">/,
    '<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">'
);

// Update meta info
content = content.replace(
    /<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">/,
    '<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">'
);

content = content.replace(
    /<span className="inline-flex items-center">\s*<Calendar className="w-4 h-4 mr-2" \/>\s*Publié le ([\s\S]*?)<\/span>\s*<span className="inline-flex items-center">\s*<User className="w-4 h-4 mr-2" \/>\s*([\s\S]*?)<\/span>\s*<span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">\s*(.*?)\s*<\/span>/,
    '<span className="flex items-center"><Calendar size={14} className="mr-2 text-blue-500" />{article.date}</span><span className="text-slate-300">|</span><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">{article.tag}</span>'
);

fs.writeFileSync('views/blog/AgenceSeoMontpellier2026.tsx', content);
