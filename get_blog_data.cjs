const fs = require('fs');
const content = fs.readFileSync('constants.ts', 'utf-8');
const match = content.match(/export const BLOG_DATA: BlogItem\[\] = \[(.*?)\];/s);
if (match) {
    const list = match[1];
    const items = list.split('id: ').slice(1).map(s => s.split(',')[0].replace(/'/g, '').trim());
    console.log(items);
}
