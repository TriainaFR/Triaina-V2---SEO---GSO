const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Remove Clock from lucide-react import if it's there
  content = content.replace(/,\s*Clock\b/, '');
  content = content.replace(/\bClock\s*,\s*/, '');
  content = content.replace(/\bClock\b/, '');
  
  // Clean up if it leaves empty {} or just spaces
  content = content.replace(/import\s*{\s*}\s*from\s*['"]lucide-react['"];\n?/, '');
  
  // Remove PAGE_TO_URL from constants import
  content = content.replace(/,\s*PAGE_TO_URL\b/, '');
  content = content.replace(/\bPAGE_TO_URL\s*,\s*/, '');
  content = content.replace(/\bPAGE_TO_URL\b/, '');
  
  // Clean up if it leaves empty {} or just spaces
  content = content.replace(/import\s*{\s*}\s*from\s*['"]\.\.\/\.\.\/constants['"];\n?/, '');

  fs.writeFileSync(path.join(dir, file), content);
}
console.log("Unused imports fixed.");
