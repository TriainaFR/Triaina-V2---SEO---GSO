const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const itemRegex = /\{\s*id:\s*'google-ai-overview-france'[\s\S]*?\},/;
const match = content.match(itemRegex);

if (match) {
    let itemStr = match[0];
    itemStr = itemStr.replace(/image:\s*'.*'/, "image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200'");
    itemStr = itemStr.replace(/tag:\s*'.*'/, "tag: 'GUIDE'");
    content = content.replace(itemRegex, itemStr);
    fs.writeFileSync('constants.ts', content);
    console.log("Updated image and tag");
}
