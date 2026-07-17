const fs = require('fs');
const content = fs.readFileSync('views/blog/LlmsTxt2026.tsx', 'utf8');

// Match all prose div openings
const proseDivs = [...content.matchAll(/<div className="max-w-4xl mx-auto prose[^>]*>/g)];
const lastProseDiv = proseDivs[proseDivs.length - 1];
const startIndex = lastProseDiv.index + lastProseDiv[0].length;
const endIndex = content.indexOf('{/* Author Block */}', startIndex);

const actualText = content.substring(startIndex, endIndex);
console.log(actualText.substring(0, 100));
console.log("...");
console.log(actualText.substring(actualText.length - 100));
