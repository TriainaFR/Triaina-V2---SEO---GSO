import * as fs from 'fs';

const files = ['views/blog/EtreCiteParChatGpt.tsx', 'constants.ts'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/Share of Synthesis/g, 'Share of Voice');
  fs.writeFileSync(file, content);
}
console.log('Done');
