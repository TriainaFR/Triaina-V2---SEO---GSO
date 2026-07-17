const fs = require('fs');
const path = require('path');

const dir = 'views/blog/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Find all prose divs
  const proseRegex = /<div className="max-w-4xl mx-auto prose[^>]*>/g;
  const proseDivs = [...content.matchAll(proseRegex)];
  
  if (proseDivs.length === 0) {
      console.log(`No prose div in ${file}`);
      continue;
  }
  
  // The actual text is after the LAST prose div opening tag
  const lastProseDiv = proseDivs[proseDivs.length - 1];
  const startIndex = lastProseDiv.index + lastProseDiv[0].length;
  
  // It goes up to the Author Block
  const endIndex = content.indexOf('{/* Author Block */}', startIndex);
  
  if (endIndex === -1) {
      console.log(`No author block after last prose in ${file}`);
      continue;
  }
  
  let actualText = content.substring(startIndex, endIndex).trim();
  
  // If actualText ends with </div>, it's the old closing tag of the prose div.
  // We don't want it, because the new template provides the closing tag AFTER the author block.
  // Wait, let's just make sure we strip any trailing </div> that matches the prose div.
  // Actually, we can just count open and close divs inside actualText!
  let openCount = (actualText.match(/<div\b[^>]*>/g) || []).length;
  let closeCount = (actualText.match(/<\/div>/g) || []).length;
  
  while (closeCount > openCount) {
      // remove the last </div>
      const lastDivIdx = actualText.lastIndexOf('</div>');
      if (lastDivIdx !== -1) {
          actualText = actualText.substring(0, lastDivIdx) + actualText.substring(lastDivIdx + 6);
          closeCount--;
      } else {
          break;
      }
  }
  
  // Now actualText has balanced divs!
  // We just need to replace the ENTIRE first prose div to the Author Block with the clean actualText!
  
  const firstProseDiv = proseDivs[0];
  const firstProseStartIndex = firstProseDiv.index + firstProseDiv[0].length;
  
  // Reconstruct the file:
  // Everything before the FIRST prose div opening tag:
  const beforeProse = content.substring(0, firstProseStartIndex);
  // actualText
  // Everything from the Author Block to the end:
  const afterProse = content.substring(endIndex);
  
  content = beforeProse + '\n' + actualText + '\n\n            ' + afterProse;
  fs.writeFileSync(path.join(dir, file), content);
  console.log(`Fixed ${file}`);
}
