const fs = require('fs');
let content = fs.readFileSync('src/constants.ts', 'utf8');

const regex = /\{\s*id:\s*'ia-analyse-donnees-optimisation-seo-2026'[\s\S]*?\},/m;
const match = content.match(regex);

if (match) {
  content = content.replace(match[0], '');
  content = content.replace(/export const BLOG_DATA:\s*BlogItem\[\]\s*=\s*\[/, 'export const BLOG_DATA: BlogItem[] = [');
  const arrEnd = content.lastIndexOf('];');
  if (arrEnd !== -1 && content.slice(0, arrEnd).includes('export const BLOG_DATA: BlogItem[]')) {
     const lastClosingBrace = content.lastIndexOf('}', arrEnd);
     content = content.slice(0, lastClosingBrace + 1) + ',\n' + match[0] + content.slice(lastClosingBrace + 1);
  }
}

fs.writeFileSync('src/constants.ts', content);
