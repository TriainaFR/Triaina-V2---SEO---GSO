const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const itemRegex = /\{\s*id:\s*'google-ai-overview-france'[\s\S]*?\},/;
const match = content.match(itemRegex);

if (match) {
    let itemStr = match[0];
    content = content.replace(itemRegex, '');
    
    // Update the properties
    itemStr = itemStr.replace(/date:\s*'.*'/, "date: '07 JUILLET 2026'");
    itemStr = itemStr.replace(/title:\s*'.*'/, "title: 'Comment apparaître sur Google AI Overview ? Guide pratique'");
    itemStr = itemStr.replace(/excerpt:\s*'.*'/, "excerpt: 'Découvrez le guide complet et 7 actions pratiques pour optimiser votre site web pour Google AI Overview. Un tutoriel SEO et GEO de Triaina.'");
    
    // Find the end of the array
    const searchStr = "export const BLOG_DATA: BlogItem[] = [";
    const startIdx = content.indexOf(searchStr);
    
    // Find the closing bracket of the array
    const endIdx = content.indexOf("];\n", startIdx);
    if (endIdx !== -1) {
        content = content.substring(0, endIdx) + "  " + itemStr + "\n" + content.substring(endIdx);
        fs.writeFileSync('constants.ts', content);
        console.log("Moved to bottom of array (top of page) and updated.");
    } else {
        console.log("Could not find end of array.");
    }
} else {
    console.log("Item not found");
}
