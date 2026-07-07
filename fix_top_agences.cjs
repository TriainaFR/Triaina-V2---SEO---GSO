const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const itemRegex = /\{\s*id:\s*'top-10-agences-seo-geo-paris-2026'[\s\S]*?\},/;
const match = content.match(itemRegex);

if (match) {
    let itemStr = match[0];
    content = content.replace(itemRegex, '');
    
    // Update the properties
    itemStr = itemStr.replace(/date:\s*'.*'/, "date: '07 JUILLET 2026'");
    itemStr = itemStr.replace(/title:\s*'.*'/, "title: 'Meilleure agence GEO Paris 2026 : le classement'");
    itemStr = itemStr.replace(/excerpt:\s*'.*'/, "excerpt: 'Le classement des 5 meilleures agences GEO (Generative Engine Optimization) à Paris en 2026 : Triaina, Digimood, Yumens, Stride-up, Jalousie Agency.'");
    
    // Find the closing bracket of the array
    const endStr = "];\n\nexport const CAREERS_DATA";
    const endIdx = content.indexOf(endStr);
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
