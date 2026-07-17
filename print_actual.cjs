const fs = require('fs');
const content = fs.readFileSync('views/blog/LlmsTxt2026.tsx', 'utf8');
const proseDivs = [...content.matchAll(/<div className="max-w-4xl mx-auto prose[^>]*>/g)];
const lastProseDiv = proseDivs[proseDivs.length - 1];
const startIndex = lastProseDiv.index + lastProseDiv[0].length;
const endIndex = content.indexOf('{/* Author Block */}', startIndex);
console.log(content.substring(startIndex, endIndex));
