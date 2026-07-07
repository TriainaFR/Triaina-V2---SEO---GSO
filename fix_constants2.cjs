const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const searchStr = "export const BLOG_DATA: BlogItem[";
const idx = content.indexOf(searchStr);
if (idx !== -1) {
    const endIdx = content.indexOf("] = [", idx);
    if (endIdx !== -1) {
        const itemObj = content.substring(idx + searchStr.length, endIdx);
        content = content.substring(0, idx) + "export const BLOG_DATA: BlogItem[] = [" + itemObj + "," + content.substring(endIdx + 5);
        fs.writeFileSync('constants.ts', content);
        console.log('Fixed');
    }
}
