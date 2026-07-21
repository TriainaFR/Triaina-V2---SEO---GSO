const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf8');
const match = content.match(/export const BLOG_DATA: BlogItem\[\] = \[\s*([\s\S]*?)\];/);
if (match) {
  const items = match[1].match(/id:\s*'[^']+'/g);
  console.log(items.slice(-5));
}
