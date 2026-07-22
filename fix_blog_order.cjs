const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const regex = /\{\s*id:\s*'ia-analyse-donnees-optimisation-seo-2026'[\s\S]*?\},/m;
const match = content.match(regex);

if (match) {
  content = content.replace(match[0], '');
  
  // Find the end of the BLOG_DATA array.
  // Look for the last '}' before the '];' that closes BLOG_DATA.
  const endIdx = content.indexOf('];', content.indexOf('export const BLOG_DATA: BlogItem[] = ['));
  if (endIdx !== -1) {
    const insertPos = content.lastIndexOf('}', endIdx) + 1;
    content = content.slice(0, insertPos) + ',\n' + match[0] + content.slice(insertPos);
  }
}

fs.writeFileSync('constants.ts', content);
