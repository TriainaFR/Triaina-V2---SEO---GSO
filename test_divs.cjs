const fs = require('fs');
const content = fs.readFileSync('views/blog/LlmsTxt2026.tsx', 'utf8');

const proseDivs = [...content.matchAll(/<div className="max-w-4xl mx-auto prose[^>]*>/g)];
const lastProseDiv = proseDivs[proseDivs.length - 1];
const startIndex = lastProseDiv.index + lastProseDiv[0].length;
const endIndex = content.indexOf('{/* Author Block */}', startIndex);

const actualText = content.substring(startIndex, endIndex);
const openDivs = (actualText.match(/<div\b[^>]*>/g) || []).length;
const closeDivs = (actualText.match(/<\/div>/g) || []).length;

console.log(`Open: ${openDivs}, Close: ${closeDivs}`);
