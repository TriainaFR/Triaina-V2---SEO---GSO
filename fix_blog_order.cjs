const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const itemRegex = /\{\s*id:\s*'etre-cite-par-chatgpt'[\s\S]*?\},/;
const match = content.match(itemRegex);

if (match) {
    const itemStr = match[0];
    content = content.replace(itemRegex, '');
    
    // Find the end of the array
    const searchStr = "export const BLOG_DATA: BlogItem[] = [";
    const startIdx = content.indexOf(searchStr);
    
    // Find the closing bracket of the array
    // Since we know the file, we can look for "];" or similar after startIdx
    const endIdx = content.indexOf("];\n", startIdx);
    if (endIdx !== -1) {
        content = content.substring(0, endIdx) + "  " + itemStr + "\n" + content.substring(endIdx);
        fs.writeFileSync('constants.ts', content);
        console.log("Moved to bottom of array (top of page).");
    } else {
        console.log("Could not find end of array.");
    }
} else {
    console.log("Item not found");
}
