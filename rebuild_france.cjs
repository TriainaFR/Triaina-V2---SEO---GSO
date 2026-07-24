const fs = require('fs');

let template = fs.readFileSync('views/blog/TopAgencesSeoGeoParis2026.tsx', 'utf8');
let oldFranceContent = fs.readFileSync('views/blog/AgenceSeoFrance2026.tsx', 'utf8');

// Extract the html content from the old AgenceSeoFrance2026
const regexHtml = /dangerouslySetInnerHTML=\{\{ __html: \`([\s\S]*?)\` \}\}/;
const match = oldFranceContent.match(regexHtml);

if (match && match[1]) {
    let htmlContent = match[1];
    
    let newComponent = template.replace(/TopAgencesSeoGeoParis2026/g, 'AgenceSeoFrance2026');
    newComponent = newComponent.replace(/top-10-agences-seo-geo-paris-2026/g, 'agence-seo-france-2026');
    newComponent = newComponent.replace(/top-agences-seo-geo-paris/g, 'agence-seo-france');
    
    newComponent = newComponent.replace(regexHtml, `dangerouslySetInnerHTML={{ __html: \`${htmlContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}`);
    
    fs.writeFileSync('views/blog/AgenceSeoFrance2026.tsx', newComponent);
} else {
    console.error("Could not find HTML content in AgenceSeoFrance2026.tsx");
}
