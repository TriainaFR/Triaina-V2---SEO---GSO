const fs = require('fs');

const filesToFix = [
    'views/blog/GrokSeo2026.tsx',
    'views/blog/MicrosoftCopilotSeo2026.tsx',
    'views/blog/ReferencementGemini2026.tsx'
];

for (const file of filesToFix) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        content = content.replace(/<SEO\s+title=/g, '<SEO title=');
        content = content.replace(/url=/g, 'canonicalUrl=');
        fs.writeFileSync(file, content);
    }
}
