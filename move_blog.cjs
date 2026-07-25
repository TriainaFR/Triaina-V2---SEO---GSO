const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');

const regex = /  {\s*id: 'strategie-contenu-seo-2026'[\s\S]*?tag: 'GUIDE'\s*},/;
const match = content.match(regex);

if (match) {
  content = content.replace(match[0], '');
  
  // Find the end of BLOG_DATA
  const endOfBlogData = /    tag: 'SEO LOCAL'\s*\}\s*\];/;
  content = content.replace(endOfBlogData, "    tag: 'SEO LOCAL'\n  },\n" + match[0] + "\n];");
  fs.writeFileSync('constants.ts', content);
  console.log("Moved successfully.");
} else {
  console.log("Match not found.");
}
