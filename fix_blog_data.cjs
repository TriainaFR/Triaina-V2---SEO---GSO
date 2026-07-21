const fs = require('fs');

function fixOrder() {
  let content = fs.readFileSync('constants.ts', 'utf8');

  // We want to extract the two new articles and put them at the end.
  const regex = /({\s*id:\s*'core-web-vitals-seo-2026'[\s\S]*?},\s*{\s*id:\s*'google-business-profile-2026'[\s\S]*?},)/;
  
  const match = content.match(regex);
  if (match) {
    const articles = match[1];
    content = content.replace(articles, '');
    
    // now find the end of the BLOG_DATA array
    const endRegex = /(export const BLOG_DATA: BlogItem\[\] = \[\s*[\s\S]*?)(];)/;
    
    content = content.replace(endRegex, (fullMatch, start, end) => {
        return start + articles + end;
    });
    
    fs.writeFileSync('constants.ts', content);
    console.log("Moved to bottom");
  } else {
    console.log("Not found");
  }
}

fixOrder();
