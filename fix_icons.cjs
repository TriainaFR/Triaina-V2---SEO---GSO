const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Find all used components like <IconName
  const tags = new Set([...content.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)].map(m => m[1]));
  
  // Standard react components that are not lucide icons
  const ignore = new Set(['Helmet', 'SEO']);
  
  const iconsToImport = new Set();
  for (let tag of tags) {
      if (!ignore.has(tag)) {
          iconsToImport.add(tag);
      }
  }
  
  // Now find the import from 'lucide-react'
  const lucideRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];/;
  let match = content.match(lucideRegex);
  
  if (match) {
      let existingIcons = match[1].split(',').map(s => s.trim()).filter(s => s);
      for (let icon of existingIcons) {
          iconsToImport.add(icon);
      }
      
      const newImport = `import { ${Array.from(iconsToImport).join(', ')} } from 'lucide-react';`;
      content = content.replace(lucideRegex, newImport);
      fs.writeFileSync(path.join(dir, file), content);
      console.log(`Updated icons in ${file}`);
  }
}
