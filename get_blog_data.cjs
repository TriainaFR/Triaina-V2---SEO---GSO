const fs = require('fs');

const constantsContent = fs.readFileSync('constants.ts', 'utf8');
const blogDataMatch = constantsContent.match(/export const BLOG_DATA[\s\S]*?\];/);

if (blogDataMatch) {
  // Extract id and url pairs using regex
  const itemMatches = [...blogDataMatch[0].matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?url:\s*['"]\/blog\/([^'"]+)['"]/g)];
  const blogMapping = {};
  for (let match of itemMatches) {
    blogMapping[match[2]] = match[1]; // slug -> id
  }
  fs.writeFileSync('blog_mapping.json', JSON.stringify(blogMapping, null, 2));
  console.log("Extracted mapping.");
}
