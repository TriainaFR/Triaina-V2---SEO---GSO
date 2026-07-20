const fs = require('fs');

const filePaths = [
    'views/AgenceGeoParis.tsx',
    'views/AgenceReferencementIA.tsx',
    'views/Blog.tsx',
    'views/Careers.tsx',
    'views/Expertise.tsx',
    'views/ExpertiseMedia.tsx',
    'views/Home.tsx',
    'views/NotFound.tsx',
    'views/References.tsx',
    'views/SeoParis.tsx'
];

filePaths.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove specific unused imports
    content = content.replace(/import\s*\{\s*.*?useEffect.*?\s*\}\s*from\s*['"]react['"];/, (match) => {
        const newMatch = match.replace(/,\s*useEffect|useEffect\s*,?\s*/g, '');
        if (newMatch.match(/import\s*\{\s*\}\s*from/)) return "import React from 'react';";
        return newMatch;
    });

    content = content.replace(/import\s*\{\s*(.*?)\s*\}\s*from\s*['"]lucide-react['"];/g, (match, imports) => {
        // Just remove the unused ones, easier with a regex on the specific file, but we'll try a generic approach if possible.
        // Actually, easiest way is to let ESLint fix it if we can.
        return match;
    });

    fs.writeFileSync(filePath, content);
});
