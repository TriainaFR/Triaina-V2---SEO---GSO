const fs = require('fs');

const filePath = 'constants.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The element to extract and update
const itemRegex = /\{\s*id:\s*'etre-cite-par-chatgpt'[\s\S]*?\},/;
const match = content.match(itemRegex);

if (match) {
    let itemStr = match[0];
    
    // Remove the item from its current place
    content = content.replace(itemRegex, '');
    
    // Update the properties
    itemStr = itemStr.replace(/date:\s*'4 MAI 2026'/, "date: '7 JUILLET 2026'");
    itemStr = itemStr.replace(/title:\s*'Comment être cité par ChatGPT \? Le guide complet 2026'/, "title: 'Comment être cité par ChatGPT en 2026 : le guide complet'");
    
    // Insert at the beginning of BLOG_DATA
    const startIdx = content.indexOf('export const BLOG_DATA: BlogItem[] = [');
    if (startIdx !== -1) {
        const insertIdx = content.indexOf('[', startIdx) + 1;
        content = content.substring(0, insertIdx) + '\n  ' + itemStr + content.substring(insertIdx);
        fs.writeFileSync(filePath, content);
        console.log('Successfully updated BLOG_DATA in constants.ts');
    } else {
        console.log('Failed to find BLOG_DATA array');
    }
} else {
    console.log('Failed to find the item in constants.ts');
}
